import { EntityAction } from './entity-action';
/**
 * Updates or inserts a single entity, corresponding to HTTP PUT or POST operation.
 *
 */
export declare class Upsert<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class UpsertSuccess<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class UpsertFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, error: any, entity: TModel, criteria?: any, correlationId?: string);
}
/**
 * Updates or inserts many entities, corresponding to HTTP PUT or POST operation.
 *
 */
export declare class UpsertMany<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class UpsertManySuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class UpsertManyFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, error: any, entities: TModel[], criteria?: any, correlationId?: string);
}
