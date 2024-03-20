/** プリザンター画面スクリプトにおける基本API の　Asyncラッピング  */

// #region item

/**
 * Pleasanterの`apiGet`関数を非同期関数としてラップし、awaitの使用を可能にします。
 * この関数は、元のコールバック構造をPromiseに抽象化し、非同期API呼び出しを簡素化します。
 * @param id apiGetリクエストのIDです。
 * @param data リクエストのためのオプショナルなデータオブジェクトです。
 * @returns `apiGet`呼び出しから返されたデータで解決するPromiseか、エラーで拒否するPromiseを返します。
 */
export async function apiGetAsync(
  id: number,
  data?: DataOfGetRequest,
): Promise<GetResponseData> {
  return new Promise((resolve, reject) => {
    $p.apiGet({
      id,
      data,
      done: (data: GetResponseData) => resolve(data),
      fail: (data: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${data.status}, ${data.statusText}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiCreate関数を非同期でラップします。
 * 新規レコードを作成し、その結果をPromiseで返します。
 * @param id apiGetリクエストのIDです。
 * @param {RecordDataItems} recordDataItems 新規レコード作成のためのデータ項目。
 * @returns {Promise<OperationResponseJSON>} 操作結果を含むPromiseオブジェクト。
 */
export function apiCreateAsync(
  id: number,
  recordDataItems: RecordDataItems,
): Promise<OperationResponseJSON> {
  return new Promise((resolve, reject) => {
    $p.apiCreate({
      id,
      data: recordDataItems,
      done: (data: OperationResponseJSON) => resolve(data),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiDelete関数を非同期でラップします。
 * 指定したレコードを削除し、その結果をPromiseで返します。
 * @param id レコードを削除するためのID。
 * @returns {Promise<OperationResponseJSON>} 操作結果を含むPromiseオブジェクト。
 */
export function apiDeleteAsync(id: number): Promise<OperationResponseJSON> {
  return new Promise((resolve, reject) => {
    $p.apiDelete({
      id,
      done: (data: OperationResponseJSON) => resolve(data),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiUpdate関数を非同期でラップします。
 * 指定したレコードを更新し、その結果をPromiseで返します。
 * @param id 更新するレコードのID。
 * @param data 更新するレコードのデータ。
 * @returns {Promise<OperationResponseJSON>} 操作結果を含むPromiseオブジェクト。
 */
export function apiUpdateAsync(
  id: number,
  data: RecordDataItems,
): Promise<OperationResponseJSON> {
  return new Promise((resolve, reject) => {
    $p.apiUpdate({
      id,
      data,
      done: (response: OperationResponseJSON) => resolve(response),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

/**
 * 指定された添付ファイルデータに基づき、サーバーからバイナリデータを非同期で取得します。
 *
 * @async
 * @function apiGetAttachmentsDataAsync
 * @param {AttachmentsData} info - 添付ファイル情報。
 * @returns {Promise<ArrayBuffer>} 取得したバイナリデータのArrayBuffer。レスポンスが正常でない場合はエラーをスローします。
 * @throws {Error} レスポンスが正常でない場合にエラーをスローします。エラーメッセージにはHTTPステータスコードが含まれます。
 */
export async function apiGetAttachmentsDataAsync(
  info: AttachmentsData,
): Promise<ArrayBuffer> {
  const url = `${window.location.origin}/binaries/${info.Guid}/download`;

  // GETリクエストでデータを取得
  const response = await fetch(url);

  // レスポンスが正常か確認
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  // response.bodyを使用してストリームを取得
  const buf = await response.arrayBuffer();
  return buf;
}


// #endregion

// #region user

/**
 * PleasanterのapiUsersGet関数を非同期でラップします。
 * 指定した条件に基づいてユーザー情報を取得し、その結果をPromiseで返します。
 * @param id ユーザー取得のためのリクエストID。
 * @returns {Promise<GetResponseUserData>} ユーザーデータを含むPromiseオブジェクト。
 */
export function apiUsersGetAsync(id: number): Promise<GetResponseUserData> {
  return new Promise((resolve, reject) => {
    $p.apiUsersGet({
      id,
      done: (data: GetResponseUserData) => resolve(data),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiUsersUpdate関数を非同期でラップします。
 * 指定したユーザーデータに基づいてユーザー情報を更新し、その結果をPromiseで返します。
 * @param id 更新するユーザーのID。
 * @param userData 更新するユーザーのデータ。
 * @returns {Promise<OperationResponseJSON>} 更新結果を含むPromiseオブジェクト。
 */
export function apiUsersUpdateAsync(
  id: number,
  userData: UserResponseData,
): Promise<OperationResponseJSON> {
  return new Promise((resolve, reject) => {
    $p.apiUsersUpdate({
      id,
      data: userData,
      done: (data: OperationResponseJSON) => resolve(data),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiUsersDelete関数を非同期でラップします。
 * 指定したユーザーIDに基づいてユーザー情報を削除し、その結果をPromiseで返します。
 * @param id 削除するユーザーのID。
 * @returns {Promise<OperationResponseJSON>} 削除結果を含むPromiseオブジェクト。
 */
export function apiUsersDeleteAsync(
  id: number,
): Promise<OperationResponseJSON> {
  return new Promise((resolve, reject) => {
    $p.apiUsersDelete({
      id,
      done: (data: OperationResponseJSON) => resolve(data),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

// #endregion

// #region site

/**
 * PleasanterのapiGetSite関数を非同期でラップします。
 * 指定したサイト情報を非同期で取得し、その結果をPromiseで返します。
 * @param id サイト情報を取得するためのサイトID。
 * @returns {Promise<SiteResponseData>} 取得したサイト情報を含むPromiseオブジェクト。
 */
export function apiGetSiteAsync(id: number): Promise<SiteResponseData> {
  return new Promise((resolve, reject) => {
    $p.apiGetSite({
      id,
      done: (data: SiteResponseData) => resolve(data),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiDeleteSite関数を非同期でラップします。
 * 指定したサイトを非同期で削除し、その結果をPromiseで返します。
 * @param id 削除するサイトのID。
 * @returns {Promise<void>} 削除操作の完了を表すPromiseオブジェクト。
 */
export function apiDeleteSiteAsync(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    $p.apiDeleteSite({
      id,
      done: () => resolve(),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiUpdateSite関数を非同期でラップします。
 * 指定したサイト情報を非同期で更新し、その結果をPromiseで返します。
 *
 * @param id 更新するサイトのID。
 * @param siteData 更新するサイトの情報を含むオブジェクト。
 * @returns {Promise<void>} 更新操作の完了を表すPromiseオブジェクト。
 */
export function apiUpdateSiteAsync(
  id: number,
  siteData: SiteData,
): Promise<void> {
  return new Promise((resolve, reject) => {
    $p.apiUpdateSite({
      id: id,
      data: siteData,
      done: (data) => resolve(),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

/**
 * PleasanterのapiCreateSite関数を非同期でラップします。
 * 新しいサイト情報を非同期で作成し、その結果をPromiseで返します。
 *
 *  @param id 対象サイトのID。
 * @param siteData 新規作成するサイトの情報を含むオブジェクト。
 * @returns {Promise<number>} 新規作成されたサイトのIDを含むPromiseオブジェクト。
 */
export function apiCreateSiteAsync(
  id: number,
  siteData: SiteData,
): Promise<number> {
  return new Promise((resolve, reject) => {
    $p.apiCreateSite({
      id: id,
      data: siteData,
      done: (data) => resolve(data.Id),
      fail: (error: FailDataType) =>
        reject(
          new Error(
            `API呼び出しに失敗しました。ステータス: ${error.status}, ${error.statusText}, メッセージ: ${error.responseJSON.Message}`,
          ),
        ),
    });
  });
}

// #endregion

// #region group

/**
 * Pleasanter APIの `apiGroupsGet` メソッドを使用して、非同期にグループ情報を取得します。
 * この関数バージョンでは、`done`、`fail`、`always` コールバックをパラメータとして使用しません。
 * 成功時にグループデータで解決するプロミス、または失敗時にエラーでリジェクトするプロミスを返します。
 *
 * @param {number} id - リクエストのIDで、通常はサイトや特定のコンテキストに関連します。
 * @param {ViewItems} viewItems - グループデータをフィルタリングまたはソートするためのビューアイテム。
 * @returns {Promise<GroupsResponse>} - グループレスポンスデータで解決するプロミス。
 */
export async function getGroupsAsync(
  id: number,
  viewItems: ViewItems,
): Promise<GroupsResponse> {
  return new Promise((resolve, reject) => {
    $p.apiGroupsGet({
      id,
      data: viewItems,
      done: (data: GroupsResponse) => {
        resolve(data);
      },
      fail: (data: FailDataType) => {
        reject(data);
      },
    });
  });
}

/**
 * Pleasanter APIの `apiGroupsDelete` メソッドを非同期で呼び出し、グループ情報の削除を行います。
 * この関数はasync/await構文で使用されることを想定しており、Promiseベースの実装により
 * 非同期処理の結果を簡潔に扱うことができます。
 *
 * @param {number} id - 削除するグループのID。
 * @returns {Promise<void>} - 処理の成功または失敗を示すPromiseオブジェクト。
 */
async function deleteGroupAsync(id: number): Promise<void> {
  return new Promise((resolve, reject) => {
    $p.apiGroupsDelete({
      id,
      done: () => {
        resolve();
      },
      fail: (data: FailDataType) => {
        reject(
          new Error(`削除に失敗しました: ${data.status} ${data.statusText}`),
        );
      },
    });
  });
}
// #endregion
