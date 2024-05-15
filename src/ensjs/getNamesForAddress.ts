import { root } from "rootnameservice";
import { getNamesForAddress } from "@ensdomains/ensjs/subgraph";
import { createPublicClient, http } from 'viem'
const client = createPublicClient({
    chain: root,
    transport: http(),
})

getNamesForAddress(client, {
    address: "0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f"
}).then(console.log);

/* output
[
  {
    id: '0xee0c14ff4aac9142d34852db7915d5ac4f4e8adcf9d9ff0766131e56f2d53358',
    name: 'trn.root',
    truncatedName: 'trn.root',
    labelName: 'trn',
    labelhash: '0x71c55fc496a7ffa72fa841bcf918c6560b985114b40a131188ba31800a0eef09',
    isMigrated: true,
    parentName: 'root',
    createdAt: { date: 2024-05-14T03:29:00.000Z, value: 1715657340000 },
    registrationDate: { date: 2024-05-14T03:29:00.000Z, value: 1715657340000 },
    expiryDate: { date: 2025-05-14T03:29:00.000Z, value: 1747193340000 },
    fuses: { parent: [Object], child: [Object] },
    owner: '0x44640D662A423d738D5ebF8B51E57AfC0f2cf4Df',
    registrant: '0x44640D662A423d738D5ebF8B51E57AfC0f2cf4Df',
    wrappedOwner: '0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f',
    resolvedAddress: '0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f',
    relation: {
      owner: false,
      registrant: false,
      wrappedOwner: true,
      resolvedAddress: true
    }
  },
  {
    id: '0x4237a0503aaf4dc10c6fb70f7d33237ca45d2a8f22f5fd04e9ef3ac84138e31d',
    name: 'underground.root',
    truncatedName: 'underground.root',
    labelName: 'underground',
    labelhash: '0xb672c2e7b209370c39bb378492fedd27f5a1738c57a62e752329164719b94d24',
    isMigrated: true,
    parentName: 'root',
    createdAt: { date: 2024-05-10T04:48:52.000Z, value: 1715316532000 },
    registrationDate: { date: 2024-05-10T04:48:52.000Z, value: 1715316532000 },
    expiryDate: { date: 2025-05-10T04:48:52.000Z, value: 1746852532000 },
    fuses: { parent: [Object], child: [Object] },
    owner: '0x44640D662A423d738D5ebF8B51E57AfC0f2cf4Df',
    registrant: '0x44640D662A423d738D5ebF8B51E57AfC0f2cf4Df',
    wrappedOwner: '0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f',
    resolvedAddress: '0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f',
    relation: {
      owner: false,
      registrant: false,
      wrappedOwner: true,
      resolvedAddress: true
    }
  },
  ...
]

*/