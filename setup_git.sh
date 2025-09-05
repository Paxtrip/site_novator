#!/bin/bash

# Путь к проекту
PROJECT_DIR=~/Project/site_novator

# SSH репозиторий GitHub
GITHUB_SSH="git@github.com:Paxtrip/site_novator.git"

# Перейти в проект
cd "$PROJECT_DIR" || { echo "Папка проекта не найдена"; exit 1; }

# Проверка git
if ! command -v git &> /dev/null; then
    echo "Git не установлен. Устанавливаем..."
    sudo apt update
    sudo apt install git -y
fi

# Настройка пользователя git
git config --global user.name "Ваше Имя"
git config --global user.email "email@пример.com"

# Инициализация репозитория, если ещё не инициализирован
if [ ! -d ".git" ]; then
    git init
    echo "Git репозиторий инициализирован"
fi

# Добавляем все файлы
git add .

# Первый коммит, если нет истории
if [ -z "$(git log --oneline 2>/dev/null)" ]; then
    git commit -m "Инициализация проекта site_novator"
    echo "Первый коммит создан"
fi

# Настройка SSH remote
if ! git remote | grep -q origin; then
    git remote add origin "$GITHUB_SSH"
    echo "Удалённый репозиторий SSH добавлен"
else
    git remote set-url origin "$GITHUB_SSH"
    echo "Remote обновлён на SSH"
fi

# Переименуем ветку в main
git branch -M main

# Пушим на GitHub
git push -u origin main

echo "Проект подключён к GitHub через SSH. Агент может пушить изменения автоматически."
