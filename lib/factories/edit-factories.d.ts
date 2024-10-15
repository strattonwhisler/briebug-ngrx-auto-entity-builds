import { ActionCreator } from '@ngrx/store';
import { Change, Changed, Edit, EditByKey, Edited, EditedByKey, EditEnded, EditNew, EndEdit } from '../actions/edit-actions';
import { TNew } from '../actions/model-constructor';
import { EntityIdentity } from '../types/entity-identity';
import { CorrelatedProps } from './util';
export interface EditNewProps<TModel> extends CorrelatedProps {
    entity?: Partial<TModel>;
}
export declare const createEditNewAction: <TModel, T extends string, P extends EditNewProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: EditNewProps<TModel>) => EditNew<TModel>>;
export interface EditProps<TModel> extends CorrelatedProps {
    entity: Partial<TModel>;
}
export declare const createEditAction: <TModel, T extends string, P extends EditProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: EditProps<TModel>) => Edit<TModel>>;
export interface EditByKeyProps extends CorrelatedProps {
    key: EntityIdentity;
}
export declare const createEditByKeyAction: <TModel, T extends string, P extends EditByKeyProps>(Type: TNew<TModel>) => ActionCreator<T, (props: EditByKeyProps) => EditByKey<TModel>>;
export declare const createEditedAction: <TModel, T extends string, P extends EditProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: EditProps<TModel>) => Edited<TModel>>;
export declare const createEditedByKeyAction: <TModel, T extends string, P extends EditByKeyProps>(Type: TNew<TModel>) => ActionCreator<T, (props: EditByKeyProps) => EditedByKey<TModel>>;
export declare const createChangeAction: <TModel, T extends string, P extends EditProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: EditProps<TModel>) => Change<TModel>>;
export declare const createChangedAction: <TModel, T extends string, P extends EditProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: EditProps<TModel>) => Changed<TModel>>;
export declare const createEndEditAction: <TModel, T extends string, P extends CorrelatedProps>(Type: TNew<TModel>) => ActionCreator<T, (props: CorrelatedProps) => EndEdit<TModel>>;
export declare const createEditEndedAction: <TModel, T extends string, P extends CorrelatedProps>(Type: TNew<TModel>) => ActionCreator<T, (props: CorrelatedProps) => EditEnded<TModel>>;
