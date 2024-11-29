// src/Button/demo/base.tsx

import React from 'react';
import { Button } from 'like-harmony-ui';

export default () => {
  return (
    <>
      <Button>默认按钮</Button> &nbsp;
      <Button type="primary">主要样式</Button> &nbsp;
      <Button onClick={() => alert('回调方法')}>回调方法</Button> &nbsp;
      <Button>
        <a href="">自定义children</a>
      </Button>
    </>
  );
}
