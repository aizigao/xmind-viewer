import React, { useEffect } from 'react';
import './index.less';
import main from './main';
import logo from '@/assets/icon.png';

export default function () {
  useEffect(() => {
    main();
  }, []);
  return (
    <div>
      <header>
        <div id="logo">
          <img width="32px" height="32px" src={logo} />
        </div>
        <button type="button" id="open-file">
          Open File
        </button>
        <input id="input-dialog" type="file" style={{ display: 'none' }} />
      </header>
      <div id="page-content"></div>
    </div>
  );
}
