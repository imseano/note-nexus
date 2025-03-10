import { Content, RootLayout, Sidebar } from '@/components'
import { LuNotebookText } from 'react-icons/lu'
import { LLMInput, LLMInputForm, LLMOutput, TestLLMButton, TitleBar } from './components'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  //const openHandler = (): void => window.electron.ipcRenderer.send('open-file-dialog')
  return (
    <div className="flex flex-col h-screen">
      <TitleBar>
        <LuNotebookText />
        <p className="p-2">NoteNexus</p>
      </TitleBar>
      <RootLayout>
        <Sidebar className="p-2">I'm just a placeholder don't look at me</Sidebar>
        <Content className="p-2 border-1 bg-zinc-900/50 border-1-white/20">
          <LLMInputForm />
          <TestLLMButton />
          <LLMInput />
          <LLMOutput />
        </Content>
      </RootLayout>
    </div>
  )
}

export default App
