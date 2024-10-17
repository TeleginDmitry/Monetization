'use client'

import { ToggleContext } from '@/context/Toggle.context'
import { useContext } from 'react'

export function ToggleContent() {
	const context = useContext(ToggleContext)

	const { values } = context

	return (
		<div className='w-full min-h-20'>
			{values.map(({ content, id, isActive }) => (
				<p className={`${!isActive && 'hidden'} text-22`} key={id}>
					{content}
				</p>
			))}
		</div>
	)
}
