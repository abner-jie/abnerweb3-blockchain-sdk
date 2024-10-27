import dotenv from 'dotenv'

dotenv.config({
  path: [process.cwd() + '/.env.dev', process.cwd() + '/.env.dev.local'],
  override: true,
})

// testnet env
export const mnemonic: string = process.env.mnemonic!
