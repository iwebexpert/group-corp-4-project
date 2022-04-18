import { MiddlewareAPI, Dispatch, Action, Middleware } from "redux"

export const loggerMiddleware = (store: MiddlewareAPI) => {
  return function nextFunction(next: Dispatch){
    return function dispatchAction(action: Action){
      console.log('@@@ loggerMiddleware начало логгирования')
      console.log('Текущий action', action)
      console.log('Текущий state', store.getState())

      const res = next(action)

      console.log('Текущий action', res)
      console.log('Текущий state', store.getState())
      console.log('@@@ loggerMiddleware завершение логгирования')

      return res
    }
  }
}

export const loggerMiddleware2: Middleware = store => next => action => {
  console.log('@@@ loggerMiddleware начало логгирования')
      console.log('Текущий action', action)
      console.log('Текущий state', store.getState())

      const res = next(action)

      console.log('Текущий action', res)
      console.log('Текущий state', store.getState())
      console.log('@@@ loggerMiddleware завершение логгирования')

      return res
}