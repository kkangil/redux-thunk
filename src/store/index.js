import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import modules from "./modules";

const logger = createLogger();
const store = createStore(modules, applyMiddleware(logger, ReduxThunk))

export default store
