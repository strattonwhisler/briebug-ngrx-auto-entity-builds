import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
export declare class CUDEffects {
    private actions$;
    private ops;
    create$: Observable<Action>;
    createMany$: Observable<Action>;
    update$: Observable<import("@briebug/ngrx-auto-entity").UpdateSuccess<unknown> | import("@briebug/ngrx-auto-entity").UpdateFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    updateMany$: Observable<import("@briebug/ngrx-auto-entity").UpdateManySuccess<unknown> | import("@briebug/ngrx-auto-entity").UpdateManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    upsert$: Observable<import("@briebug/ngrx-auto-entity").UpsertSuccess<unknown> | import("@briebug/ngrx-auto-entity").UpsertFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    upsertMany$: Observable<import("@briebug/ngrx-auto-entity").UpsertManySuccess<unknown> | import("@briebug/ngrx-auto-entity").UpsertManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    replace$: Observable<import("@briebug/ngrx-auto-entity").ReplaceSuccess<unknown> | import("@briebug/ngrx-auto-entity").ReplaceFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    replaceMany$: Observable<import("@briebug/ngrx-auto-entity").ReplaceManySuccess<unknown> | import("@briebug/ngrx-auto-entity").ReplaceManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    delete$: Observable<import("@briebug/ngrx-auto-entity").DeleteSuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    deleteMany$: Observable<import("@briebug/ngrx-auto-entity").DeleteManySuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    deleteByKey$: Observable<import("@briebug/ngrx-auto-entity").DeleteByKeySuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteByKeyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    deleteManyByKeys$: Observable<import("@briebug/ngrx-auto-entity").DeleteManyByKeysSuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteManyByKeysFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<CUDEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CUDEffects>;
}
