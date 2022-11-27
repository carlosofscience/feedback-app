import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({select}) {

  const [selected, setSelected] = useState(10); 
  const {feedbackEdit} = useContext(FeedbackContext)
  
  const handleChange = (e)=>{
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }
  
  useEffect(()=>{
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  let inputs = [];
  for(let i=1; i <=10; i++){
    inputs.push(<li key={i}><input type="radio" name="rating" id={`num${i}`} value={i} onChange={handleChange} checked={selected === i} /><label htmlFor={`num${i}`}>{i}</label></li>)
  }
  
  return (
    <ul className="rating">
        {inputs.map(input=>(input))}
    </ul>
  )
}

export default RatingSelect