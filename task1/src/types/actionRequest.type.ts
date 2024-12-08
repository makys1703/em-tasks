import { ActionDto } from '../dto/action/action.dto';

export type ActionRequest = {
  endpoint: string;
  body: ActionDto;
};
