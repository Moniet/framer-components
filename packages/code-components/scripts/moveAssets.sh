version=$(pnpm view code-components version)
version_slice=$(echo $version | cut -c 1-1)
cp -R src/public "v"$version_slice
echo "copied public folder"