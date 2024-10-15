import { ActionCreator } from '@ngrx/store';
import { Create, CreateFailure, CreateMany, CreateManyFailure, CreateManySuccess, CreateSuccess } from '../actions/create-actions';
import { TNew } from '../actions/model-constructor';
import { StandardProps } from './util';
export interface CreateProps<TModel> extends StandardProps {
    entity: TModel;
}
export declare const createCreateAction: <TModel, T extends string, P extends CreateProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: CreateProps<TModel>) => Create<TModel>>;
export declare const createCreateSuccessAction: <TModel, T extends string, P extends CreateProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: CreateProps<TModel>) => CreateSuccess<TModel>>;
export interface CreateFailureProps<TModel> extends StandardProps {
    error: any;
    entity: TModel;
}
export declare const createCreateFailureAction: <TModel, T extends string, P extends CreateFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: CreateFailureProps<TModel>) => CreateFailure<TModel>>;
export interface CreateManyProps<TModel> extends StandardProps {
    entities: TModel[];
}
export declare const createCreateManyAction: <TModel, T extends string, P extends CreateManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: CreateManyProps<TModel>) => CreateMany<TModel>>;
export declare const createCreateManySuccessAction: <TModel, T extends string, P extends CreateManyProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: CreateManyProps<TModel>) => CreateManySuccess<TModel>>;
export interface CreateManyFailureProps<TModel> extends StandardProps {
    error: any;
    entities: TModel[];
}
export declare const createCreateManyFailureAction: <TModel, T extends string, P extends CreateManyFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: CreateManyFailureProps<TModel>) => CreateManyFailure<TModel>>;
