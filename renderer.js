// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


const {app, dialog, globalShortcut} = require('electron')

app.on('ready', () => {
    globalShortcut.register('CommandOrControl+Alt+K', () => {
        dialog.showMessageBox({
            type: 'info',
            message: 'Success!',
            detail: 'You pressed the registered global shortcut keybinding.',
            buttons: ['OK']
        })
    })

    dialog.showMessageBox({
        type: 'info',
        message: 'Success!',
        detail: 'You pressed the registered global shortcut keybinding.',
        buttons: ['OK']
    })
})

app.on('will-quit', () => {
    globalShortcut.unregisterAll()
})