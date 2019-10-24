const Preloader = () => import("./common/preloader");
const Navbar = () => import("./common/navbar");
const FooterComp = () => import("./common/footer");
const ProgressBar = () => import("./common/progress-bar");
const Candidates = () => import("./sections/candidates");
const ElectionsInfo = () => import("./sections/elections-info");
const Intro = () => import("./sections/intro");

export {
  Preloader,
  Navbar,
  FooterComp,
  Candidates,
  ElectionsInfo,
  Intro,
  ProgressBar,
};
