# hello-soroban
Capturing the first steps for posterity. The first steps:

- use [rust.vim plugin](https://github.com/rust-lang/rust.vim)
- use [vim-javascript plugin](https://github.com/pangloss/vim-javascript)
- create starter:
``` bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

## Links

- [Soroban Docs](https://soroban.stellar.org/docs/)
- [Git Book on Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Learning Rust](https://doc.rust-lang.org/book/ch01-03-hello-cargo.html)
- [Learning React](https://reactjs.org/tutorial/tutorial.html)
- [Learning Next.js](https://nextjs.org/learn/basics/create-nextjs-app)

## Install
```bash
git clone git@github.com:didalik/hello-soroban.git
cd hello-soroban
git submodule update --init --recursive
```

## Join Futurenet
```bash
      docker run --rm -it \
      --name stellar \
      -p 8000:8000 \
      stellar/quickstart:soroban-dev \
      --futurenet \
      --enable-soroban-rpc
```
Source: https://github.com/tyvdh/soroban-pioneer-quest/blob/main/.gitpod.yml#L9-L14 - many thanks, Tyler! :)

## Use Freighter, fund your new account
[Freighter Docs](https://docs.freighter.app/docs/guide/introduction)
```bash
curl --location --request GET 'https://friendbot-futurenet.stellar.org?addr=GCFJ5IGBT66OBII3WKAZAZHULKRUWRYBQNMGDXJ3LCPI7XGDXWE2HZPP'
```
Special thanks to: https://pullanswer.com/questions/use-the-cli-to-deploy-contract-against-futurenet

### Use the CLI to deploy contract to futurenet

Keypair:
- GD7BCUTI6YPVGYM7TKCMS4TYPGPWXLJ2QZ6AALXXJL6SPID7UQXIRKM3
- SATSTNUESANXDTF3XGCGMCA3VTCSLTAP35S4MNFSVTID7CRFXLNTT7LK

Fund
```
curl --location --request GET 'https://friendbot-futurenet.stellar.org?addr=GD7BCUTI6YPVGYM7TKCMS4TYPGPWXLJ2QZ6AALXXJL6SPID7UQXIRKM3'
```

My desktop `miasrv` is amd64, has the latest `rustup` and `rustc`:
```
alec@miasrv ~ $ uname -a
Linux miasrv 5.4.0-131-generic #147-Ubuntu SMP Fri Oct 14 17:07:22 UTC 2022 x86_64 x86_64 x86_64 GNU/Linux
alec@miasrv ~ $ rustup -V
rustup 1.25.1 (bb60b1e89 2022-07-12)
info: This is the version for the rustup toolchain manager, not the rustc compiler.
info: The currently active `rustc` version is `rustc 1.64.0 (a55dd71d5 2022-09-19)`
```

Build latest CLI v0.1.2 (takes some time):
```
alec@miasrv ~/process/stellar/hello-soroban (main) $ $(git clone https://github.com/stellar/soroban-cli.git; cd ./soroban-cli; git checkout v0.1.2; cargo install --path .)
...
    Finished release [optimized] target(s) in 6m 37s
   Replacing /home/alec/.cargo/bin/soroban
    Replaced package `soroban-cli v0.1.0 (/home/alec/process/stellar/hello-soroban/soroban-cli)` with `soroban-cli v0.1.2 (/home/alec/process/stellar/hello-soroban/soroban-cli)` (executable `soroban`)
```

Build the `hello_world` wasm contract:
```
alec@miasrv ~/process/stellar/hello-soroban (main) $ $(git clone https://github.com/stellar/soroban-examples.git; cd ./soroban-examples/hello_world; cargo build --target wasm32-unknown-unknown --release)
...
    Finished release [optimized] target(s) in 1m 50s
```

Deploy the wasm contract to futurenet:
```
alec@miasrv ~/process/stellar/hello-soroban (main) $ soroban deploy \
>   --wasm soroban-examples/target/wasm32-unknown-unknown/release/soroban_hello_world_contract.wasm \
>   --rpc-url http://localhost:8000/soroban/rpc \
>   --secret-key SATSTNUESANXDTF3XGCGMCA3VTCSLTAP35S4MNFSVTID7CRFXLNTT7LK \
>   --network-passphrase "Test SDF Future Network ; October 2022" \
>   --salt 0
success
6c0bfad9a0ba7ce51b9e540726bd036107ed624f06f2c9192b2613f0c4f7d7d8
```

Invoke the wasm contract locally:
```
alec@miasrv ~/process/stellar/hello-soroban (main) $ soroban invoke \
> --id 6c0bfad9a0ba7ce51b9e540726bd036107ed624f06f2c9192b2613f0c4f7d7d8 \
> --fn hello --arg kids --cost --footprint \
> --secret-key SATSTNUESANXDTF3XGCGMCA3VTCSLTAP35S4MNFSVTID7CRFXLNTT7LK \
> --rpc-url http://localhost:8000/soroban/rpc \
> --network-passphrase "Test SDF Future Network ; October 2022"
Footprint: {"readOnly":[{"contractData":{"contractId":[108,11,250,217,160,186,124,229,27,158,84,7,38,189,3,97,7,237,98,79,6,242,201,25,43,38,19,240,196,247,215,216],"key":{"static":"ledgerKeyContractCode"}}}],"readWrite":[]}
success
["Hello","kids"]
```

Invoke the contract over LAN:
```
alec@MacBook-Air ~ $ soroban invoke \
> --id 6c0bfad9a0ba7ce51b9e540726bd036107ed624f06f2c9192b2613f0c4f7d7d8 \
> --fn hello --arg kids --cost --footprint \
> --secret-key SATSTNUESANXDTF3XGCGMCA3VTCSLTAP35S4MNFSVTID7CRFXLNTT7LK \
> --rpc-url http://miasrv:8000/soroban/rpc \
> --network-passphrase "Test SDF Future Network ; October 2022"
Footprint: {"readOnly":[{"contractData":{"contractId":[108,11,250,217,160,186,124,229,27,158,84,7,38,189,3,97,7,237,98,79,6,242,201,25,43,38,19,240,196,247,215,216],"key":{"static":"ledgerKeyContractCode"}}}],"readWrite":[]}
success
["Hello","kids"]
```
