import { useState } from "react";

export const useModal = (initialOpen = false) => {
  const [isOpen, setOpen] = useState(initialOpen);

  const openModal = () => {setOpen(true)};
  const closeModal = () => setOpen(false);

  return [isOpen, openModal, closeModal];
};
