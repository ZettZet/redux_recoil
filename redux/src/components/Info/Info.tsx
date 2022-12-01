import React, { FC } from 'react'
import { cn } from '@bem-react/classname'

import { useAppSelector } from '../../common/hooks'
import { Box, Typography } from '../../katana'
import { getElementById } from '../../store/reducers/elementsSlice'
import { getSelectedElementId } from '../../store/reducers/selectedElementSlice'

import './Info.scss'

const cnInfo = cn('Info')

export const Info: FC = () => {
	const id = useAppSelector(getSelectedElementId)
	const elementState = useAppSelector(getElementById(id))
	return (
		<Box className={cnInfo()} black={false}>
			<Typography as="h1">x:{elementState?.x}</Typography>
			<Typography as="h1">y:{elementState?.y}</Typography>
			<a href={elementState?.src}>Original</a>
		</Box>
	)
}
