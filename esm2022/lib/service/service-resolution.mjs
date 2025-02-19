import { logErrorDetails, logServiceLocateFailure } from './error-handling';
export const failResolution = (error, entityInfo) => {
    logServiceLocateFailure(entityInfo);
    logErrorDetails(error);
    throw error;
};
export const resolveService = (entityInfo, injector) => {
    return injector.get(entityInfo.modelType);
};
export const resolveServiceDeep = (entityInfo, injector, remaining) => {
    try {
        return resolveService(entityInfo, injector);
    }
    catch (err) {
        if (remaining.length) {
            const [first, ...rest] = remaining;
            return resolveServiceDeep(entityInfo, first, rest);
        }
        else {
            throw failResolution(err, entityInfo);
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS1yZXNvbHV0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL3NlcnZpY2Uvc2VydmljZS1yZXNvbHV0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxlQUFlLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc1RSxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxLQUFVLEVBQUUsVUFBdUIsRUFBUyxFQUFFO0lBQzNFLHVCQUF1QixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixNQUFNLEtBQUssQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUFTLFVBQWlDLEVBQUUsUUFBa0IsRUFBOEIsRUFBRTtJQUMxSCxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLENBQ2hDLFVBQWlDLEVBQ2pDLFFBQWtCLEVBQ2xCLFNBQXFCLEVBQ2UsRUFBRTtJQUN0QyxJQUFJLENBQUM7UUFDSCxPQUFPLGNBQWMsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNyQixNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ25DLE9BQU8sa0JBQWtCLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO2FBQU0sQ0FBQztZQUNOLE1BQU0sY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4QyxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJRW50aXR5SW5mbyB9IGZyb20gJy4uL2FjdGlvbnMvZW50aXR5LWluZm8nO1xuaW1wb3J0IHsgbG9nRXJyb3JEZXRhaWxzLCBsb2dTZXJ2aWNlTG9jYXRlRmFpbHVyZSB9IGZyb20gJy4vZXJyb3ItaGFuZGxpbmcnO1xuaW1wb3J0IHsgSUF1dG9FbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgZmFpbFJlc29sdXRpb24gPSAoZXJyb3I6IGFueSwgZW50aXR5SW5mbzogSUVudGl0eUluZm8pOiBuZXZlciA9PiB7XG4gIGxvZ1NlcnZpY2VMb2NhdGVGYWlsdXJlKGVudGl0eUluZm8pO1xuICBsb2dFcnJvckRldGFpbHMoZXJyb3IpO1xuICB0aHJvdyBlcnJvcjtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlU2VydmljZSA9IDxUTW9kZWw+KGVudGl0eUluZm86IFJlYWRvbmx5PElFbnRpdHlJbmZvPiwgaW5qZWN0b3I6IEluamVjdG9yKTogSUF1dG9FbnRpdHlTZXJ2aWNlPFRNb2RlbD4gPT4ge1xuICByZXR1cm4gaW5qZWN0b3IuZ2V0KGVudGl0eUluZm8ubW9kZWxUeXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlU2VydmljZURlZXAgPSA8VE1vZGVsPihcbiAgZW50aXR5SW5mbzogUmVhZG9ubHk8SUVudGl0eUluZm8+LFxuICBpbmplY3RvcjogSW5qZWN0b3IsXG4gIHJlbWFpbmluZzogSW5qZWN0b3JbXVxuKTogSUF1dG9FbnRpdHlTZXJ2aWNlPFRNb2RlbD4gfCBuZXZlciA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlc29sdmVTZXJ2aWNlKGVudGl0eUluZm8sIGluamVjdG9yKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHJlbWFpbmluZy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IFtmaXJzdCwgLi4ucmVzdF0gPSByZW1haW5pbmc7XG4gICAgICByZXR1cm4gcmVzb2x2ZVNlcnZpY2VEZWVwKGVudGl0eUluZm8sIGZpcnN0LCByZXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgZmFpbFJlc29sdXRpb24oZXJyLCBlbnRpdHlJbmZvKTtcbiAgICB9XG4gIH1cbn07XG4iXX0=