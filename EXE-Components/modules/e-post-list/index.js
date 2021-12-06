export default class EXEPostList extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
    }
}

if (!customElements.get('exe-post-list')) {
    customElements.define('exe-post-list', EXEPostList)
}