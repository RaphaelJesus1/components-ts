class Api {
  private static apiProcessing: boolean = false;
  public static async list(): Promise<Book[]> {
    try {
      const promise = await fetch(
        "https://academico.espm.br/testeapi/livro/listar"
      );

      if (!promise.ok) {
        throw Error("API rejected the getting list of books action");
      }

      const rawBookList: BookApiResponse[] = await promise.json();

      return rawBookList.map((book: BookApiResponse) => parseBook(book));
    } catch (error) {
      throw Error("Getting list of books action FAILED");
    }
  }

  public static async create(book: CreateBook): Promise<boolean> {
    Api.stopIfApiIsProcessing();
    const parsedBook = parseBookApiResponse(book);

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedBook),
    };

    try {
      Api.apiProcessing = true;
      // -----------------------------
      const result = await fetch(
        "https://academico.espm.br/testeapi/livro/criar",
        config
      );
      // -----------------------------
      Api.apiProcessing = false;
      if (!result.ok) {
        throw Error("API rejected the creation book action");
      }
      return true;
    } catch (error) {
      Api.apiProcessing = false;
      throw Error("Creating book action FAILED");
    }
  }

  public static async delete(id: Book["id"]): Promise<boolean> {
    Api.stopIfApiIsProcessing();
    try {
      Api.apiProcessing = true;
      // -----------------------------
      const result = await fetch(
        `https://academico.espm.br/testeapi/livro/excluir/${id}`
      );
      // -----------------------------
      Api.apiProcessing = false;
      if (!result.ok) {
        throw Error("API rejected the creation book action");
      }
      return true;
    } catch (error) {
      Api.apiProcessing = false;
      throw Error("Deleting book action FAILED");
    }
  }

  private static stopIfApiIsProcessing() {
    if (Api.apiProcessing) {
      throw Error(
        "API is processing other requisition. Wait till it ends before call a new one..."
      );
    }
  }
}
