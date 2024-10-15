import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
export interface NgRxAutoEntityModuleConfig {
    excludeEffects?: boolean;
}
export declare class NgRxAutoEntityRootModuleWithEffects {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgRxAutoEntityRootModuleWithEffects, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgRxAutoEntityRootModuleWithEffects, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgRxAutoEntityRootModuleWithEffects>;
}
export declare class NgRxAutoEntityRootModuleNoEntityEffects {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgRxAutoEntityRootModuleNoEntityEffects, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgRxAutoEntityRootModuleNoEntityEffects, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgRxAutoEntityRootModuleNoEntityEffects>;
}
export declare class NgRxAutoEntityRootModuleNoEffects {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgRxAutoEntityRootModuleNoEffects, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgRxAutoEntityRootModuleNoEffects, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgRxAutoEntityRootModuleNoEffects>;
}
export declare class NgRxAutoEntityFeatureModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NgRxAutoEntityFeatureModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgRxAutoEntityFeatureModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgRxAutoEntityFeatureModule>;
}
export declare class NgrxAutoEntityModule {
    static forRoot(): ModuleWithProviders<NgRxAutoEntityRootModuleWithEffects>;
    static forRootNoEntityEffects(): ModuleWithProviders<NgRxAutoEntityRootModuleNoEntityEffects>;
    static forRootNoEffects(): ModuleWithProviders<NgRxAutoEntityRootModuleNoEffects>;
    static forFeature(): ModuleWithProviders<NgRxAutoEntityFeatureModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgrxAutoEntityModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgrxAutoEntityModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgrxAutoEntityModule>;
}
