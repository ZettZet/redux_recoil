import React, { ComponentPropsWithoutRef, FC } from 'react'
import { KatanaMixin } from 'Types'

import { cn } from '../utils'
import { mergecn } from '../utils'

import './Text.scss'

const cnTextField = cn('Text')

const tag = 'input'

type KatanaTextProps = Omit<ComponentPropsWithoutRef<typeof tag>, 'type'> & KatanaMixin

const Text: FC<KatanaTextProps> = (props) => {
	const { className, black, ...rest } = props

	const newClassName = cnTextField('Input', { black })
	return (
		<span className={mergecn(cnTextField(), className)}>
			<input className={newClassName} {...rest} />
		</span>
	)
}

export default Text
