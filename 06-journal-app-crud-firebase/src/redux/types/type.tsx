export enum ActionType {
    AuthLogin = "[Auth] login",
    AuthLogout = "[Auth] logout",
    UISetError = "[UI] Set Error",
    UIRemoveError = "[UI] Remove Error",
    UIStartLoading = "[UI] Start loading",
    UIFinishLoading = "[UI] Finish loading",   

    notesAddNew = '[Notes] New note',
    notesActive = '[Notes] Set active note',
    notesLoad = '[Notes] Load notes',
    notesUpdated = '[Notes] Update note save',
    notesFireUrl = '[Notes] Update image url',
    notesDelete = '[Notes] Delete note',
    notesLogoutCleaning = '[Notes] Logout cleaning',

}