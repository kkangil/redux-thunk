import { combineReducers } from "redux";

import common from './common'
import counter from "./counter";
import post from './post';

export default combineReducers({ common, counter, post });
