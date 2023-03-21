import { expect, Locator } from '@playwright/test';

export const selectors = {
  table: () => `table[mat-table]`,
  tableHeaders: () => `${selectors.table()} thead th[mat-header-cell]`,
  tableRows: () => `${selectors.table()} tbody tr[mat-row]`,
  tableRowCell: () => `td[mat-cell]`,
  formField: () => `mat-form-field`,
  formFieldInput: () => `mat-form-field input[matinput]`,
  selectionList: {
    selector: `mat-selection-list`,
    singleChoice: {
      selector: `[aria-multiselectable="false"]`,
      option: () =>
        `${selectors.selectionList.selector}${selectors.selectionList.singleChoice.selector} mat-list-option`,
    },
  },
};

export const expects = {
  toHaveSelectionState: async (locator: Locator, value: boolean) => {
    await expect(locator).toHaveAttribute('aria-selected', `${value}`);
  },
};
