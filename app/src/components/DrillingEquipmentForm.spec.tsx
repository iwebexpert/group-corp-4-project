import React from 'react'
import MockDate from 'mockdate'
import uuid from 'uuid'
import { test, expect } from '@jest/globals'
import { fn } from 'jest-mock'

import { mount } from 'enzyme'
import DrillingEquipmentForm from './DrillingEquipmentForm'
import { JoinLeftSharp } from '@mui/icons-material'

test('DrillingEquipmentForm should be rendered', () => {
  const mockOnAdd = fn()
  const mockOnReset = fn()
  const mockOnSave = fn()
  const form = mount(
    <DrillingEquipmentForm
      dataInitial={null}
      onAdd={mockOnAdd}
      onReset={mockOnReset}
      onSave={mockOnSave}
    />,
  )

  expect(mockOnAdd.mock.calls.length).toBe(0)
  form.find('button.btn-create').simulate('click')

  expect(mockOnAdd.mock.calls.length).toBe(1)
  expect(mockOnAdd).toBeCalled()
  expect(mockOnAdd).toHaveBeenCalled()

  expect(mockOnAdd.mock.calls[0][0]).toMatchObject({
    amount: '1',
    comment: "",
    rejection_reason: "",
    status: "STATUS_PENDING",
    title: "",
    type: "ground-equipment",
  })
})


const uuidString = 'a475ea29-ac9e-4cdb-ab35-4e69253e0000'
// @ts-ignore
jest.mock('uuid', () => ({
  v4: () => uuidString
}))

test('DrillingEquipmentForm should be rendered 2', () => {
  const mockOnAdd = fn()
  const mockOnReset = fn()
  const mockOnSave = fn()

  MockDate.set('2010-10-20')
  const form = mount(
    <DrillingEquipmentForm
      dataInitial={null}
      onAdd={mockOnAdd}
      onReset={mockOnReset}
      onSave={mockOnSave}
    />,
  )
  MockDate.reset()

  form.find('#equipment-type-select input').at(0).simulate('change', {target: {value: 'underground-equipment'}})
  form.find('#equipment-comment textarea').at(0).simulate('change', {target: {value: 'Test1234'}})

  // form.find('button.btn-create').simulate('click')
  form.find({type: 'button'}).at(0).simulate('click')
  expect(mockOnAdd).toBeCalled()

  expect(mockOnAdd.mock.calls[0][0]).toEqual({
    amount: '1',
    comment: "Test1234",
    rejection_reason: "",
    status: "STATUS_PENDING",
    title: "",
    type: "underground-equipment",
    approval_date: "",
    date: new Date('2010-10-20').toString(),
    id: uuidString
  })
})
