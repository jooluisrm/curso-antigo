"use client"

import { ChangeEvent, useEffect, useState } from "react";

export const Page = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    useEffect(() => {
        setFullName(`${name} ${lastName}`)
    }, [name, lastName]);

    return (
        <div className="bg-white text-black h-screen w-full">
            <div className="flex flex-col max-w-96">
                <input type="text" value={name} onChange={handleNameChange} placeholder="Digite seu nome" />
                <input type="text" value={lastName} onChange={handleLastNameChange} placeholder="Digite seu sobrenome" />
                <p>Nome Completo: {fullName}</p>
            </div>
        </div>

    );
}
export default Page;