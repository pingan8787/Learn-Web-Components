import { newE2EPage } from '@stencil/core/testing';

describe('exe-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<exe-avatar></exe-avatar>');

    const element = await page.find('exe-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
