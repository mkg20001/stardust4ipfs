# stardust4ipfs

Add stardust to *your* IPFS bundle

# Usage

```JavaScript
const node = await IPFS.create({
  libp2p: {
    overrideFunction: require('stardust4ipfs')
  },
  config: {
    Addresses: {
      Swarm: [
        '/dns4/stardust.mkg20001.io/tcp/443/wss/p2p-stardust'
      ]
    }
  }
})

// your instance with stardust is ready
```
