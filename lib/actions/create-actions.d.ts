import { EntityAction } from './entity-action';
/**
 * Creates a single entity, corresponding to HTTP POST operation
 */
export declare class Create<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class CreateSuccess<TModel> extends EntityAction<TModel> {
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, criteria?: any, correlationId?: string);
}
export declare class CreateFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entity: TModel;
    criteria?: any;
    constructor(type: new () => TModel, error: any, entity: TModel, criteria?: any, correlationId?: string);
}
/**
 * Creates many entities, corresponding to HTTP POST operation
 */
export declare class CreateMany<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class CreateManySuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
export declare class CreateManyFailure<TModel> extends EntityAction<TModel> {
    error: any;
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, error: any, entities: TModel[], criteria?: any, correlationId?: string);
}
