import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/createFeedback.dto';
import { Feedback } from './entity/feedback.entity';

@Injectable()
export class FeedbackService {
    private sequence = 0;
    private feedbacks:Feedback[] = [];

    createFeedback(createFeedbackDto:CreateFeedbackDto){
        this.sequence++;
        const feedCreateTime = '아무튼시간임';
        const {feedContent} = createFeedbackDto;

        const feedback:Feedback = {
            feedbackId: this.sequence,
            feedContent,
            feedCreateTime
        }

        this.feedbacks.push(feedback);
    }

}
