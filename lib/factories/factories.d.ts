import { ActionCreator } from '@ngrx/store';
import { Clear } from '../actions/actions';
import { TNew } from '../actions/model-constructor';
import { CorrelatedProps } from './util';
export declare const createClearAction: <TModel, T extends string, P extends CorrelatedProps>(Type: TNew<TModel>) => ActionCreator<T, (props: CorrelatedProps) => Clear<TModel>>;
