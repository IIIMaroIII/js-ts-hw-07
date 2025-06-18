import { debounce } from "throttle-debounce";

interface Refs {
  input: HTMLInputElement | null;
  span: HTMLSpanElement | null;
}

const refs: Refs = {
  input: document.querySelector<HTMLInputElement>("#name-input") ?? null,
  span: document.querySelector<HTMLSpanElement>("#name-output") ?? null,
};

refs.input?.addEventListener("input", debounce(250, onInputChange));

function onInputChange(e: Event) {
  const target = e.target as HTMLInputElement;
  changeTitle(target.value, refs.span);
}

function validateInputValue(value: string) {
  if (value.trim() === "") {
    return ` Anonymous`;
  }
  return value.trim();
}

function changeTitle(value: string, el: HTMLSpanElement | null): void {
  if (el) {
    el.textContent = validateInputValue(value);
  }
}
