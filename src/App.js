import {v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'


function App() {
  
  const [feedback, seTfeedback] = useState(FeedbackData);
  
  const deleteFeedback = (id)=>{
    if(window.confirm('Are you sure you want to delete this feedback?')) {
      seTfeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4();
    seTfeedback([newFeedback, ...feedback])
  }


  return (
  <>
    <Header />
    <div className="container">
      <FeedbackForm handleAdd={addFeedback}/>
      <FeedbackStats feedback={feedback}/>
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
  </>
  )
}

export default App