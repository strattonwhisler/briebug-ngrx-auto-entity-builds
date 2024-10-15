import { EntityIdentity } from '../types/entity-identity';
import { EntityAction } from './entity-action';
/**
 * Deletes a single entity by key, corresponding to HTTP DELETE operation
 */
export declare class DeleteByKey<TModel> extends EntityAction<TModel> {
    key: EntityIdentity;
    criteria?: any;
    constructor(type: new () => TModel, key: EntityIdentity, criteria?: any, correlationId?: string);
}
export declare class DeleteByKeySuccess<TModel> extends EntityAction<TModel> {
    key: EntityIdentity;
    criteria?: any;
    constructor(type: new () => TModel, key: EntityIdentity, criteria?: any, correlationId?: string);
}
export declare class DeleteByKeyFailure<TModel> extends EntityAction<TModel> {
    error: any;
    key: EntityIdentity;
    criteria?: any;
    constructor(type: new () => TModel, error: any, key: EntityIdentity, criteria?: any, correlationId?: string);
}
/**
 * Deletes many entities, corresponding to HTTP DELETE operation
 */
export declare class DeleteManyByKeys<TModel> extends EntityAction<TModel> {
    keys: EntityIdentity[];
    criteria?: any;
    constructor(type: new () => TModel, keys: EntityIdentity[], criteria?: any, correlationId?: string);
}
export declare class DeleteManyByKeysSuccess<TModel> extends EntityAction<TModel> {
    keys: EntityIdentity[];
    criteria?: any;
    constructor(type: new () => TModel, keys: EntityIdentity[], criteria?: any, correlationId?: string);
}
export declare class DeleteManyByKeysFailure<TModel> extends EntityAction<TModel> {
    error: any;
    keys: EntityIdentity[];
    criteria?: any;
    constructor(type: new () => TModel, error: any, keys: EntityIdentity[], criteria?: any, correlationId?: string);
}
