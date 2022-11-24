import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackList from './components/FeedbackList'

function App() {
  
  const [feedback, seTfeedback] = useState(FeedbackData);
  
  return (
  <>
    <Header />
    <div className="container">
      <FeedbackList feedback={feedback}/>
    </div>
  </>
  )
}

export default App