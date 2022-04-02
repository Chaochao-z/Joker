function component(component, bindingEl) {
    bindingEl.innerHTML = component.render();
    component.mounted();
}
export default component;