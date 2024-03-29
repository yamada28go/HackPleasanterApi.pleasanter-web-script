// プリザンターのAPIで取得される独自形式のAPI
export class PleasanterDate {
  constructor(private _rawString: string) {}

  public get(): Date | undefined {
    // プリザンターで想定されるデータ型は以下となる
    //
    // 2020-11-01T00:00:00
    const n = Date.parse(this._rawString);
    const r = new Date(n);

    // プリザンターで値が未入力の場合、
    // 以下値が入ってくることがある。
    // このような場合、未入力扱いとする
    // [サンプル]
    //1899-12-30T00:00:00
    if (r.getTime() < 0) {
      // 1899年はunix time のエポックより古いので、
      // 当然未入力と判断する
      return undefined;
    } else {
      return r;
    }
  }

  public setDate(vale: Date) {
    //this._rawString = vale;
  }

  public setString(vale: string) {
    this._rawString = vale;
  }

  /**  Pleasanter 内部で通用するstring型を返す
   */
  public getPleasanterDateString(): string {
    return "";
  }
}