'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Modal from '../components/Modal';
import ToastContainer from '../components/ToastContainer';
import LastMessage from '../components/LastMessage';
import Footer from '../components/Footer';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Header onModalClick={() => setShowModal(true)} />
      <Hero onModalClick={() => setShowModal(true)} />
      <Features />
      <Testimonials />
      <Modal show={showModal} onClose={() => setShowModal(false)} />
      <ToastContainer />
      <LastMessage onModalClick={() => setShowModal(true)} />
      <Footer />
    </>
  );
}
