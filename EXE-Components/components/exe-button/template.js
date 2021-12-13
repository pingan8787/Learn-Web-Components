const borderStyle = {
    solid: 'solid',
    dashed: 'dashed'
}

const buttonTypeMap = {
    default: { textColor: '#222', bgColor: '#FFF', borderColor: '#222'},
    primary: { textColor: '#FFF', bgColor: '#5FCE79', borderColor: '#5FCE79'},
    text: { textColor: '#222', bgColor: '#FFF', borderColor: '#FFF'},
}

export default config => {
    const { buttonRadius, buttonText, buttonType } = config;

    const borderStyleCSS = buttonType 
        && borderStyle[buttonType] 
        ? borderStyle[buttonType] 
        : borderStyle['solid'];

    const backgroundCSS = buttonType 
        && buttonTypeMap[buttonType] 
        ? buttonTypeMap[buttonType] 
        : buttonTypeMap['default'];

    return `
        <style>
            .exe-button {
                border: 1px ${borderStyleCSS} ${backgroundCSS.borderColor};
                color: ${backgroundCSS.textColor};
                background-color: ${backgroundCSS.bgColor};
                font-size: 12px;
                text-align: center;
                padding: 4px 10px;
                border-radius: ${buttonRadius};
                cursor: pointer;
                display: inline-block;
                height: 28px;
            }
            :host([disabled]) .exe-button{ 
                cursor: not-allowed; 
                pointer-events: all; 
                border: 1px solid #D6D6D6;
                color: #ABABAB;
                background-color: #EEE;
            }
            :host([loading]) .exe-button{ 
                cursor: not-allowed; 
                pointer-events: all; 
                border: 1px solid #D6D6D6;
                color: #ABABAB;
                background-color: #F9F9F9;
            }
        </style>
        <button class="exe-button">${buttonText}</button>
    `
}