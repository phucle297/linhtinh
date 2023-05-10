#**Bashrc Windows**:
##Description:
    - .bashrc for windows
    - features:
        + alias for git
        + syntax highlighting
        + auto suggestions
    - dependencies:
        + git
        + make
        + ble.sh

##Dependencies:
    *git*: https://git-scm.com/
    *make*: install
        1. Open PowerShell as Administrator
        2. Execute the following command to install choco:
            Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        3. ```choco install make```
##Installation:
    1. Clone ble.sh, install and source it:
        ```
        git clone --recursive --depth 1 --shallow-submodules https://github.com/akinomyoga/ble.sh.git
        make -C ble.sh install PREFIX=~/.local
        echo 'source ~/.local/share/blesh/ble.sh' >> ~/.bashrc
        ```
    2. configure .bashrc
    3. restart bash
##Docs:
    *ble.sh*:https://github.com/akinomyoga/ble.sh


###**ec2.sh**
##Description:
    - conf environment for a web server
    - using for linux
    - dependencies:
        + nginx
        + pm2
        + nvm, npm, yarn (node 18)