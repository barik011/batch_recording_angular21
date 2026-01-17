export interface ISession {
  sessionId: number
  batchId: number
  topicName: string
  topicDescription: string
  youtubeVideoId: string
  durationInMinutes: string
  sessionDate: string
  displayOrder: number
  createdAt: Date
  updatedAt: Date
}

export interface IGetSeesion {
  sessionId: number
  durationInMinutes: number
  displayOrder: number
  topicName: string
  sessionDate: Date
  batchName: string
}