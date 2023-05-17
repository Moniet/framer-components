version=$(pnpm view code-components version)
version_slice=$(echo $version | cut -c 1-1)
echo "v"$version_slice