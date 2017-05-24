npm install
NODE_ENV=production webpack -p --display-error-details
cp -r static build
babel server -d build/server
cp package.json build
rm autograde.zip
cd build
mkdir temp
zip -r ../autograde.zip *
