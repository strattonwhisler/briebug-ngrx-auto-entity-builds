import { EnvironmentProviders, InjectionToken, Provider, Type } from '@angular/core';
import { Store } from '@ngrx/store';
import { autoEntityMetaReducer } from './reducer/meta-reducer';
export interface NgRxAutoEntityFeature<FeatureKind extends NgRxAutoEntityFeatureKind> {
    ɵkind: FeatureKind;
    ɵproviders: Provider[];
}
export declare const NGRX_AUTO_ENTITY_CONFIG: InjectionToken<NgRxAutoEntityConfig>;
export interface NgRxAutoEntityConfig {
    /**
     * Prevent Auto-Entity from registering its entity effects.
     */
    withoutEntityEffects?: true | undefined;
    /**
     * Prevent Auto-Entity from registering its extra effects.
     *
     * This includes all select, deselect, and edit effects.
     */
    withoutExtraEffects?: true | undefined;
}
export declare function getNgRxAutoEntityMetaReducer(): typeof autoEntityMetaReducer;
export declare function addNgRxAutoEntityEffects(): () => void;
/** @internal */
export declare function _provideAutoEntityStore(config?: NgRxAutoEntityConfig, features?: NgRxAutoEntityFeatures[]): Provider[];
/**
 * Provides the global Auto-Entity providers.
 *
 * @usageNotes
 *
 * ### Providing Auto-Entity
 *
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideStore(appReducer)
 *     provideAutoEntityStore({
 *       withNoEntityEffects: true,
 *       withNoExtraEffects: true,
 *     }),
 *   ]
 * })
 * ```
 *
 * @publicApi
 * @param config The Auto-Entity configuration.
 * @param features A list of Auto-Entity features to include.
 * @returns A set of providers to set up the Auto-Entity global state.
 */
export declare function provideAutoEntityStore(config: NgRxAutoEntityConfig, ...features: NgRxAutoEntityFeatures[]): EnvironmentProviders;
/**
 * Provides the global Auto-Entity providers.
 *
 * @usageNotes
 *
 * ### Providing Auto-Entity
 *
 * ```
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideStore(appReducer)
 *     provideAutoEntityStore(),
 *   ]
 * })
 * ```
 *
 * @publicApi
 * @param features A list of Auto-Entity features to include.
 * @returns A set of providers to set up the Auto-Entity global state.
 */
export declare function provideAutoEntityStore(...features: NgRxAutoEntityFeatures[]): EnvironmentProviders;
export declare function addNgRxAutoEntityInjector(): void;
/** @internal */
export declare function _provideAutoEntityState(): Provider[];
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
export declare function provideAutoEntityState(): EnvironmentProviders;
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
export declare function provideEntityService(modelType: Type<any>, service: Type<any>): EnvironmentProviders;
export type CustomStoreFeature = NgRxAutoEntityFeature<NgRxAutoEntityFeatureKind.CustomStoreFeature>;
export type CustomStoreFactory = (...deps: any[]) => Store<any>;
export declare function withCustomStore(getStore: CustomStoreFactory, deps?: any[]): CustomStoreFeature;
/**
 * Disables automatic providing of the Auto-Entity Store.
 * @internal
 */
export declare function _withNoStore(): CustomStoreFeature;
export type NgRxAutoEntityFeatures = CustomStoreFeature;
export declare const enum NgRxAutoEntityFeatureKind {
    CustomStoreFeature = 0
}
