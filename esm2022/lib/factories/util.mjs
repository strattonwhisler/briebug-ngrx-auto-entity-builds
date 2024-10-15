export const NAE_TYPE_ACTION_CACHE = '__nae_type_action_cache';
export const cacheOnType = (Type, actionName, creatorCallback) => ((Type[NAE_TYPE_ACTION_CACHE] = Type[NAE_TYPE_ACTION_CACHE] || Object.create(null)),
    (Type[NAE_TYPE_ACTION_CACHE][actionName] = Type[NAE_TYPE_ACTION_CACHE][actionName] || creatorCallback()),
    Type[NAE_TYPE_ACTION_CACHE][actionName]);
export function defineTypedFactoryFunction(type, creator) {
    return Object.defineProperty(creator, 'type', {
        value: type,
        writable: false
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHkvc3JjL2xpYi9mYWN0b3JpZXMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZQSxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyx5QkFBeUIsQ0FBQztBQUMvRCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FDekIsSUFBa0IsRUFDbEIsVUFBa0IsRUFDbEIsZUFBbUUsRUFDbkUsRUFBRSxDQUFDLENBQ0gsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xGLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUM7SUFDeEcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQ3hDLENBQUM7QUFFRixNQUFNLFVBQVUsMEJBQTBCLENBQ3hDLElBQU8sRUFDUCxPQUFnQjtJQUVoQixPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBcUMsRUFBRSxNQUFNLEVBQUU7UUFDMUUsS0FBSyxFQUFFLElBQUk7UUFDWCxRQUFRLEVBQUUsS0FBSztLQUNoQixDQUFpRCxDQUFDO0FBQ3JELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25DcmVhdG9yLCBDcmVhdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgRW50aXR5QWN0aW9uIH0gZnJvbSAnLi4vYWN0aW9ucy9lbnRpdHktYWN0aW9uJztcbmltcG9ydCB7IFROZXcgfSBmcm9tICcuLi9hY3Rpb25zL21vZGVsLWNvbnN0cnVjdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBDb3JyZWxhdGVkUHJvcHMge1xuICBjb3JyZWxhdGlvbklkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YW5kYXJkUHJvcHMgZXh0ZW5kcyBDb3JyZWxhdGVkUHJvcHMge1xuICBjcml0ZXJpYT86IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IE5BRV9UWVBFX0FDVElPTl9DQUNIRSA9ICdfX25hZV90eXBlX2FjdGlvbl9jYWNoZSc7XG5leHBvcnQgY29uc3QgY2FjaGVPblR5cGUgPSA8VE1vZGVsLCBUQWN0aW9uIGV4dGVuZHMgRW50aXR5QWN0aW9uPFRNb2RlbD4sIFQgZXh0ZW5kcyBzdHJpbmc+KFxuICBUeXBlOiBUTmV3PFRNb2RlbD4sXG4gIGFjdGlvbk5hbWU6IHN0cmluZyxcbiAgY3JlYXRvckNhbGxiYWNrOiAoKSA9PiBBY3Rpb25DcmVhdG9yPFQsIChwcm9wczogb2JqZWN0KSA9PiBUQWN0aW9uPlxuKSA9PiAoXG4gIChUeXBlW05BRV9UWVBFX0FDVElPTl9DQUNIRV0gPSBUeXBlW05BRV9UWVBFX0FDVElPTl9DQUNIRV0gfHwgT2JqZWN0LmNyZWF0ZShudWxsKSksXG4gIChUeXBlW05BRV9UWVBFX0FDVElPTl9DQUNIRV1bYWN0aW9uTmFtZV0gPSBUeXBlW05BRV9UWVBFX0FDVElPTl9DQUNIRV1bYWN0aW9uTmFtZV0gfHwgY3JlYXRvckNhbGxiYWNrKCkpLFxuICBUeXBlW05BRV9UWVBFX0FDVElPTl9DQUNIRV1bYWN0aW9uTmFtZV1cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVUeXBlZEZhY3RvcnlGdW5jdGlvbjxUTW9kZWwsIFRBY3Rpb24gZXh0ZW5kcyBFbnRpdHlBY3Rpb248VE1vZGVsPiwgVCBleHRlbmRzIHN0cmluZz4oXG4gIHR5cGU6IFQsXG4gIGNyZWF0b3I6IENyZWF0b3Jcbik6IEFjdGlvbkNyZWF0b3I8VCwgKHByb3BzOiBvYmplY3QpID0+IFRBY3Rpb24+IHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdG9yIGFzIChwcm9wczogb2JqZWN0KSA9PiBUQWN0aW9uLCAndHlwZScsIHtcbiAgICB2YWx1ZTogdHlwZSxcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkgYXMgQWN0aW9uQ3JlYXRvcjxULCAocHJvcHM6IG9iamVjdCkgPT4gVEFjdGlvbj47XG59XG4iXX0=