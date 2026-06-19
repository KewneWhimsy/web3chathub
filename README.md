# web3chathub

Browse the Web3Summit Berlin agenda and chat live, peer-to-peer, with other attendees in each session's room — automatically identified by the Polkadot app you're using, no login, no server in between.

Unofficial companion app, independent and not affiliated with the Web3 Foundation or the official organisers.

---

## For developers

### Stack

- **Astro** + **Tailwind CSS** for the static site.
- **Alpine.js** for all client-side interactivity (no HTMX, no server-rendered fragments).
- **`@parity/product-sdk-signer`** to resolve the visitor's account automatically from the Polkadot Host running the app — no login form, no password. Falls back to Substrate dev accounts (`connect('dev')`) when run outside a Host, e.g. in local dev.
- **`@parity/product-sdk-statement-store`** for ephemeral event chat rooms, published over Polkadot's Statement Store (gossiped, allowance-gated, no chat history kept past the statement TTL). Raw WebRTC libraries can't reach the network from inside a Polkadot Product's sandbox, so signaling routes through the Host API instead.
- The event agenda is a static file (`src/data/events.json`); favourites are kept in the browser's `localStorage`.

### Local development

```bash
npm install
npm run dev
```

Opens on `http://localhost:4321` by default. Outside a Polkadot Host, the identity layer automatically uses dev accounts (Alice, Bob, ...) so you can test without installing Polkadot Desktop.

```bash
npm run build
```

Runs `astro check` then builds the static site to `dist/`.

### Deployment

This Product is published with [`playground-cli`](https://github.com/paritytech/playground-cli) (`pg deploy`), which builds the site, uploads it to the Polkadot Bulletin Chain, and registers it under a `.dot` name. See the [Polkadot Apps docs](https://docs.polkadot.com/) for the full deploy flow.
