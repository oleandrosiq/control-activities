import Modal from 'react-modal';

import { useState, FormEvent } from 'react';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { useActivities } from '../../hooks/useActivities';

import { Form, Container } from './styles';

Modal.setAppElement('#__next');

export function NewActivityModal({ isOpen, onCloseRequest }) {
  const { createActivity } = useActivities();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  async function handleCreateNewActivity(event: FormEvent) {
    event.preventDefault();

    if (name === '' || description === '') return;

    await createActivity({
      name,
      description,
    });

    toast('Atividade Adicionada', {
      style: {
        background: '#303034',
        color: '#33cc95',
      },
      icon: '🧐',
    });

    setName('');
    setDescription('');
    onCloseRequest(false);
  }

  return (
      <Modal
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        onRequestClose={onCloseRequest}
      >
        <button type="button" className="close" onClick={onCloseRequest}>
          <FaTimes size={20} color="var(--icons)" />
        </button>

        <Container>
          <Form onSubmit={handleCreateNewActivity}>
            <h2>Cadastrar Atividade</h2>

            <input 
              placeholder="Título"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <textarea 
              placeholder="Descrição"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />

            <button type="submit">
              Cadastrar
            </button>
          </Form>
        </Container>
      </Modal>
  );
}