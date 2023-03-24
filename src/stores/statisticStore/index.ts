import {
  StatisticDateType,
  StatisticDisplayType,
  StatisticType,
} from "@/types";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface StatisticState {
  statisticType: StatisticType;
  statisticDateType: StatisticDateType;
  statisticDisplayType: StatisticDisplayType;
  setStatisticType: (type: StatisticType) => void;
  setStatisticDateType: (type: StatisticDateType) => void;
  setStatisticDisplayType: (type: StatisticDisplayType) => void;
}

const useStatisticStore = create<StatisticState>()(
  devtools(
    persist(
      (set) => ({
        statisticType: StatisticType.Like,
        statisticDateType: StatisticDateType.Daily,
        statisticDisplayType: StatisticDisplayType.Chart,

        setStatisticType: (type) => set((state) => ({ statisticType: type })),
        setStatisticDateType: (type) =>
          set((state) => ({ statisticDateType: type })),
        setStatisticDisplayType: (type) =>
          set((state) => ({ statisticDisplayType: type })),
      }),
      {
        name: "statistic-store",
      }
    )
  )
);

export default useStatisticStore;
