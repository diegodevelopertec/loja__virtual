import {BrowserRouter,Routes as Rotas ,Route} from 'react-router-dom'
import {DeliveryPage } from './Pages/DeliveryPage'
import { Showcase } from './Pages/Showcase'
import { AccountPage } from './Pages/AccountPage'

export const Routes=()=>{
    return <>
            <Rotas>
             <Route path='/'  element={<Showcase/>} />
             <Route path='/compras'  element={<DeliveryPage/>} />
             <Route path='/account'  element={<AccountPage/>} />
            </Rotas>
    </>
}