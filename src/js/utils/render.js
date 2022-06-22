import { Controller } from "@hotwired/stimulus";

class Renderer extends Controller {
  render(component, target) {
    target.innerHTML = "";
    target.appendChild(component);
  }
}

export { Renderer };
