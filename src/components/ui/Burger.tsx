'use client'

import { NavbarContext } from '@/context/Navbar.context'
import React, { useContext } from 'react'

interface Props {
	variant?: 'primary' | 'secondary'
	className?: string
}

export function Burger({ className, variant = 'primary' }: Props) {
	const { toggleIsActive } = useContext(NavbarContext)

	return (
		<button
			onClick={toggleIsActive}
			className={`relative flex flex-col gap-sm items-center justify-center h-11 w-11 rounded border-2 border-solid border-orange-100 ${className}`}
		>
			{variant === 'primary' ? (
				<>
					<div className='w-6 border-y-sm border-solid border-orange-100 rounded-xs'></div>
					<div className='w-6 border-y-sm border-solid border-orange-100 rounded-xs'></div>
					<div className='w-6 border-y-sm border-solid border-orange-100 rounded-xs'></div>
				</>
			) : (
				<>
					<div className='w-6 border-y-sm border-solid border-orange-100 rounded-xs rotate-45'></div>
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 border-y-sm border-solid border-orange-100 rounded-xs -rotate-45'></div>
				</>
			)}
		</button>
	)
}
