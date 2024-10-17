'use client'

import { NavbarContext } from '@/context/Navbar.context'
import { useState } from 'react'

interface Props {
	children: React.ReactNode
}

export function NavbarProvider({ children }: Props) {
	const [isActive, setIsActive] = useState(false)

	function toggleIsActive() {
		setIsActive(state => !state)
	}

	return (
		<NavbarContext.Provider value={{ isActive, toggleIsActive }}>
			{children}
		</NavbarContext.Provider>
	)
}
