import { useState } from "react";


type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {

    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setAddBodyText] = useState('');

    const handleAddPost = () => {
        if (addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
        } else {
            alert('Preencha os campos!');
        }
    }

    return (
        <fieldset className="border-2 mb-3 p-3">
            <legend>Adicionar Novo Post</legend>

            <input
                className="border block"
                type="text"
                placeholder="Digite um Titulo"
                value={addTitleText} onChange={(e) => setAddTitleText(e.target.value)}
            />
            <textarea
                className="border block"
                id=""
                value={addBodyText}
                onChange={(e) => setAddBodyText(e.target.value)}
            ></textarea>
            <button className="border block" onClick={handleAddPost}>Adicionar</button>

        </fieldset>
    );
}