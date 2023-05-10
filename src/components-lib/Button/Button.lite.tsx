import { useState } from '@builder.io/mitosis'

import s from './Button.module.scss'

type Props = {
  text: string
}

export default function Button(props: Props) {
  const [name, setName] = useState('Alex')

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button className={s.Button}>
        <span>{props.text}</span>
        <span>{name}</span>
      </button>
    </div>
  )
}