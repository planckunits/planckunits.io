#/bin/bash
set -e

git config user.email guild0105@gmail.com
git config user.name elzup

touch out/.nojekyll

npm run gh-pages -- -r https://$GH_TOKEN@github.com/planckunits/planckunits.github.io.git --dotfiles -b master
