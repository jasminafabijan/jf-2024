#!/usr/bin/env bash
# Keep node_modules from syncing via iCloud (folders named .nosync are skipped).
# Project source still syncs; each device keeps its own local install.

set -e
cd "$(dirname "$0")/.."

if [ -L node_modules ]; then
  echo "✓ Already set up: node_modules is a symlink to node_modules.nosync"
  exit 0
fi

if [ -d node_modules ]; then
  echo "Moving node_modules to node_modules.nosync (not synced by iCloud)..."
  mv node_modules node_modules.nosync
  ln -s node_modules.nosync node_modules
  echo "✓ Done. node_modules now points to node_modules.nosync."
  echo "  On the other device, run: npm install && npm run setup-icloud"
  exit 0
fi

if [ -d node_modules.nosync ]; then
  echo "Creating symlink node_modules -> node_modules.nosync..."
  ln -s node_modules.nosync node_modules
  echo "✓ Done."
  exit 0
fi

echo "First run: npm install"
echo "Then run again: npm run setup-icloud"
exit 1
