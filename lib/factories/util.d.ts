import { ActionCreator, Creator } from '@ngrx/store';
import { EntityAction } from '../actions/entity-action';
import { TNew } from '../actions/model-constructor';
export interface CorrelatedProps {
    correlationId?: string;
}
export interface StandardProps extends CorrelatedProps {
    criteria?: any;
}
export declare const NAE_TYPE_ACTION_CACHE = "__nae_type_action_cache";
export declare const cacheOnType: <TModel, TAction extends EntityAction<TModel>, T extends string>(Type: TNew<TModel>, actionName: string, creatorCallback: () => ActionCreator<T, (props: object) => TAction>) => any;
export declare function defineTypedFactoryFunction<TModel, TAction extends EntityAction<TModel>, T extends string>(type: T, creator: Creator): ActionCreator<T, (props: object) => TAction>;
