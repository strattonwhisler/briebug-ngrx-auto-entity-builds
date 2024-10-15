import { InjectionToken } from '@angular/core';
import { of, pipe } from 'rxjs';
import { filter, mergeMap, tap } from 'rxjs/operators';
import { compose as fpipe } from '../../util/func';
import { entityStateName } from '../decorators/entity-util';
import { FEATURE_AFFINITY } from '../util/util-tokens';
export const NGRX_AUTO_ENTITY_APP_STORE = new InjectionToken('@briebug/ngrx-auto-entity App Store');
export const getEntityState = (info) => (state) => (info.modelType[FEATURE_AFFINITY]
    ? state[info.modelType[FEATURE_AFFINITY]][entityStateName(info.modelName)]
    : state[entityStateName(info.modelName)]);
export const getLoadedAt = (state) => state?.tracking?.loadedAt ?? undefined;
export const getIsLoading = (state) => !!state.tracking?.isLoading;
export const getCurrentPage = (state) => state.paging?.currentPage ?? undefined;
export const getCurrentRange = (state) => state.paging?.currentRange ?? undefined;
export const getEntityIds = (state) => state?.ids ?? [];
export const mapToHasEntities = (ids) => !!ids && !!ids.length;
export const entityLoadedAt = (info) => fpipe(getEntityState(info), getLoadedAt);
export const entityIsLoading = (info) => fpipe(getEntityState(info), getIsLoading);
export const entityCurrentPage = (info) => fpipe(getEntityState(info), getCurrentPage);
export const entityCurrentRange = (info) => fpipe(getEntityState(info), getCurrentRange);
export const entityIds = (info) => fpipe(getEntityState(info), getEntityIds);
export const hasEntitiesLoaded = (info) => fpipe(getEntityState(info), getEntityIds, mapToHasEntities);
export const addSeconds = (date, seconds) => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds() + seconds, date.getMilliseconds());
export const nowAfterExpiry = (expiry) => expiry < new Date();
export const isSubsequentRange = (a, b) => (a.start || a.first || a.skip + a.take) > (b.end || b.last || b.skip + b.take);
export const warnIfMissingStore = () => !warnIfMissingStore.lastWarnTime || Math.abs(new Date(warnIfMissingStore.lastWarnTime).valueOf() - new Date(Date.now()).valueOf()) > 15000
    ? (console.warn(
    // eslint-disable-next-line max-len
    '[NGRX-AE] Warning! The NGRX_AUTO_ENTITY_APP_STORE provider has not been configured! *IfNecessary actions require accessing your store in order to function properly!'),
        (warnIfMissingStore.lastWarnTime = Date.now()),
        void 0)
    : void 0;
