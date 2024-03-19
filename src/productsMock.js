//emul9o delay random para una experiencia mas real
const getDelay = () => {
  const delay = Math.floor(
    Math.random() * (Math.floor(1000) - Math.ceil(200)) + Math.ceil(200)
  );
  return delay;
};

//emulo asincronía con un settimeout al momento de resolver la peticion
export const getProducts = () => {
  return new Promise((resolve, reject) => {
    products.length > 0
      ? setTimeout(() => {
          resolve(products);
        }, getDelay())
      : reject("No hay productos");
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((prod) => prod.id === id);

      setTimeout(() => {
        item
          ? resolve(item)
          : reject(`No se encuentra el producto con el id ${id}`);
      }, getDelay());
    }
  });
};
export const products = [  
  {
    title: "The Legend of Zelda: Breath of the wild",
    price: 59.99,
    description:
      "Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule In this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.",
    image:
      "https://res.cloudinary.com/dqfayh5a7/image/upload/v1709064631/ebbbcb6a-208e-4fe5-ad5d-ee4576f13641_tja6gy.jpg",
    stock: 7,
    category: "nintendo-switch",
  },
  {
    title: "Half-Life: Alyx",
    price: 30.99,
    description:
      "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.",
    image:
      "https://res.cloudinary.com/dqfayh5a7/image/upload/v1709064630/da232a8c-c3fd-42a4-be6d-afded8102532_y3gmze.jpg",
    stock: 6,
    category: "pc",
  },
];
