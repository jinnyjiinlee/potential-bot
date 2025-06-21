import React, { useState } from 'react';

import Header from './components/header';
import Hero from './components/hero';
import Feature from './components/features';
import Testimonials from './components/testimonials';
import Modal from './components/modal';
import Footer from './components/footer';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Feature />
      <Testimonials />
      <Footer onOpenModal={openModal} />

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default App;
