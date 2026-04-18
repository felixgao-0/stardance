import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["answer", "arrow"];

  toggle(event) {
    const item = event.currentTarget;
    const answer = item.querySelector("[data-faq-accordion-target='answer']");
    const arrow = item.querySelector("[data-faq-accordion-target='arrow']");

    const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

    if (isOpen) {
      answer.style.maxHeight = "0px";
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.style.transform = "rotate(90deg)";
    }
  }
}
