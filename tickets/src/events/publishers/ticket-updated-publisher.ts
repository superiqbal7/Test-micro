import { Publisher, Subjects, TicketUpdatedEvent } from "@ticketingiqbal7/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
