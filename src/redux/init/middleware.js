import {compose} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

export const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue'
        }
    },
    prevState: () => '#1C5FAF',
    action: () => '#139945',
    nextState: () => '#A47104',
    error: () => '#FF0005'
})

const devEnv = process.env.NODE_ENV === 'development';
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devEnv && devtools ? devtools : compose;
const middleware = [thunk];

if(devEnv){
    middleware.push(logger);
}

export {composeEnhancers, middleware}
