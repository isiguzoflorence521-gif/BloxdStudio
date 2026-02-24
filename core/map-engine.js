// core/map-engine.js
export class MapEngine {
    constructor() {
        this.worldData = []; // Stores {x, y, z, blockId}
    }

    addBlock(x, y, z, blockId) {
        // Check if block already exists at coordinates
        this.worldData = this.worldData.filter(b => !(b.x === x && b.y === y && b.z === z));
        this.worldData.push({ x, y, z, blockId });
        console.log(`Block ${blockId} added at ${x}, ${y}, ${z}`);
    }

    exportToJSON() {
        return JSON.stringify(this.worldData);
    }
}
