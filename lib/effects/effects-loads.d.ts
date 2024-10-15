import { Actions } from '@ngrx/effects';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
export declare class LoadEffects {
    private actions$;
    private ops;
    load$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadAll$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadAllSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadAllFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadMany$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadManySuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadPage$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadPageSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadPageFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadRange$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").LoadRangeSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadRangeFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadEffects>;
}
