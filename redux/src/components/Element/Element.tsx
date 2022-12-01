import React, { FC, Suspense } from 'react'

import { useAppDispatch, useAppSelector } from '../../common/hooks'
import { Image } from '../../katana'
import {
	getElementById,
	updateElement
} from '../../store/reducers/elementsSlice'
import { selectElement } from '../../store/reducers/selectedElementSlice'
import { Draggable } from '../Draggable'

import './Element.scss'

export const Element: FC<{ id: number }> = ({ id }) => {
	const dispatch = useAppDispatch()
	const state = useAppSelector(getElementById(id))

	return (
		<Draggable
			onDrag={(x, y) => {
				dispatch(updateElement({ ...state, x, y }))
				dispatch(selectElement(id))
			}}
		>
			<Suspense fallback="Loading">
				<Image
					alt={''}
					src={state.src}
					black
					scale={[500, 'px']}
					draggable="false"
					id={`${id}`}
				/>
			</Suspense>
		</Draggable>
	)
}
