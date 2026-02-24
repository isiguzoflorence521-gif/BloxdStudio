api.onPlayerJoin((player) => {
    api.log(`Player ${player.name} joined!`);
});

api.onCommand((player, cmd) => {
    if(cmd === "spawn") {
        api.setPlayerPosition(player.id, 0, 10, 0);
    }
});
