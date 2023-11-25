import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catReducer from "./catSlice";
import catSaga, { singleCatSaga } from "./catSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([catSaga(), singleCatSaga()]);
}
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { cat: catReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
