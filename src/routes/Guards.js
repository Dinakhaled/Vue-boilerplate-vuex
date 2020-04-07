import Auth from "../utils/Auth";

export default (to, from, next) => {
  Auth.getAuth() ? next() : next('/');
}