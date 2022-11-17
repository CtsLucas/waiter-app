import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { OrdersContainer } from './styles';

const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '123',
    status: 'WAITING',
    products: [
      {
        _id: '6372e48cbcd195b0d3d0f7f4',
        quantity: 3,
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668535954418-quatro-queijos.png',
          price: 40,
        },
      },
      {
        _id: '6372e48cbcd195b0d3d0f7f5',
        quantity: 2,
        product: {
          name: 'Coca cola',
          imagePath: '1668535782170-coca-cola.png',
          price: 7,
        },
      },
    ],
  },
];

export function Orders() {
  return (
    <OrdersContainer>
      <OrdersBoard icon="🕒" title="Fila de Espera" orders={orders} />
      <OrdersBoard icon="👨🏼‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </OrdersContainer>
  );
}
