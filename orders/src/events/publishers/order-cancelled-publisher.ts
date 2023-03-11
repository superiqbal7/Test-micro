import { Subjects, Publisher, OrderCancelledEvent } from "@ticketingiqbal7/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
