# MyMangaList

>This is the API behind a website where the users can add mangas, manhwas, manhuas and webtoons, their name, cover, score, description and number of chapters
>>In the future, members will have the possibility to add their own lists and mark what mangas they're reading and the last read chapter.

<br>

# How to run it (Version 1.0.0 using Postgresql)

## 1 - Clone this repository

```bash
git clone git@github.com:HugoNicolau/MyMangaList.git
```
> **Dont forget to star it :D**

## 2 - Install the dependencies

```bash
npm install
```
## 3 - Run dump.sql

>Run this code in your postgres manager to create the database

## 4 - Configure your .env

>Fill these fields

<img src="./screenshots/dotenv-example.png" alt="dotenv example image">

>Those configs are used in "db.ts"

## 5 - Run it

>Run the code
```bash
npm run dev
```
>It should have this result:

<img src="./screenshots/npm-run-dev-example.png" alt="example result running the command npm run dev">

<br>

# Using it

>**Now the showcase of this application**

## Posting mangas(CREATING)

<img src="./screenshots/postingManga.png" alt="posting manga example image">

<hr>

## Getting mangas(Retrieving/Reading)

<img src="./screenshots/gettingMangas.png" alt="getting mangas example image">

<hr>

## Getting specific mangas

<img src="./screenshots/get-specific-mangas.png" alt="getting specific manga example image">

<hr>

## Updating mangas

<img src="./screenshots/update-manga.png" alt="updating manga example image">

<hr>

## Deleting mangas

<img src="./screenshots/delete-manga.png" alt="deleting manga example image">

<hr>

## Getting again after the previous actions

<img src="./screenshots/final-getting.png" alt="getting mangas again after previous actions example image">

<hr>

