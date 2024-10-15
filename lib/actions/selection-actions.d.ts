import { EntityIdentity } from '../types/entity-identity';
import { EntityAction } from './entity-action';
/**
 * Selects a single entity in the store by the entity model
 */
export declare class Select<TModel> extends EntityAction<TModel> {
    entity: TModel;
    constructor(type: new () => TModel, entity: TModel, correlationId?: string);
}
/**
 * Selects a single entity in the store by the entity key
 */
export declare class SelectByKey<TModel> extends EntityAction<TModel> {
    entityKey: EntityIdentity;
    constructor(type: new () => TModel, entityKey: EntityIdentity, correlationId?: string);
}
/**
 * Selects many entities in the store by the entity models
 */
export declare class SelectMany<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    constructor(type: new () => TModel, entities: TModel[], correlationId?: string);
}
/**
 * Selects more entities in the store by the entity models
 */
export declare class SelectMore<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    constructor(type: new () => TModel, entities: TModel[], correlationId?: string);
}
/**
 * Selects many entities in the store by the entity keys
 */
export declare class SelectManyByKeys<TModel> extends EntityAction<TModel> {
    entitiesKeys: EntityIdentity[];
    constructor(type: new () => TModel, entitiesKeys: EntityIdentity[], correlationId?: string);
}
/**
 * Selects more entities in the store by the entity keys
 */
export declare class SelectMoreByKeys<TModel> extends EntityAction<TModel> {
    entitiesKeys: EntityIdentity[];
    constructor(type: new () => TModel, entitiesKeys: EntityIdentity[], correlationId?: string);
}
/**
 * Indicates the selection of a single entity in the store
 */
export declare class Selected<TModel> extends EntityAction<TModel> {
    entity: TModel | EntityIdentity;
    constructor(type: new () => TModel, entity: TModel | EntityIdentity, correlationId?: string);
}
/**
 * Indicates the selection of many entities in the store
 */
export declare class SelectedMany<TModel> extends EntityAction<TModel> {
    entities: Array<TModel | EntityIdentity>;
    constructor(type: new () => TModel, entities: Array<TModel | EntityIdentity>, correlationId?: string);
}
/**
 * Indicates the selection of more entities in the store
 */
export declare class SelectedMore<TModel> extends EntityAction<TModel> {
    entities: Array<TModel | EntityIdentity>;
    constructor(type: new () => TModel, entities: Array<TModel | EntityIdentity>, correlationId?: string);
}
