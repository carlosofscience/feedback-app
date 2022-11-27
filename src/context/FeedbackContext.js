import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{

  const [feedback, setFeedback] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item:{},
    edit:false
  });

  //on page load (use empty array for this and run once)
  useEffect(()=>{
    fetchFeedback()
  },[])

  const fetchFeedback = async ()=>{
    const res =  await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await res.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const deleteFeedback = async (id)=>{
    if(window.confirm('Are you sure you want to delete this feedback?')) {

      await fetch(`/feedback/${id}`, {method:'DELETE'})
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = async (newFeedback)=>{

    const res =  await fetch('/feedback', {
      method:'POST',
      headers:{
        'content-Type':'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await res.json()
    setFeedback([data, ...feedback])
  }
  
  const updateFeedback = async (id, updatedItem)=>{
    const res = await fetch(`/feedback/${id}`, {method:'PUT', headers:{'Content-Type':"application/json"}, body: JSON.stringify(updatedItem)})
    const data = await res.json();
    setFeedback(feedback.map((item)=>item.id === id ? {...item, ...data}: item))
  }

  //set item to be updated
  const editFeedback = async (item)=>{
    setFeedbackEdit({
      item, 
      edit:true
    })
  } 

  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
    setFeedbackEdit
  }}>
    {children}
  </FeedbackContext.Provider>
}


export default FeedbackContext