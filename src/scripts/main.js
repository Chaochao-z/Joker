import '../css/style.scss'

import game from "./components/Game";

function generateRandId() {
    return Math.random().toString(36).substring(2, 10);
}


const component = {
    id: generateRandId(),
    component() {
        const context = this;
        return {
            renderBoundElements: () => {
                document.querySelectorAll(`#${this.id} *[s-bind]`).forEach((el) => {
                    const boundProp = el.getAttribute('s-bind');
                    el.innerText = this.data()[boundProp];
                })
            },
            proxyHandler: () => {
                return {
                    get(target) {
                        return Reflect.get(...arguments)
                    },
                    set(target, prop, newValue) {
                        target[prop] = newValue;
                        context.component().renderBoundElements();
                        return true;
                    }
                }
            },
        }
    },
    data() {
        return new Proxy(game.data, this.component().proxyHandler());
    },
    render() {
        const el = document.createElement('div');
        el.id = this.id;
        el.innerHTML = game.render();
        document.getElementById('app').appendChild(el);
        this.mounted();
    },
    mounted() {
        game.mounted(this.data());
        this.component().renderBoundElements();
    }
}

component.render();
