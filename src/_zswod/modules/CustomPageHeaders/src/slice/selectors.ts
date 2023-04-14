import { createSelector } from '@reduxjs/toolkit';
import { CustomPageHeaderSection } from 'src/_zswod/models/CustomPageHeader';
import { RootState } from 'src/_zswod/redux/store';
import { entityAdapter } from './reducer';

const { selectAll: selectAllCustomPageHeaders } = entityAdapter.getSelectors(
  (state: RootState) => state.customPageHeaders
);

const selectCustomPageHeadersState = (state: RootState) => state.customPageHeaders;

const selectCustomPageHeadersStatus = createSelector(
  selectCustomPageHeadersState,
  ({ status, error }) => ({
    status,
    error,
  })
);

const selectCustomPageHeadersGrouped = createSelector(selectAllCustomPageHeaders, (headers) => {
  const mapped: CustomPageHeaderSection[] = [];

  headers.forEach(({ section, ...item }) => {
    const mappedSectionIndex = mapped.findIndex((mappedHeader) => mappedHeader.section === section);
    if (mappedSectionIndex > -1) {
      mapped[mappedSectionIndex].items.push(item);
    } else {
      mapped.push({ section, items: [item] });
    }
  });

  return mapped;
});

const selectCustomPageHeaderByTitleNormalized = createSelector(
  [selectAllCustomPageHeaders, (_state, url: string) => url],
  (headers, url) => headers.find((header) => header.url === url)
);

export {
  selectAllCustomPageHeaders,
  selectCustomPageHeadersStatus,
  selectCustomPageHeadersGrouped,
  selectCustomPageHeaderByTitleNormalized,
};
