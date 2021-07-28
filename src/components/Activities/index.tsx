import toast from 'react-hot-toast';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { useActivities } from '../../hooks/useActivities';

import { ButtonStatus } from '../ButtonStatus';
import { Container, Actions } from './styles';

interface UpdateStatusActivityProps {
  id: string;
  status: string;
}
export function Activities() {
  const { activities, updateActivity, deleteActivity } = useActivities();

  function handleUpdateStatusActivity(dataUpdatedActivity: UpdateStatusActivityProps) {
    updateActivity({
      id: dataUpdatedActivity.id, 
      status: dataUpdatedActivity.status,
    });
  }

  async function handleDeleteActivity(activityId: string) {
    await deleteActivity(activityId);

    toast('Atividade excluída', {
      style: {
        background: '#303034',
        color: '#33cc95',
      },
      icon: '😊',
    });
  }

  return ( 
    <Container>
      { activities.map(activity => (
        <div key={activity._id}>
          <header>
            <h1>{activity.name}</h1>

            <ButtonStatus 
              status={activity.status}
            />
          </header>

          <p>
            {activity.description}
          </p>      
          <footer>
            <span>
              criado em:
              <strong>
                {new Intl.DateTimeFormat('pt-br').format(new Date(activity.date))}                
              </strong>
            </span>

            { activity.status === 'pending' ? (
              <Actions>
                <button type="button" onClick={() => handleUpdateStatusActivity({
                  id: activity._id,
                  status: 'completed',
                })}>
                  <FaCheck size={19} color="var(--green)" />
                  Concluir
                </button>
                
                <button type="button" onClick={() => handleUpdateStatusActivity({
                  id: activity._id,
                  status: 'canceled',
                })}>
                  <FaTimes size={19} color="var(--red)" />
                  Cancelar
                </button>
              </Actions>
            ) : '' }

            { activity.status !== 'pending' ? (
              <Actions>
                <button type="button" onClick={() => handleDeleteActivity(activity._id)}>
                  <FaTimes size={19} color="var(--red)" />
                  Excluir
                </button>
              </Actions>
            ) : '' }
          </footer>
        </div>
      )) }
      
    </Container>
  );
}