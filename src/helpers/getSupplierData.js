const getSupplierData = (data) => ({
  "Назва підприємства": {
    type: "title",
    title: [{ type: "text", text: { content: data.name } }],
  },
  "Код ЄДРПОУ": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.codeEDRPO } }],
  },
  "Місто і область": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.place } }],
  },
  "Державна реєстрація": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.registration } }],
  },
  "Номер ПДВ": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.individualNumberPdv } }],
  },
  "Вид діяльності": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.activityType } }],
  },
  "Торгові марки, які Ви представляєте": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.salesMarks } }],
  },
  Сайт: {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.website } }],
  },

  "Послуги, які надаєте": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.services } }],
  },
  "ПІБ заповнювача": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.pib } }],
  },
  "Посада заповнювача": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.role } }],
  },
  "E-mail": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.email } }],
  },
  "Номер телефону": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.phone } }],
  },
  "Додаткові коментарі": {
    type: "rich_text",
    rich_text: [{ type: "text", text: { content: data.comments || "" } }],
  },
  "Прайс та каталог товарів": {
    type: "files",
    files: data.prices.map((item) => ({
      type: "external",
      external: { url: item.path },
      name: item.filename,
    })),
  },
  "Установчі документи, копії сертифікатів та ліцензії на 5 ходових позицій": {
    type: "files",
    files: data.certificates.map((item) => ({
      type: "external",
      external: { url: item.path },
      name: item.filename,
    })),
  },
});

export default getSupplierData;
