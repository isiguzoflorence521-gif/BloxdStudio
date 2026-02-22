import * as THREE from 'three';

let currentTool = 'place';

export function setTool(tool) {
    currentTool = tool;
}

export function handleMouseClick(event, camera, scene) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    // Calculate mouse position
    mouse.x = (event.clientX - 260) / (window.innerWidth - 260) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children);

    if (currentTool === 'place') {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        
        // Simple placement on grid
        cube.position.set(Math.round(raycaster.ray.at(5).x), 0.5, Math.round(raycaster.ray.at(5).z));
        scene.add(cube);
    }
}
