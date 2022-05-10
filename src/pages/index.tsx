import React from 'react';
import './index.less';

export default function () {
  return (
    <div>
      <header>
        <div id="logo">
          <img width="32px" height="32px" src="@/assets/icon.png" />
        </div>
        <button type="button" id="open-file">
          Open File
        </button>
        <input id="input-dialog" type="file" style="display: none" />
      </header>
      <div id="page-content"></div>
    </div>
  );
}
