import { getKey } from '@shared/keys'

export const getAPIKey = (): string => {
    const key = getKey()
    return key
}
