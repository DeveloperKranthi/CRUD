import PropTypes from 'prop-types'
import FeedBackItem from "./FeedBackItem"
import FeedbackContext from '../Context/FeedBackContext'
import { useContext } from 'react'

const FeedBackList = () => {

    const {feedback} = useContext(FeedbackContext);

    if(!feedback || feedback.length === 0) {
        return <p>No Data ..</p>
    }
     return (
    <div style={{textAlign:'center'}}>
        {feedback.map((feed) => (
            <div key={feed.id}>
                <FeedBackItem feed={feed} />
                </div>
        ))}
    </div>
  )
}


export default FeedBackList


// import React from 'react'

// function FeedBackList({fdData}) {
//     return (
//         <div>
//             {fdData.map((feed) => (
//                 <div>{feed.rating}</div>
//             ))}
//         </div>
//       )
// }

// export default FeedBackList
