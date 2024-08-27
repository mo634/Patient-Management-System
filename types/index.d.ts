
declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
  }
  declare type Status = "pending" | "scheduled" | "cancelled";
  
declare type Gender = "Male" | "Female" | "Other";