const plugin = require("tailwindcss/plugin");

const buttonPlugIn = plugin(({ addComponents, matchComponents, theme}) => {
    // console.log(theme)
    addComponents({
        ".btn": {
            display: "inline-block",
            cursor: "pointer",
            fontWeight: "bold",
            //match spacing with the rest of tailwind
            padding: `${theme("spacing")["2"]} ${theme("spacing.4")} `, //referenced via key value.
            borderRadius: theme("borderRadius").lg
        }
    });

    matchComponents({

    });
});

module.export = buttonPlugIn;