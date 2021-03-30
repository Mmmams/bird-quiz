import { takeLatest, put, all, call } from "redux-saga/effects";

import birdsActionTypes from "./birds.types";

import {
  fetchImageFailure,
  fetchImageSuccess,
  goNextLevelFailure,
  goNextLevelSuccess,
} from "./birds.action";

export function* birdsSagas() {
  yield all([call(onFetchImageStart), call(onNextLevel)]);
}

export function* onFetchImageStart() {
  yield takeLatest(birdsActionTypes.FETCH_IMAGE_START, fetchingImage);
}

export function* fetchingImage() {
  try {
    const data = [];
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=ворон`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=журавль`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=сорока`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=козодой`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=кукушка`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=синица`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield put(fetchImageSuccess(data));
  } catch (error) {
    yield put(fetchImageFailure(error));
  }
}

export function* onNextLevel() {
  yield takeLatest(birdsActionTypes.GO_NEXT_LEVEL_START, goNextLevel);
}

export function* goNextLevel() {
  try {
    console.log("hh");
    const data = [];
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=зяблик`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=грач`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=галка`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=дрозд`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=сорока`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=сойка`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield put(goNextLevelSuccess(data));
  } catch (error) {
    yield put(goNextLevelFailure(error));
  }
}

export function* onFetchThird() {
  yield takeLatest(birdsActionTypes.FETCH_IMAGE_START, fetchingThird);
}

export function* fetchingThird() {
  try {
    const data = [];
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=зяблик`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=клёст`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=горлица`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=дятел`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=удод`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=стриж`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield put(fetchImageSuccess(data));
  } catch (error) {
    yield put(fetchImageFailure(error));
  }
}

export function* onFetchFour() {
  yield takeLatest(birdsActionTypes.FETCH_IMAGE_START, fetchingFour);
}

export function* fetchingFour() {
  try {
    const data = [];
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=жаворонок`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=соловей`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=скворец`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=иволга`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=свиристель`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=щегол`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield put(fetchImageSuccess(data));
  } catch (error) {
    yield put(fetchImageFailure(error));
  }
}

export function* onFetchFive() {
  yield takeLatest(birdsActionTypes.FETCH_IMAGE_START, fetchingFive);
}

export function* fetchingFive() {
  try {
    const data = [];
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=орёл`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=коршун`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=лунь`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=сокол`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=ястреб`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=филин`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield put(fetchImageSuccess(data));
  } catch (error) {
    yield put(fetchImageFailure(error));
  }
}

export function* onFetchSix() {
  yield takeLatest(birdsActionTypes.FETCH_IMAGE_START, fetchingSix);
}

export function* fetchingSix() {
  try {
    const data = [];
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=альбатрос`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=олуша`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=буревестник`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=пеликан`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=пингвин`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=чайка`
    )
      .then((response) => response.json())
      .then((value) => data.push(value));
    yield put(fetchImageSuccess(data));
  } catch (error) {
    yield put(fetchImageFailure(error));
  }
}
