import { Action, handleActions } from 'redux-actions'
import {
  equipmentFormApprove,
  equipmentFormReject,
  EquipmentFormRejectPayload,
  EquipmentFormApprovePayload,
} from 'actions/equipmentForm'
import { EquipmentStatus } from 'components/DrillingEquipmentTable'

export type EquipmentFormReducerState = {
  id: string | null
  status: string | null
  date: string | null
  reason: string | null
}

const initialState = {
  id: null,
  status: null,
  date: null,
  reason: null,
}

export const equipmentFormReducer = handleActions<EquipmentFormReducerState>(
  {
    [equipmentFormApprove.toString()]: (
      state,
      action: Action<EquipmentFormApprovePayload>,
    ): EquipmentFormReducerState => {
      return {
        ...state,
        status: EquipmentStatus.STATUS_APPROVED,
        id: action.payload.id,
        date: action.payload.date,
      }
    },
    [equipmentFormReject.toString()]: (
      state: EquipmentFormReducerState,
      { payload: { id, reason } }: Action<EquipmentFormRejectPayload>,
    ): EquipmentFormReducerState => {
      return { ...state, status: EquipmentStatus.STATUS_REJECTED, id, reason }
    },
  },
  initialState,
)
