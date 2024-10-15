import { EntityActionTypes } from './action-types';
import { EntityAction } from './entity-action';
/**
 * Loads instances of a page of entities if necessary
 * HTTP GET /entity?page&size (etc.)
 *
 * @remarks:
 * This action will only load the entity if there is no previous loadedAt date or entities in state,
 * or if the current page information for entities in state does not match the page being loaded
 * This is an alternative initiation action that will ultimately result in Load being dispatched
 *
 * @param type - The entity model decorated with @Entity
 * @param page - The information about the page to load
 * @param maxAge - (optional) The max age of the entity, after which load will be performed regardless
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export class LoadPageIfNecessary extends EntityAction {
    constructor(type, page, maxAge, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPageIfNecessary, correlationId);
        this.page = page;
        this.maxAge = maxAge;
        this.criteria = criteria;
    }
}
/**
 * Loads a single page of an entity
 * HTTP GET /entity?page&size (etc.)
 *
 * @remarks
 * The loaded page of entities will replace all entities for this model in state
 * Will update the current page info in state
 *
 * @param type - The entity model decorated with @Entity
 * @param page - The information about the page to load
 * @param criteria - (optional) The custom criteria for this action
 * @param correlationId - (optional) A custom correlation id for this action; Use to correlate subsequent result actions
 */
export class LoadPage extends EntityAction {
    constructor(type, page, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPage, correlationId);
        this.page = page;
        this.criteria = criteria;
    }
}
/**
 * Handles a successful response for loading a page of entities
 * HTTP GET /entity?page&size (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param entities - The entities that were loaded
 * @param pageInfo - The information about the page loaded
 * @param criteria - (optional) The custom criteria from the initial load page action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load page action
 */
export class LoadPageSuccess extends EntityAction {
    constructor(type, entities, pageInfo, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPageSuccess, correlationId);
        this.entities = entities;
        this.pageInfo = pageInfo;
        this.criteria = criteria;
    }
}
/**
 * Handles an error response when loading a page of entities
 * HTTP GET /entity?page&size (etc.)
 *
 * @param type - The entity model decorated with @Entity
 * @param error - The error object that was thrown
 * @param page - The page you tried to load
 * @param criteria - (optional) The custom criteria from the initial load page action
 * @param correlationId - (optional) The correlationId for this action; correlates to initial load page action
 */
