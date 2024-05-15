import { getAddressRecord } from "@ensdomains/ensjs/public";
import { createPublicClient, http } from 'viem'
import { root } from 'rootnameservice'

const client = createPublicClient({
    chain: root,
    transport: http(),
})

getAddressRecord(client, {
    name: "rns.root",
    coin: 'ETH'
}).then(console.log)

/* output

{
  id: 60,
  name: 'eth',
  value: '0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f'
}

*/