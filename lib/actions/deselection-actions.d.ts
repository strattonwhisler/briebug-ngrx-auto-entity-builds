import { EntityIdentity } from '../types/entity-identity';
import { EntityAction } from './entity-action';
/**
 * De-selects a single entity in the store
 */
export declare class Deselect<TModel> extends EntityAction<TModel> {
    constructor(type: new () => TModel, correlationId?: string);
}
/**
 * De-selects many entities in the store
 */
export declare class DeselectMany<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    constructor(type: new () => TModel, entities: TModel[], correlationId?: string);
}
/**
 * De-selects many entities in the store by entity keys
 */
export declare class DeselectManyByKeys<TModel> extends EntityAction<TModel> {
    entitiesKeys: EntityIdentity[];
    constructor(type: new () => TModel, entitiesKeys: EntityIdentity[], correlationId?: string);
}
/**
 * De-selects all entities in the store
 */
export declare class DeselectAll<TModel> extends EntityAction<TModel> {
    constructor(type: new () => TModel, correlationId?: string);
}
/**
 * Indicates the de-selection of a single entity in the store
 */
export declare class Deselected<TModel> extends EntityAction<TModel> {
    constructor(type: new () => TModel, correlationId?: string);
}
/**
 * Indicates the de-selection of many entities in the store
 */
export declare class DeselectedMany<TModel> extends EntityAction<TModel> {
    entities: Array<TModel | EntityIdentity> | null;
    constructor(type: new () => TModel, entities: Array<TModel | EntityIdentity> | null, correlationId?: string);
}
