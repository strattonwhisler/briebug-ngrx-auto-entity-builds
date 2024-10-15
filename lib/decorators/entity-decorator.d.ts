import { IEntityOptions } from './entity-options';
/**
 * Entity decorator for configuring each entity model.
 *
 * @param options - The configuration options to apply
 */
export declare function Entity(options: IEntityOptions): any;
/**
 * Entity decorator for configuring each entity model.
 *
 * @param modelName - The model name option to apply
 * @param options - Additional configuration options to apply
 */
export declare function Entity(modelName?: string, options?: Partial<IEntityOptions>): any;
