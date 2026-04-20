import React, { useEffect, useState } from "react";
import { RealCostContext } from "./RealCostContext";
import { fetchProfile } from "../hooks/supabase.api";

export const RealCostProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState({
    monthly: 0,
    hourly: 0,
    cost: 0,
    calculatedCost: 0,
    totalHours: 0,
    percentage: 0,
    netflix: 0,
    daysToSave: 0,
    investYears: 0,
  });

  useEffect(() => {
    fetchProfile().then((data) => {
      if (data) setValue((prev) => ({ ...prev, monthly: data.monthly, hourly: data.hourly }));
      setLoading(false);
    });
  }, []);

  return <RealCostContext value={{ value, setValue, loading }}>{children}</RealCostContext>;
};
