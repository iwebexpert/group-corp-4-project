import * as yup from 'yup'
import { fields } from '.'

export type FilialReportFormField = {
  name: string
  label: string
  type: 'number'
  summa?: Array<string>
  subtract?: Array<string>
}

export type FilialReportFormGroup = {
  title: string
  stringNumber: string
  fields: FilialReportFormField[]
  localStorageKey?: string
}

export type FilialReportFormStep = FilialReportFormGroup[]

export function getSchema(fields: FilialReportFormStep) {
  const oneFieldSchema = yup.number().min(0).required()

  const shapeSchema = {}

  for (let i = 0; i < fields.length; i++) {
    let inner = fields[i].fields
    for (let j = 0; j < inner.length; j++) {
      // @ts-ignore
      shapeSchema[inner[j].name] = oneFieldSchema
    }
  }

  return yup.object().shape(shapeSchema).required()
}

export function getAllFieldsDescription() {
  const rows = []
  for (let i = 0; i < fields.length; i++) {
    let stepGroup = fields[i]
    for (let j = 0; j < stepGroup.length; j++) {
      let inner = stepGroup[j].fields
      for (let k = 0; k < inner.length; k++) {
        rows.push(inner[k])
      }
    }
  }
  return rows
}
