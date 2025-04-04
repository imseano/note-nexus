import { FileInfo } from '@shared/models'
import { atom } from 'jotai'

//const counter = atom(0)

//const [count, setCounter] = useAtom(counter)

export const rootDirAtom = atom<string | null>(null)

export const fileListAtom = atom<FileInfo[]>([])

export const contextAtom = atom<string | null>(null)

//**const loadFileList = async () => {
// const myRoot = await (window as any).context.getRootDir()
// const fileList = await (window as any).context.getFilesFromDir/(myRoot)

// return fileList
//}

//const fileListAsync = atom<FileInfo[] | Promise<FileInfo[]>>(loadFileList())

//export const fileList = unwrap(fileListAsync, (prev) => prev)
