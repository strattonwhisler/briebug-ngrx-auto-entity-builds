import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { ofEntityAction } from '../actions/action-operators';
import { EntityActionTypes } from '../actions/action-types';
import { EntityOperators } from './operators';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "./operators";
export class LoadEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.load$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.Load), this.ops.load()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class LoadAllEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadAll$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadAll), this.ops.loadAll()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadAllEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadAllEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadAllEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class LoadManyEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadMany$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadMany), this.ops.loadMany()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadManyEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadManyEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadManyEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class LoadPageEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadPage$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadPage), this.ops.loadPage()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadPageEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadPageEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadPageEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
export class LoadRangeEffect {
    constructor(actions$, ops) {
        this.actions$ = actions$;
        this.ops = ops;
        this.loadRange$ = createEffect(() => this.actions$.pipe(ofEntityAction(EntityActionTypes.LoadRange), this.ops.loadRange()));
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadRangeEffect, deps: [{ token: i1.Actions }, { token: i2.EntityOperators }], target: i0.ɵɵFactoryTarget.Injectable }); }
    /** @nocollapse */ static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadRangeEffect }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: LoadRangeEffect, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.Actions }, { type: i2.EntityOperators }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0cy1sb2Fkcy1kaXNjcmV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHkvc3JjL2xpYi9lZmZlY3RzL2VmZmVjdHMtbG9hZHMtZGlzY3JldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7OztBQUc5QyxNQUFNLE9BQU8sVUFBVTtJQUdyQixZQUFvQixRQUFpQixFQUFVLEdBQW9CO1FBQS9DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUZuRSxVQUFLLEdBQXVCLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdEQsQ0FBQztpSUFINUQsVUFBVTtxSUFBVixVQUFVOzsyRkFBVixVQUFVO2tCQUR0QixVQUFVOztBQVFYLE1BQU0sT0FBTyxhQUFhO0lBR3hCLFlBQW9CLFFBQWlCLEVBQVUsR0FBb0I7UUFBL0MsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBRm5FLGFBQVEsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTNDLENBQUM7aUlBSDVELGFBQWE7cUlBQWIsYUFBYTs7MkZBQWIsYUFBYTtrQkFEekIsVUFBVTs7QUFRWCxNQUFNLE9BQU8sY0FBYztJQUd6QixZQUFvQixRQUFpQixFQUFVLEdBQW9CO1FBQS9DLGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFpQjtRQUZuRSxjQUFTLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU5QyxDQUFDO2lJQUg1RCxjQUFjO3FJQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBRDFCLFVBQVU7O0FBUVgsTUFBTSxPQUFPLGNBQWM7SUFHekIsWUFBb0IsUUFBaUIsRUFBVSxHQUFvQjtRQUEvQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBaUI7UUFGbkUsY0FBUyxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFOUMsQ0FBQztpSUFINUQsY0FBYztxSUFBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQUQxQixVQUFVOztBQVFYLE1BQU0sT0FBTyxlQUFlO0lBRzFCLFlBQW9CLFFBQWlCLEVBQVUsR0FBb0I7UUFBL0MsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWlCO1FBRm5FLGVBQVUsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRWpELENBQUM7aUlBSDVELGVBQWU7cUlBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFEM0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBvZkVudGl0eUFjdGlvbiB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLW9wZXJhdG9ycyc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb25UeXBlcyB9IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IEVudGl0eU9wZXJhdG9ycyB9IGZyb20gJy4vb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRFZmZlY3Qge1xuICBsb2FkJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShvZkVudGl0eUFjdGlvbihFbnRpdHlBY3Rpb25UeXBlcy5Mb2FkKSwgdGhpcy5vcHMubG9hZCgpKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBvcHM6IEVudGl0eU9wZXJhdG9ycykge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRBbGxFZmZlY3Qge1xuICBsb2FkQWxsJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUob2ZFbnRpdHlBY3Rpb24oRW50aXR5QWN0aW9uVHlwZXMuTG9hZEFsbCksIHRoaXMub3BzLmxvYWRBbGwoKSkpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgb3BzOiBFbnRpdHlPcGVyYXRvcnMpIHt9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2FkTWFueUVmZmVjdCB7XG4gIGxvYWRNYW55JCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUob2ZFbnRpdHlBY3Rpb24oRW50aXR5QWN0aW9uVHlwZXMuTG9hZE1hbnkpLCB0aGlzLm9wcy5sb2FkTWFueSgpKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBvcHM6IEVudGl0eU9wZXJhdG9ycykge31cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvYWRQYWdlRWZmZWN0IHtcbiAgbG9hZFBhZ2UkID0gY3JlYXRlRWZmZWN0KCgpID0+IHRoaXMuYWN0aW9ucyQucGlwZShvZkVudGl0eUFjdGlvbihFbnRpdHlBY3Rpb25UeXBlcy5Mb2FkUGFnZSksIHRoaXMub3BzLmxvYWRQYWdlKCkpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIG9wczogRW50aXR5T3BlcmF0b3JzKSB7fVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9hZFJhbmdlRWZmZWN0IHtcbiAgbG9hZFJhbmdlJCA9IGNyZWF0ZUVmZmVjdCgoKSA9PiB0aGlzLmFjdGlvbnMkLnBpcGUob2ZFbnRpdHlBY3Rpb24oRW50aXR5QWN0aW9uVHlwZXMuTG9hZFJhbmdlKSwgdGhpcy5vcHMubG9hZFJhbmdlKCkpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLCBwcml2YXRlIG9wczogRW50aXR5T3BlcmF0b3JzKSB7fVxufVxuIl19