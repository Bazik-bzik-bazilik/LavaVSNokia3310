import React, {useState} from 'react';
import ReactModal from 'react-modal';

const NokiaModal = ({imagePath, imageAlt, counter, setCounter}) => {

    const [showModal, setShowModal] = useState(false);

    function openModal() {
        if (counter > 2) return alert("Кидать некуда, лава испарилась! Нокиа победила!");

        setCounter(counter + 1);
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <div>
            <button onClick={openModal}>Закинуть нокию в лаву</button>
            <button onClick={() => setCounter(0)}>Сначала</button>
            <ReactModal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="С ней ничего не случилось!"
            >
                <h2>С ней ничего не случилось!</h2>
                <img src={imagePath} alt={imageAlt}/>
                <br/>
                <button onClick={closeModal}>Закрыть</button>
            </ReactModal>
        </div>
    );
};

export default NokiaModal;