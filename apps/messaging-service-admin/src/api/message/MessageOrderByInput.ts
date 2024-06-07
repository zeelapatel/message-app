import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  content?: SortOrder;
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
