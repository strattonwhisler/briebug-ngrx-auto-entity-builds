import { EntityActionTypes } from '../actions/action-types';
import { Select, Selected, SelectedMany, SelectedMore, SelectMany, SelectManyByKeys, SelectMore, SelectMoreByKeys, SelectByKey } from '../actions/selection-actions';
import { setActionType } from '../actions/util';
import { cacheOnType, defineTypedFactoryFunction } from './util';
export const createSelectAction = (Type) => cacheOnType(Type, EntityActionTypes.Select, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Select, Type), ({ entity, correlationId }) => new Select(Type, entity, correlationId)));
export const createSelectByKeyAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectByKey, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectByKey, Type), ({ key, correlationId }) => new SelectByKey(Type, key, correlationId)));
export const createSelectManyAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectMany, Type), ({ entities, correlationId }) => new SelectMany(Type, entities, correlationId)));
export const createSelectMoreAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectMore, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectMore, Type), ({ entities, correlationId }) => new SelectMore(Type, entities, correlationId)));
export const createSelectManyByKeysAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectManyByKeys, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectManyByKeys, Type), ({ keys, correlationId }) => new SelectManyByKeys(Type, keys, correlationId)));
export const createSelectMoreByKeysAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectMoreByKeys, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectMoreByKeys, Type), ({ keys, correlationId }) => new SelectMoreByKeys(Type, keys, correlationId)));
export const createSelectedAction = (Type) => cacheOnType(Type, EntityActionTypes.Selected, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.Selected, Type), ({ entity, correlationId }) => new Selected(Type, entity, correlationId)));
export const createSelectedManyAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectedMany, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectedMany, Type), ({ entities, correlationId }) => new SelectedMany(Type, entities, correlationId)));
export const createSelectedMoreAction = (Type) => cacheOnType(Type, EntityActionTypes.SelectedMore, () => defineTypedFactoryFunction(setActionType(EntityActionTypes.SelectedMore, Type), ({ entities, correlationId }) => new SelectedMore(Type, entities, correlationId)));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLWZhY3Rvcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHkvc3JjL2xpYi9mYWN0b3JpZXMvc2VsZWN0aW9uLWZhY3Rvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixXQUFXLEVBQ1osTUFBTSw4QkFBOEIsQ0FBQztBQUV0QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBbUIsMEJBQTBCLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFNbEYsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsQ0FDaEMsSUFBa0IsRUFDZ0QsRUFBRSxDQUNwRSxXQUFXLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FDL0MsMEJBQTBCLENBQ3hCLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQzdDLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUF1QixFQUFFLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUM1RixDQUNGLENBQUM7QUFNSixNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxDQUNyQyxJQUFrQixFQUNrRCxFQUFFLENBQ3RFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRSxDQUNwRCwwQkFBMEIsQ0FDeEIsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFB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QUksWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQzVHLENBQ0YsQ0FBQztBQUVKLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUFHLENBQ3RDLElBQWtCLEVBQzRELEVBQUUsQ0FDaEYsV0FBVyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQ3JELDBCQUEwQixDQUN4QixhQUFhLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUNuRCxDQUFDLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBNkIsRUFBRSxFQUFFLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FDNUcsQ0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uQ3JlYXRvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVudGl0eUFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHtcbiAgU2VsZWN0LFxuICBTZWxlY3RlZCxcbiAgU2VsZWN0ZWRNYW55LFxuICBTZWxlY3RlZE1vcmUsXG4gIFNlbGVjdE1hbnksXG4gIFNlbGVjdE1hbnlCeUtleXMsXG4gIFNlbGVjdE1vcmUsXG4gIFNlbGVjdE1vcmVCeUtleXMsXG4gIFNlbGVjdEJ5S2V5XG59IGZyb20gJy4uL2FjdGlvbnMvc2VsZWN0aW9uLWFjdGlvbnMnO1xuaW1wb3J0IHsgVE5ldyB9IGZyb20gJy4uL2FjdGlvbnMvbW9kZWwtY29uc3RydWN0b3InO1xuaW1wb3J0IHsgc2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2FjdGlvbnMvdXRpbCc7XG5pbXBvcnQgeyBFbnRpdHlJZGVudGl0eSB9IGZyb20gJy4uL3R5cGVzL2VudGl0eS1pZGVudGl0eSc7XG5pbXBvcnQgeyBjYWNoZU9uVHlwZSwgQ29ycmVsYXRlZFByb3BzLCBkZWZpbmVUeXBlZEZhY3RvcnlGdW5jdGlvbiB9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0UHJvcHM8VE1vZGVsPiBleHRlbmRzIENvcnJlbGF0ZWRQcm9wcyB7XG4gIGVudGl0eTogVE1vZGVsO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZWN0QWN0aW9uID0gPFRNb2RlbCwgVCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFNlbGVjdFByb3BzPFRNb2RlbD4+KFxuICBUeXBlOiBUTmV3PFRNb2RlbD5cbik6IEFjdGlvbkNyZWF0b3I8VCwgKHByb3BzOiBTZWxlY3RQcm9wczxUTW9kZWw+KSA9PiBTZWxlY3Q8VE1vZGVsPj4gPT5cbiAgY2FjaGVPblR5cGUoVHlwZSwgRW50aXR5QWN0aW9uVHlwZXMuU2VsZWN0LCAoKSA9PlxuICAgIGRlZmluZVR5cGVkRmFjdG9yeUZ1bmN0aW9uKFxuICAgICAgc2V0QWN0aW9uVHlwZShFbnRpdHlBY3Rpb25UeXBlcy5TZWxlY3QsIFR5cGUpLFxuICAgICAgKHsgZW50aXR5LCBjb3JyZWxhdGlvbklkIH06IFNlbGVjdFByb3BzPFRNb2RlbD4pID0+IG5ldyBTZWxlY3QoVHlwZSwgZW50aXR5LCBjb3JyZWxhdGlvbklkKVxuICAgIClcbiAgKTtcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RCeUtleVByb3BzIGV4dGVuZHMgQ29ycmVsYXRlZFByb3BzIHtcbiAga2V5OiBFbnRpdHlJZGVudGl0eTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGVjdEJ5S2V5QWN0aW9uID0gPFRNb2RlbCwgVCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFNlbGVjdEJ5S2V5UHJvcHM+KFxuICBUeXBlOiBUTmV3PFRNb2RlbD5cbik6IEFjdGlvbkNyZWF0b3I8VCwgKHByb3BzOiBTZWxlY3RCeUtleVByb3BzKSA9PiBTZWxlY3RCeUtleTxUTW9kZWw+PiA9PlxuICBjYWNoZU9uVHlwZShUeXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5TZWxlY3RCeUtleSwgKCkgPT5cbiAgICBkZWZpbmVUeXBlZEZhY3RvcnlGdW5jdGlvbihcbiAgICAgIHNldEFjdGlvblR5cGUoRW50aXR5QWN0aW9uVHlwZXMuU2VsZWN0QnlLZXksIFR5cGUpLFxuICAgICAgKHsga2V5LCBjb3JyZWxhdGlvbklkIH06IFNlbGVjdEJ5S2V5UHJvcHMpID0+IG5ldyBTZWxlY3RCeUtleShUeXBlLCBrZXksIGNvcnJlbGF0aW9uSWQpXG4gICAgKVxuICApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdE1hbnlQcm9wczxUTW9kZWw+IGV4dGVuZHMgQ29ycmVsYXRlZFByb3BzIHtcbiAgZW50aXRpZXM6IFRNb2RlbFtdO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZWN0TWFueUFjdGlvbiA9IDxUTW9kZWwsIFQgZXh0ZW5kcyBzdHJpbmcsIFAgZXh0ZW5kcyBTZWxlY3RNYW55UHJvcHM8VE1vZGVsPj4oXG4gIFR5cGU6IFROZXc8VE1vZGVsPlxuKTogQWN0aW9uQ3JlYXRvcjxULCAocHJvcHM6IFNlbGVjdE1hbnlQcm9wczxUTW9kZWw+KSA9PiBTZWxlY3RNYW55PFRNb2RlbD4+ID0+XG4gIGNhY2hlT25UeXBlKFR5cGUsIEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdE1hbnksICgpID0+XG4gICAgZGVmaW5lVHlwZWRGYWN0b3J5RnVuY3Rpb24oXG4gICAgICBzZXRBY3Rpb25UeXBlKEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdE1hbnksIFR5cGUpLFxuICAgICAgKHsgZW50aXRpZXMsIGNvcnJlbGF0aW9uSWQgfTogU2VsZWN0TWFueVByb3BzPFRNb2RlbD4pID0+IG5ldyBTZWxlY3RNYW55KFR5cGUsIGVudGl0aWVzLCBjb3JyZWxhdGlvbklkKVxuICAgIClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGVjdE1vcmVBY3Rpb24gPSA8VE1vZGVsLCBUIGV4dGVuZHMgc3RyaW5nLCBQIGV4dGVuZHMgU2VsZWN0TWFueVByb3BzPFRNb2RlbD4+KFxuICBUeXBlOiBUTmV3PFRNb2RlbD5cbik6IEFjdGlvbkNyZWF0b3I8VCwgKHByb3BzOiBTZWxlY3RNYW55UHJvcHM8VE1vZGVsPikgPT4gU2VsZWN0TW9yZTxUTW9kZWw+PiA9PlxuICBjYWNoZU9uVHlwZShUeXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5TZWxlY3RNb3JlLCAoKSA9PlxuICAgIGRlZmluZVR5cGVkRmFjdG9yeUZ1bmN0aW9uKFxuICAgICAgc2V0QWN0aW9uVHlwZShFbnRpdHlBY3Rpb25UeXBlcy5TZWxlY3RNb3JlLCBUeXBlKSxcbiAgICAgICh7IGVudGl0aWVzLCBjb3JyZWxhdGlvbklkIH06IFNlbGVjdE1hbnlQcm9wczxUTW9kZWw+KSA9PiBuZXcgU2VsZWN0TW9yZShUeXBlLCBlbnRpdGllcywgY29ycmVsYXRpb25JZClcbiAgICApXG4gICk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0TWFueUJ5S2V5c1Byb3BzIGV4dGVuZHMgQ29ycmVsYXRlZFByb3BzIHtcbiAga2V5czogRW50aXR5SWRlbnRpdHlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGVjdE1hbnlCeUtleXNBY3Rpb24gPSA8VE1vZGVsLCBUIGV4dGVuZHMgc3RyaW5nLCBQIGV4dGVuZHMgU2VsZWN0TWFueUJ5S2V5c1Byb3BzPihcbiAgVHlwZTogVE5ldzxUTW9kZWw+XG4pOiBBY3Rpb25DcmVhdG9yPFQsIChwcm9wczogU2VsZWN0TWFueUJ5S2V5c1Byb3BzKSA9PiBTZWxlY3RNYW55QnlLZXlzPFRNb2RlbD4+ID0+XG4gIGNhY2hlT25UeXBlKFR5cGUsIEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdE1hbnlCeUtleXMsICgpID0+XG4gICAgZGVmaW5lVHlwZWRGYWN0b3J5RnVuY3Rpb24oXG4gICAgICBzZXRBY3Rpb25UeXBlKEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdE1hbnlCeUtleXMsIFR5cGUpLFxuICAgICAgKHsga2V5cywgY29ycmVsYXRpb25JZCB9OiBTZWxlY3RNYW55QnlLZXlzUHJvcHMpID0+IG5ldyBTZWxlY3RNYW55QnlLZXlzKFR5cGUsIGtleXMsIGNvcnJlbGF0aW9uSWQpXG4gICAgKVxuICApO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZWN0TW9yZUJ5S2V5c0FjdGlvbiA9IDxUTW9kZWwsIFQgZXh0ZW5kcyBzdHJpbmcsIFAgZXh0ZW5kcyBTZWxlY3RNYW55QnlLZXlzUHJvcHM+KFxuICBUeXBlOiBUTmV3PFRNb2RlbD5cbik6IEFjdGlvbkNyZWF0b3I8VCwgKHByb3BzOiBTZWxlY3RNYW55QnlLZXlzUHJvcHMpID0+IFNlbGVjdE1vcmVCeUtleXM8VE1vZGVsPj4gPT5cbiAgY2FjaGVPblR5cGUoVHlwZSwgRW50aXR5QWN0aW9uVHlwZXMuU2VsZWN0TW9yZUJ5S2V5cywgKCkgPT5cbiAgICBkZWZpbmVUeXBlZEZhY3RvcnlGdW5jdGlvbihcbiAgICAgIHNldEFjdGlvblR5cGUoRW50aXR5QWN0aW9uVHlwZXMuU2VsZWN0TW9yZUJ5S2V5cywgVHlwZSksXG4gICAgICAoeyBrZXlzLCBjb3JyZWxhdGlvbklkIH06IFNlbGVjdE1hbnlCeUtleXNQcm9wcykgPT4gbmV3IFNlbGVjdE1vcmVCeUtleXMoVHlwZSwga2V5cywgY29ycmVsYXRpb25JZClcbiAgICApXG4gICk7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0ZWRQcm9wczxUTW9kZWw+IGV4dGVuZHMgQ29ycmVsYXRlZFByb3BzIHtcbiAgZW50aXR5OiBUTW9kZWwgfCBFbnRpdHlJZGVudGl0eTtcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlbGVjdGVkQWN0aW9uID0gPFRNb2RlbCwgVCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFNlbGVjdGVkUHJvcHM8VE1vZGVsPj4oXG4gIFR5cGU6IFROZXc8VE1vZGVsPlxuKTogQWN0aW9uQ3JlYXRvcjxULCAocHJvcHM6IENvcnJlbGF0ZWRQcm9wcykgPT4gU2VsZWN0ZWQ8VE1vZGVsPj4gPT5cbiAgY2FjaGVPblR5cGUoVHlwZSwgRW50aXR5QWN0aW9uVHlwZXMuU2VsZWN0ZWQsICgpID0+XG4gICAgZGVmaW5lVHlwZWRGYWN0b3J5RnVuY3Rpb24oXG4gICAgICBzZXRBY3Rpb25UeXBlKEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdGVkLCBUeXBlKSxcbiAgICAgICh7IGVudGl0eSwgY29ycmVsYXRpb25JZCB9OiBTZWxlY3RlZFByb3BzPFRNb2RlbD4pID0+IG5ldyBTZWxlY3RlZChUeXBlLCBlbnRpdHksIGNvcnJlbGF0aW9uSWQpXG4gICAgKVxuICApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGVkTWFueVByb3BzPFRNb2RlbD4gZXh0ZW5kcyBDb3JyZWxhdGVkUHJvcHMge1xuICBlbnRpdGllczogQXJyYXk8VE1vZGVsIHwgRW50aXR5SWRlbnRpdHk+O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VsZWN0ZWRNYW55QWN0aW9uID0gPFRNb2RlbCwgVCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFNlbGVjdGVkTWFueVByb3BzPFRNb2RlbD4+KFxuICBUeXBlOiBUTmV3PFRNb2RlbD5cbik6IEFjdGlvbkNyZWF0b3I8VCwgKHByb3BzOiBTZWxlY3RlZE1hbnlQcm9wczxUTW9kZWw+KSA9PiBTZWxlY3RlZE1hbnk8VE1vZGVsPj4gPT5cbiAgY2FjaGVPblR5cGUoVHlwZSwgRW50aXR5QWN0aW9uVHlwZXMuU2VsZWN0ZWRNYW55LCAoKSA9PlxuICAgIGRlZmluZVR5cGVkRmFjdG9yeUZ1bmN0aW9uKFxuICAgICAgc2V0QWN0aW9uVHlwZShFbnRpdHlBY3Rpb25UeXBlcy5TZWxlY3RlZE1hbnksIFR5cGUpLFxuICAgICAgKHsgZW50aXRpZXMsIGNvcnJlbGF0aW9uSWQgfTogU2VsZWN0ZWRNYW55UHJvcHM8VE1vZGVsPikgPT4gbmV3IFNlbGVjdGVkTWFueShUeXBlLCBlbnRpdGllcywgY29ycmVsYXRpb25JZClcbiAgICApXG4gICk7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZWxlY3RlZE1vcmVBY3Rpb24gPSA8VE1vZGVsLCBUIGV4dGVuZHMgc3RyaW5nLCBQIGV4dGVuZHMgU2VsZWN0ZWRNYW55UHJvcHM8VE1vZGVsPj4oXG4gIFR5cGU6IFROZXc8VE1vZGVsPlxuKTogQWN0aW9uQ3JlYXRvcjxULCAocHJvcHM6IFNlbGVjdGVkTWFueVByb3BzPFRNb2RlbD4pID0+IFNlbGVjdGVkTW9yZTxUTW9kZWw+PiA9PlxuICBjYWNoZU9uVHlwZShUeXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5TZWxlY3RlZE1vcmUsICgpID0+XG4gICAgZGVmaW5lVHlwZWRGYWN0b3J5RnVuY3Rpb24oXG4gICAgICBzZXRBY3Rpb25UeXBlKEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdGVkTW9yZSwgVHlwZSksXG4gICAgICAoeyBlbnRpdGllcywgY29ycmVsYXRpb25JZCB9OiBTZWxlY3RlZE1hbnlQcm9wczxUTW9kZWw+KSA9PiBuZXcgU2VsZWN0ZWRNb3JlKFR5cGUsIGVudGl0aWVzLCBjb3JyZWxhdGlvbklkKVxuICAgIClcbiAgKTtcbiJdfQ==