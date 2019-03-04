import Vue from 'vue'
import App from './App.vue'


// RENDERIZANDO, A PARTIR DA FUNÇÃO "h" UM COMPONENTE DENTRO DA DIV NA PÁGINA INDEX.HTML
new Vue({    
    render: h => h(App) // render usando a arrow function já com return    
}).$mount("#app") // padrão usado ao criar uma aplicação

// new Vue({
//     el: '#app',
//     render(createElement) {
//         return createElement(App)
//     }
// })