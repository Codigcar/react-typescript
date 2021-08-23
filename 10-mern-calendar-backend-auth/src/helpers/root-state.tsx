

export interface RootState {
    ui: {
        modalOpen: boolean
    },
    calendar:{
        events:any,
        activeEvent:any
    },
    auth: {
        checking: boolean,
        uid:string,
        name:string
    }
}