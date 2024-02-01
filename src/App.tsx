/* eslint-disable @typescript-eslint/no-explicit-any */
import { initMercadoPago } from '@mercadopago/sdk-react';
import { createCardToken } from '@mercadopago/sdk-react/coreMethods';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    initMercadoPago('');
  }, [])

  const loadCredentials = async () => {

    const cardToken = await createCardToken({
      cardNumber: '',
      cardholderName: '',
      cardExpirationMonth: '',
      cardExpirationYear: '',
      securityCode: '',
      identificationType: '',
      identificationNumber: '',
    });

    console.log(cardToken)
  }

  return (
    <div>
      <h1 onClick={() => loadCredentials()}>teste</h1>
    </div>
  )

}

export default App;