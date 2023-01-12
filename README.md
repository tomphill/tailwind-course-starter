# Welcome to learning Tailwind

This is material was pulled from a [Udemy Tailwind CSS](https://www.udemy.com/course/tailwind-css-zero-to-hero/learn/lecture/34264324#overview) and cloned from [Github](https://github.com/tomphill/tailwind-course-starter), thank you so much for the content creator.

## Notes on Tailwind

The [official documentation](https://tailwindcss.com/docs)

Recommended that you include the Pretty and Tailwind CSS IntelliSense extensions.
If you have the IntelliSense that it will allow you to hover on the Tailwind classes to see the output.
Tailwind does not render dynamically, you should depend of library functionalities to do this for you instead and have those rules supersede Tailwind's.

If you make any changes to your config file, then you will need to restart and rebuild.

### Base Elements

Since Tailwind removes all tag formatting as a default, you can include your formatting for a specific tag within the [input](./src/input.css) within the base layer. Provide the tag name, like your would to regular CSS then add `@apply` and the relevant Tailwind formatting that should automatically be applied.

### Build

See the package.json `"tw:build": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"`, is where we enter and build our tailwind css for out of the box.

If we look at [input file](./src/input.css) and the @tailwind (organization technique):

- base: resets, provides the baseline for all the tailwind classes. Makes sure that our tags are uniform.
- components: personally created properties classes.
- utilities: being able to adding classes specific to tailwind. e.g. text-lg. These are atomic classes, only set one or two properties. Similar to how bootstrap functions.

These can be levels of specificity. The order matters, just like regular css. The lower on the list they are on, it will override the specificity.

The input will then be used to compile everything with tailwind is provided to the output for the build of the application.

`npm run tw:build` - creates application in a [dist folder](./dist/output.css).

### Watch

With the `--watch` flag on our build command, we are watching for changes   If you go into the [tailwind config](./tailwind.config.js) looking at the content array, that is what we will determine if the dist content will need to be rerendered if they include tailwind classes.

### Preview

To see changes while working, just right click on the index.html and click `Open with Default Browser`. Or you may see another browser `Open with` and the default browser with a > next to it. If you click on the > you should be able to select the browser you want to open with.

#### Trouble shooting

If you are not seeing the changes you made, go into your terminal and make sure your `tw:build` command is still running.

### Measurements

Tailwind goes in groups of 4 pixels. Numbers for top, bottom, left, right, margin and padding will be increased by multiples of 4 based on the number provided to them after the -.

If you want to specify the value instead of using units of 4, after - then [ ] and place the specific value between the square brackets.

#### Calc

If you are using the calc function within this, make sure there is either no space between variables or add underscores for spaces.

#### Percentages

You can use percentages by using fractions in place of the percentage number and symbol.

#### Negative Values

If you are trying to specify a negative value you can add a - to the front of the attribute or inside of the specific value inside [].

### Fonts

From google front, you import the style without the style tag.

Then you will include `@layer` with a level of specificity and then inside of your html brackets, include the font-family you will now be importing.

This project uses [font-awesome](https://fontawesome.com/) to icons.

### Animations

The [default animations for tailwind](https://tailwindcss.com/docs/animation), here we want to discuss [custom animations](https://blog.logrocket.com/creating-custom-animations-tailwind-css/).

To add animations you need to go into the [config](./tailwind.config.js) and `extend` the themes. This allows use access to the tailwind default values.

We then want to access the keyframes and provide a new value that we will be creating the animation under.

After we have provided the layout for the new animation you need to append/concatenate to your animations for tailwind providing the name to the animation lists.

This animation created in the example also includes it's own plugin to provide deplay.

### Gradient

While Gradients require a to and from value after they have been specified, you can add more colors by including the term `via` with the additional colors. See the timeline section for an example.

### Components

Should be considered last if you are working with another framework that would allow you to create a component of their own.

Using `@layer` again, you will reference the `components`, then nest the .class-name. Then using `@apply` provide all the tailwind attributes and close.

This does increase the size of your build for your css.

### Plugin - Variants

These are items that don't exist within tailwind, but we want to create our own functionality. We have to import the plugin from tailwind and then allows us to merge various functionality from tailwind together. See [openVariant](./plugins/openVariant.js) for examples.
Newly created plugins will need to be added to the [tailwind config](./tailwind.config.js), in the plugins array.

#### Keywords

- group: This will allow you to gather children elements together.

- md: Can be using in conjunction with other elements to specific screen sizes.
The way md is using on this project, we create two separate css options based on screen size.

#### Specific

##### elements

You can also use this on specific elements as well, e.g.
`bg-[url('./path/to/element')]`
#### Peer Classes

Peer classes are a way to target functionality based on a sibling element.
Keep this in mind if you a ~ as this is considered the "sibling selector".

#### Dark mode

Tailwind provides are option for dark mode based on your preferences on browser or computer. Just use the `dark:` option within your classes.

Make sure that you have the `darkMode: "class"` also get on your [tw config file](./tailwind.config.js).
