const plugin = require("tailwindcss/plugin");

//matchUtilities allows us to create dynamically render based on input provided in square brackets.  
const animationDelay = plugin(({matchUtilities, theme}) => {
    matchUtilities(
        {
        //base class name
        "animation-delay": (value) => { //the value is the dynamic input provided within the html.
            return {
                //provide the newly rendered key value pair
                animationDelay: value
                };
            }, 
        },
    { //include the returned values
        values: theme("animationDelay")
    }
    ); 
    }, // end of original call back
    {
    //default classes - like the 4px for values provided to attributes.
    theme: {
        animationDelay : {
            100: "100ms",
            200: "200ms",
            300: "300ms",
            400: "400ms",
            500: "500ms",
            600: "600ms",
            700: "700ms",
            800: "800ms",
            900: "900ms",
            1000: "1000ms",
        }
    }
}); 

module.exports = animationDelay; 