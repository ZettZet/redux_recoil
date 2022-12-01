import React, { ComponentProps, FC } from 'react'
import { KatanaMixin } from 'Types'

import { childrenWithProps, cn, height, mergecn, width } from '../utils'

import './Section.scss'

const cnSection = cn('Section')

const defaultElement = 'section'
type KatanaSectionProps = ComponentProps<typeof defaultElement> & KatanaMixin

const Section: FC<KatanaSectionProps> = (props) => {
	const { className, children, black, ...rest } = props
	const newClassName = mergecn(cnSection({ black }), className)
	return (
		<section
			className={newClassName}
			{...rest}
			style={{ width: width(), height: height() }}
		>
			{childrenWithProps(children, { black })}
		</section>
	)
}

export default Section
