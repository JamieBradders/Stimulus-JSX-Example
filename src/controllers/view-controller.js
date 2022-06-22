import { Renderer } from "../utils/render";
import { renderExample } from "../components/Example";

export default class ViewController extends Renderer {
  static targets = ["renderer"];

  handleClick = () => {
    console.log("I have done something!");
  };

  renderContent = () => {
    if (this.hasRendererTarget) {
      const data = {
        product: {
          title: "My Product",
          handle: "my-product",
        },
      };

      const content = renderExample(data);

      this.render(content, this.rendererTarget);
    }
  };
}
