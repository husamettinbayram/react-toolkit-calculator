import {configureStore} from "@reduxjs/toolkit"
import { typeOptions } from "@testing-library/user-event/dist/type/typeImplementation"
import {useSelector, useDispatch} from "react-redux"
import {TypedUseSelectorHook} from "react-redux"

import screenSlice from "./slices/screenSlice"

const store = configureStore ({
    reducer:{
    screenState : screenSlice
}})

export default store

type dispatchType = typeof store.dispatch
type stateType = ReturnType<typeof store.getState>

export const useAppDispatch = ()=> useDispatch<dispatchType>()
// export const useAppSelector = ()=> useSelector<stateType>
export const useAppSelector: TypedUseSelectorHook<stateType> = useSelector
