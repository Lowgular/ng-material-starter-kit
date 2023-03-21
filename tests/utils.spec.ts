import { expect, Locator } from '@playwright/test';
import { selectors } from './material';

export const expectAllTextContents = async (
  list: Locator,
  data: (string | Record<string, string>)[]
) => {
  await expect(list).toHaveCount(data.length);
  let index = 0;
  for (const item of await list.all()) {
    console.log(typeof data[index]);
    if (typeof data[index] === 'string') {
      expect((await item.innerText()).trim()).toEqual(data[index]);
    } else {
      console.log(item, data[index]);
      // expect(
      //   await item.getAttribute(
      //     Object.keys(data[index] as Record<string, string>)[0]
      //   )
      // ).toEqual(data[index]);
    }
    index++;
  }
  expect(await (await list.allTextContents()).map((t) => t.trim())).toEqual(
    data
  );
};

export const expectTable = async (
  trLocator: Locator,
  data: (string | Record<string, string>)[][]
) => {
  await expect(trLocator).toHaveCount(data.length);
  await Promise.all(
    data.map(
      async (row, index) =>
        await expectAllTextContents(
          await trLocator.nth(index).locator(selectors.tableRowCell()),
          row
        )
    )
  );
};
