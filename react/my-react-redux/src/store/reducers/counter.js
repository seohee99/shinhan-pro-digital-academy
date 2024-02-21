// 최초 상태
const initialState = {
    counter : 0,
    color : "black",
};

// Action Types 정의
export const INCREASE_COUNTER = "counter/INCREASE_COUNTER";
export const DECREASE_COUNTER = "counter/DECREASE_COUNTER";
export const SET_COLOR = "counter/SET_COLOR";


// Action Creator : function으로 정의, 반환되는 건 action 
export const increaseCounter = () => ({
    type : INCREASE_COUNTER,
    payload : {},
})
export const decreaseCounter = () => ({
    type : DECREASE_COUNTER,
    payload : {},
})
export const setColor = () => ({
    type : SET_COLOR,
    payload : {},
});

// Reducer
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter : state.counter + 1,
            };          
    
        case DECREASE_COUNTER:
            return {
                ...state,
                counter : state.counter - 1,
            };          
    
        case SET_COLOR:
            return {
                ...state,
                counter : action.payload.color,
            };          
    
        default:
            return state;
    }
    
}

export default counterReducer;