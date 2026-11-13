# CAW Web Viewer — Ethereum

A web viewer for the **independent community deployment** of
Gilgamesh's CAW design on Ethereum (names on L1, posts on Base). It is not
an official service.

- **Reads need no wallet.** Timeline, name list / search, and name profiles
  (including deposited CAW balances) are read from public CAW nodes with
  plain GET requests. Visitors who connect **MetaMask** can also post,
  like, recaw and mint a name from this page — signing happens entirely
  inside MetaMask; this page never sees or stores a private key. The same
  features live in the
  [Android app](https://github.com/QL1-Infinite42-Guppy-Histoire/eth-caw-app).
- **Node discovery.** The viewer merges the static
  [`nodes.json`](https://ql1-infinite42-guppy-histoire.github.io/eth-caw/nodes.json)
  with the dynamic node registry
  (`eth-caw-registry`), probes candidates, and connects to the first node
  that answers for this deployment (networkId 1). When no node is online
  it says so honestly and keeps looking every minute.
- A specific node can be forced with `?node=https://…` in the URL.

## Run a node

See the one-touch installer and guide on the
[introduction site](https://ql1-infinite42-guppy-histoire.github.io/eth-caw/#run-a-node).

## Links

- Introduction: https://ql1-infinite42-guppy-histoire.github.io/eth-caw/
- Transparency report: https://ql1-infinite42-guppy-histoire.github.io/eth-caw-transparency/
- App: https://github.com/QL1-Infinite42-Guppy-Histoire/eth-caw-app

MIT License.
