import { IEntityEdits } from '../util/entity-state';
export declare const mapToEditedEntity: <TModel>(edits: IEntityEdits<TModel>) => Partial<TModel> | undefined;
export declare const mapToIsDirty: <TModel>(edits: IEntityEdits<TModel>) => boolean;
