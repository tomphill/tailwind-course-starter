const plugin = require("tailwindcss/plugin");

//provides fix for firefox and chrome on input outline for email subscription.
const outlineSolid = plugin(function({addUtilities}){
    //allows use to access utilities
    addUtilities({
        ".outline-solid": {
            "outline-style": "solid"
        }
    })
});

module.exports = outlineSolid; 