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
echo "Buscando raíz del proyecto..."
PROJECT=$(find "$TMPDIR" -name "astro.config.mjs" | head -1 | xargs dirname)
if [ -z "$PROJECT" ]; then
  echo "No se encontró astro.config.mjs"
  exit 1
fi
echo "Proyecto encontrado en: $PROJECT"
cp -r "$PROJECT/." .
rm -rf "$TMPDIR"
echo "Sincronizando con GitHub..."
git add .
git stash
git pull --rebase
git stash pop
echo "Subiendo a GitHub..."
git add .
git commit -m "update" || echo "Nada nuevo que commitear"
git push
echo "✅ Listo!"
