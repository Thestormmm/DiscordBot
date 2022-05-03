module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "!help --> Shows help !"
        }
    });
};