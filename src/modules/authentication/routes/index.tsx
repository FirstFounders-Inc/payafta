import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPaths } from '../../../constant/paths';

const Login = lazy(() => import('../Login'));
const ForgotPassword = lazy(() => import('../ForgotPassword'));
const CreateNewPassword = lazy(() => import('../CreateNewPassword/index'));
const CreatePasswordSuccess = lazy(
  () => import('../CreateNewPassword/CreatePasswordSuccess'),
);
const Signup = lazy(() => import('../Signup'));
const Home = lazy(() => import('../Home'));

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<Navigate to="/" replace />} />
        <Route path={AuthPaths.HOME} element={<Home />} />
        <Route path={AuthPaths.SIGNIN} element={<Login />} />
        <Route
          path={AuthPaths.CREATE_NEW_PASSWORD}
          element={<CreateNewPassword />}
        />
        <Route
          path={AuthPaths.CREATE_PASSWORD_SUCCESS}
          element={<CreatePasswordSuccess />}
        />
        <Route path={AuthPaths.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={AuthPaths.SIGNUP} element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
