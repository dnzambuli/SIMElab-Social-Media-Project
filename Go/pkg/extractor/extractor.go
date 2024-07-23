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
type GhaflaArticle struct {
	Title       string
	Description string
	Link        string
}

type PulseArticle struct {
	Title      string
	Link       string
	TimePosted string
}

type KissArticle struct {
	Title       string
	Description string
	Image       string
	Link        string
	TimePosted  string
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

		article := GhaflaArticle{
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

func ScrapePulseLive(ctx context.Context, client *mongo.Client, query string) {
	collection := client.Database("news_db").Collection("pulse_articles")

	// Construct URL with the search query
	url := "https://www.pulselive.co.ke/search?q=" + query

	// Make HTTP request
	response, err := http.Get(url)
	if err != nil {
		log.Fatal("Error fetching PulseLive page:", err)
	}
	defer response.Body.Close()

	// Parse the page using goquery
	doc, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		log.Fatal("Error parsing HTML document:", err)
	}

	// Find news articles and iterate
	doc.Find("li.generic-list-item").Each(func(i int, s *goquery.Selection) {
		title := "No Title"
		if titleTag := s.Find("h2"); titleTag != nil {
			title = titleTag.Text()
		}
		link, _ := s.Find("a").Attr("href")
		timePosted := "Date N/a"
		if timeTag := s.Find("time"); timeTag != nil {
			timePosted, _ = timeTag.Attr("datetime")
		}

		article := PulseArticle{
			Title:      strings.TrimSpace(title),
			Link:       strings.TrimSpace(link),
			TimePosted: strings.TrimSpace(timePosted),
		}

		// Insert into MongoDB
		_, err := collection.InsertOne(ctx, article)
		if err != nil {
			log.Fatal("Error inserting article into MongoDB:", err)
		}
	})

	log.Println("Scraped articles from PulseLive and stored in MongoDB")
}

func ScrapeKiss100(ctx context.Context, client *mongo.Client, query string) {
	collection := client.Database("news_db").Collection("kiss_articles")

	// Construct URL with the search query
	url := "https://kiss100.co.ke/search/?query=" + query

	// Make HTTP request
	response, err := http.Get(url)
	if err != nil {
		log.Fatal("Error fetching Kiss100 page:", err)
	}
	defer response.Body.Close()

	// Parse the page using goquery
	doc, err := goquery.NewDocumentFromReader(response.Body)
	if err != nil {
		log.Fatal("Error parsing HTML document:", err)
	}

	// Find news articles and iterate
	doc.Find("div.articles-result").Each(func(i int, s *goquery.Selection) {
		title := "No title"
		if titleTag := s.Find("p.title"); titleTag.Length() > 0 {
			title = titleTag.Text()
		}
		description := "No Description"
		if descTag := s.Find("p").Next(); descTag.Length() > 0 {
			description = descTag.Text()
		}
		image := "No Image"
		if imgTag := s.Find("img"); imgTag.Length() > 0 {
			image, _ = imgTag.Attr("src")
		}
		link, _ := s.Find("a").Attr("href")
		timePosted := "No Time"
		if timeTag := s.Find("span.info.readingTime"); timeTag.Length() > 0 {
			timePosted = timeTag.Text()
		}

		article := KissArticle{
			Title:       strings.TrimSpace(title),
			Description: strings.TrimSpace(description),
			Image:       strings.TrimSpace(image),
			Link:        strings.TrimSpace(link),
			TimePosted:  strings.TrimSpace(timePosted),
		}

		// Insert into MongoDB
		_, err := collection.InsertOne(ctx, article)
		if err != nil {
			log.Fatal("Error inserting article into MongoDB:", err)
		}
	})

	log.Println("Scraped articles from Kiss100 and stored in MongoDB")
}
