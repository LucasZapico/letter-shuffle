import React, { useEffect } from 'react'
import { Select } from '@chakra-ui/react'
import { generate } from 'shortid'
import { SetCountType, CountType, Count } from 'store'

const countArr = Array.from({ length: 10 }, (x, i) => i + 1)

const IterationCount = ({
  count,
  setCount,
}: {
  count: CountType
  setCount: SetCountType
}) => {
  return (
    <Select
      flexBasis={{ base: '10%' }}
      onChange={({ target: { value } }) => setCount((prev) => parseInt(value))}
      value={count}
    >
      {countArr.map((c) => (
        <option key={generate()} value={c}>
          {c}
        </option>
      ))}
    </Select>
  )
}

export default IterationCount
