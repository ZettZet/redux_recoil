import React, { FC } from 'react'
import { cn } from '@bem-react/classname'
import { useRecoilValue } from 'recoil'

import { Box, Typography } from '../../katana'
import { selectedElementState } from '../../state/selectors'

import './Info.scss'

const cnInfo = cn('Info')

export const Info: FC = () => {
	const elementState = useRecoilValue(selectedElementState)
	return (
		<Box className={cnInfo()} black={false}>
			<Typography as="h1">x:{elementState?.x}</Typography>
			<Typography as="h1">y:{elementState?.y}</Typography>
			<a href={elementState?.src}>Original</a>
		</Box>
	)
}
