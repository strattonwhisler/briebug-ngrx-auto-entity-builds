import { Action } from '@ngrx/store';
import { EntityActionTypes } from './action-types';
import { IEntityInfo } from './entity-info';
import { TNew } from './model-constructor';
export interface ICorrelatedAction {
    correlationId: string;
}
export interface IEntityAction extends Action, ICorrelatedAction {
    actionType: EntityActionTypes;
    info: IEntityInfo;
}
/**
 * Structure for all of this library's actions
 */
export declare abstract class EntityAction<TModel> implements IEntityAction {
    actionType: EntityActionTypes;
    correlationId: string;
    type: string;
    info: IEntityInfo;
    protected constructor(type: TNew<TModel>, actionType: EntityActionTypes, correlationId?: string);
}
