const { app, BrowserWindow } = require("electron")


console.log("HELLO THERE!");

const createWindow = () => {
        const win = new BrowserWindow({
		width: 800,
		height: 600
	})

	win.loadFile("app/index.html")
}

app.whenReady().then(() => {
	createWindow()

})
