import { EntityAction } from './entity-action';
/**
 * Loads a single instance of an entity if necessary
 * HTTP GET /entity/:id operation
 *
 * @remarks:
 * This action will only load the entity if it does not exist in state, referenced by key
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param keys - (optional) The keys of the entity you wish to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class LoadIfNecessary<TModel> extends EntityAction<TModel> {
    keys?: any;
    maxAge?: number;
    criteria?: any;
    constructor(type: new () => TModel, keys?: any, maxAge?: number, criteria?: any, correlationId?: string);
}
/**
 * Loads a single instance of an entity
 * HTTP GET /entity/:id
 *
 * @remarks
 * The loaded entity will replace any existing entity in state
 *
 * @param type - The entity model decorated with @Entity
 * @param keys - (optional) The keys of the entity you wish to load
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class Load<TModel> extends EntityAction<TModel> {
    keys?: any;
    criteria?: any;
    constructor(type: new () => TModel, keys?: any, criteria?: any, correlationId?: string);
}
/**
 * Handles a successful response for loading an entity
 * HTTP GET /entity/:id
 *
 * @param type - The entity model decorated with @Entity
 * @param entity - The entity that was loaded
 * @param keys - (optional) The keys of the entity you loaded
 * @param criteria - (optional) The custom criteria from the initial load action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load action
 */
export declare class LoadSuccess<TModel> extends EntityAction<TModel> {
    entity: TModel;
    keys?: any;
    criteria?: any;
    constructor(type: new () => TModel, entity: TModel, keys?: any, criteria?: any, correlationId?: string);
}
/**
 * Handles an error response when loading an entity
 * HTTP GET /entity/:id
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param keys - The keys of the entity you loaded
 * @param criteria - (optional) The custom criteria from the initial load action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load action
 */
export declare class LoadFailure<TModel> extends EntityAction<TModel> {
    error: any;
    keys?: any;
    criteria?: any;
    constructor(type: new () => TModel, error: any, keys?: any, criteria?: any, correlationId?: string);
}
