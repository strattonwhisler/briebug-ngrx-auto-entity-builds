import { EntityAction } from './entity-action';
/**
 * Clears all entities for this model from state
 */
export declare class Clear<TModel> extends EntityAction<TModel> {
    constructor(type: new () => TModel, correlationId?: string);
}
