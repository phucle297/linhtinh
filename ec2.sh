# !/bin/bash
# use this script to setup ec2 instance

# install nginx
sudo apt-get update
sudo apt-get install nginx -y
# start nginx
systemctl start nginx
# install nvm and node 18
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install 18
# install pm2
npm install pm2 -g
# install yarn
npm install yarn -g
# install git
sudo apt-get install git -y