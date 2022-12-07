import React, { FC } from 'react'

import { useAppSelector } from './common/hooks'
import { getElements } from './store/reducers/elementsSlice'
import { Element, Info, TopPanel, Viewer } from './components'

import { ElementState } from './types'

const equalityFn = (a: ElementState[], b: ElementState[]) => {
	return b.every((el, index) => el.id === (a[index] && a[index].id));
}

const App: FC = () => {
	const elements = useAppSelector(getElements, equalityFn)
	return (
		<>
			<TopPanel />
			<Viewer>
				{elements.map((element) => (
					<Element key={element.id} id={element.id} />
				))}
			</Viewer>
			<Info />
		</>
	)
}

export default App
