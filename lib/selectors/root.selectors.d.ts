import { EntityIdentity } from '../types/entity-identity';
import { IEntityDictionary, IEntityEdits, IEntityPaging, IEntitySelections, IEntityState, IEntityTracking } from '../util/entity-state';
export declare const mapToEntities: <TState extends IEntityState<TModel>, TModel, TExtra>(state: TState & TExtra) => IEntityDictionary<TModel>;
export declare const mapToIds: <TState extends IEntityState<TModel>, TModel, TExtra>(state: TState & TExtra) => EntityIdentity[];
export declare const mapToSelections: <TState extends IEntityState<TModel>, TModel, TExtra>(state: TState & TExtra) => IEntitySelections;
export declare const mapToEdits: <TState extends IEntityState<TModel>, TModel, TExtra>(state: TState & TExtra) => IEntityEdits<TModel>;
export declare const mapToPaging: <TState extends IEntityState<TModel>, TModel, TExtra>(state: TState & TExtra) => IEntityPaging;
export declare const mapToTracking: <TState extends IEntityState<TModel>, TModel, TExtra>(state: TState & TExtra) => IEntityTracking;
