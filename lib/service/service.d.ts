import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IEntityInfo } from '../actions/entity-info';
import { Page, Range } from '../models';
import { EntityIdentity } from '../types/entity-identity';
import { IEntityIdentitiesRef, IEntityIdentityRef, IEntityPageRef, IEntityRangeRef, IEntityRef } from './refs';
import * as i0 from "@angular/core";
/**
 * Looks up client-provided entity service class using Angular's injector and this package's naming
 * conventions.  Then calls client's service and provides success/failure handling.
 */
export declare class NgrxAutoEntityService {
    private injector;
    constructor(injector: Injector);
    load<TModel>(entityInfo: IEntityInfo, keys: any, criteria?: any): Observable<IEntityRef<TModel>>;
    loadAll<TModel>(entityInfo: IEntityInfo, criteria?: any): Observable<IEntityRef<TModel[]>>;
    loadMany<TModel>(entityInfo: IEntityInfo, criteria?: any): Observable<IEntityRef<TModel[]>>;
    loadPage<TModel>(entityInfo: IEntityInfo, page: Page, criteria?: any): Observable<IEntityPageRef<TModel>>;
    loadRange<TModel>(entityInfo: IEntityInfo, range: Range, criteria?: any): Observable<IEntityRangeRef<TModel>>;
    create<TModel>(entityInfo: IEntityInfo, entity: TModel, criteria?: any): Observable<IEntityRef<TModel>>;
    createMany<TModel>(entityInfo: IEntityInfo, entities: TModel[], criteria?: any): Observable<IEntityRef<TModel[]>>;
    update<TModel>(entityInfo: IEntityInfo, entity: TModel, criteria?: any): Observable<IEntityRef<TModel>>;
    updateMany<TModel>(entityInfo: IEntityInfo, entities: TModel[], criteria?: any): Observable<IEntityRef<TModel[]>>;
    upsert<TModel>(entityInfo: IEntityInfo, entity: TModel, criteria?: any): Observable<IEntityRef<TModel>>;
    upsertMany<TModel>(entityInfo: IEntityInfo, entities: TModel[], criteria?: any): Observable<IEntityRef<TModel[]>>;
    replace<TModel>(entityInfo: IEntityInfo, entity: TModel, criteria?: any): Observable<IEntityRef<TModel>>;
    replaceMany<TModel>(entityInfo: IEntityInfo, entities: TModel[], criteria?: any): Observable<IEntityRef<TModel[]>>;
    delete<TModel>(entityInfo: IEntityInfo, entity: TModel, criteria?: any): Observable<IEntityRef<TModel>>;
    deleteMany<TModel>(entityInfo: IEntityInfo, entities: TModel[], criteria?: any): Observable<IEntityRef<TModel[]>>;
    deleteByKey<TModel>(entityInfo: IEntityInfo, key: EntityIdentity, criteria?: any): Observable<IEntityIdentityRef>;
    deleteManyByKey<TModel>(entityInfo: IEntityInfo, keys: EntityIdentity[], criteria?: any): Observable<IEntityIdentitiesRef>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgrxAutoEntityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgrxAutoEntityService>;
}
