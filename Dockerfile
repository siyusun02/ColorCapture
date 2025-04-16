# -------- build client --------
FROM node:16 AS client-builder

COPY cc-client /app/cc-client
WORKDIR /app/cc-client

RUN npm install && npm run build

# -------- run server --------
FROM node:20

WORKDIR /app

COPY cc-server ./cc-server

# copy built client into server's client folder
COPY --from=client-builder /app/cc-server/client ./cc-server/client

WORKDIR /app/cc-server
RUN npm install


EXPOSE 3000

CMD ["npm", "run", "dev"]