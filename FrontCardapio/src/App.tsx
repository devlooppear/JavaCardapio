import { useState } from 'react';
import './App.css';
import { Card } from "./components/card/card";
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { EditModal } from './components/edit-modal/edit-modal';
import { FoodData } from './interface/FoodData';
import { DeleteModal } from './components/delete-modal/delete-modal';
import { useFoodDataDelete } from './hooks/useFoodDataDelete';

function App() {
  const { data: foodData, updateFoodData } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedFoodData, setEditedFoodData] = useState<FoodData | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteFoodDataId, setDeleteFoodDataId] = useState<number | null>(null);

  const handleOpenModal = (food: FoodData) => {
    setEditedFoodData(food);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleUpdateFoodData = (updatedFoodData: FoodData) => {
    if (editedFoodData && editedFoodData.id !== undefined) {
      updateFoodData.mutate({ id: editedFoodData.id, newData: updatedFoodData });
      setIsModalOpen(false);
    }
  };

  const handleOpenDeleteModal = (id: number) => {
    setDeleteFoodDataId(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteFoodDataId(null);
    setIsDeleteModalOpen(false);
  };

  const deleteFoodData = useFoodDataDelete();

  const handleDeleteFoodData = async () => {
    if (deleteFoodDataId !== null) {
      try {
        await deleteFoodData.mutateAsync(deleteFoodDataId);
        setIsDeleteModalOpen(false);
      } catch (error) {
        // Handle delete error here
      }
    }
  };

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {foodData?.map(food => (
          food && (
            <Card
              key={food.id}
              price={food.price}
              title={food.title}
              image={food.image}
            >
              <button
                type="button"
                className="edit-button"
                onClick={() => handleOpenModal(food)}
              >
                Editar
              </button>
              <button
                type="button"
                className="delete-button"
                onClick={() => handleOpenDeleteModal(Number(food.id))}
              >
                Excluir
              </button>
            </Card>
          )
        ))}
      </div>
      <div className="button-container">
        {editedFoodData && (
          <EditModal
            closeModal={handleCloseModal}
            foodData={editedFoodData}
            updateFoodData={handleUpdateFoodData}
          />
        )}
        {isModalOpen && !editedFoodData && (
          <CreateModal
            closeModal={handleCloseModal}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteModal
            closeModal={handleCloseDeleteModal}
            deleteFoodData={handleDeleteFoodData}
          />
        )}
        <button className="novo-button" onClick={() => setIsModalOpen(true)}>
          Novo
        </button>
      </div>
    </div>
  );
}

export default App;
