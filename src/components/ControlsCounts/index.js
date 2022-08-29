import {useDispatch} from "react-redux";
import React from "react";
import {addCountAction} from "modules/counter/reducer";

const ControlsCounts = ({isAdd  = true}) => {
    const dispatch = useDispatch()
    const addCount = (add = 1) => {
        addCountAction(add)
    }

    const removeCount = (remove = 1) => {
        dispatch({
            type: "REMOVE_COUNT",
            payload: remove
        })
    }

    const action = () => isAdd ? addCount(10) : removeCount(5)

    return <button onClick={() => action()}>add</button>
}

export default ControlsCounts;
