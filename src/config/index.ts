import { version } from '../../manifest.json'

const APIS = {
  randomQuotes: 'https://api.quotable.io/random',
}

function getMetadata() {
  return {
    devMode: import.meta.env.DEV,
    version,
    creator: 'cr0wg4n',
    respositoryURL: 'https://github.com/cr0wg4n/dev-station-extension',
    homeURL: 'https://github.com/cr0wg4n',
  }
}

export {
  APIS,
  getMetadata,
}
