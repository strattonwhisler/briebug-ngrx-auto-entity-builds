import { EntityAction } from './entity-action';
/**
 * Replaces a single entity, corresponding to HTTP PUT operation.
 *
 * PUT: Replace the entity with the one supplied in the request
 */
export declare class Replace<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class ReplaceSuccess<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class ReplaceFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, error: any, entity: TModel, criteria?: any, correlationId?: string);
}
/**
 * Replaces many entities, corresponding to HTTP PUT operation.
 *
 * PUT: Replace the entities with the ones supplied in the request
 */
export declare class ReplaceMany<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class ReplaceManySuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class ReplaceManyFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, error: any, entities: TModel[], criteria?: any, correlationId?: string);
}
