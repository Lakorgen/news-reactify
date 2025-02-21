import { useState } from "react";

export const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const changeFitler = (key, value) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFitler };
};
