const plugin = require("tailwindcss/plugin");

//addUtilities allow us to create static classes
const tableCaption = plugin(function ({ addUtilities }) {
    addUtilities({
    //class we want to create
        ".caption-bottom": {
            "caption-side": "bottom",
        },
        ".caption-top": {
            "caption-side": "top",
        },
    });
});

module.exports = tableCaption;