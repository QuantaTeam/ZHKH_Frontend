#!/usr/bin/env bash

set -ex

chmod 600 ./misc/sber
rsync -azvc -e "ssh -i ./misc/sber" --delete build/ root@178.170.192.146:/home/docker/hack/frontend
