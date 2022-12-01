import React, { ReactNode } from 'react'
import { withNaming } from '@bem-react/classname'
import { classnames } from '@bem-react/classnames'

export const cn = withNaming({ n: 'katana-', e: '__', m: '_' })
export const mergecn = (cnGenerated: string, forwarded?: string): string =>
	classnames(...cnGenerated.split(' '), ...(forwarded ?? ' ').split(' '))
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const childrenWithProps = (children: ReactNode, props: any): ReactNode =>
	React.Children.map(children, (child) => {
		if (React.isValidElement(child)) {
			const { black: _black } = child.props
			const _typeof_black = typeof _black
			if (_typeof_black === 'boolean') {
				return React.cloneElement(child, { ...props, black: _black })
			}
			return React.cloneElement(child, props)
		}
		return child
	})

export const width = () => {
	return (
		window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0
	)
}

export const height = () => {
	return (
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight ||
		0
	)
}
