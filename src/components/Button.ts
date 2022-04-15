class Button extends ParentDependent<HTMLButtonElement> {
  private _label: string;

  public constructor(label: string, classes?: string[], onClick?: () => void) {
    const button = document.createElement("button");
    button.setAttribute("type", "button");
    button.textContent = label;
    button.classList.add("btn");

    super(button, classes);
    this._label = label;

    if (onClick) {
      button.onclick = onClick;
    }

    if (classes?.length) {
      button.classList.add(...classes);
    }
  }

  public set label(newLabel: string) {
    this.textContent = newLabel;
  }
}
