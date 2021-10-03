const Images = {
  arrowRight: {
    white: require("./arrow-right/right-arrow-white.png"),
    regular: require("./arrow-right/right-arrow.png"),
  },
  basket: {
    minus: require("./basket/basket-minus.png"),
    regular: require("./basket/basket.png"),
  },
  chevron: {
    down: require("./chevron/chevron-down.png"),
    up: require("./chevron/chevron-up.png"),
  },
  close: require("./close/close.png"),
  fire: require("./fire/fire.png"),
  setting: require("./setting/cog.png"),
  shoes: require("./shoes/shoe-sneaker.png"),
  search: require("./shopping-search/shopping-search.png"),
  tag: {
    heart: require("./tag-heart/tag-heart.png"),
    outline: require("./tag-heart-outline/tag-heart-outline.png"),
  },
  user: require("./user/user.png"),
  cart: {
    regular: require("./cart/cart.png"),
    heart: require("./cart/cart-heart.png"),
    add: require("./cart/cart-arrow-down.png"),
    checkout: require("./cart/cart-arrow-up.png"),
    continue: require("./cart/cart-arrow-right.png"),
  },
  plus: require("./plus/plus.png"),
  minus: require("./minus/minus.png"),
};

export type IconTypes = keyof typeof Images;

export default Images;
