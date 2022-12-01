import React, { createContext, FC, PropsWithChildren, useContext } from 'react'
import { cn } from '@bem-react/classname'

import { Section } from '../../katana'

import './Draggable.scss'

export const cnDraggableStage = cn('DraggableStage')

const DraggableContext = createContext(true)

export const useDraggableContext = () => {
	const context = useContext(DraggableContext)
	if (!context) {
		throw new Error(
			'Draggable components cannot be rendered outside the Stage'
		)
	}
	return context
}

export const Stage: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Section className={cnDraggableStage()} black>
			<DraggableContext.Provider value={true}>
				{children}
			</DraggableContext.Provider>
		</Section>
	)
}
