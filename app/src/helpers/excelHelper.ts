import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx'

const type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
const extension = '.xlsx'

export const exportToExcel = (dataJson: string[], fileName: string) => {
  const ws = XLSX.utils.json_to_sheet(dataJson)
  const wb = {Sheets: {data: ws}, SheetNames: ['data']}
  const buffer = XLSX.write(wb, {bookType: 'xlsx', type: 'array'})
  const data = new Blob([buffer], {type: type})
  FileSaver.saveAs(data, `${fileName}${extension}`)
}