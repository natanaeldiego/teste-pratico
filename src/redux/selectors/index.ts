
const getPages = (state: any) => state.pagesReducers.pages;
const isPages = (state: any) => state.pagesReducers.isPages;

const selectors = {
  getPages,
  isPages
}

export { selectors };
