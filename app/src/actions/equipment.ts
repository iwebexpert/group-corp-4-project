import { EquipmentType } from 'components/DrillingEquipmentForm'
import { EquipmentStatus } from 'components/DrillingEquipmentTable'
import { urls, requestOptions } from 'helpers/requestHelper'
import { ActionCreator, Dispatch } from 'redux'
import { ThunkActionDispatch } from 'redux-thunk'

export enum EquipmentActionTypes {
  EQUIPMENT_PENDING = 'EQUIPMENT_PENDING',
  EQUIPMENT_SUCCESS = 'EQUIPMENT_SUCCESS',
  EQUIPMENT_ERROR = 'EQUIPMENT_ERROR',
  EQUIPMENT_DELETE = 'EQUIPMENT_DELETE',
  EQUIPMENT_ADD = 'EQUIPMENT_ADD',
  EQUIPMENT_FORM_EDIT_START = 'EQUIPMENT_FORM_EDIT_START',
  EQUIPMENT_FORM_EDIT_SAVE = 'EQUIPMENT_FORM_EDIT_SAVE',
  EQUIPMENT_FORM_EDIT_RESET = 'EQUIPMENT_FORM_EDIT_RESET',
}

// Action types
export type EquipmentPendingAction = {
  type: EquipmentActionTypes.EQUIPMENT_PENDING
}

export type EquipmentSuccessAction = {
  type: EquipmentActionTypes.EQUIPMENT_SUCCESS
  payload: EquipmentPayload[]
}

export type EquipmentErrorAction = {
  type: EquipmentActionTypes.EQUIPMENT_ERROR
  payload: Error
}

export type EquipmentDeleteAction = {
  type: EquipmentActionTypes.EQUIPMENT_DELETE
  payload: string
}

export type EquipmentAddAction = {
  type: EquipmentActionTypes.EQUIPMENT_ADD
  payload: EquipmentPayload
}

export type EquipmentFormEditStartAction = {
  type: EquipmentActionTypes.EQUIPMENT_FORM_EDIT_START
  payload: string | null
}

export type EquipmentFormEditSaveAction = {
  type: EquipmentActionTypes.EQUIPMENT_FORM_EDIT_SAVE
  payload: EquipmentPayload
}

export type EquipmentFormEditResetAction = {
  type: EquipmentActionTypes.EQUIPMENT_FORM_EDIT_RESET
}

export type EquipmentActions =
  | EquipmentPendingAction
  | EquipmentSuccessAction
  | EquipmentErrorAction
  | EquipmentDeleteAction
  | EquipmentAddAction
  | EquipmentFormEditStartAction
  | EquipmentFormEditSaveAction
  | EquipmentFormEditResetAction

export type EquipmentPayload = {
  id: string
  type: EquipmentType
  title: string
  amount: string
  date: string
  comment: string
  status?: EquipmentStatus
  rejection_reason?: string
  approval_date?: string
}

// Actions
export const equipmentPending: ActionCreator<EquipmentPendingAction> = () => ({
  type: EquipmentActionTypes.EQUIPMENT_PENDING,
})

export const equipmentSuccess: ActionCreator<EquipmentSuccessAction> = (data) => ({
  type: EquipmentActionTypes.EQUIPMENT_SUCCESS,
  payload: data,
})

export const equipmentError: ActionCreator<EquipmentErrorAction> = (error) => ({
  type: EquipmentActionTypes.EQUIPMENT_ERROR,
  payload: error,
})

export const equipmentFetch: ThunkActionDispatch<any> = () => {
  return (dispatch: Dispatch) => {
    dispatch(equipmentPending())
    fetch(urls.equipment(), requestOptions('GET'))
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(equipmentSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(equipmentError(error))
      })
  }
}

export const equipmentDelete: ActionCreator<EquipmentDeleteAction> = (id) => {
  fetch(urls.equipmentForm(id), requestOptions('DELETE'))
  return {
    type: EquipmentActionTypes.EQUIPMENT_DELETE,
    payload: id,
  }
}

export const equipmentAdd: ActionCreator<EquipmentAddAction> = (data) => {
  if (data.date instanceof Date) {
    data.date = data.date.toString()
  }

  fetch(urls.equipment(), requestOptions('POST', data))
    .then((result) => result.json())
    .then((result) => {
      if (result.error) {
        throw result.error
      }
      return result
    })
    .catch((error) => {})

  return {
    type: EquipmentActionTypes.EQUIPMENT_ADD,
    payload: data,
  }
}

// Редактирование формы
export const equipmentFormEditStart: ActionCreator<EquipmentFormEditStartAction> = (id) => ({
  type: EquipmentActionTypes.EQUIPMENT_FORM_EDIT_START,
  payload: id,
})

export const equipmentFormEditSave: ActionCreator<EquipmentFormEditSaveAction> = (data) => {
  fetch(urls.equipmentForm(data.id), requestOptions('PATCH', data))
    .then((result) => result.json())
    .then((result) => {
      if (result.error) {
        throw result.error
      }
      return result
    })
    .catch((error) => {})

  return {
    type: EquipmentActionTypes.EQUIPMENT_FORM_EDIT_SAVE,
    payload: data,
  }
}

export const equipmentFormEditReset: ActionCreator<EquipmentFormEditResetAction> = () => ({
  type: EquipmentActionTypes.EQUIPMENT_FORM_EDIT_RESET,
})
