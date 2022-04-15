class Form extends ParentDependent<HTMLFormElement> {
  private _inputs: InputLabel[];
  private _actionButton: Button;
  private _clearButton: Button;

  constructor(
    inputFields: InputLabel[],
    BtnLabel: string,
    btnAction: (value: any) => void
  ) {
    super("form");
    this.element.setAttribute("id", "form");

    inputFields.forEach((input) => input.setParent(this));
    const actionButton = new Button(BtnLabel, ["btn-primary"], () => {
      this.getInputValues(btnAction)
        .then(() => handleGetBooks())
        .catch((e: Error) => {
          alert(e.message);
        });
    });

    const clearButton = new Button("Clear", [], () => {
      inputFields.forEach((input: InputLabel) => (input.value = ""));
    });

    const divButtons = new ParentDependent("div", ["btn-group"]);

    clearButton.setParent(divButtons);
    actionButton.setParent(divButtons);
    divButtons.setParent(this);

    this._inputs = inputFields;
    this._clearButton = clearButton;
    this._actionButton = actionButton;
  }

  private getInputValues = async (callback: (value: Object) => void) => {
    const values: { [key: string]: string | number } = {};

    for (let input of this._inputs) {
      const value = input.value;

      if (!input.value) {
        input.addClass("required");
        throw Error("Missing params");
      }

      values[input.name] = value;

      if (input.classes.includes("required")) {
        input.removeClass("required");
      }
    }

    return await callback(values);
  };
}
