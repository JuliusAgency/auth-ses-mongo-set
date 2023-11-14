import { AuthMngrOPtions, setupAuthManager } from '@juliusagency/base-user-mngr';
import { initStrategies, StrategyOptions } from '@juliusagency/auth-strategies';
// import { Token, dBApi } from '@juliusagency/base-user-sql';
import { BaseUser, dBApi, Token } from '@juliusagency/base-user-mongo';
import {
  AuthConfig,
  SessionConfig,
  setupAuthMiddleware,
} from '@juliusagency/auth-session';
// import { TransportConfig } from '@juliusagency/simple-email-client';

export {
  AuthConfig,
  BaseUser,
  dBApi,
  // TransportConfig,
  SessionConfig,
  Token,
};

export const authSetSetup = (config: AuthConfig) => {
  // Wrap up the User, Token
  const user = dBApi(config.User);
  const token = dBApi(Token);

  const strategyOptions: StrategyOptions = {
    dBApi: user,
  };

  const strategy = initStrategies(strategyOptions);

  // const emailer = new EmailClient(configApp.transport);

  const authMngrOPtions: AuthMngrOPtions = {
    User: user,
    strategy: strategy,
    session: true,
    Token: token,
  };
  const authRouter = setupAuthManager(authMngrOPtions);

  config.User = user;
  // Auth middleware setup
  const authMiddleware = setupAuthMiddleware(config);

  return { authRouter, authMiddleware };
};