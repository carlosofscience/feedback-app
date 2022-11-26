import {v4 as uuidv4 } from 'uuid'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import FeedbackData from './data/FeedBackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'

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
  <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<>
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
          <AboutIconLink />
        </>}/>
        <Route path="/about" element={<AboutPage />}/>
        
      </Routes>
    </div>
  </Router>
  )
}

export default App