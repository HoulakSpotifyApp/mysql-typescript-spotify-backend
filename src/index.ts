import {App } from './app'


async function main(){
    //instancia de la clase app
    const app = new App();
   await app.listen();
}
main();