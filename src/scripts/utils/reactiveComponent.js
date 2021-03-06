import {generateRandId} from "./generators";

async function newComponent(componentFile, element) {
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
        async render() {
            const el = document.createElement('div');
            el.id = this.id;
            el.innerHTML = await componentFile.render();
            element.appendChild(el);
            this.mounted();
        },
        mounted() {
            componentFile.mounted(this.data());
            this.component().renderBoundElements();
        }
    }
    await component.render();
}

export default newComponent;