import React, { ComponentProps, FC } from 'react'
import { KatanaMixin } from 'Types'

import { childrenWithProps, cn, mergecn } from '../utils'

import './Box.scss'

const cnBox = cn('Box')

type BoxProps = ComponentProps<'div'> & KatanaMixin

const Box: FC<BoxProps> = (props) => {
	const { className, children, black, ...rest } = props
	const newClassName = mergecn(cnBox({ black }), className)
	return <div className={newClassName} {...rest}>{childrenWithProps(children, { black })}</div>
}

export default Box