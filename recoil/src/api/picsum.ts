import { intRand } from '../utils'

export const getRandomImageSrc = () => {
	return `https://picsum.photos/seed/${Date.now()}/${intRand(
		200,
		200
	)}/${intRand(200, 200)}`
}
