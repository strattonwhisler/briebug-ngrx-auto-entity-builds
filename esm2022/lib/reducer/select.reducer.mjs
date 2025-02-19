import { EntityActionTypes } from '../actions/action-types';
import { safeGetKey, setNewState } from './reduction.utils';
export const selectReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Select: {
            const selectEntity = action.entity;
            if (!selectEntity) {
                return state;
            }
            const selectKey = safeGetKey(action, selectEntity);
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntityKey: selectKey
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.SelectByKey: {
            const selectByKeyKey = action.entityKey;
            if (!selectByKeyKey) {
                return state;
            }
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntityKey: selectByKeyKey
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWF1dG8tZW50aXR5L3NyYy9saWIvcmVkdWNlci9zZWxlY3QucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUk1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTVELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBa0IsRUFBRSxFQUFFO0lBQ3RHLFFBQVEsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFCLEtBQUssaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLFlBQVksR0FBSSxNQUFzQixDQUFDLE1BQU0sQ0FBQztZQUNwRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ2xCLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUVELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbkQsTUFBTSxRQUFRLEdBQXNCO2dCQUNsQyxHQUFHLFdBQVc7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEdBQUcsV0FBVyxDQUFDLFVBQVU7b0JBQ3pCLGdCQUFnQixFQUFFLFNBQVM7aUJBQzVCO2FBQ0YsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxLQUFLLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxjQUFjLEdBQUksTUFBMkIsQ0FBQyxTQUFTLENBQUM7WUFDOUQsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNwQixPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFFRCxNQUFNLFFBQVEsR0FBc0I7Z0JBQ2xDLEdBQUcsV0FBVztnQkFDZCxVQUFVLEVBQUU7b0JBQ1YsR0FBRyxXQUFXLENBQUMsVUFBVTtvQkFDekIsZ0JBQWdCLEVBQUUsY0FBYztpQkFDakM7YUFDRixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IFNlbGVjdCwgU2VsZWN0QnlLZXkgfSBmcm9tICcuLi9hY3Rpb25zL3NlbGVjdGlvbi1hY3Rpb25zJztcbmltcG9ydCB7IElFbnRpdHlTdGF0ZSB9IGZyb20gJy4uL3V0aWwvZW50aXR5LXN0YXRlJztcbmltcG9ydCB7IFJlZHVjdGlvbkJhc2lzIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB7IHNhZmVHZXRLZXksIHNldE5ld1N0YXRlIH0gZnJvbSAnLi9yZWR1Y3Rpb24udXRpbHMnO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0UmVkdWNlciA9ICh7IHN0YXRlLCBhY3Rpb24sIHN0YXRlTmFtZSwgZmVhdHVyZU5hbWUsIGVudGl0eVN0YXRlIH06IFJlZHVjdGlvbkJhc2lzKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLmFjdGlvblR5cGUpIHtcbiAgICBjYXNlIEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdDoge1xuICAgICAgY29uc3Qgc2VsZWN0RW50aXR5ID0gKGFjdGlvbiBhcyBTZWxlY3Q8YW55PikuZW50aXR5O1xuICAgICAgaWYgKCFzZWxlY3RFbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWxlY3RLZXkgPSBzYWZlR2V0S2V5KGFjdGlvbiwgc2VsZWN0RW50aXR5KTtcbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBJRW50aXR5U3RhdGU8YW55PiA9IHtcbiAgICAgICAgLi4uZW50aXR5U3RhdGUsXG4gICAgICAgIHNlbGVjdGlvbnM6IHtcbiAgICAgICAgICAuLi5lbnRpdHlTdGF0ZS5zZWxlY3Rpb25zLFxuICAgICAgICAgIGN1cnJlbnRFbnRpdHlLZXk6IHNlbGVjdEtleVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXh0ID0gc2V0TmV3U3RhdGUoZmVhdHVyZU5hbWUsIHN0YXRlTmFtZSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH1cbiAgICBjYXNlIEVudGl0eUFjdGlvblR5cGVzLlNlbGVjdEJ5S2V5OiB7XG4gICAgICBjb25zdCBzZWxlY3RCeUtleUtleSA9IChhY3Rpb24gYXMgU2VsZWN0QnlLZXk8YW55PikuZW50aXR5S2V5O1xuICAgICAgaWYgKCFzZWxlY3RCeUtleUtleSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBJRW50aXR5U3RhdGU8YW55PiA9IHtcbiAgICAgICAgLi4uZW50aXR5U3RhdGUsXG4gICAgICAgIHNlbGVjdGlvbnM6IHtcbiAgICAgICAgICAuLi5lbnRpdHlTdGF0ZS5zZWxlY3Rpb25zLFxuICAgICAgICAgIGN1cnJlbnRFbnRpdHlLZXk6IHNlbGVjdEJ5S2V5S2V5XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHQgPSBzZXROZXdTdGF0ZShmZWF0dXJlTmFtZSwgc3RhdGVOYW1lLCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuICB9XG59O1xuIl19