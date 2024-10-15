import { MemoizedSelector, Selector } from '@ngrx/store';
import { IEntityState } from './entity-state';
import { IModelClass } from './model-state';
import { ISelectorMap } from './selector-map';
export declare const buildSelectorMap: <TParentState, TState extends IEntityState<TModel>, TModel, TExtra>(getState: Selector<TParentState, TState & TExtra> | MemoizedSelector<object | TParentState, TState & TExtra>, type: IModelClass<TModel>) => ISelectorMap<TParentState, TModel>;
