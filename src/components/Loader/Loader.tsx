import ClipLoader from "react-spinners/ClipLoader";
import { FC } from "react";

const Loader: FC = () => {
  return <ClipLoader color="#3f51b5" loading={true} size={50} />;
};

export default Loader;
