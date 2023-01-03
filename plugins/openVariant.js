const plugin = require("tailwindcss/plugin"); //allows use to get access to this functionality

//inside plugin we are going to create a callback to the helper function of addVariant which we are deconstructing to gain access to.
const openVariant = plugin(function({addVariant}){
    //our first argument is the newly created class we want to use.
    //our second argument is allowing us to take different built in classes and smashing them together, "merge".
    addVariant("group-open", ":merge(.group).open &");
    //this provides the same functionality but to a different class name, but also includes the sibling selector.
    addVariant("peer-open", ":merge(.group).open ~ &");
    
    // & specifically - it appends our class name to the built in attributes, allowing for more specificity for the generated output css.
});

module.exports = openVariant