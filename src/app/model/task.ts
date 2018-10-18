export class Task {
  _id?: {
    $oid: string
  };
  name?: string;
  dateCreate?: string;
  dateEnd?: string;
  userId?: string;
  isDone?: boolean;
};
