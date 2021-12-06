import { newSpecPage } from '@stencil/core/testing';
import { ExeAvatar } from '../exe-avatar';

describe('exe-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExeAvatar],
      html: `<exe-avatar></exe-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <exe-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </exe-avatar>
    `);
  });
});
