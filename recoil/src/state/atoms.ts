import { atom, atomFamily } from 'recoil'

import { ElementState } from '../types'

export const elementsState = atom<number[]>({
	key: 'elements',
	default: []
})

export const elementState = atomFamily<ElementState, number>({
	key: 'elementState',
	default: () => ({ x: 0, y: 0, src: '', zIndex: 0 })
})

export const selectedElementIdState = atom<null | number>({
	key: 'selectedElementId',
	default: null
})
