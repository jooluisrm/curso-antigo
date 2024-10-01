import { useState } from "react";
import { usePeopleList } from "./reducers/peopleList";

export const RealReducer = () => {
    const [list, dispatch] = usePeopleList();
    const [nameInput, setNameInput] = useState('');

    const handleAddButton = () => {
        if (nameInput) {
            dispatch({
                type: 'ADD',
                payload: {
                    name: nameInput
                }
            });
            setNameInput('');
        }
    }
    const handleOrderButton = () => {
        dispatch({
            type: 'ORDER'
        })
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

            <button onClick={handleOrderButton}>Ordenar</button>
            <br />

            Lista de Pessoas:
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        <button onClick={() => dispatch({
                            type: 'DEL',
                            payload: {
                                id: item.id
                            }
                        })}>[ deletar ]</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}