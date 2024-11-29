import classnames from 'classnames';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/index.module.less';
import { createPortal } from 'react-dom';

interface IpropsDrawer {
  visible: boolean; // 是否展示
  title: React.ReactNode; // 标题
  width?: number; // 宽度
  onClose?: () => void; // 回调方法
  zIndex?: number; // 图层
  placement: string; // 弹出方向
  mask: boolean; // 是否存在蒙版
  maskClosable: boolean; // 蒙版是否可关闭
  closable: boolean; // 是否显示关闭按钮
  destroyOnClose: boolean; // 关闭时，是否销毁抽屉内容
  inBody: HTMLElement | false; // 挂在dom
  drawerStyle: any; // 抽屉样式
  children: any;
}
type Iprops = IpropsDrawer;

const Drawer: React.FC<Partial<Iprops>> = (props) => {
  const {
    visible,
    title = '标题',
    closable = true,
    width = 300,
    onClose,
    zIndex = 1000,
    placement = 'right',
    mask = true,
    maskClosable = true,
    destroyOnClose = true,
    inBody = document.body,
    drawerStyle,
  } = props;

  // 控制关闭弹框清空弹框里面的元素
  const [clearContentDom, setClearContentDom] = useState(false);
  // 控制drawer 的显示隐藏
  const [drawerVisible, setDrawerVisible] = useState(visible);
  const contentRef = useRef(null)
  const maskRef = useRef(null)

  useEffect(() => {
    setDrawerVisible(() => {
      if (inBody !== false && visible) {
        inBody.style.overflow = 'hidden';
      }
      return visible;
    });
    if (visible) {
      setClearContentDom(false);
    }
  }, [visible]);

  // 点击弹框关闭
  const handleClose = () => {
    if (contentRef.current && maskRef.current) {
      contentRef.current.style.transform = 'translateX(100%)';
      maskRef.current.style.backgroundColor= 'rgba(0,0,0,0)';
    }
    setTimeout(() => {
      setDrawerVisible((prev) => {
        if (inBody !== false && prev) {
          inBody.style.overflow = 'auto';
        }
        return false;
      });
      onClose && onClose();
      if (destroyOnClose) {
        setClearContentDom(true);
      }
    }, 300) // 配合过渡动画的0.3s
  };

  if (!visible && !drawerVisible) {
    // 防止在为展开时渲染内容
    return
  }
  // todo 使用动画结束回调更新状态，取代定时器
  // const animated = document.getElementById('contentRef');
  // if (animated) {
  //   console.log(animated, 8);
  //   animated.addEventListener("animationend", () => {
  //     console.log("Animation ended");
  //   });
  // }
  const drawerDom = (
    <div
      className={styles.drawerWarp}
      style={{
        width: "100%",
        zIndex,
        position: inBody === false ? 'absolute' : 'fixed',
      }}
    >
      {mask && (
        <div
          className={styles.drawerMask}
          ref={maskRef}
          onClick={maskClosable ? handleClose : undefined}
        ></div>
      )}
      <div
        className={classnames(styles.drawerContent, drawerVisible ? styles.active : '')}
        ref={contentRef}
        style={{
          width,
          [placement]: 0,
          ...drawerStyle,
        }}
      >
        {title && <div className={styles.titleDrawer}>{title}</div>}
        <div style={{ padding: 16 }}>{clearContentDom ? null : props.children}</div>
        {closable && (
          <span className={styles.closeDrawerBtn} onClick={handleClose}>
            X
          </span>
        )}
      </div>
    </div>
  );

  // inBody 默认你是body, 如果为 false 则挂在最近的父节点上， 如果自己传入一个要
  // 挂在的对象下，则需要用到  createPortal
  return inBody === false && !inBody
    ? drawerDom
    : createPortal(drawerDom, inBody);
};

export default Drawer;
