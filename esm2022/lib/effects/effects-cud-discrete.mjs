import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofEntityAction } from '../actions/action-operators';
import { EntityActionTypes } from '../actions/action-types';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "./operators";
export class CreateEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.create$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Create), this.ops.create()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class CreateManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.createMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.CreateMany), this.ops.createMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateManyEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: CreateManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class UpdateEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.update$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Update), this.ops.update()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class UpdateManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.updateMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpdateMany), this.ops.updateMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateManyEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpdateManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class UpsertEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.update$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Upsert), this.ops.upsert()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class UpsertManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.updateMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.UpsertMany), this.ops.upsertMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertManyEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: UpsertManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class ReplaceEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.replace$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Replace), this.ops.replace()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class ReplaceManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.replaceMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.ReplaceMany), this.ops.replaceMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceManyEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: ReplaceManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class DeleteEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.delete$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Delete), this.ops.delete()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class DeleteManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.deleteMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteMany), this.ops.deleteMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class DeleteByKeyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.deleteByKey$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteByKey), this.ops.deleteByKey()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteByKeyEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteByKeyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteByKeyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class DeleteManyByKeysEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.deleteManyByKeys$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.DeleteManyByKeys), this.ops.deleteManyByKey()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyByKeysEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyByKeysEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: DeleteManyByKeysEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy1jdWQtZGlzY3JldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3J4LWF1dG8tZW50aXR5L3NyYy9saWIvZWZmZWN0cy9lZmZlY3RzLWN1ZC1kaXNjcmV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXRELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7O0FBRzlDLE1BQU0sT0FBTyxZQUFZO0lBR3ZCLFlBQW9CLFFBQWlCLEVBQVUsR0FBb0I7UUFBL0MsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBRm5FLFlBQU8sR0FBdUIsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU1RCxDQUFDO2lJQUg1RCxZQUFZO3FJQUFaLFlBQVk7OzJGQUFaLFlBQVk7a0JBRHhCLFVBQVU7O0FBUVgsTUFBTSxPQUFPLGdCQUFnQjtJQUszQixZQUFvQixRQUFpQixFQUFVLEdBQW9CO1FBQS9DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUpuRSxnQkFBVyxHQUF1QixZQUFZLENBQUMsR0FBRyxFQUFFLENBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMs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QU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFBb0IsUUFBaUIsRUFBVSxHQUFvQjtRQUEvQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFGbkUsaUJBQVksR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZELENBQUM7aUlBSDVELGlCQUFpQjtxSUFBakIsaUJBQWlCOzsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVOztBQVFYLE1BQU0sT0FBTyxzQkFBc0I7SUFLakMsWUFBb0IsUUFBaUIsRUFBVSxHQUFvQjtRQUEvQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFKbkUsc0JBQWlCLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQ25HLENBQUM7SUFFb0UsQ0FBQztpSUFMNUQsc0JBQXNCO3FJQUF0QixzQkFBc0I7OzJGQUF0QixzQkFBc0I7a0JBRGxDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgb2ZFbnRpdHlBY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi1vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBFbnRpdHlPcGVyYXRvcnMgfSBmcm9tICcuL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDcmVhdGVFZmZlY3Qge1xuICBjcmVhdGUkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSBjcmVhdGVFZmZlY3QoKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKG9mRW50aXR5QWN0aW9uKEVudGl0eUFjdGlvblR5cGVzLkNyZWF0ZSksIHRoaXMub3BzLmNyZWF0ZSgpKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBvcHM6IEVudGl0eU9wZXJhdG9ycykge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyZWF0ZU1hbnlFZmZlY3Qge1xuICBjcmVhdGVNYW55JDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gY3JlYXRlRWZmZWN0KCgpID0+XG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKG9mRW50aXR5QWN0aW9uKEVudGl0eUFjdGlvblR5cGVzLkNyZWF0ZU1hbnkpLCB0aGlzLm9wcy5jcmVhdGVNYW55KCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBvcHM6IEVudGl0eU9wZXJhdG9ycykge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVmZmVjdCB7XG4gIHVwZGF0ZSQgPSBjcmVhdGVFZmZlY3QoKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKG9mRW50aXR5QWN0aW9uKEVudGl0eUFjdGlvblR5cGVzLlVwZGF0ZSksIHRoaXMub3BzLnVwZGF0ZSgpKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBvcHM6IEVudGl0eU9wZXJhdG9ycykge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZU1hbnlFZmZlY3Qge1xuICB1cGRhdGVNYW55JCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUob2ZFbnRpdHlBY3Rpb24oRW50aXR5QWN0aW9uVHlwZXMuVXBkYXRlTWFueSksIHRoaXMub3BzLnVwZGF0ZU1hbnkoKSkpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgb3BzOiBFbnRpdHlPcGVyYXRvcnMpIHt9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcHNlcnRFZmZlY3Qge1xuICB1cGRhdGUkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShvZkVudGl0eUFjdGlvbihFbnRpdHlBY3Rpb25UeXBlcy5VcHNlcnQpLCB0aGlzLm9wcy51cHNlcnQoKSkpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgb3BzOiBFbnRpdHlPcGVyYXRvcnMpIHt9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcHNlcnRNYW55RWZmZWN0IHtcbiAgdXBkYXRlTWFueSQgPSBjcmVhdGVFZmZlY3QoKCkgPT4gdGhpcy5hY3Rpb25zJC5waXBlKG9mRW50aXR5QWN0aW9uKEVudGl0eUFjdGlvblR5cGVzLlVwc2VydE1hbnkpLCB0aGlzLm9wcy51cHNlcnRNYW55KCkpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIG9wczogRW50aXR5T3BlcmF0b3JzKSB7fVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVwbGFjZUVmZmVjdCB7XG4gIHJlcGxhY2UkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShvZkVudGl0eUFjdGlvbihFbnRpdHlBY3Rpb25UeXBlcy5SZXBsYWNlKSwgdGhpcy5vcHMucmVwbGFjZSgpKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBvcHM6IEVudGl0eU9wZXJhdG9ycykge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlcGxhY2VNYW55RWZmZWN0IHtcbiAgcmVwbGFjZU1hbnkkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShvZkVudGl0eUFjdGlvbihFbnRpdHlBY3Rpb25UeXBlcy5SZXBsYWNlTWFueSksIHRoaXMub3BzLnJlcGxhY2VNYW55KCkpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIG9wczogRW50aXR5T3BlcmF0b3JzKSB7fVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVsZXRlRWZmZWN0IHtcbiAgZGVsZXRlJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUob2ZFbnRpdHlBY3Rpb24oRW50aXR5QWN0aW9uVHlwZXMuRGVsZXRlKSwgdGhpcy5vcHMuZGVsZXRlKCkpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIG9wczogRW50aXR5T3BlcmF0b3JzKSB7fVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVsZXRlTWFueUVmZmVjdCB7XG4gIGRlbGV0ZU1hbnkkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShvZkVudGl0eUFjdGlvbihFbnRpdHlBY3Rpb25UeXBlcy5EZWxldGVNYW55KSwgdGhpcy5vcHMuZGVsZXRlTWFueSgpKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBvcHM6IEVudGl0eU9wZXJhdG9ycykge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERlbGV0ZUJ5S2V5RWZmZWN0IHtcbiAgZGVsZXRlQnlLZXkkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShvZkVudGl0eUFjdGlvbihFbnRpdHlBY3Rpb25UeXBlcy5EZWxldGVCeUtleSksIHRoaXMub3BzLmRlbGV0ZUJ5S2V5KCkpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIG9wczogRW50aXR5T3BlcmF0b3JzKSB7fVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVsZXRlTWFueUJ5S2V5c0VmZmVjdCB7XG4gIGRlbGV0ZU1hbnlCeUtleXMkID0gY3JlYXRlRWZmZWN0KCgpID0+XG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKG9mRW50aXR5QWN0aW9uKEVudGl0eUFjdGlvblR5cGVzLkRlbGV0ZU1hbnlCeUtleXMpLCB0aGlzLm9wcy5kZWxldGVNYW55QnlLZXkoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIG9wczogRW50aXR5T3BlcmF0b3JzKSB7fVxufVxuIl19