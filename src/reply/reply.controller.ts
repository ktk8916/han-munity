import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { ReplyService } from './reply.service';

@Controller('reply')
export class ReplyController {
  constructor(private readonly replyService:ReplyService){}

  @Get('/:recruitmentId')
  getReplyByRecruitmentId(@Param('recruitmentId', ParseIntPipe) recruitmentId:number){
    return this.replyService.getReplyByRecruitmentId(recruitmentId);
  }

  @Delete('/:replyId')
  deleteReply(@Param('replyId', ParseIntPipe) replyId:number){
    return this.replyService.deleteReply(replyId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createReply(@Body() createReplyDto:CreateReplyDto){
    return this.replyService.createReply(createReplyDto);
  }



}

