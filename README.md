cf issue https://github.com/gladly-team/next-firebase-auth/issues/434
  
This example showcase a usage of next-firebase-auth without private key.  

# Install

Dependencies are installed using  
`npm i` or `yarn`

# Start

It can be started with `yarn dev` or `npm run dev` 


# Steps to reproduce

- Start a firebase emulator with `firebase emulators:start --project your-awesome-project`
- Go to http://locahost:3000
- You will see the `TypeError: Cannot read properties of undefined (reading 'credential')` error
