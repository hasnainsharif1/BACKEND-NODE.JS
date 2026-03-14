// Generate the jwt secret key by using node 

`node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`