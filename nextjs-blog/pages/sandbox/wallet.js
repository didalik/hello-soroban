import Link from 'next/link'; // {{{1
import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
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
        <Script 
src="https://cdnjs.cloudflare.com/ajax/libs/stellar-freighter-api/2.6.0/index.min.js"
        />
      </Head>

      <h1>Soroban!</h1>
      <WalletData/>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
