# Maintainer: Dawid Buchwald <dawid.buchwald@hotmail.com>

pkgname=node-contacts-api
pkgver=0.0.1
pkgrel=1
pkgdesc="Node Contacts API - sample Node.js based API for Contacts management"
url="https://github.com/dbuchwald/node-contacts-api"
arch=('any')
license=('MIT')
depends=('nodejs' 
	       'mariadb')
install="$pkgname.install"
source=("$pkgname.js"
	      "$pkgname.service"
        "ufw-$pkgname")
sha256sums=('924509638dca8e0704811fbff4fe134b72fb53e0a072e51f8c920919ee786f0f'
            '77f424574f243cf00ad3fe46d7aa913207ed9c77989cb011c618d0611958baf7'
            '153f332f215ac7de9a5c2e89568bcc3e7af56ad0043b66e8f11b6114b5f3030c')

package() {
  cd "${srcdir}"

  # main JavaScript program
  install -Dm644 $pkgname.js "$pkgdir/opt/$pkgname/$pkgname.js"

  # service descriptor
  install -Dm644 $pgkname.service "$pkgdir/etc/systemd/system/$pkgname.service"

  # UFW application descriptor
  install -Dm644 ufw-$pkgname "$pkgdir/etc/ufw/applications.d/ufw-$pkgname"

  # license
  # install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}

# vim:set ts=2 sw=2 et:

