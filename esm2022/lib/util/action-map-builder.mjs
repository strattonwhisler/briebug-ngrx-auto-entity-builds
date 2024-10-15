import { createCreateAction, createCreateFailureAction, createCreateManyAction, createCreateManyFailureAction, createCreateManySuccessAction, createCreateSuccessAction } from '../factories/create-factories';
import { createDeleteByKeyAction, createDeleteByKeyFailureAction, createDeleteByKeySuccessAction, createDeleteManyByKeysAction, createDeleteManyByKeysFailureAction, createDeleteManyByKeysSuccessAction } from '../factories/delete-by-key-factories';
import { createDeleteAction, createDeleteFailureAction, createDeleteManyAction, createDeleteManyFailureAction, createDeleteManySuccessAction, createDeleteSuccessAction } from '../factories/delete-factories';
import { createDeselectAction, createDeselectAllAction, createDeselectedAction, createDeselectedManyAction, createDeselectManyAction, createDeselectManyByKeysAction } from '../factories/deselection-factories';
import { createChangeAction, createChangedAction, createEditAction, createEditByKeyAction, createEditedAction, createEditedByKeyAction, createEditEndedAction, createEditNewAction, createEndEditAction } from '../factories/edit-factories';
import { createClearAction } from '../factories/factories';
import { createLoadAllAction, createLoadAllFailureAction, createLoadAllIfNecessaryAction, createLoadAllSuccessAction } from '../factories/load-all-factories';
import { createLoadAction, createLoadFailureAction, createLoadIfNecessaryAction, createLoadSuccessAction } from '../factories/load-factories';
import { createLoadManyAction, createLoadManyFailureAction, createLoadManyIfNecessaryAction, createLoadManySuccessAction } from '../factories/load-many-factories';
import { createLoadPageAction, createLoadPageFailureAction, createLoadPageIfNecessaryAction, createLoadPageSuccessAction } from '../factories/load-page-factories';
import { createLoadRangeAction, createLoadRangeFailureAction, createLoadRangeIfNecessaryAction, createLoadRangeSuccessAction } from '../factories/load-range-factories';
import { createReplaceAction, createReplaceFailureAction, createReplaceManyAction, createReplaceManyFailureAction, createReplaceManySuccessAction, createReplaceSuccessAction } from '../factories/replace-factories';
import { createSelectAction, createSelectByKeyAction, createSelectedAction, createSelectedManyAction, createSelectedMoreAction, createSelectManyAction, createSelectManyByKeysAction, createSelectMoreAction, createSelectMoreByKeysAction } from '../factories/selection-factories';
import { createUpdateAction, createUpdateFailureAction, createUpdateManyAction, createUpdateManyFailureAction, createUpdateManySuccessAction, createUpdateSuccessAction } from '../factories/update-factories';
import { createUpsertAction, createUpsertFailureAction, createUpsertManyAction, createUpsertManyFailureAction, createUpsertManySuccessAction, createUpsertSuccessAction } from '../factories/upsert-factories';
export const buildActionMap = (Type) => {
    class ActionFactoryResolver {
        get load() {
            return createLoadAction(Type);
        }
        get loadIfNecessary() {
            return createLoadIfNecessaryAction(Type);
        }
        get loadSuccess() {
            return createLoadSuccessAction(Type);
        }
        get loadFailure() {
            return createLoadFailureAction(Type);
        }
        get loadAll() {
            return createLoadAllAction(Type);
        }
        get loadAllIfNecessary() {
            return createLoadAllIfNecessaryAction(Type);
        }
        get loadAllSuccess() {
            return createLoadAllSuccessAction(Type);
        }
        get loadAllFailure() {
            return createLoadAllFailureAction(Type);
        }
        get loadMany() {
            return createLoadManyAction(Type);
        }
        get loadManyIfNecessary() {
            return createLoadManyIfNecessaryAction(Type);
        }
        get loadManySuccess() {
            return createLoadManySuccessAction(Type);
        }
        get loadManyFailure() {
            return createLoadManyFailureAction(Type);
        }
        get loadPage() {
            return createLoadPageAction(Type);
        }
        get loadPageIfNecessary() {
            return createLoadPageIfNecessaryAction(Type);
        }
        get loadPageSuccess() {
            return createLoadPageSuccessAction(Type);
        }
        get loadPageFailure() {
            return createLoadPageFailureAction(Type);
        }
        get loadRange() {
            return createLoadRangeAction(Type);
        }
        get loadRangeIfNecessary() {
            return createLoadRangeIfNecessaryAction(Type);
        }
        get loadRangeSuccess() {
            return createLoadRangeSuccessAction(Type);
        }
        get loadRangeFailure() {
            return createLoadRangeFailureAction(Type);
        }
        get create() {
            return createCreateAction(Type);
        }
        get createSuccess() {
            return createCreateSuccessAction(Type);
        }
        get createFailure() {
            return createCreateFailureAction(Type);
        }
        get createMany() {
            return createCreateManyAction(Type);
        }
        get createManySuccess() {
            return createCreateManySuccessAction(Type);
        }
        get createManyFailure() {
            return createCreateManyFailureAction(Type);
        }
        get update() {
            return createUpdateAction(Type);
        }
        get updateSuccess() {
            return createUpdateSuccessAction(Type);
        }
        get updateFailure() {
            return createUpdateFailureAction(Type);
        }
        get updateMany() {
            return createUpdateManyAction(Type);
        }
        get updateManySuccess() {
            return createUpdateManySuccessAction(Type);
        }
        get updateManyFailure() {
            return createUpdateManyFailureAction(Type);
        }
        get upsert() {
            return createUpsertAction(Type);
        }
        get upsertSuccess() {
            return createUpsertSuccessAction(Type);
        }
        get upsertFailure() {
            return createUpsertFailureAction(Type);
        }
        get upsertMany() {
            return createUpsertManyAction(Type);
        }
        get upsertManySuccess() {
            return createUpsertManySuccessAction(Type);
        }
        get upsertManyFailure() {
            return createUpsertManyFailureAction(Type);
        }
        get replace() {
            return createReplaceAction(Type);
        }
        get replaceSuccess() {
            return createReplaceSuccessAction(Type);
        }
        get replaceFailure() {
            return createReplaceFailureAction(Type);
        }
        get replaceMany() {
            return createReplaceManyAction(Type);
        }
        get replaceManySuccess() {
            return createReplaceManySuccessAction(Type);
        }
        get replaceManyFailure() {
            return createReplaceManyFailureAction(Type);
        }
        get clear() {
            return createClearAction(Type);
        }
        get delete() {
            return createDeleteAction(Type);
        }
        get deleteSuccess() {
            return createDeleteSuccessAction(Type);
        }
        get deleteFailure() {
            return createDeleteFailureAction(Type);
        }
        get deleteMany() {
            return createDeleteManyAction(Type);
        }
        get deleteManySuccess() {
            return createDeleteManySuccessAction(Type);
        }
        get deleteManyFailure() {
            return createDeleteManyFailureAction(Type);
        }
        get deleteByKey() {
            return createDeleteByKeyAction(Type);
        }
        get deleteByKeySuccess() {
            return createDeleteByKeySuccessAction(Type);
        }
        get deleteByKeyFailure() {
            return createDeleteByKeyFailureAction(Type);
        }
        get deleteManyByKeys() {
            return createDeleteManyByKeysAction(Type);
        }
        get deleteManyByKeysSuccess() {
            return createDeleteManyByKeysSuccessAction(Type);
        }
        get deleteManyByKeysFailure() {
            return createDeleteManyByKeysFailureAction(Type);
        }
        get deselect() {
            return createDeselectAction(Type);
        }
        get deselectMany() {
            return createDeselectManyAction(Type);
        }
        get deselectManyByKeys() {
            return createDeselectManyByKeysAction(Type);
        }
        get deselectAll() {
            return createDeselectAllAction(Type);
        }
        get deselected() {
            return createDeselectedAction(Type);
        }
        get deselectedMany() {
            return createDeselectedManyAction(Type);
        }
        get select() {
            return createSelectAction(Type);
        }
        get selectByKey() {
            return createSelectByKeyAction(Type);
        }
        get selectMany() {
            return createSelectManyAction(Type);
        }
        get selectMore() {
            return createSelectMoreAction(Type);
        }
        get selectManyByKeys() {
            return createSelectManyByKeysAction(Type);
        }
        get selectMoreByKeys() {
            return createSelectMoreByKeysAction(Type);
        }
        get selected() {
            return createSelectedAction(Type);
        }
        get selectedMany() {
            return createSelectedManyAction(Type);
        }
        get selectedMore() {
            return createSelectedMoreAction(Type);
        }
        get editNew() {
            return createEditNewAction(Type);
        }
        get edit() {
            return createEditAction(Type);
        }
        get editByKey() {
            return createEditByKeyAction(Type);
        }
        get edited() {
            return createEditedAction(Type);
        }
        get editedByKey() {
            return createEditedByKeyAction(Type);
        }
        get change() {
            return createChangeAction(Type);
        }
        get changed() {
            return createChangedAction(Type);
        }
        get endEdit() {
            return createEndEditAction(Type);
        }
        get editEnded() {
            return createEditEndedAction(Type);
        }
    }
    const actionMap = new ActionFactoryResolver();
    return actionMap;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLW1hcC1idWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL3V0aWwvYWN0aW9uLW1hcC1idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN0Qiw2QkFBNkIsRUFDN0IsNkJBQTZCLEVBQzdCLHlCQUF5QixFQUMxQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsOEJBQThCLEVBQzlCLDhCQUE4QixFQUM5Qiw0QkFBNEIsRUFDNUIsbUNBQW1DLEVBQ25DLG1DQUFtQyxFQUNwQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzlDLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIseUJBQXlCLEVBQ3pCLHNCQUFzQixFQUN0Qiw2QkFBNkIsRUFDN0IsNkJBQTZCLEVBQzdCLHlCQUF5QixFQUMxQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QiwwQkFBMEIsRUFDMUIsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUMvQixNQUFNLG9DQUFvQyxDQUFDO0FBQzVDLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsa0JBQWtCLEVBQ2xCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNwQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLDhCQUE4QixFQUM5QiwwQkFBMEIsRUFDM0IsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6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Q2QsT0FBTyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsSUFBSSxZQUFZO1lBQ2QsT0FBTyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRUQsSUFBSSxPQUFPO1lBQ1QsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsSUFBSSxJQUFJO1lBQ04sT0FBTyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxDQUFDO1FBRUQsSUFBSSxTQUFTO1lBQ1gsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRUQsSUFBSSxNQUFNO1lBQ1IsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsSUFBSSxXQUFXO1lBQ2IsT0FBTyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxDQUFDO1FBRUQsSUFBSSxNQUFNO1lBQ1IsT0FBTyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBRUQsSUFBSSxPQUFPO1lBQ1QsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsSUFBSSxPQUFPO1lBQ1QsT0FBTyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsSUFBSSxTQUFTO1lBQ1gsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQ0Y7SUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFxQixFQUFFLENBQUM7SUFDOUMsT0FBTyxTQUFTLENBQUM7QUFDbkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVE5ldyB9IGZyb20gJy4uL2FjdGlvbnMvbW9kZWwtY29uc3RydWN0b3InO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ3JlYXRlQWN0aW9uLFxuICBjcmVhdGVDcmVhdGVGYWlsdXJlQWN0aW9uLFxuICBjcmVhdGVDcmVhdGVNYW55QWN0aW9uLFxuICBjcmVhdGVDcmVhdGVNYW55RmFpbHVyZUFjdGlvbixcbiAgY3JlYXRlQ3JlYXRlTWFueVN1Y2Nlc3NBY3Rpb24sXG4gIGNyZWF0ZUNyZWF0ZVN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vZmFjdG9yaWVzL2NyZWF0ZS1mYWN0b3JpZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlRGVsZXRlQnlLZXlBY3Rpb24sXG4gIGNyZWF0ZURlbGV0ZUJ5S2V5RmFpbHVyZUFjdGlvbixcbiAgY3JlYXRlRGVsZXRlQnlLZXlTdWNjZXNzQWN0aW9uLFxuICBjcmVhdGVEZWxldGVNYW55QnlLZXlzQWN0aW9uLFxuICBjcmVhdGVEZWxldGVNYW55QnlLZXlzRmFpbHVyZUFjdGlvbixcbiAgY3JlYXRlRGVsZXRlTWFueUJ5S2V5c1N1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vZmFjdG9yaWVzL2RlbGV0ZS1ieS1rZXktZmFjdG9yaWVzJztcbmltcG9ydCB7XG4gIGNyZWF0ZURlbGV0ZUFjdGlvbixcbiAgY3JlYXRlRGVsZXRlRmFpbHVyZUFjdGlvbixcbiAgY3JlYXRlRGVsZXRlTWFueUFjdGlvbixcbiAgY3JlYXRlRGVsZXRlTWFueUZhaWx1cmVBY3Rpb24sXG4gIGNyZWF0ZURlbGV0ZU1hbnlTdWNjZXNzQWN0aW9uLFxuICBjcmVhdGVEZWxldGVTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4uL2ZhY3Rvcmllcy9kZWxldGUtZmFjdG9yaWVzJztcbmltcG9ydCB7XG4gIGNyZWF0ZURlc2VsZWN0QWN0aW9uLFxuICBjcmVhdGVEZXNlbGVjdEFsbEFjdGlvbixcbiAgY3JlYXRlRGVzZWxlY3RlZEFjdGlvbixcbiAgY3JlYXRlRGVzZWxlY3RlZE1hbnlBY3Rpb24sXG4gIGNyZWF0ZURlc2VsZWN0TWFueUFjdGlvbixcbiAgY3JlYXRlRGVzZWxlY3RNYW55QnlLZXlzQWN0aW9uXG59IGZyb20gJy4uL2ZhY3Rvcmllcy9kZXNlbGVjdGlvbi1mYWN0b3JpZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlQ2hhbmdlQWN0aW9uLFxuICBjcmVhdGVDaGFuZ2VkQWN0aW9uLFxuICBjcmVhdGVFZGl0QWN0aW9uLFxuICBjcmVhdGVFZGl0QnlLZXlBY3Rpb24sXG4gIGNyZWF0ZUVkaXRlZEFjdGlvbixcbiAgY3JlYXRlRWRpdGVkQnlLZXlBY3Rpb24sXG4gIGNyZWF0ZUVkaXRFbmRlZEFjdGlvbixcbiAgY3JlYXRlRWRpdE5ld0FjdGlvbixcbiAgY3JlYXRlRW5kRWRpdEFjdGlvblxufSBmcm9tICcuLi9mYWN0b3JpZXMvZWRpdC1mYWN0b3JpZXMnO1xuaW1wb3J0IHsgY3JlYXRlQ2xlYXJBY3Rpb24gfSBmcm9tICcuLi9mYWN0b3JpZXMvZmFjdG9yaWVzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUxvYWRBbGxBY3Rpb24sXG4gIGNyZWF0ZUxvYWRBbGxGYWlsdXJlQWN0aW9uLFxuICBjcmVhdGVMb2FkQWxsSWZOZWNlc3NhcnlBY3Rpb24sXG4gIGNyZWF0ZUxvYWRBbGxTdWNjZXNzQWN0aW9uXG59IGZyb20gJy4uL2ZhY3Rvcmllcy9sb2FkLWFsbC1mYWN0b3JpZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTG9hZEFjdGlvbixcbiAgY3JlYXRlTG9hZEZhaWx1cmVBY3Rpb24sXG4gIGNyZWF0ZUxvYWRJZk5lY2Vzc2FyeUFjdGlvbixcbiAgY3JlYXRlTG9hZFN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vZmFjdG9yaWVzL2xvYWQtZmFjdG9yaWVzJztcbmltcG9ydCB7XG4gIGNyZWF0ZUxvYWRNYW55QWN0aW9uLFxuICBjcmVhdGVMb2FkTWFueUZhaWx1cmVBY3Rpb24sXG4gIGNyZWF0ZUxvYWRNYW55SWZOZWNlc3NhcnlBY3Rpb24sXG4gIGNyZWF0ZUxvYWRNYW55U3VjY2Vzc0FjdGlvblxufSBmcm9tICcuLi9mYWN0b3JpZXMvbG9hZC1tYW55LWZhY3Rvcmllcyc7XG5pbXBvcnQge1xuICBjcmVhdGVMb2FkUGFnZUFjdGlvbixcbiAgY3JlYXRlTG9hZFBhZ2VGYWlsdXJlQWN0aW9uLFxuICBjcmVhdGVMb2FkUGFnZUlmTmVjZXNzYXJ5QWN0aW9uLFxuICBjcmVhdGVMb2FkUGFnZVN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vZmFjdG9yaWVzL2xvYWQtcGFnZS1mYWN0b3JpZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTG9hZFJhbmdlQWN0aW9uLFxuICBjcmVhdGVMb2FkUmFuZ2VGYWlsdXJlQWN0aW9uLFxuICBjcmVhdGVMb2FkUmFuZ2VJZk5lY2Vzc2FyeUFjdGlvbixcbiAgY3JlYXRlTG9hZFJhbmdlU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuLi9mYWN0b3JpZXMvbG9hZC1yYW5nZS1mYWN0b3JpZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlUmVwbGFjZUFjdGlvbixcbiAgY3JlYXRlUmVwbGFjZUZhaWx1cmVBY3Rpb24sXG4gIGNyZWF0ZVJlcGxhY2VNYW55QWN0aW9uLFxuICBjcmVhdGVSZXBsYWNlTWFueUZhaWx1cmVBY3Rpb24sXG4gIGNyZWF0ZVJlcGxhY2VNYW55U3VjY2Vzc0FjdGlvbixcbiAgY3JlYXRlUmVwbGFjZVN1Y2Nlc3NBY3Rpb25cbn0gZnJvbSAnLi4vZmFjdG9yaWVzL3JlcGxhY2UtZmFjdG9yaWVzJztcbmltcG9ydCB7XG4gIGNyZWF0ZVNlbGVjdEFjdGlvbixcbiAgY3JlYXRlU2VsZWN0QnlLZXlBY3Rpb24sXG4gIGNyZWF0ZVNlbGVjdGVkQWN0aW9uLFxuICBjcmVhdGVTZWxlY3RlZE1hbnlBY3Rpb24sXG4gIGNyZWF0ZVNlbGVjdGVkTW9yZUFjdGlvbixcbiAgY3JlYXRlU2VsZWN0TWFueUFjdGlvbixcbiAgY3JlYXRlU2VsZWN0TWFueUJ5S2V5c0FjdGlvbixcbiAgY3JlYXRlU2VsZWN0TW9yZUFjdGlvbixcbiAgY3JlYXRlU2VsZWN0TW9yZUJ5S2V5c0FjdGlvblxufSBmcm9tICcuLi9mYWN0b3JpZXMvc2VsZWN0aW9uLWZhY3Rvcmllcyc7XG5pbXBvcnQge1xuICBjcmVhdGVVcGRhdGVBY3Rpb24sXG4gIGNyZWF0ZVVwZGF0ZUZhaWx1cmVBY3Rpb24sXG4gIGNyZWF0ZVVwZGF0ZU1hbnlBY3Rpb24sXG4gIGNyZWF0ZVVwZGF0ZU1hbnlGYWlsdXJlQWN0aW9uLFxuICBjcmVhdGVVcGRhdGVNYW55U3VjY2Vzc0FjdGlvbixcbiAgY3JlYXRlVXBkYXRlU3VjY2Vzc0FjdGlvblxufSBmcm9tICcuLi9mYWN0b3JpZXMvdXBkYXRlLWZhY3Rvcmllcyc7XG5pbXBvcnQge1xuICBjcmVhdGVVcHNlcnRBY3Rpb24sXG4gIGNyZWF0ZVVwc2VydEZhaWx1cmVBY3Rpb24sXG4gIGNyZWF0ZVVwc2VydE1hbnlBY3Rpb24sXG4gIGNyZWF0ZVVwc2VydE1hbnlGYWlsdXJlQWN0aW9uLFxuICBjcmVhdGVVcHNlcnRNYW55U3VjY2Vzc0FjdGlvbixcbiAgY3JlYXRlVXBzZXJ0U3VjY2Vzc0FjdGlvblxufSBmcm9tICcuLi9mYWN0b3JpZXMvdXBzZXJ0LWZhY3Rvcmllcyc7XG5pbXBvcnQgeyBJQWN0aW9uTWFwIH0gZnJvbSAnLi9hY3Rpb24tbWFwJztcblxuZXhwb3J0IGNvbnN0IGJ1aWxkQWN0aW9uTWFwID0gPFRNb2RlbD4oVHlwZTogVE5ldzxUTW9kZWw+KTogSUFjdGlvbk1hcDxUTW9kZWw+ID0+IHtcbiAgY2xhc3MgQWN0aW9uRmFjdG9yeVJlc29sdmVyIGltcGxlbWVudHMgSUFjdGlvbk1hcDxUTW9kZWw+IHtcbiAgICBnZXQgbG9hZCgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkSWZOZWNlc3NhcnkoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZElmTmVjZXNzYXJ5QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkU3VjY2VzcygpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkU3VjY2Vzc0FjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbG9hZEZhaWx1cmUoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZEZhaWx1cmVBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRBbGwoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZEFsbEFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbG9hZEFsbElmTmVjZXNzYXJ5KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUxvYWRBbGxJZk5lY2Vzc2FyeUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbG9hZEFsbFN1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZEFsbFN1Y2Nlc3NBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGxvYWRBbGxGYWlsdXJlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUxvYWRBbGxGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkTWFueSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkTWFueUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbG9hZE1hbnlJZk5lY2Vzc2FyeSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkTWFueUlmTmVjZXNzYXJ5QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkTWFueVN1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZE1hbnlTdWNjZXNzQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkTWFueUZhaWx1cmUoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZE1hbnlGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkUGFnZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkUGFnZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbG9hZFBhZ2VJZk5lY2Vzc2FyeSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkUGFnZUlmTmVjZXNzYXJ5QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkUGFnZVN1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZFBhZ2VTdWNjZXNzQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkUGFnZUZhaWx1cmUoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZFBhZ2VGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkUmFuZ2UoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlTG9hZFJhbmdlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkUmFuZ2VJZk5lY2Vzc2FyeSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkUmFuZ2VJZk5lY2Vzc2FyeUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgbG9hZFJhbmdlU3VjY2VzcygpIHtcbiAgICAgIHJldHVybiBjcmVhdGVMb2FkUmFuZ2VTdWNjZXNzQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBsb2FkUmFuZ2VGYWlsdXJlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUxvYWRSYW5nZUZhaWx1cmVBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNyZWF0ZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVDcmVhdGVBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNyZWF0ZVN1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQ3JlYXRlU3VjY2Vzc0FjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgY3JlYXRlRmFpbHVyZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVDcmVhdGVGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBjcmVhdGVNYW55KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUNyZWF0ZU1hbnlBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNyZWF0ZU1hbnlTdWNjZXNzKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUNyZWF0ZU1hbnlTdWNjZXNzQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBjcmVhdGVNYW55RmFpbHVyZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVDcmVhdGVNYW55RmFpbHVyZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgdXBkYXRlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVVwZGF0ZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgdXBkYXRlU3VjY2VzcygpIHtcbiAgICAgIHJldHVybiBjcmVhdGVVcGRhdGVTdWNjZXNzQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCB1cGRhdGVGYWlsdXJlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVVwZGF0ZUZhaWx1cmVBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHVwZGF0ZU1hbnkoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVXBkYXRlTWFueUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgdXBkYXRlTWFueVN1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVXBkYXRlTWFueVN1Y2Nlc3NBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHVwZGF0ZU1hbnlGYWlsdXJlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVVwZGF0ZU1hbnlGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCB1cHNlcnQoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVXBzZXJ0QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCB1cHNlcnRTdWNjZXNzKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVVwc2VydFN1Y2Nlc3NBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHVwc2VydEZhaWx1cmUoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVXBzZXJ0RmFpbHVyZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgdXBzZXJ0TWFueSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVVcHNlcnRNYW55QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCB1cHNlcnRNYW55U3VjY2VzcygpIHtcbiAgICAgIHJldHVybiBjcmVhdGVVcHNlcnRNYW55U3VjY2Vzc0FjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgdXBzZXJ0TWFueUZhaWx1cmUoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlVXBzZXJ0TWFueUZhaWx1cmVBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHJlcGxhY2UoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlUmVwbGFjZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgcmVwbGFjZVN1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlUmVwbGFjZVN1Y2Nlc3NBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHJlcGxhY2VGYWlsdXJlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVJlcGxhY2VGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCByZXBsYWNlTWFueSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVSZXBsYWNlTWFueUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgcmVwbGFjZU1hbnlTdWNjZXNzKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVJlcGxhY2VNYW55U3VjY2Vzc0FjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgcmVwbGFjZU1hbnlGYWlsdXJlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVJlcGxhY2VNYW55RmFpbHVyZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgY2xlYXIoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQ2xlYXJBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlbGV0ZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWxldGVBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlbGV0ZVN1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGVsZXRlU3VjY2Vzc0FjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZGVsZXRlRmFpbHVyZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWxldGVGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBkZWxldGVNYW55KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURlbGV0ZU1hbnlBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlbGV0ZU1hbnlTdWNjZXNzKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURlbGV0ZU1hbnlTdWNjZXNzQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBkZWxldGVNYW55RmFpbHVyZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWxldGVNYW55RmFpbHVyZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZGVsZXRlQnlLZXkoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGVsZXRlQnlLZXlBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlbGV0ZUJ5S2V5U3VjY2VzcygpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWxldGVCeUtleVN1Y2Nlc3NBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlbGV0ZUJ5S2V5RmFpbHVyZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZWxldGVCeUtleUZhaWx1cmVBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlbGV0ZU1hbnlCeUtleXMoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGVsZXRlTWFueUJ5S2V5c0FjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZGVsZXRlTWFueUJ5S2V5c1N1Y2Nlc3MoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGVsZXRlTWFueUJ5S2V5c1N1Y2Nlc3NBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlbGV0ZU1hbnlCeUtleXNGYWlsdXJlKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURlbGV0ZU1hbnlCeUtleXNGYWlsdXJlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBkZXNlbGVjdCgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVEZXNlbGVjdEFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZGVzZWxlY3RNYW55KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURlc2VsZWN0TWFueUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZGVzZWxlY3RNYW55QnlLZXlzKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZURlc2VsZWN0TWFueUJ5S2V5c0FjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZGVzZWxlY3RBbGwoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGVzZWxlY3RBbGxBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2VsZWN0ZWQoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGVzZWxlY3RlZEFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZGVzZWxlY3RlZE1hbnkoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRGVzZWxlY3RlZE1hbnlBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdCgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTZWxlY3RBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdEJ5S2V5KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNlbGVjdEJ5S2V5QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RNYW55KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNlbGVjdE1hbnlBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdE1vcmUoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU2VsZWN0TW9yZUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0TWFueUJ5S2V5cygpIHtcbiAgICAgIHJldHVybiBjcmVhdGVTZWxlY3RNYW55QnlLZXlzQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RNb3JlQnlLZXlzKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNlbGVjdE1vcmVCeUtleXNBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVNlbGVjdGVkQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZE1hbnkoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU2VsZWN0ZWRNYW55QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZE1vcmUoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlU2VsZWN0ZWRNb3JlQWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBlZGl0TmV3KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVkaXROZXdBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGVkaXQoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWRpdEFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZWRpdEJ5S2V5KCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVkaXRCeUtleUFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZWRpdGVkKCkge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVkaXRlZEFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZWRpdGVkQnlLZXkoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWRpdGVkQnlLZXlBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNoYW5nZSgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVDaGFuZ2VBY3Rpb24oVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0IGNoYW5nZWQoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlQ2hhbmdlZEFjdGlvbihUeXBlKTtcbiAgICB9XG5cbiAgICBnZXQgZW5kRWRpdCgpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbmRFZGl0QWN0aW9uKFR5cGUpO1xuICAgIH1cblxuICAgIGdldCBlZGl0RW5kZWQoKSB7XG4gICAgICByZXR1cm4gY3JlYXRlRWRpdEVuZGVkQWN0aW9uKFR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFjdGlvbk1hcCA9IG5ldyBBY3Rpb25GYWN0b3J5UmVzb2x2ZXIoKTtcbiAgcmV0dXJuIGFjdGlvbk1hcDtcbn07XG4iXX0=