import React from 'react';
import { AppContext } from "../AppContext";

export function useAccount() {
  const ctx = React.useContext(AppContext);
  //React.useEffect(_ => console.log(ctx))

  const {address} = ctx

  if (!address) {
    return {};
  }

  return {
    data: {
      address,
      displayName: `${address.slice(0, 4)}...${address.slice(-4)}`,
    }
  };
};
