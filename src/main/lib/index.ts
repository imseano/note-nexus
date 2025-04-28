import { getKey } from '@shared/keys'
import { FileInfo } from '@shared/models'
import { dialog } from 'electron'
import { readdir } from 'fs-extra'
import path from 'path'

export const getAPIKey = (): string => {
  const key = getKey()
  return key
}

export const openFolder = async (): Promise<string> => {
  const { filePaths, canceled } = await dialog.showOpenDialog({ properties: ['openDirectory'] })

  if (canceled) {
    throw new Error('No folder selected')
  }

  //console.info(`Selected folder: ${filePaths[0]}`)

  return filePaths[0]
}

export const getFilesFromDir = async (dir: string): Promise<FileInfo[]> => {
  console.info(`Selected folder: ${dir}`)

  const files = await readdir(dir, {
    withFileTypes: true
  })

  const filteredFiles = files.filter((file) => file.isDirectory() || file.name.endsWith('.md'))

  const fileList: FileInfo[] = filteredFiles.map((file) => ({
    title: file.name,
    isDir: file.isDirectory(),
    path: path.join(dir, file.name),
    parentDir: dir
  }))

  //fileList.forEach((file) => {
  // console.log(file.title)
  //  console.log(file.path)
  //})

  return fileList
}
