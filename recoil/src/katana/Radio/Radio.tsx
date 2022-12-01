import React, { ChangeEventHandler, ComponentPropsWithoutRef, FC } from 'react'
import { ExactlyOne, KatanaMixin, WithRequired } from 'Types'

import { cn, mergecn } from '../utils'

import { useRadioContext } from './RadioGroup'

import './Radio.scss'

const cnRadio = cn('Radio')

const tag = 'input'

type KatanaRadioOwnProps = {
	positive?: boolean
	negative?: boolean
}

type KatanaRadioProps = WithRequired<Omit<ComponentPropsWithoutRef<typeof tag>, 'type'>, 'name'> &
	ExactlyOne<KatanaRadioOwnProps> &
	KatanaMixin

const Radio: FC<KatanaRadioProps> = (props) => {
	const { positive, negative, title, value, children, className, black, ...rest } = props
	const [state, onChange] = useRadioContext()
	const checked = value === state

	const newClassName = mergecn(cnRadio({ black, checked, positive, negative }), className)

	const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		onChange(event.target.value)
	}

	return (
		<label className={newClassName}>
			<span>{title ?? children}</span>
			<input
				className={cnRadio('Input')}
				type="radio"
				{...rest}
				onChange={_onChange}
				value={value}
				checked={checked}
			/>
		</label>
	)
}

export default Radio
