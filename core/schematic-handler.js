// core/schematic-handler.js
export class SchematicHandler {
    // Converts your internal map data to a .bloxdschem string
    static encode(worldData) {
        const jsonString = JSON.stringify(worldData);
        // Bloxd schematics often use Base64 to prevent easy text editing
        return btoa(jsonString); 
    }

    // Decodes a .bloxdschem file back into usable JSON
    static decode(schemString) {
        try {
            const decoded = atob(schemString);
            return JSON.parse(decoded);
        } catch (e) {
            console.error("Invalid .bloxdschem file format", e);
            return null;
        }
    }
}
