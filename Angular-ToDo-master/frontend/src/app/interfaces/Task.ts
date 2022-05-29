export interface Task {
  id: string;
  text: string;
  user_id: number;
  list_id: number;
  inprogress: boolean;
  done: boolean;
}
