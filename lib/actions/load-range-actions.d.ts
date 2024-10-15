import { IRangeInfo, Range } from '../models';
import { EntityAction } from './entity-action';
/**
 * Loads instances of a range of entities if necessary
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or entities in state,
 * or if the current range information for entities in state does not intersect the range being loaded
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param range - The information about the range to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class LoadRangeIfNecessary<TModel> extends EntityAction<TModel> {
    range: Range;
    maxAge?: number;
    criteria?: any;
    constructor(type: new () => TModel, range: Range, maxAge?: number, criteria?: any, correlationId?: string);
}
/**
 * Loads instances of a range of entities
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @remarks:
 * The loaded entities will be added to any range of entities already in state
 * Will update the current range info in state
 *
 * @param type - The entity model decorated with @Entity
 * @param range - The information about the range to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export declare class LoadRange<TModel> extends EntityAction<TModel> {
    range: Range;
    criteria?: any;
    constructor(type: new () => TModel, range: Range, criteria?: any, correlationId?: string);
}
/**
 * Handles a successful response for loading a range of entities
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param rangeInfo - The information about the range loaded
 * @param criteria - (optional) The custom criteria from the initial load range action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load range action
 */
export declare class LoadRangeSuccess<TModel> extends EntityAction<TModel> {
    entities: TModel[];
    rangeInfo: IRangeInfo;
    criteria?: any;
    constructor(type: new () => TModel, entities: TModel[], rangeInfo: IRangeInfo, criteria?: any, correlationId?: string);
}
/**
 * Handles an error response when loading a page of entities
 * HTTP GET /entity?start&end|first&last|skip&take (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param range - The range you tried to load
 * @param criteria - (optional) The custom criteria from the initial load range action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load range action
 */
export declare class LoadRangeFailure<TModel> extends EntityAction<TModel> {
    error: any;
    range: Range;
    criteria?: any;
    constructor(type: new () => TModel, error: any, range: Range, criteria?: any, correlationId?: string);
}
