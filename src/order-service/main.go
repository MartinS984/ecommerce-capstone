package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	r := gin.Default()
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "Order Service is Up"})
	})
	r.Run(":8080")
}

# Just adding a comment to trigger CI
echo "// Triggering CI build" >> src/order-service/main.go