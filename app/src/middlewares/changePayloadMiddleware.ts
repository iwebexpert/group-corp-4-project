import { Middleware } from "redux"
import { EquipmentActionTypes } from "actions/equipment"

export const changePayloadMiddleware: Middleware = store => next => action => {
  if(action.type === EquipmentActionTypes.EQUIPMENT_ADD){
    // action.payload.test = 'Test1234'
  }

  return next(action)
}