# contacts-app-aur

Sample PKGBUILD configuration for simple Node.js application. Contains `.service` entry for Systemd and UFW rule to expose app to inbound traffic.

Post installation message lists commands to enable service and allow new UFW rule.

This implementation has been loosely based on:
- <https://www.axllent.org/docs/view/nodejs-service-with-systemd/>
- <https://aur.archlinux.org/packages/nvm/>

See [PKGBUILD](https://wiki.archlinux.org/index.php/PKGBUILD) in Arch Wiki for more information.
