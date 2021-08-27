
export enum actionTypes {
    uiOpenModal= '[ui] Open modal',
    uiCloseModal = '[ui] Close modal',
    
    eventStartAddNew = '[event] Start add new',
    eventSetActive = '[event] Set Active',
    eventAddNew = '[event] Add new',
    eventClearActiveEvent = '[event] Clear ActiveEvent',
    eventUpdated = '[event] Event updated',
    eventDeleted = '[event] Event deleted',
    eventLoaded = '[event] Events loaded',
    // authChecking = '[auth] Checking login state',

    // cambiar el ckecking a false, para verificar si hay token almacenado 
    authCheckingFinish ='[auth] Finish checking login state',

    authStartLogin ='[auth] Start login',
    authStartRegister ='[auth] Start Register',
    authStartTokenREnew ='[auth] Start token renew',
    authLogin ='[auth] Login',
    authLogout ='[auth] Logout',


}
