customElements.define('template-demo2', 
    class extends HTMLElement {
        constructor(){
            super();
            const template = document.querySelector('#template2');
            const templateContent = template.content;

            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild(templateContent.cloneNode(true));
        }
    }
)
customElements.define('template-demo3', 
    class extends HTMLElement {
        constructor(){
            super();
            const template = document.querySelector('#template3');
            const templateContent = template.content;

            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild(templateContent.cloneNode(true));
        }
    }
)