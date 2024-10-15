import { Observable } from 'rxjs';
import { EntityAction } from '../actions/entity-action';
/**
 * Operator that determines if an effect should run for the given model type and action.
 */
export declare const shouldApplyEffect: <TModel, TAction extends EntityAction<TModel>>() => (source: Observable<TAction>) => Observable<TAction>;
