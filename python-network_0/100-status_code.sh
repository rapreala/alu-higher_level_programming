#!/bin/bash
#Send a GET request
curl -s -o /dev/null -w "%{http_code}" "$1"
