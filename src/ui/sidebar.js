import { setTool } from '../editor/tools.js';
import { exportToBloxd } from '../loaders/schematic.js';
import { scene } from '../core/engine.js';

export function setupUI() {
    document.getElementById('btn-place').onclick = () => setTool('place');
    document.getElementById('btn-delete').onclick = () => setTool('delete');
    document.getElementById('btn-export').onclick = () => exportToBloxd(scene);
}
