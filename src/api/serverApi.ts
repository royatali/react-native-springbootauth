import { AxiosInstance } from "axios";
import {
  Auth,
  ForgotPasswordDto,
  ForgotPasswordResponse,
  LoginDto,
  LogoutResponse,
  RefreshTokenDto,
  RefreshTokenResponse,
  ResetPasswordDto,
  ResetPasswordResponse,
  SignupDto,
  SignupResponse,
} from "../types/auth.types";
import { axiosPublic } from "./api";
import { API_URLS } from "./api-urls";

export const signup = (
  signupDto: SignupDto
): Promise<{ data: SignupResponse }> => {
  try {
    const { signup } = API_URLS;

    return axiosPublic.post(signup, signupDto);
  } catch (error) {
    throw error;
  }
};

export const login = (loginDto: LoginDto): Promise<{ data: Auth }> => {
  try {
    const { login } = API_URLS;

    return axiosPublic.post(login, loginDto, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    throw error;
  }
};

export const refreshToken = (
  refreshTokenDto: RefreshTokenDto
): Promise<{ data: RefreshTokenResponse }> => {
  try {
    const { refreshToken } = API_URLS;

    return axiosPublic.post(refreshToken, refreshTokenDto);
  } catch (error) {
    throw error;
  }
};

export const logout = async (
  accessToken: string,
  refreshTokenDto: RefreshTokenDto
): Promise<{ data: LogoutResponse }> => {
  try {
    const { logout } = API_URLS;

    return axiosPublic.post(logout, refreshTokenDto, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = (
  forgotPasswordDto: ForgotPasswordDto
): Promise<{ data: ForgotPasswordResponse }> => {
  try {
    const { forgotPassword } = API_URLS;

    return axiosPublic.post(forgotPassword, forgotPasswordDto);
  } catch (error) {
    throw error;
  }
};

export const resetPassword = (
  resetPasswordDto: ResetPasswordDto
): Promise<{ data: ResetPasswordResponse }> => {
  try {
    const { resetPassword } = API_URLS;

    return axiosPublic.post(resetPassword, resetPasswordDto);
  } catch (error) {
    throw error;
  }
};
