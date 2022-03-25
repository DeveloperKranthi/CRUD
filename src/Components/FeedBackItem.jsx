import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import { useState , useContext } from "react";
import FeedbackContext from '../Context/FeedBackContext';

function FeedBackItem({feed}) {
  const {deleteHandler , editHandler} = useContext(FeedbackContext)
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState("This is an example feedback");
  return (
    <div style={{border:"2px solid black",margin:'4px',width:'500px'}}>
      <div className="card" key={feed.id}>
          <button onClick={() => deleteHandler(feed.id)}><FaTimes/></button>
          <button onClick={() => editHandler(feed)}><FaEdit color='purple'/></button>

        <div className="num-display">{feed.rating}</div>
        <div className="text-display">{feed.text}</div>
      </div>
    </div>
  );
}

// FeedBackItem.propTypes = {
//     feed: PropTypes.object.isRequired
// }

export default FeedBackItem;
