import { useState } from 'react';

export const useModal = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal] as const;
};

export default useModal;