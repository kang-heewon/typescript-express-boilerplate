import { EntityRepository } from "typeorm";
import { User } from "../models/User";
import { BaseRepository } from "./base/BaseRepository";

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {}
