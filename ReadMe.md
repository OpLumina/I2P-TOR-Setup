# Using I2P with Tor Browser via about:config

## Prerequisites

- Tor Browser installed
- I2P router running locally (HTTP proxy on `127.0.0.1:4444`)

---

## Steps

### 1. Open about:config

Type `about:config` in the address bar and press Enter. Accept the warning if prompted.

### 2. Set each preference

Use the search bar at the top to find each preference by name, then double-click to edit it.

| Preference | Value |
|---|---|
| `network.proxy.type` | `1` |
| `network.proxy.http` | `127.0.0.1` |
| `network.proxy.http_port` | `4444` |
| `network.proxy.ssl` | `127.0.0.1` |
| `network.proxy.ssl_port` | `4444` |
| `network.proxy.no_proxies_on` | `127.0.0.1` |
| `network.proxy.allow_hijacking_localhost` | `false` |
| `network.proxy.failover_timeout` | `0` |
| `extensions.torlauncher.start_tor` | `false` |
| `extensions.torlauncher.prompt_at_startup` | `false` |
| `extensions.torbutton.use_nontor_proxy` | `true` |
| `network.dns.disablePrefetch` | `true` |
| `network.dns.disablePrefetchFromHTTPS` | `true` |
| `security.OCSP.enabled` | `0` |
| `security.OCSP.require` | `false` |

### 3. Restart Tor Browser

Close and reopen Tor Browser for all settings to take effect.

### 4. Verify

Navigate to an `.i2p` address. If the I2P router is running and the proxy is set correctly, the page will load. If not, check that the I2P router is running and its HTTP proxy is enabled on port 4444.

---

## Notes

- These settings **replace** Tor with I2P — the Tor network will not be used while these are active.
- To revert, set `extensions.torlauncher.start_tor` back to `true` and `network.proxy.type` back to `5` (SOCKS5/Tor default).
- The I2P router console is accessible at `http://127.0.0.1:7657` in a separate browser.