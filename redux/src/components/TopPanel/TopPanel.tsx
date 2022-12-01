import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import { useAppDispatch } from '../../common/hooks'
import { Box, Button } from '../../katana'
import { addElement } from '../../store/reducers/elementsSlice'

import './TopPanel.scss'

const cnTopPanel = cn('TopPanel')

export const TopPanel: FC = () => {
	const dispatch = useAppDispatch()

	return (
		<Box className={cnTopPanel()} black>
			<Button
				onClick={() => dispatch(addElement())}
				className={cnTopPanel('Button')}
			>
				SPAWN
			</Button>
		</Box>
	)
}
