## Set of packages for Authentication with Session and MongoDb

The auth-ses-mongo-set package - is a component of the @juliusagency/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<p>
  <a href="https://www.npmjs.com/package/@juliusagency/auth-ses-mongo-set" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@juliusagency/auth-ses-mongo-set.svg">
  </a>
  <a href="https://github.com/JuliusAgency/auth-ses-mongo-set#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-ses-mongo-set/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/auth-ses-mongo-set/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### Installation
```bash
  npm install --save @juliusagency/auth-ses-mongo-set
```

### Pre-conditions:
```
The package is dedicated to be used with the following @juliusagency packages:
  - @juliusagency/base-user-mongo or @juliusagency/base-user-sql
```

### Usage  
```
import {
  AuthConfig,
  BaseUser,
  authSetSetup
} from './lib/auth-ses-mongo-set';

  const app: Express = express();

  // Setup Auth with session and MongoDb
  const config: AuthConfig = {
    app: app,
    User: BaseUser,
    sessionConfig: configApp.session,
  };

  const { authMiddleware, authRouter } = authSetSetup(config);

  // Auth middleware usage
  const protectedRoutes = ['/first', '/second'];
  app.use(protectedRoutes, authMiddleware);

  // Routers Setup
  const router = Router();
  // Auth router usage
  router.use('/auth', authRouter);

```
