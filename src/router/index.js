import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import CCTV from "@/components/Dashboard/CCTV.vue";
import Detection from "@/components/Dashboard/Detection.vue";
import Monitoring from "@/components/Dashboard/Monitoring.vue";
import SensorManage from "@/views/SensorManage.vue";
import AlertSettings from "@/components/AbnormalDetection/AlertSettings.vue";
import CCTVSetting from "@/components/AbnormalDetection/CCTVSetting";
const routes = [
  // dashboardMenu,
  {
    path: "/alertsettings",
    name: "AlertSettings",
    component: AlertSettings,
  },
  {
    path: "/detection",
    name: "Detection",
    component: Detection,
  },
  {
    path: "/cctv",
    name: "CCTV",
    component: CCTV,
  },
  {
    path: "/monitoring",
    name: "Monitoring",
    component: Monitoring,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sensor-manage",
    name: "SensorManage",
    component: SensorManage,
  },
  {
    path: "/cctv-setting",
    name: "CCTVSetting",
    component: CCTVSetting
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
