import { useContext } from 'react';
import { CartContext } from '../../contex/cart.context';
import { useNavigate} from 'react-router-dom'

import Button from '../button-component/button.component';
import CartItem from '../cart-item/cart-item.component';


import { CartDropdownContainer,CartItems , EmptyMessage} from './cart-dropdown.style';

const CartDropdown = () => {
    const { cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckOutHandle = () => {
        navigate("/checkout")
    }
    return(
        <CartDropdownContainer>
            <CartItems>
              {
              cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
              ) : ( 
                <EmptyMessage>your cart is empty</EmptyMessage>
              )
              }  
            </CartItems>
            <Button onClick={goToCheckOutHandle} >GO TO CHECKOUT </Button>
        </CartDropdownContainer> 
        
    )
}

export default CartDropdown;