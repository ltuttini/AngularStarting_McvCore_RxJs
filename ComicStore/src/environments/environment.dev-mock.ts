import { FakeBackendProvider } from "../app/_service/rest/mocks/fake-backend-interceptor";
import { ComicMocks } from "../app/_service/rest/mocks/validators/comic-mock"

export const environment = {
  production: false,
  questUrl: '//localhost:25914',
  devProviders: [FakeBackendProvider, ComicMocks ]
};