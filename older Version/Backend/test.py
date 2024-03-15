import requests
from bs4 import BeautifulSoup
import json

# Visit the website
url = "https://kiss100.co.ke/search/"

search_term = "Elodie"

url = url + "?query=" + search_term

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Find all search results
search_results = soup.find_all("div", {"class": "articles-result-item"})

# Extract elements and store in a list of dictionaries
results_list = []
for result in search_results:
    title = result.find("p", {"class": "title"}).text.strip()
    description = result.find("p", {"class": "label"}).text.strip()
    link = result.find("a")["href"]
    time_posted = result.find("span", {"class": "info readingTime"}).text.strip()
    img = result.find("img")["src"]
    results_list.append({"title": title, "description": description, "link": link, "time_posted": time_posted, "img": img})

# Append the results to a JSON file
output_file = search_term + "_results.json"
with open(output_file, "a") as f:
    json.dump(results_list, f, indent=4)

print("Search results have been saved to", output_file)
