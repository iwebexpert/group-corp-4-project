import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Divider, Link, Typography } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'

import DatePicker from '@mui/lab/DatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ruLocale from 'date-fns/locale/ru'

import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Helmet from 'react-helmet'

import { equipmentFetch, EquipmentPayload } from 'actions/equipment'
import { equipmentFormApprove, equipmentFormReject } from 'actions/equipmentForm'
import ContainerWrapper from './ContainerWrapper'
import { dataSelectEquipmentTitleArray } from 'components/DrillingEquipmentForm'
import { EquipmentStatus } from 'components/DrillingEquipmentTable'
import { AppState } from 'reducers/index'

export default function PageEquipmentItem() {
  const params = useParams()
  const defaultActionOptional = params.action || null

  const [rejectReason, setRejectReason] = useState<string>('')
  const [formDate, setFormDate] = useState<Date | null>(null)

  const dispatch = useDispatch()
  const equipment: EquipmentPayload = ([...useSelector((state: AppState) => state.equipment.data)]
    .filter((item) => item.id === params.id)
    .reduce((acc, current, i) => {
      return current
    }, {}) as EquipmentPayload)

  useEffect(() => {
    if (Object.keys(equipment).length !== 0) {
      return
    }
    dispatch(equipmentFetch())
  }, [])

  const getTitleOneOption = (value: string) => {
    const option = dataSelectEquipmentTitleArray.filter((item) => item.value == value)
    return option.length === 1 ? option[0].title : value
  }

  const handleSubmitApprove = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(formDate !== null){
      dispatch(equipmentFormApprove(equipment.id, formDate.toString()))
    } else {
      alert('Поле дата обязательно для заполнения')
    }
  }

  const handleSubmitReject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(equipmentFormReject(equipment.id, rejectReason))
  }

  if (!equipment) {
    return <ContainerWrapper>Loading...</ContainerWrapper>
  }

  return (
    <ContainerWrapper>
      <Helmet>
        <title>Заявка на оборудование №{equipment.id}</title>
      </Helmet>

      <Link component={LinkRouter} to="/equipment" mb={5}>
        Назад к заявкам
      </Link>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Заявка на оборудование №{equipment.id}
      </Typography>
      <Divider />

      <Typography component="div" variant="body1" gutterBottom mt={2}>
        Тип оборудования
      </Typography>
      <Typography component="div" variant="body2" gutterBottom mb={2}>
        {equipment.type}
      </Typography>

      <Typography component="div" variant="body1" gutterBottom mt={2}>
        Наименование
      </Typography>
      <Typography component="div" variant="body2" gutterBottom mb={2}>
        {getTitleOneOption(equipment.title)}
      </Typography>

      <Typography component="div" variant="body1" gutterBottom mt={2}>
        Количество
      </Typography>
      <Typography component="div" variant="body2" gutterBottom mb={2}>
        {equipment.amount}
      </Typography>

      <Typography component="div" variant="body1" gutterBottom mt={2}>
        Дата создания заявки
      </Typography>
      <Typography component="div" variant="body2" gutterBottom mb={2}>
        {equipment.date}
      </Typography>

      <Typography component="div" variant="body1" gutterBottom mt={2}>
        Комментарий
      </Typography>
      <Typography component="div" variant="body2" gutterBottom mb={2}>
        {equipment.comment}
      </Typography>

      <Typography component="div" variant="body1" gutterBottom mt={2}>
        Статус заявки
      </Typography>
      <Typography component="div" variant="body2" gutterBottom mb={2}>
        {equipment.status || 'Статус не задан'}
      </Typography>
      <Divider />

      {defaultActionOptional === 'approve' && equipment.status === EquipmentStatus.STATUS_PENDING && (
        <>
          <Typography component="h2" variant="h6" color="primary" mt={2}>
            Утверждение заявки на оборудование
          </Typography>
          <Box component="form" onSubmit={handleSubmitApprove} sx={{ mt: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
              <DatePicker
                label=""
                mask={'__.__.____'}
                value={formDate}
                onChange={(date) => setFormDate(date)}
                renderInput={(params) => <TextField required fullWidth sx={{ m: 1 }} {...params} />}
              />
            </LocalizationProvider>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Утвердить
            </Button>
          </Box>
        </>
      )}

      {defaultActionOptional === 'reject' && equipment.status === EquipmentStatus.STATUS_PENDING && (
        <>
          <Typography component="h2" variant="h6" color="primary" mt={2}>
            Отклонение заявки на оборудование
          </Typography>
          <Box component="form" onSubmit={handleSubmitReject} sx={{ mt: 1 }}>
            <FormControl fullWidth sx={{ m: 1 }}>
              <InputLabel id="equipment-action-label">Выберите причину</InputLabel>
              <Select
                id="equipment-action-select"
                label="Выберите причину"
                value={rejectReason}
                onChange={(event) => setRejectReason(event.target.value)}
                required
              >
                <MenuItem value="">Выберите причину отказа</MenuItem>
                <MenuItem value="Оборудование отсутствует">Оборудование отсутствует</MenuItem>
                <MenuItem value="Указан слишком маленький срок поставки оборудования">Указан слишком маленький срок поставки оборудования</MenuItem>
                <MenuItem value="Другая причина">Другая причина</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Отклонить заявку
            </Button>
          </Box>
        </>
      )}
    </ContainerWrapper>
  )
}
