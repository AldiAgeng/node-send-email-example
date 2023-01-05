## Node Send Email Using Nodemailer after -> (Less Secure App & Your Gmail Account (May 30 2022))
<img src="https://media.discordapp.net/attachments/1060608985947963445/1060609191066218617/74LqL.png" width="500px" alt="Alt text" title="Optional title">


### How to Solve the Problem
1. Clone the repo
    ```sh
    git clone https://github.com/AldiAgeng/node-send-email-example.git
    ```
2. Install packages
    ```sh
    npm install
    ```
3. Next Step
    ```sh
    - Manage your google account
    - Go to security
    ```

    ```sh
    - Enable 2FA in your gmail account
    ```
    <img src="https://media.discordapp.net/attachments/1060608985947963445/1060609073520857170/Screenshot_2023-01-06_000443.jpg" width="500px" alt="Alt text" title="Optional title">
    </br>
    </br>
    
    ```sh
    - Create app password
      - Select app : Mail
      - Select device : Other (Custom name)
      - Generate
      - Copy the app password
    ```
    <img src="https://media.discordapp.net/attachments/1060608985947963445/1060610877801381898/Screenshot_2023-01-06_000626.jpg" width="500px" alt="Alt text" title="Optional title">
    </br>
    </br>

    ```sh
    - Add .env file in the root directory
    - Add email and Recipients email in .env file
    - paste the app password to .env file
    ```

4. Run the app
    ```sh
    npm start
    ```