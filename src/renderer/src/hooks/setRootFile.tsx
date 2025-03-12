import { rootDirAtom } from '@renderer/store'
import { useAtom } from 'jotai'

export const setRootFile = (path: string) => {
  const [rootDir, setRootDir] = useAtom(rootDirAtom)
  setRootDir(path)
}
