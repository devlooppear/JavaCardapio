import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import { FoodData } from '../../interface/FoodData';

import '../style-modal/modal.css';

interface InputProps {
  label: string;
  value: string | number;
  updateValue: Dispatch<SetStateAction<string | number>>;
}

interface ModalProps {
  closeModal(): void;
  foodData: FoodData;
  updateFoodData(updatedFoodData: FoodData): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input value={value} onChange={(event) => updateValue(event.target.value)}></input>
    </>
  );
};

export function EditModal({ closeModal, foodData, updateFoodData }: ModalProps) {
  const [title, setTitle] = useState<string>(foodData.title);
  const [price, setPrice] = useState<number>(foodData.price);
  const [image, setImage] = useState<string>(foodData.image);

  const handleCancel = () => {
    closeModal();
  };

  const handleEdit = () => {
    const updatedFoodData: FoodData = {
      ...foodData,
      title: title,
      price: price,
      image: image,
    };
    updateFoodData(updatedFoodData);
    closeModal();
  };

  useEffect(() => {
    setTitle(foodData.title);
    setPrice(foodData.price);
    setImage(foodData.image);
  }, [foodData]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Editar item do cardápio</h2>
        <form className="input-container">
          <Input label="title" value={title} updateValue={setTitle as Dispatch<SetStateAction<string | number>>} />
          <Input label="price" value={price} updateValue={setPrice as Dispatch<SetStateAction<string | number>>} />
          <Input label="image" value={image} updateValue={setImage as Dispatch<SetStateAction<string | number>>} />
        </form>
        <button onClick={handleEdit} className="btn-primary">
          Editar
        </button>
        <button onClick={handleCancel} className="btn-secondary">
          Cancelar
        </button>
      </div>
    </div>
  );
}
