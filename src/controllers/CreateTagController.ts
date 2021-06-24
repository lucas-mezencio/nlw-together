import { Request, Response } from "express";
import { CreateTagService } from "../services/createTagService";

class CreateTagController {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async handle(req: Request, res: Response) {
    const createTagService = new CreateTagService();

    const { name } = req.body;

    const tag = await createTagService.execute(name);

    return res.json(tag);
  }
}

export { CreateTagController };
