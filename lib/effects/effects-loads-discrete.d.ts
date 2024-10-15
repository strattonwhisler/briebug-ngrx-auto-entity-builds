import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
export declare class LoadEffect {
    private actions$;
    private ops;
    load$: Observable<Action>;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadEffect>;
}
export declare class LoadAllEffect {
    private actions$;
    private ops;
    loadAll$: Observable<import("@briebug/ngrx-auto-entity").LoadAllSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadAllFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadAllEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadAllEffect>;
}
export declare class LoadManyEffect {
    private actions$;
    private ops;
    loadMany$: Observable<import("@briebug/ngrx-auto-entity").LoadManySuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadManyEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadManyEffect>;
}
export declare class LoadPageEffect {
    private actions$;
    private ops;
    loadPage$: Observable<import("@briebug/ngrx-auto-entity").LoadPageSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadPageFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadPageEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadPageEffect>;
}
export declare class LoadRangeEffect {
    private actions$;
    private ops;
    loadRange$: Observable<import("@briebug/ngrx-auto-entity").LoadRangeSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadRangeFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<LoadRangeEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoadRangeEffect>;
}
