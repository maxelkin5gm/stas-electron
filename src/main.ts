import {app, BrowserWindow} from 'electron';
import path from 'path';

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })


    // for dev
    mainWindow.loadURL('http://localhost:3000')
    mainWindow.webContents.openDevTools()

    // for prod
    // mainWindow.loadURL(`file://${path.join(__dirname, 'react/index.html')}`)
    // mainWindow.setMenu(null);
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
