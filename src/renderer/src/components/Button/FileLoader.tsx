import { rootDirAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { ComponentProps } from 'react'

export const FileLoader = ({ ...props }: ComponentProps<'button'>) => {
  const setRootDir = useSetAtom(rootDirAtom)

  const handleFileLoad = async () => {
    const filename = await (window as any).context.openFolder()
    console.log(filename)
    const fileList = await (window as any).context.getFilesFromDir(filename)
    console.log(fileList)
    setRootDir(filename)
  }

  return (
    <button onClick={handleFileLoad} {...props}>
      Select Markdown Folder
    </button>
  )
}
