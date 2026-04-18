import React, { useState } from "react";
import { SalaryContext } from "./SalaryInputContext";

export const SalaryInputProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState({
    monthly: 0,
    hourly: 0,
    cost: 0,
  });

  return <SalaryContext value={{ value, setValue }}>{children}</SalaryContext>;
};
