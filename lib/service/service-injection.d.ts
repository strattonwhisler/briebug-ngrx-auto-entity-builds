import { Injector } from '@angular/core';
import { IEntityInfo } from '../actions/entity-info';
import { IAutoEntityService } from './interface';
export declare const getInjectors: () => readonly Injector[];
export declare const resetInjectors: () => readonly any[];
export declare const getService: <TModel>(entityInfo: IEntityInfo, injector: Injector) => IAutoEntityService<TModel>;
export declare const prepend: <T>(first: T, rest: ReadonlyArray<T>) => ReadonlyArray<T>;
export declare const addInjector: (injector: Injector) => void;
