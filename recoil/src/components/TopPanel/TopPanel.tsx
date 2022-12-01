import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import { useInsertElement } from '../../common/hooks'
import { Box, Button } from '../../katana'

import './TopPanel.scss'

const cnTopPanel = cn('TopPanel')

export const TopPanel: FC = () => {
	const insert = useInsertElement()

	return (
		<Box className={cnTopPanel()} black>
			<Button onClick={() => insert()} className={cnTopPanel('Button')}>
				SPAWN
			</Button>
		</Box>
	)
}
