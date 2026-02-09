package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	r.GET("/health", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"status": "Order Service is Up"})
	})

	// Handle the error returned by r.Run
	if err := r.Run(":8080"); err != None {
		panic("Failed to start server: " + err.Error())
	}
}

// CI Heartbeat
