import { ethers } from 'ethers';
import { networks } from 'rootnameservice'

const provider = new ethers.providers.JsonRpcProvider('https://root.rootnet.live/archive', networks.root);

provider.resolveName(
  'rns.root'
).then(console.log)

/* output

0x03E53414a65AF0723D8dAb6dFBA768E061E5d81f

*/