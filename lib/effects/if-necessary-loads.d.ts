import { Actions } from '@ngrx/effects';
import { EntityIfNecessaryOperators } from './if-necessary-operators';
import * as i0 from "@angular/core";
export declare class LoadIfNecessaryEffects {
    private actions$;
    private ifnOps;
    loadIfNecessary$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").Load<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadAllIfNecessary$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadAll<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadManyIfNecessary$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadMany<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadPageIfNecessary$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadPage<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadRangeIfNecessary$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadRange<any>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ifnOps: EntityIfNecessaryOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadIfNecessaryEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadIfNecessaryEffects>;
}
