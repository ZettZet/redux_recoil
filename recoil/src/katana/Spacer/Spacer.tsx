import React, { FC } from 'react'

import { cn } from '../utils'

import './Spacer.scss'

const cnSpacer = cn('Spacer')

const Spacer: FC = () => {
	return <div className={cnSpacer()}></div>
}

export default Spacer