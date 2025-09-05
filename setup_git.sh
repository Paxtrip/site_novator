#!/bin/bash

# Путь к проекту (замени при необходимости)
PROJECT_DIR=~/Project/site_novator

# URL GitHub репозитория (замени на свой)
GITHUB_URL="https://github.com/Paxtrip/site_novator.git"

# Перейти в корень проекта
cd "$PROJECT_DIR" || { echo "Папка проекта не найдена"; exit 1; }

# Проверка, установлен ли git
if ! command -v git &> /dev/null; then
    echo "Git не установлен. Устанавливаем..."
    sudo apt update
    sudo apt install git -y
fi

# Настройка пользователя (если ещё не настроен)
git config --global user.name "Ваше Имя"
git config --global user.email "email@пример.com"

# Инициализация репозитория, если ещё не инициализирован
if [ ! -d ".git" ]; then
    git init
    echo "Git репозиторий инициализирован"
fi

# Добавляем все файлы
git add .

# Первый коммит (если ещё нет коммитов)
if [ -z "$(git log --oneline 2>/dev/null)" ]; then
    git commit -m "Инициализация проекта site_novator"
    echo "Первый коммит создан"
fi

# Добавляем удалённый репозиторий
if ! git remote | grep -q origin; then
    git remote add origin "$GITHUB_URL"
    echo "Удалённый репозиторий добавлен"
fi

# Переименовываем текущую ветку в main
git branch -M main

# Пушим на GitHub
git push -u origin main

echo "GitHub репозиторий готов. Теперь агент может делать коммиты и пушить изменения."

