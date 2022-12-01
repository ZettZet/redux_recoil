import React, { FC, ReactNode } from 'react'
import { NavLink as _baseLink, NavLinkProps } from 'react-router-dom'
import { KatanaMixin } from 'Types'

import { cn, mergecn } from '../utils'

import './NavLink.scss'

const cnNavLink = cn('NavLink')

type KatanaNavLinkProps = NavLinkProps & KatanaMixin
type NavLinkFunction<T> = (props: {
	isActive: boolean
	isPending: boolean
}) => T

const NavLink: FC<KatanaNavLinkProps> = (props) => {
	const { children, className, black, ...rest } = props
	let newClassName: string | NavLinkFunction<string | undefined>
	let _children: ReactNode | NavLinkFunction<ReactNode>
	const baseClassNames = cnNavLink({ black })

	switch (typeof className) {
		case 'string':
		case 'undefined': {
			newClassName = mergecn(baseClassNames, className)
			break
		}
		case 'function': {
			newClassName = (props) => {
				const result = className(props)
				return mergecn(baseClassNames, result)
			}
			break
		}
		default: {
			console.warn(`Unknown type ${typeof className} of className in NavLink ${className}`)
			newClassName = mergecn(baseClassNames)
		}
	}


	switch (typeof children) {
		case 'function': {
			_children = (props) => {
				const result = children(props)
				return <span>{result}</span>
			}
			break
		}
		case 'string': {
			_children = <span>{children}</span>
			break
		}
		default: {
			console.warn(`Unknown type ${typeof children} of children in NavLink ${children}`)
			_children = <span>{children}</span>
			break
		}
	}

	return <_baseLink {...rest} className={newClassName} >
		{_children}
	</_baseLink>
}

export default NavLink