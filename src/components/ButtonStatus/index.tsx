interface ButtonStatusProps {
  status: string;
}

export function ButtonStatus({ status }: ButtonStatusProps) {
  let textButton = '';

  switch (status) {
    case 'pending':
      textButton = 'Pendente';
      break;
    case 'completed':
      textButton = 'Concluído';
      break;
    case 'canceled':
      textButton = 'Cancelado';
      break;
    default:
      textButton = 'Default';
  }
  
  return (
    <button className={status}>
      {textButton}
    </button>
  );
}