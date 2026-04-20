#!/bin/bash
echo "Buscando ZIP..."
ZIP=/sdcard/Download/siny_astro.zip
if [ ! -f "$ZIP" ]; then
  echo "No se encontró siny_astro.zip en Descargas"
  exit 1
fi
echo "Descomprimiendo..."
TMPDIR=~/tmp_deploy
rm -rf "$TMPDIR"
mkdir "$TMPDIR"
unzip -o "$ZIP" -d "$TMPDIR"
SUBDIR=$(ls "$TMPDIR" | head -1)
cp -r "$TMPDIR/$SUBDIR/." .
rm -rf "$TMPDIR"
echo "Sincronizando con GitHub..."
git pull --rebase
echo "Subiendo a GitHub..."
git add .
git commit -m "update"
git push
echo "✅ Listo!"
