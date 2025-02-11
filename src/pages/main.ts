import contentData from './content.json';
import JSZip from 'jszip';
import { loadFromXMind, SnowbrushRenderer } from './core/index';
const main = () => {
  load(contentData);

  document.getElementById('input-dialog').addEventListener('input', function () {
    const inputEle = this;
    if (inputEle.files.length === 0) {
      return;
    }

    const file = inputEle.files[0];
    const fileName = inputEle.value;
    const reader = new FileReader();
    reader.onload = (e) => {
      const jszip = new JSZip();
      return Promise.all([
        Promise.resolve(fileName),
        jszip.loadAsync(e.target.result).then((zip) => {
          loadFromXMind(zip).then((result) => {
            load(result.sheets);
          });
        }),
      ]);
    };

    reader.readAsArrayBuffer(file);
  });

  document.getElementById('open-file').addEventListener('click', function () {
    const input = document.getElementById('input-dialog');
    input.click();
  });

  function load(data) {
    const container = document.getElementById('page-content');
    if (container.children.length > 0) {
      container.innerHTML = '';
    }

    const renderer = new SnowbrushRenderer(data);
    console.log({ renderer });

    renderer.render();
    const rendererBounds = renderer.bounds;

    const clientWidth = container.clientWidth;
    const clientHeight = container.clientHeight;
    const width = Math.max(clientWidth, rendererBounds.width);
    const height = Math.max(clientHeight, rendererBounds.height);

    const rendererContainer = document.createElement('div');
    rendererContainer.setAttribute(
      'style',
      `width: ${width}px; height: ${height}px; position: relative;`,
    );
    rendererContainer.className = 'sheet-container';
    renderer.svg.addTo(rendererContainer);
    rendererContainer.style.backgroundColor = renderer.svg.node.style.backgroundColor;
    container.append(rendererContainer);

    renderer.transform(rendererBounds.x, height + rendererBounds.y);
    container.scrollTo(width - clientWidth / 2, height - clientHeight / 2);
  }
};

export default main;
