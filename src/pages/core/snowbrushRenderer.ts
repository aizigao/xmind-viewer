import { SheetData } from './model/sheet';
import SheetViewController from './viewController/sheetViewController';
import { Svg } from '@svgdotjs/svg.js';
import { Workbook } from './model/workbook';

export interface RenderOptions {
  sheetIndex?: number;
}

export class SnowbrushRenderer {
  private _data: SheetData[];
  private _sheetViewController: SheetViewController;

  constructor(data: SheetData[]) {
    if (!data) {
      throw new Error('Sheet data is required.');
    }

    if (data.length === 0) {
      throw new Error('The sheet data should not be empty.');
    }

    this._data = data;
  }

  render(options: RenderOptions = { sheetIndex: 0 }) {
    const { sheetIndex } = options;

    // workbook 引从model, 为数据层
    const workbook = new Workbook(this._data);
    console.log({ data: this._data, workbook });
    // 获取数据中的 sheet 数据
    const sheet = workbook.getSheetByIndex(sheetIndex);

    // 由数据创建控制器, view 由控制器中创建
    this._sheetViewController = new SheetViewController(sheet);
    this._sheetViewController.init();

    return this._sheetViewController.getCanvas();
  }

  get svg(): Svg {
    return this._sheetViewController?.getCanvas();
  }

  get bounds() {
    return this._sheetViewController?.centralBranchViewController.bounds;
  }

  transform(x: number, y: number) {
    this._sheetViewController.transform(x, y);
  }
}
