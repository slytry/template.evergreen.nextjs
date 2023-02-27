# Next.js Ever Green Template

## Спорные ESLINT правила

- // eslint-disable-next-line react-hooks/exhaustive-deps
- // @typescript-eslint/no-floating-promises
- // eslint-disable no-warning-comments

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
