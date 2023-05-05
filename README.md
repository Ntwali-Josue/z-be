# z-be

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/Ntwali-Josue/z-be/tree/main.svg?style=svg&circle-token=fbb9a801bdf2d6d2c45cd9aac8e6420c6508ca47)](https://dl.circleci.com/status-badge/redirect/gh/Ntwali-Josue/z-be/tree/main)

## Built With
- Node.js
- Express.js
- PostgreSQL
- Sequelize

## Getting Started
- To get a local copy up and running follow these simple steps.
  - Clone this repo: `https://github.com/Ntwali-Josue/z-be.git`
  - Navigate into project directory:
  - Create file called `.env`
  - Open `.env` and initialize the following environment variables:
    ```ruby
        NODE_ENV= 
        PORT= 
        PRODUCTION_ORIGIN= 
        DEVELOPMENT_ORIGIN=
        DEV_DATABASE_URL= 
        FRONTEND_HOST=
        EMAIL_SENDER= 
        JWT_SECRET= 
    ```
  - Then run `npm install` to install all packages.
  - If packages are installed successfully, then run `npm run db:migrate` to create all tables.
  - And the run `npm run db:seed` insert built In Users.
  - Finaly run `npm run dev` to start the server.

### Usage
  Now you can use any API development tool like [Postman](https://www.postman.com/) to test the Endpoints.

  NOTE: The server will be running on port `5000` if you din't specify it in `.env` file as mentioned above. Also, the endpoints are secured with SOP(Same origin policy).
###
#### Auth
| Endpoint                            | Methods   | Functionality             |
| ------------------------------------|-----------|---------------------------|
| /login                              | POST      | Login                     |
| /login-with-token                   | POST      | Login With Secret Toke    |
| /login-with-token/validate          | PUT       | Turn On the previous feauture  |
| /second-factor-auth                 | PUT       | Turn On 2F AUTH  |
| /second-factor-auth                 | POST      | Apply Second factor Auth  |
| /resend-one-time-password           | POST      | Resend One Time Password  |
| /resend-one-time-password           | POST      | Resend One Time Password  |
| /refresh-token                      | GET       | Refresh Token  |
| /logout                             | GET       | Logout  |

#### User
| Endpoint                            | Methods   | Functionality             |
| ------------------------------------|-----------|---------------------------|
| /signup                             | POST      | Signup                    |
| /verify-email/:token                | PUT       | Verify Email       |
| /resend-email-verification          | POST       | Resend Email Verification |
| /request-password-reset             | POST       | Request Password Reset |
| /reset-password/:token              | PUT       | Change password |
| /profile                            | GET       | Get User Profile |
| /update-profile                     | GET       | Update Profile |
| /account-verification               | POST       | Request Account Verification |
The following endpoints are only available for a **moderator** or **Admin** |
| /get-verify-account-requests        | POST       | Get Account Verification Requests |
| /verify-account/:request_id         | POST       | Review Account Verification Requests |


## Authors

👤 **KARANGWA Ntwali Josue**

- GitHub: [@githubhandle](https://github.com/Ntwali-Josue)
- Twitter: [@twitterhandle](https://twitter.com/JosueNtwali)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/karangwa)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Ntwali-Josue/issues/z-fe).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
