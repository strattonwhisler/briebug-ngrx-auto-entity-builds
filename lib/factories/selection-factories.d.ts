import { ActionCreator } from '@ngrx/store';
import { Select, Selected, SelectedMany, SelectedMore, SelectMany, SelectManyByKeys, SelectMore, SelectMoreByKeys, SelectByKey } from '../actions/selection-actions';
import { TNew } from '../actions/model-constructor';
import { EntityIdentity } from '../types/entity-identity';
import { CorrelatedProps } from './util';
export interface SelectProps<TModel> extends CorrelatedProps {
    entity: TModel;
}
export declare const createSelectAction: <TModel, T extends string, P extends SelectProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectProps<TModel>) => Select<TModel>>;
export interface SelectByKeyProps extends CorrelatedProps {
    key: EntityIdentity;
}
export declare const createSelectByKeyAction: <TModel, T extends string, P extends SelectByKeyProps>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectByKeyProps) => SelectByKey<TModel>>;
export interface SelectManyProps<TModel> extends CorrelatedProps {
    entities: TModel[];
}
export declare const createSelectManyAction: <TModel, T extends string, P extends SelectManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectManyProps<TModel>) => SelectMany<TModel>>;
export declare const createSelectMoreAction: <TModel, T extends string, P extends SelectManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectManyProps<TModel>) => SelectMore<TModel>>;
export interface SelectManyByKeysProps extends CorrelatedProps {
    keys: EntityIdentity[];
}
export declare const createSelectManyByKeysAction: <TModel, T extends string, P extends SelectManyByKeysProps>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectManyByKeysProps) => SelectManyByKeys<TModel>>;
export declare const createSelectMoreByKeysAction: <TModel, T extends string, P extends SelectManyByKeysProps>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectManyByKeysProps) => SelectMoreByKeys<TModel>>;
export interface SelectedProps<TModel> extends CorrelatedProps {
    entity: TModel | EntityIdentity;
}
export declare const createSelectedAction: <TModel, T extends string, P extends SelectedProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: CorrelatedProps) => Selected<TModel>>;
export interface SelectedManyProps<TModel> extends CorrelatedProps {
    entities: Array<TModel | EntityIdentity>;
}
export declare const createSelectedManyAction: <TModel, T extends string, P extends SelectedManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectedManyProps<TModel>) => SelectedMany<TModel>>;
export declare const createSelectedMoreAction: <TModel, T extends string, P extends SelectedManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: SelectedManyProps<TModel>) => SelectedMore<TModel>>;
