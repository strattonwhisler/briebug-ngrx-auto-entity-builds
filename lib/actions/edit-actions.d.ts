import { EntityIdentity } from '../types/entity-identity';
import { EntityAction } from './entity-action';
/**
 * Tracks a new entity as being edited in the store
 */
export declare class EditNew<TModel> extends EntityAction<TModel> {
    entity?: Partial<TModel>;
    constructor(type: new () => TModel, entity?: Partial<TModel>, correlationId?: string);
}
/**
 * Tracks an entity as being edited in the store
 */
export declare class Edit<TModel> extends EntityAction<TModel> {
    entity: Partial<TModel>;
    constructor(type: new () => TModel, entity: Partial<TModel>, correlationId?: string);
}
/**
 * Tracks an entity (by its key) as being edited in the store
 */
export declare class EditByKey<TModel> extends EntityAction<TModel> {
    key: EntityIdentity;
    constructor(type: new () => TModel, key: EntityIdentity, correlationId?: string);
}
/**
 * Indicates an entity is being tracked as edited in the store
 */
export declare class Edited<TModel> extends EntityAction<TModel> {
    entity: Partial<TModel>;
    constructor(type: new () => TModel, entity: Partial<TModel>, correlationId?: string);
}
/**
 * Indicates an entity (by its key) is being tracked as edited in the store
 */
export declare class EditedByKey<TModel> extends EntityAction<TModel> {
    key: EntityIdentity;
    constructor(type: new () => TModel, key: EntityIdentity, correlationId?: string);
}
/**
 * Indicates a change is occurring to the edited entity in the store
 */
export declare class Change<TModel> extends EntityAction<TModel> {
    entity: Partial<TModel>;
    constructor(type: new () => TModel, entity: Partial<TModel>, correlationId?: string);
}
/**
 * Indicates a change has occurred to the edited entity in the store
 */
export declare class Changed<TModel> extends EntityAction<TModel> {
    entity: Partial<TModel>;
    constructor(type: new () => TModel, entity: Partial<TModel>, correlationId?: string);
}
/**
 * Ends editing of currently edited entity and clears it from state
 */
export declare class EndEdit<TModel> extends EntityAction<TModel> {
    constructor(type: new () => TModel, correlationId?: string);
}
/**
 * Indicates editing of currently edited entity has ended
 */
export declare class EditEnded<TModel> extends EntityAction<TModel> {
    constructor(type: new () => TModel, correlationId?: string);
}
