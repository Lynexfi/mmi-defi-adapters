import { Answers } from '../newAdapter2Command'

export function writeOnlyDeFiAdapter({
  protocolKey,
  adapterClassName,
  productId,
}: Pick<
  Answers,
  'protocolKey' | 'adapterClassName' | 'productId' | 'chainKeys'
>) {
  return `import { z } from 'zod'
  import { WriteOnlyDeFiAdapter } from '../../../../core/adapters/writeOnlyAdapter'
  import { CacheToFile } from '../../../../core/decorators/cacheToFile'
  import {
    ProtocolDetails,
    PositionType,
    AssetType,
  } from '../../../../types/adapter'
  import {
    WriteActions,
    WriteActionInputSchemas,
  } from '../../../../types/writeActions'
  import { Protocol } from '../../../protocols'
  import { GetTransactionParams } from '../../../supportedProtocols'
  import { NotImplementedError } from '../../../../core/errors/errors'
  
  export class ${adapterClassName} extends WriteOnlyDeFiAdapter {
    productId = '${productId}'
  
    /**
     * Update me.
     * Add your protocol details
     */
    getProtocolDetails(): ProtocolDetails {
      return {
        protocolId: this.protocolId,
        name: '${protocolKey}',
        description: '${protocolKey} defi adapter',
        siteUrl: 'https:',
        iconUrl: 'https://',
        positionType: PositionType.Supply,
        chainId: this.chainId,
        productId: this.productId,
        assetDetails: {
          type: AssetType.NonStandardErc20,
        },
      }
    }
  
    /**
     * Update me.
     * Add logic to build protocol token metadata
     * We need protocol token names, decimals, and also linked underlying tokens
     */
    @CacheToFile({ fileKey: 'protocol-token' })
    async buildMetadata() {
      throw new NotImplementedError()
  
      return {}
    }
  
    /**
     * Retrieves transaction parameters for specific actions based on provided inputs.
     *
     * Implementation Steps:
     * 1. Implement logic for handling predefined actions (e.g., Supply, Withdraw). Consider the examples provided as a starting point.
     * 2. For new actions (e.g., Stake, Flash Loan), first extend the "WriteActions" object to include these new actions.
     * 3. Export a WriteActionInputs object that satisfies WriteActionInputSchemas from this file.
     * 4. Implement the method logic for each action, extracting necessary inputs and populating transactions accordingly.
     *
     * Example Implementations:
     * - Deposit: Extract 'asset', 'amount', 'onBehalfOf', and 'referralCode' from inputs. Use these to populate transactions with 'poolContract.supply.populateTransaction(...)'.
     * - Withdraw: Follow a similar approach, adapting the parameters and transaction population as necessary for the action.
     *
     * Ensure the implementation supports all main end-user actions. Developers are encouraged to incorporate error handling tailored to specific business logic requirements.
     *
     * TODO: Replace code with actual implementation logic according to your protocol's requirements and the actions supported.
     */
    getTransactionParams({
      _action,
      _inputs,
    }: Extract<
      GetTransactionParams,
      { protocolId: typeof Protocol.${protocolKey}; productId: '${productId}' }
    >): Promise<{ to: string; data: string }> {
      throw new NotImplementedError()
      // Example switch case structure for implementation:
      // switch (action) {
      //   case WriteActions.Deposit: {
      //     const { asset, amount, onBehalfOf, referralCode } = inputs
      //     return poolContract.supply.populateTransaction(
      //       asset,
      //       amount,
      //       onBehalfOf,
      //       referralCode,
      //     )
      //   }
      //   case WriteActions.Withdraw: {
      //     const { asset, amount, to } = inputs
      //     return poolContract.withdraw.populateTransaction(asset, amount, to)
      //   }
      // }
    }
  }
  
  export const WriteActionInputs = {
    [WriteActions.Deposit]: z.object({}), // <- update me accordingly
    [WriteActions.Withdraw]: z.object({}), // <- update me accordingly
  } satisfies WriteActionInputSchemas
  `
}
