import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { FoodData } from '../../interface/FoodData';

import "./modal.css";

interface InputProps {
    label: string;
    value: string | number;
    updateValue: Dispatch<SetStateAction<string | number>>;
}

interface ModalProps {
    closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    );
}

export function CreateModal({ closeModal }: ModalProps) {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [image, setImage] = useState<string>("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        };
        mutate(foodData);
    }

    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess, closeModal]);

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle as Dispatch<SetStateAction<string | number>>} />
                    <Input label="price" value={price} updateValue={setPrice as Dispatch<SetStateAction<string | number>>} />
                    <Input label="image" value={image} updateValue={setImage as Dispatch<SetStateAction<string | number>>} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    );
}