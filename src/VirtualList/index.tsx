import React, { useState, useEffect, useRef } from 'react';
import styles from './styles/index.module.less';

interface IpropsVirtual {
  height: number;
  itemHeight: number;
  dataSource: any[];
}

const List: React.FC<Partial<IpropsVirtual>> = (props) => {
  const {
    height = 200,
    itemHeight = 20,
    dataSource = []
  } = props
  const [startIndex, setStartIndex] = useState(0)

  const scrollHandle = (event:any) => {
    const { scrollTop } = event.currentTarget;
    setStartIndex(Math.floor(scrollTop / itemHeight) || 0)
  }

  return (
    // 滚动框组件用来监听滚动事件，并计算index起始索引
    <div
      onScroll={scrollHandle}
      className={styles.virtualWarp}
      style={{height: height}}
    >
      {/* 撑开滚动组件，不能设置relative定位 */}
      <div
        className={styles.virtualContent}
        style={{height: dataSource.length * itemHeight}}
      >
        {/* absolute定位展示区位置 */}
        <div className={styles.virtualFix} style={{top: startIndex  * itemHeight - (startIndex < 3 ? startIndex * 20 : 60)}}>
          {dataSource.slice(Math.max(0, startIndex - 3), startIndex + Math.ceil(height / itemHeight) + 3).map((_v, i) => {
            return (
              <div key={_v.value} className="virtual-item" style={{height: itemHeight}}>
                {_v.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
};

export default List;
