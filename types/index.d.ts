
declare interface CreateUserParams {
    name: string;
    email: string;
    phone: string;
  }
  declare type Status = "pending" | "scheduled" | "cancelled";
  
declare type Gender = "Male" | "Female" | "Other";
declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};