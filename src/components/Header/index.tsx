import { Container } from './styles';

interface HeaderProps {
  onOpenNewActivityModal: () => void;
}

export function Header({ onOpenNewActivityModal }: HeaderProps) {
  return (
    <Container>
      <div>
        <h2>Control.Activities</h2>

        <button type="button" onClick={onOpenNewActivityModal}>
          Nova Atividade
        </button>
      </div>
    </Container>
  );
}