First steps:

- Install `brew` for macos m1, see: https://mac.install.guide/homebrew/index.html

- Install Rust `nightly` and `wasm-opts`, see: https://soroban.stellar.org/docs/tutorials/build-optimized

- Run:
```
rustup component add rust-src --toolchain nightly-aarch64-apple-darwin
npm install --legacy-peer-deps
```
