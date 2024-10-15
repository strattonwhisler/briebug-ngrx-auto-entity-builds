import { Actions } from '@ngrx/effects';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
export declare class ExtraEffects {
    private actions$;
    private ops;
    select$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").Selected<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    selectByKey$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").Selected<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    selectMany$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").SelectedMany<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    selectMore$: import("rxjs").Observable<import("../actions/selection-actions").SelectedMore<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    selectManyByKeys$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").SelectedMany<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    selectMoreByKeys$: import("rxjs").Observable<import("../actions/selection-actions").SelectedMore<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    deselect$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").Deselected<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    deselectMany$: import("rxjs").Observable<import("../actions/deselection-actions").DeselectedMany<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    deselectManyByKeys$: import("rxjs").Observable<import("../actions/deselection-actions").DeselectedMany<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    deselectAll$: import("rxjs").Observable<import("../actions/deselection-actions").DeselectedMany<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    editNew$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").Edited<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    edit$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").Edited<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    editByKey$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").EditedByKey<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    change$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").Changed<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    endEdit$: import("rxjs").Observable<import("@briebug/ngrx-auto-entity").EditEnded<unknown>> & import("@ngrx/effects").CreateEffectMetadata;
    constructor(actions$: Actions, ops: EntityOperators);
    static ɵfac: i0.ɵɵFactoryDeclaration<ExtraEffects, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ExtraEffects>;
}
