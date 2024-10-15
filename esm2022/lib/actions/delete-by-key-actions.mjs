import { EntityActionTypes } from './action-types';
import { EntityAction } from './entity-action';
/**
 * Deletes a single entity by key, corresponding to HTTP DELETE operation
 */
export class DeleteByKey extends EntityAction {
    constructor(type, key, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteByKey, correlationId);
        this.key = key;
        this.criteria = criteria;
    }
}
export class DeleteByKeySuccess extends EntityAction {
    constructor(type, key, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteByKeySuccess, correlationId);
        this.key = key;
        this.criteria = criteria;
    }
}
export class DeleteByKeyFailure extends EntityAction {
    constructor(type, error, key, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteByKeyFailure, correlationId);
        this.error = error;
        this.key = key;
        this.criteria = criteria;
    }
}
/**
 * Deletes many entities, corresponding to HTTP DELETE operation
 */
export class DeleteManyByKeys extends EntityAction {
    constructor(type, keys, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManyByKeys, correlationId);
        this.keys = keys;
        this.criteria = criteria;
    }
}
export class DeleteManyByKeysSuccess extends EntityAction {
    constructor(type, keys, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManyByKeysSuccess, correlationId);
        this.keys = keys;
        this.criteria = criteria;
    }
}
export class DeleteManyByKeysFailure extends EntityAction {
    constructor(type, error, keys, criteria, correlationId) {
        super(type, EntityActionTypes.DeleteManyByKeysFailure, correlationId);
        this.error = error;
        this.keys = keys;
        this.criteria = criteria;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWJ5LWtleS1hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL2FjdGlvbnMvZGVsZXRlLWJ5LWtleS1hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQzs7R0FFRztBQUNILE1BQU0sT0FBTyxXQUFvQixTQUFRLFlBQW9CO0lBQzNELFlBQVksSUFBc0IsRUFBUyxHQUFtQixFQUFTLFFBQWMsRUFBRSxhQUFzQjtRQUMzRyxLQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQURqQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFFckYsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLGtCQUEyQixTQUFRLFlBQW9CO0lBQ2xFLFlBQVksSUFBc0IsRUFBUyxHQUFtQixFQUFTLFFBQWMsRUFBRSxhQUFzQjtRQUMzRyxLQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRHhCLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTTtJQUVyRixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sa0JBQTJCLFNBQVEsWUFBb0I7SUFDbEUsWUFBWSxJQUFzQixFQUFTLEtBQVUsRUFBUyxHQUFtQixFQUFTLFFBQWMsRUFBRSxhQUFzQjtRQUM5SCxLQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFFeEcsQ0FBQztDQUNGO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sZ0JBQXlCLFNBQVEsWUFBb0I7SUFDaEUsWUFBWSxJQUFzQixFQUFTLElBQXNCLEVBQVMsUUFBYyxFQUFFLGFBQXNCO1FBQzlHLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFEdEIsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBRXhGLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyx1QkFBZ0MsU0FBUSxZQUFvQjtJQUN2RSxZQUFZLElBQXNCLEVBQVMsSUFBc0IsRUFBUyxRQUFjLEVBQUUsYUFBc0I7UUFDOUcsS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUQ3QixTQUFJLEdBQUosSUFBSSxDQUFrQjtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFFeEYsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHVCQUFnQyxTQUFRLFlBQW9CO0lBQ3ZFLFlBQVksSUFBc0IsRUFBUyxLQUFVLEVBQVMsSUFBc0IsRUFBUyxRQUFjLEVBQUUsYUFBc0I7UUFDakksS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUQ3QixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBRTNHLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eUlkZW50aXR5IH0gZnJvbSAnLi4vdHlwZXMvZW50aXR5LWlkZW50aXR5JztcbmltcG9ydCB7IEVudGl0eUFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi9lbnRpdHktYWN0aW9uJztcblxuLyoqXG4gKiBEZWxldGVzIGEgc2luZ2xlIGVudGl0eSBieSBrZXksIGNvcnJlc3BvbmRpbmcgdG8gSFRUUCBERUxFVEUgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxldGVCeUtleTxUTW9kZWw+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFRNb2RlbD4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlOiBuZXcgKCkgPT4gVE1vZGVsLCBwdWJsaWMga2V5OiBFbnRpdHlJZGVudGl0eSwgcHVibGljIGNyaXRlcmlhPzogYW55LCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKSB7XG4gICAgc3VwZXIodHlwZSwgRW50aXR5QWN0aW9uVHlwZXMuRGVsZXRlQnlLZXksIGNvcnJlbGF0aW9uSWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVCeUtleVN1Y2Nlc3M8VE1vZGVsPiBleHRlbmRzIEVudGl0eUFjdGlvbjxUTW9kZWw+IHtcbiAgY29uc3RydWN0b3IodHlwZTogbmV3ICgpID0+IFRNb2RlbCwgcHVibGljIGtleTogRW50aXR5SWRlbnRpdHksIHB1YmxpYyBjcml0ZXJpYT86IGFueSwgY29ycmVsYXRpb25JZD86IHN0cmluZykge1xuICAgIHN1cGVyKHR5cGUsIEVudGl0eUFjdGlvblR5cGVzLkRlbGV0ZUJ5S2V5U3VjY2VzcywgY29ycmVsYXRpb25JZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZUJ5S2V5RmFpbHVyZTxUTW9kZWw+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFRNb2RlbD4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlOiBuZXcgKCkgPT4gVE1vZGVsLCBwdWJsaWMgZXJyb3I6IGFueSwgcHVibGljIGtleTogRW50aXR5SWRlbnRpdHksIHB1YmxpYyBjcml0ZXJpYT86IGFueSwgY29ycmVsYXRpb25JZD86IHN0cmluZykge1xuICAgIHN1cGVyKHR5cGUsIEVudGl0eUFjdGlvblR5cGVzLkRlbGV0ZUJ5S2V5RmFpbHVyZSwgY29ycmVsYXRpb25JZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEZWxldGVzIG1hbnkgZW50aXRpZXMsIGNvcnJlc3BvbmRpbmcgdG8gSFRUUCBERUxFVEUgb3BlcmF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWxldGVNYW55QnlLZXlzPFRNb2RlbD4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IG5ldyAoKSA9PiBUTW9kZWwsIHB1YmxpYyBrZXlzOiBFbnRpdHlJZGVudGl0eVtdLCBwdWJsaWMgY3JpdGVyaWE/OiBhbnksIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcih0eXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5EZWxldGVNYW55QnlLZXlzLCBjb3JyZWxhdGlvbklkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlTWFueUJ5S2V5c1N1Y2Nlc3M8VE1vZGVsPiBleHRlbmRzIEVudGl0eUFjdGlvbjxUTW9kZWw+IHtcbiAgY29uc3RydWN0b3IodHlwZTogbmV3ICgpID0+IFRNb2RlbCwgcHVibGljIGtleXM6IEVudGl0eUlkZW50aXR5W10sIHB1YmxpYyBjcml0ZXJpYT86IGFueSwgY29ycmVsYXRpb25JZD86IHN0cmluZykge1xuICAgIHN1cGVyKHR5cGUsIEVudGl0eUFjdGlvblR5cGVzLkRlbGV0ZU1hbnlCeUtleXNTdWNjZXNzLCBjb3JyZWxhdGlvbklkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlTWFueUJ5S2V5c0ZhaWx1cmU8VE1vZGVsPiBleHRlbmRzIEVudGl0eUFjdGlvbjxUTW9kZWw+IHtcbiAgY29uc3RydWN0b3IodHlwZTogbmV3ICgpID0+IFRNb2RlbCwgcHVibGljIGVycm9yOiBhbnksIHB1YmxpYyBrZXlzOiBFbnRpdHlJZGVudGl0eVtdLCBwdWJsaWMgY3JpdGVyaWE/OiBhbnksIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcih0eXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5EZWxldGVNYW55QnlLZXlzRmFpbHVyZSwgY29ycmVsYXRpb25JZCk7XG4gIH1cbn1cbiJdfQ==