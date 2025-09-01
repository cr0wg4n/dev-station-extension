import type { LoremIpsumProps } from './types'
import { loremIpsum } from 'lorem-ipsum'

function generateLoremIpsum({
  format,
  count,
  paragraphLowerBound,
  paragraphUpperBound,
}: LoremIpsumProps): string {
  return loremIpsum({
    format,
    count,
    units: 'paragraph',
    paragraphLowerBound,
    paragraphUpperBound,
  })
}

export {
  generateLoremIpsum,
}
