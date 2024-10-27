import { test, expect } from '@jest/globals'

import { mnemonic } from './env'
import { Ed25519Keypair } from '../src/keypairs/index'
import { Ed25519Keypair as Ed25519KeypairSui } from '@mysten/sui/keypairs/ed25519'

test('sui', () => {
  const kp = Ed25519Keypair.deriveKeypair(mnemonic)
  const address = Ed25519KeypairSui.fromSecretKey(
    kp.getSecretKey()
  ).toSuiAddress()

  expect(address).toBe(
    '0xb1d6c3e4b3a5f7d7444dbcc175ed7792d3bdc862e3f3be18a3cad84522ac34fd'
  )
})
