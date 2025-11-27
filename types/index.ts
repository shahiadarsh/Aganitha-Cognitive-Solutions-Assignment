export interface Link {
  _id: string;
  shortCode: string;
  originalUrl: string;
  clickCount: number;
  lastClickedAt?: Date;
  createdAt: Date;
}