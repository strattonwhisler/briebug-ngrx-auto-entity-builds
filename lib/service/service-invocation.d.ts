import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { IEntityInfo } from '../actions/entity-info';
import { IAutoEntityService } from './interface';
export declare const invokeService: <TModel, TModelObs, TResult>(method: string, entityInfo: IEntityInfo, invoke: (service: IAutoEntityService<TModel>) => Observable<TModelObs>, toResult: (entity: TModelObs) => TResult, service: IAutoEntityService<TModel>) => Observable<TResult>;
export declare const callService: <TModel, TModelObs, TResult>(method: keyof IAutoEntityService<TModel>, entityInfo: IEntityInfo, injector: Injector, invoke: (service: IAutoEntityService<TModel>) => Observable<TModelObs>, toResult: (entity: TModelObs) => TResult) => Observable<TResult>;
