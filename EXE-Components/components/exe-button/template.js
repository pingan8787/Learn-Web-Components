const borderStyle = {
    solid: 'solid',
    dashed: 'dashed'
}

const buttonTypeMap = {
    default: { textColor: '#222', bgColor: '#FFF'},
    primary: { textColor: '#FFF', bgColor: '#5FCE79'},
}

export default config => {
    const { buttonRadius, buttonText, buttonType } = config;

    console.log('[按钮config]', config)

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
                border: 1px ${borderStyleCSS} ${backgroundCSS.bgColor};
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
            :host([disabled]) .exe-button,
            :host([loading]) .exe-button{ 
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