import { createContext } from "react";
import { type SalaryContextType } from "../interface";

export const SalaryContext = createContext<SalaryContextType | null>(null);
