import { EntityActionTypes } from '../actions/action-types';
import { setNewState } from './reduction.utils';
export const clearReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Clear: {
            const newState = {
                // If the developer has included their own extra state properties with buildState(Entity, { /* custom */ })
                // then we don't want to mess with it. We want to leave any custom developer state as-is!
                // Spread in the current state to ensure we KEEP custom developer-defined extra state properties:
                ...entityState,
                // Now reset the auto-entity managed properties to their default states:
                entities: {},
                ids: [],
                selections: undefined,
                edits: undefined,
                paging: undefined,
                tracking: undefined
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYXIucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHkvc3JjL2xpYi9yZWR1Y2VyL2NsZWFyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWhELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBa0IsRUFBRSxFQUFFO0lBQ3JHLFFBQVEsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzFCLEtBQUssaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QixNQUFNLFFBQVEsR0FBc0I7Z0JBQ2xDLDJHQUEyRztnQkFDM0cseUZBQXlGO2dCQUN6RixpR0FBaUc7Z0JBQ2pHLEdBQUcsV0FBVztnQkFDZCx3RUFBd0U7Z0JBQ3hFLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEdBQUcsRUFBRSxFQUFFO2dCQUNQLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLFFBQVEsRUFBRSxTQUFTO2FBQ3BCLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eUFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgSUVudGl0eVN0YXRlIH0gZnJvbSAnLi4vdXRpbC9lbnRpdHktc3RhdGUnO1xuaW1wb3J0IHsgUmVkdWN0aW9uQmFzaXMgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgc2V0TmV3U3RhdGUgfSBmcm9tICcuL3JlZHVjdGlvbi51dGlscyc7XG5cbmV4cG9ydCBjb25zdCBjbGVhclJlZHVjZXIgPSAoeyBzdGF0ZSwgYWN0aW9uLCBzdGF0ZU5hbWUsIGZlYXR1cmVOYW1lLCBlbnRpdHlTdGF0ZSB9OiBSZWR1Y3Rpb25CYXNpcykgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG4gICAgY2FzZSBFbnRpdHlBY3Rpb25UeXBlcy5DbGVhcjoge1xuICAgICAgY29uc3QgbmV3U3RhdGU6IElFbnRpdHlTdGF0ZTxhbnk+ID0ge1xuICAgICAgICAvLyBJZiB0aGUgZGV2ZWxvcGVyIGhhcyBpbmNsdWRlZCB0aGVpciBvd24gZXh0cmEgc3RhdGUgcHJvcGVydGllcyB3aXRoIGJ1aWxkU3RhdGUoRW50aXR5LCB7IC8qIGN1c3RvbSAqLyB9KVxuICAgICAgICAvLyB0aGVuIHdlIGRvbid0IHdhbnQgdG8gbWVzcyB3aXRoIGl0LiBXZSB3YW50IHRvIGxlYXZlIGFueSBjdXN0b20gZGV2ZWxvcGVyIHN0YXRlIGFzLWlzIVxuICAgICAgICAvLyBTcHJlYWQgaW4gdGhlIGN1cnJlbnQgc3RhdGUgdG8gZW5zdXJlIHdlIEtFRVAgY3VzdG9tIGRldmVsb3Blci1kZWZpbmVkIGV4dHJhIHN0YXRlIHByb3BlcnRpZXM6XG4gICAgICAgIC4uLmVudGl0eVN0YXRlLFxuICAgICAgICAvLyBOb3cgcmVzZXQgdGhlIGF1dG8tZW50aXR5IG1hbmFnZWQgcHJvcGVydGllcyB0byB0aGVpciBkZWZhdWx0IHN0YXRlczpcbiAgICAgICAgZW50aXRpZXM6IHt9LFxuICAgICAgICBpZHM6IFtdLFxuICAgICAgICBzZWxlY3Rpb25zOiB1bmRlZmluZWQsXG4gICAgICAgIGVkaXRzOiB1bmRlZmluZWQsXG4gICAgICAgIHBhZ2luZzogdW5kZWZpbmVkLFxuICAgICAgICB0cmFja2luZzogdW5kZWZpbmVkXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXh0ID0gc2V0TmV3U3RhdGUoZmVhdHVyZU5hbWUsIHN0YXRlTmFtZSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH1cbiAgfVxufTtcbiJdfQ==