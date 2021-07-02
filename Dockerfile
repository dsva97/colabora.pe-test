# Compiler Stage
FROM node:16.3.0 AS builder

RUN npm i -g npm@7.19.1
WORKDIR /app
COPY . .

WORKDIR /app/frontend
RUN yarn install
RUN yarn build

WORKDIR /app/backend
COPY .env /app/backend/.env
RUN yarn install
RUN yarn build
RUN rm src -rf


# Production Stage
FROM node:16.3.0

RUN npm i -g npm@7.19.1

WORKDIR /app/frontend

COPY --from=builder /app/frontend/dist /app/frontend/dist

WORKDIR /app/backend
COPY --from=builder /app/backend /app/backend

RUN yarn install --prod


# Preferí no usar multistaging para la 
# compilación del frontend porque la 
# imagen para ambas etapas (front y back)
# estaría basada en la misma (node:16.3.0).
# Preferí sólo eliminar carpetas.