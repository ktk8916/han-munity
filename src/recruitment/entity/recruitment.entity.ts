import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'recruitment' })
export class Recruitment extends BaseEntity {
  @PrimaryGeneratedColumn({ name: 'recruitment_id' })
  recruitmentId: number;
  @Column({ name: 'category_id' })
  categoryId: number;
  @Column({ name: 'title' })
  title: string;
  @Column({ name: 'content' })
  content: string;
  @Column({ name: 'open_talk_link', nullable: true })
  openTalkLink: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'views', default: 0 })
  views: number;
  @Column({ name: 'is_ended', default: false })
  isEnded: boolean;
  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;
  @Column({ name: 'writer_name' })
  writerName: string;
  @Column({ name: 'writer_password' })
  writerPassword: string;
  @Column({ name: 'writer_ip', type: 'inet' })
  writerIp: string;
}
