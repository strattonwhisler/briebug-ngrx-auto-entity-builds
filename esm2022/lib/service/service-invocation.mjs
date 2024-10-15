import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { logAndThrow, notAFunction, notImplemented } from './error-handling';
import { getService } from './service-injection';
export const invokeService = (method, entityInfo, invoke, toResult, service) => !service[method]
    ? throwError({ info: entityInfo, message: notImplemented(method, entityInfo) })
    : typeof service[method] !== 'function'
        ? throwError({ info: entityInfo, message: notAFunction(method, entityInfo) })
        : invoke(service).pipe(map(toResult), catchError(err => throwError({ info: entityInfo, err })));
export const callService = (method, entityInfo, injector, invoke, toResult) => {
    try {
        const service = getService(entityInfo, injector);
        return invokeService(method, entityInfo, invoke, toResult, service);
    }
    catch (err) {
        return logAndThrow(method, err, entityInfo);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1pbnZvY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL3NlcnZpY2Uvc2VydmljZS1pbnZvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU3RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFakQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQzNCLE1BQWMsRUFDZCxVQUF1QixFQUN2QixNQUFzRSxFQUN0RSxRQUF3QyxFQUN4QyxPQUFtQyxFQUNuQyxFQUFFLENBQ0YsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2QsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUMvRSxDQUFDLENBQUMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssVUFBVTtRQUN2QyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDO1FBQzdFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNsQixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQ2IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQ3pELENBQUM7QUFFUixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FDekIsTUFBd0MsRUFDeEMsVUFBdUIsRUFDdkIsUUFBa0IsRUFDbEIsTUFBc0UsRUFDdEUsUUFBd0MsRUFDbkIsRUFBRTtJQUN2QixJQUFJLENBQUM7UUFDSCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sYUFBYSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLE9BQU8sV0FBVyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IElFbnRpdHlJbmZvIH0gZnJvbSAnLi4vYWN0aW9ucy9lbnRpdHktaW5mbyc7XG5pbXBvcnQgeyBsb2dBbmRUaHJvdywgbm90QUZ1bmN0aW9uLCBub3RJbXBsZW1lbnRlZCB9IGZyb20gJy4vZXJyb3ItaGFuZGxpbmcnO1xuaW1wb3J0IHsgSUF1dG9FbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0U2VydmljZSB9IGZyb20gJy4vc2VydmljZS1pbmplY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW52b2tlU2VydmljZSA9IDxUTW9kZWwsIFRNb2RlbE9icywgVFJlc3VsdD4oXG4gIG1ldGhvZDogc3RyaW5nLFxuICBlbnRpdHlJbmZvOiBJRW50aXR5SW5mbyxcbiAgaW52b2tlOiAoc2VydmljZTogSUF1dG9FbnRpdHlTZXJ2aWNlPFRNb2RlbD4pID0+IE9ic2VydmFibGU8VE1vZGVsT2JzPixcbiAgdG9SZXN1bHQ6IChlbnRpdHk6IFRNb2RlbE9icykgPT4gVFJlc3VsdCxcbiAgc2VydmljZTogSUF1dG9FbnRpdHlTZXJ2aWNlPFRNb2RlbD5cbikgPT5cbiAgIXNlcnZpY2VbbWV0aG9kXVxuICAgID8gdGhyb3dFcnJvcih7IGluZm86IGVudGl0eUluZm8sIG1lc3NhZ2U6IG5vdEltcGxlbWVudGVkKG1ldGhvZCwgZW50aXR5SW5mbykgfSlcbiAgICA6IHR5cGVvZiBzZXJ2aWNlW21ldGhvZF0gIT09ICdmdW5jdGlvbidcbiAgICA/IHRocm93RXJyb3IoeyBpbmZvOiBlbnRpdHlJbmZvLCBtZXNzYWdlOiBub3RBRnVuY3Rpb24obWV0aG9kLCBlbnRpdHlJbmZvKSB9KVxuICAgIDogaW52b2tlKHNlcnZpY2UpLnBpcGUoXG4gICAgICAgIG1hcCh0b1Jlc3VsdCksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyID0+IHRocm93RXJyb3IoeyBpbmZvOiBlbnRpdHlJbmZvLCBlcnIgfSkpXG4gICAgICApO1xuXG5leHBvcnQgY29uc3QgY2FsbFNlcnZpY2UgPSA8VE1vZGVsLCBUTW9kZWxPYnMsIFRSZXN1bHQ+KFxuICBtZXRob2Q6IGtleW9mIElBdXRvRW50aXR5U2VydmljZTxUTW9kZWw+LFxuICBlbnRpdHlJbmZvOiBJRW50aXR5SW5mbyxcbiAgaW5qZWN0b3I6IEluamVjdG9yLFxuICBpbnZva2U6IChzZXJ2aWNlOiBJQXV0b0VudGl0eVNlcnZpY2U8VE1vZGVsPikgPT4gT2JzZXJ2YWJsZTxUTW9kZWxPYnM+LFxuICB0b1Jlc3VsdDogKGVudGl0eTogVE1vZGVsT2JzKSA9PiBUUmVzdWx0XG4pOiBPYnNlcnZhYmxlPFRSZXN1bHQ+ID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZ2V0U2VydmljZShlbnRpdHlJbmZvLCBpbmplY3Rvcik7XG4gICAgcmV0dXJuIGludm9rZVNlcnZpY2UobWV0aG9kLCBlbnRpdHlJbmZvLCBpbnZva2UsIHRvUmVzdWx0LCBzZXJ2aWNlKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGxvZ0FuZFRocm93KG1ldGhvZCwgZXJyLCBlbnRpdHlJbmZvKTtcbiAgfVxufTtcbiJdfQ==