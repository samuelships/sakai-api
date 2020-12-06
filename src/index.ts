import axiosCookieJarSupport from "axios-cookiejar-support";
import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import API from "./types";
import { CookieJar } from "tough-cookie";

export default class SakaiAPI {
    config: API.SakaiAPIConfig;
    cookieJar: CookieJar;
    request: AxiosInstance;

    constructor(config: API.SakaiAPIConfig = {}) {
        this.config = {
            baseUrl: config.baseUrl || "https://sakai.ug.edu.gh/",
        } as API.SakaiAPIConfig;

        this.cookieJar = new CookieJar();
        this.request = axios.create({
            baseURL: this.config.baseUrl,
            jar: this.cookieJar,
            withCredentials: true
        } as AxiosRequestConfig);

        axiosCookieJarSupport(this.request);
    }
}