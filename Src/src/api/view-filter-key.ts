// フィルタリング用のキー情報
export class ViewFilterKey<Model> {
  constructor(public readonly description: string) {}

  /**
   * @summary フィルタ用のキーを設定する
   */
  public keys: string[] = [];

  /**
   * @summary フィルタ用のHashを取得する
   */
  public getFilterHash() {
    let r: { [key: string]: string } = {};
    r[this.description] = JSON.stringify(this.keys);
    return r;
  }
}
