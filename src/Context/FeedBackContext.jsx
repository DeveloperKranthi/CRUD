import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedBack] = useState([
    { id: 1, rating: 5, text: "First Text" },
    { id: 2, rating: 7, text: "Second Text" },
    { id: 3, rating: 8, text: "Third Text" },
    { id: 4, rating: 2, text: "Fourth Text" },
    { id: 5, rating: 6, text: "Fifth Text" },
    { id: 6, rating: 8, text: "Sixth Text" },
  ]);

  const [feedBackEdit, setFeedBackEdit] = useState({ item: {}, flag: false });

  const addDataHandler = (newReview) => {
    newReview.id = uuidv4();
    console.log(newReview);
    setFeedBack([newReview, ...feedback]);
  };

  const deleteHandler = (id) => {
    const afterDelete = feedback.filter((fd) => fd.id !== id);
    setFeedBack(afterDelete);
  };

  const updateHandler = (id,item) => {
    //   const updated = feedback.map(feed => (feed.id === id ? {...feed,...item} : feed));


    const updated = feedback.map(feed => feed.id === id? {...feed,...item}:feed);
      setFeedBack(updated)
  }

  const editHandler = (item) => {
    setFeedBackEdit({ item, flag: true });
  };

  return (
    <FeedbackContext.Provider
      value={{ feedback, deleteHandler, addDataHandler, editHandler ,feedBackEdit ,updateHandler}}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

//export context not provider
export default FeedbackContext;
