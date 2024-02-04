import { useCallback, useState } from 'react'

export const useDisclosure = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const onOpen = useCallback(() => {
		setIsOpen(true)
	}, [])
	const onClose = useCallback(() => {
		setIsOpen(false)
	}, [])
	return { isOpen, onClose, onOpen, setIsOpen }
}
export type DisclosureReturn = ReturnType<typeof useDisclosure>