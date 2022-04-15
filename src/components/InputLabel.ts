class InputLabel extends ParentDependent<HTMLDivElement> {
  private _input: ParentDependent<HTMLInputElement>;
  private _name: string;
  private _type: InputLabelType;

  constructor(
    label: string,
    type: InputLabelType = InputLabelType.Text,
    classes: string[] = []
  ) {
    const inputId = toCamelCase("input" + label);
    const name = toSnakeCase(label);

    super("div");
    this.addClass("input-label-group", ...classes);

    const input = new ParentDependent(this.createInput(inputId, name, type));
    const labelEl = new ParentDependent(this.createLabel(inputId, label));

    input.setParent(this);
    labelEl.setParent(this);

    this._input = input;
    this._name = name;
    this._type = type;
  }

  private createInput(
    id: string,
    name: string,
    type: InputLabelType
  ): HTMLInputElement {
    const input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("name", name);
    input.setAttribute("type", type);

    return input;
  }

  private createLabel(inputId: string, labelName: string): HTMLLabelElement {
    const label = document.createElement("label");
    label.setAttribute("for", inputId);
    label.append(labelName);

    return label;
  }

  public get value() {
    return (this._input.element as HTMLInputElement).value;
  }

  public set value(newValue: string | number) {
    (this._input.element as HTMLInputElement).value = newValue.toString();
  }

  public get name() {
    return this._name;
  }

  public get type() {
    return this._type;
  }
}
