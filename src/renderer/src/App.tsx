import {
  Content,
  FileList,
  FileLoader,
  LLMInput,
  LLMInputForm,
  LLMOutput,
  RootLayout,
  Sidebar,
  TestLLMButton,
  TitleBar
} from '@/components'
import { fileListLoadingAtom } from '@renderer/store'
import { useAtomValue } from 'jotai'
import { LuNotebookText } from 'react-icons/lu'

function App(): JSX.Element {
  const useFileListLoading = useAtomValue(fileListLoadingAtom)
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  //const openHandler = (): void => window.electron.ipcRenderer.send('open-file-dialog')
  return (
    <div className="flex flex-col h-screen">
      <TitleBar>
        <LuNotebookText />
        <p className="p-2">NoteNexus</p>
        <FileLoader className="border  border-zinc-400/50 hover:bg-zinc-600/50 transition-colors duration-100" />
      </TitleBar>
      <RootLayout>
        <Sidebar className="p-2">
          <FileList />
        </Sidebar>
        <Content className="p-2 border-1 bg-zinc-900/50 border-1-white/20">
          {useFileListLoading ? (
            <>
              <LLMInputForm />
              <TestLLMButton />
              <LLMInput />
              <LLMOutput />
            </>
          ) : (
            <>
              <p>No file collection loaded rip</p>
            </>
          )}
        </Content>
      </RootLayout>
    </div>
  )
}

export default App
