import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  Repository
} from "typeorm";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

export abstract class BaseRepository<T> extends Repository<T> {
  // 생성

  // 수정
  async updateAndGet(
    id: string | number,
    item: QueryDeepPartialEntity<T>,
    findOptions?: FindOneOptions<T>
  ): Promise<T> {
    await this.update(id, item);
    return <Promise<T>>this.findOne({ ...findOptions, where: { id } });
  }

  // 증가
  // async increment(where: FindConditions<T>, field: string, amount: number): Promise<T> {
  //   // increment
  //   await this.repository.increment(where, field, amount);
  //   return <Promise<T>>this.repository.findOne(where);
  // }

  // 감소
  // async decrement(where: FindConditions<T>, field: string, amount: number): Promise<T> {
  //   // decrement
  //   await this.repository.decrement(where, field, amount);
  //   return <Promise<T>>this.repository.findOne(where);
  // }

  // 없으면 생성, 있으면 수정
  async upsert(item: DeepPartial<T>): Promise<T> {
    return this.save(item);
  }

  // 삭제
  // async delete(id: string | number): Promise<DeleteResult> {
  //   return this.delete(id);
  // }

  // ID로 찾기
  async findById(
    id: string | number,
    options?: FindOneOptions<T>
  ): Promise<T | undefined> {
    return !id ? undefined : this.findOne({ where: { id }, ...options });
  }

  // query로 찾기
  // async findOne(options: FindOneOptions<T>): Promise<T | undefined> {
  //   return this.findOne(options);
  // }

  // query로 목록 가져오기
  // async find(options: FindManyOptions<T>): Promise<T[]> {
  //   return this.repository.find(options);
  // }

  // query로 목록과 숫자 가져오기
  async findWithCount(options: FindManyOptions<T>): Promise<[T[], number]> {
    return this.findAndCount(options);
  }

  // 갯수를 반환
  // async count(options: FindManyOptions<T>): Promise<number> {
  //   return this.repository.count(options);
  // }

  // id 배열로 검색
  // async findByIds(ids: number[], options?: FindManyOptions<T>) {
  //   return this.repository.findByIds(ids, options);
  // }

  // query 사용하기
  // async query(query: string, ...parameters: any[]) {
  //   return this.query(query, parameters);
  // }
}
