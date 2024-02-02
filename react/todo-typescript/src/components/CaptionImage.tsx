import React , {useState} from 'react'

export type Props = {
    imgUrl: string,
    text: string
}


export default function CaptionImage({imgUrl, text} : Props) {
  const [count, setCount] = useState<{
    value: number,
    mutation: number 
  }>({value:0, mutation:0});
  
  return (
    <div>
      <h3>뭉게뭉게 {text}</h3>
      <img src={imgUrl}></img>
    </div>
  )
}
