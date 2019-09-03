# Maintainer: Dawid Buchwald <dawid.buchwald@hotmail.com>

pkgname=node-contacts-api
pkgver=0.0.2
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
            'a8167e7967a396415353c8e7ad9733e1b179321596a73855055174c8e6f356bb'
            'd711dd57bc7531d9406aed6be04823cae805f2cc4e8ffd02dfb67e52ffc453aa')

package() {
  cd "${srcdir}"

  # main JavaScript program
  install -Dm644 $pkgname.js "$pkgdir/opt/$pkgname/$pkgname.js"

  # service descriptor
  install -Dm644 $pkgname.service "$pkgdir/usr/lib/systemd/system/$pkgname.service"

  # UFW application descriptor
  install -Dm644 ufw-$pkgname "$pkgdir/etc/ufw/applications.d/ufw-$pkgname"

  # license
  # install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}

# vim:set ts=2 sw=2 et:

