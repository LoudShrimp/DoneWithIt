// import Constants from 'expo-constants';
import * as Updates from "expo-updates";

const settings = {
  dev: {
    //Cassandra
    // apiUrl:"http://10.0.0.129:9000/api"
    //Michael
    apiUrl: "http://192.168.0.121:9000/api",
    // apiUrl:"http://127.0.0.1:9000/api"
  },
  staging: {
    apiUrl: "http://192.168.0.121:9000/api",
  },
  production: {
    apiUrl: "http://192.168.0.121:9000/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Updates.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
