/* eslint-disable @typescript-eslint/no-explicit-any */
import { initMercadoPago } from '@mercadopago/sdk-react';
import { createCardToken } from '@mercadopago/sdk-react/coreMethods';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    initMercadoPago('APP_USR-c6d00888-c9f3-4e34-b958-ac3107dd7544');
  }, [])

  const loadCredentials = async () => {

    const cardToken = await createCardToken({
      cardNumber: '4984427544025387',
      cardholderName: 'H ALBUQUERQUE',
      cardExpirationMonth: '06',
      cardExpirationYear: '2024',
      securityCode: '509',
      identificationType: 'CPF',
      identificationNumber: '03625364140',
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