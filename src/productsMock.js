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
    title: "Halo Infinite",
    price: 10,
    description: "The legendary Halo series returns with the most expansive Master Chief campaign yet and a ground-breaking free to play multiplayer experience.",
    image:
      "https://res.cloudinary.com/dqfayh5a7/image/upload/v1709064629/49feac9b-3d47-4cc4-a6eb-d252cd680a13_az99do.jpg",
    stock: 10,
    category: "xbox-series",
  },
  {
    id: 2,
    title: "God of War: Ragnarok",
    price: 1,
    description: "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series. It is the ninth installment in the series, the ninth chronologically, and the sequel to 2018's God of War. Loosely based on Norse mythology, the game is set in ancient Scandinavia and features series protagonist Kratos and his teenage son Atreus. Concluding the Norse era of the series, the game covers Ragnarök, the eschatological event which is central to Norse mythology and was foretold to happen in the previous game after Kratos killed the Æsir god Baldur.",
    image:
      "https://res.cloudinary.com/dqfayh5a7/image/upload/v1709064631/b8142354-84b8-4fab-9a12-2a5c5dfdc0d1_x4idek.jpg",
    stock: 10,
    category: "playstation-5",
  },
  {
    id: 3,
    title: "The Legend of Zelda: Breath of the wild",
    price: 1,
    description: "Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule In this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.",
    image:
      "https://res.cloudinary.com/dqfayh5a7/image/upload/v1709064631/ebbbcb6a-208e-4fe5-ad5d-ee4576f13641_tja6gy.jpg",
    stock: 10,
    category: "nintendo-switch",
  },
  {
    id: 4,
    title: "Half-Life: Alyx",
    price: 1,
    description:
      "Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.",
    image:
      "https://res.cloudinary.com/dqfayh5a7/image/upload/v1709064630/da232a8c-c3fd-42a4-be6d-afded8102532_y3gmze.jpg",
    stock: 10,
    category: "pc",
  },
];
