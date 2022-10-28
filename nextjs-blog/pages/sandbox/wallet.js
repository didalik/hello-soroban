import Link from 'next/link'; // {{{1
import React from 'react'
import Head from 'next/head'
import { WalletData } from '../../components/molecules/wallet-data'

/* Wallet {{{1
*/
export default function Soroban() {
  return (
    <>
      <Head>
        <title>Hello Soroban</title>
        <meta
          name="description"
          content="Did Alik's soroban sandbox"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Soroban!</h1>
      <WalletData/>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
