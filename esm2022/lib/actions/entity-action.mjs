import { uuid } from '../../util/uuid';
import { setInfo, setType } from './util';
/**
 * Structure for all of this library's actions
 */
export class EntityAction {
    constructor(type, actionType, correlationId = uuid()) {
        this.actionType = actionType;
        this.correlationId = correlationId;
        this.info = setInfo(type);
        this.type = setType(this.actionType, this.info);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ncngtYXV0by1lbnRpdHkvc3JjL2xpYi9hY3Rpb25zL2VudGl0eS1hY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSXZDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBVzFDOztHQUVHO0FBQ0gsTUFBTSxPQUFnQixZQUFZO0lBSWhDLFlBQXNCLElBQWtCLEVBQVMsVUFBNkIsRUFBUyxnQkFBd0IsSUFBSSxFQUFFO1FBQXBFLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQWlCO1FBQ25ILElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgdXVpZCB9IGZyb20gJy4uLy4uL3V0aWwvdXVpZCc7XG5pbXBvcnQgeyBFbnRpdHlBY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IElFbnRpdHlJbmZvIH0gZnJvbSAnLi9lbnRpdHktaW5mbyc7XG5pbXBvcnQgeyBUTmV3IH0gZnJvbSAnLi9tb2RlbC1jb25zdHJ1Y3Rvcic7XG5pbXBvcnQgeyBzZXRJbmZvLCBzZXRUeXBlIH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29ycmVsYXRlZEFjdGlvbiB7XG4gIGNvcnJlbGF0aW9uSWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRW50aXR5QWN0aW9uIGV4dGVuZHMgQWN0aW9uLCBJQ29ycmVsYXRlZEFjdGlvbiB7XG4gIGFjdGlvblR5cGU6IEVudGl0eUFjdGlvblR5cGVzO1xuICBpbmZvOiBJRW50aXR5SW5mbztcbn1cblxuLyoqXG4gKiBTdHJ1Y3R1cmUgZm9yIGFsbCBvZiB0aGlzIGxpYnJhcnkncyBhY3Rpb25zXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFbnRpdHlBY3Rpb248VE1vZGVsPiBpbXBsZW1lbnRzIElFbnRpdHlBY3Rpb24ge1xuICB0eXBlOiBzdHJpbmc7XG4gIGluZm86IElFbnRpdHlJbmZvO1xuXG4gIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih0eXBlOiBUTmV3PFRNb2RlbD4sIHB1YmxpYyBhY3Rpb25UeXBlOiBFbnRpdHlBY3Rpb25UeXBlcywgcHVibGljIGNvcnJlbGF0aW9uSWQ6IHN0cmluZyA9IHV1aWQoKSkge1xuICAgIHRoaXMuaW5mbyA9IHNldEluZm8odHlwZSk7XG4gICAgdGhpcy50eXBlID0gc2V0VHlwZSh0aGlzLmFjdGlvblR5cGUsIHRoaXMuaW5mbyk7XG4gIH1cbn1cbiJdfQ==