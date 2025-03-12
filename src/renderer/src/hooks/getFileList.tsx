import { fileListAtom, rootDirAtom } from '@renderer/store'
import { useAtomValue, useSetAtom } from 'jotai'
import { useEffect } from 'react'

export const getFileList = () => {
  const rootDirectory = useAtomValue(rootDirAtom)
  const setFiles = useSetAtom(fileListAtom)
  const fileList = useAtomValue(fileListAtom)

  const loadFileList = async () => {
    if (!rootDirectory) {
      return []
    }
    const fileList = await (window as any).context.getFilesFromDir(rootDirectory)

    setFiles(fileList)
    return fileList
  }

  useEffect(() => {
    if (rootDirectory) {
      loadFileList()
    }
  }, [rootDirectory])

  return { fileList, loadFileList }
}
