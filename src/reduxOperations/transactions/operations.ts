// import { hideLoader, showLoader } from "../../components/appLoader";
import { DashboardAPI } from '../../services';
import {
  setAdhyatm,
  setBachpan,
  setCategories,
  setCategoryContent,
  setGaathaChoice,
  setGaathaOriginal,
  setKahaani,
  setKaviSammelan,
  setKavita,
  setLoading,
  setMotivation,
  setNarratorDetails,
  setNarrators,
  setNewArrival,
  setPopularList,
  setPrashar,
  setSearchResults,
  setTodaysPick,
  setTopRated,
  setTrendingList,
  setWeeklyRv,
  setWriterDetails,
  setWriters,
} from './actions';


import axios from 'axios';

const noop = () => {};

const getOriginal =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=gaatha-premium&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));
        if (res?.data?.data) {
          dispatch(setGaathaOriginal(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getNewArrival =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=new-arrivals&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setNewArrival(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getWeeklyRv =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get('audio-list-by-category?categoryname=weekly&page=' + page)
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setWeeklyRv(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getPopularList =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get('audio-list-by-category?categoryname=popular&page=' + page)
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setPopularList(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getTodaysPick =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=todayspick&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setTodaysPick(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getTrendingList =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=trending&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setTrendingList(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getKahaani =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get('audio-list-by-category?categoryname=kahani&page=' + page)
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setKahaani(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getAdhyatm =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get('audio-list-by-category?categoryname=adhyatm&page=' + page)
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setAdhyatm(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getNarrators = (data, onSuccess, onFailure) => (dispatch) => {
  dispatch(setLoading(true));

  DashboardAPI.get('get-narrator-list?page=' + data?.pageNo ?? 0)
    .then((res) => {
      console.log('res', res);
      dispatch(setLoading(false));

      if (res?.data?.data) {
        onSuccess(res?.data?.data);
        dispatch(setNarrators(res.data.data));
      }
    })
    .catch((err) => {
      console.log('err is --->', err);
      dispatch(setLoading(false));
    });
};

const getMotivation =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=motivation-self-improvement&page=' +
        page,
    )
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setMotivation(res.data.data));
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
      });
  };

const getWriters = (data, onSuccess, onFailure) => (dispatch) => {
  dispatch(setLoading(true));
  DashboardAPI.get('get-writer-list?page=' + data?.pageNo ?? 0)
    .then((res) => {
      dispatch(setLoading(false));

      if (res?.data?.data) {
        onSuccess(res?.data?.data);
        dispatch(setWriters(res.data.data));
      }
    })
    .catch((err) => {
      console.log('err is --->', err);
      dispatch(setLoading(false));
    });
};

const getCategories = () => (dispatch) => {
  dispatch(setLoading(true));
  DashboardAPI.get('all-audio-list-by-tag')
    .then((res) => {
      dispatch(setLoading(false));

      if (res?.data?.data) {
        let categories = res.data.data;

        let categoriesList = [
          { id: 0, name: 'For You', slug: 'for-you' },
          ...categories,
        ];

        dispatch(
          setCategories({
            categoriesList: categoriesList,
            categories: categories,
          }),
        );
      }
    })
    .catch((err) => {
      console.log('err is --->', err);
      dispatch(setLoading(false));
    });
};

const getCategoryContent = (data, onSuccess, onFailure) => (dispatch) => {
  // console.log(data, "My category params");
  dispatch(setLoading(true));
  dispatch(setCategoryContent(null));
  DashboardAPI.get(
    `audio-list-by-category?categoryname=${data?.slug}&page=${data?.pageNo}`,
  )
    .then((res) => {
      dispatch(setLoading(false));
      if (res?.data?.data) {
        onSuccess(res?.data?.data);

        if (res?.data?.data?.length > 0)
          dispatch(setCategoryContent(res?.data?.data));
      }
    })
    .catch((err) => {
      console.log('err is --->', err);
      dispatch(setLoading(false));
    });
};

const getKaviSammelan =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=kavi-sammelan&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));
        if (res?.data?.data) {
          dispatch(setKaviSammelan(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getGaathaChoice =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=gaathas-choice&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setGaathaChoice(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getBachpan =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get('audio-list-by-category?categoryname=bachpan&page=' + page)
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setBachpan(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getKavita =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get('audio-list-by-category?categoryname=kavita&page=' + page)
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setKavita(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getTopRated =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=top-rated&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setTopRated(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getPrasharBharti =
  (page = 0) =>
  (dispatch) => {
    dispatch(setLoading(true));
    DashboardAPI.get(
      'audio-list-by-category?categoryname=best-of-prashar-bharti&page=' + page,
    )
      .then((res) => {
        dispatch(setLoading(false));

        if (res?.data?.data) {
          dispatch(setPrashar(res.data.data));
        }
      })
      .catch((err) => {
        console.log('err is --->', err);
        dispatch(setLoading(false));
      });
  };

const getWritersDetails =
  (data, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    // showLoader();
    dispatch(setWriterDetails({}));
    DashboardAPI.get(
      `get-writer-detials?writer_id=${data?.writerId}&page=${
        data?.pageNo ?? 0
      }&user_id=${data.user_id}`,
    )
      .then((res) => {
        // hideLoader();
        if (res?.data?.data) {
          successCallBack(res.data.data?.audio_list, res.data.data);
          dispatch(setWriterDetails(res.data.data));
        }
      })
      .catch((err) => {
        // hideLoader();
        console.log('err is --->', err);
      });
  };

const getNarratorDetails =
  (data, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    console.log(data, 'Narrator Detail params');
    dispatch(setNarratorDetails({}));
    // showLoader();
    DashboardAPI.get(
      `get-narrator-detials?narrator_id=${data?.narratorId}&page=${
        data?.pageNo ?? 0
      }&user_id=${data.user_id}`,
    )
      .then((res) => {
        // hideLoader();
        if (res?.data?.data) {
          successCallBack(res.data.data?.audio_list, res.data.data);
          dispatch(setNarratorDetails(res.data.data));
        }
      })
      .catch((err) => {
        // hideLoader();
        console.log('err is --->', err);
      });
  };

const searchByQuery =
  (query, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setSearchResults([]));
    DashboardAPI.get(`search?title=${query}&page=0`)
      .then((res) => {
        dispatch(setLoading(false));
        if (res?.data?.data) {
          dispatch(setSearchResults(res.data));
          successCallBack();
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log('err is --->', err);
      });
  };

const getAudioDetails =
  (data, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    // showLoader();
    axios
      .get(
        `https://gaathaonair.com//wp-json/gathaa/v1/get-audio-deail-page?post_name=${data}`,
        {
          headers: {
            Accept: 'application/json',
          },
        },
      )
      .then((res) => {
        // hideLoader();
        if (res?.data) {
          successCallBack(res.data);
        }
      })
      .catch((err) => {
        console.log('err', err);
        // hideLoader();
      });
  };

const uploadAudio =
  (data, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    // showLoader();
    axios
      .post('http://49.50.118.112:8080/gaatha/gaatha/auduploadmult', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      })
      .then((res) => {
        // console.log("res", res);
        successCallBack();
        // hideLoader();
      })
      .catch((err) => {
        console.log('err', err);
        // hideLoader();
      });
  };

const addToFavourite =
  (data, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    // showLoader();
    DashboardAPI.post('add-to-favourite', data)
      .then((res) => {
        // hideLoader();
        if (res?.data?.message) {
          successCallBack(res?.data?.message);
        }
      })
      .catch((err) => {
        // hideLoader();
        dispatch(setLoading(false));
        console.log('err is --->', err);
      });
  };

// Follow Narrator or writer
const followUser =
  (data, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    // showLoader();
    DashboardAPI.post('follow', data)
      .then((res) => {
        console.log('res', res);
        // hideLoader();
        console.log(res?.data);
        if (res?.data?.success) {
          successCallBack(res?.data?.message);
        }
      })
      .catch((err) => {
        // hideLoader();
        dispatch(setLoading(false));
        console.log('err is --->', err);
      });
  };

// Unollow Narrator or writer
const unfollowUser =
  (data, successCallBack = noop, failureCallBack = noop) =>
  (dispatch) => {
    // showLoader();
    DashboardAPI.post('un-follow', data)
      .then((res) => {
        // hideLoader();
        if (res?.data?.message) {
          successCallBack(res?.data?.message);
        }
      })
      .catch((err) => {
        // hideLoader();
        dispatch(setLoading(false));
        console.log('err is --->', err);
      });
  };

export default {
  getOriginal,
  getNewArrival,
  getWeeklyRv,
  getPopularList,
  getTodaysPick,
  getTrendingList,
  getKahaani,
  getCategories,
  getNarrators,
  getWriters,
  getAdhyatm,
  getMotivation,
  getKavita,
  getKaviSammelan,
  getGaathaChoice,
  getTopRated,
  getBachpan,
  getPrasharBharti,
  getCategoryContent,
  getWritersDetails,
  getNarratorDetails,
  searchByQuery,
  uploadAudio,
  getAudioDetails,
  addToFavourite,
  followUser,
  unfollowUser,
};
