import { Client } from "@notionhq/client";
import { config } from "dotenv";

config();

class NotionService {
  static notion;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
  }

  getDbData(db) {
    return this.notion.databases.query({
      database_id: db,
    });
  }

  addToDb(db, data) {
    return this.notion.pages.create({
      parent: { database_id: db, type: "database_id" },
      properties: data,
    });
  }
}

const notionService = new NotionService();

export default notionService;
