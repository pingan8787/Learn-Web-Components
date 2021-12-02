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
            }
        </style>
        <div class="exe-button">${buttonText}</div>
    `
}