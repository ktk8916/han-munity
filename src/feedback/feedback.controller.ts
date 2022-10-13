import { Body, Controller, Post } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {

    constructor(private readonly feedbackService:FeedbackService){}

    @Post()
    createFeedback(@Body() createFeedbackDto:CreateFeedbackDto){
        this.feedbackService.createFeedback(createFeedbackDto);
    }
}
