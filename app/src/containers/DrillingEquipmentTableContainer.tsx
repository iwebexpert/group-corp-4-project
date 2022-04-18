import ErrorBoundary from 'components/ErrorBoundary'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'reducers/index'

import { equipmentFetch, equipmentDelete, equipmentFormEditStart } from '../actions/equipment'
import DrillingEquipmentTable from '../components/DrillingEquipmentTable'

// const DrillingEquipmentTable = React.lazy((): Promise<{default: any}> => import('remote/DrillingEquipmentTable'))

export default function DrillingEquipmentTableContainer() {
  const dispatch = useDispatch()
  const equipment = useSelector((state: AppState) => state.equipment.data)

  useEffect(() => {
    setTimeout(() => {
      dispatch(equipmentFetch())
    }, 1500)
  }, [])

  const deleteEquipment = (id: string) => {
    dispatch(equipmentDelete(id))
  }

  const editEquipmentMode = (id: string) => {
    dispatch(equipmentFormEditStart(id))
  }

  return (
    <React.Suspense fallback="Загрузка...">
      <ErrorBoundary>
        <DrillingEquipmentTable
          equipment={equipment}
          onEditEquipmentMode={editEquipmentMode}
          onDeleteEquipment={deleteEquipment}
        />
      </ErrorBoundary>
    </React.Suspense>
  )
}
