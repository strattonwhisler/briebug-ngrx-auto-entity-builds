import { EntityIdentity } from '../types/entity-identity';
import { IEntityDictionary, IEntitySelections } from '../util/entity-state';
export declare const mapToCurrentEntity: <TModel>(selections: IEntitySelections, entities: IEntityDictionary<TModel>) => TModel | undefined;
export declare const mapToCurrentEntityKey: (selections: IEntitySelections) => EntityIdentity | undefined;
export declare const mapToCurrentEntities: <TModel>(selections: IEntitySelections, entities: IEntityDictionary<TModel>) => TModel[];
export declare const mapToCurrentEntitiesKeys: (selections: IEntitySelections) => EntityIdentity[];
