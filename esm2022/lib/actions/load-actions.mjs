import { EntityActionTypes } from './action-types';
import { EntityAction } from './entity-action';
/**
 * Loads a single instance of an entity if necessary
 * HTTP GET /entity/:id operation
 *
 * @remarks:
 * This action will only load the entity if it does not exist in state, referenced by key
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param keys - (optional) The keys of the entity you wish to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export class LoadIfNecessary extends EntityAction {
    constructor(type, keys, maxAge, criteria, correlationId) {
        super(type, EntityActionTypes.LoadIfNecessary, correlationId);
        this.keys = keys;
        this.maxAge = maxAge;
        this.criteria = criteria;
    }
}
/**
 * Loads a single instance of an entity
 * HTTP GET /entity/:id
 *
 * @remarks
 * The loaded entity will replace any existing entity in state
 *
 * @param type - The entity model decorated with @Entity
 * @param keys - (optional) The keys of the entity you wish to load
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export class Load extends EntityAction {
    constructor(type, keys, criteria, correlationId) {
        super(type, EntityActionTypes.Load, correlationId);
        this.keys = keys;
        this.criteria = criteria;
    }
}
/**
 * Handles a successful response for loading an entity
 * HTTP GET /entity/:id
 *
 * @param type - The entity model decorated with @Entity
 * @param entity - The entity that was loaded
 * @param keys - (optional) The keys of the entity you loaded
 * @param criteria - (optional) The custom criteria from the initial load action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load action
 */
export class LoadSuccess extends EntityAction {
    constructor(type, entity, keys, criteria, correlationId) {
        super(type, EntityActionTypes.LoadSuccess, correlationId);
        this.entity = entity;
        this.keys = keys;
        this.criteria = criteria;
    }
}
/**
 * Handles an error response when loading an entity
 * HTTP GET /entity/:id
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param keys - The keys of the entity you loaded
 * @param criteria - (optional) The custom criteria from the initial load action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load action
 */
