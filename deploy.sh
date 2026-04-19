#!/bin/bash
echo "Buscando ZIP..."
ZIP=$(ls /sdcard/Download/*.zip 2>/dev/null | head -1)
if [ -z "$ZIP" ]; then
  echo "No se encontró ningún ZIP en Descargas"
  exit 1
fi
echo "Descomprimiendo $ZIP..."
TMPDIR=~/tmp_deploy
rm -rf "$TMPDIR"
mkdir "$TMPDIR"
unzip -o "$ZIP" -d "$TMPDIR"
SUBDIR=$(ls "$TMPDIR" | head -1)
cp -r "$TMPDIR/$SUBDIR/." .
rm -rf "$TMPDIR"
echo "Subiendo a GitHub..."
git add .
git commit -m "update"
git push
echo "✅ Listo!"
