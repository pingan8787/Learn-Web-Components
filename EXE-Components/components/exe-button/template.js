export default config => {
    const { buttonRadius, buttonColor, buttonText } = config;
    return `
        <style>
            .exe-button {
                border: 1px solid ${buttonColor};
                color: ${buttonColor};
                font-size: 12px;
                text-align: center;
                padding: 4px 10px;
                border-radius: ${buttonRadius};
                cursor: pointer;
                display: inline-block;
                background-color: #FFF;
            }
            :host([disabled]) .exe-button,:host([loading]) .exe-button{ 
                cursor: not-allowed; 
                pointer-events: all; 
                border: 1px solid #D6D6D6;
                color: #ABABAB;
                background-color: #EEE;
            }
        </style>
        <button class="exe-button">${buttonText}</button>
    `
}