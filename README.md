### Hexlet tests and linter status:
[![Actions Status](https://github.com/mikitasazan/layout-designer-bootstrap-project-59/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mikitasazan/layout-designer-bootstrap-project-59/actions)

# Вёрстка мессенджера на Bootstrap

Статичная (без JS-логики) вёрстка главного экрана мессенджера: боковая
панель с навигацией и списком контактов, правая панель-заглушка «выбери
чат, чтобы начать общаться».

## Стек

Pug (шаблоны), Sass (стили, на основе переменных Bootstrap 5), Bootstrap 5,
Gulp (сборка: компиляция Pug и Sass, SVG-спрайт иконок, копирование
изображений), Browsersync (локальный сервер).

## Установка и запуск

```bash
make install
make build   # собирает статику в build/
make start   # поднимает build/ через browser-sync
```

Открывается на `http://localhost:3000` (порт, который выбирает
browser-sync).

## Проверка локально

`make build` собирает `app/pages/*.pug` и `app/scss/*.scss` в `build/`,
генерирует спрайт иконок из `app/assets/icons/*.svg` в
`build/assets/icons/sprite.svg` и копирует `app/assets/images/*.jpg` в
`build/assets/images/`. После сборки открыть `build/index.html` (или
`make start`) и убедиться, что аватарки контактов и иконки навбара
отображаются, а не битые.

## Известный пробел (hexlet-check красный)

`hexlet-check` сейчас гоняет визуальный regression-тест на Playwright
(`__tests__/ui.spec.js`, скачан из артефактов упавшего прогона) — не
только статическую вёрстку, а переключение вкладок «Контакты / Сообщения
/ Профиль» (`#chats-tab`, `#profile-tab`, элементы `#chats`/`#profile`) и
отдельную страницу `chat.html` с диалогом (`#current-chat-tab`,
`#current-chat`) — их в текущей вёрстке нет. `app/pages/chat.pug` пустой.
Судя по истории прогонов, этот тест начал реально исполняться недавно —
раньше `hexlet-check` был зелёным на той же вёрстке без этой
функциональности. Эталонные скриншоты (`contact-*`, `messages-*`,
`profile-*`, `dialog-*`, desktop+mobile) лежат в артефакте `test-data`
последнего упавшего прогона — там же виден весь ожидаемый контент
(данные контактов уже совпадают с текущей `contacts.pug`, не хватает
только вкладок, экрана «Сообщения», «Профиль» и `chat.html`).

Это не однострочный фикс — нужно дособрать полноценный переключатель
вкладок и страницу диалога и свести их пиксель-в-пиксель с эталоном
(тест сравнивает скриншоты, рендер в CI — Linux/Docker, локально на Mac
антиалиасинг будет другим, так что попадание с первого раза
маловероятно без прогона в такой же Linux-песочнице).
