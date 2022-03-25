import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import feedData from "./Components/data/FeedBackData";
import FeedBackList from "./Components/FeedBackList";
import FeedBackStatus from "./Components/FeedBackStatus";
import FeedBackForm from "./Components/FeedBackForm";
import About from "./Pages/About";
import {FeedBackProvider} from './Context/FeedBackContext';

function App() {
  const [feedBackData, setFeedBackData] = useState(feedData);

  const styles = {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const addDataHandler = (newReview) => {
    newReview.id = uuidv4();
    console.log(newReview);
    setFeedBackData([newReview, ...feedBackData]);
  };



  return (
    <FeedBackProvider>
    <Router>
      <>
      <Header text="Kranthi" />
        <Routes>
          
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm />
                
                <FeedBackStatus  />
                <div className="container" style={styles}>
                  <FeedBackList
                  />
                </div>
              </>
            }
          ></Route>

          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
    </FeedBackProvider>
  );
}

export default App;
