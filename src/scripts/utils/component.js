function component(component, bindingEl) {
    const render = () => {
        component.setup && component.setup();
        bindingEl.innerHTML = component.render();
        component.mounted && component.mounted();
    }
    const destroy = () => {
        bindingEl.innerHTML = '';
    }
    return {
        component,
        bindingEl,
        destroy,
        render,
    };
}
export default component;