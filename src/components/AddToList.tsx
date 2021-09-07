import React, { useState } from 'react';
import { peopleState as Props } from '../App'

interface iProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}
const AddToList: React.FC<iProps> = ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        note: ""
    });
    const handleChange = (e: any): void => {
        setInput({ ...input, [e.target.name]: e.target.value })

    }
    const handleClick = (): void => {
        if (
            !input.name || !input.age || !input.img
        ) {
            return
        }
        setPeople([...people, { name: input.name, age: parseInt(input.age), url: input.img }]);
        setInput({
            name: "",
            age: "",
            img: "",
            note: ""
        })
    }
    return (

        <div className="AddtoList">
            <input
                type='text'
                placeholder="Name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name='name'
            />
            <input
                type='number'
                placeholder="Age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name='age'



            />
            <input
                type='text'
                placeholder="Image Url"
                className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name='img'


            />
            <textarea

                placeholder="Note"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name='note'


            />
            <button className="AddToList-btn" onClick={handleClick}>
                Add to list
            </button>

        </div>
    )
}
export default AddToList