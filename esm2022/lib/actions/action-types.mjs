export var EntityActionTypes;
(function (EntityActionTypes) {
    EntityActionTypes["Load"] = "[Entity] (Generic) Load";
    EntityActionTypes["LoadIfNecessary"] = "[Entity] (Generic) Load (If Necessary)";
    EntityActionTypes["LoadSuccess"] = "[Entity] (Generic) Load: Success";
    EntityActionTypes["LoadFailure"] = "[Entity] (Generic) Load: Failure";
    EntityActionTypes["LoadMany"] = "[Entity] (Generic) Load Many";
    EntityActionTypes["LoadManyIfNecessary"] = "[Entity] (Generic) Load Many (If Necessary)";
    EntityActionTypes["LoadManySuccess"] = "[Entity] (Generic) Load Many: Success";
    EntityActionTypes["LoadManyFailure"] = "[Entity] (Generic) Load Many: Failure";
    EntityActionTypes["LoadAll"] = "[Entity] (Generic) Load All";
    EntityActionTypes["LoadAllIfNecessary"] = "[Entity] (Generic) Load All (If Necessary)";
    EntityActionTypes["LoadAllSuccess"] = "[Entity] (Generic) Load All: Success";
    EntityActionTypes["LoadAllFailure"] = "[Entity] (Generic) Load All: Failure";
    EntityActionTypes["LoadPage"] = "[Entity] (Generic) Load Page";
    EntityActionTypes["LoadPageIfNecessary"] = "[Entity] (Generic) Load Page (If Necessary)";
    EntityActionTypes["LoadPageSuccess"] = "[Entity] (Generic) Load Page: Success";
    EntityActionTypes["LoadPageFailure"] = "[Entity] (Generic) Load Page: Failure";
    EntityActionTypes["LoadRange"] = "[Entity] (Generic) Load Range";
    EntityActionTypes["LoadRangeIfNecessary"] = "[Entity] (Generic) Load Range (If Necessary)";
    EntityActionTypes["LoadRangeSuccess"] = "[Entity] (Generic) Load Range: Success";
    EntityActionTypes["LoadRangeFailure"] = "[Entity] (Generic) Load Range: Failure";
    EntityActionTypes["Create"] = "[Entity] (Generic) Create";
    EntityActionTypes["CreateSuccess"] = "[Entity] (Generic) Create: Success";
    EntityActionTypes["CreateFailure"] = "[Entity] (Generic) Create: Failure";
    EntityActionTypes["CreateMany"] = "[Entity] (Generic) Create Many";
    EntityActionTypes["CreateManySuccess"] = "[Entity] (Generic) Create Many: Success";
    EntityActionTypes["CreateManyFailure"] = "[Entity] (Generic) Create Many: Failure";
    EntityActionTypes["Update"] = "[Entity] (Generic) Update";
    EntityActionTypes["UpdateSuccess"] = "[Entity] (Generic) Update: Success";
    EntityActionTypes["UpdateFailure"] = "[Entity] (Generic) Update: Failure";
    EntityActionTypes["UpdateMany"] = "[Entity] (Generic) Update Many";
    EntityActionTypes["UpdateManySuccess"] = "[Entity] (Generic) Update Many: Success";
    EntityActionTypes["UpdateManyFailure"] = "[Entity] (Generic) Update Many: Failure";
    EntityActionTypes["Upsert"] = "[Entity] (Generic) Upsert";
    EntityActionTypes["UpsertSuccess"] = "[Entity] (Generic) Upsert: Success";
    EntityActionTypes["UpsertFailure"] = "[Entity] (Generic) Upsert: Failure";
    EntityActionTypes["UpsertMany"] = "[Entity] (Generic) Upsert Many";
    EntityActionTypes["UpsertManySuccess"] = "[Entity] (Generic) Upsert Many: Success";
    EntityActionTypes["UpsertManyFailure"] = "[Entity] (Generic) Upsert Many: Failure";
    EntityActionTypes["Replace"] = "[Entity] (Generic) Replace";
    EntityActionTypes["ReplaceSuccess"] = "[Entity] (Generic) Replace: Success";
    EntityActionTypes["ReplaceFailure"] = "[Entity] (Generic) Replace: Failure";
    EntityActionTypes["ReplaceMany"] = "[Entity] (Generic) Replace Many";
    EntityActionTypes["ReplaceManySuccess"] = "[Entity] (Generic) Replace Many: Success";
    EntityActionTypes["ReplaceManyFailure"] = "[Entity] (Generic) Replace Many: Failure";
    EntityActionTypes["Delete"] = "[Entity] (Generic) Delete";
    EntityActionTypes["DeleteSuccess"] = "[Entity] (Generic) Delete: Success";
    EntityActionTypes["DeleteFailure"] = "[Entity] (Generic) Delete: Failure";
    EntityActionTypes["DeleteMany"] = "[Entity] (Generic) Delete Many";
    EntityActionTypes["DeleteManySuccess"] = "[Entity] (Generic) Delete Many: Success";
    EntityActionTypes["DeleteManyFailure"] = "[Entity] (Generic) Delete Many: Failure";
    EntityActionTypes["DeleteByKey"] = "[Entity] (Generic) Delete by key";
    EntityActionTypes["DeleteByKeySuccess"] = "[Entity] (Generic) Delete by key: Success";
    EntityActionTypes["DeleteByKeyFailure"] = "[Entity] (Generic) Delete by key: Failure";
    EntityActionTypes["DeleteManyByKeys"] = "[Entity] (Generic) Delete many by keys";
    EntityActionTypes["DeleteManyByKeysSuccess"] = "[Entity] (Generic) Delete many by keys: Success";
    EntityActionTypes["DeleteManyByKeysFailure"] = "[Entity] (Generic) Delete many by keys: Failure";
    EntityActionTypes["Clear"] = "[Entity] (Generic) Clear";
    EntityActionTypes["Select"] = "[Entity] (Generic) Select";
    EntityActionTypes["SelectByKey"] = "[Entity] (Generic) Select by Key";
    EntityActionTypes["Selected"] = "[Entity] (Generic) Selection";
    EntityActionTypes["SelectMany"] = "[Entity] (Generic) Select Many";
    EntityActionTypes["SelectMore"] = "[Entity] (Generic) Select More";
    EntityActionTypes["SelectManyByKeys"] = "[Entity] (Generic) Select Many by Keys";
    EntityActionTypes["SelectMoreByKeys"] = "[Entity] (Generic) Select More by Keys";
    EntityActionTypes["SelectedMany"] = "[Entity] (Generic) Selection of Many";
    EntityActionTypes["SelectedMore"] = "[Entity] (Generic) Selection of More";
    EntityActionTypes["Deselect"] = "[Entity] (Generic) Deselect";
    EntityActionTypes["Deselected"] = "[Entity] (Generic) Deselection";
    EntityActionTypes["DeselectMany"] = "[Entity] (Generic) Deselect of Many";
    EntityActionTypes["DeselectManyByKeys"] = "[Entity] (Generic) Deselect of Many by Keys";
    EntityActionTypes["DeselectAll"] = "[Entity] (Generic) Deselect of All";
    EntityActionTypes["DeselectedMany"] = "[Entity] (Generic) Deselection of Many";
    EntityActionTypes["EditNew"] = "[Entity] (Generic) Edit New";
    EntityActionTypes["Edit"] = "[Entity] (Generic) Edit";
    EntityActionTypes["EditByKey"] = "[Entity] (Generic) Edit by Key";
    EntityActionTypes["Edited"] = "[Entity] (Generic) Edited";
    EntityActionTypes["EditedByKey"] = "[Entity] (Generic) Edited by Key";
    EntityActionTypes["Change"] = "[Entity] (Generic) Change";
    EntityActionTypes["Changed"] = "[Entity] (Generic) Changed";
    EntityActionTypes["EndEdit"] = "[Entity] (Generic) Edit: End";
    EntityActionTypes["EditEnded"] = "[Entity] (Generic) Edit: Ended";
})(EntityActionTypes || (EntityActionTypes = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLXR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmdyeC1hdXRvLWVudGl0eS9zcmMvbGliL2FjdGlvbnMvYWN0aW9uLXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBTixJQUFZLGlCQXdHWDtBQXhHRCxXQUFZLGlCQUFpQjtJQUMzQixxREFBZ0MsQ0FBQTtJQUNoQywrRUFBMEQsQ0FBQTtJQUMxRCxxRUFBZ0QsQ0FBQTtJQUNoRCxxRUFBZ0QsQ0FBQTtJQUVoRCw4REFBeUMsQ0FBQTtJQUN6Qyx3RkFBbUUsQ0FBQTtJQUNuRSw4RUFBeUQsQ0FBQTtJQUN6RCw4RUFBeUQsQ0FBQTtJQUV6RCw0REFBdUMsQ0FBQTtJQUN2QyxzRkFBaUUsQ0FBQTtJQUNqRSw0RUFBdUQsQ0FBQTtJQUN2RCw0RUFBdUQsQ0FBQTtJQUV2RCw4REFBeUMsQ0FBQTtJQUN6Qyx3RkFBbUUsQ0FBQTtJQUNuRSw4RUFBeUQsQ0FBQTtJQUN6RCw4RUFBeUQsQ0FBQTtJQUV6RCxnRUFBMkMsQ0FBQTtJQUMzQywwRkFBcUUsQ0FBQTtJQUNyRSxnRkFBMkQsQ0FBQTtJQUMzRCxnRkFBMkQsQ0FBQTtJQUUzRCx5REFBb0MsQ0FBQTtJQUNwQyx5RUFBb0QsQ0FBQTtJQUNwRCx5RUFBb0QsQ0FBQTtJQUVwRCxrRUFBNkMsQ0FBQTtJQUM3QyxrRkFBNkQsQ0FBQTtJQUM3RCxrRkFBNkQsQ0FBQTtJQUU3RCx5REFBb0MsQ0FBQTtJQUNwQyx5RUFBb0QsQ0FBQTtJQUNwRCx5RUFBb0QsQ0FBQTtJQUVwRCxrRUFBNkMsQ0FBQTtJQUM3QyxrRkFBNkQsQ0FBQTtJQUM3RCxrRkFBNkQsQ0FBQTtJQUU3RCx5REFBb0MsQ0FBQTtJQUNwQyx5RUFBb0QsQ0FBQTtJQUNwRCx5RUFBb0QsQ0FBQTtJQUVwRCxrRUFBNkMsQ0FBQTtJQUM3QyxrRkFBNkQsQ0FBQTtJQUM3RCxrRkFBNkQsQ0FBQTtJQUU3RCwyREFBc0MsQ0FBQTtJQUN0QywyRUFBc0QsQ0FBQTtJQUN0RCwyRUFBc0QsQ0FBQTtJQUV0RCxvRUFBK0MsQ0FBQTtJQUMvQyxvRkFBK0QsQ0FBQTtJQUMvRCxvRkFBK0QsQ0FBQTtJQUUvRCx5REFBb0MsQ0FBQTtJQUNwQyx5RUFBb0QsQ0FBQTtJQUNwRCx5RUFBb0QsQ0FBQTtJQUVwRCxrRUFBNkMsQ0FBQTtJQUM3QyxrRkFBNkQsQ0FBQTtJQUM3RCxrRkFBNkQsQ0FBQTtJQUU3RCxxRUFBZ0QsQ0FBQTtJQUNoRCxxRkFBZ0UsQ0FBQTtJQUNoRSxxRkFBZ0UsQ0FBQTtJQUVoRSxnRkFBMkQsQ0FBQTtJQUMzRCxnR0FBMkUsQ0FBQTtJQUMzRSxnR0FBMkUsQ0FBQTtJQUUzRSx1REFBa0MsQ0FBQTtJQUVsQyx5REFBb0MsQ0FBQTtJQUNwQyxxRUFBZ0QsQ0FBQTtJQUNoRCw4REFBeUMsQ0FBQTtJQUV6QyxrRUFBNkMsQ0FBQTtJQUM3QyxrRUFBNkMsQ0FBQTtJQUM3QyxnRkFBMkQsQ0FBQTtJQUMzRCxnRkFBMkQsQ0FBQTtJQUMzRCwwRUFBcUQsQ0FBQTtJQUNyRCwwRUFBcUQsQ0FBQTtJQUVyRCw2REFBd0MsQ0FBQTtJQUN4QyxrRUFBNkMsQ0FBQTtJQUU3Qyx5RUFBb0QsQ0FBQTtJQUNwRCx1RkFBa0UsQ0FBQTtJQUNsRSx1RUFBa0QsQ0FBQTtJQUNsRCw4RUFBeUQsQ0FBQTtJQUV6RCw0REFBdUMsQ0FBQTtJQUN2QyxxREFBZ0MsQ0FBQTtJQUNoQyxpRUFBNEMsQ0FBQTtJQUM1Qyx5REFBb0MsQ0FBQTtJQUNwQyxxRUFBZ0QsQ0FBQTtJQUNoRCx5REFBb0MsQ0FBQTtJQUNwQywyREFBc0MsQ0FBQTtJQUN0Qyw2REFBd0MsQ0FBQTtJQUN4QyxpRUFBNEMsQ0FBQTtBQUM5QyxDQUFDLEVBeEdXLGlCQUFpQixLQUFqQixpQkFBaUIsUUF3RzVCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gRW50aXR5QWN0aW9uVHlwZXMge1xuICBMb2FkID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkJyxcbiAgTG9hZElmTmVjZXNzYXJ5ID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkIChJZiBOZWNlc3NhcnkpJyxcbiAgTG9hZFN1Y2Nlc3MgPSAnW0VudGl0eV0gKEdlbmVyaWMpIExvYWQ6IFN1Y2Nlc3MnLFxuICBMb2FkRmFpbHVyZSA9ICdbRW50aXR5XSAoR2VuZXJpYykgTG9hZDogRmFpbHVyZScsXG5cbiAgTG9hZE1hbnkgPSAnW0VudGl0eV0gKEdlbmVyaWMpIExvYWQgTWFueScsXG4gIExvYWRNYW55SWZOZWNlc3NhcnkgPSAnW0VudGl0eV0gKEdlbmVyaWMpIExvYWQgTWFueSAoSWYgTmVjZXNzYXJ5KScsXG4gIExvYWRNYW55U3VjY2VzcyA9ICdbRW50aXR5XSAoR2VuZXJpYykgTG9hZCBNYW55OiBTdWNjZXNzJyxcbiAgTG9hZE1hbnlGYWlsdXJlID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkIE1hbnk6IEZhaWx1cmUnLFxuXG4gIExvYWRBbGwgPSAnW0VudGl0eV0gKEdlbmVyaWMpIExvYWQgQWxsJyxcbiAgTG9hZEFsbElmTmVjZXNzYXJ5ID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkIEFsbCAoSWYgTmVjZXNzYXJ5KScsXG4gIExvYWRBbGxTdWNjZXNzID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkIEFsbDogU3VjY2VzcycsXG4gIExvYWRBbGxGYWlsdXJlID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkIEFsbDogRmFpbHVyZScsXG5cbiAgTG9hZFBhZ2UgPSAnW0VudGl0eV0gKEdlbmVyaWMpIExvYWQgUGFnZScsXG4gIExvYWRQYWdlSWZOZWNlc3NhcnkgPSAnW0VudGl0eV0gKEdlbmVyaWMpIExvYWQgUGFnZSAoSWYgTmVjZXNzYXJ5KScsXG4gIExvYWRQYWdlU3VjY2VzcyA9ICdbRW50aXR5XSAoR2VuZXJpYykgTG9hZCBQYWdlOiBTdWNjZXNzJyxcbiAgTG9hZFBhZ2VGYWlsdXJlID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkIFBhZ2U6IEZhaWx1cmUnLFxuXG4gIExvYWRSYW5nZSA9ICdbRW50aXR5XSAoR2VuZXJpYykgTG9hZCBSYW5nZScsXG4gIExvYWRSYW5nZUlmTmVjZXNzYXJ5ID0gJ1tFbnRpdHldIChHZW5lcmljKSBMb2FkIFJhbmdlIChJZiBOZWNlc3NhcnkpJyxcbiAgTG9hZFJhbmdlU3VjY2VzcyA9ICdbRW50aXR5XSAoR2VuZXJpYykgTG9hZCBSYW5nZTogU3VjY2VzcycsXG4gIExvYWRSYW5nZUZhaWx1cmUgPSAnW0VudGl0eV0gKEdlbmVyaWMpIExvYWQgUmFuZ2U6IEZhaWx1cmUnLFxuXG4gIENyZWF0ZSA9ICdbRW50aXR5XSAoR2VuZXJpYykgQ3JlYXRlJyxcbiAgQ3JlYXRlU3VjY2VzcyA9ICdbRW50aXR5XSAoR2VuZXJpYykgQ3JlYXRlOiBTdWNjZXNzJyxcbiAgQ3JlYXRlRmFpbHVyZSA9ICdbRW50aXR5XSAoR2VuZXJpYykgQ3JlYXRlOiBGYWlsdXJlJyxcblxuICBDcmVhdGVNYW55ID0gJ1tFbnRpdHldIChHZW5lcmljKSBDcmVhdGUgTWFueScsXG4gIENyZWF0ZU1hbnlTdWNjZXNzID0gJ1tFbnRpdHldIChHZW5lcmljKSBDcmVhdGUgTWFueTogU3VjY2VzcycsXG4gIENyZWF0ZU1hbnlGYWlsdXJlID0gJ1tFbnRpdHldIChHZW5lcmljKSBDcmVhdGUgTWFueTogRmFpbHVyZScsXG5cbiAgVXBkYXRlID0gJ1tFbnRpdHldIChHZW5lcmljKSBVcGRhdGUnLFxuICBVcGRhdGVTdWNjZXNzID0gJ1tFbnRpdHldIChHZW5lcmljKSBVcGRhdGU6IFN1Y2Nlc3MnLFxuICBVcGRhdGVGYWlsdXJlID0gJ1tFbnRpdHldIChHZW5lcmljKSBVcGRhdGU6IEZhaWx1cmUnLFxuXG4gIFVwZGF0ZU1hbnkgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFVwZGF0ZSBNYW55JyxcbiAgVXBkYXRlTWFueVN1Y2Nlc3MgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFVwZGF0ZSBNYW55OiBTdWNjZXNzJyxcbiAgVXBkYXRlTWFueUZhaWx1cmUgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFVwZGF0ZSBNYW55OiBGYWlsdXJlJyxcblxuICBVcHNlcnQgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFVwc2VydCcsXG4gIFVwc2VydFN1Y2Nlc3MgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFVwc2VydDogU3VjY2VzcycsXG4gIFVwc2VydEZhaWx1cmUgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFVwc2VydDogRmFpbHVyZScsXG5cbiAgVXBzZXJ0TWFueSA9ICdbRW50aXR5XSAoR2VuZXJpYykgVXBzZXJ0IE1hbnknLFxuICBVcHNlcnRNYW55U3VjY2VzcyA9ICdbRW50aXR5XSAoR2VuZXJpYykgVXBzZXJ0IE1hbnk6IFN1Y2Nlc3MnLFxuICBVcHNlcnRNYW55RmFpbHVyZSA9ICdbRW50aXR5XSAoR2VuZXJpYykgVXBzZXJ0IE1hbnk6IEZhaWx1cmUnLFxuXG4gIFJlcGxhY2UgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFJlcGxhY2UnLFxuICBSZXBsYWNlU3VjY2VzcyA9ICdbRW50aXR5XSAoR2VuZXJpYykgUmVwbGFjZTogU3VjY2VzcycsXG4gIFJlcGxhY2VGYWlsdXJlID0gJ1tFbnRpdHldIChHZW5lcmljKSBSZXBsYWNlOiBGYWlsdXJlJyxcblxuICBSZXBsYWNlTWFueSA9ICdbRW50aXR5XSAoR2VuZXJpYykgUmVwbGFjZSBNYW55JyxcbiAgUmVwbGFjZU1hbnlTdWNjZXNzID0gJ1tFbnRpdHldIChHZW5lcmljKSBSZXBsYWNlIE1hbnk6IFN1Y2Nlc3MnLFxuICBSZXBsYWNlTWFueUZhaWx1cmUgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFJlcGxhY2UgTWFueTogRmFpbHVyZScsXG5cbiAgRGVsZXRlID0gJ1tFbnRpdHldIChHZW5lcmljKSBEZWxldGUnLFxuICBEZWxldGVTdWNjZXNzID0gJ1tFbnRpdHldIChHZW5lcmljKSBEZWxldGU6IFN1Y2Nlc3MnLFxuICBEZWxldGVGYWlsdXJlID0gJ1tFbnRpdHldIChHZW5lcmljKSBEZWxldGU6IEZhaWx1cmUnLFxuXG4gIERlbGV0ZU1hbnkgPSAnW0VudGl0eV0gKEdlbmVyaWMpIERlbGV0ZSBNYW55JyxcbiAgRGVsZXRlTWFueVN1Y2Nlc3MgPSAnW0VudGl0eV0gKEdlbmVyaWMpIERlbGV0ZSBNYW55OiBTdWNjZXNzJyxcbiAgRGVsZXRlTWFueUZhaWx1cmUgPSAnW0VudGl0eV0gKEdlbmVyaWMpIERlbGV0ZSBNYW55OiBGYWlsdXJlJyxcblxuICBEZWxldGVCeUtleSA9ICdbRW50aXR5XSAoR2VuZXJpYykgRGVsZXRlIGJ5IGtleScsXG4gIERlbGV0ZUJ5S2V5U3VjY2VzcyA9ICdbRW50aXR5XSAoR2VuZXJpYykgRGVsZXRlIGJ5IGtleTogU3VjY2VzcycsXG4gIERlbGV0ZUJ5S2V5RmFpbHVyZSA9ICdbRW50aXR5XSAoR2VuZXJpYykgRGVsZXRlIGJ5IGtleTogRmFpbHVyZScsXG5cbiAgRGVsZXRlTWFueUJ5S2V5cyA9ICdbRW50aXR5XSAoR2VuZXJpYykgRGVsZXRlIG1hbnkgYnkga2V5cycsXG4gIERlbGV0ZU1hbnlCeUtleXNTdWNjZXNzID0gJ1tFbnRpdHldIChHZW5lcmljKSBEZWxldGUgbWFueSBieSBrZXlzOiBTdWNjZXNzJyxcbiAgRGVsZXRlTWFueUJ5S2V5c0ZhaWx1cmUgPSAnW0VudGl0eV0gKEdlbmVyaWMpIERlbGV0ZSBtYW55IGJ5IGtleXM6IEZhaWx1cmUnLFxuXG4gIENsZWFyID0gJ1tFbnRpdHldIChHZW5lcmljKSBDbGVhcicsXG5cbiAgU2VsZWN0ID0gJ1tFbnRpdHldIChHZW5lcmljKSBTZWxlY3QnLFxuICBTZWxlY3RCeUtleSA9ICdbRW50aXR5XSAoR2VuZXJpYykgU2VsZWN0IGJ5IEtleScsXG4gIFNlbGVjdGVkID0gJ1tFbnRpdHldIChHZW5lcmljKSBTZWxlY3Rpb24nLFxuXG4gIFNlbGVjdE1hbnkgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFNlbGVjdCBNYW55JyxcbiAgU2VsZWN0TW9yZSA9ICdbRW50aXR5XSAoR2VuZXJpYykgU2VsZWN0IE1vcmUnLFxuICBTZWxlY3RNYW55QnlLZXlzID0gJ1tFbnRpdHldIChHZW5lcmljKSBTZWxlY3QgTWFueSBieSBLZXlzJyxcbiAgU2VsZWN0TW9yZUJ5S2V5cyA9ICdbRW50aXR5XSAoR2VuZXJpYykgU2VsZWN0IE1vcmUgYnkgS2V5cycsXG4gIFNlbGVjdGVkTWFueSA9ICdbRW50aXR5XSAoR2VuZXJpYykgU2VsZWN0aW9uIG9mIE1hbnknLFxuICBTZWxlY3RlZE1vcmUgPSAnW0VudGl0eV0gKEdlbmVyaWMpIFNlbGVjdGlvbiBvZiBNb3JlJyxcblxuICBEZXNlbGVjdCA9ICdbRW50aXR5XSAoR2VuZXJpYykgRGVzZWxlY3QnLFxuICBEZXNlbGVjdGVkID0gJ1tFbnRpdHldIChHZW5lcmljKSBEZXNlbGVjdGlvbicsXG5cbiAgRGVzZWxlY3RNYW55ID0gJ1tFbnRpdHldIChHZW5lcmljKSBEZXNlbGVjdCBvZiBNYW55JyxcbiAgRGVzZWxlY3RNYW55QnlLZXlzID0gJ1tFbnRpdHldIChHZW5lcmljKSBEZXNlbGVjdCBvZiBNYW55IGJ5IEtleXMnLFxuICBEZXNlbGVjdEFsbCA9ICdbRW50aXR5XSAoR2VuZXJpYykgRGVzZWxlY3Qgb2YgQWxsJyxcbiAgRGVzZWxlY3RlZE1hbnkgPSAnW0VudGl0eV0gKEdlbmVyaWMpIERlc2VsZWN0aW9uIG9mIE1hbnknLFxuXG4gIEVkaXROZXcgPSAnW0VudGl0eV0gKEdlbmVyaWMpIEVkaXQgTmV3JyxcbiAgRWRpdCA9ICdbRW50aXR5XSAoR2VuZXJpYykgRWRpdCcsXG4gIEVkaXRCeUtleSA9ICdbRW50aXR5XSAoR2VuZXJpYykgRWRpdCBieSBLZXknLFxuICBFZGl0ZWQgPSAnW0VudGl0eV0gKEdlbmVyaWMpIEVkaXRlZCcsXG4gIEVkaXRlZEJ5S2V5ID0gJ1tFbnRpdHldIChHZW5lcmljKSBFZGl0ZWQgYnkgS2V5JyxcbiAgQ2hhbmdlID0gJ1tFbnRpdHldIChHZW5lcmljKSBDaGFuZ2UnLFxuICBDaGFuZ2VkID0gJ1tFbnRpdHldIChHZW5lcmljKSBDaGFuZ2VkJyxcbiAgRW5kRWRpdCA9ICdbRW50aXR5XSAoR2VuZXJpYykgRWRpdDogRW5kJyxcbiAgRWRpdEVuZGVkID0gJ1tFbnRpdHldIChHZW5lcmljKSBFZGl0OiBFbmRlZCdcbn1cbiJdfQ==