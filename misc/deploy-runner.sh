#!/usr/bin/env bash

set -ex

chmod 600 "${GITHUB_WORKSPACE}/misc/sber"
rsync -azvc -e "ssh -i ${GITHUB_WORKSPACE}/misc/sber -o StrictHostKeyChecking=no" --delete "${GITHUB_WORKSPACE}/build/" root@178.170.192.146:/home/docker/hack/frontend
