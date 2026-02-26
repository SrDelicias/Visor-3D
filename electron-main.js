import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Estas dos líneas son necesarias para que las rutas funcionen en modo "módulo"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "Visor Dental CAD - Laboratorio",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  // Quitamos la barra de menús para estética profesional
  win.setMenuBarVisibility(false);

  // Cargamos tu index.html usando la ruta absoluta correcta
  win.loadFile(path.join(__dirname, 'dist/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});