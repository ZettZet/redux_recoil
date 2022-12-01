import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../store'

const initialState = 0

export const selectedElementSlice = createSlice({
	name: 'selectedElementSlice',
	initialState,
	reducers: {
		selectElement(state, action: PayloadAction<number>) {
			return action.payload
		}
	}
})

export default selectedElementSlice.reducer
export const { selectElement } = selectedElementSlice.actions

export const getSelectedElementId = (state: RootState) =>
	state.selectedElementSlice
