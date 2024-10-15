import { EntityActionTypes } from '../actions/action-types';
import { setNewState } from './reduction.utils';
export const deselectReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Deselect: {
            const newState = {
                ...entityState,
                selections: {
                    ...entityState.selections,
                    currentEntityKey: undefined
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzZWxlY3QucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHkvc3JjL2xpYi9yZWR1Y2VyL2Rlc2VsZWN0LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBa0IsRUFBRSxFQUFFO0lBQ3hHLFFBQVEsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFCLEtBQUssaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLFFBQVEsR0FBc0I7Z0JBQ2xDLEdBQUcsV0FBVztnQkFDZCxVQUFVLEVBQUU7b0JBQ1YsR0FBRyxXQUFXLENBQUMsVUFBVTtvQkFDekIsZ0JBQWdCLEVBQUUsU0FBUztpQkFDNUI7YUFDRixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IElFbnRpdHlTdGF0ZSB9IGZyb20gJy4uL3V0aWwvZW50aXR5LXN0YXRlJztcbmltcG9ydCB7IFJlZHVjdGlvbkJhc2lzIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB7IHNldE5ld1N0YXRlIH0gZnJvbSAnLi9yZWR1Y3Rpb24udXRpbHMnO1xuXG5leHBvcnQgY29uc3QgZGVzZWxlY3RSZWR1Y2VyID0gKHsgc3RhdGUsIGFjdGlvbiwgc3RhdGVOYW1lLCBmZWF0dXJlTmFtZSwgZW50aXR5U3RhdGUgfTogUmVkdWN0aW9uQmFzaXMpID0+IHtcbiAgc3dpdGNoIChhY3Rpb24uYWN0aW9uVHlwZSkge1xuICAgIGNhc2UgRW50aXR5QWN0aW9uVHlwZXMuRGVzZWxlY3Q6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBJRW50aXR5U3RhdGU8YW55PiA9IHtcbiAgICAgICAgLi4uZW50aXR5U3RhdGUsXG4gICAgICAgIHNlbGVjdGlvbnM6IHtcbiAgICAgICAgICAuLi5lbnRpdHlTdGF0ZS5zZWxlY3Rpb25zLFxuICAgICAgICAgIGN1cnJlbnRFbnRpdHlLZXk6IHVuZGVmaW5lZFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXh0ID0gc2V0TmV3U3RhdGUoZmVhdHVyZU5hbWUsIHN0YXRlTmFtZSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH1cbiAgfVxufTtcbiJdfQ==