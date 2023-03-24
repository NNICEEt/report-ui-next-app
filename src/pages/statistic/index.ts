import dynamic from "next/dynamic";

const StatisticPage = dynamic(() => import("./StatisticPage"), { ssr: false });

export default StatisticPage;
