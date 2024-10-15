import { Injector } from '@angular/core';
import { IEntityInfo } from '../actions/entity-info';
import { IAutoEntityService } from './interface';
export declare const failResolution: (error: any, entityInfo: IEntityInfo) => never;
export declare const resolveService: <TModel>(entityInfo: Readonly<IEntityInfo>, injector: Injector) => IAutoEntityService<TModel>;
export declare const resolveServiceDeep: <TModel>(entityInfo: Readonly<IEntityInfo>, injector: Injector, remaining: Injector[]) => IAutoEntityService<TModel> | never;
