import { Middleware } from "redux"
import { equipmentFetch } from "actions/equipment"


export const equipmentFormMiddleware: Middleware = store => next => action => {
  const res = next(action)

  if(action.type === 'EQUIPMENT_FORM_APPROVE' || action.type === 'EQUIPMENT_FORM_REJECT'){
    store.dispatch(equipmentFetch())
  }

  return res
}