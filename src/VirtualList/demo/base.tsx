// src/Drawer/demo/base.tsx
import React, { useState, useRef } from 'react';
import { VirtualList } from 'like-harmony-ui';

export default () => {
  const dataSource = []
  for (let index = 0; index < 100; index++) {
    dataSource.push({
      name: `测试${index}`,
      value: index,
    });
  }
  return (
    <>
      <VirtualList  dataSource={dataSource} />
    </>
  );
}
