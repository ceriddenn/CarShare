import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { setContext } from './common/middleware/setContext';

function formatErroText(appName: string, err: any): string {
  let errorText = `[${appName}] Uncaught Exception: `;
  if (err && err?.response && err?.response?.data) {
    // http exceptions
    errorText += JSON.stringify(err.response.data);
  } else {
    // standard exceptions
    errorText += err?.message + err?.stack;
  }
  return errorText;
}

const appName = "CarShare"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });

  app.use(
    helmet({ contentSecurityPolicy: process.env.NODE_ENV !== 'development' }),
  );
  app.use(setContext(appName));

  process.on('unhandledRejection', (err: any) => {
    const errorText: string = formatErroText(appName, err);
    console.error(errorText);
  });
  process.on('uncaughtException', (err: any) => {
    const errorText: string = formatErroText(appName, err);
    console.error(errorText);
  });

  await app.listen(3008);
  console.info(`App listening on port 3008`);
}

bootstrap();
