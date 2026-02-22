export function exportToBloxd(scene) {
    const data = { blocks: [] };
    scene.traverse((object) => {
        if (object.isMesh && object.geometry.type === 'BoxGeometry') {
            data.blocks.push({ x: object.position.x, y: object.position.y, z: object.position.z });
        }
    });
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "map.bloxdschem";
    link.click();
}
