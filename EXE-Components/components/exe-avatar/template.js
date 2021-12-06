export default config => {
    const { avatarWidth, avatarRadius, avatarSrc } = config;
    return `
        <style>
            .exe-avatar {
                width: ${avatarWidth};
                height: ${avatarWidth};
                display: inline-block;
                cursor: pointer;
            }
            .exe-avatar .img {
                width: 100%;
                height: 100%;
                border-radius: ${avatarRadius};
                border: 1px solid #efe7e7;
            }
        </style>
        <div class="exe-avatar">
            <img class="img" src="${avatarSrc}" />
        </div>
    `
}