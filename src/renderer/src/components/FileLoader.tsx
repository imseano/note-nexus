//const { ipcRenderer } = window.require('electron');

function FileLoader() {
  const handleFileLoad = async () => {
    window.electron.ipcRenderer.invoke('select-files').then((files) => {
      console.log('Selected files:', files)
    })
  }

  return (
    <div>
      <button onClick={handleFileLoad}>Select Markdown Folder</button>
    </div>
  )
}

export default FileLoader
