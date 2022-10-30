# Next.js 13 boilerplate

## TODO

1. Storybook, Jest? - не то чтобы часто пригождается. Эффективность бизнеса превыше всего
2. Не удалось подключить типизацию локалей. Не видит react-i18next

## Как приступить к работе

### Подготовка

1. Обновить все зависимости и node.js
2. Поправить название и автора в package.json

### Запуск проекта

В директории src запустить`pnpm dev`
Перед MR нужно запустить `pnpm build`, если ничего не упало, то и CI/CD не упадет
В CI/CD просто запускается команда `npm run build`, в худшем случае версии node.js не совпадают => просить девопсера поднять версию ноды

## Структура папок

> Меняйте структуру папок до тех пор, пока вам и вашей команде не будет удобно

- components
  - base - минимальные UI компоненты
  - layout - компоненты повторяющиеся на на всех страницах
  - pages - предсобранные страницы
    - partials - если компонент нужен только для одной страницы, он храниться внутри нее
  - shared - крупные компоненты для двух и более страниц
- lib
  - config - конфиги
  - constants - ключи для React-Query, url и т.д
  - mocks - обработчика для [MSW](#mocksmsw)
  - models - стабы, моки
  - services - сервисы для работы с запросами
- style
- types - для типов не относящихся к определенному компоненту
- typings - для декларирования модулей: вспомогательные, переопределение библиотек
- utils - для хуков и вспомогательных функций

## Технологии

### Пакетный менеджер (PNPM)

PNPM - быстрей yarn и тем более npm. Хранит общий кэш для пакетов на OS, что позволяет экономить место но диске

### Data fetching (React-Query + Axios)

React Query — одна из лучших библиотек для управления состоянием сервера. Это помогает нам извлекать, кэшировать, синхронизировать и обновлять данные, не касаясь какого-либо глобального состояния.

- [Practical React Query](https://tkdodo.eu/blog/practical-react-query) - серия качественных статей для обучения
- [React-Query SSR](https://tanstack.com/query/v4/docs/guides/ssr) - подключение в nextjs

**Почему axios, а не fetch?**

- Axios изоморфный
- В axios есть interseptors

### State manager (MST)

> "un-opinionated" section

Нужды сайтов, разрабатываемых в студии, часто, можно покрыть Context + React Query.
Если вы чувствуете что неудобно, контекстов много и они стали большими или специфика проекта предполагает множество клиентских состояний рекомендую выбирать тот который вы лучше знаете и больше нравиться. RTK, MST, Effector и др - все они хороши и имеют свои плюсы и минусы
Но, если опыта со state manager'ми нет и все равно какой учить - выбирайте effector

**effector**

- [effector](https://mobx-state-tree.js.org/intro/welcome)
  - [Лучшая часть Эффектора](https://community.effector.dev/core/best-part-4jb1)
  - [Игорь Камышев — Как и зачем мы мигрировали Авиасейлс на Effector](https://www.youtube.com/watch?v=HYaSnVEZiFk)

**redux-toolkit**

- [redux-toolkit](https://redux-toolkit.js.org/)

Есть свой инструмент для работы c API - RTK Query.

**MobX-State-Tree**

- [MobX-State-Tree](https://mobx-state-tree.js.org/intro/welcome)

Улучшенная версия Mobx. На чистом Mobx надо заботиться об архитектуре. Качественный код на Mobx написать сложнее чем на RTK. MobX-State-Tree предоставляет типы и архитектуру

### I18N (next-i18next)

Интернационализация реализуется встроенный в nextjs [Internationalized Routing](https://nextjs.org/docs/advanced-features/i18n-routing#limits-for-the-i18n-config) и библиотекой [next-i18next](https://github.com/i18next/next-i18next).

### Mocks(MSW)

[Mock Service Worker](https://mswjs.io/) - сервис для моков. Полезно для тестирования, разработки и выявления ошибок

## Линтеры

При коммитах husky запускает:

- prettier, eslint и stylelint для измененных файлов
- commitlint - для проверки текста коммитов по [Commits Convencionales](https://www.conventionalcommits.org/es/v1.0.0-beta.3/)
