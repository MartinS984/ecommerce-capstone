# --- Stage 1: Build ---
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -o order-service .

# --- Stage 2: Runtime ---
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
# Copy only the compiled binary from the builder stage
COPY --from=builder /app/order-service .
EXPOSE 8080
CMD ["./order-service"]