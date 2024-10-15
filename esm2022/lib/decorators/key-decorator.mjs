import { NAE_KEY_NAMES, NAE_KEYS } from './entity-tokens';
/**
 * Used to designate the key property for the entity
 *
 * @param target the entity's class
 * @param keyName the key's name
 */
export function Key(target, keyName) {
    target[NAE_KEY_NAMES] = target[NAE_KEY_NAMES] ? [...target[NAE_KEY_NAMES], keyName] : [keyName];
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !target[NAE_KEYS] && Object.defineProperty(target, NAE_KEYS, { get: () => target[NAE_KEY_NAMES] });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5LWRlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHkvc3JjL2xpYi9kZWNvcmF0b3JzL2tleS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQXdCO0lBQ2xELE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEcsb0VBQW9FO0lBQ3BFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JHLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOQUVfS0VZX05BTUVTLCBOQUVfS0VZUyB9IGZyb20gJy4vZW50aXR5LXRva2Vucyc7XG5cbi8qKlxuICogVXNlZCB0byBkZXNpZ25hdGUgdGhlIGtleSBwcm9wZXJ0eSBmb3IgdGhlIGVudGl0eVxuICpcbiAqIEBwYXJhbSB0YXJnZXQgdGhlIGVudGl0eSdzIGNsYXNzXG4gKiBAcGFyYW0ga2V5TmFtZSB0aGUga2V5J3MgbmFtZVxuICovXG5leHBvcnQgZnVuY3Rpb24gS2V5KHRhcmdldCwga2V5TmFtZTogc3RyaW5nIHwgc3ltYm9sKTogdm9pZCB7XG4gIHRhcmdldFtOQUVfS0VZX05BTUVTXSA9IHRhcmdldFtOQUVfS0VZX05BTUVTXSA/IFsuLi50YXJnZXRbTkFFX0tFWV9OQU1FU10sIGtleU5hbWVdIDogW2tleU5hbWVdO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9uc1xuICAhdGFyZ2V0W05BRV9LRVlTXSAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBOQUVfS0VZUywgeyBnZXQ6ICgpID0+IHRhcmdldFtOQUVfS0VZX05BTUVTXSB9KTtcbn1cbiJdfQ==