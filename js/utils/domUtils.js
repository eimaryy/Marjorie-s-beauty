export function loadForm(formType, container) {
    const template = document.getElementById(`${formType}-template`).content.cloneNode(true);
    container.innerHTML = '';
    container.appendChild(template);
}