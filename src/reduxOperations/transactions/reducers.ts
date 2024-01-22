import { handleActions } from "redux-actions";

import types from "./types";

const initialState = {
  isLoading: false,
  gaathaOriginal: [],
  newArrival: [],
  weeklyRv: [],
  popularList: [],
  todaysPick: [],
  trendingList: [],
  kahaaniList: [],
  categories: [],
  narrators: [],
  writers: [],
  adhyatmList: [],
  podcastList: [],
  narratorsList: [],
  motivationList: [],
  writersList: [],
  categoriesList: [],
  kaviSammelanList: [],
  gaathaChoiceList: [],
  bachpanList: [],
  kavitaList: [],
  topRatedList: [],
  prasharList: [],
  categoryContentList: [],
  writerDetails: {},
  narratorDetails: {},
  recentlyListened: {},
  searchResults: [],
};

const dashboardReducer = handleActions(
  {
    [types.SET_GAATHA_ORIGINAL]: (state, { payload }) => ({
      ...state,
      gaathaOriginal: payload,
    }),
    [types.SET_NEW_ARRIVAL]: (state, { payload }) => ({
      ...state,
      newArrival: payload,
    }),
    [types.SET_WEEKLY_RV]: (state, { payload }) => ({
      ...state,
      weeklyRv: payload,
    }),
    [types.SET_LOADING]: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
    [types.SET_POPULAR_LIST]: (state, { payload }) => ({
      ...state,
      popularList: payload,
    }),
    [types.SET_TODAYS_PICK]: (state, { payload }) => ({
      ...state,
      todaysPick: payload,
    }),
    [types.SET_TRENDING_LIST]: (state, { payload }) => ({
      ...state,
      trendingList: payload,
    }),
    [types.SET_KAHAANI]: (state, { payload }) => ({
      ...state,
      kahaaniList: payload,
    }),
    [types.SET_ADHYATM]: (state, { payload }) => ({
      ...state,
      adhyatmList: payload,
    }),
    [types.SET_PODCAST]: (state, { payload }) => ({
      ...state,
      podcastList: payload,
    }),
    [types.SET_NARRATORS]: (state, { payload }) => ({
      ...state,
      narratorsList: payload,
      narrators: payload,
    }),
    [types.SET_MOTIVATION]: (state, { payload }) => ({
      ...state,
      motivationList: payload,
    }),
    [types.SET_WRITERS]: (state, { payload }) => ({
      ...state,
      writersList: payload,
      writers: payload,
    }),
    [types.SET_CATEGORIES]: (state, { payload }) => ({
      ...state,
      categoriesList: payload.categoriesList,
      categories: payload.categories,
    }),
    [types.SET_CATEGORY_CONTENT]: (state, { payload }) => ({
      ...state,
      categoryContentList: payload,
    }),
    [types.SET_KAVI_SAMMELAN]: (state, { payload }) => ({
      ...state,
      kaviSammelanList: payload,
    }),
    [types.SET_GAATHA_CHOICE]: (state, { payload }) => ({
      ...state,
      gaathaChoiceList: payload,
    }),
    [types.SET_BACHPAN]: (state, { payload }) => ({
      ...state,
      bachpanList: payload,
    }),
    [types.SET_KAVITA]: (state, { payload }) => ({
      ...state,
      kavitaList: payload,
    }),
    [types.SET_TOP_RATED]: (state, { payload }) => ({
      ...state,
      topRatedList: payload,
    }),
    [types.SET_PRASHAR]: (state, { payload }) => ({
      ...state,
      prasharList: payload,
    }),
    [types.SET_WRITER_DETAILS]: (state, { payload }) => ({
      ...state,
      writerDetails: payload,
    }),
    [types.SET_NARRATOR_DETAILS]: (state, { payload }) => ({
      ...state,
      narratorDetails: payload,
    }),
    [types.SET_SEARCH_RESULTS]: (state, { payload }) => ({
      ...state,
      searchResults: payload,
    }),
  },

  initialState
);

export default dashboardReducer;
