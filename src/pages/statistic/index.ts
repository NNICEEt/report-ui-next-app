import dynamic from "next/dynamic";

const StatisticPage = dynamic(() => import("./StatisticPage"));

export default StatisticPage;
