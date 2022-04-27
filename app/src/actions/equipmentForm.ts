import { createAction } from 'redux-actions'
import { urls, requestOptions } from '../helpers/requestHelper'
import { EquipmentStatus } from 'components/DrillingEquipmentTable'

export type EquipmentFormApprovePayload = {
  id: string | null
  date: string | null
}

export type EquipmentFormRejectPayload = {
  id: string | null
  reason: string | null
}

export const equipmentFormApprove = createAction(
  'EQUIPMENT_FORM_APPROVE',
  (id: string, date: string) => {
    const options = requestOptions('POST', {
      status: EquipmentStatus.STATUS_APPROVED,
      approval_date: date,
    })

    fetch(`${urls.equipmentForm(id)}/approve`, options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        return result
      })
      .catch((error) => {})

    return { id, date }
  },
)

export const equipmentFormReject = createAction<EquipmentFormRejectPayload, string, string>(
  'EQUIPMENT_FORM_REJECT',
  (id, reason) => {
    const options = requestOptions('POST', {
      status: EquipmentStatus.STATUS_REJECTED,
      rejection_reason: reason,
    })

    fetch(`${urls.equipmentForm(id)}/reject`, options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        return result
      })
      .catch((error) => {})

    return { id, reason }
  },
)
