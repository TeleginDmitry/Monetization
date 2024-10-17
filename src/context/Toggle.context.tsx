import { ToggleValue } from '@/types/toggleValue.types'
import { createContext } from 'react'

interface ToggleValues {
	values: ToggleValue[]
	addValue: (value: ToggleValue) => void
	removeValue: (valueId: string) => void
	setValueActive: (valueId: string) => void
}

const defaultToggleValues: ToggleValues = {
	values: [],
	addValue: () => {},
	removeValue: () => {},
	setValueActive: () => {},
}

export const ToggleContext = createContext<ToggleValues>(defaultToggleValues)
