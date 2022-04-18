import React from 'react'
import {MenuItem} from '@mui/material'
import {useGridApiContext, gridFilteredSortedRowIdsSelector, gridVisibleColumnFieldsSelector, GridExportMenuItemProps} from '@mui/x-data-grid'
import {exportToExcel} from 'helpers/excelHelper'
import { GridApiCommunity } from '@mui/x-data-grid/models/api/gridApiCommunity'

interface IObjectKeys {
  [key: string]: string | number
}

const getJson = (apiRef: React.MutableRefObject<GridApiCommunity>) => {
  // Select rows and columns
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  // Format the data. Here we only keep the value
  const data = filteredSortedRowIds.map((id) => {
    const row: IObjectKeys = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  // Stringify with some indentation
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters
  return JSON.stringify(data, null, 2);
};

export default function ExcelExportMenuItem(props: GridExportMenuItemProps<{}>) {
const apiRef = useGridApiContext()

const {hideMenu} = props

  return (
    <MenuItem
      onClick={() => {
        const jsonString = getJson(apiRef)
        exportToExcel(JSON.parse(jsonString), 'report')

        hideMenu?.()
      }}
    >
      Экспорт в Excel
    </MenuItem>
  )
}
