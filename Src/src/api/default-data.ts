/**
 *
 * RecordDataItemsのデフォルトデータ型を生成する
 *
 */
export function makeDefault_RecordDataItems() {
  const x: RecordDataItems = {
    SiteId: undefined,
    IssueId: undefined,
    ResultId: undefined,
    Body: undefined,
    StartTime: undefined,
    CompletionTime: undefined,
    WorkValue: undefined,
    ProgressRate: undefined,
    RemainingWorkValue: undefined,
    UpdateTime: undefined,
    Ver: undefined,
    Title: undefined,
    Status: undefined,
    Manager: undefined,
    Owner: undefined,
    Comments: undefined,
    Creator: undefined,
    Updator: undefined,
    CreatedTime: undefined,
    ItemTitle: undefined,

    ClassHash: undefined,
    NumHash: undefined,
    DateHash: undefined,
    DescriptionHash: undefined,
    CheckHash: undefined,
  };

  return x;
}

export function makeDefault_ViewItems(): ViewItems {
  const x: ViewItems = {
    Incomplete: undefined,
    Own: undefined,
    NearCompletionTime: undefined,
    Delay: undefined,
    Overdue: undefined,
    Search: undefined,

    ColumnFilterHash: undefined,
    ColumnSorterHash: undefined,
  };

  return x;
}
