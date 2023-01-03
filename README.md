# Welcome to learning Tailwind

This is material was pulled from a [Udemy Tailwind CSS](https://www.udemy.com/course/tailwind-css-zero-to-hero/learn/lecture/34264324#overview) and cloned from [Github](https://github.com/tomphill/tailwind-course-starter), thank you so much for the content creator.

## Notes on Tailwind

### Build

See the package.json `"tw:build": "npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"`, is where we enter and build our tailwind css for out of the box.

If we look at [input file](./src/input.css) and the @tailwind (organization technique):

- base: resets, provides the baseline for all the tailwind classes. Makes sure that our tags are uniform.
- components: personally created properties classes.
- utilities: being able to adding classes specific to tailwind. e.g. text-lg. These are atomic classes, only set one or two properties. Similar to how bootstrap functions.

These can be levels of specificity. The order matters, just like regular css. The lower on the list they are on, it will override the specificity.

The input will then be used to compile everything with tailwind is provided to the output for the build of the application.

`npm run tw:build` - creates application in a [dist folder](./dist/output.css).
