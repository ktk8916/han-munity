import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Feedback } from './entity/feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackRepository extends Repository<Feedback> {
  constructor(private readonly dataSource: DataSource) {
    super(
      Feedback,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }

  async createFeedback(createFeedbackDto: CreateFeedbackDto) {
    const feedback = this.create(createFeedbackDto);

    await this.save(feedback);
  }
}
