import React, { ComponentProps, FC } from 'react'
import { Link as _base, LinkProps } from 'react-router-dom'
import { KatanaMixin } from 'Types'

import { cn, mergecn } from '../utils'

import './Link.scss'

const cnLink = cn('Link')

type PossibleTag = 'Link' | 'a'
const defaultElement: PossibleTag = 'a'
type KatanaLinkOwnProps = {
	as?: PossibleTag
	to: string
}

type LinkComponentProps<E extends PossibleTag> = E extends typeof defaultElement
	? Omit<ComponentProps<typeof defaultElement>, 'href'>
	: Omit<LinkProps, 'to'>

type KatanaLinkProps<E extends PossibleTag = typeof defaultElement> = KatanaLinkOwnProps &
	LinkComponentProps<E> &
	KatanaMixin

const Link: FC<KatanaLinkProps> = (props) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { as, to, children, className, black, ref, ...rest } = props
	const newClassName = mergecn(cnLink({ black }), className)
	const _as = as ?? defaultElement
	const Tag = _as === 'a' ? 'a' : _base
	const destination = { [_as === 'a' ? 'href' : 'to']: to }

	return (
		<Tag to={''} className={newClassName} {...rest} {...destination}>
			<span>{children}</span>
		</Tag>
	)
}

export default Link
