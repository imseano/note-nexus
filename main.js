// Import the electron library
const { app, BrowserWindow } = require('electron');

// Keep a reference to the main window to prevent it from being garbage collected
let mainWindow;

// Create the main application window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the welcome screen
  mainWindow.loadURL(`data:text/html;charset=utf-8,<!DOCTYPE html>
  <html>
    <head>
      <title>Welcome</title>
    </head>
    <body>
      <h1>Welcome to My App!</h1>
      <p><a href="#" onclick="goToHelloPage()">Go to Hello Page</a></p>
      <script>
        function goToHelloPage() {
          const { ipcRenderer } = require('electron');
          ipcRenderer.send('navigate-to-hello');
        }
      </script>
    </body>
  </html>`);

  // Handle window close
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Listen for app to be ready
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Handle navigation to the "hello" page
const { ipcMain } = require('electron');
ipcMain.on('navigate-to-hello', () => {
  if (mainWindow) {
    mainWindow.loadURL(`data:text/html;charset=utf-8,<!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <h1>Hello</h1>
        <p><a href="#" onclick="goBack()">Go Back</a></p>
        <script>
          function goBack() {
            const { ipcRenderer } = require('electron');
            ipcRenderer.send('navigate-back');
          }
        </script>
      </body>
    </html>`);
  }
});

// Handle navigation back to the welcome page
ipcMain.on('navigate-back', () => {
  if (mainWindow) {
    createWindow();
  }
});

