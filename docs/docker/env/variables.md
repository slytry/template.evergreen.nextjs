# [Оглавление](../../../README.md) / Переменные окружения проекта

- Переменная окружения указывается в секции после комментария:
  `# Web Application variables`

- Передача переменной окружения осуществляется в сервисе `app` в разделе `environment`

```yaml
services:
  # Nextjs applicaton container
  &app-service app: &app-service-template
    ...
    environment: &app-service-envs
      CLIENT_API_URL: "${CLIENT_API_URL}"
      SSR_API_URL: "${SSR_API_URL}"
      PORT: "${PORT}"
      NEXT_TELEMETRY_DISABLED: "${NEXT_TELEMETRY_DISABLED}"
      ...
```

## Переменные

**PORT**

Порт на котором запущено приложение

**CLIENT_API_URL**

Адрес API при выполнении запросов с клиента (браузера)

**SSR_API_URL**

Адрес API при выполнении запросов на сервере (Node.js)

**ASSET_PREFIX**

Префикс для статических файлов
