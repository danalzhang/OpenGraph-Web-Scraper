# Open Graph Web Scraper & API

<p align="left">
  <img src="./Imgs/WebScraper.png" alt="Project Logo" width="600" height="300" class="left-aligned-image" />
</p>


Welcome to the Open Graph Web Scraper & API project, developed by a team of dedicated programmers. This project aims to simplify the process of extracting Open Graph data from websites by providing a user-friendly API and a showcase website.

This project was completed by a group of five individuals: Dylan Finlay, David He, Daniel Chenrui Zhang, Marcus Luong, and Varuni Gupta. Completed as a prototype for ShyftLabs, a software company in Toronto.

Website: https://open-graph-web-scraper.vercel.app/

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [API Usage](#api-usage)
- [Showcase Website](#showcase-website)
- [Contact](#contact)

## Introduction

In a world of dynamic web content, extracting structured data can be a challenge. The Open Graph Web Scraper & API project solves this problem by offering a convenient way to access Open Graph tags from websites following the Open Graph Protocol.

## Features

- **Web Scraper:** Utilize a Python-based web scraper built with Beautiful Soup and Requests libraries to extract Open Graph tags.
- **API:** Access the web scraper functionality via an API, allowing you to retrieve Open Graph data with a simple GET request.
- **Showcase Website:** Explore the project's capabilities through a visually appealing React website, complete with documentation and usage examples.


## API Usage

The API allows you to easily extract Open Graph data from websites. Make a GET request to the following endpoint:
  ```http
    GET https://og-web-scraper-api.vercel.app/scrape?url=https://example.com
  ```
Replace `https://example.com` with the URL of the website you want to scrape. The API will return a JSON response containing Open Graph data.

For detailed API documentation, please refer to [API Documentation](https://open-graph-web-scraper.vercel.app/documentation).

## Showcase Website

Explore the capabilities of the Open Graph Web Scraper & API by visiting our showcase website: [Open Graph Web Scraper Home](https://open-graph-web-scraper.vercel.app/).

The showcase website is built using React and Tailwind CSS, providing an intuitive interface to interact with the API and learn more about its features.

## Contact

For any inquiries or questions regarding the project, feel free to contact us at dylan.finlay33@gmail.com.

Happy scraping and building amazing web applications with structured data!
