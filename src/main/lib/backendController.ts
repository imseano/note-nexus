import { exec } from 'child_process'
import fs from 'fs'
import path from 'path'

export const launchBackend = () => {
  const platform = process.platform
  const backendPath = path.join(__dirname, '..', '..', 'nexus-rag')

  let command = ''
  if (platform === 'win32') {
    console.log(`Windows detected. Launching backend from ${backendPath}`)
    command = `${backendPath}\\startup.bat`
    if (!fs.existsSync(command)) {
      console.error(`Command not found: ${command}`)
    }
    console.log(`Command: ${command}`)
  } else {
    console.log('rip')
  }

  const subprocess = exec(command, { cwd: backendPath })

  subprocess.stdout?.on('data', (data) => {
    console.log(`stdout: ${data}`)
  })
  subprocess.stderr?.on('data', (data) => {
    console.error(`stderr: ${data}`)
  })

  return subprocess
}
