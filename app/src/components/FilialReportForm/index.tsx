import FilialReportForm from './FilialReportForm'
import { step1, step2, step3, step4, step5, step6, step7, step8 } from './fields'
import { FilialReportFormStep } from './schema'

export const fields: FilialReportFormStep[] = [
  [...step1],
  [...step2],
  [...step3],
  [...step4],
  [...step5],
  [...step6],
  [...step7],
  [...step8],
]

export default FilialReportForm
