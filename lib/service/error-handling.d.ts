import { IEntityInfo } from '../actions/entity-info';
export declare const notImplemented: (method: string, entityInfo: IEntityInfo) => string;
export declare const notAFunction: (method: string, entityInfo: IEntityInfo) => string;
export declare const logAndThrow: (method: string, err: any, entityInfo: IEntityInfo) => import("rxjs").Observable<never>;
export declare const logServiceLocateFailure: (entityInfo: IEntityInfo, serviceName?: string) => void;
export declare const logErrorDetails: (error: any) => void;
