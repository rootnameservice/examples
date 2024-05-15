import { getName } from '@ensdomains/ensjs/public'
import { createPublicClient, http } from 'viem'
import { root } from 'rootnameservice'

const client = createPublicClient({
  chain: root,
  transport: http(),
})

getName(client, {
  address: "0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f"  
}).then(console.log)

/* output

{
  name: 'rns.root',
  match: true,
  reverseResolverAddress: '0x870bC2604D6EAC536c791A603bFDE1A1448e168e',
  resolverAddress: '0x870bC2604D6EAC536c791A603bFDE1A1448e168e'
}

*/