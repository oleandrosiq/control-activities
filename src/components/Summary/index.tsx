import { Container } from './styles';

interface SummaryProps {
  completed: number;
  canceled: number;
  pending: number;
}

export function Summary({ completed, canceled, pending }: SummaryProps) {
  return (
    <Container>
      <ul>
        <li>
          <strong>{completed}</strong>
          <p>Concluídas</p>
        </li>

        <li>
          <strong>{canceled}</strong>
          <p>Canceladas</p>
        </li>

        <li>
          <strong>{pending}</strong>
          <p>Pendentes</p>
        </li>
      </ul>
    </Container>
  );
}