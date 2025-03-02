import { ICard } from "@/components/pojectCard";
import { Routes } from "../router/routes";

export type NavigationParamList = {
  [Routes.home]: undefined;
  [Routes.project]: { data: ICard };
};
