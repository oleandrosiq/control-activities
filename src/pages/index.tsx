import Head from 'next/Head';

import { Header } from '../components/Header';
import { Summary } from '../components/Summary';
import { Activities } from '../components/Activities';

export default function Home() {
  return (
    <>
      <Head>
        <title>Job Challenger</title>
      </Head>
    
      <Header />
      <Summary 
        canceled={3}
        completed={4}
        pending={2}
      />
      <Activities />
    </>
  );
}
