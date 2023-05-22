#!/bin/bash

min_version=$1
current_version=$2

if [ "$min_version" -gt "$current_version" ]; then
    echo "$min_version"
else
    IFS='.' read -r -a version_parts <<< "$current_version"
    major="${version_parts[0]}"
    minor="${version_parts[1]}"
    patch="${version_parts[2]}"
    
    ((patch++))
    next_version="$major.$minor.$patch"
    echo "$next_version"
fi
