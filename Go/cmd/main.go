package main

import (
	"context"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"https://github.com/dnzambuli/SIMElab-Social-Media-Project/Go/pkg/extractor/"
)

func main() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Connect to MongoDB
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	defer client.Disconnect(ctx)

	searchTerm := "news"

	// Call the scraper function
	extractor.ScrapeGhafla(ctx, client)
	extractor.ScrapePulseLive(ctx, client, searchTerm)
	extractor.ScrapeKiss100(ctx, client, searchTerm)
}
