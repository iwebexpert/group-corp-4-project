import React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepButton from '@mui/material/StepButton'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Helmet from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'

import ContainerWrapper from './ContainerWrapper'
import FilialReportForm, { fields } from 'components/FilialReportForm'
import { filialFormSend } from 'actions/filial'
import { Alert } from '@mui/material'
import { getSchema } from 'components/FilialReportForm/schema'
import { AppState } from 'reducers/index'

const steps = [
  'Раздел 1. Добыча нефти, тонн',
  'Раздел 2. Баланс календарного времени фонда нефтяных скважин, часов',
  'Раздел 3. Ввод в действие скважин, единиц',
  'Раздел 4. Добыча нефти из пластов, разрабатываемых с применением методов искусственного воздействия на пласт, тонн',
  'Раздел 5. Фонд скважин на конец отчетного периода, единиц',
  'Раздел 6. Добыча нефтяного (попутного) газа, тысяч кубических метров',
  'Раздел 7. Движение нефти (включая газовый конденсат) с начала года, тонн',
  'Раздел 8. Подготовка нефти (включая газовый конденсат), тонн',
]

export default function PageFilialForm() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({})
  const isFormSend = useSelector((state: AppState) => state.filial.isFormSend)

  const dispatch = useDispatch()

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCompleted({})
  }

  const handleSendReport = () => {
    const items = localStorage.getItem('filial.form')
    if (items === null) return

    const fields = JSON.parse(items)
    dispatch(filialFormSend(fields))
  }

  if (isFormSend) {
    return (
      <ContainerWrapper>
        <Alert severity="success">Отчет успешно отправлен</Alert>
      </ContainerWrapper>
    )
  }

  return (
    <ContainerWrapper>
      <Helmet>
        <title>Форма № 1-ТЭК (нефть)</title>
      </Helmet>

      <Box sx={{ width: '100%' }}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>Форма успешно заполнена!</Typography>
              <Typography sx={{ mt: 2, mb: 1 }}>
                Нажмите &laquo;Сдать годовой отчет&raquo;
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleSendReport} color="primary" variant="contained">
                  Сдать годовой отчет
                </Button>
                <Button onClick={handleReset}>Сброс</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>Раздел {activeStep + 1}</Typography>

              <FilialReportForm
                step={activeStep}
                fields={fields[activeStep]}
                schema={getSchema(fields[activeStep])}
              />

              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Назад
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleNext} sx={{ mr: 1 }}>
                  Вперед
                </Button>
                {activeStep !== steps.length &&
                  (completed[activeStep] ? (
                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                      Раздел {activeStep + 1} заполнен
                    </Typography>
                  ) : (
                    <Button onClick={handleComplete} variant="contained">
                      {completedSteps() === totalSteps() - 1
                        ? 'Перейти к отправке формы'
                        : 'Раздел заполнен верно'}
                    </Button>
                  ))}
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </ContainerWrapper>
  )
}
