import { DevBackendProvider } from "../app/_service/rest/mocks/dev-backend-interceptor";

export const environment = {
  production: false,
  backendUrl: '//localhost:25914',
  devProviders: [DevBackendProvider]
};