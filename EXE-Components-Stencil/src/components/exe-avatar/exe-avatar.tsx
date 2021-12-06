import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'exe-avatar',
  styleUrl: 'exe-avatar.css',
  shadow: true,
})
export class ExeAvatar {
  @Prop() avatarSrc: string = './assets/images/default_avatar.png';

  @Prop() avatarWidth: string = "40px";

  @Prop() avatarRadius: string = "50%";

  @Event() avatarClick: () => void = () => {
    console.log('[avatarClick]')
  };

  render() {
    console.log('[this.avatarClick]', this.avatarClick)
    return (
      <img
        class="exe-avatar"
        src={this.avatarSrc}
        onClick={this.avatarClick}
        style={{
          width: this.avatarWidth,
          height: this.avatarWidth,
          borderRadius: this.avatarRadius
        }}
      />
    );
  }

}