const warnMissingStore = () => pipe(tap(([, store]) => (!store ? warnIfMissingStore() : null)));
export const getAppStore = (injector) => pipe(mergeMap((action) => {
    try {
        const store = injector.get(NGRX_AUTO_ENTITY_APP_STORE);
        return of({ action, store });
    }
    catch {
        warnIfMissingStore();
        return of({ action, store: undefined });
    }
}), filter(({ store }) => !!store));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtbmVjZXNzYXJ5LW9wZXJhdG9yLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL2VmZmVjdHMvaWYtbmVjZXNzYXJ5LW9wZXJhdG9yLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFFekQsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLE9BQU8sSUFBSSxLQUFLLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdkQsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxjQUFjLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUVwRyxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQ3pCLENBQUMsSUFBaUIsRUFBRSxFQUFFLENBQ3RCLENBQUMsS0FBVSxFQUFxQixFQUFFLENBQ2hDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMvQixDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQXNCLENBQUM7QUFDckUsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBd0IsRUFBc0Is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QUFLLEVBQUUsU0FBUyxFQUE0QyxDQUFDLENBQUM7SUFDcEYsQ0FBQztBQUNILENBQUMsQ0FBQyxFQUNGLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBvZiwgcGlwZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY29tcG9zZSBhcyBmcGlwZSB9IGZyb20gJy4uLy4uL3V0aWwvZnVuYyc7XG5pbXBvcnQgeyBJRW50aXR5SW5mbyB9IGZyb20gJy4uL2FjdGlvbnMvZW50aXR5LWluZm8nO1xuaW1wb3J0IHsgZW50aXR5U3RhdGVOYW1lIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9lbnRpdHktdXRpbCc7XG5pbXBvcnQgeyBQYWdlLCBSYW5nZSB9IGZyb20gJy4uL21vZGVscyc7XG5pbXBvcnQgeyBFbnRpdHlJZGVudGl0eSB9IGZyb20gJy4uL3R5cGVzL2VudGl0eS1pZGVudGl0eSc7XG5pbXBvcnQgeyBJRW50aXR5U3RhdGUgfSBmcm9tICcuLi91dGlsL2VudGl0eS1zdGF0ZSc7XG5pbXBvcnQgeyBGRUFUVVJFX0FGRklOSVRZIH0gZnJvbSAnLi4vdXRpbC91dGlsLXRva2Vucyc7XG5cbmV4cG9ydCBjb25zdCBOR1JYX0FVVE9fRU5USVRZX0FQUF9TVE9SRSA9IG5ldyBJbmplY3Rpb25Ub2tlbignQGJyaWVidWcvbmdyeC1hdXRvLWVudGl0eSBBcHAgU3RvcmUnKTtcblxuZXhwb3J0IGNvbnN0IGdldEVudGl0eVN0YXRlID1cbiAgKGluZm86IElFbnRpdHlJbmZvKSA9PlxuICAoc3RhdGU6IGFueSk6IElFbnRpdHlTdGF0ZTxhbnk+ID0+XG4gICAgKGluZm8ubW9kZWxUeXBlW0ZFQVRVUkVfQUZGSU5JVFldXG4gICAgICA/IHN0YXRlW2luZm8ubW9kZWxUeXBlW0ZFQVRVUkVfQUZGSU5JVFldXVtlbnRpdHlTdGF0ZU5hbWUoaW5mby5tb2RlbE5hbWUpXVxuICAgICAgOiBzdGF0ZVtlbnRpdHlTdGF0ZU5hbWUoaW5mby5tb2RlbE5hbWUpXSkgYXMgSUVudGl0eVN0YXRlPGFueT47XG5leHBvcnQgY29uc3QgZ2V0TG9hZGVkQXQgPSAoc3RhdGU6IElFbnRpdHlTdGF0ZTxhbnk+KTogbnVtYmVyIHwgdW5kZWZpbmVkID0+IHN0YXRlPy50cmFja2luZz8ubG9hZGVkQXQgPz8gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IGdldElzTG9hZGluZyA9IChzdGF0ZTogSUVudGl0eVN0YXRlPGFueT4pOiBib29sZWFuID0+ICEhc3RhdGUudHJhY2tpbmc/LmlzTG9hZGluZztcbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50UGFnZSA9IChzdGF0ZTogSUVudGl0eVN0YXRlPGFueT4pOiBQYWdlIHwgdW5kZWZpbmVkID0+IHN0YXRlLnBhZ2luZz8uY3VycmVudFBhZ2UgPz8gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRSYW5nZSA9IChzdGF0ZTogSUVudGl0eVN0YXRlPGFueT4pOiBSYW5nZSB8IHVuZGVmaW5lZCA9PiBzdGF0ZS5wYWdpbmc/LmN1cnJlbnRSYW5nZSA/PyB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgZ2V0RW50aXR5SWRzID0gKHN0YXRlOiBJRW50aXR5U3RhdGU8YW55Pik6IEVudGl0eUlkZW50aXR5W10gPT4gc3RhdGU/LmlkcyA/PyBbXTtcbmV4cG9ydCBjb25zdCBtYXBUb0hhc0VudGl0aWVzID0gKGlkcz86IEVudGl0eUlkZW50aXR5W10pOiBib29sZWFuID0+ICEhaWRzICYmICEhaWRzLmxlbmd0aDtcblxuZXhwb3J0IGNvbnN0IGVudGl0eUxvYWRlZEF0ID0gKGluZm86IElFbnRpdHlJbmZvKSA9PiBmcGlwZShnZXRFbnRpdHlTdGF0ZShpbmZvKSwgZ2V0TG9hZGVkQXQpO1xuZXhwb3J0IGNvbnN0IGVudGl0eUlzTG9hZGluZyA9IChpbmZvOiBJRW50aXR5SW5mbykgPT4gZnBpcGUoZ2V0RW50aXR5U3RhdGUoaW5mbyksIGdldElzTG9hZGluZyk7XG5leHBvcnQgY29uc3QgZW50aXR5Q3VycmVudFBhZ2UgPSAoaW5mbzogSUVudGl0eUluZm8pID0+IGZwaXBlKGdldEVudGl0eVN0YXRlKGluZm8pLCBnZXRDdXJyZW50UGFnZSk7XG5leHBvcnQgY29uc3QgZW50aXR5Q3VycmVudFJhbmdlID0gKGluZm86IElFbnRpdHlJbmZvKSA9PiBmcGlwZShnZXRFbnRpdHlTdGF0ZShpbmZvKSwgZ2V0Q3VycmVudFJhbmdlKTtcbmV4cG9ydCBjb25zdCBlbnRpdHlJZHMgPSAoaW5mbzogSUVudGl0eUluZm8pID0+IGZwaXBlKGdldEVudGl0eVN0YXRlKGluZm8pLCBnZXRFbnRpdHlJZHMpO1xuZXhwb3J0IGNvbnN0IGhhc0VudGl0aWVzTG9hZGVkID0gKGluZm86IElFbnRpdHlJbmZvKSA9PiBmcGlwZShnZXRFbnRpdHlTdGF0ZShpbmZvKSwgZ2V0RW50aXR5SWRzLCBtYXBUb0hhc0VudGl0aWVzKTtcbmV4cG9ydCBjb25zdCBhZGRTZWNvbmRzID0gKGRhdGU6IERhdGUsIHNlY29uZHM6IG51bWJlcik6IERhdGUgPT5cbiAgbmV3IERhdGUoXG4gICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICBkYXRlLmdldERhdGUoKSxcbiAgICBkYXRlLmdldEhvdXJzKCksXG4gICAgZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgZGF0ZS5nZXRTZWNvbmRzKCkgKyBzZWNvbmRzLFxuICAgIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKClcbiAgKTtcbmV4cG9ydCBjb25zdCBub3dBZnRlckV4cGlyeSA9IChleHBpcnk6IERhdGUpOiBib29sZWFuID0+IGV4cGlyeSA8IG5ldyBEYXRlKCk7XG5leHBvcnQgY29uc3QgaXNTdWJzZXF1ZW50UmFuZ2UgPSAoYTogYW55LCBiOiBhbnkpID0+IChhLnN0YXJ0IHx8IGEuZmlyc3QgfHwgYS5za2lwICsgYS50YWtlKSA+IChiLmVuZCB8fCBiLmxhc3QgfHwgYi5za2lwICsgYi50YWtlKTtcblxuZXhwb3J0IGNvbnN0IHdhcm5JZk1pc3NpbmdTdG9yZTogKCgpID0+IHZvaWQpICYgeyBsYXN0V2FyblRpbWU/OiBudW1iZXIgfSA9ICgpID0+XG4gICF3YXJuSWZNaXNzaW5nU3RvcmUubGFzdFdhcm5UaW1lIHx8IE1hdGguYWJzKG5ldyBEYXRlKHdhcm5JZk1pc3NpbmdTdG9yZS5sYXN0V2FyblRpbWUpLnZhbHVlT2YoKSAtIG5ldyBEYXRlKERhdGUubm93KCkpLnZhbHVlT2YoKSkgPiAxNTAwMFxuICAgID8gKGNvbnNvbGUud2FybihcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICAgJ1tOR1JYLUFFXSBXYXJuaW5nISBUaGUgTkdSWF9BVVRPX0VOVElUWV9BUFBfU1RPUkUgcHJvdmlkZXIgaGFzIG5vdCBiZWVuIGNvbmZpZ3VyZWQhICpJZk5lY2Vzc2FyeSBhY3Rpb25zIHJlcXVpcmUgYWNjZXNzaW5nIHlvdXIgc3RvcmUgaW4gb3JkZXIgdG8gZnVuY3Rpb24gcHJvcGVybHkhJ1xuICAgICAgKSxcbiAgICAgICh3YXJuSWZNaXNzaW5nU3RvcmUubGFzdFdhcm5UaW1lID0gRGF0ZS5ub3coKSksXG4gICAgICB2b2lkIDApXG4gICAgOiB2b2lkIDA7XG5cbmNvbnN0IHdhcm5NaXNzaW5nU3RvcmUgPSAoKSA9PiBwaXBlKHRhcCgoWywgc3RvcmVdKSA9PiAoIXN0b3JlID8gd2FybklmTWlzc2luZ1N0b3JlKCkgOiBudWxsKSkpO1xuXG5leHBvcnQgY29uc3QgZ2V0QXBwU3RvcmUgPSA8VEFjdGlvbj4oaW5qZWN0b3I6IEluamVjdG9yKSA9PlxuICBwaXBlKFxuICAgIG1lcmdlTWFwKChhY3Rpb246IFRBY3Rpb24pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gaW5qZWN0b3IuZ2V0KE5HUlhfQVVUT19FTlRJVFlfQVBQX1NUT1JFKTtcbiAgICAgICAgcmV0dXJuIG9mKHsgYWN0aW9uLCBzdG9yZSB9IGFzIHsgYWN0aW9uOiBUQWN0aW9uOyBzdG9yZTogU3RvcmU8YW55PiB9KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICB3YXJuSWZNaXNzaW5nU3RvcmUoKTtcbiAgICAgICAgcmV0dXJuIG9mKHsgYWN0aW9uLCBzdG9yZTogdW5kZWZpbmVkIH0gYXMgeyBhY3Rpb246IFRBY3Rpb247IHN0b3JlOiBTdG9yZTxhbnk+IH0pO1xuICAgICAgfVxuICAgIH0pLFxuICAgIGZpbHRlcigoeyBzdG9yZSB9KSA9PiAhIXN0b3JlKVxuICApO1xuIl19