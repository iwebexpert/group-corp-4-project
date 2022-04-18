import { test, expect, describe, it, beforeEach } from '@jest/globals'
import { EquipmentType } from 'components/DrillingEquipmentForm'
import { fn } from 'jest-mock'
import { equipmentReducer, EquipmentReducerState } from 'reducers/equipments'
import { equipmentAdd, EquipmentPayload, equipmentPending } from './equipment'

const mockStore = (): EquipmentReducerState => {
  return {
    loading: false,
    data: [],
    error: null,
    currentId: null,
  }
}

const getEquipmentPayload = (): EquipmentPayload => ({
  id: '1234',
  type: EquipmentType.GROUND,
  title: '2',
  amount: '10',
  date: new Date().toString(),
  comment: 'Test',
})

describe('Equipment', () => {
  let store = mockStore()
  beforeEach(() => {
    store = mockStore()
  })

  it('equipmentPending', () => {
    const action = equipmentPending()
    // console.log(action)
    expect(equipmentReducer(store, action)).toMatchObject({loading: true})
  })

  it('equipmentAdd', () => {
    const data = getEquipmentPayload()
    const action = equipmentAdd(data)
    expect(equipmentReducer(store, action)).toMatchObject({data: [data]})
  })
})