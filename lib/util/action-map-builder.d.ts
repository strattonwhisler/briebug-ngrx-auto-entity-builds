import { TNew } from '../actions/model-constructor';
import { IActionMap } from './action-map';
export declare const buildActionMap: <TModel>(Type: TNew<TModel>) => IActionMap<TModel>;
