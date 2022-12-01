import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getRandomImageSrc } from '../../api/picsum'
import { ElementState } from '../../types'
import { RootState } from '../store'

const initialState: ElementState[] = []

export const elementsSlice = createSlice({
	name: 'elementsSlice',
	initialState,
	reducers: {
		addElement(state) {
			state.push({
				id: state.length,
				x: 0,
				y: 0,
				zIndex: 0,
				src: getRandomImageSrc()
			})
		},
		updateElement(state, action: PayloadAction<ElementState>) {
			const idx = state.findIndex(
				(element) => element.id === action.payload.id
			)
			if (idx < 0) return
			state[idx] = action.payload
		}
	}
})

export default elementsSlice.reducer
export const { addElement, updateElement } = elementsSlice.actions

export const getElements = (state: RootState) => state.elementsSlice
export const getElementById = (id: number) => (state: RootState) =>
	state.elementsSlice.find((element) => element.id === id)!
