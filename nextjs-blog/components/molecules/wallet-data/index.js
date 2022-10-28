import React from 'react' // {{{1
//import { DropdownSvg } from '../../../assets/icons'
import { useAccount, useIsMounted, useNetwork } from '../../../wallet'
//import { ConnectButton } from '../../atoms'
//import styles from './style.module.css'
//import Image from 'next/image'

// Thanks:
// https://reactjs.org/tutorial/tutorial.html
// https://jameschambers.co.uk/vim-typescript-slow

export function WalletData() { // {{{1
// TODO: Eliminate flash of unconnected content on loading
 
  const mounted = useIsMounted()
  const { data: account } = useAccount()
  const { activeChain: chain, chains } = useNetwork()

  //console.log(mounted)

  const unsupportedChain = chain?.unsupported

  return (
    <>
      Hello Wallet<br/>
      mounted: {mounted.toString()} unsupportedChain: {unsupportedChain?.toString() ?? 'UNDEFINED'}<br/>
      account: {account?.toString() ?? 'UNDEFINED'}<br/>
    </>
  )
}
