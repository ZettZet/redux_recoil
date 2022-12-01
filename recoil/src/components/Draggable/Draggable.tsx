import React, { FC, PropsWithChildren, useEffect, useRef } from 'react'

import { cnDraggableStage, useDraggableContext } from './Stage'

type Draggable = {
	onDrag?: (x: number, y: number) => void
}

export const Draggable: FC<PropsWithChildren<Draggable>> = ({
	children,
	onDrag
}) => {
	const ref = useRef<HTMLDivElement>()
	useDraggableContext()

	const isClicked = useRef<boolean>(false)

	const coords = useRef<{
		startX: number
		startY: number
		lastX: number
		lastY: number
	}>({
		startX: 0,
		startY: 0,
		lastX: 0,
		lastY: 0
	})

	useEffect(() => {
		const target = ref.current
		if (!target || !ref.current)
			throw new Error("Element with given id doesn't exist")

		const container = target.parentElement
		if (!container) return

		const onMouseDown = (e: MouseEvent) => {
			isClicked.current = true
			coords.current.startX = e.clientX
			coords.current.startY = e.clientY
		}

		const onMouseUp = (e: MouseEvent) => {
			isClicked.current = false
			coords.current.lastX = target.offsetLeft
			coords.current.lastY = target.offsetTop
		}

		const onMouseMove = (e: MouseEvent) => {
			if (!isClicked.current) return

			const nextX =
				e.clientX - coords.current.startX + coords.current.lastX
			const nextY =
				e.clientY - coords.current.startY + coords.current.lastY

			target.style.top = `${nextY}px`
			target.style.left = `${nextX}px`
			if (onDrag) onDrag(nextX, nextY)
		}

		target.addEventListener('mousedown', onMouseDown)
		target.addEventListener('mouseup', onMouseUp)
		container.addEventListener('mousemove', onMouseMove)
		container.addEventListener('mouseleave', onMouseUp)

		const cleanup = () => {
			target.removeEventListener('mousedown', onMouseDown)
			target.removeEventListener('mouseup', onMouseUp)
			container.removeEventListener('mousemove', onMouseMove)
			container.removeEventListener('mouseleave', onMouseUp)
		}

		return cleanup
	}, [])

	return (
		<div ref={ref} className={cnDraggableStage('Element')}>
			{children}
		</div>
	)
}
