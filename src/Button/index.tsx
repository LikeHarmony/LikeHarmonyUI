import React, { memo } from 'react';
import './styles/index.less' // 引入样式
export interface ButtonProps {
  /** 按钮类型 */
  type?: 'primary' | 'default';
  /** 按钮文字 */
  children?: React.ReactNode;
  /** 回调方法 */
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

/** 按钮组件 */
const Button: React.FC<ButtonProps> = (props) => {
  const { type = 'default', children, onClick } = props
  return (
    <button
      type='button'
      className={`dumi-btn ${type ? 'dumi-btn-' + type : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(Button);
