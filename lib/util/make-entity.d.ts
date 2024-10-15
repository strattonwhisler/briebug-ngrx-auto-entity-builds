import { TNew } from '../actions/model-constructor';
export declare const makeEntity: <TModel>(Type: TNew<TModel>) => (obj: any) => TModel;
