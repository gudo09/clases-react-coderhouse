//emulo asincronía con un settimeout al momento de resolver la peticion
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    products.length > 0
      ? setTimeout(() => {
          resolve(products);
        }, 1000)
      : reject("No hay productos");
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((prod) => prod.id === parseInt(id));

      setTimeout(() => {
        item
          ? resolve(item)
          : reject(`No se encuentra el producto con el id ${id}`);
      }, 1000);
    }
  });
};
const products = [
  {
    id: 1,
    title: "titulo",
    price: 10,
    description: "asd",
    image:
      "https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradiolos40/XVRM4ZSAIRIFVOQ5U5EFOYJ6ZQ.jpg",
    stock: 10,
    category: "asd",
  },
  {
    id: 2,
    title: "titulo",
    price: 1,
    description: "asd",
    image: "url",
    stock: 10,
    category: "asd",
  },
  {
    id: 3,
    title: "titulo",
    price: 1,
    description: "asd",
    image: "url",
    stock: 10,
    category: "asd",
  },
  {
    id: 4,
    title: "titulo",
    price: 1,
    description: "asd",
    image: "url",
    stock: 10,
    category: "asd",
  },
];
