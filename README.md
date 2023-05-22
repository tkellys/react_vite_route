# Git

## 1 - Configuração do usuário das alterações

Fonte: [Configuração do git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)

### 1.1. Setando o nome

```js
git config --global user.name "Fulano de Tal"
```
### 1.2. Setando o email

```js
git config --global user.email fulanodetal@exemplo.br
```

## Subir alterações para o repositório remoto

### 1.3 - Verficar as alterações:
```js
git status
```
### 2 - Adiconar as alterações que serão enviadas

```js
git add .
```

### 3 - Conferir as alterações enviadas

```js
git status
```
### 4 - Preparar as alterações para serem enviadas

```js
git commit -m "comentario"
```
### 5 - Conferir a preparação

```js
git status
```
### 6 - Envia as alterações:

```js
git push
```
# 2 - Subir Projeto React com VITE a partir de repositorio remoto(GitHub)

### 2.1 - Inicializar repo Local:
```js
git init
```
### 2.2 - Adicionar link do repositorio remoto
Deve-se primeiro criar o repositorio no GitHub
```js
git remote add origin [link_do_repositorio_gitHub]
git status, git push, git push --set -upstream origin master
```
![image](https://github.com/tkellys/react_vite_route/assets/116043363/9ff180fb-e214-444e-87f5-4568b3b231d9)


## 2.3 - Repetir a partir do item 2 pra dar commit. 
