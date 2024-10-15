import { EntityAction } from './entity-action';
/**
 * Loads all instances of an entity if necessary
 * HTTP GET /entity
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or any entities in state
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class LoadManyIfNecessary<TModel> extends EntityAction<TModel> {
    maxAge?: number;
    criteria?: any;
    constructor(type: new () => TModel, maxAge?: number, criteria?: any, correlationId?: string);
}
/**
 * Loads many instances of an entity
 * HTTP GET /entity
 *
 * @remarks:
 * Replaces many entities for this model in state. Loaded entities will be merged into state, updating
 * existing entities (by key) or adding new entities (key not found in state).
 *
 * @param type - The entity model decorated with @Entity
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class LoadMany<TModel> extends EntityAction<TModel> {
    criteria?: any;
    constructor(type: new () => TModel, criteria?: any, correlationId?: string);
}
/**
 * Handles a successful response for loading many entities
 * HTTP GET /entity
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param criteria - (optional) The custom criteria from the initial load many action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load many action
 */
export declare class LoadManySuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], criteria?: any, correlationId?: string);
}
/**
 * Handles an error response when loading many entities
 * HTTP GET /entity
 *
 * @param type - The entity model decorated with @Entity
 * @param error - (optional) The error object that was thrown
 * @param criteria - (optional) The custom criteria from the initial load many action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load many action
 */
export declare class LoadManyFailure<TModel> extends EntityAction<TModel> {
    error: any;
    criteria?: any;
    constructor(type: new () => TModel, error: any, criteria?: any, correlationId?: string);
}
