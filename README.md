# Codechallenge
https://static.tvmaze.com/apidoc/

### Installation
1. `npm i`

### Run the application
1. `npm run dev`

### NOTES
- That with the attrToProp is a tryout actually to write better readable components
- Please don't judge the ugly css (not even scss). I didn't put the focus on styling
- Also, no formatters or whatsoever are installed to save time.. So if you see: 
  {{example}} instead of {{ example }}... That is the cause ;-)
  
- The favorites hasn't been set in a state management tool
- I agree on: yes this code can be much cleaner.. however to write the most pure clean code it'll just take time so out of scope here

### Demo
🔗 [Link to live demo](https://danielgroen.github.io/abnamro-codechallenge/)


___
# Explenation of the code

## Languages and Framework
- Nuxt 3 (based on vue3)
- scss
- vite
- npm
- node 18
- Github pages
- Github pipelies
- Vitest (jest)
- Typescript
- Prettier

## Nuxt 3
For this project i've used nuxt3. Why? To practice my vue3 / nuxt3 more. I already have lots of nuxt2 experience. nuxt3 i think one year now. So i wanted to practice that more. The concept is on many sides the same. However some parts are different or written in a different way. These assignments are good ways to improve your skills :-)!

## Composition api
I've used the composition api over the options api. With the composition api you can fragment your code more. I do like to make a folder for a component, which includes the vue component file and a seperated composable file.
You can store your logic here. Actually i've stolen that concept a bit from the MVC model: making the controller part seperated. (saw that in Angular as well)

## Folder structure
I'd like to keep my folders clean. For example: I don't want a `composable` folder with 40 files. So i've made a differences between global files and local files.

So for example, if a component need a global composable, the ${filename}.composable.ts will come inside the `~/composable` folder. If the composable is specific about a component. the file will be in the component folder.

This concept also applies for the following files:
- Utils
- Constants
- Services
- jest test files
- Type files

## Styling
I'd like to keep my styling clean. I've seen a lot of styling frameworks. The thing of using css frameworks is that you'll sooner or later be in a `!important` jungle. I've also used scoped scss. And project wide i've used some global styling, these includes vars, mixins and fn() files. Excellent to reuse these handy files (also in the scoped css files).

## Atom design
I've devided my components into 3 folders: Atoms, Molecules, Organisms. The smallest components will be Atoms and the biggest components will be Organisms. On top of that you'll have the nuxt layout and the nuxt pages.

## Complex logic
I don't have any state managers on this project. That's a good example of how i work: keep it clean. Don't make things overcomplex when you don't need to.