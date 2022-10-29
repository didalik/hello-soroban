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
