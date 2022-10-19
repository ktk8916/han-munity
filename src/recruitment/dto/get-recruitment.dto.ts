export class GetRecruitmentDto {

  constructor(
    private readonly recruitmentId: number,
    private readonly categoryId: number,
    private readonly title: string,
    private readonly content: string,
    private readonly openTalkLink: string,
    private readonly createdAt: Date,
    private readonly views: number,
    private readonly isEnded: boolean,
    private readonly writerName: string,
    private readonly writerPassword: string,
    private readonly writerIp: string
  ){}
}
