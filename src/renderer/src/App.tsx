import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  //const openHandler = (): void => window.electron.ipcRenderer.send('open-file-dialog')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">Powered by electron-vite</div>
      <div className="text">
        Welcome to <span className="react">Note</span>
        <span className="ts">Nexus</span>
      </div>
      <p className="tip">
        Choose an option from the bottom to get started
      </p>
      <div className="actions">
        <div className="action">
        <a target="_blank" rel="noreferrer" onClick={openHandler}>
            Open Existing Nexus
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            Create A New Nexus
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
