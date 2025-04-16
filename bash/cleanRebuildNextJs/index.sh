#!/bin/bash
# The line above must be the first line and tells the system to use the Bash shell to run this script

# Print a message to indicate the start of cleanup
echo "🧹 Cleaning up node_modules and lock files..."

# Delete the node_modules directory to remove all installed dependencies
rm -rf node_modules

# Check if a pnpm lock file exists, and if it does, delete it
if [ -f "pnpm-lock.yaml" ]; then
  rm pnpm-lock.yaml
  echo "🔒 pnpm lock file removed"

# Otherwise, check if an npm lock file exists and delete it
elif [ -f "package-lock.json" ]; then
  rm package-lock.json
  echo "🔒 npm lock file removed"

# Otherwise, check if a yarn lock file exists and delete it
elif [ -f "yarn.lock" ]; then
  rm yarn.lock
  echo "🔒 yarn lock file removed"
fi

# Print message that dependencies are about to be reinstalled
echo "📦 Reinstalling dependencies..."

# Check which package manager is installed, then reinstall dependencies using it
if command -v pnpm &> /dev/null; then
  # If pnpm is installed, use it
  pnpm install
elif command -v yarn &> /dev/null; then
  # If yarn is installed and pnpm isn't, use yarn
  yarn install
else
  # Default to npm if neither pnpm nor yarn is found
  npm install
fi

# Print message about rebuilding the project
echo "🏗️ Rebuilding project..."

# Check if it's a Next.js project by looking for next.config.js
if [ -f "next.config.js" ]; then
  # Attempt to build the project with whichever package manager works
  npm run build || pnpm run build || yarn build
fi

# Final success message
echo "🚀 Done! Ready to run the dev server."