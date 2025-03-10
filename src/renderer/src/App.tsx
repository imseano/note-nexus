import Versions from './components/Versions'
import FileLoader from './components/FileLoader'
import electronLogo from './assets/electron.svg'
import { Content, RootLayout, Sidebar } from '@/components'

function App(): JSX.Element {
  //const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  //const openHandler = (): void => window.electron.ipcRenderer.send('open-file-dialog')
  return (
    <RootLayout>
      <Sidebar className="p-2">Hi there</Sidebar>
      <Content className="p-2 border-1 bg-zinc-900/50 border-1-white/20">I'm not sure</Content>
    </RootLayout>
  )
}

export default App
