import { createAction, createReducer } from '@reduxjs/toolkit'

INITIAL_STATE = {
    item: null
}

export const actionData = createAction("DATA")

export default createReducer(INITIAL_STATE, {
    [actionData.type]: (state, action) => ({ ...state, item: action.payload }),
})