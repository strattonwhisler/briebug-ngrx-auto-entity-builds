import { EntityActionTypes } from '../actions/action-types';
import { IEffectExclusions } from './effect-exclusions';
/**
 * Defines effect exceptions for the decorated model.
 */
export interface IEffectExcept {
    except?: (...actions: EntityActionTypes[]) => IEffectExclusions;
}
/**
 * Defines an entity data transformer capable of transforming data to and from the server.
 */
export interface IEntityTransformer {
    fromServer?: (data: any, criteria?: any) => any;
    toServer?: (entity: any, criteria?: any) => any;
}
export type EntityComparer = (a: any, b: any) => number;
export interface IEntityComparerMap {
    [key: string]: EntityComparer | string;
}
export interface IEntityNames {
    modelName: string;
    pluralName?: string;
    uriName?: string;
}
export declare enum EntityAge {
    Minute = 60,
    Hour = 3600,
    QuarterDay = 21600,
    HalfDay = 43200,
    Day = 86400,
    Week = 604800
}
/**
 * The options that may be configured for a decorated entity model.
 *
 * @property comparer - (optional) A default comparer for sorting entities on selection
 * @property comparers - (optional) A set of comparer functions or named comparer references for sorting entities
 * @property transform - (optional) A set of entity transform objects that may be composed, in order, to transform the entity
 * @property excludeEffects - (optional) The effect exclusion config
 *   @see IEffectExclusions
 * @property defaultMaxAge - (optional) A default maximum age, in seconds, after which load*IfNecessary actions will always load
 */
export interface IEntityOptions extends IEntityNames {
    comparer?: EntityComparer;
    comparers?: IEntityComparerMap;
    transform?: IEntityTransformer[];
    excludeEffects?: IEffectExclusions | IEffectExcept;
    defaultMaxAge?: number | EntityAge;
}
