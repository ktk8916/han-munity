import { Controller, Post } from '@nestjs/common';

@Controller('feedback')
export class FeedbackController {
    @Post()
    createFeedback(){
        console.log('feed post');
    }
}
