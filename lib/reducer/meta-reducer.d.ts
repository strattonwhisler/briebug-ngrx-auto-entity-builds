import { ActionReducer } from '@ngrx/store';
/**
 * Provides standard reducer functions to support entity store structure
 *
 * @param reducer - The next reducer to be applied
 */
export declare function autoEntityMetaReducer(reducer: ActionReducer<any>): ActionReducer<any>;
