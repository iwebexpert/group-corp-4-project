import { FilialActionTypes, FilialActions } from 'actions/filial'
import { Reducer } from 'redux'

export type FilialReducerState = {
  loading: boolean
  data: ObjectStringsValue[]
  error: Error | null
  isFormSend: boolean
}

const initialState: FilialReducerState = {
  loading: false,
  data: [],
  error: null,
  isFormSend: false,
}

export const filialReducer: Reducer<FilialReducerState, FilialActions> = (state = initialState, action) => {
  switch (action.type) {
    case FilialActionTypes.FILIAL_PENDING:
      return {
        ...state,
        loading: true,
      }
    case FilialActionTypes.FILIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }

    case FilialActionTypes.FILIAL_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case FilialActionTypes.FILIAL_FORM_SEND:
      return {
        ...state,
        isFormSend: true,
        // data: state.data.concat(action.payload),
      }

    default:
      return state
  }
}
