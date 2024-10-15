import { ActionCreator } from '@ngrx/store';
import { TNew } from '../actions/model-constructor';
import { IRangeInfo, Range } from '../models';
import { StandardProps } from './util';
import { LoadRange, LoadRangeFailure, LoadRangeIfNecessary, LoadRangeSuccess } from '../actions/load-range-actions';
export interface LoadRangeProps extends StandardProps {
    range: Range;
}
export declare const createLoadRangeAction: <TModel, T extends string, P extends StandardProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadRangeProps) => LoadRange<TModel>>;
export interface LoadRangeIfNecessaryProps extends LoadRangeProps {
    maxAge?: number;
}
export declare const createLoadRangeIfNecessaryAction: <TModel, T extends string, P extends LoadRangeIfNecessaryProps>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadRangeIfNecessaryProps) => LoadRangeIfNecessary<TModel>>;
export interface LoadRangeSuccessProps<TModel> extends StandardProps {
    entities: TModel[];
    rangeInfo: IRangeInfo;
}
export declare const createLoadRangeSuccessAction: <TModel, T extends string, P extends LoadRangeSuccessProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadRangeSuccessProps<TModel>) => LoadRangeSuccess<TModel>>;
export interface LoadRangeFailureProps<TModel> extends StandardProps {
    error: any;
    range: Range;
}
export declare const createLoadRangeFailureAction: <TModel, T extends string, P extends LoadRangeFailureProps<TModel>>(Type: TNew<TModel>) => ActionCreator<T, (props: LoadRangeFailureProps<TModel>) => LoadRangeFailure<TModel>>;
