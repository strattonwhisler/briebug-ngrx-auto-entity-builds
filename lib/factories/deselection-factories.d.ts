import { ActionCreator } from '@ngrx/store';
import { Deselect, DeselectAll, Deselected, DeselectedMany, DeselectMany, DeselectManyByKeys } from '../actions/deselection-actions';
import { TNew } from '../actions/model-constructor';
import { EntityIdentity } from '../types/entity-identity';
import { CorrelatedProps } from './util';
export declare const createDeselectAction: <TModel, T extends string, P extends CorrelatedProps>(Type: TNew<TModel>) => ActionCreator<T, (props: CorrelatedProps) => Deselect<TModel>>;
export interface DeselectManyProps<TModel> extends CorrelatedProps {
    entities: TModel[];
}
export declare const createDeselectManyAction: <TModel, T extends string, P extends DeselectManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeselectManyProps<TModel>) => DeselectMany<TModel>>;
export interface DeselectManyByKeysProps extends CorrelatedProps {
    keys: EntityIdentity[];
}
export declare const createDeselectManyByKeysAction: <TModel, T extends string, P extends DeselectManyByKeysProps>(Type: TNew<TModel>) => ActionCreator<T, (props: DeselectManyByKeysProps) => DeselectManyByKeys<TModel>>;
export declare const createDeselectAllAction: <TModel, T extends string, P extends CorrelatedProps>(Type: TNew<TModel>) => ActionCreator<T, (props: CorrelatedProps) => DeselectAll<TModel>>;
export declare const createDeselectedAction: <TModel, T extends string, P extends CorrelatedProps>(Type: TNew<TModel>) => ActionCreator<T, (props: CorrelatedProps) => Deselected<TModel>>;
export interface DeselectedManyProps<TModel> extends CorrelatedProps {
    entities: Array<TModel | EntityIdentity>;
}
export declare const createDeselectedManyAction: <TModel, T extends string, P extends DeselectedManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeselectedManyProps<TModel>) => DeselectedMany<TModel>>;
