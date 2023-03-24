import useStatisticStore from "@/stores/statisticStore";
import { StatisticDateType, StatisticType } from "@/types";

const mockStatisticData = {
  daily: [[34], [56], [450], [40]],
  weekly: [
    [42, 38, 55, 60, 52, 58, 57],
    [35, 45, 40, 47, 80, 34, 60],
    [100, 140, 600, 500, 300, 350, 200],
    [35, 45, 20, 45, 60, 34, 50],
  ],
};

const useStatisticData = () => {
  const { statisticDateType, statisticType } = useStatisticStore((state) => ({
    statisticType: state.statisticType,
    statisticDateType: state.statisticDateType,
  }));

  const getStatisticData = () => {
    if (statisticDateType === StatisticDateType.Daily) {
      return mockStatisticData.daily.flatMap((value) => value);
    }

    return mockStatisticData.weekly[statisticType];
  };

  const getStatisticDataLabels = () => {
    return [10, 11, 12, 13, 14, 15, 16];
  };

  return { data: getStatisticData(), labels: getStatisticDataLabels() };
};

export default useStatisticData;
