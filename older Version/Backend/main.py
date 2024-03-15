import requests
from bs4 import BeautifulSoup
import json

# Visit the website
url = "https://www.ghafla.com/ke/"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

# Prompt user for input
search_term = input("Enter a name or story: ")

# Fill the search input field
search_input = soup.find("input", {"name": "s"})
search_input["value"] = search_term

# Click the search button
search_button = soup.find("button", {"class": "btn btn-outline-secondary"})
response = requests.get(url, params={"s": search_term})
soup = BeautifulSoup(response.text, "html.parser")

# Find all search results
search_results = soup.find_all("div", {"class": "gfl-grid-item"})

# Extract elements and store in a list of dictionaries
results_list = []
for result in search_results:
    title = result.find("h5").text.strip()
    description = result.find("p").text.strip()
    link = result.find("a")["href"]
    results_list.append({"title": title, "description": description, "link": link})

# Append the results to a JSON file
output_file = str(search_term) + "_results.json"
with open(output_file, "a") as f:
    json.dump(results_list, f, indent=4)

print("Search results have been saved to", output_file)
