
export type wmInlineType = 'text'|'link';
export type wmBlockType = 'heading'|'paragraph'|'blockquote'|'image';
export type wmListType = 'list'|'listItem';
export type wmTableType = 'table'|'tableRow'|'tableCell';
export type wmNodeType = 'document'|wmBlockType|wmInlineType|wmListType|wmTableType;
export type wmAlignType = 'left'|'center'|'right'|'justify';
export type wmVertAlignType = 'top'|'middle'|'bottom';
export type wmTextStyle = 'bold'|'italic'|'underline'|'overline'|'strikethrough'|'super'|'sub';

export interface wmEditable {
  type: wmNodeType,
  align?: wmAlignType,
  children?: wmEditable[]
}

export interface wmText extends wmEditable {
  type: 'text'|'link',
  style?: wmTextStyle[],
  value?: string
}

export interface wmLink extends wmText {
  type: 'link',
  url?: string
}

export interface wmHeading extends wmEditable {
  type: 'heading',
  level: number,
  children?: wmText[]
}

export interface wmList extends wmEditable {
  type: 'list',
  ordered?: boolean,
  start?: number
}

export interface wmListItem extends wmEditable {
  type: 'listItem',
  children?: wmText[]
}

export interface wmTable extends wmEditable {
  type: 'table',
  children?: wmTableRow[]
}

export interface wmTableRow extends wmEditable {
  type: 'tableRow',
  head?: boolean,
  foot?: boolean,
  children?: wmTableCell[]
}

export interface wmTableCell extends wmEditable {
  type: 'tableCell',
  valign?: wmVertAlignType,
  colspan?: number,
  children?: wmText[]
}

export interface wmImage extends wmEditable {
  type: 'image',
  url: string,
  alt?: string,
  title?: string
}

export interface wmDocument extends wmEditable {
  type: 'document',
  header: {
    author?: string,
    version?: string
  }
}