class ParentDependent<T extends HTMLElement> {
  protected _element: T | HTMLElement;
  private _classes: string[];

  public constructor(element: T | HTMLElement | string, classes?: string[]) {
    if (typeof element === "string") {
      this._element = document.createElement(element);
    } else {
      this._element = element;
    }

    this._classes = [];
    if (classes) {
      this.addClass(...classes);
    }
  }

  public get element() {
    return this._element;
  }

  public get classes() {
    return this._classes;
  }

  public addClass(...classes: string[]) {
    this._element.classList.add(...classes);
    this._classes.push(...classes);
  }

  public removeClass(...classes: string[]) {
    this._element.classList.remove(...classes);
    this._classes = this._classes.filter(
      (current: string) => !classes.includes(current)
    );
  }

  public set classes(newClasses: string[]) {
    const oldClasses = this.element.classList.value
      .replace(/btn/, "")
      .split(/\s{1,}/g);
    this.removeClass(...oldClasses);
    this.addClass(...newClasses);
    this._classes = newClasses;
  }

  public set textContent(newText: string) {
    if (newText !== this._element.textContent) {
      this._element.textContent = newText;
    }
  }

  public setParent(
    parent: ParentDependent<HTMLElement> | HTMLElement | string
  ) {
    if (typeof parent === "string") {
      return document.getElementById(parent)?.appendChild(this._element);
    }
    if (parent instanceof ParentDependent) {
      return parent._element.appendChild(this._element);
    }
    parent.appendChild(this._element);
  }
}
