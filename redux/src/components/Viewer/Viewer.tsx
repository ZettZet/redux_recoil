import React, { FC, PropsWithChildren } from 'react'

import { Stage } from '../Draggable'

export const Viewer: FC<PropsWithChildren> = ({ children }) => {
	return <Stage>{children}</Stage>
}
