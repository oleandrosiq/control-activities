import { useActivities } from '../../hooks/useActivities';
import { Container } from './styles';


export function Summary() {
  const { filterActivity, allActivities } = useActivities();

  const summaryData = allActivities.reduce((acc, activity) => {
    switch (activity.status) {
      case 'completed':
          acc.completed += 1;
        break;
      case 'canceled': 
          acc.canceled += 1;
        break;
      case 'pending':
          acc.pending += 1;
        break;
      default: 
    }

    return acc;
  }, {
    completed: 0,
    canceled: 0,
    pending: 0,
  });

  return (
    <Container>
      <ul>
        <li>
          <strong>{summaryData.completed}</strong>
          <p>Concluídas</p>
        </li>

        <li>
          <strong>{summaryData.canceled}</strong>
          <p>Canceladas</p>
        </li>

        <li>
          <strong>{summaryData.pending}</strong>
          <p>Pendentes</p>
        </li>
      </ul>

      <div>
        <h1>Filtros</h1>
        <ul>
          <li>
            <button 
              type="button" 
              className="all"
              onClick={() => filterActivity('all')}
            >
              Todos
            </button>
          </li>

          <li>
            <button 
              type="button" 
              className="completed"
              onClick={() => filterActivity('completed')}
            >
              Concluídos
            </button>
          </li>

          <li>
            <button 
              type="button" 
              className="canceled"
              onClick={() => filterActivity('canceled')}
            >
              Cancelados
            </button>
          </li>

          <li>
            <button 
              type="button" 
              className="pending"
              onClick={() => filterActivity('pending')}
            >
              Pendentes
            </button>
          </li>
        </ul>
      </div>
    </Container>
  );
}