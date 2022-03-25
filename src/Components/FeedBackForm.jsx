import React, { useState, useContext, useEffect } from "react";
import RatingSelector from "./RatingSelector";
import FeedbackContext from "../Context/FeedBackContext";

const FeedBackForm = () => {
  const { addDataHandler, feedBackEdit, updateHandler } =
    useContext(FeedbackContext);
  // const [feedBackForm, setFeedBackForm] = useState({id:'',rating:'',text:''})
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (feedBackEdit.flag === true) {
      setRating(feedBackEdit.item.rating);
      setText(feedBackEdit.item.text);
    }
  }, [feedBackEdit]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const reset = () => {
    setRating("");
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      text,
      rating,
    };
    if (feedBackEdit.flag === true) {
      updateHandler(feedBackEdit.item.id, newReview);
    } else {
      addDataHandler(newReview);
    }

    //reset
    reset()
  };

  return (
    <>
      <RatingSelector
        select={(rating) => {
          setRating(rating);
        }}
      />
      <form onSubmit={handleSubmit}>
        <h3>FORM</h3>
        {/* <label>Rating</label> */}
        {/* <input type='number' name='rating' value={feedBackForm.rating}/> */}
        <label>text</label>
        <input type="text" name="text" value={text} onChange={handleChange} />
        <button type="submit">Sumbit Form</button>
        <>{text}</>
      </form>
    </>
  );
};

export default FeedBackForm;
