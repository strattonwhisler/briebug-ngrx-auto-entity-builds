import { EntityActionTypes } from '../actions/action-types';
import { entityReducer } from './reducer';
export declare const ENTITY_ACTION_REDUCER_MAP: {
    [key in EntityActionTypes]: entityReducer | undefined;
};
