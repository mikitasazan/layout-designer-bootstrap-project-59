### Hexlet tests and linter status:
[![Actions Status](https://github.com/mikitasazan/layout-designer-bootstrap-project-59/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/mikitasazan/layout-designer-bootstrap-project-59/actions)

# Вёрстка мессенджера на Bootstrap

Вёрстка мессенджера: боковая панель с навигацией и списком контактов,
переключение вкладок «Контакты / Сообщения / Профиль» и отдельная
страница `chat.html` с диалогом (на мобильных — с переключением между
списком чатов и открытым диалогом).

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

## Визуальные тесты

`hexlet-check` гоняет визуальный regression-тест на Playwright
(`__tests__/ui.spec.js`) поверх собранной статики: переключение вкладок
«Контакты / Сообщения / Профиль», страницу `chat.html` с диалогом и
мобильное переключение между списком чатов и открытым диалогом —
сравнением со скриншотами-эталонами (Linux-рендер). Тест гоняется в
CI после `make setup`, локально `build/` коммитится в репозиторий, так
как харнесс не пересобирает код студента сам.
