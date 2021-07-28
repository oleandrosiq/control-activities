import { useState } from 'react';
import Head from 'next/head';

import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { Activities } from '../components/Activities';
import { NewActivityModal } from '../components/NewActivityModal';

export default function Home() {
  const [isNewActivityModalOpen, setIsNewActivityModalOpen] = useState(false);

  function handleOpenNewActivityModal() {
    setIsNewActivityModalOpen(true)
  }

  function handleCloseNewActivityModal() {
    setIsNewActivityModalOpen(false);
  }

  return (
    <>
      <Head>
        <title>Control Activities - Home</title>
      </Head>
    
      <Header onOpenNewActivityModal={handleOpenNewActivityModal} />
      <Summary />
      <Activities />
      <NewActivityModal 
        isOpen={isNewActivityModalOpen}
        onCloseRequest={handleCloseNewActivityModal}
      />
    </>
  );
}
