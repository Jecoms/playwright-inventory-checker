# playwright-inventory-checker

Use playwright to scrape for in-stock items

For forever and a day, that home alone lego set has been out of stock. It is a pending gift that would be great to fulfill sooner rather than later...

### Pre-requisites (node/nvm)

> This project was built using nvm/zsh, so the examples reflect this. Feel free to use your preferred tooling :)

```
brew install nvm

mkdir ~/.nvm

echo export NVM_DIR=~/.nvm >> ~/.zshrc
echo source $(brew --prefix nvm)/nvm.sh >> ~/.zshrc

source ~/.zshrc

nvm install 16.13.1

# check that npm is installed (e.g. 8.1.2)
npm -v
```

### Install

```
npm install
```

### Run Main Script

```
# basic run cmd
npm start [action]

# run cmd for implemented action
npm start Lego-SetInStockCheck-HomeAlone
```

### Testing

```
npm test
```
