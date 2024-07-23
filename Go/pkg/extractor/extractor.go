package extractor

import (
	"context"
	"log"
	"net/http"
	"strings"

	"github.com/PuerkitoBio/goquery"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Struct to store news articles
type Article struct {
	Title       string
	Description string
	Link        string
}

// Function to scrape data from Ghafla and insert into MongoDB
func ScrapeGhafla(ctx context.Context, client *mongo.Client) {
	// Define the MongoDB collection
	collection := client.Database("news_db").Collection("articles")

	// Make HTTP request
	response, err := http.Get("https://www.ghafla.com/ke/")
	if err != nil {
		log.Fatal("Error fetching Ghafla page:", err)
	}
	defer response.Body.Close()

	// Parse the page using goquery
	doc, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		log.Fatal("Error parsing HTML document:", err)
	}

	// Find news articles and iterate
	doc.Find("div.gfl-grid-item").Each(func(i int, s *goquery.Selection) {
		title := s.Find("h5").Text()
		description := s.Find("p").Text()
		linkTag := s.Find("a")
		link, _ := linkTag.Attr("href")

		article := Article{
			Title:       strings.TrimSpace(title),
			Description: strings.TrimSpace(description),
			Link:        strings.TrimSpace(link),
		}

		// Insert into MongoDB
		_, err := collection.InsertOne(ctx, article)
		if err != nil {
			log.Fatal("Error inserting article into MongoDB:", err)
		}
	})

	log.Println("Scraped articles from Ghafla and stored in MongoDB")
}
