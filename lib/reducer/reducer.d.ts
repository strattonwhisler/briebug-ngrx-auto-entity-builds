import { ActionReducer } from '@ngrx/store';
import { EntityActions } from '../actions/entity-actions-union';
import { IEntityState } from '../util/entity-state';
export interface ReductionBasis {
    state: any;
    action: EntityActions<any>;
    stateName?: string;
    featureName?: string;
    entityState?: IEntityState<any>;
}
export type entityReducer = (basis: ReductionBasis) => any;
export declare const runReducer: (reducer: entityReducer) => (basis: ReductionBasis) => any;
export declare const buildReducerParams: () => (params: ReductionBasis) => {
    stateName: string;
    featureName: string;
    state: any;
    action: EntityActions<any>;
    entityState?: IEntityState<any>;
};
export declare const findEntityState: () => ({ state, action, stateName, featureName }: ReductionBasis) => {
    state: any;
    action: EntityActions<any>;
    stateName: string;
    featureName: string;
    entityState: any;
};
export declare const defaultReducer: ({ state }: {
    state: any;
}) => any;
export declare const findEntityReducer: (action: EntityActions<any>) => entityReducer;
export declare const applyEntityReducer: () => (params: ReductionBasis) => any;
export declare const autoEntityReducer: (reducer: ActionReducer<any>, state: any, action: EntityActions<any>) => any;
