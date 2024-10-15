import { EntityActionTypes } from '../actions/action-types';
import { cloneEntities, deleteSingle, safeGetKey, setNewState } from './reduction.utils';
export const deleteReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.Delete: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: true
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteFailure: {
            const newState = {
                ...entityState,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
        case EntityActionTypes.DeleteSuccess: {
            const deleteEntity = action.entity;
            const deleteKey = safeGetKey(action, deleteEntity);
            const entities = cloneEntities(entityState.entities);
            const ids = entityState.ids.filter(eid => eid !== deleteKey);
            // Better to NOT delete the entity key, but set it to undefined,
            // to avoid re-generating the underlying runtime class (TODO: find and add link to V8 jit and runtime)
            const newState = {
                ...entityState,
                entities: deleteSingle(entities || {}, deleteKey),
                ids,
                tracking: {
                    ...entityState.tracking,
                    isDeleting: false,
                    deletedAt: Date.now()
                }
            };
            const next = setNewState(featureName, stateName, state, newState);
            return next;
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLnJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWF1dG8tZW50aXR5L3NyYy9saWIvcmVkdWNlci9kZWxldGUucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUk1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekYsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFrQixFQUFFLEVBQUU7SUFDdEcsUUFBUSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsS0FBSyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sUUFBUSxHQUFzQjtnQkFDbEMsR0FBRyxXQUFXO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixHQUFHLFdBQVcsQ0FBQyxRQUFRO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7YUFDRixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELEtBQUssaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLFFBQVEsR0FBc0I7Z0JBQ2xDLEdBQUcsV0FBVztnQkFDZCxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxXQUFXLENBQUMsUUFBUTtvQkFDdkIsVUFBVSxFQUFFLEtBQUs7aUJBQ2xCO2FBQ0YsQ0FBQztZQUVGLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNsRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxLQUFLLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDckMsTUFBTSxZQUFZLEdBQUksTUFBNkIsQ0FBQyxNQUFNLENBQUM7WUFDM0QsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNuRCxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1lBRTdELGdFQUFnRTtZQUNoRSxzR0FBc0c7WUFDdEcsTUFBTSxRQUFRLEdBQXNCO2dCQUNsQyxHQUFHLFdBQVc7Z0JBQ2QsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFLFNBQVMsQ0FBQztnQkFDakQsR0FBRztnQkFDSCxRQUFRLEVBQUU7b0JBQ1IsR0FBRyxXQUFXLENBQUMsUUFBUTtvQkFDdkIsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO2lCQUN0QjthQUNGLENBQUM7WUFFRixNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eUFjdGlvblR5cGVzIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgRGVsZXRlU3VjY2VzcyB9IGZyb20gJy4uL2FjdGlvbnMvZGVsZXRlLWFjdGlvbnMnO1xuaW1wb3J0IHsgSUVudGl0eVN0YXRlIH0gZnJvbSAnLi4vdXRpbC9lbnRpdHktc3RhdGUnO1xuaW1wb3J0IHsgUmVkdWN0aW9uQmFzaXMgfSBmcm9tICcuL3JlZHVjZXInO1xuaW1wb3J0IHsgY2xvbmVFbnRpdGllcywgZGVsZXRlU2luZ2xlLCBzYWZlR2V0S2V5LCBzZXROZXdTdGF0ZSB9IGZyb20gJy4vcmVkdWN0aW9uLnV0aWxzJztcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVJlZHVjZXIgPSAoeyBzdGF0ZSwgYWN0aW9uLCBzdGF0ZU5hbWUsIGZlYXR1cmVOYW1lLCBlbnRpdHlTdGF0ZSB9OiBSZWR1Y3Rpb25CYXNpcykgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG4gICAgY2FzZSBFbnRpdHlBY3Rpb25UeXBlcy5EZWxldGU6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBJRW50aXR5U3RhdGU8YW55PiA9IHtcbiAgICAgICAgLi4uZW50aXR5U3RhdGUsXG4gICAgICAgIHRyYWNraW5nOiB7XG4gICAgICAgICAgLi4uZW50aXR5U3RhdGUudHJhY2tpbmcsXG4gICAgICAgICAgaXNEZWxldGluZzogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBuZXh0ID0gc2V0TmV3U3RhdGUoZmVhdHVyZU5hbWUsIHN0YXRlTmFtZSwgc3RhdGUsIG5ld1N0YXRlKTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH1cbiAgICBjYXNlIEVudGl0eUFjdGlvblR5cGVzLkRlbGV0ZUZhaWx1cmU6IHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBJRW50aXR5U3RhdGU8YW55PiA9IHtcbiAgICAgICAgLi4uZW50aXR5U3RhdGUsXG4gICAgICAgIHRyYWNraW5nOiB7XG4gICAgICAgICAgLi4uZW50aXR5U3RhdGUudHJhY2tpbmcsXG4gICAgICAgICAgaXNEZWxldGluZzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dCA9IHNldE5ld1N0YXRlKGZlYXR1cmVOYW1lLCBzdGF0ZU5hbWUsIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG4gICAgY2FzZSBFbnRpdHlBY3Rpb25UeXBlcy5EZWxldGVTdWNjZXNzOiB7XG4gICAgICBjb25zdCBkZWxldGVFbnRpdHkgPSAoYWN0aW9uIGFzIERlbGV0ZVN1Y2Nlc3M8YW55PikuZW50aXR5O1xuICAgICAgY29uc3QgZGVsZXRlS2V5ID0gc2FmZUdldEtleShhY3Rpb24sIGRlbGV0ZUVudGl0eSk7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGNsb25lRW50aXRpZXMoZW50aXR5U3RhdGUuZW50aXRpZXMpO1xuICAgICAgY29uc3QgaWRzID0gZW50aXR5U3RhdGUuaWRzLmZpbHRlcihlaWQgPT4gZWlkICE9PSBkZWxldGVLZXkpO1xuXG4gICAgICAvLyBCZXR0ZXIgdG8gTk9UIGRlbGV0ZSB0aGUgZW50aXR5IGtleSwgYnV0IHNldCBpdCB0byB1bmRlZmluZWQsXG4gICAgICAvLyB0byBhdm9pZCByZS1nZW5lcmF0aW5nIHRoZSB1bmRlcmx5aW5nIHJ1bnRpbWUgY2xhc3MgKFRPRE86IGZpbmQgYW5kIGFkZCBsaW5rIHRvIFY4IGppdCBhbmQgcnVudGltZSlcbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBJRW50aXR5U3RhdGU8YW55PiA9IHtcbiAgICAgICAgLi4uZW50aXR5U3RhdGUsXG4gICAgICAgIGVudGl0aWVzOiBkZWxldGVTaW5nbGUoZW50aXRpZXMgfHwge30sIGRlbGV0ZUtleSksXG4gICAgICAgIGlkcyxcbiAgICAgICAgdHJhY2tpbmc6IHtcbiAgICAgICAgICAuLi5lbnRpdHlTdGF0ZS50cmFja2luZyxcbiAgICAgICAgICBpc0RlbGV0aW5nOiBmYWxzZSxcbiAgICAgICAgICBkZWxldGVkQXQ6IERhdGUubm93KClcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY29uc3QgbmV4dCA9IHNldE5ld1N0YXRlKGZlYXR1cmVOYW1lLCBzdGF0ZU5hbWUsIHN0YXRlLCBuZXdTdGF0ZSk7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG4gIH1cbn07XG4iXX0=