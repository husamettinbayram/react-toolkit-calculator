import { createSlice } from "@reduxjs/toolkit"
import { stateType, actionType } from "../../types.js"
const initialState: stateType = {
    lower: "0",
    operand: "",
    upper: ""
}


const screenSlice = createSlice({
    name: "screenSliceXXX",
    initialState: initialState,
    reducers: {
        append: (state: stateType, action: { type: string, payload: string },) => {
            if (state.lower !== "0") {
                state.lower = state.lower + action.payload
            } else if (state.lower === "0" && state.operand === "" && state.upper !== "") {
                state.upper = ""
                state.lower = action.payload
            } else {
                state.lower = action.payload
            }
        },
        deleteDigit: (state: stateType) => {
            if (state.lower.length >= 2) {
                state.lower = state.lower.slice(0, -1)
            } else {
                state.lower = "0"
            }
        },
        deleteAll: (state: stateType) => {
            state.lower = "0";
            state.operand = "";
            state.upper = "";
        },
        appendOperand: (state: stateType, action: actionType) => {
            if (state.upper === "") {
                state.upper = state.lower;
                state.operand = action.payload;
                state.lower = "0";
            } else if (state.upper !== "" && state.lower !== "" && state.operand !== "") {
                state.upper = eval(state.upper + state.operand + state.lower);
                state.lower = "0";
                state.operand = action.payload;
            } else if (state.upper !== "" && state.operand === "") {
                state.operand = action.payload
            }
        },
        appendDecimal: (state: stateType) => {
            if (!state.lower.includes(".")) {
                state.lower = state.lower + "."
            }

        },
        evaluate: (state: stateType) => {
            state.upper = eval(state.upper + state.operand + state.lower);
            state.lower = "0";
            state.operand = "";
        }

    }

})

export default screenSlice.reducer
export const { append, deleteDigit, deleteAll, appendOperand, appendDecimal, evaluate } = screenSlice.actions