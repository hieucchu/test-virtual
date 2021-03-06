import Head from 'next/head';
import RowVirtualizerFixed from '../components/RowVirtualizedFixed';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virtualized Fixed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Virtualized</h1>

        <RowVirtualizerFixed />
      </main>
    </div>
  );
}
