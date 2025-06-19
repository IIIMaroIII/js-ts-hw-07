interface Refs {
  form: HTMLFormElement | null;
}

const refs: Refs = {
  form: document.querySelector<HTMLFormElement>(".login-form") ?? null,
};

refs.form?.addEventListener("submit", onFormSubmit);

function onFormSubmit(e: SubmitEvent) {
  e.preventDefault();
  const target = e.target as HTMLFormElement | null;
  if (!target) {
    return;
  }

  const dataObj: Record<string, string> = {};

  const formData = new FormData(target);
  formData.forEach((value, key) => {
    const val = value as string;
    const validatedValue = validateInput(val);
    if (validatedValue) dataObj[key] = validatedValue;
  });
  console.log(dataObj);
  target.reset();
}

function validateInput(value: string): string {
  const EMPTY_PLACEHOLDER = "n/a";
  if (value.trim() === "") {
    alert("The value must not be empty");
    return EMPTY_PLACEHOLDER;
  }
  return value;
}
