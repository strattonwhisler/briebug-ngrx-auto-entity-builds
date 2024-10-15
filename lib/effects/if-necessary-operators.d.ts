import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { Load, LoadIfNecessary } from '../actions/load-actions';
import { LoadAll, LoadAllIfNecessary } from '../actions/load-all-actions';
import { LoadMany, LoadManyIfNecessary } from '../actions/load-many-actions';
import { LoadPage, LoadPageIfNecessary } from '../actions/load-page-actions';
import { LoadRange, LoadRangeIfNecessary } from '../actions/load-range-actions';
import * as i0 from "@angular/core";
export declare class EntityIfNecessaryOperators {
    private injector;
    constructor(injector: Injector);
    loadIfNecessary<TModel>(): (source: Observable<LoadIfNecessary<TModel>>) => Observable<Load<any>>;
    loadAllIfNecessary<TModel>(): (source: Observable<LoadAllIfNecessary<TModel>>) => Observable<LoadAll<any>>;
    loadManyIfNecessary<TModel>(): (source: Observable<LoadManyIfNecessary<TModel>>) => Observable<LoadMany<any>>;
    loadPageIfNecessary<TModel>(): (source: Observable<LoadPageIfNecessary<TModel>>) => Observable<LoadPage<any>>;
    loadRangeIfNecessary<TModel>(): (source: Observable<LoadRangeIfNecessary<TModel>>) => Observable<LoadRange<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityIfNecessaryOperators, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityIfNecessaryOperators>;
}
