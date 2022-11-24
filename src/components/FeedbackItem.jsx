import {useState} from 'react'
import Card from './shared/Card';
import PropTypes from 'prop-types'

function FeedbackItem({item}) {
  
  const [rating, setRating] = useState(item.rating);
  const [text, setText] = useState(item.text);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default FeedbackItem