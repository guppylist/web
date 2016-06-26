package main

import (
    "net/http"
)

func init() {
    fs := http.FileServer(http.Dir("html"))
    http.Handle("/", fs)
//    http.ListenAndServe(":8888", nil)
}