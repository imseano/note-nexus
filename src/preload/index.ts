import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('context', {
      getAPIKey: () => ipcRenderer.invoke('getKey'),
      openFolder: () => ipcRenderer.invoke('openFolder'),
      getFilesFromDir: (...args: [string]) => ipcRenderer.invoke('getFilesFromDir', ...args)
    })
  } catch (error) {
    console.error(error)
  }
} else {
  throw new Error('contextBridge is not available')
}
