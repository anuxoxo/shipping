import { lazy, memo } from "react";
const BoxTable = lazy(() => import("../components/BoxTable"));

const BoxList = memo(() => {
  return <BoxTable />;
});

export default BoxList;
