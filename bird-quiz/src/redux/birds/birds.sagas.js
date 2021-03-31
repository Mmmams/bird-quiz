import { takeLatest, put, all, call, select } from "redux-saga/effects";

import birdsActionTypes from "./birds.types";
import { selectLevel, selectBirdsNames } from "./birds.selector";
import { getRandomValue } from "../../utils";
import {
  fetchImageFailure,
  fetchImageSuccess,
  getRandom,
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
    const birdsLength = yield select(selectBirdsNames);
    const randomValue = yield getRandomValue(birdsLength.length);

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
    yield put(getRandom(randomValue));
  } catch (error) {
    yield put(fetchImageFailure(error));
  }
}

export function* onNextLevel() {
  yield takeLatest(birdsActionTypes.GO_NEXT_LEVEL_START, goNextLevel);
}

export function* goNextLevel() {
  const level = yield select(selectLevel);
  const data = [];
  const birdsLength = yield select(selectBirdsNames);
  const randomValue = yield getRandomValue(birdsLength.length);
  switch (level) {
    case 1: {
      try {
        yield fetch(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=воробей`
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
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=сойка`
        )
          .then((response) => response.json())
          .then((value) => data.push(value));
        yield put(goNextLevelSuccess(data));
        yield put(getRandom(randomValue));
      } catch (error) {
        yield put(goNextLevelFailure(error));
      }
      break;
    }
    case 2: {
      try {
        const data = [];
        const birdsLength = yield select(selectBirdsNames);
        const randomValue = yield getRandomValue(birdsLength.length);
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

        yield put(fetchImageSuccess(data));
        yield put(getRandom(randomValue));
      } catch (error) {
        yield put(fetchImageFailure(error));
      }
      break;
    }
    case 3: {
      try {
        const data = [];
        const birdsLength = yield select(selectBirdsNames);
        const randomValue = yield getRandomValue(birdsLength.length);
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
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7ecd0010d836ddcdfb59aa1364622ed5&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=щегол`
        )
          .then((response) => response.json())
          .then((value) => data.push(value));
        yield put(fetchImageSuccess(data));
        yield put(getRandom(randomValue));
      } catch (error) {
        yield put(fetchImageFailure(error));
      }
      break;
    }
    case 4: {
      try {
        const data = [];
        const birdsLength = yield select(selectBirdsNames);
        const randomValue = yield getRandomValue(birdsLength.length);
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
        yield put(getRandom(randomValue));
      } catch (error) {
        yield put(fetchImageFailure(error));
      }
      break;
    }
    case 5: {
      try {
        const data = [];
        const birdsLength = yield select(selectBirdsNames);
        const randomValue = yield getRandomValue(birdsLength.length);
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
        yield put(getRandom(randomValue));
      } catch (error) {
        yield put(fetchImageFailure(error));
      }
      break;
    }
  }
}
