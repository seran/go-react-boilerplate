package main

import (
	"html/template"
	"log"
	"net/http"
	"os"
	"fmt"

	"github.com/joho/godotenv"

)

var tpl = template.Must(template.ParseFiles("templates/index.html"))

func indexHandler(w http.ResponseWriter, r *http.Request) {
	tpl.Execute(w, nil)
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Println("Error loading .env file")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	fs := http.FileServer(http.Dir("static"))


	mux := http.NewServeMux()
	mux.Handle("/static/", http.StripPrefix("/static/", fs))
	
	mux.HandleFunc("/", indexHandler)

	fmt.Println("Server started in port: http://localhost:" + port)
	http.ListenAndServe(":" + port, mux)
}