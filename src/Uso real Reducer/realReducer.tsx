import { useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

export const RealReducer = () => {
    const [list, dispatch] = usePeopleList();
    const [nameInput, setNameInput] = useState('');

    const handleAddButton = () => {
        if(nameInput) {
            dispatch({
                type: 'ADD',
                payload: {
                    name: nameInput
                }
            });
            setNameInput('');
        }
    }

    return (
        <div className="p-5">
            <input 
                className="border-2"
                type="text" 
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />
            <button onClick={handleAddButton}>Adicionar</button>

            <hr />
            
            Lista de Pessoas:
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}