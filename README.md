# But first - DEMO
https://vue-3-webpack-boilerplate-v2.netlify.app/

**NOTE:** There is no backend API running that means: `Authentication`/`Authorization`, `Xhr Upload` and `Sephiroth grid` playground/demo showcases are not working properly. 


# Vue 3 Vite Boilerplate V2
Vue.js@3.x with vite (for webpack version visit here: https://github.com/Uraharadono/Vue3WebpackBoilerplateV2)

A Vue 3 Starter Boilerplate using Vite. 
Also used/implemented:
 - `Typescript 4`
 - `Prettier`
 - `Vue Router 4` 
 - `Pinia 2` 
 - `Vuelidate`
 - `NProgress`
 - `Vue Qr code`
 - `Bootstrap 5`  - using only `CSS` modules we need, not whole bundle and not `JS` stuff (we are going to implement those our-self)
 - `Authorization` and `Authentication` pages with logic that works with my server side project (can be found here: https://github.com/Uraharadono/Net7CoreApiBoilerplate)
 - Custom **Tabs component** - With support for both **route (navigation)** and **component content** based tab content. My own authoring, quite simple, lightweight, easy to use. Please credit if you use it. 
 - Custom **Xhr File Upload component** - this component supports quite the amount of history while also using my implementation of `Form Post` to post data to server
 - Custom **Autocomplete component** - my own authoring, quite simple, lightweight, easy to use. Please credit if you use it. 
 - Custom **Toggle component**
 - Custom **Data table component** I named `** Sephiroth grid **` - My baby. Data table of my own authoring. Insenely extensable and customazible while being quite simple and lightweight, easy to use. Please credit if you use it.
 - Custom **Modal component**
 - Custom **Are you sure you want to delete (modal) component**
 - Custom **Loader 1 & 2 components**
 - Custom **Auth guard directive logic (using JWT tokens)**
 - `Axios` wrapper - wanted it to look similar to old `jQuery Ajax` and to support uploading files out of the box
 - `Datepicker`
 - `FontAwesome` icons - I have not implemented `FontAwesome` using this way: https://fontawesome.com/docs/web/use-with/vue/
	even tho' merging and combining icons seems like great idea, because I want to be able to use icons dynamically (using string interpolation).
	I have used modified version of: https://fontawesome.com/docs/web/setup/host-yourself/webfonts
	to load fonts myself. Instead of what is shown in tutorial, I have installed `FontAwesome` from `npm` (https://fontawesome.com/docs/web/setup/packages)
	and imported the `.scss` files myself.
	Bundle size is *1Mb bigger*, and with my experience from before, after usage of ~20ish `.svg` icons, it bloats to almost same size.


## Why I created this repo 
I had my vue 3 webpack project for some time now. I got a lot of requests for vite version, so here it is. I don't "ride" vite in my day to day job, but what I encountered in my personal projects, this setup works just fine.


## Commands

```bash
# Install node package manager dependencies.
npm install

# Start development server.
npm run build

# Compile production bundle. This will automatically analyze your bundle as well.  
npm run production
```

## Architecture

```text
├─ public           // static assets.
├─ src
│  ├─ assets        // assets such as images or font files.
│  ├─ components    // universal Vue components.
│  ├─ router        // view's routers config.
│  ├─ stores        // Pinia stores.
│  ├─ typings       // typescript .d.ts files.
│  └─ views         // pages.
```
