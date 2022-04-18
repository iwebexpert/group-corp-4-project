import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { loggerMiddleware2 } from './middlewares/customLoggerMiddleware'
import { changePayloadMiddleware } from './middlewares/changePayloadMiddleware'
import { equipmentFormMiddleware } from './middlewares/equipmentFormMiddleware'

import { rootReducer } from './reducers'
import { isDev } from 'helpers/devProdMode'

export const store: Store = isDev() ? createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger,
      loggerMiddleware2,
      changePayloadMiddleware,
      equipmentFormMiddleware,
    ),
  ),
) : createStore(
  rootReducer,
    applyMiddleware(
      thunk,
      equipmentFormMiddleware,
    ),
)
