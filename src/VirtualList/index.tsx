import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './styles/index.module.less';

interface IpropsVirtual {
  height: number;
  itemHeight: number;
  dataSource: any[];
}
type Iprops = IpropsVirtual;

const List: React.FC<Partial<Iprops>> = (props) => {
  const {
    height = 200,
    itemHeight = 20,
    dataSource = [1,2,3,4,5,6,7,8,9,0]
  } = props
  const [startIndex, setStartIndex] = useState(0)
  const warpRef = useRef(null)

  const scrollHandle = (event:any) => {
    const { scrollTop } = event.currentTarget;
    setStartIndex(Math.floor(scrollTop / itemHeight) || 0)
  }

  return (
    <>
      <span>{startIndex}</span>
      <div ref={warpRef} onScroll={scrollHandle}className={styles.virtualWarp} style={{height: height}}>
        <div
          className={styles.virtualContent}
          style={{height: dataSource.length * itemHeight}}
        >
          <div className={styles.virtualFix} style={{top: (startIndex ) * itemHeight}}>
            {dataSource.slice(startIndex, startIndex + Math.ceil(height / itemHeight)).map((_v, i) => {
              return (
                <div key={_v.value} className="virtual-item" style={{height: itemHeight}}>
                  {_v.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  )
};

export default List;
