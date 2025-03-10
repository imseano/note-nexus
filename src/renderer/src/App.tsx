import Versions from './components/Versions'
import FileLoader from './components/FileLoader'
import electronLogo from './assets/electron.svg'
import { Content, RootLayout, Sidebar } from '@/components'
import { ActionButton, LLMInput, LLMOutput, TestLLMButton, TitleBar } from './components'
import { LuNotebookText } from "react-icons/lu";


function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  //const openHandler = (): void => window.electron.ipcRenderer.send('open-file-dialog')
  return (

    <div className="flex flex-col h-screen">
    <TitleBar><LuNotebookText /></TitleBar>
    <RootLayout>
      <Sidebar className="p-2">Hi there</Sidebar>
      <Content className="p-2 border-1 bg-zinc-900/50 border-1-white/20">
      <LLMInput />
      <TestLLMButton />
      <LLMOutput />
      </Content>
    </RootLayout>
    </div>
  )
}

export default App
