import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entity/feedback.entity';
import { FeedbackRepository } from './feedback.repository';

@Injectable()
export class FeedbackService {
  constructor(private readonly feedbackRepository: FeedbackRepository) {}

  createFeedback(createFeedbackDto: CreateFeedbackDto) {
    this.feedbackRepository.createFeedback(createFeedbackDto);
  }
}