export class LoadPageFailure extends EntityAction {
    constructor(type, error, page, criteria, correlationId) {
        super(type, EntityActionTypes.LoadPageFailure, correlationId);
        this.error = error;
        this.page = page;
        this.criteria = criteria;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1wYWdlLWFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWF1dG8tZW50aXR5L3NyYy9saWIvYWN0aW9ucy9sb2FkLXBhZ2UtYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0M7Ozs7Ozs7Ozs7Ozs7O0dBY0c7QUFDSCxNQUFNLE9BQU8sbUJBQTRCLFNBQVEsWUFBb0I7SUFDbkUsWUFBWSxJQUFzQixFQUFTLElBQVUsRUFBUyxNQUFlLEVBQVMsUUFBYyxFQUFFLGFBQXNCO1FBQzFILEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFEekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLFdBQU0sR0FBTixNQUFNLENBQVM7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFNO0lBRXBHLENBQUM7Q0FDRjtBQUVEOzs7Ozs7Ozs7Ozs7R0FZRztBQUNILE1BQU0sT0FBTyxRQUFpQixTQUFRLFlBQW9CO0lBQ3hELFlBQVksSUFBc0IsRUFBUyxJQUFVLEVBQVMsUUFBYyxFQUFFLGFBQXNCO1FBQ2xHLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRGQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQU07SUFFNUUsQ0FBQztDQUNGO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLGVBQXdCLFNBQVEsWUFBb0I7SUFDL0QsWUFDRSxJQUFzQixFQUNmLFFBQWtCLEVBQ2xCLFFBQW1CLEVBQ25CLFFBQWMsRUFDckIsYUFBc0I7UUFFdEIsS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFMdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQU07SUFJdkIsQ0FBQztDQUNGO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLGVBQXdCLFNBQVEsWUFBb0I7SUFDL0QsWUFBWSxJQUFzQixFQUFTLEtBQVUsRUFBUyxJQUFVLEVBQVMsUUFBYyxFQUFFLGFBQXNCO1FBQ3JILEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRHJCLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTTtJQUUvRixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUGFnZUluZm8sIFBhZ2UgfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb24gfSBmcm9tICcuL2VudGl0eS1hY3Rpb24nO1xuXG4vKipcbiAqIExvYWRzIGluc3RhbmNlcyBvZiBhIHBhZ2Ugb2YgZW50aXRpZXMgaWYgbmVjZXNzYXJ5XG4gKiBIVFRQIEdFVCAvZW50aXR5P3BhZ2Umc2l6ZSAoZXRjLilcbiAqXG4gKiBAcmVtYXJrczpcbiAqIFRoaXMgYWN0aW9uIHdpbGwgb25seSBsb2FkIHRoZSBlbnRpdHkgaWYgdGhlcmUgaXMgbm8gcHJldmlvdXMgbG9hZGVkQXQgZGF0ZSBvciBlbnRpdGllcyBpbiBzdGF0ZSxcbiAqIG9yIGlmIHRoZSBjdXJyZW50IHBhZ2UgaW5mb3JtYXRpb24gZm9yIGVudGl0aWVzIGluIHN0YXRlIGRvZXMgbm90IG1hdGNoIHRoZSBwYWdlIGJlaW5nIGxvYWRlZFxuICogVGhpcyBpcyBhbiBhbHRlcm5hdGl2ZSBpbml0aWF0aW9uIGFjdGlvbiB0aGF0IHdpbGwgdWx0aW1hdGVseSByZXN1bHQgaW4gTG9hZCBiZWluZyBkaXNwYXRjaGVkXG4gKlxuICogQHBhcmFtIHR5cGUgLSBUaGUgZW50aXR5IG1vZGVsIGRlY29yYXRlZCB3aXRoIEBFbnRpdHlcbiAqIEBwYXJhbSBwYWdlIC0gVGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYWdlIHRvIGxvYWRcbiAqIEBwYXJhbSBtYXhBZ2UgLSAob3B0aW9uYWwpIFRoZSBtYXggYWdlIG9mIHRoZSBlbnRpdHksIGFmdGVyIHdoaWNoIGxvYWQgd2lsbCBiZSBwZXJmb3JtZWQgcmVnYXJkbGVzc1xuICogQHBhcmFtIGNyaXRlcmlhIC0gKG9wdGlvbmFsKSBUaGUgY3VzdG9tIGNyaXRlcmlhIGZvciB0aGlzIGFjdGlvblxuICogQHBhcmFtIGNvcnJlbGF0aW9uSWQgLSAob3B0aW9uYWwpIEEgY3VzdG9tIGNvcnJlbGF0aW9uIGlkIGZvciB0aGlzIGFjdGlvbjsgVXNlIHRvIGNvcnJlbGF0ZSBzdWJzZXF1ZW50IHJlc3VsdCBhY3Rpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2FkUGFnZUlmTmVjZXNzYXJ5PFRNb2RlbD4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IG5ldyAoKSA9PiBUTW9kZWwsIHB1YmxpYyBwYWdlOiBQYWdlLCBwdWJsaWMgbWF4QWdlPzogbnVtYmVyLCBwdWJsaWMgY3JpdGVyaWE/OiBhbnksIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcih0eXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5Mb2FkUGFnZUlmTmVjZXNzYXJ5LCBjb3JyZWxhdGlvbklkKTtcbiAgfVxufVxuXG4vKipcbiAqIExvYWRzIGEgc2luZ2xlIHBhZ2Ugb2YgYW4gZW50aXR5XG4gKiBIVFRQIEdFVCAvZW50aXR5P3BhZ2Umc2l6ZSAoZXRjLilcbiAqXG4gKiBAcmVtYXJrc1xuICogVGhlIGxvYWRlZCBwYWdlIG9mIGVudGl0aWVzIHdpbGwgcmVwbGFjZSBhbGwgZW50aXRpZXMgZm9yIHRoaXMgbW9kZWwgaW4gc3RhdGVcbiAqIFdpbGwgdXBkYXRlIHRoZSBjdXJyZW50IHBhZ2UgaW5mbyBpbiBzdGF0ZVxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIGVudGl0eSBtb2RlbCBkZWNvcmF0ZWQgd2l0aCBARW50aXR5XG4gKiBAcGFyYW0gcGFnZSAtIFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcGFnZSB0byBsb2FkXG4gKiBAcGFyYW0gY3JpdGVyaWEgLSAob3B0aW9uYWwpIFRoZSBjdXN0b20gY3JpdGVyaWEgZm9yIHRoaXMgYWN0aW9uXG4gKiBAcGFyYW0gY29ycmVsYXRpb25JZCAtIChvcHRpb25hbCkgQSBjdXN0b20gY29ycmVsYXRpb24gaWQgZm9yIHRoaXMgYWN0aW9uOyBVc2UgdG8gY29ycmVsYXRlIHN1YnNlcXVlbnQgcmVzdWx0IGFjdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRQYWdlPFRNb2RlbD4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IG5ldyAoKSA9PiBUTW9kZWwsIHB1YmxpYyBwYWdlOiBQYWdlLCBwdWJsaWMgY3JpdGVyaWE/OiBhbnksIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmcpIHtcbiAgICBzdXBlcih0eXBlLCBFbnRpdHlBY3Rpb25UeXBlcy5Mb2FkUGFnZSwgY29ycmVsYXRpb25JZCk7XG4gIH1cbn1cblxuLyoqXG4gKiBIYW5kbGVzIGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBmb3IgbG9hZGluZyBhIHBhZ2Ugb2YgZW50aXRpZXNcbiAqIEhUVFAgR0VUIC9lbnRpdHk/cGFnZSZzaXplIChldGMuKVxuICpcbiAqIEBwYXJhbSB0eXBlIC0gVGhlIGVudGl0eSBtb2RlbCBkZWNvcmF0ZWQgd2l0aCBARW50aXR5XG4gKiBAcGFyYW0gZW50aXRpZXMgLSBUaGUgZW50aXRpZXMgdGhhdCB3ZXJlIGxvYWRlZFxuICogQHBhcmFtIHBhZ2VJbmZvIC0gVGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwYWdlIGxvYWRlZFxuICogQHBhcmFtIGNyaXRlcmlhIC0gKG9wdGlvbmFsKSBUaGUgY3VzdG9tIGNyaXRlcmlhIGZyb20gdGhlIGluaXRpYWwgbG9hZCBwYWdlIGFjdGlvblxuICogQHBhcmFtIGNvcnJlbGF0aW9uSWQgLSAob3B0aW9uYWwpIFRoZSBjb3JyZWxhdGlvbklkIGZvciB0aGlzIGFjdGlvbjsgY29ycmVsYXRlcyB0byBpbml0aWFsIGxvYWQgcGFnZSBhY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExvYWRQYWdlU3VjY2VzczxUTW9kZWw+IGV4dGVuZHMgRW50aXR5QWN0aW9uPFRNb2RlbD4ge1xuICBjb25zdHJ1Y3RvcihcbiAgICB0eXBlOiBuZXcgKCkgPT4gVE1vZGVsLFxuICAgIHB1YmxpYyBlbnRpdGllczogVE1vZGVsW10sXG4gICAgcHVibGljIHBhZ2VJbmZvOiBJUGFnZUluZm8sXG4gICAgcHVibGljIGNyaXRlcmlhPzogYW55LFxuICAgIGNvcnJlbGF0aW9uSWQ/OiBzdHJpbmdcbiAgKSB7XG4gICAgc3VwZXIodHlwZSwgRW50aXR5QWN0aW9uVHlwZXMuTG9hZFBhZ2VTdWNjZXNzLCBjb3JyZWxhdGlvbklkKTtcbiAgfVxufVxuXG4vKipcbiAqIEhhbmRsZXMgYW4gZXJyb3IgcmVzcG9uc2Ugd2hlbiBsb2FkaW5nIGEgcGFnZSBvZiBlbnRpdGllc1xuICogSFRUUCBHRVQgL2VudGl0eT9wYWdlJnNpemUgKGV0Yy4pXG4gKlxuICogQHBhcmFtIHR5cGUgLSBUaGUgZW50aXR5IG1vZGVsIGRlY29yYXRlZCB3aXRoIEBFbnRpdHlcbiAqIEBwYXJhbSBlcnJvciAtIFRoZSBlcnJvciBvYmplY3QgdGhhdCB3YXMgdGhyb3duXG4gKiBAcGFyYW0gcGFnZSAtIFRoZSBwYWdlIHlvdSB0cmllZCB0byBsb2FkXG4gKiBAcGFyYW0gY3JpdGVyaWEgLSAob3B0aW9uYWwpIFRoZSBjdXN0b20gY3JpdGVyaWEgZnJvbSB0aGUgaW5pdGlhbCBsb2FkIHBhZ2UgYWN0aW9uXG4gKiBAcGFyYW0gY29ycmVsYXRpb25JZCAtIChvcHRpb25hbCkgVGhlIGNvcnJlbGF0aW9uSWQgZm9yIHRoaXMgYWN0aW9uOyBjb3JyZWxhdGVzIHRvIGluaXRpYWwgbG9hZCBwYWdlIGFjdGlvblxuICovXG5leHBvcnQgY2xhc3MgTG9hZFBhZ2VGYWlsdXJlPFRNb2RlbD4gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VE1vZGVsPiB7XG4gIGNvbnN0cnVjdG9yKHR5cGU6IG5ldyAoKSA9PiBUTW9kZWwsIHB1YmxpYyBlcnJvcjogYW55LCBwdWJsaWMgcGFnZTogUGFnZSwgcHVibGljIGNyaXRlcmlhPzogYW55LCBjb3JyZWxhdGlvbklkPzogc3RyaW5nKSB7XG4gICAgc3VwZXIodHlwZSwgRW50aXR5QWN0aW9uVHlwZXMuTG9hZFBhZ2VGYWlsdXJlLCBjb3JyZWxhdGlvbklkKTtcbiAgfVxufVxuIl19