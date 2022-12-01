import React, { FC } from 'react'
import { useRecoilValue } from 'recoil'

import { elementsState } from './state/atoms'
import { Element, Info, TopPanel, Viewer } from './components'

const App: FC = () => {
	const elements = useRecoilValue(elementsState)
	return (
		<>
			<TopPanel />
			<Viewer>
				{elements.map((element) => (
					<Element key={element} id={element} />
				))}
			</Viewer>
			<Info />
		</>
	)
}

export default App
