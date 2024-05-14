import { createPublicClient, defineChain, http } from 'viem'
import { addresses } from 'rootnameservice'
import { normalize } from 'viem/ens'

const root = defineChain({
  id: 7668,
  name: 'The Root Network',
  nativeCurrency: { name: 'Ripple', symbol: 'XRP', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://root.rootnet.live/archive'],
    },
  },
  contracts: {
    ...addresses[7668],
  },
  subgraphs: {
    ens: {
      url: 'https://subgraph.rootnameservice.com/subgraphs/name/graphprotocol/ens/graphql',
    },
  },
  testnet: true,
})

const client = createPublicClient({
  chain: root,
  transport: http(),
})
console.log(addresses)

client.getEnsAddress({
  name: normalize("legend.root"),
}).then(console.log)

