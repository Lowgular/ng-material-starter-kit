import { expect, test } from '@playwright/test';
import { expects, selectors } from './material';
import { expectAllTextContents, expectTable } from './utils.spec';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
});

test('Show table', async ({ page }) => {
  // await page.route(
  //   'https://636ce2d8ab4814f2b2712854.mockapi.io/product-pipes',
  //   (route) => {
  //     route.fulfill({
  //       body: JSON.stringify([
  //         {
  //           name: 'test',
  //           price: '80.00',
  //         },
  //       ]),
  //     });
  //   }
  // );

  await page.waitForResponse(
    (resp) =>
      resp
        .url()
        .includes(
          'https://636ce2d8ab4814f2b2712854.mockapi.io/product-pipes'
        ) && resp.status() === 200
  );

  const headers = await page.locator(selectors.tableHeaders());
  await expectAllTextContents(headers, ['Name', 'Price', 'Image']);

  await expectTable(await page.locator(selectors.tableRows()), [
    ['Luxurious ...', '747.10', { src: '/assets/placeholder-imagse.png' }],
    ['Sleek Gran...', '372.01', { src: 'https://loremflickr.com/640/480' }],
    ['Tasty Meta...', '270.50', { src: 'https://loremflickr.com/640/480' }],
    ['Handmade M...', '289', { src: '/assets/placeholder-image.png' }],
    ['Refined Fr...', '575', { src: 'https://loremflickr.com/640/480' }],
    ['Elegant Co...', '850', { src: 'https://loremflickr.com/640/480' }],
    ['Small Meta...', '376', { src: '/assets/placeholder-image.png' }],
    ['Refined Br...', '773.23', { src: 'https://loremflickr.com/640/480' }],
    ['Awesome Ru...', '925', { src: 'https://loremflickr.com/640/480' }],
    ['Handmade P...', '82', { src: 'https://loremflickr.com/640/480' }],
  ]);
});

test(`Change Language`, async ({ page }) => {
  const languages = await page.locator(
    selectors.selectionList.singleChoice.option()
  );

  await expectAllTextContents(languages, ['en', 'pl']);
  await expects.toHaveSelectionState(languages.first(), true);
  await expects.toHaveSelectionState(languages.last(), false);

  languages.last().click();

  await expects.toHaveSelectionState(languages.first(), false);
  await expects.toHaveSelectionState(languages.last(), true);

  const headers = await page.locator(selectors.tableHeaders());
  await expectAllTextContents(headers, ['Nazwa', 'Cena', 'Obrazek']);
});

test('Search', async ({ page }) => {
  const input = await page.locator(selectors.formFieldInput());

  await input.type('an');

  await expectTable(await page.locator(selectors.tableRows()), [
    ['Luxurious ...', '747.10', { src: '/assets/placeholder-image.png' }],
    ['Sleek *Gran...*', '372.01', { src: 'https://loremflickr.com/640/480' }],
    ['Tasty Meta...', '270.50', { src: 'https://loremflickr.com/640/480' }],
    ['*Handmade* M...', '289', { src: '/assets/placeholder-image.png' }],
    ['Refined Fr...', '575', { src: 'https://loremflickr.com/640/480' }],
    ['*Elegant* Co...', '850', { src: 'https://loremflickr.com/640/480' }],
    ['Small Meta...', '376', { src: '/assets/placeholder-image.png' }],
    ['Refined Br...', '773.23', { src: 'https://loremflickr.com/640/480' }],
    ['Awesome Ru...', '925', { src: 'https://loremflickr.com/640/480' }],
    ['*Handmade* P...', '82', { src: 'https://loremflickr.com/640/480' }],
  ]);
});
