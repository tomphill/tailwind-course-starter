const plugin = require("tailwindcss/plugin"); //allows use to get access to this functionality

//inside plugin we are going to create a callback to the helper function of addVariant which we are deconstructing to gain access to.
const openVariant = plugin(function({addVariant}){
    //our first argument is the newly created class we want to use.
    //our second argument is allowing us to take different built in classes and smashing them together, "merge".
    addVariant("group-open", ":merge(.group).open &");
    // & specifically - 
});

module.exports = openVariant