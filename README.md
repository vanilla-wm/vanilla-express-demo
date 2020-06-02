# Vanilla Express Demo
> Securely enable your content for Web Monetization users without depending on ILP stack

- [Live Demo](#live-demo)
- [How it Works](#how-it-works)
- [Installation and Setup](#installation-and-setup)
- [Example](#example)

Using [Web Monetization](https://github.com/interledger/rfcs/blob/master/0028-web-monetization/0028-web-monetization.md), you often want to detect whether a visitor of your site is paying for content.

The only way to guarantee this, is by running a service that accepts Interledger packets and communicates them to your back-end.

Vanilla Express Demo uses **Vanilla Service** to validate payments.

The interaction between the server and **Vanilla Service** is provided by the simple API.

## Live Demo
[Snadbox](https://ty7rd.sse.codesandbox.io/)

[Live Code](https://codesandbox.io/s/vanilla-express-demo-ty7rd)

## How it Works

* Add a Web Monetization meta tag pointing to the address generated by Vanilla Service (available in the [Vanilla Admin](https://admin.vanilla.so) panel).

* Users arrive on your page and initialize Web Monetization.

* Users send request for a specific content, which is protected by **Vanilla Service**
  - If the Vanilla Service detects payments, users receive requested content
  - If the payment verification fails, users receive an error or a non-monetized version of the site

## Installation and Setup

Install Yarn dependencies

```shell
yarn install
```

Start the server on a port 3000

```shell
yarn start
```

## Example
Load image for WM users and validate payment on Server ( `localhost:3000/`)
