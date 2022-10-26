$deploy_script = Get-Content -Raw .\misc\setup_wsl.sh
wsl bash -c ($deploy_script -replace '"', '\"')
