import { ENVIRONMENT_INITIALIZER, inject, InjectionToken, Injector, makeEnvironmentProviders } from '@angular/core';
import { META_REDUCERS, Store } from '@ngrx/store';
import { EffectSources } from '@ngrx/effects';
import { EntityEffects } from './effects/effects-all';
import { ExtraEffects } from './effects/effects-extra';
import { EntityIfNecessaryOperators } from './effects/if-necessary-operators';
import { EntityOperators } from './effects/operators';
import { autoEntityMetaReducer } from './reducer/meta-reducer';
import { NgrxAutoEntityService } from './service/service';
import { addInjector } from './service/service-injection';
import { NGRX_AUTO_ENTITY_APP_STORE } from './effects/if-necessary-operator-utils';
function isAutoEntityFeature(value) {
    return value && value.ɵkind != null && value.ɵproviders != null;
}
function includesFeature(features, featureKind) {
    return features.some(feature => feature.ɵkind === featureKind);
}
function autoEntityFeature(kind, providers) {
    return { ɵkind: kind, ɵproviders: providers };
}
export const NGRX_AUTO_ENTITY_CONFIG = new InjectionToken('@briebug/ngrx-auto-entity Config');
const defaultConfig = {};
export function getNgRxAutoEntityMetaReducer() {
    return autoEntityMetaReducer;
}
export function addNgRxAutoEntityEffects() {
    const config = inject(NGRX_AUTO_ENTITY_CONFIG);
    return () => {
        // NOTE: The following trick learned from @ngrx/data!
        // Warning: this alternative approach relies on an undocumented API
        // to add effect directly rather than through `provideEffects`.
        // The danger is that provideEffects evolves and we no longer perform a crucial step.
        const effectSources = inject(EffectSources);
        const entityEffects = inject(EntityEffects, { optional: config.withoutEntityEffects });
        const extraEffects = inject(ExtraEffects, { optional: config.withoutExtraEffects });
        entityEffects && effectSources.addEffects(entityEffects);
        extraEffects && effectSources.addEffects(extraEffects);
    };
}
/** @internal */
export function _provideAutoEntityStore(config = defaultConfig, features = []) {
    const effects = [];
    if (!config.withoutEntityEffects) {
        effects.push(EntityEffects);
    }
    if (!config.withoutExtraEffects) {
        effects.push(ExtraEffects);
    }
    if (!includesFeature(features, 0 /* NgRxAutoEntityFeatureKind.CustomStoreFeature */)) {
        features.push(withCustomStore(() => inject(Store)));
    }
    return [
        NgrxAutoEntityService,
        EntityOperators,
        EntityIfNecessaryOperators,
        ...effects,
        { provide: META_REDUCERS, useFactory: getNgRxAutoEntityMetaReducer, multi: true },
        { provide: NGRX_AUTO_ENTITY_CONFIG, useValue: config },
        { provide: ENVIRONMENT_INITIALIZER, useFactory: addNgRxAutoEntityEffects, multi: true },
        ...features.map((feature) => feature.ɵproviders),
    ];
}
export function provideAutoEntityStore(...args) {
    const config = isAutoEntityFeature(args[0]) ? undefined : args.shift();
    const features = args;
    return makeEnvironmentProviders(_provideAutoEntityStore(config, features));
}
let INJECTOR_DEPTH = 0;
export function addNgRxAutoEntityInjector() {
    const injector = inject(Injector);
    // Update the core NgRxAutoEntityService INJECTORS to include the current injector
    // This creates a list of injectors that should eventually encompass the entire application
    // as +feature loaded modules are subsequently created, to be evaluated in reverse order
    INJECTOR_DEPTH = INJECTOR_DEPTH + 1;
    addInjector(Injector.create({
        providers: [],
        parent: injector,
        name: 'AutoEntityInjector' + INJECTOR_DEPTH
    }));
}
/** @internal */
export function _provideAutoEntityState() {
    return [
        {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue: addNgRxAutoEntityInjector
        }
    ];
}
/**
 * Provides the feature level Auto-Entity providers.
 *
 * @usageNotes
 *
 * ### Providing an Auto-Entity Feature State
 *
 * ```
 * provideState(featureState),
 * provideAutoEntityState()
 * ```
 *
 * @publicApi
 * @returns A set of providers to set up an Auto-Entity feature state.
 */
