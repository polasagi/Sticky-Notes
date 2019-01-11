export interface IEvent {
  id: number;
  title: string;
  body: string;
  imageUrl: string;
  category: string;
  pinned: boolean;
  date: Date;
  color: string;
}
