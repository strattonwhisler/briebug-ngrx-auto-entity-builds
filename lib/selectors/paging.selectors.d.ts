import { Page, Range } from '../models';
import { IEntityPaging } from '../util/entity-state';
export declare const mapToCurrentPage: (paging: IEntityPaging) => Page | undefined;
export declare const mapToCurrentRange: (paging: IEntityPaging) => Range | undefined;
export declare const mapToTotalPageable: (paging: IEntityPaging) => number;
