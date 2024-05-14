import { getName } from '@ensdomains/ensjs/public'
import { createPublicClient, defineChain, Address, http } from 'viem'
import { addresses } from 'rootnameservice'

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

// 0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f => legend.root
getName(client, {
  address: "0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f" as Address, // put address you want to resolve
}).then(console.log)
