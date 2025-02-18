import { lazy } from "react";
const BoxForm = lazy(() => import("../components/BoxForm"));

const AddBox = () => {
  return <BoxForm />;
};

export default AddBox;
