import React, { FC, ReactNode } from 'react'
import { KatanaMixin } from 'Types'

import { CssValue, PossiblePosition } from '../common'
import { childrenWithProps, cn, mergecn } from '../utils'

import './Stack.scss'

const cnStack = cn('Stack')

export type StackOwnProps = {
	spacing?: CssValue
	grow?: number
	shrink?: number
	mainAxis?: PossiblePosition
	crossAxis?: PossiblePosition
	className?: string
	children?: ReactNode
	id?: string
	direction: 'vertical' | 'horizontal'
}

type KatanaVStackProps = StackOwnProps & KatanaMixin

const Stack: FC<KatanaVStackProps> = (props) => {
	const { className, spacing, shrink, grow, mainAxis, crossAxis, black, children, direction } =
		props
	const newClassName = mergecn(cnStack({ black, mainAxis, crossAxis, direction }), className)

	return (
		<div
			style={{ gap: spacing?.join(''), flexShrink: shrink, flexGrow: grow }}
			className={newClassName}
		>
			{childrenWithProps(children, { black })}
		</div>
	)
}

export default Stack
