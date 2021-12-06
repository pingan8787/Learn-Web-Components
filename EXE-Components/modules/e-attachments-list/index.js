export default class EXEAttachmentsList extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
    }
}

if (!customElements.get('exe-attachments-list')) {
    customElements.define('exe-attachments-list', EXEAttachmentsList)
}