import { bindActionCreators } from "redux";

import * as commonActions from "./modules/common";
import * as counterActions from "./modules/counter";
import * as postActions from "./modules/post";

import store from "./index";

const { dispatch } = store;

export const CommonActions = bindActionCreators(commonActions, dispatch);
export const CounterActions = bindActionCreators(counterActions, dispatch);
export const PostActions = bindActionCreators(postActions, dispatch);