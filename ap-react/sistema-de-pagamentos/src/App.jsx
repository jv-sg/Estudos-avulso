import { useRef, useState } from 'react'

const API_URL = 'https://crudcrud.com/api/914f5cc3a0d143b7876e1c4258485ce1/pagamentos';

function App() {
  const infoPagamento = {
    valor: 42.00,
    cpf: '000.000.000-00',
    metodo: 'pix',
    chavePix: 'cpf',
    qrCode: null,
    status: null
  };

  const [pagamento, setPagamento] = useState({infoPagamento});

  const estaProcessando = useRef(false);

  const efetuarPagamento = () => {
    if (estaProcessando.current){
      console.log("já está sendo processado")
      return;
    }
    estaProcessando.current = true;
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pagamento)
    })
    .then(res => res.json())
    .then(pagamentoCriado => {
      setPagamento((prev) => ({...prev, idPagamento: pagamentoCriado._id,
        qrCode: 'https://miro.medium.com/v2/resize:fit:640/0*zPG9dqz508rmRR70.',
        status: 'CRIADO'}));
    })
    .catch(error => {
      console.error('Erro ao criar pagamento: ', error)
    });
  }

  return (
    <div>
      <button onClick={() => {
        efetuarPagamento();
        efetuarPagamento();
      }}>
        Pagar com PIX
      </button>
      <br />
      {pagamento.status && <img width="120" src={pagamento.qrCode} />}
    </div>
  )
}

export default App
