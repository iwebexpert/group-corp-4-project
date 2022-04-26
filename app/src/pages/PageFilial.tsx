import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import ContainerWrapper from './ContainerWrapper'
import { useDispatch, useSelector } from 'react-redux'
import {
  DataGrid,
  GridActionsCellItem,
  GridToolbarContainer,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarContainerProps,
  GridValueFormatterParams,
} from '@mui/x-data-grid'
import { filialFetch } from 'actions/filial'

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import HtmlIcon from '@mui/icons-material/Html'

import { Link } from 'react-router-dom'
import ExcelExportMenuItem from 'components/ExcelExportMenuItem'
import { getAllFieldsDescription } from 'components/FilialReportForm/schema'
import { urls } from 'helpers/requestHelper'
import { AppState } from 'reducers/index'
import { ButtonProps } from '@mui/material'


type FilialDataGridColumn = {
  field: string
  headerName: string
  description: string
  type: 'number' | 'actions'
  minWidth?: number
  width?: number
}

export default function PageFilial() {
  const dispatch = useDispatch()
  const filial = useSelector((state: AppState) => state.filial.data)

  useEffect(() => {
    dispatch(filialFetch())
  }, [])

  const rows = filial

  const downloadPdf = (id: string) => () => {
    window.open(urls.filialReportDownloadLink(id, 'pdf'))
  }

  const downloadHtml = (id: string) => () => {
    window.open(urls.filialReportDownloadLink(id, 'html5'))
  }

  const CustomExportButton = (props: ButtonProps) => (
    <GridToolbarExportContainer {...props}>
      <GridCsvExportMenuItem options={{ delimiter: ';' }} />
      <ExcelExportMenuItem />
    </GridToolbarExportContainer>
  )

  const CustomToolbar = (props: GridToolbarContainerProps) => (
    <GridToolbarContainer {...props}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <CustomExportButton />
    </GridToolbarContainer>
  )

  const getReportColumns = () => {
    const fieldDescription = getAllFieldsDescription()

    const columns: FilialDataGridColumn[] = []
    if (rows.length < 1) {
      return columns
    }

    for (let i = 0; i < fieldDescription.length; i++) {
      columns.push({
        field: fieldDescription[i].name,
        headerName: fieldDescription[i].label,
        description: fieldDescription[i].label,
        type: 'number',
        minWidth: 120,
      })
    }

    return columns
  }

  const columns = [
    {
      field: 'id',
      type: 'number',
      headerName: 'Номер',
      minWidth: 60,
    },
    {
      field: 'date',
      type: 'string',
      headerName: 'Дата',
      minWidth: 150,
      valueFormatter: (params: GridValueFormatterParams) => {
        const value = new Date(params.value).getFullYear()
        return `${value} г.`
      },
    },
    {
      field: 'filial',
      type: 'number',
      headerName: 'Филиал',
      minWidth: 150,
    },
    {
      field: 'user',
      type: 'string',
      headerName: 'Пользователь',
      description: 'Пользователь, который заполнил отчет',
      minWidth: 100,
      // flex: 1,
    },
    ...getReportColumns(),
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Скачать',
      width: 80,
      // @ts-ignore
      getActions: (params) => [
        <GridActionsCellItem
          icon={<PictureAsPdfIcon />}
          label="Скачать отчет в PDF"
          onClick={downloadPdf(params.id)}
        />,
        <GridActionsCellItem
          icon={<HtmlIcon />}
          label="Скачать отчет в HTML"
          onClick={downloadHtml(params.id)}
        />,
      ],
    },
  ]

  return (
    <ContainerWrapper>
      <Helmet>
        <title>Отчет по филиалам</title>
      </Helmet>

      <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          columns={columns}
          rows={rows}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </div>
    </ContainerWrapper>
  )
}
