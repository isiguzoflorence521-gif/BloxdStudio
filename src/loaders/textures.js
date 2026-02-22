export async function loadBloxdTextures() {
    const response = await fetch('assets/textures/texture_list.json');
    const textureNames = await response.json();
    const loader = new THREE.TextureLoader();
    
    const textureMap = {};
    textureNames.forEach(name => {
        textureMap[name] = loader.load(`assets/textures/default/${name}.png`);
    });
    
    return textureMap;
}
