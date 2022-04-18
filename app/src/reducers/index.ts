import { combineReducers } from 'redux'
import { equipmentReducer, EquipmentReducerState } from './equipments'
import { equipmentFormReducer, EquipmentFormReducerState } from './equipmentForm'
import { filialReducer, FilialReducerState } from './filial'

export type AppState = {
  equipment: EquipmentReducerState
  equipmentForm: EquipmentFormReducerState
  filial: FilialReducerState
}

export const rootReducer = combineReducers<AppState>({
  equipment: equipmentReducer,
  equipmentForm: equipmentFormReducer,
  filial: filialReducer,
})
