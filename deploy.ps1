$ErrorActionPreference = "Stop"

npm run build

$deploy_script = Get-Content -Raw .\misc\deploy.sh
wsl bash -c ($deploy_script -replace '"', '\"')
