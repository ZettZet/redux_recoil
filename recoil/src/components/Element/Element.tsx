import React, { FC, Suspense } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'

import { Image } from '../../katana'
import { elementState, selectedElementIdState } from '../../state/atoms'
import { Draggable } from '../Draggable'

import './Element.scss'

export const Element: FC<{ id: number }> = ({ id }) => {
	const [state, setState] = useRecoilState(elementState(id))
	const setSelectedItem = useSetRecoilState(selectedElementIdState)

	return (
		<Draggable
			onDrag={(x, y) => {
				setState({ ...state, x, y })
				setSelectedItem(id)
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
