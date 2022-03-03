import {generateRandId} from "./generators";

function aComponent(componentFile) {
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
                proxyHandler: {
                    get(target) {
                        return Reflect.get(...arguments)
                    },
                    set(target, prop, newValue) {
                        target[prop] = newValue;
                        context.component().renderBoundElements();
                        return true;
                    }
                }
            }
        },
        data() {
            return new Proxy(componentFile.data, this.component().proxyHandler);
        },
        render() {
            const el = document.createElement('div');
            el.id = this.id;
            el.innerHTML = componentFile.render();
            document.getElementById('app').appendChild(el);
            this.mounted();
        },
        mounted() {
            componentFile.mounted(this.data());
            this.component().renderBoundElements();
        }
    }
    component.render();
}

export default aComponent;