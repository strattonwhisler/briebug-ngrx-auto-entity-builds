import { IEntityInfo } from './entity-info';
import { TNew } from './model-constructor';
/**
 * Sets the entity info for a given model.
 *
 * @param type The entity model type
 */
export declare const setInfo: (type: any) => IEntityInfo;
/**
 * Sets the action type info for a given model.
 *
 * @param actionType The type of entity action
 * @param info The entity info
 */
export declare const setType: (actionType: string, info: IEntityInfo) => string;
export declare const setActionType: <TModel, T extends string>(actionType: string, type: TNew<TModel>) => T;
