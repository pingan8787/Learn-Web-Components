export default class EXECommentFooter extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
    }
}

if (!customElements.get('exe-comment-footer')) {
    customElements.define('exe-comment-footer', EXECommentFooter)
}