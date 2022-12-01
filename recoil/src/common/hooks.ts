import { useRecoilCallback, useRecoilState } from 'recoil'

import { getRandomImageSrc } from '../api/picsum'
import { elementsState, elementState } from '../state/atoms'

export const useInsertElement = () => {
	const [elements, setElements] = useRecoilState(elementsState)

	return useRecoilCallback(
		({ set }) => {
			return () => {
				const newId = elements.length + 1

				setElements((elements) => [...elements, newId])

				const src = getRandomImageSrc()

				set(elementState(newId), {
					x: 0,
					y: 0,
					src,
					zIndex: 0
				})
			}
		},
		[elements]
	)
}
