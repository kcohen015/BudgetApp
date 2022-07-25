import { BudgetItem } from "src/shared/models/budget-item.model";

export interface UpdateEvent {
    old: BudgetItem;
    new: BudgetItem;
  }
