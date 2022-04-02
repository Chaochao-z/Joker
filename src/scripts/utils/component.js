function component(component, bindingEl) {
    component.setup && component.setup();
    bindingEl.innerHTML = component.render();
    component.mounted && component.mounted();
}
export default component;