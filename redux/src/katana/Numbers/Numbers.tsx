import React, { ComponentPropsWithoutRef, FC } from 'react'
import { KatanaMixin } from 'Types'

import { cn, mergecn } from '../utils'

import './Numbers.scss'

const cnNumbersField = cn('Numbers')

const tag = 'input'

type KatanaNumbersProps = Omit<ComponentPropsWithoutRef<typeof tag>, 'type'> & KatanaMixin

const Numbers: FC<KatanaNumbersProps> = (props) => {
	const { className, black, ...rest } = props

	const newClassName = cnNumbersField('Input', { black })
	return (
		<span className={mergecn(cnNumbersField(), className)}>
			<input className={newClassName} {...rest} type="number" />
		</span>
	)
}

export default Numbers
