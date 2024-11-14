import "./index.html";
import "./index.scss";
import code from "./img/code.png";
import { mult, sum } from "./modules/helpers";

const imgWrapper = document.querySelector(".img");
const img = new Image();
img.src = code;
img.width = 800;
imgWrapper.append(img);

console.log(mult(66, 66));
console.log(sum(66, 66));
