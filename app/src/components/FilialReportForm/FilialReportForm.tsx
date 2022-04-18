import { Alert, Box, Button, Typography, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInputText from './FormInputText'
import FormInputTextWithButton from './FormInputTextWithButton'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { getParams, setParam } from '../../helpers/localStorageHelper'
import { FilialReportFormField, FilialReportFormStep } from './schema'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

yup.setLocale({
  mixed: {
    default: 'Поле заполнено неправильно',
    required: 'Поле обязательно для заполнения',
  },
  number: {
    min: 'Минимальное значение поля может быть ${min}',
  },
})

type FilialReportFormProps = {
  step: number
  fields: FilialReportFormStep
  schema: yup.AnyObjectSchema
}

export default function FilialReportForm({ step, fields, schema }: FilialReportFormProps) {

  const [isValidForm, setIsValidForm] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [dataErrorsModal, setDataErrorsModal] = useState<JSX.Element[] | null>(null)

  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)

  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const onSubmit = () => {
    setIsValidForm(true)
  }

  const onBlurSaveLocalStorage = (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => {
    const name = event.target.name
    const value = event.target.value
    updateLocalStorage(name, value)
  }

  const updateLocalStorage = (name: string, value: string) => {
    if (name) {
      setParam('filial.form', name, value)
    }
  }

  const getDefaultInputValue = (name: string) => {
    let value = ''

    if (name) {
      value = getParams('filial.form', '', name)
    }

    return value
  }

  const calculate = (item: FilialReportFormField) => {
    const fieldName = item.name
    const fields = item.summa
    const fieldsSubtract = item.subtract ?? null

    return () => {
      if (!fields || !fields.length) {
        return () => {}
      }

      let summa = 0
      const errors: JSX.Element[] = []
      for (let i = 0; i < fields.length; i++) {
        let currentValue = +getValues(fields[i])
        if (currentValue) {
          summa += currentValue
        } else {
          errors.push(<div key={i}>{`Поле ${fields[i]} не заполнено`}</div>)
        }
      }

      if (fieldsSubtract) {
        for (let i = 0; i < fieldsSubtract.length; i++) {
          let currentValue = +getValues(fieldsSubtract[i])
          if (currentValue) {
            summa -= currentValue
          } else {
            errors.push(<div key={i}>{`Поле ${fieldsSubtract[i]} не заполнено`}</div>)
          }
        }
      }

      if (errors.length > 0) {
        setDataErrorsModal(errors)
        handleOpenModal()
      } else {
        setValue(fieldName, summa.toString())
        updateLocalStorage(fieldName, summa.toString())
      }
    }
  }

  useEffect(() => {
    setIsValidForm(false)
  }, [step])

  if (!fields) {
    return (
      <>
        <Typography variant="body2" mt={3}>
          Отсутствуют поля для заполнения в этом разделе
        </Typography>
      </>
    )
  }

  return (
    <>
      <Box component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((group, index) => {
          return (
            <React.Fragment key={index + group.stringNumber}>
              <Typography variant="h5" mt={3}>
                {group.title} (строка №{group.stringNumber})
              </Typography>
              {group.fields.map((field) => {
                return (
                  <React.Fragment key={field.name}>
                    {!field.summa && (
                      <FormInputText
                        control={control}
                        name={field.name}
                        type={field.type}
                        label={field.label}
                        defaulValue={getDefaultInputValue(field.name)}
                        onBlurCustom={onBlurSaveLocalStorage}
                      />
                    )}

                    {field.summa && (
                      <FormInputTextWithButton
                        control={control}
                        name={field.name}
                        type={field.type}
                        label={field.label}
                        defaulValue={getDefaultInputValue(field.name)}
                        onBlurCustom={onBlurSaveLocalStorage}
                        onCalculate={calculate(field)}
                      />
                    )}
                  </React.Fragment>
                )
              })}
            </React.Fragment>
          )
        })}

        <Button
          type="submit"
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => {
            setIsValidForm(false)
          }}
        >
          Проверить валидность формы
        </Button>
        {isValidForm && (
          <Alert severity="success">
            Форма заполнена!
            <br /> Переходите к следующему разделу.
          </Alert>
        )}
      </Box>
      <Modal
        open={isOpenModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ошибки при заполнении формы
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {dataErrorsModal}
          </Typography> */}
          {dataErrorsModal}
          <Button sx={{ mt: 3 }} onClick={handleCloseModal}>
            Закрыть окно
          </Button>
        </Box>
      </Modal>
    </>
  )
}