export class LoadFailure extends EntityAction {
    constructor(type, error, keys, criteria, correlationId) {
        super(type, EntityActionTypes.LoadFailure, correlationId);
        this.error = error;
        this.keys = keys;
        this.criteria = criteria;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL2FjdGlvbnMvbG9hZC1hY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQzs7Ozs7Ozs7Ozs7OztHQWFHO0FBQ0gsTUFBTSxPQUFPLGVBQXdCLFNBQVEsWUFBb0I7SUFDL0QsWUFBWSxJQUFzQixFQUFTLElBQVUsRUFBUyxNQUFlLEVBQVMsUUFBYyxFQUFFLGFBQXNCO1FBQzFILEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRHJCLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTTtJQUVwRyxDQUFDO0NBQ0Y7QUFFRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sT0FBTyxJQUFhLFNBQVEsWUFBb0I7SUFDcEQsWUFBWSxJQUFzQixFQUFTLElBQVUsRUFBUyxRQUFjLEVBQUUsYUFBc0I7UUFDbEcsS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFEVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTTtJQUU1RSxDQUFDO0NBQ0Y7QUFFRDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLE9BQU8sV0FBb0IsU0FBUSxZQUFvQjtJQUMzRCxZQUFZLElBQXNCLEVBQVMsTUFBYyxFQUFTLElBQVUsRUFBUyxRQUFjLEVBQUUsYUFBc0I7UUFDekgsS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFEakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBRW5HLENBQUM7Q0FDRjtBQUVEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sT0FBTyxXQUFvQixTQUFRLFlBQW9CO0lBQzNELFlBQVksSUFBc0IsRUFBUyxLQUFVLEVBQVMsSUFBVSxFQUFTLFFBQWMsRUFBRSxhQUFzQjtRQUNySCxLQUFLLENBQUMsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQURqQixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFFL0YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5QWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuL2VudGl0eS1hY3Rpb24nO1xuXG4vKipcbiAqIExvYWRzIGEgc2luZ2xlIGluc3RhbmNlIG9mIGFuIGVudGl0eSBpZiBuZWNlc3NhcnlcbiAqIEhUVFAgR0VUIC9lbnRpdHkvOmlkIG9wZXJhdGlvblxuICpcbiAqIEByZW1hcmtzOlxuICogVGhpcyBhY3Rpb24gd2lsbCBvbmx5IGxvYWQgdGhlIGVudGl0eSBpZiBpdCBkb2VzIG5vdCBleGlzdCBpbiBzdGF0ZSwgcmVmZXJlbmNlZCBieSBrZXlcbiAqIFRoaXMgaXMgYW4gYWx0ZXJuYXRpdmUgaW5pdGlhdGlvbiBhY3Rpb24gdGhhdCB3aWxsIHVsdGltYXRlbHkgcmVzdWx0IGluIExvYWQgYmVpbmcgZGlzcGF0Y2hlZFxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIGVudGl0eSBtb2RlbCBkZWNvcmF0ZWQgd2l0aCBARW50aXR5XG4gKiBAcGFyYW0ga2V5cyAtIChvcHRpb25hbCkgVGhlIGtleXMgb2YgdGhlIGVudGl0eSB5b3Ugd2lzaCB0byBsb2FkXG4gKiBAcGFyYW0gbWF4QWdlIC0gKG9wdGlvbmFsKSBUaGUgbWF4IGFnZSBvZiB0aGUgZW50aXR5LCBhZnRlciB3aGljaCBsb2FkIHdpbGwgYmUgcGVyZm9ybWVkIHJlZ2FyZGxlc3NcbiAqIEBwYXJhbSBjcml0ZXJpYSAtIChvcHRpb25hbCkgVGhlIGN1c3RvbSBjcml0ZXJpYSBmb3IgdGhpcyBhY3Rpb25cbiAqIEBwYXJhbSBjb3JyZWxhdGlvbklkIC0gKG9wdGlvbmFsKSBBIGN1c3RvbSBjb3JyZWxhdGlvbiBpZCBmb3IgdGhpcyBhY3Rpb247IFVzZSB0byBjb3JyZWxhdGUgc3Vic2VxdWVudCByZXN1bHQgYWN0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgTG9hZElmTmVjZXNzYXJ5PFRNb2RlbD4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IG5ldyAoKSA9PiBUTW9kZWwsIHB1YmxpYyBrZXlzPzogYW55LCBwdWJsaWMgbWF4QWdlPzogbnVtYmVyLCBwdWJsaWMgY3JpdGVyaWE/OiBhbnksIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcih0eXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5Mb2FkSWZOZWNlc3NhcnksIGNvcnJlbGF0aW9uSWQpO1xuICB9XG59XG5cbi8qKlxuICogTG9hZHMgYSBzaW5nbGUgaW5zdGFuY2Ugb2YgYW4gZW50aXR5XG4gKiBIVFRQIEdFVCAvZW50aXR5LzppZFxuICpcbiAqIEByZW1hcmtzXG4gKiBUaGUgbG9hZGVkIGVudGl0eSB3aWxsIHJlcGxhY2UgYW55IGV4aXN0aW5nIGVudGl0eSBpbiBzdGF0ZVxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIGVudGl0eSBtb2RlbCBkZWNvcmF0ZWQgd2l0aCBARW50aXR5XG4gKiBAcGFyYW0ga2V5cyAtIChvcHRpb25hbCkgVGhlIGtleXMgb2YgdGhlIGVudGl0eSB5b3Ugd2lzaCB0byBsb2FkXG4gKiBAcGFyYW0gY3JpdGVyaWEgLSAob3B0aW9uYWwpIFRoZSBjdXN0b20gY3JpdGVyaWEgZm9yIHRoaXMgYWN0aW9uXG4gKiBAcGFyYW0gY29ycmVsYXRpb25JZCAtIChvcHRpb25hbCkgQSBjdXN0b20gY29ycmVsYXRpb24gaWQgZm9yIHRoaXMgYWN0aW9uOyBVc2UgdG8gY29ycmVsYXRlIHN1YnNlcXVlbnQgcmVzdWx0IGFjdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWQ8VE1vZGVsPiBleHRlbmRzIEVudGl0eUFjdGlvbjxUTW9kZWw+IHtcbiAgY29uc3RydWN0b3IodHlwZTogbmV3ICgpID0+IFRNb2RlbCwgcHVibGljIGtleXM/OiBhbnksIHB1YmxpYyBjcml0ZXJpYT86IGFueSwgY29ycmVsYXRpb25JZD86IHN0cmluZykge1xuICAgIHN1cGVyKHR5cGUsIEVudGl0eUFjdGlvblR5cGVzLkxvYWQsIGNvcnJlbGF0aW9uSWQpO1xuICB9XG59XG5cbi8qKlxuICogSGFuZGxlcyBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgZm9yIGxvYWRpbmcgYW4gZW50aXR5XG4gKiBIVFRQIEdFVCAvZW50aXR5LzppZFxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIGVudGl0eSBtb2RlbCBkZWNvcmF0ZWQgd2l0aCBARW50aXR5XG4gKiBAcGFyYW0gZW50aXR5IC0gVGhlIGVudGl0eSB0aGF0IHdhcyBsb2FkZWRcbiAqIEBwYXJhbSBrZXlzIC0gKG9wdGlvbmFsKSBUaGUga2V5cyBvZiB0aGUgZW50aXR5IHlvdSBsb2FkZWRcbiAqIEBwYXJhbSBjcml0ZXJpYSAtIChvcHRpb25hbCkgVGhlIGN1c3RvbSBjcml0ZXJpYSBmcm9tIHRoZSBpbml0aWFsIGxvYWQgYWN0aW9uXG4gKiBAcGFyYW0gY29ycmVsYXRpb25JZCAtIChvcHRpb25hbCkgVGhlIGNvcnJlbGF0aW9uSWQgZm9yIHRoaXMgYWN0aW9uOyBjb3JyZWxhdGVzIHRvIGluaXRpYWwgbG9hZCBhY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRTdWNjZXNzPFRNb2RlbD4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IG5ldyAoKSA9PiBUTW9kZWwsIHB1YmxpYyBlbnRpdHk6IFRNb2RlbCwgcHVibGljIGtleXM/OiBhbnksIHB1YmxpYyBjcml0ZXJpYT86IGFueSwgY29ycmVsYXRpb25JZD86IHN0cmluZykge1xuICAgIHN1cGVyKHR5cGUsIEVudGl0eUFjdGlvblR5cGVzLkxvYWRTdWNjZXNzLCBjb3JyZWxhdGlvbklkKTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXJyb3IgcmVzcG9uc2Ugd2hlbiBsb2FkaW5nIGFuIGVudGl0eVxuICogSFRUUCBHRVQgL2VudGl0eS86aWRcbiAqXG4gKiBAcGFyYW0gdHlwZSAtIFRoZSBlbnRpdHkgbW9kZWwgZGVjb3JhdGVkIHdpdGggQEVudGl0eVxuICogQHBhcmFtIGVycm9yIC0gVGhlIGVycm9yIG9iamVjdCB0aGF0IHdhcyB0aHJvd25cbiAqIEBwYXJhbSBrZXlzIC0gVGhlIGtleXMgb2YgdGhlIGVudGl0eSB5b3UgbG9hZGVkXG4gKiBAcGFyYW0gY3JpdGVyaWEgLSAob3B0aW9uYWwpIFRoZSBjdXN0b20gY3JpdGVyaWEgZnJvbSB0aGUgaW5pdGlhbCBsb2FkIGFjdGlvblxuICogQHBhcmFtIGNvcnJlbGF0aW9uSWQgLSAob3B0aW9uYWwpIFRoZSBjb3JyZWxhdGlvbklkIGZvciB0aGlzIGFjdGlvbjsgY29ycmVsYXRlcyB0byBpbml0aWFsIGxvYWQgYWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2FkRmFpbHVyZTxUTW9kZWw+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFRNb2RlbD4ge1xuICBjb25zdHJ1Y3Rvcih0eXBlOiBuZXcgKCkgPT4gVE1vZGVsLCBwdWJsaWMgZXJyb3I6IGFueSwgcHVibGljIGtleXM/OiBhbnksIHB1YmxpYyBjcml0ZXJpYT86IGFueSwgY29ycmVsYXRpb25JZD86IHN0cmluZykge1xuICAgIHN1cGVyKHR5cGUsIEVudGl0eUFjdGlvblR5cGVzLkxvYWRGYWlsdXJlLCBjb3JyZWxhdGlvbklkKTtcbiAgfVxufVxuIl19