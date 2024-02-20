import { ethers } from 'ethers'
import { verify } from './src/verify'
import { dnsTxtDocStore } from './test/fixtures/v2/wrapped/dns-txt-doc-store'
import util from 'util'
// verify(documentGoerliValidWithToken, { network: 'goerli' }).then((err) =>
//     console.log(err)
// )

// const goerliVerifier = verificationBuilder({ network: 'goerli' })
// goerliVerifier(documentGoerliValidWithToken).then((val) => {
//     console.log({ val })
// })

const localProvider = new ethers.providers.JsonRpcProvider(
    'http://127.0.0.1:8545'
)

verify(dnsTxtDocStore, { provider: localProvider }).then((val) => {
    console.log(
        util.inspect(val, {
            showHidden: false,
            depth: null,
            colors: true,
        })
    )
    // console.log(val)
})
