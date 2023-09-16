import React, {useReducer} from "react";

const ACTIONS = {
    INCREMENT : "increment",
    SHOW : "show_text",
    BOTH : "both"
}

const reducer = (state, action) => {

    switch(action.type){
        case ACTIONS.INCREMENT :
            return {count: state.count + 1, showText: state.showText}
        case ACTIONS.SHOW :
            return { count: state.count, showText: !state.showText }
        case ACTIONS.BOTH :
            return {count: state.count + 1, showText: !state.showText}
        default :
            return state;
    }

};

export const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})

    return(
        <div>
            <h2>{state.count}</h2>
            <button
                onClick={() => {
                    dispatch({type: ACTIONS.INCREMENT})
                    dispatch({type: ACTIONS.SHOW})
                }}
            >Click Here</button>

            {state.showText && <h2>Hi its rohit</h2>}
        </div>
    );
};