# Next.js Ever Green Template

## TODO

- Мердж коммит добавить а разрешенные
- Добавить докер
- Надо переписывать проверки по коммиту [Precommit Hooks Are Bad](https://www.youtube.com/watch?v=RAelLqnnOp0)
- Работа с SEO 
  - https://github.com/stipsan/react-spring-bottom-sheet/blob/main/docs/MetaTags.tsx
  - [next-sitemap](https://github.com/iamvishnusankar/next-sitemap)
  - [next-seo](https://github.com/garmeeh/next-seo)
- bundle analyzer

## Growing points

- Продумать систему дизайн токенов
- Продумать как называть переменные для цветов и какое цветовое простанство использовать
- Обновить структуру папок. Может можно сделать лучше, но надо ресерч делать)
- Написать скрипт обновления зависимостей. Простой update не обновляет major версию
- lint-staged можно сделать лучше <https://github.com/vercel/next.js/blob/canary/lint-staged.config.js>

## Is it necessary?

- Мультиязычность (Не удалось подключить типизацию локалей. Не видит react-i18next)
- React Query
- Storybook
- Jest
- MSW

## Как приступить к работе

### Подготовка

1. Обновить все зависимости и node.js
2. Поправить название и автора в package.json

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
    - services - сервисы для работы с запросами
- style
- types - для типов не относящихся к определенному компоненту
- utils - для хуков и вспомогательных функций


