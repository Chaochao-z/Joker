function component(component, bindingEl) {
    const render = () => {
        component.setup && component.setup();
        bindingEl.innerHTML = component.render();
        component.mounted && component.mounted();
    }
    return {
        component,
        bindingEl,
        render,
    };
}
export default component;