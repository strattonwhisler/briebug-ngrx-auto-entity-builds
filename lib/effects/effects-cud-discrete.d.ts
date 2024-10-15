import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
export declare class CreateEffect {
    private actions$;
    private ops;
    create$: Observable<Action>;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateEffect>;
}
export declare class CreateManyEffect {
    private actions$;
    private ops;
    createMany$: Observable<Action>;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<CreateManyEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CreateManyEffect>;
}
export declare class UpdateEffect {
    private actions$;
    private ops;
    update$: Observable<import("@briebug/ngrx-auto-entity").UpdateSuccess<unknown> | import("@briebug/ngrx-auto-entity").UpdateFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateEffect>;
}
export declare class UpdateManyEffect {
    private actions$;
    private ops;
    updateMany$: Observable<import("@briebug/ngrx-auto-entity").UpdateManySuccess<unknown> | import("@briebug/ngrx-auto-entity").UpdateManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<UpdateManyEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpdateManyEffect>;
}
export declare class UpsertEffect {
    private actions$;
    private ops;
    update$: Observable<import("@briebug/ngrx-auto-entity").UpsertSuccess<unknown> | import("@briebug/ngrx-auto-entity").UpsertFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<UpsertEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpsertEffect>;
}
export declare class UpsertManyEffect {
    private actions$;
    private ops;
    updateMany$: Observable<import("@briebug/ngrx-auto-entity").UpsertManySuccess<unknown> | import("@briebug/ngrx-auto-entity").UpsertManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<UpsertManyEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UpsertManyEffect>;
}
export declare class ReplaceEffect {
    private actions$;
    private ops;
    replace$: Observable<import("@briebug/ngrx-auto-entity").ReplaceSuccess<unknown> | import("@briebug/ngrx-auto-entity").ReplaceFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplaceEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReplaceEffect>;
}
export declare class ReplaceManyEffect {
    private actions$;
    private ops;
    replaceMany$: Observable<import("@briebug/ngrx-auto-entity").ReplaceManySuccess<unknown> | import("@briebug/ngrx-auto-entity").ReplaceManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<ReplaceManyEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReplaceManyEffect>;
}
export declare class DeleteEffect {
    private actions$;
    private ops;
    delete$: Observable<import("@briebug/ngrx-auto-entity").DeleteSuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeleteEffect>;
}
export declare class DeleteManyEffect {
    private actions$;
    private ops;
    deleteMany$: Observable<import("@briebug/ngrx-auto-entity").DeleteManySuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteManyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteManyEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeleteManyEffect>;
}
export declare class DeleteByKeyEffect {
    private actions$;
    private ops;
    deleteByKey$: Observable<import("@briebug/ngrx-auto-entity").DeleteByKeySuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteByKeyFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteByKeyEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeleteByKeyEffect>;
}
export declare class DeleteManyByKeysEffect {
    private actions$;
    private ops;
    deleteManyByKeys$: Observable<import("@briebug/ngrx-auto-entity").DeleteManyByKeysSuccess<unknown> | import("@briebug/ngrx-auto-entity").DeleteManyByKeysFailure<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteManyByKeysEffect, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DeleteManyByKeysEffect>;
}
