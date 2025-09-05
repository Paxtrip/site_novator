#!/bin/bash
cd $(dirname "$0")/backend
expect << 'EOF'
set timeout 300
spawn npx create-strapi-app@latest . --skip-cloud --quickstart
expect "Please log in or sign up."
send {\x1b[B}\r
expect "Participate in anonymous A/B testing"
send {n}\r
expect eof
EOF
