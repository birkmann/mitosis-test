import { useState } from '@builder.io/mitosis'

import s from './Button.module.scss'

type Props = {
  text: string
}

export default function Button(props: Props) {
  const [name, setName] = useState('fromState')
  const [clicked, setClicked] = useState(0)

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button
        className={s.Button}
        onClick={() => {
          setClicked(clicked + 1)
        }}
      >
        <span>{props.text}</span>
        <br />
        <span>{name}</span>
      </button>
      <div>Clicked: {clicked}</div>
    </div>
  )
}
