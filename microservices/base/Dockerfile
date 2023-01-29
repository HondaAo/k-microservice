FROM golang:1.18-alpine as builder

WORKDIR /app/microservices/base

COPY go.mod ./app/microservices/base
COPY go.sum ./app/microservices/base

COPY . .

RUN go mod download

EXPOSE 8080

ENTRYPOINT ["go", "run", "main.go"]