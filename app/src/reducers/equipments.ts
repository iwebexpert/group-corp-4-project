import { EquipmentActionTypes, EquipmentActions, EquipmentPayload } from 'actions/equipment'
import { Reducer } from 'redux'

export type EquipmentReducerState = {
  loading: boolean
  data: EquipmentPayload[]
  error: Error | null
  currentId: string | null
}

const initialState: EquipmentReducerState = {
  loading: false,
  data: [],
  error: null,
  currentId: null,
}

export const equipmentReducer: Reducer<EquipmentReducerState, EquipmentActions> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case EquipmentActionTypes.EQUIPMENT_PENDING:
      return {
        ...state,
        loading: true,
      }
    case EquipmentActionTypes.EQUIPMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case EquipmentActionTypes.EQUIPMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case EquipmentActionTypes.EQUIPMENT_DELETE:
      return {
        ...state,
        data: state.data.filter((item: EquipmentPayload) => item.id !== action.payload),
      }

    case EquipmentActionTypes.EQUIPMENT_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload),
      }

    case EquipmentActionTypes.EQUIPMENT_FORM_EDIT_START:
      return {
        ...state,
        currentId: action.payload,
      }

    case EquipmentActionTypes.EQUIPMENT_FORM_EDIT_SAVE:
      return {
        ...state,
        currentId: null,
        data: state.data.map((item: EquipmentPayload) =>
          item.id === state.currentId ? { ...item, ...action.payload } : item,
        ),
      }

    case EquipmentActionTypes.EQUIPMENT_FORM_EDIT_RESET:
      return {
        ...state,
        currentId: null,
      }

    default:
      return state
  }
}
