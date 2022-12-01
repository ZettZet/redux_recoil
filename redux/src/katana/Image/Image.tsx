import React, { ComponentProps, FC } from 'react'
import { KatanaMixin, WithRequired } from 'Types'

import { CssValue } from '../common'
import { cn, mergecn } from '../utils'

import './Image.scss'

const cnImage = cn('Image')

const defaultElement = 'img'

type KatanaImageOwnProps = {
	shape?: 'circle' | 'square'
	scale?: CssValue
}
type KatanaImageProps = WithRequired<
	ComponentProps<typeof defaultElement>,
	'src' | 'alt'
> &
	KatanaImageOwnProps &
	KatanaMixin

const Image: FC<KatanaImageProps> = (props) => {
	const { className, black, shape, scale, style, onClick, ...rest } = props
	const newClassName = mergecn(cnImage({ black, shape }), className)
	return (
		<img
			style={{
				width: scale?.join(''),
				height: 'auto',
				aspectRatio: shape !== undefined ? undefined : 'auto',
				cursor: onClick !== undefined ? 'pointer' : undefined,
				...style
			}}
			className={newClassName}
			onClick={onClick}
			{...rest}
		/>
	)
}

export default Image
