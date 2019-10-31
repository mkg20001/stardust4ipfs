'use strict'

const get = require('dlv')
const Stardust = require('libp2p-stardust')

module.exports = ({ datastore, peerInfo, peerBook, options, config }) => {
  // TODO: allow adjusting stardust conf transports & muxers

  const stardust = new Stardust({
    id: peerInfo.id,
    softFail: get(options, 'config.Stardust.Softfail',
      get(config, 'Stardust.Softfail', true))
  })

  return {
    config: {
      peerDiscovery: {
        stardust: {
          enabled: get(options, 'config.Discovery.Stardust.Enabled',
            get(config, 'Discovery.Stardust.Enabled', true))
        }
      }
    },
    modules: {
      transport: [
        stardust
      ],
      discovery: [
        stardust.discovery
      ]
    }
  }
}
