import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackList from './components/FeedbackList'

function App() {
  
  const [feedback, seTfeedback] = useState(FeedbackData);
  const deleteFeedback = (id)=>{
    if(window.confirm('Are you sure you want to delete this feedback?')) {
      seTfeedback(feedback.filter((item) => item.id !== id))
    }
  };

  return (
  <>
    <Header />
    <div className="container">
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </div>
  </>
  )
}

export default App