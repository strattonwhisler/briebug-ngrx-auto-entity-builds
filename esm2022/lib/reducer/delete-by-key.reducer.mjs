import { EntityActionTypes } from '../actions/action-types';
import { cloneEntities, deleteSingle, setNewState } from './reduction.utils';
export const deleteByKeyReducer = ({ state, action, stateName, featureName, entityState }) => {
    switch (action.actionType) {
        case EntityActionTypes.DeleteByKey: {
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
        case EntityActionTypes.DeleteByKeyFailure: {
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
        case EntityActionTypes.DeleteByKeySuccess: {
            const deleteKey = action.key;
            const clonedEntities = cloneEntities(entityState.entities);
            const entities = deleteSingle(clonedEntities || {}, deleteKey);
            const ids = entityState.ids.filter(eid => eid in entities);
            // Better to NOT delete the entity key, but set it to undefined,
            // to avoid re-generating the underlying runtime class (TODO: find and add link to V8 jit and runtime)
            const newState = {
                ...entityState,
                entities,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWJ5LWtleS5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL3JlZHVjZXIvZGVsZXRlLWJ5LWtleS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSTVELE9BQU8sRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRTdFLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFrQixFQUFFLEVBQUU7SUFDM0csUUFBUSxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUIsS0FBSyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sUUFBUSxHQUFzQjtnQkFDbEMsR0FBRyxXQUFXO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixHQUFHLFdBQVcsQ0FBQyxRQUFRO29CQUN2QixVQUFVLEVBQUUsSUFBSTtpQkFDakI7YUFDRixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELEtBQUssaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sUUFBUSxHQUFzQjtnQkFDbEMsR0FBRyxXQUFXO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixHQUFHLFdBQVcsQ0FBQyxRQUFRO29CQUN2QixVQUFVLEVBQUUsS0FBSztpQkFDbEI7YUFDRixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELEtBQUssaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sU0FBUyxHQUFJLE1BQWtDLENBQUMsR0FBRyxDQUFDO1lBQzFELE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0QsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLGNBQWMsSUFBSSxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0QsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUM7WUFFM0QsZ0VBQWdFO1lBQ2hFLHNHQUFzRztZQUN0RyxNQUFNLFFBQVEsR0FBc0I7Z0JBQ2xDLEdBQUcsV0FBVztnQkFDZCxRQUFRO2dCQUNSLEdBQUc7Z0JBQ0gsUUFBUSxFQUFFO29CQUNSLEdBQUcsV0FBVyxDQUFDLFFBQVE7b0JBQ3ZCLFVBQVUsRUFBRSxLQUFLO29CQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtpQkFDdEI7YUFDRixDQUFDO1lBRUYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ2xFLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IERlbGV0ZUJ5S2V5U3VjY2VzcyB9IGZyb20gJy4uL2FjdGlvbnMvZGVsZXRlLWJ5LWtleS1hY3Rpb25zJztcbmltcG9ydCB7IElFbnRpdHlTdGF0ZSB9IGZyb20gJy4uL3V0aWwvZW50aXR5LXN0YXRlJztcbmltcG9ydCB7IFJlZHVjdGlvbkJhc2lzIH0gZnJvbSAnLi9yZWR1Y2VyJztcbmltcG9ydCB7IGNsb25lRW50aXRpZXMsIGRlbGV0ZVNpbmdsZSwgc2V0TmV3U3RhdGUgfSBmcm9tICcuL3JlZHVjdGlvbi51dGlscyc7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVCeUtleVJlZHVjZXIgPSAoeyBzdGF0ZSwgYWN0aW9uLCBzdGF0ZU5hbWUsIGZlYXR1cmVOYW1lLCBlbnRpdHlTdGF0ZSB9OiBSZWR1Y3Rpb25CYXNpcykgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi5hY3Rpb25UeXBlKSB7XG4gICAgY2FzZSBFbnRpdHlBY3Rpb25UeXBlcy5EZWxldGVCeUtleToge1xuICAgICAgY29uc3QgbmV3U3RhdGU6IElFbnRpdHlTdGF0ZTxhbnk+ID0ge1xuICAgICAgICAuLi5lbnRpdHlTdGF0ZSxcbiAgICAgICAgdHJhY2tpbmc6IHtcbiAgICAgICAgICAuLi5lbnRpdHlTdGF0ZS50cmFja2luZyxcbiAgICAgICAgICBpc0RlbGV0aW5nOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHQgPSBzZXROZXdTdGF0ZShmZWF0dXJlTmFtZSwgc3RhdGVOYW1lLCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuICAgIGNhc2UgRW50aXR5QWN0aW9uVHlwZXMuRGVsZXRlQnlLZXlGYWlsdXJlOiB7XG4gICAgICBjb25zdCBuZXdTdGF0ZTogSUVudGl0eVN0YXRlPGFueT4gPSB7XG4gICAgICAgIC4uLmVudGl0eVN0YXRlLFxuICAgICAgICB0cmFja2luZzoge1xuICAgICAgICAgIC4uLmVudGl0eVN0YXRlLnRyYWNraW5nLFxuICAgICAgICAgIGlzRGVsZXRpbmc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHQgPSBzZXROZXdTdGF0ZShmZWF0dXJlTmFtZSwgc3RhdGVOYW1lLCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuICAgIGNhc2UgRW50aXR5QWN0aW9uVHlwZXMuRGVsZXRlQnlLZXlTdWNjZXNzOiB7XG4gICAgICBjb25zdCBkZWxldGVLZXkgPSAoYWN0aW9uIGFzIERlbGV0ZUJ5S2V5U3VjY2Vzczxhbnk+KS5rZXk7XG4gICAgICBjb25zdCBjbG9uZWRFbnRpdGllcyA9IGNsb25lRW50aXRpZXMoZW50aXR5U3RhdGUuZW50aXRpZXMpO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBkZWxldGVTaW5nbGUoY2xvbmVkRW50aXRpZXMgfHwge30sIGRlbGV0ZUtleSk7XG4gICAgICBjb25zdCBpZHMgPSBlbnRpdHlTdGF0ZS5pZHMuZmlsdGVyKGVpZCA9PiBlaWQgaW4gZW50aXRpZXMpO1xuXG4gICAgICAvLyBCZXR0ZXIgdG8gTk9UIGRlbGV0ZSB0aGUgZW50aXR5IGtleSwgYnV0IHNldCBpdCB0byB1bmRlZmluZWQsXG4gICAgICAvLyB0byBhdm9pZCByZS1nZW5lcmF0aW5nIHRoZSB1bmRlcmx5aW5nIHJ1bnRpbWUgY2xhc3MgKFRPRE86IGZpbmQgYW5kIGFkZCBsaW5rIHRvIFY4IGppdCBhbmQgcnVudGltZSlcbiAgICAgIGNvbnN0IG5ld1N0YXRlOiBJRW50aXR5U3RhdGU8YW55PiA9IHtcbiAgICAgICAgLi4uZW50aXR5U3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgICBpZHMsXG4gICAgICAgIHRyYWNraW5nOiB7XG4gICAgICAgICAgLi4uZW50aXR5U3RhdGUudHJhY2tpbmcsXG4gICAgICAgICAgaXNEZWxldGluZzogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlZEF0OiBEYXRlLm5vdygpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG5leHQgPSBzZXROZXdTdGF0ZShmZWF0dXJlTmFtZSwgc3RhdGVOYW1lLCBzdGF0ZSwgbmV3U3RhdGUpO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfVxuICB9XG59O1xuIl19