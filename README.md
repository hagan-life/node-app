# Node App
This project was born 10 August 2022.
> The clock is clacking



## Project Notes


### Setup NodeJS and NPM on VPS
```
apt update
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs    [this installs both node and npm]
node -v
npm --version
```


### Clone GitHub repo
```
cd ~
mkdir apps
cd apps
git clone      [code > https > copy from github repo]
cd node-app    [or whatever the app folder is named]
ls             [to view application files, notice missing node_modules]
npm install    [uses package.json to install dependencies]
node app.js    [start application or use appropriate run scripts]
^C             [Control + C to stop app.js, temporarily started only to verify working]
```

### Install PM2
```
npm install -g PM2
pm2 start app.js
```

### App to survive server restarts
```
pm2 startup ubuntu
```

### PM2 Common Commands
```
pm2 status
pm2 restart app.js
pm2 logs      [can view console logs]
pm2 flush     [clears all logs]
```

### Enable Firewall
```
ufw status     [Status: inactive]
ufw enable     [Proceed with operation (y|n)? `y`]
ufw allow ssh
ufw allow http
ufw allow https
ufw status
```

### NGINX
```
apt install nginx
nano /etc/nginx/sites-available/default
```
```
server {
  ...
  
  server_name thedomainname.com www.thedomainname.com;

  location / {
        proxy_pass http://localhost:8000;  ## the app port
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
  }
```
```
^X                        [Control + X to save]
y                         [to save buffer]
enter                     [to save with current filename]
nginx -t                  [verify server is okay]
service nginx restart     [restart the server]
```















### Title without highlight

### `Title highlight`

**Bold note**
