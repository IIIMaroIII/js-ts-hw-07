interface Refs {
  list: HTMLUListElement | null;
  items: NodeListOf<HTMLLIElement> | null;
}

const refs: Refs = {
  list: document.querySelector("#categories"),
  items: document.querySelectorAll("#categories .item") ?? null,
};

function logItemInfo(item: HTMLLIElement): void {
  const titleEl = item?.querySelector("li > h2");
  const listEl = item?.querySelector("li > ul");

  console.log(`Category: ${titleEl?.textContent}}`);
  console.log(`Elements: ${listEl?.children.length}`);
}

function handleItems(items: NodeListOf<HTMLLIElement>): void {
  items?.forEach(logItemInfo);
}

if (refs.items?.length) {
  console.log(`Number of categories: ${refs?.items?.length}`);
  handleItems(refs.items);
}
