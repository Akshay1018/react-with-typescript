import React from 'react';
interface peopleProps {
    people: {
        name: string
        age: number
        url: string
        note?: string
    }[]
}
const List: React.FC<peopleProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person) => (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url} alt="Person" />
                    <h2>
                        {person.name}
                    </h2>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>

                </div>

            </li>
        ))
    }
    return (
        <div>
            {renderList}
        </div>
    )
}
export default List