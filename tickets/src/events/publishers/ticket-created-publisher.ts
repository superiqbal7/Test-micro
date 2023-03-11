import { Publisher, Subjects, TicketCreatedEvent } from "@ticketingiqbal7/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
