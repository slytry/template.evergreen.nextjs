# [Оглавление](../../../README.md) / Ускоряем работу Docker в OSX

## Добавьте ресурсов в Docker Desktop

Для работы Docker на macOS ранее мы [установили](https://docs.docker.com/docker-for-mac/install/) утилиту Docker Desktop,
которая регламентирует работу Docker на основе выделенных ей ресурсов хостовой машины.

Для того чтобы просмотреть или изменить выделенные ресурсы, необходимо перейти
в раздел настроек Docker Desktop `Preferences… -> Resourses`.

Поиграйте с этими параметрами, увеличивая их. Мы рекомендуем установить ресурсы не ниже **4 Core CPU/4 Gb RAM/2 Gb Swap**.

## Использование docker-sync

Для ускорения взаимодействия файловых систем Docker и macOS в локальное окружение разработчика
мы внедрили механизм для синхронизации `volumes` и соответствующих директорий хостовой системы.

Этот механизм основан на утилите [docker-sync](https://docker-sync.readthedocs.io/en/latest/index.html).
Подробнее о том, как работает эта утилита можно почитать в [официальной статье](https://docker-sync.readthedocs.io/en/latest/advanced/how-it-works.html).

Установить docker-sync на _OSX_ можно с помощью утилиты `gem`:

```bash
sudo gem install docker-sync
```

Об установки пакета в Linux-системах можно почитать в [официальной документации](https://docker-sync.readthedocs.io/en/latest/getting-started/installation.html#linux).

В директории `docker/dev`, помимо `docker-compose.yml`, содержится файл конфигурации [docker-sync.yml](../../../docker/dev/docker-sync.yml).
В этом файле указываются имена томов (`volumes`),
которые будут синхронизироваться с хостовыми директориями, и конфигурация для них.

> Полностью описанные настроки конфигурации показаны в [официальном репозитории](https://github.com/EugenMayer/docker-sync/blob/master/example/docker-sync.yml).

Например, вольюм `gulp-vlm` должен синхронизоваться с локальной директорией `./../../src`,
за исключением папок `./../../src/.git` и `./../../src.idea`.

Тогда в файлах [docker-compose.yml](../../../docker/dev/docker-compose.yml)
и [docker-compose-build.yml](../../../docker/dev/docker-compose-build.yml) такой вольюм должен быть описан как внешний.

Такая оптимизация позволяют работать с вольюмами приложения не затрагивая файловую систему macOS.
