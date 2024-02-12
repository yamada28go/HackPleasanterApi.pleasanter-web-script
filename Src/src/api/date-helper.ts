// プリザンターのAPIで取得される独自形式のAPI
export class PleasanterDate {
  constructor(private _rawString: string) {}

  public get(): Date {
    const n = Date.parse(this._rawString);
    return new Date(n);
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
