import  bar from "./bar";
import { createApp } from 'vue' 
import App from './App.vue' 

const foo =  require('./foo');
foo.sayHello();
console.log('[bar]:',bar)


const app = createApp(App) 
app.mount('#app') 