import { ActionCreator } from '@ngrx/store';
import { EntityIdentity } from '../types/entity-identity';
import { DeleteByKey, DeleteByKeyFailure, DeleteManyByKeys, DeleteManyByKeysFailure, DeleteManyByKeysSuccess, DeleteByKeySuccess } from '../actions/delete-by-key-actions';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
export interface DeleteByKeyProps<TModel> extends StandardProps {
    key: EntityIdentity;
}
export declare const createDeleteByKeyAction: <TModel, T extends string, P extends DeleteByKeyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteByKeyProps<TModel>) => DeleteByKey<TModel>>;
export declare const createDeleteByKeySuccessAction: <TModel, T extends string, P extends DeleteByKeyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteByKeyProps<TModel>) => DeleteByKeySuccess<TModel>>;
export interface DeleteByKeyFailureProps<TModel> extends StandardProps {
    error: any;
    key: EntityIdentity;
}
export declare const createDeleteByKeyFailureAction: <TModel, T extends string, P extends DeleteByKeyFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteByKeyFailureProps<TModel>) => DeleteByKeyFailure<TModel>>;
export interface DeleteManyByKeysProps<TModel> extends StandardProps {
    keys: EntityIdentity[];
}
export declare const createDeleteManyByKeysAction: <TModel, T extends string, P extends DeleteManyByKeysProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteManyByKeysProps<TModel>) => DeleteManyByKeys<TModel>>;
export declare const createDeleteManyByKeysSuccessAction: <TModel, T extends string, P extends DeleteManyByKeysProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteManyByKeysProps<TModel>) => DeleteManyByKeysSuccess<TModel>>;
export interface DeleteManyByKeysFailureProps<TModel> extends StandardProps {
    error: any;
    keys: EntityIdentity[];
}
export declare const createDeleteManyByKeysFailureAction: <TModel, T extends string, P extends DeleteManyByKeysFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: DeleteManyByKeysFailureProps<TModel>) => DeleteManyByKeysFailure<TModel>>;
