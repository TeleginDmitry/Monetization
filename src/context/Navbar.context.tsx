import { createContext } from 'react'

interface NavbarValuesType {
	isActive: boolean
	toggleIsActive: () => void
}

export const NavbarContext = createContext<NavbarValuesType>({
	isActive: false,
	toggleIsActive: () => {},
})
