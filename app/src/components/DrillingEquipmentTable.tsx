import React from 'react'

import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

import { dataSelectEquipmentTitleArray, EquipmentTitleArrayType, EquipmentType } from './DrillingEquipmentForm'
import styled from '@emotion/styled'
import { Link } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'

const DeleteIconCustom = styled(DeleteIcon)`
  color: red;
  cursor: pointer;
`

const EditIconCustom = styled(EditIcon)`
  color: green;
  cursor: pointer;
`

const CheckIconCustom = styled(CheckIcon)`
  color: green;
  cursor: pointer;
`

const DoNotDisturbAltIconCustom = styled(DoNotDisturbAltIcon)`
  color: orange;
  cursor: pointer;
`

export enum EquipmentStatus {
  STATUS_PENDING = 'STATUS_PENDING',
  STATUS_APPROVED = 'STATUS_APPROVED',
  STATUS_REJECTED = 'STATUS_REJECTED',
}

type DrillingEquipmentItem = {
  id: string
      type: EquipmentType
      title: string
      amount: string
      date: string
      comment: string
      status?: EquipmentStatus
      rejection_reason?: string
      approval_date?: string
}

type DrillingEquipmentTableProps = {
  equipment: DrillingEquipmentItem[]
  onDeleteEquipment: (id:string) => void
  onEditEquipmentMode: (id:string) => void
}

const DrillingEquipmentTable:React.FC<DrillingEquipmentTableProps> = ({ equipment, onDeleteEquipment, onEditEquipmentMode }) => {
  const getTitleOneOption = (value: string) => {
    const option = dataSelectEquipmentTitleArray.filter((item: EquipmentTitleArrayType) => item.value == value)
    return option.length === 1 ? option[0].title : value
  }

  const getStatusColumn = (item: DrillingEquipmentItem) => {
    let data = null

    switch (item.status) {
      case EquipmentStatus.STATUS_PENDING:
        data = (
          <>
            На рассмотрении{' '}
            <Link component={LinkRouter} to={`/equipment/${item.id}/action/approve`}>
              <CheckIconCustom sx={{fontSize: 20}} />
            </Link>{' '}
            <Link component={LinkRouter} to={`/equipment/${item.id}/action/reject`}>
            <DoNotDisturbAltIconCustom sx={{fontSize: 20}} />
            </Link>
          </>
        )
        break

      case EquipmentStatus.STATUS_APPROVED:
        data = <>Утверждена. Дата поставки оборудования: {item.approval_date}</>
        break

      case EquipmentStatus.STATUS_REJECTED:
        data = <>Отказ. Причина: {item.rejection_reason}</>
        break
    }

    return data
  }

  return (
    <>
      <Typography component="h2" color="primary">
        Заявки на оборудование
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Тип</TableCell>
            <TableCell>Наименование</TableCell>
            <TableCell>Количество</TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>Комментарий</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equipment.map((obj, index) => (
            <TableRow key={index}>
              <TableCell><Link component={LinkRouter} to={`/equipment/${obj.id}`}>{index + 1}</Link></TableCell>
              <TableCell>{obj.type}</TableCell>
              <TableCell>{getTitleOneOption(obj.title)}</TableCell>
              <TableCell>{obj.amount}</TableCell>
              <TableCell>{obj.date.toString()}</TableCell>
              <TableCell>{obj.comment}</TableCell>
              <TableCell>{getStatusColumn(obj)}</TableCell>
              <TableCell>
                <EditIconCustom color="secondary" onClick={() => onEditEquipmentMode(obj.id)} />
                <DeleteIconCustom color="secondary" onClick={() => onDeleteEquipment(obj.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default DrillingEquipmentTable