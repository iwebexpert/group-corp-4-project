import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { SelectChangeEvent } from '@mui/material'

import DatePicker from '@mui/lab/DatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import ruLocale from 'date-fns/locale/ru'
import { EquipmentPayload } from 'actions/equipment'
import { EquipmentStatus } from './DrillingEquipmentTable'

export enum EquipmentType {
  GROUND = 'ground-equipment',
  UNDERGROUND = 'underground-equipment',
}

export type EquipmentTitleArrayType = {
  id: string
  type: EquipmentType
  title: string
  value: string
}

export const dataSelectEquipmentTitleArray: EquipmentTitleArrayType[] = [
  {
    id: '1',
    type: EquipmentType.UNDERGROUND,
    title: 'Бур (подземное)',
    value: '1',
  },
  {
    id: '2',
    type: EquipmentType.UNDERGROUND,
    title: 'Насос (подземное)',
    value: '2',
  },
  {
    id: '3',
    type: EquipmentType.GROUND,
    title: 'Металлическая конструкция для буровой вышки (наземное)',
    value: '3',
  },
  {
    id: '4',
    type: EquipmentType.GROUND,
    title: 'Электродвигатель (наземное)',
    value: '4',
  },
]

type DrillingEquipmentFormProps = {
  dataInitial: EquipmentPayload | null
  onAdd: (data: EquipmentPayload) => void
  onSave: (data: EquipmentPayload) => void
  onReset: () => void
}

export default function DrillingEquipmentForm({
  dataInitial,
  onAdd,
  onSave,
  onReset,
}: DrillingEquipmentFormProps) {
  const equipmentTypeSelect = useRef<HTMLInputElement>(null)

  //State
  const [equipmentId, setEquipmentId] = useState<string | null>(null)
  const [equipmentType, setEquipmentType] = useState<EquipmentType>(EquipmentType.GROUND)
  const [equipmentTitle, setEquipmentTitle] = useState<string>('')
  const [equipmentAmount, setEquipmentAmount] = useState<string>('1')
  const [equipmentDate, setEquipmentDate] = useState<Date | null>(new Date())
  const [equipmentComment, setEquipmentComment] = useState<string>('')

  useEffect(() => {
    if (dataInitial) {
      setEquipmentId(dataInitial.id)
      setEquipmentType(dataInitial.type)
      setEquipmentTitle(dataInitial.title)
      setEquipmentAmount(dataInitial.amount)
      setEquipmentDate(new Date(dataInitial.date))
      setEquipmentComment(dataInitial.comment)
    } else {
      setEquipmentId(null)
      setEquipmentType(EquipmentType.GROUND)
      setEquipmentTitle('')
      setEquipmentAmount('1')
      setEquipmentDate(new Date())
      setEquipmentComment('')
    }
  }, [dataInitial])

  const getTitleOptions = (action: string | null = null) => {
    const options = dataSelectEquipmentTitleArray
      .filter((item) => item.type === equipmentType)
      .map((item) => (
        <MenuItem key={item.id} value={item.value}>
          {item.title}
        </MenuItem>
      ))

    if (action === 'count') {
      return options.length
    }
    return options
  }

  const handleEquipmentTypeChange = (event: SelectChangeEvent<EquipmentType>) => {
    setEquipmentType(event.target.value as EquipmentType)
    setEquipmentTitle('')
  }

  const handleEquipmentTitleChange = (event: SelectChangeEvent<string>) => {
    setEquipmentTitle(event.target.value)
  }

  const handleEquipmentAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEquipmentAmount(event.target.value)
  }

  // const handleEquipmentDateChange = (event) => {
  //   setEquipmentDate(event.target.value)
  // }

  const handleEquipmentCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEquipmentComment(event.target.value)
  }

  const handleSubmit = () => {
    // Валидация данных
    if (equipmentType === null || equipmentTitle === '0' || equipmentDate === null) {
      alert('Выберите тип оборудования')
      return
    }

    let data: EquipmentPayload = {
      id: equipmentId ?? uuidv4(),
      type: equipmentType,
      title: equipmentTitle,
      amount: equipmentAmount,
      date: equipmentDate.toString(),
      comment: equipmentComment,
    }

    if (equipmentId) {
      onSave(data)
    } else {
      data = {
        ...data,
        status: EquipmentStatus.STATUS_PENDING,
        rejection_reason: '',
        approval_date: '',
      }
      onAdd(data)
    }
  }

  useEffect(() => {
    if (equipmentTypeSelect && equipmentTypeSelect.current) {
      equipmentTypeSelect.current?.focus()
    }
  }, [])

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <Typography component="h2" color="primary">
          Форма заявки на оборудование
        </Typography>

        {equipmentId && (
          <TextField
            fullWidth
            sx={{ m: 1 }}
            id="equipment-id"
            type="text"
            label="ID"
            value={equipmentId}
            disabled
          />
        )}

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="equipment-type-label">Тип оборудования</InputLabel>
          <Select
            ref={equipmentTypeSelect}
            id="equipment-type-select"
            label="Тип оборудования"
            value={equipmentType}
            onChange={handleEquipmentTypeChange}
          >
            <MenuItem value="">Выберите тип оборудования</MenuItem>
            <MenuItem value="ground-equipment">Наземное оборудование</MenuItem>
            <MenuItem value="underground-equipment">Подземное оборудование</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel id="equipment-title-label">Наименование</InputLabel>
          <Select
            id="equipment-title-select"
            label="Наименование"
            value={equipmentTitle}
            onChange={handleEquipmentTitleChange}
            disabled={!getTitleOptions('count')}
          >
            <MenuItem value="0">Выберите наименование оборудования</MenuItem>
            {getTitleOptions()}
          </Select>
        </FormControl>

        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="equipment-amount"
          type="number"
          label="Количество"
          value={equipmentAmount}
          onChange={handleEquipmentAmountChange}
        />

        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
          <DatePicker
            label=""
            mask={'__.__.____'}
            value={equipmentDate}
            onChange={(newDate) => {
              setEquipmentDate(newDate)
            }}
            renderInput={(params) => <TextField fullWidth sx={{ m: 1 }} {...params} />}
          />
        </LocalizationProvider>

        <TextField
          fullWidth
          sx={{ m: 1 }}
          id="equipment-comment"
          label="Обоснование"
          type="text"
          multiline
          rows={6}
          value={equipmentComment}
          onChange={handleEquipmentCommentChange}
        />

        {equipmentId ? (
          <>
            <Button sx={{ m: 1 }} variant="outlined" onClick={onReset}>
              Отмена
            </Button>
            <Button sx={{ m: 1 }} variant="outlined" onClick={handleSubmit}>
              Сохранить
            </Button>
          </>
        ) : (
          <Button className="btn-create" fullWidth sx={{ m: 1 }} variant="outlined" onClick={handleSubmit}>
            Создать новую заявку на оборудование
          </Button>
        )}
      </Box>
    </>
  )
}

DrillingEquipmentForm.defaultProps = {
  onAddEquipment: () => {},
}

DrillingEquipmentForm.propTypes = {
  onAddEquipment: PropTypes.func.isRequired,
}
