import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderItemDto } from './dto/order-item.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  checkOrder(@Body() orderItemDto: OrderItemDto[]) {
    return this.orderService.checkOrder(orderItemDto);
  }
}
