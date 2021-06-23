import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrect name");
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }

    const tag = tagsRepositories.create({
      name,
    });

    await tagsRepositories.save(tag);
    return tag;
  }
}

export { CreateTagService };
