#!/bin/bash
# getting content and displaying just content length information 
curl -sI "$1" | grep "Content-Length" | cut -d' ' -f 2
