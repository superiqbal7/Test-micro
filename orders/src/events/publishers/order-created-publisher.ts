import { Publisher, OrderCreatedEvent, Subjects } from "@ticketingiqbal7/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
