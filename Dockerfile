# definindo versão do node, como ultima versão e reduzida (alpine)
FROM node:alpine
# diretório dentro da máquina
WORKDIR /user/app
# copiando pastas que começam com package
COPY package*.json ./
RUN npm install
# copiando todos os outros arquivos
COPY . .
# dizendo qual rota ficará exposta para comunicação
EXPOSE 4000

CMD ["npm", "start"]
