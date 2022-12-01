import React, { ChangeEventHandler, ComponentPropsWithoutRef, FC, useState } from 'react'
import { ExactlyOne, KatanaMixin, WithRequired } from 'Types'

import { cn, mergecn } from '../utils'

import './Checkbox.scss'

const cnCheckbox = cn('Checkbox')

const tag = 'input'

type KatanaCheckboxOwnProps = {
	positive?: boolean
	negative?: boolean
}

type KatanaCheckboxProps = WithRequired<
	Omit<ComponentPropsWithoutRef<typeof tag>, 'type'>,
	'name'
> &
	ExactlyOne<KatanaCheckboxOwnProps> &
	KatanaMixin

const Checkbox: FC<KatanaCheckboxProps> = (props) => {
	const { positive, negative, title, children, className, black, checked, onChange, ...rest } =
		props
	const [_checked, setChecked] = useState<boolean>(checked ?? false)

	const newClassName = mergecn(
		cnCheckbox({ black, positive, negative, checked: _checked }),
		className
	)
	const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		setChecked((prev) => !prev)
		if (!onChange) return
		onChange(event)
	}

	return (
		<label className={newClassName}>
			<span>{title ?? children}</span>
			<input
				className={cnCheckbox('Input')}
				type="checkbox"
				onChange={_onChange}
				checked={_checked}
				{...rest}
			/>
		</label>
	)
}

export default Checkbox
