import {
  fetchCats,
  getCats,
  setCatDetails,
  setSingleCatDetail,
} from "./catSlice";
import { call, put, take, takeEvery, takeLatest } from "redux-saga/effects";
const route = `https://api.thecatapi.com/v1/images/search?limit=30&api_key=${process.env.REACT_APP_API_KEY}`;

function* watchingCatSaga() {
  const allCats = yield call(() =>
    fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json())
  );
  const formattedCats = yield allCats.slice(0, 20);
  yield put(getCats(formattedCats));
}

function* SingleCatDetails({ payload }) {
  try {
    const catDetailResponse = yield call(() =>
      fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${payload}&limit=20`
      )
    );

    const catDetail = yield catDetailResponse.json();
    yield put(setCatDetails(catDetail));
  } catch (error) {
    // Handle any errors here
    console.error("Error fetching single cat details:", error);
  }
}

function* catSaga() {
  yield takeLatest("Cats/fetchCats", watchingCatSaga);
}

function* singleCatSaga() {
  yield takeLatest("Cats/getCatID", SingleCatDetails);
}

export default catSaga;
export { singleCatSaga };
