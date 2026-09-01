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
