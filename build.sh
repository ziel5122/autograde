NODE_ENV=production webpack -p --display-error-details
cp -r static build
babel server -d build/server
cp package.json build
rm autograde.zip
zip -r autograde.zip build/*
