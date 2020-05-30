# Vanilla Express Demo
> Securely serve your content for Web Monetization users without depending on the ILP stack

- [How it Works](#how-it-works)
- [Installation and Setup](#installation-and-setup)

Using [Web Monetization](https://github.com/interledger/rfcs/blob/master/0028-web-monetization/0028-web-monetization.md), you often want to detect whether a visitor to your site is paying for the content.
 
The only way to guarantee that is by having a service that actually accepts Interledger packets and communicates to your backend.

Vanilla Express Demo uses **Vanilla Service** to validate payments and provides Web Monetization features.

The interaction between the server and **Vanilla Service** is provided by the API.

## How it Works

* Add a Web Monetization meta tag pointing to the address generated by **Vanilla Service** (available in the Admin panel).

* The visitor arrives on your page.

* User sends request for specific content that is protect by Web Monetization
  - If the server validates payment successfully, the visitor receives content
  - If the validation fails, the visitor receives error or non-monetized version

### Installation and Setup

Install dependencies.

```shell
yarn install
```

Start the server. (port 3000)
```shell
yarn start
```

Examples: 
* Load image for WM users and validate payment on Server ( `localhost:3000/`)
