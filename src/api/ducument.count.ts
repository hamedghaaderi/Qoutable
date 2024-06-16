import config from "./api.config";

const documentCount = () => {
  return config.get("/info/count").then((res) => res);
};

export default documentCount;
