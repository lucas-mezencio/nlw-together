import { Request, response, Response } from "express";
import { CreateTagService } from "../services/createTagService";

class CreateTagController {
  async handle(req: Request, res: Response) {
    const createTagService = new CreateTagService();

    const { name } = req.body;

    const tag = await createTagService.execute(name);

    return response.json(tag);
  }
}

export { CreateTagController };
