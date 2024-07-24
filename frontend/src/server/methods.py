import requests
from bs4 import BeautifulSoup
import json
def ghafla_data(name):
    # Visit the website
    url = "https://www.ghafla.com/ke/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    # Prompt user for input
    search_term = name

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
    print("Search results have been retrieved")
    return results_list

    
def pulse_data(name):
    # Visit the website
    url = "https://www.pulselive.co.ke/search?q=" + str(name)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    # Find all search results
    search_results = soup.find_all("li", {"class": "generic-list-item"})

    # Extract elements and store in a list of dictionaries
    results_list = []
    for result in search_results:
        title_tag = result.find("h2")
        title = title_tag.text.strip() if title_tag else "No Title"
        link_tag = result.find("a")
        link = link_tag['href'] if link_tag else ""
        time_tag = result.find("time")
        time_posted = time_tag['datetime'] if time_tag else "Date N/a"
        results_list.append({"title": title, "link": link, "time": time_posted})

    # Append the results to a JSON file
    print("Search results have been retrieved")
    return results_list


def kiss_data(name):
    # Visit the website
    url = "https://kiss100.co.ke/search/?query=" + str(name)
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")

    # Find all search results
    search_results = soup.find_all("div", {"class": "articles-result"})
    print(search_results)
    # Extract elements and store in a list of dictionaries
    results_list = []
    for result in search_results:
        title_tag = result.find("p", {"class": "title"})
        title = title_tag.text.strip() if title_tag else "No title"
        desc_tag = result.find("p")
        description = desc_tag.text.strip() if desc_tag else "No Description"
        img_tag = result.find('img')
        image = img_tag['src'] if img_tag else "No Image"
        link = result.find("a")["href"]
        time_tag = result.find("span", {"class": "info readingTime"})
        time_posted = time_tag.text.strip() if time_tag else "No Time"
        results_list.append({"title": title, "description": description, "link": link, "time": time_posted})

    # Append the results to a JSON file
    print("Search results have been retrieved")
    return results_list


def main():
    name = input("Enter a topic of interest: ")
    kiss_data(name)
    pulse_data(name)
    ghafla_data(name)

if __name__ == "__main__":
    main()