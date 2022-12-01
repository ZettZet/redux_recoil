import { selector } from 'recoil'

import { elementState, selectedElementIdState } from './atoms'

export const selectedElementState = selector({
	key: 'selectedElementState',
	get: ({ get }) => {
		const id = get(selectedElementIdState)

		if (!id) return
		return get(elementState(id))
	}
})
