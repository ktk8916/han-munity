import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'feedback' })
export class Feedback extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'feedback_id' })
  feedbackId: number;
  @Column({ name: 'feed' })
  feed: string;
  @CreateDateColumn({ name: 'created_at' })
  createTime: Date;
}
