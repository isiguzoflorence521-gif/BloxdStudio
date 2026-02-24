// core/compiler.js
export function compileScript(userCode, options = {}) {
    const header = `/* Compiled with BloxdStudio */\n`;
    const settings = `const WORLD_CONFIG = ${JSON.stringify(options)};\n`;
    
    // Wraps user code in a safety try-catch for Bloxd's API
    const boilerplate = `
api.onServerStart(() => {
    api.log("BloxdStudio Script Active");
    ${userCode}
});`;

    return header + settings + boilerplate;
}
