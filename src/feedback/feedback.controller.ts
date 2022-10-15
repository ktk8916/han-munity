import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createFeedback(@Body() createFeedbackDto: CreateFeedbackDto) {
    this.feedbackService.createFeedback(createFeedbackDto);
  }
}
