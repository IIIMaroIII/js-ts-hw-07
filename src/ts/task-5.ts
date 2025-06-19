interface Refs {
  btn: HTMLButtonElement | null;
  span: HTMLSpanElement | null;
}

const refs: Refs = {
  btn: document.querySelector<HTMLButtonElement>(".change-color") ?? null,
  span: document.querySelector<HTMLSpanElement>(".color") ?? null,
};

refs.btn?.addEventListener("click", onChangeColorBtnClick);

function onChangeColorBtnClick(e: Event) {
  e.preventDefault();
  const hex = getRandomHexColor();
  changeSpanTxtCnt(hex);
  changeBgBodyColor(hex);
}

function changeSpanTxtCnt(hex: string): void {
  if (!refs.span) return;
  refs.span.textContent = hex;
}

function changeBgBodyColor(hex: string): void {
  document.body.style.backgroundColor = hex;
}

function getRandomHexColor(): string {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}
