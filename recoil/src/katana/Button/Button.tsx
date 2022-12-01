import React, { ComponentProps, FC } from 'react'
import { ExactlyOne, KatanaMixin } from 'Types'

import { cn, mergecn } from '../utils'

import './Button.scss'

const cnButton = cn('Button')

type KatanaButtonOwnProps = {
	positive?: boolean
	negative?: boolean
}

type KatanaButtonProps = ComponentProps<'button'> & ExactlyOne<KatanaButtonOwnProps> & KatanaMixin

const Button: FC<KatanaButtonProps> = (props) => {
	const { className, children, black, positive, negative, ...rest } = props

	const newClassNames = mergecn(cnButton({ black, positive, negative }), className)

	return <button className={newClassNames} {...rest}><span>{children}</span></button>
}

export default Button

