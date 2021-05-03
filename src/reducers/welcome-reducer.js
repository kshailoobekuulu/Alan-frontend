const initialState = {
    welcomeHeader: '',
    welcomeText:''
}

const welcomeReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FETCH_WELCOME_TEXT' :
            return {
                welcomeHeader: action.welcomeHeader,
                welcomeText: action.welcomeText
            }
        default:
            return state.welcomeTexts
    }
}
export default welcomeReducer;