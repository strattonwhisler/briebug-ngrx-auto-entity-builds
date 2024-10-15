import { EntityAction } from './entity-action';
/**
 * Deletes a single entity, corresponding to HTTP DELETE operation
 */
export declare class Delete<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class DeleteSuccess<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class DeleteFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, error: any, entity: TModel, criteria?: any, correlationId?: string);
}
/**
 * Deletes many entities, corresponding to HTTP DELETE operation
 */
export declare class DeleteMany<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class DeleteManySuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class DeleteManyFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, error: any, entities: TModel[], criteria?: any, correlationId?: string);
}
