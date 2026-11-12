# CAW Web Viewer — Ethereum (read-only)

A read-only web viewer for the **independent community deployment** of
Gilgamesh's CAW design on Ethereum (names on L1, posts on Base). It is not
an official service.

- **Read-only by design.** Timeline, name list / search, and name profiles
  (including deposited CAW balances) are read from public CAW nodes with
  plain GET requests. This page never asks for a signature, a key, or a
  wallet connection — posting, liking, minting and sending live in the
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
