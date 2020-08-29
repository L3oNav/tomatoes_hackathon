const initialState = {
    error: false,
    loading: false,
    video: {}
}

export const videoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "movieVideoLoading":
            return {
                ...state,
                loading: true,
                error: false,
            }
        case "movieVideoError":
            return {
                ...state,
                error:{
                    status: true,
                    error: action.payload
                },
                loading: false
            }
        case "movieVideoSuccess":
            return {
                ...state,
                error: false,
                loading: false,
                video: action.payload
            }
        default:
            return state
    }
}