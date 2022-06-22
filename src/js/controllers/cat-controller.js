import { Renderer } from "../utils/render";
import { renderFact } from "../components/Fact";

export default class ViewController extends Renderer {
  static targets = ["renderer"];

  async getFact() {
    try {
      const res = await fetch(`https://catfact.ninja/facts`);

      if (res.ok) {
        const facts = await res.json();
        const { data } = facts;

        const content = renderFact(data);

        this.render(content, this.rendererTarget);
      }
    } catch (error) {
      alert("I cant find the cat fact");
    }
  }
}
