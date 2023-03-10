import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material';
import ProductCartCard from '../components/cards/ProductCartCard';

import { useCart } from '../hooks/useCart';

const Cart = () => {
  const { productList, totalInCart, updateItemFromCart, removeFromCart, checkOrder } = useCart();

  return (
    <Container sx={{ marginBottom: 4, marginTop: 2 }}>
      <Grid container sx={{ marginBottom: 1 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography>
            Cart
          </Typography>
        </Box>
        <Divider sx={{ width: '100%', marginY: 1 }} />
      </Grid>
      <Grid container flexDirection="column" spacing={4} justifyContent="flex-start" >
        {
          productList?.map(product => (
            <Grid item key={product.productId}>
              <ProductCartCard
                {...product}
                key={product.productId}
                onRemoveItem={() => removeFromCart(product.productId)}
                onUpdateQty={(qty) => updateItemFromCart(product.productId, qty)}
              />
            </Grid>
          ))
        }
        {
          !productList?.length ? (
            <Box display="flex" alignItems="center" justifyContent="center" height={180}>
              <Typography variant="h6" fontWeight={400}>
                There are no products in your cart
              </Typography>
            </Box>
          ) : undefined
        }
      </Grid>
      {
        productList?.length ? (
          <Grid container flexDirection="column" rowSpacing={2} sx={{ marginTop: 2 }}>
            <Grid item>
              <Typography>
                Your total in cart is: ${totalInCart}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                disabled={!productList?.length}
                onClick={checkOrder}
              >
                Check your order
              </Button>
            </Grid>
          </Grid>
        ) : undefined
      }
    </Container>
  )
}

export default Cart;