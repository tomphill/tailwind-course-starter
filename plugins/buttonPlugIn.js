const plugin = require("tailwindcss/plugin");
const { default: lightOrDarkColor } = require("@check-light-or-dark/color");
//^ check for light or dark 


const buttonPlugin = plugin(function ({
    addComponents,
    matchComponents,
    theme,
}) {

    // console.log(theme("spacing")["0.5"]);
    addComponents({
        ".btn": {
            display: "inline-block",
            cursor: "pointer",
            fontWeight: "bold",
            //match spacing with the rest of tailwind
            padding: `${theme("spacing.2")} ${theme("spacing.4")}`,  //referenced via key value by . or []
            borderRadius: theme("borderRadius").lg,
        },
    });
    
    // console.log(theme("colors"));
    //get the colors
    for (let key in theme("colors")) {
    if (typeof theme("colors")[key] !== "string") {
        //get the shades
        for (let shade in theme("colors")[key]) {
            const colorType = lightOrDarkColor(theme("colors")[key][shade]); //returns light or dark
            addComponents({
             //these attributes will not be applied to all button of any shade.
                [`.btn-${key}-${shade}`]: {
                    backgroundColor: theme("colors")[key][shade],
                    color: colorType === "dark" ? "white" : "black",
                    },
                });
            }
        }
    };

    matchComponents({
    btn: (value) => {
        return {
            backgroundColor: value,
            color: lightOrDarkColor(value) === "dark" ? "white" : "black",
            };
        },
    });
});

module.exports = buttonPlugin;
