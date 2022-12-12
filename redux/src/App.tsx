import React, { FC } from 'react'

import { useAppSelector } from './common/hooks'
import { getElements } from './store/reducers/elementsSlice'
import { Element, Info, TopPanel, Viewer } from './components'

const equalityFn = (state: unknown[], stateNew: unknown[]) => {
	// простая проверка
	return state.length === stateNew.length;
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
