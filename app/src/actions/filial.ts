import { ActionCreator, Dispatch } from 'redux'
import { urls, requestOptions } from '../helpers/requestHelper'
import { authService } from '../services/auth/authService'

export enum FilialActionTypes {
  FILIAL_PENDING = 'FILIAL_PENDING',
  FILIAL_SUCCESS = 'FILIAL_SUCCESS',
  FILIAL_ERROR = 'FILIAL_ERROR',
  FILIAL_FORM_SEND = 'FILIAL_FORM_SEND',
}

export type FilialPendingAction = {
  type: FilialActionTypes.FILIAL_PENDING
}

export type FilialSuccessAction = {
  type: FilialActionTypes.FILIAL_SUCCESS
  payload: ObjectStringsValue[]
}

export type FilialErrorAction = {
  type: FilialActionTypes.FILIAL_ERROR
  payload: Error
}

export type FilialFormSendAction = {
  type: FilialActionTypes.FILIAL_FORM_SEND
  payload: ObjectStringsValue
}

export type FilialActions =
  | FilialPendingAction
  | FilialSuccessAction
  | FilialErrorAction
  | FilialFormSendAction

// Actions
export const filialFormSend: ActionCreator<FilialFormSendAction> = (data) => {
  data.user = authService.userId
  data.date = new Date()
  data.filial = authService.currentUserValue?.filial || '1'

  if (data.date instanceof Date) {
    data.date = data.date.toString()
  }

  fetch(urls.filalReport(), requestOptions('POST', data))
    .then((result) => result.json())
    .then((result) => {
      if (result.error) {
        throw result.error
      }
      return result
    })
    .catch((error) => {})

  return {
    type: FilialActionTypes.FILIAL_FORM_SEND,
    payload: data,
  }
}

export const filialPending: ActionCreator<FilialPendingAction> = () => ({
  type: FilialActionTypes.FILIAL_PENDING,
})

export const filialSuccess: ActionCreator<FilialSuccessAction> = (data) => ({
  type: FilialActionTypes.FILIAL_SUCCESS,
  payload: data,
})

export const filialError: ActionCreator<FilialErrorAction> = (error) => ({
  type: FilialActionTypes.FILIAL_ERROR,
  payload: error,
})

export const filialFetch = () => {
  return (dispatch: Dispatch) => {
    dispatch(filialPending())

    fetch(urls.filalReport(), requestOptions('GET'))
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(filialSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(filialError(error))
      })
  }
}
