import { AppRoutingComicModule } from './app-routing-comic.module';

describe('AppRoutingComicModule', () => {
  let appRoutingComicModule: AppRoutingComicModule;

  beforeEach(() => {
    appRoutingComicModule = new AppRoutingComicModule();
  });

  it('should create an instance', () => {
    expect(appRoutingComicModule).toBeTruthy();
  });
});
