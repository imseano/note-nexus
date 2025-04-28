import { fileListLoadingAtom, rootDirAtom } from '@renderer/store'
import { useSetAtom } from 'jotai'
import { ComponentProps } from 'react'

export const FileLoader = ({ ...props }: ComponentProps<'button'>) => {
  const setRootDir = useSetAtom(rootDirAtom)
  const setFileListLoading = useSetAtom(fileListLoadingAtom)

  const handleFileLoad = async () => {
    const filename = await (window as any).context.openFolder()
    console.log(filename)
    const fileList = await (window as any).context.getFilesFromDir(filename)
    console.log(fileList)
    setRootDir(filename)
    setFileListLoading(true)

    const res = await fetch('http://localhost:8000/load-folder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        folder_path: filename.replace(/\\/g, '\\\\')
      })
    })

    if (!res.ok) {
      const errorData = await res.json()
      console.error('Server error:', errorData)
      throw new Error(`Server responded with status ${res.status}`)
    }

    const data = await res.json()
    console.log('Server response:', data.message)
  }

  return (
    <button onClick={handleFileLoad} {...props}>
      Select Markdown Folder
    </button>
  )
}
