import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityIfNecessaryOperators } from './if-necessary-operators';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
/**
 * Fully-featured entity effects class that provides all standard
 * effect handling for all CURDL operations.
 */
export declare class EntityEffects {
    private actions$;
    private ops;
    private ifnOps;
    load$: Observable<import("@briebug/ngrx-auto-entity").LoadSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadIfNecessary$: Observable<import("@briebug/ngrx-auto-entity").Load<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadAll$: Observable<import("@briebug/ngrx-auto-entity").LoadAllSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadAllFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadAllIfNecessary$: Observable<import("@briebug/ngrx-auto-entity").LoadAll<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadMany$: Observable<import("@briebug/ngrx-auto-entity").LoadManySuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadManyIfNecessary$: Observable<import("@briebug/ngrx-auto-entity").LoadMany<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadPage$: Observable<import("@briebug/ngrx-auto-entity").LoadPageSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadPageFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadPageIfNecessary$: Observable<import("@briebug/ngrx-auto-entity").LoadPage<any>> & import("@ngrx/effects").CreateEffectMetadata;
    loadRange$: Observable<import("@briebug/ngrx-auto-entity").LoadRangeSuccess<unknown> | import("@briebug/ngrx-auto-entity").LoadRangeFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    loadRangeIfNecessary$: Observable<import("@briebug/ngrx-auto-entity").LoadRange<any>> & import("@ngrx/effects").CreateEffectMetadata;
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
    constructor(actions$: Actions, ops: EntityOperators, ifnOps: EntityIfNecessaryOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityEffects>;
}
