import { Shared } from '../../utils/index.js';

const { renderAttrStr } = Shared;

export default config => {
    const { 
        userName, avatarWidth, avatarRadius, buttonRadius, 
        avatarSrc, buttonType = 'primary', subName, buttonText, disableButton,
        onAvatarClick, onButtonClick
    } = config;
    return `
        <style>
            :host{
                color: "green";
                font-size: "30px";
            }
            .exe-user-avatar {
                display: flex;
            }
            .exe-user-avatar-text {
                font-size: 14px;
                flex: 1;
            }
            .exe-user-avatar-text .text {
                color: #666;
            }
            exe-avatar {
                margin-right: 12px;
            }
        </style>
        <div class="exe-user-avatar">
            <exe-avatar
                ${renderAttrStr({
                    'e-avatar-width': avatarWidth,
                    'e-avatar-radius': avatarRadius,
                    'e-avatar-src': avatarSrc,
                })}
            ></exe-avatar>
            <div class="exe-user-avatar-text">
                <div class="name">
                    <span class="name-text">${userName}</span>
                    <span class="user-attach">
                        <slot name="name-slot"></slot>
                    </span>
                </div>
                <div class="text">
                <span>${subName}</span>
                <span><slot name="sub-name-slot"></slot></span>
                </div>
            </div>
            ${
                !disableButton && 
                `<exe-button
                    ${renderAttrStr({
                        'e-button-radius' : buttonRadius,
                        'e-button-type' : buttonType,
                        'e-button-text' : buttonText,
                        'on-avatar-click' : onAvatarClick,
                        'on-button-click' : onButtonClick,
                    })}
                ></exe-button>`
            }

        </div>
    `
}