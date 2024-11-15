'use client'

import * as React from 'react'
import { SelectInput, useField, useWatchForm, useTranslation } from '@payloadcms/ui'

import { State } from 'country-state-city'

const texts = {
  label: {
    tr: 'Eyalet',
    en: 'State',
  },
  noStates: {
    en: 'No states were found for the selected country.',
    tr: 'Seçilen ülke için eyalet bulunamadı.',
  },
}

const StatesComponent: React.FC<any> = ({ path }) => {
  const { value, setValue } = useField<string>({ path })
  const {
    i18n: { language: lang },
  } = useTranslation()
  const { getDataByPath } = useWatchForm()
  const country: string = getDataByPath('country')
  const states = React.useMemo(() => State.getStatesOfCountry(country), [country])

  const stateOptions = React.useMemo(
    () =>
      states.map((state) => ({
        value: state.isoCode,
        label: state.name,
      })),
    [states],
  )

  if (!country) {
    return null
  }

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label className="field-label">{texts.label[lang]}</label>
      {stateOptions.length > 0 ? (
        <SelectInput
          path={path}
          name={path}
          options={stateOptions}
          value={value}
          onChange={(selected: any) => setValue(selected?.value)}
        />
      ) : (
        texts.noStates[lang]
      )}
    </div>
  )
}

export default StatesComponent
