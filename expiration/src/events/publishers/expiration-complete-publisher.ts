import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@ticketingiqbal7/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
