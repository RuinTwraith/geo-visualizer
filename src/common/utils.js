import axios from 'api/axios';
import store from 'app/store';

const state = store.getState();
const searchKey = state.searchKey;

const getSearchKeyFromUrl = (url = {}) => {
  return url.pathname?.slice(8);
};

const getQueryString = (searchValue, type = '') => {
  switch (type) {
    case 'reviews':
      return `/reviews?location.name=${searchValue}`;
    default:
      return `/locations?name=${searchValue}`;
  }
};

export const getLocationData = async ({
  url,
  handleSetData,
  setIsLoading,
  type = '',
}) => {
  let searchValue = searchKey || getSearchKeyFromUrl(url);
  const queryString = getQueryString(searchValue, type);

  try {
    const response = await axios.get(queryString);
    handleSetData(response.data, searchValue);
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};
