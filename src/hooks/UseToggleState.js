import { useState } from 'react';

const useToggleState = option => {
  const [showModal, setShowModal] = useState(option);
  const toggleModal = () => setShowModal(prevState => !prevState);

  return { toggleModal, showModal };
};

export default useToggleState;
