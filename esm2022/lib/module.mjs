import { NgModule } from '@angular/core';
import { _provideAutoEntityState, _provideAutoEntityStore, _withNoStore } from './provider';
import * as i0 from "@angular/core";
export class NgRxAutoEntityRootModuleWithEffects {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleWithEffects, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
export class NgRxAutoEntityRootModuleNoEntityEffects {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEntityEffects, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
export class NgRxAutoEntityRootModuleNoEffects {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityRootModuleNoEffects, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
export class NgRxAutoEntityFeatureModule {
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgRxAutoEntityFeatureModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
export class NgrxAutoEntityModule {
    static forRoot() {
        return {
            ngModule: NgRxAutoEntityRootModuleWithEffects,
            providers: [..._provideAutoEntityStore({}, [_withNoStore()])]
        };
    }
    static forRootNoEntityEffects() {
        return {
            ngModule: NgRxAutoEntityRootModuleNoEntityEffects,
            providers: [
                ..._provideAutoEntityStore({
                    withoutEntityEffects: true
                }, [_withNoStore()])
            ]
        };
    }
    static forRootNoEffects() {
        return {
            ngModule: NgRxAutoEntityRootModuleNoEffects,
            providers: [
                ..._provideAutoEntityStore({
                    withoutEntityEffects: true,
                    withoutExtraEffects: true
                }, [_withNoStore()])
            ]
        };
    }
    static forFeature() {
        return {
            ngModule: NgRxAutoEntityFeatureModule,
            providers: [..._provideAutoEntityState()]
        };
    }
    /** @nocollapse */ static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    /** @nocollapse */ static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule }); }
    /** @nocollapse */ static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.2", ngImport: i0, type: NgrxAutoEntityModule, decorators: [{
            type: NgModule,
            args: [{}]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDOztBQVE1RixNQUFNLE9BQU8sbUNBQW1DO2lJQUFuQyxtQ0FBbUM7a0lBQW5DLG1DQUFtQztrSUFBbkMsbUNBQW1DOzsyRkFBbkMsbUNBQW1DO2tCQUQvQyxRQUFRO21CQUFDLEVBQUU7O0FBSVosTUFBTSxPQUFPLHVDQUF1QztpSUFBdkMsdUNBQXVDO2tJQUF2Qyx1Q0FBdUM7a0lBQXZDLHVDQUF1Qzs7MkZBQXZDLHVDQUF1QztrQkFEbkQsUUFBUTttQkFBQyxFQUFFOztBQUlaLE1BQU0sT0FBTyxpQ0FBaUM7aUlBQWpDLGlDQUFpQztrSUFBakMsaUNBQWlDO2tJQUFqQyxpQ0FBaUM7OzJGQUFqQyxpQ0FBaUM7a0JBRDdDLFFBQVE7bUJBQUMsRUFBRTs7QUFJWixNQUFNLE9BQU8sMkJBQTJCO2lJQUEzQiwyQkFBMkI7a0lBQTNCLDJCQUEyQjtrSUFBM0IsMkJBQTJCOzsyRkFBM0IsMkJBQTJCO2tCQUR2QyxRQUFRO21CQUFDLEVBQUU7O0FBSVosTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLFNBQVMsRUFBRSxDQUFDLEdBQUcsdUJBQXVCLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlELENBQUM7SUFDSixDQUFDO0lBRUQsTUFBTSxDQUFDLHNCQUFzQjtRQUMzQixPQUFPO1lBQ0wsUUFBUSxFQUFFLHVDQUF1QztZQUNqRCxTQUFTLEVBQUU7Z0JBQ1QsR0FBRyx1QkFBdUIsQ0FDeEI7b0JBQ0Usb0JBQW9CLEVBQUUsSUFBSTtpQkFDM0IsRUFDRCxDQUFDLFlBQVksRUFBRSxDQUFDLENBQ2pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELE1BQU0sQ0FBQyxnQkFBZ0I7UUFDckIsT0FBTztZQUNMLFFBQVEsRUFBRSxpQ0FBaUM7WUFDM0MsU0FBUyxFQUFFO2dCQUNULEdBQUcsdUJBQXVCLENBQ3hCO29CQUNFLG9CQUFvQixFQUFFLElBQUk7b0JBQzFCLG1CQUFtQixFQUFFLElBQUk7aUJBQzFCLEVBQ0QsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUNqQjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVTtRQUNmLE9BQU87WUFDTCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLEdBQUcsdUJBQXVCLEVBQUUsQ0FBQztTQUMxQyxDQUFDO0lBQ0osQ0FBQztpSUExQ1Usb0JBQW9CO2tJQUFwQixvQkFBb0I7a0lBQXBCLG9CQUFvQjs7MkZBQXBCLG9CQUFvQjtrQkFEaEMsUUFBUTttQkFBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgX3Byb3ZpZGVBdXRvRW50aXR5U3RhdGUsIF9wcm92aWRlQXV0b0VudGl0eVN0b3JlLCBfd2l0aE5vU3RvcmUgfSBmcm9tICcuL3Byb3ZpZGVyJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uYW1pbmctY29udmVudGlvblxuZXhwb3J0IGludGVyZmFjZSBOZ1J4QXV0b0VudGl0eU1vZHVsZUNvbmZpZyB7XG4gIGV4Y2x1ZGVFZmZlY3RzPzogYm9vbGVhbjtcbn1cblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIE5nUnhBdXRvRW50aXR5Um9vdE1vZHVsZVdpdGhFZmZlY3RzIHt9XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBOZ1J4QXV0b0VudGl0eVJvb3RNb2R1bGVOb0VudGl0eUVmZmVjdHMge31cblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIE5nUnhBdXRvRW50aXR5Um9vdE1vZHVsZU5vRWZmZWN0cyB7fVxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgTmdSeEF1dG9FbnRpdHlGZWF0dXJlTW9kdWxlIHt9XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBOZ3J4QXV0b0VudGl0eU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TmdSeEF1dG9FbnRpdHlSb290TW9kdWxlV2l0aEVmZmVjdHM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nUnhBdXRvRW50aXR5Um9vdE1vZHVsZVdpdGhFZmZlY3RzLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uX3Byb3ZpZGVBdXRvRW50aXR5U3RvcmUoe30sIFtfd2l0aE5vU3RvcmUoKV0pXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdE5vRW50aXR5RWZmZWN0cygpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nUnhBdXRvRW50aXR5Um9vdE1vZHVsZU5vRW50aXR5RWZmZWN0cz4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdSeEF1dG9FbnRpdHlSb290TW9kdWxlTm9FbnRpdHlFZmZlY3RzLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLl9wcm92aWRlQXV0b0VudGl0eVN0b3JlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHdpdGhvdXRFbnRpdHlFZmZlY3RzOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3dpdGhOb1N0b3JlKCldXG4gICAgICAgIClcbiAgICAgIF1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3ROb0VmZmVjdHMoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ1J4QXV0b0VudGl0eVJvb3RNb2R1bGVOb0VmZmVjdHM+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5nUnhBdXRvRW50aXR5Um9vdE1vZHVsZU5vRWZmZWN0cyxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5fcHJvdmlkZUF1dG9FbnRpdHlTdG9yZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICB3aXRob3V0RW50aXR5RWZmZWN0czogdHJ1ZSxcbiAgICAgICAgICAgIHdpdGhvdXRFeHRyYUVmZmVjdHM6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfd2l0aE5vU3RvcmUoKV1cbiAgICAgICAgKVxuICAgICAgXVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yRmVhdHVyZSgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5nUnhBdXRvRW50aXR5RmVhdHVyZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmdSeEF1dG9FbnRpdHlGZWF0dXJlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uX3Byb3ZpZGVBdXRvRW50aXR5U3RhdGUoKV1cbiAgICB9O1xuICB9XG59XG4iXX0=