import * as THREE from 'three';
import { handleMouseClick } from '../editor/tools.js';

export const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

export function initEngine() {
    const container = document.getElementById('viewport-container');
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Light & Grid
    const light = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(light);
    const grid = new THREE.GridHelper(20, 20, 0x888888, 0x444444);
    scene.add(grid);

    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    // Click Event
    container.addEventListener('mousedown', (event) => handleMouseClick(event, camera, scene));

    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();
}
