import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, OperatorFunction } from 'rxjs';
import { EntityActionTypes } from './action-types';
import { EntityAction, IEntityAction } from './entity-action';
/**
 * Operator to filter actions by an entity action type or multiple action types.
 *
 * @param allowedActionTypes One or more action type string constants
 */
export declare function ofEntityAction<T extends IEntityAction>(...allowedActionTypes: EntityActionTypes[]): OperatorFunction<Action, T>;
/**
 * Operator to filter actions by an entity and action type or multiple action types.
 *
 * @param entity The entity class
 * @param allowedActionTypes One or more action type string constants
 */
export declare function ofEntityType<TModel, T extends EntityAction<TModel>>(entity: new () => TModel, ...allowedActionTypes: EntityActionTypes[]): OperatorFunction<Action, T>;
/**
 * Operator to filter many actions by entity type and entity action types.
 *
 * @param actions$ The NgRx effects Actions stream
 * @param entity The entity types to filter for
 * @param allowedActionTypes The entity actions to filter for
 */
export declare function fromEntityActions<T extends EntityAction<any>>(actions$: Actions, entity: Array<new () => any>, ...allowedActionTypes: EntityActionTypes[]): Observable<Action>;
