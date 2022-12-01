import React, { ComponentProps, FC } from 'react'
import { KatanaMixin } from 'Types'

import { CssValue } from '../common'
import { cn, mergecn } from '../utils'

import './Typography.scss'

const cnTypography = cn('Typography')

type PossibleTag = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
const defaultElement: PossibleTag = 'p'
type KatanaTypographyOwnProps = {
	as?: PossibleTag
	size?: CssValue
}
type KatanaTypographyProps<E extends PossibleTag = typeof defaultElement> = ComponentProps<E> &
	KatanaTypographyOwnProps &
	KatanaMixin

const Typography: FC<KatanaTypographyProps> = (props) => {
	const { as, className, children, black, size, ...rest } = props
	const Tag = as ?? defaultElement
	const newClassName = mergecn(cnTypography({ black }), className)

	return (
		<Tag className={newClassName} style={{ fontSize: size?.join('') }} {...rest}>
			{children}
		</Tag>
	)
}

export default Typography
