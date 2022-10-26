#!/usr/bin/env bash # {{{1
# Usage:                           BUYER_SK
# :!clear; ./hexa-trade-nocheck.sh SAQQVOH5CHGRM5UP2WEG5QNZWTYB7GMNMMO5U3NINR2ICCIQDE7AQIQQ
set -e

echo "=== START $0 on $(date) ===" # {{{1

npx ttab -t 'next dev' -w "npx next dev"
npx ttab -t 'port 3000' -w "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome 'http://localhost:3000'"
cd ../soroban-example-dapp
npx ttab -t 'soroban' -w "soroban serve"
echo $@

echo "===  STOP $0 on $(date) ===" # }}}1
