// core/texture-engine.js
export const generateTextureManifest = (packName, author) => {
    return {
        formatVersion: 1,
        header: {
            name: packName,
            description: `Created with BloxdStudio by ${author}`,
            uuid: crypto.randomUUID()
        },
        modules: [
            {
                type: "resources",
                uuid: crypto.randomUUID(),
                version: [1, 0, 0]
            }
        ]
    };
};
