import requests
from bs4 import BeautifulSoup
import json
from pymongo import MongoClient
import os

# MongoDB setup
client = MongoClient('mongodb://localhost:27017/')
db = client['creative_hub']
collection = db['extracted_data']

def ghafla_data(name):
    try:
        url = "https://www.ghafla.com/ke/"
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")

        search_input = soup.find("input", {"name": "s"})
        if search_input:
            search_input["value"] = name

        response = requests.get(url, params={"s": name})
        soup = BeautifulSoup(response.text, "html.parser")

        search_results = soup.find_all("div", {"class": "gfl-grid-item"})

        results_list = []
        for result in search_results:
            title = result.find("h5").text.strip() if result.find("h5") else "No Title"
            description = result.find("p").text.strip() if result.find("p") else "No Description"
            link = result.find("a")["href"] if result.find("a") else "No Link"
            results_list.append({"title": title, "description": description, "link": link})

        return results_list

    except Exception as e:
        return {"error": str(e)}

def pulse_data(name):
    try:
        url = "https://www.pulselive.co.ke/search?q=" + str(name)
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")

        search_results = soup.find_all("li", {"class": "generic-list-item"})

        results_list = []
        for result in search_results:
            title_tag = result.find("h2")
            title = title_tag.text.strip() if title_tag else "No Title"
            link_tag = result.find("a")
            link = link_tag['href'] if link_tag else ""
            time_tag = result.find("time")
            time_posted = time_tag['datetime'] if time_tag else "Date N/a"
            results_list.append({"title": title, "link": link, "time": time_posted})

        return results_list

    except Exception as e:
        return {"error": str(e)}

def kiss_data(name):
    try:
        url = "https://kiss100.co.ke/search/?query=" + str(name)
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")

        search_results = soup.find_all("div", {"class": "articles-result"})

        results_list = []
        for result in search_results:
            title_tag = result.find("p", {"class": "title"})
            title = title_tag.text.strip() if title_tag else "No title"
            desc_tag = result.find_all("p")
            description = desc_tag[1].text.strip() if len(desc_tag) > 1 else "No Description"
            img_tag = result.find('img')
            image = img_tag['src'] if img_tag else "No Image"
            link = result.find("a")["href"]
            time_tag = result.find("span", {"class": "info readingTime"})
            time_posted = time_tag.text.strip() if time_tag else "No Time"
            results_list.append({"title": title, "description": description, "link": link, "time": time_posted})

        return results_list

    except Exception as e:
        return {"error": str(e)}


def extract_data(name, mongo_client):
    kiss_results = kiss_data(name)
    pulse_results = pulse_data(name)
    ghafla_results = ghafla_data(name)
    
    results = {
        "kiss": kiss_results,
        "pulse": pulse_results,
        "ghafla": ghafla_results
    }
    
    # Save results to MongoDB
    db = mongo_client['creative_hub']
    collection = db['extracted_data']
    collection.insert_one({
        "name": name,
        "results": results
    })

    return results