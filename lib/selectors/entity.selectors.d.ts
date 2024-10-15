import { EntityIdentity } from '../types/entity-identity';
import { IEntityDictionary } from '../util/entity-state';
import { IModelClass } from '../util/model-state';
export declare const mapToEntityArray: <TModel>(entities: IEntityDictionary<TModel>, ids: EntityIdentity[]) => TModel[];
export declare const mapToSortedEntityArray: <TModel>(type: IModelClass<TModel>) => (all: TModel[]) => TModel[];
export declare const mapToCustomSortedEntityArray: <TModel>(type: IModelClass<TModel>) => (all: TModel[], { name }: {
    name: any;
}) => TModel[];
export declare const mapToHasEntities: (ids: EntityIdentity[]) => boolean;
export declare const mapToHasNoEntities: (ids: EntityIdentity[]) => boolean;
export declare const mapToTotal: (ids: EntityIdentity[]) => number;
