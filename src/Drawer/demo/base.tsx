// src/Drawer/demo/base.tsx
import React, { useState, useRef } from 'react';
import { Drawer, Button } from 'like-harmony-ui';

export default () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpen1, setIsOpen1] = useState<boolean>(false)
  const custParent = useRef(null)
  const changeOpen = () => {
    setIsOpen((pre) => !pre)
  }
  const changeOpen1 = () => {
    setIsOpen1((pre) => !pre)
  }
  return (
    <>
      <Button onClick={changeOpen}>打开body抽屉</Button> &nbsp;
      <Button onClick={changeOpen1}>打开cust抽屉</Button> &nbsp;
      <div ref={custParent}></div>
      <Drawer
        visible={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <Drawer
        visible={isOpen1}
        onClose={() => setIsOpen1(false)}
        inBody={custParent.current!}
      />
    </>
  );
}
