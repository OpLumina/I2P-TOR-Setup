// ============================================================
// PROXY — Override Tor, route through I2P HTTP proxy instead
// ============================================================
user_pref("network.proxy.type", 1);
user_pref("network.proxy.http", "127.0.0.1");
user_pref("network.proxy.http_port", 4444);
user_pref("network.proxy.ssl", "127.0.0.1");
user_pref("network.proxy.ssl_port", 4444);
user_pref("network.proxy.no_proxies_on", "127.0.0.1");
user_pref("network.proxy.allow_hijacking_localhost", false);
user_pref("network.proxy.failover_timeout", 0);

// ============================================================
// DISABLE TOR LAUNCHER, USE I2P PROXY INSTEAD
// ============================================================
user_pref("extensions.torlauncher.start_tor", false);
user_pref("extensions.torlauncher.prompt_at_startup", false);
user_pref("extensions.torbutton.use_nontor_proxy", true);

// ============================================================
// DNS — prefetch disable not guaranteed by Tor Browser base
// when not using a SOCKS proxy
// ============================================================
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

// ============================================================
// OCSP — disable to prevent clearnet leaks on .i2p certs
// Tor Browser leaves this on assuming exit nodes handle it
// ============================================================
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", false);