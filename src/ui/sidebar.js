import { setTool, setCurrentBlock } from '../editor/tools.js';

let textureDatabase = [];

export async function setupUI() {
    // 1. Fetch the full 1,709 texture list
    try {
        const response = await fetch('assets/textures/texture_list.json');
        const data = await response.json();
        textureDatabase = data.textures || []; // Array of 1,709 objects
    } catch (e) {
        console.error("Failed to load 1,709 textures:", e);
    }

    const palette = document.getElementById('block-palette');
    const searchInput = document.getElementById('texture-search');

    // 2. Render Function (with Lazy Loading)
    const renderPalette = (filter = "") => {
        palette.innerHTML = ""; // Clear current view
        
        const filtered = textureDatabase.filter(t => 
            t.name.toLowerCase().includes(filter.toLowerCase()) || 
            t.id.toLowerCase().includes(filter.toLowerCase())
        );

        filtered.forEach(block => {
            const item = document.createElement('div');
            item.className = 'block-item';
            item.title = `${block.name}\nTool: ${block.tool}\nLocation: ${block.location}`;
            
            // Use CSS variables or direct style for the 1,709 images
            item.style.backgroundImage = `url(assets/textures/default/${block.texture})`;
            
            item.onclick = () => {
                setCurrentBlock(block.id);
                document.querySelectorAll('.block-item').forEach(el => el.classList.remove('selected'));
                item.classList.add('selected');
            };

            palette.appendChild(item);
        });
    };

    // 3. Search Event Listener
    searchInput.addEventListener('input', (e) => renderPalette(e.target.value));

    // 4. Initial Tool Buttons
    document.getElementById('btn-place').onclick = () => setTool('place');
    document.getElementById('btn-delete').onclick = () => setTool('delete');

    // Initial Render
    renderPalette();
}
