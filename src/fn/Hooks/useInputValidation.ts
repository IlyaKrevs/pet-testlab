import React, { useCallback, useState } from "react"

type value = string
type isValid = boolean | null
type handler = (e: React.ChangeEvent<HTMLInputElement>) => void
type resetFN = () => void

type hookResult = [value, isValid, handler, resetFN]

function useInputValidation(pattern: RegExp): hookResult {

    const [value, setValue] = useState<value>('')

    let isValid: isValid = null

    if (value.length > 3) {
        isValid = pattern.test(value)
    }

    let handlerOnChange: handler = useCallback((e) => setValue(e.target.value), [])

    let resetFn: resetFN = useCallback(() => setValue(''), [])

    return [value, isValid, handlerOnChange, resetFn]
}

export { useInputValidation }