import { IEntityAction } from '../actions/entity-action';
import { EntityIdentity } from '../types/entity-identity';
export declare function checkKeyName(type: any, modelName: string): boolean;
export declare function getKeyNames(action: IEntityAction): string[];
export declare function getKeyNamesFromModel<TModel>(type: new () => TModel): string[];
export declare function getKeyNamesFromEntity<TModel>(entity: TModel): string[];
export declare function getKey(action: IEntityAction, entity: any): EntityIdentity;
export declare function getKeyFromModel<TModel>(type: new () => TModel, entity: TModel): EntityIdentity;
export declare function getKeyFromEntity<TModel>(entity: TModel): EntityIdentity;
