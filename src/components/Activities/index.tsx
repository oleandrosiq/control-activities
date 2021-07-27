import { FaTimes, FaCheck } from 'react-icons/fa';
import { Container, Actions } from './styles';

export function Activities() {
  return ( 
    <Container>
      <div>
        <header>
          <h1>Nome de Teste para Atividade aqui no name</h1>

          <button className="completed">
            Concluído
          </button>
        </header>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>      
        <footer>
          <span>
            criado em:
            <strong>27/07/2021</strong>
          </span>

          <Actions>
            <button type="button">
              <FaCheck size={19} color="var(--green)" />
              Concluir
            </button>
            
            <button type="button">
              <FaTimes size={19} color="var(--red)" />
              Cancelar
            </button>
          </Actions>
        </footer>
      </div>
      
      <div>
        <header>
          <h1>Nome de Teste para Atividade aqui no name</h1>

          <button className="canceled">
            Cancelado
          </button>
        </header>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>      
        <footer>
          <span>
            criado em:
            <strong>27/07/2021</strong>
          </span>

          <Actions>
            <button type="button">
              <FaCheck size={19} color="var(--green)" />
              Concluir
            </button>
            
            <button type="button">
              <FaTimes size={19} color="var(--red)" />
              Cancelar
            </button>
          </Actions>
        </footer>
      </div>
      
      <div>
        <header>
          <h1>Nome de Teste para Atividade aqui no name</h1>

          <button className="pending">
            Pendente
          </button>
        </header>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
      
        <footer>
          <span>
            criado em:
            <strong>27/07/2021</strong>
          </span>

          <Actions>
            <button type="button">
              <FaCheck size={19} color="var(--green)" />
              Concluir
            </button>
            
            <button type="button">
              <FaTimes size={19} color="var(--red)" />
              Cancelar
            </button>
          </Actions>
        </footer>
      </div>
    </Container>
  );
}