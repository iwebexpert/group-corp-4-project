import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import CalculateIcon from '@mui/icons-material/Calculate'
import { FormInputTextType } from './FormInputText'

type FormInputTextWithButton = FormInputTextType & {
  onCalculate: () => void
}

export default function FormInputTextWithButton({
  control,
  name,
  label,
  type,
  defaulValue,
  onBlurCustom,
  onCalculate,
}: FormInputTextWithButton) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaulValue}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          name={name}
          margin="normal"
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          onBlur={(event) => {onBlurCustom(event); return onBlur()}}
          value={value || ''}
          fullWidth
          label={label}
          variant="outlined"
          required
          InputProps={{
            endAdornment: (
              <InputAdornment onClick={onCalculate} position="start" style={{ cursor: 'pointer' }}>
                <CalculateIcon />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}
