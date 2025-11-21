#!/bin/bash
# Limpar cache de VS Code e forçar reinit do TypeScript

# Linux/Mac
if [[ "$OSTYPE" == "linux-gnu"* ]] || [[ "$OSTYPE" == "darwin"* ]]; then
    rm -rf ~/.vscode/extensions/*/node_modules/.bin
    rm -rf .vscode/.tsserver
fi

# Windows (PowerShell)
if [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
    Remove-Item -Path "$env:APPDATA\Code\User\workspaceStorage" -Recurse -Force -ErrorAction SilentlyContinue
fi

echo "Limpeza concluída. Reinicie o VS Code agora."
