import '../style-modal/modal.css';

interface DeleteModalProps {
    closeModal: () => void;
    deleteFoodData: () => Promise<void>;
  }
  
  export function DeleteModal({ closeModal, deleteFoodData }: DeleteModalProps) {
    const handleDelete = async () => {
      try {
        await deleteFoodData();
        console.log('Dado deletado com sucesso!');
        closeModal();
      } catch (error) {
        console.log('Ocorreu um erro:' + error);
      }
    };
  
    return (
      <div className="modal-overlay">
        <div className="modal-body-delete">
          <h2>Tem certeza de que deseja excluir?</h2>
          <div className="button-container">
            <button className="btn-delete" onClick={handleDelete}>
              Excluir
            </button>
            <button className="btn-cancel" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      </div>
    );
  }