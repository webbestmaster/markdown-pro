// @flow

// import type {LineDataType} from '../../parser/parser-type';

export type CellAlignType = 'left' | 'center' | 'right';

export type CellTagNameType = 'td' | 'th';

export type RenderLineDataType<Type> = <Type>(lineData: Type, lineDataIndex: number, lineDataList: Array<Type>) => string;