export function provideAutoEntityState() {
    return makeEnvironmentProviders(_provideAutoEntityState());
}
const PROVIDED_SERVICES = [];
/**
 * Provides an entity's service.
 *
 * This will reuse existing services when possible.
 *
 * @usageNotes
 *
 * ### Providing an Entity's Service
 *
 * ```
 * provideEntityService(Products, ProductsService)
 * ```
 *
 * @publicApi
 * @param modelType The entity model to provide a service for.
 * @param service The service to provide.
 * @returns A set of providers to set up an entity's service.
 */
export function provideEntityService(modelType, service) {
    const providers = [
        { provide: modelType, useExisting: service }
    ];
    if (!PROVIDED_SERVICES.includes(service)) {
        providers.unshift(service);
        PROVIDED_SERVICES.push(service);
    }
    return makeEnvironmentProviders(providers);
}
export function withCustomStore(getStore, deps) {
    const providers = [
        { provide: NGRX_AUTO_ENTITY_APP_STORE, useFactory: getStore, deps },
    ];
    return autoEntityFeature(0 /* NgRxAutoEntityFeatureKind.CustomStoreFeature */, providers);
}
/**
 * Disables automatic providing of the Auto-Entity Store.
 * @internal
 */
export function _withNoStore() {
    return autoEntityFeature(0 /* NgRxAutoEntityFeatureKind.CustomStoreFeature */, []);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWF1dG8tZW50aXR5L3NyYy9saWIvcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixNQUFNLEVBQ04sY0FBYyxFQUNkLFFBQVEsRUFDUix3QkFBd0IsRUFHekIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFPbkYsU0FBUyxtQkFBbUIsQ0FBaUQsS0FBVTtJQUNyRixPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztBQUNsRSxDQUFDO0FBRUQsU0FBUyxlQUFlLENBQWlELFFBQWtDLEVBQUUsV0FBd0I7SUFDbkksT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUss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QkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELE9BQU8sd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQU1ELE1BQU0sVUFBVSxlQUFlLENBQUMsUUFBNEIsRUFBRSxJQUFZO0lBQ3hFLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLEVBQUUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0tBQ3BFLENBQUM7SUFDRixPQUFPLGlCQUFpQix1REFBK0MsU0FBUyxDQUFDLENBQUM7QUFDcEYsQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxZQUFZO0lBQzFCLE9BQU8saUJBQWlCLHVEQUErQyxFQUFFLENBQUMsQ0FBQztBQUM3RSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRU5WSVJPTk1FTlRfSU5JVElBTElaRVIsXG4gIEVudmlyb25tZW50UHJvdmlkZXJzLFxuICBpbmplY3QsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgbWFrZUVudmlyb25tZW50UHJvdmlkZXJzLFxuICBQcm92aWRlcixcbiAgVHlwZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1FVEFfUkVEVUNFUlMsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRWZmZWN0U291cmNlcyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBFbnRpdHlFZmZlY3RzIH0gZnJvbSAnLi9lZmZlY3RzL2VmZmVjdHMtYWxsJztcbmltcG9ydCB7IEV4dHJhRWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9lZmZlY3RzLWV4dHJhJztcbmltcG9ydCB7IEVudGl0eUlmTmVjZXNzYXJ5T3BlcmF0b3JzIH0gZnJvbSAnLi9lZmZlY3RzL2lmLW5lY2Vzc2FyeS1vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRW50aXR5T3BlcmF0b3JzIH0gZnJvbSAnLi9lZmZlY3RzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBhdXRvRW50aXR5TWV0YVJlZHVjZXIgfSBmcm9tICcuL3JlZHVjZXIvbWV0YS1yZWR1Y2VyJztcbmltcG9ydCB7IE5ncnhBdXRvRW50aXR5U2VydmljZSB9IGZyb20gJy4vc2VydmljZS9zZXJ2aWNlJztcbmltcG9ydCB7IGFkZEluamVjdG9yIH0gZnJvbSAnLi9zZXJ2aWNlL3NlcnZpY2UtaW5qZWN0aW9uJztcbmltcG9ydCB7IE5HUlhfQVVUT19FTlRJVFlfQVBQX1NUT1JFIH0gZnJvbSAnLi9lZmZlY3RzL2lmLW5lY2Vzc2FyeS1vcGVyYXRvci11dGlscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmdSeEF1dG9FbnRpdHlGZWF0dXJlPEZlYXR1cmVLaW5kIGV4dGVuZHMgTmdSeEF1dG9FbnRpdHlGZWF0dXJlS2luZD4ge1xuICDJtWtpbmQ6IEZlYXR1cmVLaW5kO1xuICDJtXByb3ZpZGVyczogUHJvdmlkZXJbXTtcbn1cblxuZnVuY3Rpb24gaXNBdXRvRW50aXR5RmVhdHVyZSA8RmVhdHVyZUtpbmQgZXh0ZW5kcyBOZ1J4QXV0b0VudGl0eUZlYXR1cmVLaW5kPih2YWx1ZTogYW55KTogdmFsdWUgaXMgTmdSeEF1dG9FbnRpdHlGZWF0dXJlPEZlYXR1cmVLaW5kPiB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS7JtWtpbmQgIT0gbnVsbCAmJiB2YWx1ZS7JtXByb3ZpZGVycyAhPSBudWxsO1xufVxuXG5mdW5jdGlvbiBpbmNsdWRlc0ZlYXR1cmUgPEZlYXR1cmVLaW5kIGV4dGVuZHMgTmdSeEF1dG9FbnRpdHlGZWF0dXJlS2luZD4oZmVhdHVyZXM6IE5nUnhBdXRvRW50aXR5RmVhdHVyZXNbXSwgZmVhdHVyZUtpbmQ6IEZlYXR1cmVLaW5kKTogYm9vbGVhbiB7XG4gIHJldHVybiBmZWF0dXJlcy5zb21lKGZlYXR1cmUgPT4gZmVhdHVyZS7JtWtpbmQgPT09IGZlYXR1cmVLaW5kKTtcbn1cblxuZnVuY3Rpb24gYXV0b0VudGl0eUZlYXR1cmU8RmVhdHVyZUtpbmQgZXh0ZW5kcyBOZ1J4QXV0b0VudGl0eUZlYXR1cmVLaW5kPihcbiAga2luZDogRmVhdHVyZUtpbmQsXG4gIHByb3ZpZGVyczogUHJvdmlkZXJbXSxcbik6IE5nUnhBdXRvRW50aXR5RmVhdHVyZTxGZWF0dXJlS2luZD4ge1xuICByZXR1cm4geyDJtWtpbmQ6IGtpbmQsIMm1cHJvdmlkZXJzOiBwcm92aWRlcnMgfTtcbn1cblxuZXhwb3J0IGNvbnN0IE5HUlhfQVVUT19FTlRJVFlfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPE5nUnhBdXRvRW50aXR5Q29uZmlnPignQGJyaWVidWcvbmdyeC1hdXRvLWVudGl0eSBDb25maWcnKVxuXG5leHBvcnQgaW50ZXJmYWNlIE5nUnhBdXRvRW50aXR5Q29uZmlnIHtcbiAgLyoqXG4gICAqIFByZXZlbnQgQXV0by1FbnRpdHkgZnJvbSByZWdpc3RlcmluZyBpdHMgZW50aXR5IGVmZmVjdHMuXG4gICAqL1xuICB3aXRob3V0RW50aXR5RWZmZWN0cz86IHRydWUgfCB1bmRlZmluZWQ7XG5cbiAgLyoqXG4gICAqIFByZXZlbnQgQXV0by1FbnRpdHkgZnJvbSByZWdpc3RlcmluZyBpdHMgZXh0cmEgZWZmZWN0cy5cbiAgICpcbiAgICogVGhpcyBpbmNsdWRlcyBhbGwgc2VsZWN0LCBkZXNlbGVjdCwgYW5kIGVkaXQgZWZmZWN0cy5cbiAgICovXG4gIHdpdGhvdXRFeHRyYUVmZmVjdHM/OiB0cnVlIHwgdW5kZWZpbmVkO1xufVxuXG5jb25zdCBkZWZhdWx0Q29uZmlnOiBOZ1J4QXV0b0VudGl0eUNvbmZpZyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmdSeEF1dG9FbnRpdHlNZXRhUmVkdWNlcigpIHtcbiAgcmV0dXJuIGF1dG9FbnRpdHlNZXRhUmVkdWNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5nUnhBdXRvRW50aXR5RWZmZWN0cygpOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgY29uZmlnID0gaW5qZWN0KE5HUlhfQVVUT19FTlRJVFlfQ09ORklHKTtcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIC8vIE5PVEU6IFRoZSBmb2xsb3dpbmcgdHJpY2sgbGVhcm5lZCBmcm9tIEBuZ3J4L2RhdGEhXG5cbiAgICAvLyBXYXJuaW5nOiB0aGlzIGFsdGVybmF0aXZlIGFwcHJvYWNoIHJlbGllcyBvbiBhbiB1bmRvY3VtZW50ZWQgQVBJXG4gICAgLy8gdG8gYWRkIGVmZmVjdCBkaXJlY3RseSByYXRoZXIgdGhhbiB0aHJvdWdoIGBwcm92aWRlRWZmZWN0c2AuXG4gICAgLy8gVGhlIGRhbmdlciBpcyB0aGF0IHByb3ZpZGVFZmZlY3RzIGV2b2x2ZXMgYW5kIHdlIG5vIGxvbmdlciBwZXJmb3JtIGEgY3J1Y2lhbCBzdGVwLlxuXG4gICAgY29uc3QgZWZmZWN0U291cmNlcyA9IGluamVjdChFZmZlY3RTb3VyY2VzKTtcbiAgICBjb25zdCBlbnRpdHlFZmZlY3RzID0gaW5qZWN0KEVudGl0eUVmZmVjdHMsIHsgb3B0aW9uYWw6IGNvbmZpZy53aXRob3V0RW50aXR5RWZmZWN0cyB9KTtcbiAgICBjb25zdCBleHRyYUVmZmVjdHMgPSBpbmplY3QoRXh0cmFFZmZlY3RzLCB7IG9wdGlvbmFsOiBjb25maWcud2l0aG91dEV4dHJhRWZmZWN0cyB9KTtcblxuICAgIGVudGl0eUVmZmVjdHMgJiYgZWZmZWN0U291cmNlcy5hZGRFZmZlY3RzKGVudGl0eUVmZmVjdHMpO1xuICAgIGV4dHJhRWZmZWN0cyAmJiBlZmZlY3RTb3VyY2VzLmFkZEVmZmVjdHMoZXh0cmFFZmZlY3RzKTtcbiAgfTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9wcm92aWRlQXV0b0VudGl0eVN0b3JlKFxuICBjb25maWc6IE5nUnhBdXRvRW50aXR5Q29uZmlnID0gZGVmYXVsdENvbmZpZyxcbiAgZmVhdHVyZXM6IE5nUnhBdXRvRW50aXR5RmVhdHVyZXNbXSA9IFtdXG4pOiBQcm92aWRlcltdIHtcbiAgY29uc3QgZWZmZWN0cyA9IFtdO1xuXG4gIGlmICghY29uZmlnLndpdGhvdXRFbnRpdHlFZmZlY3RzKSB7XG4gICAgZWZmZWN0cy5wdXNoKEVudGl0eUVmZmVjdHMpO1xuICB9XG5cbiAgaWYgKCFjb25maWcud2l0aG91dEV4dHJhRWZmZWN0cykge1xuICAgIGVmZmVjdHMucHVzaChFeHRyYUVmZmVjdHMpO1xuICB9XG5cbiAgaWYgKCFpbmNsdWRlc0ZlYXR1cmUoZmVhdHVyZXMsIE5nUnhBdXRvRW50aXR5RmVhdHVyZUtpbmQuQ3VzdG9tU3RvcmVGZWF0dXJlKSkge1xuICAgIGZlYXR1cmVzLnB1c2god2l0aEN1c3RvbVN0b3JlKCgpID0+IGluamVjdChTdG9yZSkpKTtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgTmdyeEF1dG9FbnRpdHlTZXJ2aWNlLFxuICAgIEVudGl0eU9wZXJhdG9ycyxcbiAgICBFbnRpdHlJZk5lY2Vzc2FyeU9wZXJhdG9ycyxcbiAgICAuLi5lZmZlY3RzLFxuICAgIHsgcHJvdmlkZTogTUVUQV9SRURVQ0VSUywgdXNlRmFjdG9yeTogZ2V0TmdSeEF1dG9FbnRpdHlNZXRhUmVkdWNlciwgbXVsdGk6IHRydWUgfSxcbiAgICB7IHByb3ZpZGU6IE5HUlhfQVVUT19FTlRJVFlfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgeyBwcm92aWRlOiBFTlZJUk9OTUVOVF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogYWRkTmdSeEF1dG9FbnRpdHlFZmZlY3RzLCBtdWx0aTogdHJ1ZSB9LFxuICAgIC4uLmZlYXR1cmVzLm1hcCgoZmVhdHVyZSkgPT4gZmVhdHVyZS7JtXByb3ZpZGVycyksXG4gIF07XG59XG5cbi8qKlxuICogUHJvdmlkZXMgdGhlIGdsb2JhbCBBdXRvLUVudGl0eSBwcm92aWRlcnMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgUHJvdmlkaW5nIEF1dG8tRW50aXR5XG4gKlxuICogYGBgXG4gKiBib290c3RyYXBBcHBsaWNhdGlvbihBcHBDb21wb25lbnQsIHtcbiAqICAgcHJvdmlkZXJzOiBbXG4gKiAgICAgcHJvdmlkZVN0b3JlKGFwcFJlZHVjZXIpXG4gKiAgICAgcHJvdmlkZUF1dG9FbnRpdHlTdG9yZSh7XG4gKiAgICAgICB3aXRoTm9FbnRpdHlFZmZlY3RzOiB0cnVlLFxuICogICAgICAgd2l0aE5vRXh0cmFFZmZlY3RzOiB0cnVlLFxuICogICAgIH0pLFxuICogICBdXG4gKiB9KVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICogQHBhcmFtIGNvbmZpZyBUaGUgQXV0by1FbnRpdHkgY29uZmlndXJhdGlvbi5cbiAqIEBwYXJhbSBmZWF0dXJlcyBBIGxpc3Qgb2YgQXV0by1FbnRpdHkgZmVhdHVyZXMgdG8gaW5jbHVkZS5cbiAqIEByZXR1cm5zIEEgc2V0IG9mIHByb3ZpZGVycyB0byBzZXQgdXAgdGhlIEF1dG8tRW50aXR5IGdsb2JhbCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVBdXRvRW50aXR5U3RvcmUoY29uZmlnOiBOZ1J4QXV0b0VudGl0eUNvbmZpZywgLi4uZmVhdHVyZXM6IE5nUnhBdXRvRW50aXR5RmVhdHVyZXNbXSk6IEVudmlyb25tZW50UHJvdmlkZXJzO1xuLyoqXG4gKiBQcm92aWRlcyB0aGUgZ2xvYmFsIEF1dG8tRW50aXR5IHByb3ZpZGVycy5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqICMjIyBQcm92aWRpbmcgQXV0by1FbnRpdHlcbiAqXG4gKiBgYGBcbiAqIGJvb3RzdHJhcEFwcGxpY2F0aW9uKEFwcENvbXBvbmVudCwge1xuICogICBwcm92aWRlcnM6IFtcbiAqICAgICBwcm92aWRlU3RvcmUoYXBwUmVkdWNlcilcbiAqICAgICBwcm92aWRlQXV0b0VudGl0eVN0b3JlKCksXG4gKiAgIF1cbiAqIH0pXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAcGFyYW0gZmVhdHVyZXMgQSBsaXN0IG9mIEF1dG8tRW50aXR5IGZlYXR1cmVzIHRvIGluY2x1ZGUuXG4gKiBAcmV0dXJucyBBIHNldCBvZiBwcm92aWRlcnMgdG8gc2V0IHVwIHRoZSBBdXRvLUVudGl0eSBnbG9iYWwgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQXV0b0VudGl0eVN0b3JlKC4uLmZlYXR1cmVzOiBOZ1J4QXV0b0VudGl0eUZlYXR1cmVzW10pOiBFbnZpcm9ubWVudFByb3ZpZGVycztcbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQXV0b0VudGl0eVN0b3JlKC4uLmFyZ3M6IChOZ1J4QXV0b0VudGl0eUNvbmZpZyB8IE5nUnhBdXRvRW50aXR5RmVhdHVyZXMpW10pOiBFbnZpcm9ubWVudFByb3ZpZGVycyB7XG4gIGNvbnN0IGNvbmZpZyA9IGlzQXV0b0VudGl0eUZlYXR1cmUoYXJnc1swXSkgPyB1bmRlZmluZWQgOiBhcmdzLnNoaWZ0KCkgYXMgTmdSeEF1dG9FbnRpdHlDb25maWc7XG4gIGNvbnN0IGZlYXR1cmVzID0gYXJncyBhcyBOZ1J4QXV0b0VudGl0eUZlYXR1cmVzW107XG5cbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhcbiAgICBfcHJvdmlkZUF1dG9FbnRpdHlTdG9yZShcbiAgICAgIGNvbmZpZyxcbiAgICAgIGZlYXR1cmVzXG4gICAgKVxuICApO1xufVxuXG5sZXQgSU5KRUNUT1JfREVQVEggPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmdSeEF1dG9FbnRpdHlJbmplY3RvcigpIHtcbiAgY29uc3QgaW5qZWN0b3IgPSBpbmplY3QoSW5qZWN0b3IpO1xuXG4gIC8vIFVwZGF0ZSB0aGUgY29yZSBOZ1J4QXV0b0VudGl0eVNlcnZpY2UgSU5KRUNUT1JTIHRvIGluY2x1ZGUgdGhlIGN1cnJlbnQgaW5qZWN0b3JcbiAgLy8gVGhpcyBjcmVhdGVzIGEgbGlzdCBvZiBpbmplY3RvcnMgdGhhdCBzaG91bGQgZXZlbnR1YWxseSBlbmNvbXBhc3MgdGhlIGVudGlyZSBhcHBsaWNhdGlvblxuICAvLyBhcyArZmVhdHVyZSBsb2FkZWQgbW9kdWxlcyBhcmUgc3Vic2VxdWVudGx5IGNyZWF0ZWQsIHRvIGJlIGV2YWx1YXRlZCBpbiByZXZlcnNlIG9yZGVyXG4gIElOSkVDVE9SX0RFUFRIID0gSU5KRUNUT1JfREVQVEggKyAxO1xuICBhZGRJbmplY3RvcihcbiAgICBJbmplY3Rvci5jcmVhdGUoe1xuICAgICAgcHJvdmlkZXJzOiBbXSxcbiAgICAgIHBhcmVudDogaW5qZWN0b3IsXG4gICAgICBuYW1lOiAnQXV0b0VudGl0eUluamVjdG9yJyArIElOSkVDVE9SX0RFUFRIXG4gICAgfSlcbiAgKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9wcm92aWRlQXV0b0VudGl0eVN0YXRlKCk6IFByb3ZpZGVyW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IEVOVklST05NRU5UX0lOSVRJQUxJWkVSLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgICB1c2VWYWx1ZTogYWRkTmdSeEF1dG9FbnRpdHlJbmplY3RvclxuICAgIH1cbiAgXTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyB0aGUgZmVhdHVyZSBsZXZlbCBBdXRvLUVudGl0eSBwcm92aWRlcnMuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgUHJvdmlkaW5nIGFuIEF1dG8tRW50aXR5IEZlYXR1cmUgU3RhdGVcbiAqXG4gKiBgYGBcbiAqIHByb3ZpZGVTdGF0ZShmZWF0dXJlU3RhdGUpLFxuICogcHJvdmlkZUF1dG9FbnRpdHlTdGF0ZSgpXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAcmV0dXJucyBBIHNldCBvZiBwcm92aWRlcnMgdG8gc2V0IHVwIGFuIEF1dG8tRW50aXR5IGZlYXR1cmUgc3RhdGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQXV0b0VudGl0eVN0YXRlKCk6IEVudmlyb25tZW50UHJvdmlkZXJzIHtcbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhcbiAgICBfcHJvdmlkZUF1dG9FbnRpdHlTdGF0ZSgpXG4gICk7XG59XG5cbmNvbnN0IFBST1ZJREVEX1NFUlZJQ0VTOiBUeXBlPGFueT5bXSA9IFtdO1xuXG4vKipcbiAqIFByb3ZpZGVzIGFuIGVudGl0eSdzIHNlcnZpY2UuXG4gKlxuICogVGhpcyB3aWxsIHJldXNlIGV4aXN0aW5nIHNlcnZpY2VzIHdoZW4gcG9zc2libGUuXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAjIyMgUHJvdmlkaW5nIGFuIEVudGl0eSdzIFNlcnZpY2VcbiAqXG4gKiBgYGBcbiAqIHByb3ZpZGVFbnRpdHlTZXJ2aWNlKFByb2R1Y3RzLCBQcm9kdWN0c1NlcnZpY2UpXG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAcGFyYW0gbW9kZWxUeXBlIFRoZSBlbnRpdHkgbW9kZWwgdG8gcHJvdmlkZSBhIHNlcnZpY2UgZm9yLlxuICogQHBhcmFtIHNlcnZpY2UgVGhlIHNlcnZpY2UgdG8gcHJvdmlkZS5cbiAqIEByZXR1cm5zIEEgc2V0IG9mIHByb3ZpZGVycyB0byBzZXQgdXAgYW4gZW50aXR5J3Mgc2VydmljZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVFbnRpdHlTZXJ2aWNlKG1vZGVsVHlwZTogVHlwZTxhbnk+LCBzZXJ2aWNlOiBUeXBlPGFueT4pOiBFbnZpcm9ubWVudFByb3ZpZGVycyB7XG4gIGNvbnN0IHByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAgICB7IHByb3ZpZGU6IG1vZGVsVHlwZSwgdXNlRXhpc3Rpbmc6IHNlcnZpY2UgfVxuICBdO1xuXG4gIGlmICghUFJPVklERURfU0VSVklDRVMuaW5jbHVkZXMoc2VydmljZSkpIHtcbiAgICBwcm92aWRlcnMudW5zaGlmdChzZXJ2aWNlKTtcbiAgICBQUk9WSURFRF9TRVJWSUNFUy5wdXNoKHNlcnZpY2UpO1xuICB9XG5cbiAgcmV0dXJuIG1ha2VFbnZpcm9ubWVudFByb3ZpZGVycyhwcm92aWRlcnMpO1xufVxuXG5leHBvcnQgdHlwZSBDdXN0b21TdG9yZUZlYXR1cmUgPSBOZ1J4QXV0b0VudGl0eUZlYXR1cmU8TmdSeEF1dG9FbnRpdHlGZWF0dXJlS2luZC5DdXN0b21TdG9yZUZlYXR1cmU+XG5cbmV4cG9ydCB0eXBlIEN1c3RvbVN0b3JlRmFjdG9yeSA9ICguLi5kZXBzOiBhbnlbXSkgPT4gU3RvcmU8YW55PjtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhDdXN0b21TdG9yZShnZXRTdG9yZTogQ3VzdG9tU3RvcmVGYWN0b3J5LCBkZXBzPzogYW55W10pOiBDdXN0b21TdG9yZUZlYXR1cmUge1xuICBjb25zdCBwcm92aWRlcnMgPSBbXG4gICAgeyBwcm92aWRlOiBOR1JYX0FVVE9fRU5USVRZX0FQUF9TVE9SRSwgdXNlRmFjdG9yeTogZ2V0U3RvcmUsIGRlcHMgfSxcbiAgXTtcbiAgcmV0dXJuIGF1dG9FbnRpdHlGZWF0dXJlKE5nUnhBdXRvRW50aXR5RmVhdHVyZUtpbmQuQ3VzdG9tU3RvcmVGZWF0dXJlLCBwcm92aWRlcnMpO1xufVxuXG4vKipcbiAqIERpc2FibGVzIGF1dG9tYXRpYyBwcm92aWRpbmcgb2YgdGhlIEF1dG8tRW50aXR5IFN0b3JlLlxuICogQGludGVybmFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfd2l0aE5vU3RvcmUoKTogQ3VzdG9tU3RvcmVGZWF0dXJlIHtcbiAgcmV0dXJuIGF1dG9FbnRpdHlGZWF0dXJlKE5nUnhBdXRvRW50aXR5RmVhdHVyZUtpbmQuQ3VzdG9tU3RvcmVGZWF0dXJlLCBbXSk7XG59XG5cbmV4cG9ydCB0eXBlIE5nUnhBdXRvRW50aXR5RmVhdHVyZXMgPVxuICB8IEN1c3RvbVN0b3JlRmVhdHVyZTtcblxuXG5leHBvcnQgY29uc3QgZW51bSBOZ1J4QXV0b0VudGl0eUZlYXR1cmVLaW5kIHtcbiAgQ3VzdG9tU3RvcmVGZWF0dXJlLFxufVxuIl19