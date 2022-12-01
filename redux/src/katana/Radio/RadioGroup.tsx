import React, { createContext, ReactNode, useContext, useState } from 'react'
import { FC } from 'react'
import { KatanaMixin } from 'Types'

import { childrenWithProps } from '../utils'

type RadioGroupProps = {
	children: ReactNode
	onChange?: (value: string) => void
	value?: string
} & KatanaMixin

const RadioContext = createContext<
	[string, (value: string) => void] | undefined
		>(undefined)

export const useRadioContext = () => {
	const context = useContext(RadioContext)
	if (!context) {
		throw new Error(
			'Radio components cannot be rendered outside the RadioGroup'
		)
	}
	return context
}

export const RadioGroup: FC<RadioGroupProps> = (props) => {
	const { children, onChange, value: initialValue, black } = props
	const [value, setValue] = useState<string>(initialValue ?? '')

	const handleChange = (_value: string) => {
		setValue(_value)
		if (!onChange) return
		onChange(_value)
	}
	return (
		<RadioContext.Provider value={[value, handleChange]}>
			{childrenWithProps(children, { black })}
		</RadioContext.Provider>
	)
}
