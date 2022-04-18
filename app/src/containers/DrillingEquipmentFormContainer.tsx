import ErrorBoundary from 'components/ErrorBoundary'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'reducers/index'

import {
  equipmentAdd,
  equipmentFormEditReset,
  equipmentFormEditSave,
  EquipmentPayload,
} from '../actions/equipment'
import DrillingEquipmentForm from '../components/DrillingEquipmentForm'

// @ts-ignore
// const DrillingEquipmentForm = React.lazy(() => import('remote/DrillingEquipmentForm'))

export default function DrillingEquipmentFormContainer() {
  const dispatch = useDispatch()
  const equipment = useSelector((state: AppState) => state.equipment.data)
  const currentEditId = useSelector((state: AppState) => state.equipment.currentId)

  const addEquipment = (data: EquipmentPayload) => {
    dispatch(equipmentAdd(data))
  }

  const getInitialData = () => {
    if (currentEditId === null) {
      return null
    }

    let data = equipment.filter((item: EquipmentPayload) => item.id === currentEditId)
    return data.length === 1 ? data[0] : null
  }

  const editEquipmentSave = (data: EquipmentPayload) => {
    dispatch(equipmentFormEditSave(data))
  }

  const editEquipmentReset = () => {
    dispatch(equipmentFormEditReset())
  }

  return (
    <React.Suspense fallback="Загрузка...">
      <ErrorBoundary>
        <DrillingEquipmentForm
          dataInitial={getInitialData()}
          onSave={editEquipmentSave}
          onReset={editEquipmentReset}
          onAdd={addEquipment}
        />
      </ErrorBoundary>
    </React.Suspense>
  )
}
