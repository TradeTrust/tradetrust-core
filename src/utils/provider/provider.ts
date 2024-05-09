import { providers } from 'ethers'

export type providerType = 'alchemy' | 'infura' | 'jsonrpc'

export interface ProviderDetails {
    network?: string
    providerType?: providerType
    url?: string
    apiKey?: string
}

/**
 * Generate Provider generates a provider based on the defined options or your env var, if no options or env var was detected, it will generate a provider based on the default values.
 * Generate Provider using the following options: (if no option is specified it will use the default values)
 * @param {Object} ProviderDetails - Details to use for the function to successfully generate a provider.
 * @param {string} ProviderDetails.network - The network in which the provider is connected to, i.e. "homestead", "mainnet", "sepolia"
 * @param {string} ProviderDetails.providerType - Specify which provider to use: "infura", "alchemy" or "jsonrpc"
 * @param {string} ProviderDetails.url - Specify which url for JsonRPC to connect to, if not specified will connect to localhost:8545
 * @param {string} ProviderDetails.apiKey - If no apiKey is provided, a default shared API key will be used, which may result in reduced performance and throttled requests.
 */
export const generateProvider = (
    options?: ProviderDetails
): providers.Provider => {
    if (!!options && Object.keys(options).length === 1 && options.apiKey) {
        throw new Error(
            'We could not link the apiKey provided to a provider, please state the provider to use in the parameter.'
        )
    }

    const network =
        options?.network || process.env.PROVIDER_NETWORK || 'homestead'
    const provider =
        options?.providerType || process.env.PROVIDER_ENDPOINT_TYPE || 'infura'
    const url = options?.url || process.env.PROVIDER_ENDPOINT_URL || ''
    const apiKey =
        options?.apiKey ||
        (provider === 'infura' && process.env.INFURA_API_KEY) ||
        process.env.PROVIDER_API_KEY ||
        ''

    if (!!options && Object.keys(options).length === 1 && url) {
        return new providers.JsonRpcProvider(url)
    }
    switch (provider) {
        case 'infura':
            return apiKey
                ? new providers.InfuraProvider(network, apiKey)
                : new providers.InfuraProvider(network)

        case 'alchemy':
            if (apiKey) {
                return network === 'sepolia'
                    ? new providers.JsonRpcProvider(
                          `https://eth-sepolia.g.alchemy.com/v2/${apiKey}`,
                          network
                      )
                    : new providers.AlchemyProvider(network, apiKey)
            }
            return network === 'sepolia'
                ? new providers.JsonRpcProvider(
                      `https://eth-sepolia.g.alchemy.com/v2/`,
                      network
                  )
                : new providers.AlchemyProvider(network)

        case 'jsonrpc':
            return new providers.JsonRpcProvider(url)

        default:
            throw new Error(
                'The provider provided is not on the list of providers. Please use one of the following: infura, alchemy or jsonrpc.'
            )
    }
}
