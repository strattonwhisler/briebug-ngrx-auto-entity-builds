import { EntityAction } from './entity-action';
/**
 * Updates a single entity, corresponding to HTTP PATCH operation.
 *
 * PATCH: Update just the supplied attributes of the entity
 */
export declare class Update<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class UpdateSuccess<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class UpdateFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, error: any, entity: TModel, criteria?: any, correlationId?: string);
}
/**
 * Updates many entities, corresponding to HTTP PATCH operation.
 *
 * PATCH: Update just the supplied attributes of the entities
 */
export declare class UpdateMany<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class UpdateManySuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class UpdateManyFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, error: any, entities: TModel[], criteria?: any, correlationId?: string);
}
