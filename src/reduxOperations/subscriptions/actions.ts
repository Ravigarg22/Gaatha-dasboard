import { createActions } from "redux-actions";
import types from "./types";

export const {
  setGaathaOriginal,
  setNewArrival,
  setWeeklyRv,
  setLoading,
  setPopularList,
  setTodaysPick,
  setTrendingList,
  setKahaani,
  setCategories,
  setCategoryContent,
  setNarrators,
  setWriters,
  setAdhyatm,
  setPodcast,
  setMotivation,
  setKaviSammelan,
  setGaathaChoice,
  setBachpan,
  setKavita,
  setTopRated,
  setPrashar,
  setWriterDetails,
  setNarratorDetails,
  setSearchResults,
} = createActions(
  types.SET_GAATHA_ORIGINAL,
  types.SET_NEW_ARRIVAL,
  types.SET_WEEKLY_RV,
  types.SET_LOADING,
  types.SET_POPULAR_LIST,
  types.SET_TODAYS_PICK,
  types.SET_TRENDING_LIST,
  types.SET_KAHAANI,
  types.SET_CATEGORIES,
  types.SET_NARRATORS,
  types.SET_WRITERS,
  types.SET_ADHYATM,
  types.SET_PODCAST,
  types.SET_MOTIVATION,
  types.SET_KAVI_SAMMELAN,
  types.SET_GAATHA_CHOICE,
  types.SET_BACHPAN,
  types.SET_KAVITA,
  types.SET_TOP_RATED,
  types.SET_PRASHAR,
  types.SET_CATEGORY_CONTENT,
  types.SET_WRITER_DETAILS,
  types.SET_NARRATOR_DETAILS,
  types.SET_SEARCH_RESULTS
);
