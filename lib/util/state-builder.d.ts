import { MemoizedSelector } from '@ngrx/store';
import { IEntityState } from './entity-state';
import { IModelClass, IModelState } from './model-state';
export declare const NO_ENTITY_DECORATOR_MSG = "Specified model is not decorated with @Entity. All automatic entities must be decorated with a modelName specified. Building of state aborted!";
export declare const NO_ENTITY_KEY_MSG = "Specified model has no properties decorated with @Key. All automatic entities must have at least one property identified as the entity key. Building of state aborted!";
export declare const NO_MODEL_NAME_MSG = "Specified model is decorated with @Entity but does not specify a modelName, which is required for proper production execution. Building of state aborted!";
/**
 * Builds the initial Ngrx state for an entity
 *
 * @param type - the entity class
 * @param extraInitialState - the (optional) initial state
 */
export declare const buildState: <TState extends IEntityState<TModel>, TParentState extends unknown, TModel, TExtra>(type: IModelClass<TModel>, extraInitialState?: TExtra) => IModelState<TParentState, TState, TModel, TExtra>;
/**
 * Builds the Ngrx state for an entity that is part of a feature module
 *
 * @param type the entity class
 * @param featureStateName the name of the feature state
 * @param selectParentState a selector for the entity's parent state
 * @param extraInitialState the (optional) initial feature state
 */
export declare const buildFeatureState: <TState extends IEntityState<TModel>, TParentState extends unknown, TModel, TExtra>(type: IModelClass<TModel>, featureStateName: NonNullable<string>, selectParentState: MemoizedSelector<object, TParentState>, extraInitialState?: TExtra) => IModelState<TParentState, TState, TModel, TExtra>;
