import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from '../Context/FeedBackContext'

const RatingSelector = ({select}) => {
const { feedBackEdit} = useContext(FeedbackContext)
    const [selected,setSelected] = useState('')

    useEffect(() => {
        setSelected(feedBackEdit.item.rating)
    },[feedBackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value)
    } 

  return (
    <ul className='rating'>
        <li>
            <input type="radio" name="rating" id="numb1" value='1'
            onChange={handleChange}
            checked={selected === 1} />
            <label htmlFor='numb1'>1</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb2" value='2' onChange={handleChange} checked={selected === 2}/>
            <label htmlFor="numb2">2</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb3" value='3' onChange={handleChange} checked={selected === 3}/>
            <label htmlFor="numb3">3</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb4" value='4' onChange={handleChange} checked={selected === 4}/>
            <label htmlFor="numb4">4</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb5" value='5' onChange={handleChange} checked={selected === 5}/>
            <label htmlFor="numb5">5</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb6" value='6' onChange={handleChange} checked={selected === 6}/>
            <label htmlFor="numb6">6</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb7" value='7' onChange={handleChange} checked={selected === 7}/>
            <label htmlFor="numb7">7</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb8" value='8' onChange={handleChange} checked={selected === 8}/>
            <label htmlFor="numb8">8</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb9" value='9' onChange={handleChange} checked={selected === 9}/>
            <label htmlFor="numb9">9</label>
        </li>
        <li>
            <input type="radio" name="rating" id="numb10" value='10' onChange={handleChange} checked={selected === 10}/>
            <label htmlFor="numb10">10</label>
        </li>
    </ul>
  )
}

export default RatingSelector