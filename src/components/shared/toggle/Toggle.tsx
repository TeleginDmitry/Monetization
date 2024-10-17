import { ToggleProvider } from '@/providers/Toggle.provider'
import { ToggleItem } from './item/ToggleItem'
import { ToggleWrapper } from './wrapper/ToggleWrapper'

interface Props {
	children: React.ReactNode
}

function Toggle({ children }: Props) {
	return (
		<ToggleProvider>
			<ToggleWrapper>{children}</ToggleWrapper>
		</ToggleProvider>
	)
}

Toggle.Item = ToggleItem

export { Toggle }
