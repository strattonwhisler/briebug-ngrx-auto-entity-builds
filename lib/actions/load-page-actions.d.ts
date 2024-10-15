import { IPageInfo, Page } from '../models';
import { EntityAction } from './entity-action';
/**
 * Loads instances of a page of entities if necessary
 * HTTP GET /entity?page&size (etc.)
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or entities in state,
 * or if the current page information for entities in state does not match the page being loaded
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param page - The information about the page to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class LoadPageIfNecessary<TModel> extends EntityAction<TModel> {
    page: Page;
    maxAge?: number;
    criteria?: any;
    constructor(type: new () => TModel, page: Page, maxAge?: number, criteria?: any, correlationId?: string);
}
/**
 * Loads a single page of an entity
 * HTTP GET /entity?page&size (etc.)
 *
 * @remarks
 * The loaded page of entities will replace all entities for this model in state
 * Will update the current page info in state
 *
 * @param type - The entity model decorated with @Entity
 * @param page - The information about the page to load
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class LoadPage<TModel> extends EntityAction<TModel> {
    page: Page;
    criteria?: any;
    constructor(type: new () => TModel, page: Page, criteria?: any, correlationId?: string);
}
/**
 * Handles a successful response for loading a page of entities
 * HTTP GET /entity?page&size (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param pageInfo - The information about the page loaded
 * @param criteria - (optional) The custom criteria from the initial load page action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load page action
 */
export declare class LoadPageSuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    pageInfo: IPageInfo;
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], pageInfo: IPageInfo, criteria?: any, correlationId?: string);
}
/**
 * Handles an error response when loading a page of entities
 * HTTP GET /entity?page&size (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param page - The page you tried to load
 * @param criteria - (optional) The custom criteria from the initial load page action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load page action
 */
export declare class LoadPageFailure<TModel> extends EntityAction<TModel> {
    error: any;
    page: Page;
    criteria?: any;
    constructor(type: new () => TModel, error: any, page: Page, criteria?: any, correlationId?: string);
}
