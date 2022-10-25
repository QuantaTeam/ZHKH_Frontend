const url = 'http://api.settings.polyak.cc/setting/project/';

export async function config(nameConfig, fn, nameEnv, secretKey, nameProject) {
  return await getConfig(nameConfig, nameEnv, secretKey, nameProject).then((data) => fn(data.value));
}

async function getConfig(nameConfig, nameEnv, secretKey, nameProject) {
  const response = await fetch(url + nameConfig, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ project_name: nameProject, secret_key: secretKey }),
  })
    .then(response => response);
  if (response.ok) {
    return response.json();
  } else if (!response.ok && process.env[nameEnv]) {
    return process.env[nameEnv];
  } else {
    return 'no such configuration exists';
  }
}