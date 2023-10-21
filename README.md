# Devify

<a href="https://devify.my.id">**Devify**</a> is a Fake API designed to provide developers with a testing and development environment for their applications

With Devify, developers can mimic the behavior of real APIs without relying on actual backend systems or production data. This helps to streamline the development process by eliminating dependencies and potential bottlenecks.

## Why?

The idea behind Devify arose from a simple yet profound realization: the need for a reliable, customizable, and easily accessible fake API tool for developers.

Whether you're working on a web application, mobile app, or any other software project, you may face issues when you can't easily access real APIs due to cost or reliability constraints.

<a href="https://devify.my.id">Devify</a> was born out of the desire to solve these issues and to provide a comprehensive solution that addresses the unique needs of developers.

## Documentation

Visit [https://devify.my.id/docs/v1](https://devify.my.id/docs/v1) to view the full documentation.

## Quick Start

Welcome to Devify, your gateway to a versatile and hassle-free testing and development environment for your applications.

### Example Code

```jsx
const baseUrl = "https://api-devify.my.id";

async function products() {
  const response = await fetch(`${baseUrl}/v1/products`);
  const result = await response.json();

  return result;
}

products().then((datas) => console.log(datas));
```

## Resources: Unveiling Devify, What's Inside?

Devify doesn't believe in the one-size-fits-all approach. Instead, we provide a curated selection of API resources, each designed to address specific development needs.

There are 5 main resources for your app:

| Resource | Description                                                                                                                                                                    | Items |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- |
| Products | Devify empowers developers by providing access to a wide array of product-related data, covering an extensive range of product categories.                                     | 50    |
| Users    | Devify's Users API Resources encompass a wide range of user attributes, including user profiles, address, email, and password.                                                 | 40    |
| Books    | With Devify, users can leverage advanced features such as book search, filtering, and categorization to help readers discover books.                                           | 20    |
| Carts    | Devify's shopping cart feature streamlines the checkout process, allowing users to easily add and manage items in their cart, making online shopping a hassle-free experience. | 20    |
| Auth     | What sets Devify apart is its commitment to user-friendliness. The authentication process is intuitive and straightforward, making it easy for users to register and login.    | 3     |

## Features

Devify is not just your ordinary fake API tool, it's a feature-rich powerhouse designed to simplify the development and testing processes for developers.

| Feature                  | Description                                                                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Image Upload Support     | Devify Fake API allows users to upload images in various formats such as JPEG, PNG, and more.                                                      |
| Diverse Data Types       | The API supports various types of fake data, including text, numbers, dates, images, and more, catering to a wide range of development needs.      |
| Data Variety             | Devify Fake API provides a variety of fake data categories such as people, products, and more.                                                     |
| Data Validation          | The API can validate generated data to ensure the integrity of the fake data produced.                                                             |
| Realistic Image Overlays | You can incorporate realistic image overlays such as user avatars, stickers, or watermarks into uploaded images.                                   |
| Custom Data Generation   | You can generate fake data with customizable parameters like name, address, email, and more. This enables users to create fake data with different |
| Dynamic Data Schemas     | Devify enables users to dynamically define data schemas, allowing them to generate data with varying structures as per project requirements        |

## Routes

#### Visit https://devify.my.id/docs/v1/routes to view the full documentation.

## Authors

- Kadek Nova ([@nvaa.jsx](https://www.instagram.com/nvaa.jsx))
