export interface ISession {
  sessionId: number
  batchId: number
  topicName: ''
  topicDescription: ''
  youtubeVideoId: ''
  durationInMinutes: ''
  sessionDate: ''
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