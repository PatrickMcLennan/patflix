import { Property } from '@mikro-orm/core';
import { Field } from 'type-graphql';

export class Base {
  @Field()
  @Property()
  createdAt: Date = new Date();

  @Field()
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
