import React from 'react'
import { TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

export type FormInputTextType = {
  control: Control
  name: string
  label: string
  type: 'number'
  defaulValue: string
  onBlurCustom: (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => void
}

export default function FormInputText({control, name, label, type, defaulValue, onBlurCustom}: FormInputTextType) {
  return (
    <Controller
    control={control}
    name={name}
    defaultValue={defaulValue}
    render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
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
      />
    )}
    />
  )
}
