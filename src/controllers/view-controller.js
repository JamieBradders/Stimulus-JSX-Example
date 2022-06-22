import { h, Renderer } from "../utils/render";

export default class ViewController extends Renderer {
  static targets = ["renderer"];

  handleClick = () => {
    console.log("I have done something!");
  };

  renderContent = () => {
    const content = (
      <div className="app">
        <h1>Hello there!</h1>

        <button type="button" data-action="click->view#handleClick">
          I will do something
        </button>
      </div>
    );

    if (this.hasRendererTarget) {
      this.render(content, this.rendererTarget);
    }
  };
}
