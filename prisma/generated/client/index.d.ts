
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Meet
 * 
 */
export type Meet = $Result.DefaultSelection<Prisma.$MeetPayload>
/**
 * Model UserMeet
 * 
 */
export type UserMeet = $Result.DefaultSelection<Prisma.$UserMeetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  user: 'user',
  core: 'core'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meet`: Exposes CRUD operations for the **Meet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meets
    * const meets = await prisma.meet.findMany()
    * ```
    */
  get meet(): Prisma.MeetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMeet`: Exposes CRUD operations for the **UserMeet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMeets
    * const userMeets = await prisma.userMeet.findMany()
    * ```
    */
  get userMeet(): Prisma.UserMeetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Meet: 'Meet',
    UserMeet: 'UserMeet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "meet" | "userMeet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Meet: {
        payload: Prisma.$MeetPayload<ExtArgs>
        fields: Prisma.MeetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>
          }
          findFirst: {
            args: Prisma.MeetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>
          }
          findMany: {
            args: Prisma.MeetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>[]
          }
          create: {
            args: Prisma.MeetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>
          }
          createMany: {
            args: Prisma.MeetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>[]
          }
          delete: {
            args: Prisma.MeetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>
          }
          update: {
            args: Prisma.MeetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>
          }
          deleteMany: {
            args: Prisma.MeetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>[]
          }
          upsert: {
            args: Prisma.MeetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetPayload>
          }
          aggregate: {
            args: Prisma.MeetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeet>
          }
          groupBy: {
            args: Prisma.MeetGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetCountArgs<ExtArgs>
            result: $Utils.Optional<MeetCountAggregateOutputType> | number
          }
        }
      }
      UserMeet: {
        payload: Prisma.$UserMeetPayload<ExtArgs>
        fields: Prisma.UserMeetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMeetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMeetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>
          }
          findFirst: {
            args: Prisma.UserMeetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMeetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>
          }
          findMany: {
            args: Prisma.UserMeetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>[]
          }
          create: {
            args: Prisma.UserMeetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>
          }
          createMany: {
            args: Prisma.UserMeetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMeetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>[]
          }
          delete: {
            args: Prisma.UserMeetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>
          }
          update: {
            args: Prisma.UserMeetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>
          }
          deleteMany: {
            args: Prisma.UserMeetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMeetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMeetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>[]
          }
          upsert: {
            args: Prisma.UserMeetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMeetPayload>
          }
          aggregate: {
            args: Prisma.UserMeetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMeet>
          }
          groupBy: {
            args: Prisma.UserMeetGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMeetGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMeetCountArgs<ExtArgs>
            result: $Utils.Optional<UserMeetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    meet?: MeetOmit
    userMeet?: UserMeetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    meets: number
    createdMeets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meets?: boolean | UserCountOutputTypeCountMeetsArgs
    createdMeets?: boolean | UserCountOutputTypeCountCreatedMeetsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMeetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMeetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMeetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetWhereInput
  }


  /**
   * Count Type MeetCountOutputType
   */

  export type MeetCountOutputType = {
    attendees: number
  }

  export type MeetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | MeetCountOutputTypeCountAttendeesArgs
  }

  // Custom InputTypes
  /**
   * MeetCountOutputType without action
   */
  export type MeetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetCountOutputType
     */
    select?: MeetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetCountOutputType without action
   */
  export type MeetCountOutputTypeCountAttendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMeetWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    password: string | null
    userType: $Enums.UserType | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    name: string | null
    password: string | null
    userType: $Enums.UserType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    name: number
    password: number
    userType: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    name?: true
    password?: true
    userType?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    name?: true
    password?: true
    userType?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    name?: true
    password?: true
    userType?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    name: string | null
    password: string | null
    userType: $Enums.UserType
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    userType?: boolean
    meets?: boolean | User$meetsArgs<ExtArgs>
    createdMeets?: boolean | User$createdMeetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    userType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    userType?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    userType?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "name" | "password" | "userType", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meets?: boolean | User$meetsArgs<ExtArgs>
    createdMeets?: boolean | User$createdMeetsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      meets: Prisma.$UserMeetPayload<ExtArgs>[]
      createdMeets: Prisma.$MeetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      name: string | null
      password: string | null
      userType: $Enums.UserType
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meets<T extends User$meetsArgs<ExtArgs> = {}>(args?: Subset<T, User$meetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdMeets<T extends User$createdMeetsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdMeetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly userType: FieldRef<"User", 'UserType'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.meets
   */
  export type User$meetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    where?: UserMeetWhereInput
    orderBy?: UserMeetOrderByWithRelationInput | UserMeetOrderByWithRelationInput[]
    cursor?: UserMeetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMeetScalarFieldEnum | UserMeetScalarFieldEnum[]
  }

  /**
   * User.createdMeets
   */
  export type User$createdMeetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    where?: MeetWhereInput
    orderBy?: MeetOrderByWithRelationInput | MeetOrderByWithRelationInput[]
    cursor?: MeetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetScalarFieldEnum | MeetScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Meet
   */

  export type AggregateMeet = {
    _count: MeetCountAggregateOutputType | null
    _avg: MeetAvgAggregateOutputType | null
    _sum: MeetSumAggregateOutputType | null
    _min: MeetMinAggregateOutputType | null
    _max: MeetMaxAggregateOutputType | null
  }

  export type MeetAvgAggregateOutputType = {
    id: number | null
    points: number | null
    creatorId: number | null
  }

  export type MeetSumAggregateOutputType = {
    id: number | null
    points: number | null
    creatorId: number | null
  }

  export type MeetMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    date: string | null
    points: number | null
    creatorId: number | null
    createdAt: Date | null
  }

  export type MeetMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    date: string | null
    points: number | null
    creatorId: number | null
    createdAt: Date | null
  }

  export type MeetCountAggregateOutputType = {
    id: number
    name: number
    location: number
    date: number
    points: number
    creatorId: number
    createdAt: number
    _all: number
  }


  export type MeetAvgAggregateInputType = {
    id?: true
    points?: true
    creatorId?: true
  }

  export type MeetSumAggregateInputType = {
    id?: true
    points?: true
    creatorId?: true
  }

  export type MeetMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    date?: true
    points?: true
    creatorId?: true
    createdAt?: true
  }

  export type MeetMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    date?: true
    points?: true
    creatorId?: true
    createdAt?: true
  }

  export type MeetCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    date?: true
    points?: true
    creatorId?: true
    createdAt?: true
    _all?: true
  }

  export type MeetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meet to aggregate.
     */
    where?: MeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meets to fetch.
     */
    orderBy?: MeetOrderByWithRelationInput | MeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meets
    **/
    _count?: true | MeetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MeetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MeetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetMaxAggregateInputType
  }

  export type GetMeetAggregateType<T extends MeetAggregateArgs> = {
        [P in keyof T & keyof AggregateMeet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeet[P]>
      : GetScalarType<T[P], AggregateMeet[P]>
  }




  export type MeetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetWhereInput
    orderBy?: MeetOrderByWithAggregationInput | MeetOrderByWithAggregationInput[]
    by: MeetScalarFieldEnum[] | MeetScalarFieldEnum
    having?: MeetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetCountAggregateInputType | true
    _avg?: MeetAvgAggregateInputType
    _sum?: MeetSumAggregateInputType
    _min?: MeetMinAggregateInputType
    _max?: MeetMaxAggregateInputType
  }

  export type MeetGroupByOutputType = {
    id: number
    name: string
    location: string
    date: string
    points: number
    creatorId: number
    createdAt: Date
    _count: MeetCountAggregateOutputType | null
    _avg: MeetAvgAggregateOutputType | null
    _sum: MeetSumAggregateOutputType | null
    _min: MeetMinAggregateOutputType | null
    _max: MeetMaxAggregateOutputType | null
  }

  type GetMeetGroupByPayload<T extends MeetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetGroupByOutputType[P]>
            : GetScalarType<T[P], MeetGroupByOutputType[P]>
        }
      >
    >


  export type MeetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    points?: boolean
    creatorId?: boolean
    createdAt?: boolean
    attendees?: boolean | Meet$attendeesArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MeetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meet"]>

  export type MeetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    points?: boolean
    creatorId?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meet"]>

  export type MeetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    points?: boolean
    creatorId?: boolean
    createdAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meet"]>

  export type MeetSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    date?: boolean
    points?: boolean
    creatorId?: boolean
    createdAt?: boolean
  }

  export type MeetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "date" | "points" | "creatorId" | "createdAt", ExtArgs["result"]["meet"]>
  export type MeetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendees?: boolean | Meet$attendeesArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | MeetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MeetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MeetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meet"
    objects: {
      attendees: Prisma.$UserMeetPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      date: string
      points: number
      creatorId: number
      createdAt: Date
    }, ExtArgs["result"]["meet"]>
    composites: {}
  }

  type MeetGetPayload<S extends boolean | null | undefined | MeetDefaultArgs> = $Result.GetResult<Prisma.$MeetPayload, S>

  type MeetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetCountAggregateInputType | true
    }

  export interface MeetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meet'], meta: { name: 'Meet' } }
    /**
     * Find zero or one Meet that matches the filter.
     * @param {MeetFindUniqueArgs} args - Arguments to find a Meet
     * @example
     * // Get one Meet
     * const meet = await prisma.meet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetFindUniqueArgs>(args: SelectSubset<T, MeetFindUniqueArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetFindUniqueOrThrowArgs} args - Arguments to find a Meet
     * @example
     * // Get one Meet
     * const meet = await prisma.meet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetFindFirstArgs} args - Arguments to find a Meet
     * @example
     * // Get one Meet
     * const meet = await prisma.meet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetFindFirstArgs>(args?: SelectSubset<T, MeetFindFirstArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetFindFirstOrThrowArgs} args - Arguments to find a Meet
     * @example
     * // Get one Meet
     * const meet = await prisma.meet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meets
     * const meets = await prisma.meet.findMany()
     * 
     * // Get first 10 Meets
     * const meets = await prisma.meet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetWithIdOnly = await prisma.meet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetFindManyArgs>(args?: SelectSubset<T, MeetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meet.
     * @param {MeetCreateArgs} args - Arguments to create a Meet.
     * @example
     * // Create one Meet
     * const Meet = await prisma.meet.create({
     *   data: {
     *     // ... data to create a Meet
     *   }
     * })
     * 
     */
    create<T extends MeetCreateArgs>(args: SelectSubset<T, MeetCreateArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meets.
     * @param {MeetCreateManyArgs} args - Arguments to create many Meets.
     * @example
     * // Create many Meets
     * const meet = await prisma.meet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetCreateManyArgs>(args?: SelectSubset<T, MeetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meets and returns the data saved in the database.
     * @param {MeetCreateManyAndReturnArgs} args - Arguments to create many Meets.
     * @example
     * // Create many Meets
     * const meet = await prisma.meet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meets and only return the `id`
     * const meetWithIdOnly = await prisma.meet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meet.
     * @param {MeetDeleteArgs} args - Arguments to delete one Meet.
     * @example
     * // Delete one Meet
     * const Meet = await prisma.meet.delete({
     *   where: {
     *     // ... filter to delete one Meet
     *   }
     * })
     * 
     */
    delete<T extends MeetDeleteArgs>(args: SelectSubset<T, MeetDeleteArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meet.
     * @param {MeetUpdateArgs} args - Arguments to update one Meet.
     * @example
     * // Update one Meet
     * const meet = await prisma.meet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetUpdateArgs>(args: SelectSubset<T, MeetUpdateArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meets.
     * @param {MeetDeleteManyArgs} args - Arguments to filter Meets to delete.
     * @example
     * // Delete a few Meets
     * const { count } = await prisma.meet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetDeleteManyArgs>(args?: SelectSubset<T, MeetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meets
     * const meet = await prisma.meet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetUpdateManyArgs>(args: SelectSubset<T, MeetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meets and returns the data updated in the database.
     * @param {MeetUpdateManyAndReturnArgs} args - Arguments to update many Meets.
     * @example
     * // Update many Meets
     * const meet = await prisma.meet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meets and only return the `id`
     * const meetWithIdOnly = await prisma.meet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meet.
     * @param {MeetUpsertArgs} args - Arguments to update or create a Meet.
     * @example
     * // Update or create a Meet
     * const meet = await prisma.meet.upsert({
     *   create: {
     *     // ... data to create a Meet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meet we want to update
     *   }
     * })
     */
    upsert<T extends MeetUpsertArgs>(args: SelectSubset<T, MeetUpsertArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetCountArgs} args - Arguments to filter Meets to count.
     * @example
     * // Count the number of Meets
     * const count = await prisma.meet.count({
     *   where: {
     *     // ... the filter for the Meets we want to count
     *   }
     * })
    **/
    count<T extends MeetCountArgs>(
      args?: Subset<T, MeetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetAggregateArgs>(args: Subset<T, MeetAggregateArgs>): Prisma.PrismaPromise<GetMeetAggregateType<T>>

    /**
     * Group by Meet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetGroupByArgs['orderBy'] }
        : { orderBy?: MeetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meet model
   */
  readonly fields: MeetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendees<T extends Meet$attendeesArgs<ExtArgs> = {}>(args?: Subset<T, Meet$attendeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meet model
   */
  interface MeetFieldRefs {
    readonly id: FieldRef<"Meet", 'Int'>
    readonly name: FieldRef<"Meet", 'String'>
    readonly location: FieldRef<"Meet", 'String'>
    readonly date: FieldRef<"Meet", 'String'>
    readonly points: FieldRef<"Meet", 'Int'>
    readonly creatorId: FieldRef<"Meet", 'Int'>
    readonly createdAt: FieldRef<"Meet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meet findUnique
   */
  export type MeetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * Filter, which Meet to fetch.
     */
    where: MeetWhereUniqueInput
  }

  /**
   * Meet findUniqueOrThrow
   */
  export type MeetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * Filter, which Meet to fetch.
     */
    where: MeetWhereUniqueInput
  }

  /**
   * Meet findFirst
   */
  export type MeetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * Filter, which Meet to fetch.
     */
    where?: MeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meets to fetch.
     */
    orderBy?: MeetOrderByWithRelationInput | MeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meets.
     */
    cursor?: MeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meets.
     */
    distinct?: MeetScalarFieldEnum | MeetScalarFieldEnum[]
  }

  /**
   * Meet findFirstOrThrow
   */
  export type MeetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * Filter, which Meet to fetch.
     */
    where?: MeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meets to fetch.
     */
    orderBy?: MeetOrderByWithRelationInput | MeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meets.
     */
    cursor?: MeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meets.
     */
    distinct?: MeetScalarFieldEnum | MeetScalarFieldEnum[]
  }

  /**
   * Meet findMany
   */
  export type MeetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * Filter, which Meets to fetch.
     */
    where?: MeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meets to fetch.
     */
    orderBy?: MeetOrderByWithRelationInput | MeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meets.
     */
    cursor?: MeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meets.
     */
    distinct?: MeetScalarFieldEnum | MeetScalarFieldEnum[]
  }

  /**
   * Meet create
   */
  export type MeetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * The data needed to create a Meet.
     */
    data: XOR<MeetCreateInput, MeetUncheckedCreateInput>
  }

  /**
   * Meet createMany
   */
  export type MeetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meets.
     */
    data: MeetCreateManyInput | MeetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meet createManyAndReturn
   */
  export type MeetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * The data used to create many Meets.
     */
    data: MeetCreateManyInput | MeetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meet update
   */
  export type MeetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * The data needed to update a Meet.
     */
    data: XOR<MeetUpdateInput, MeetUncheckedUpdateInput>
    /**
     * Choose, which Meet to update.
     */
    where: MeetWhereUniqueInput
  }

  /**
   * Meet updateMany
   */
  export type MeetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meets.
     */
    data: XOR<MeetUpdateManyMutationInput, MeetUncheckedUpdateManyInput>
    /**
     * Filter which Meets to update
     */
    where?: MeetWhereInput
    /**
     * Limit how many Meets to update.
     */
    limit?: number
  }

  /**
   * Meet updateManyAndReturn
   */
  export type MeetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * The data used to update Meets.
     */
    data: XOR<MeetUpdateManyMutationInput, MeetUncheckedUpdateManyInput>
    /**
     * Filter which Meets to update
     */
    where?: MeetWhereInput
    /**
     * Limit how many Meets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meet upsert
   */
  export type MeetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * The filter to search for the Meet to update in case it exists.
     */
    where: MeetWhereUniqueInput
    /**
     * In case the Meet found by the `where` argument doesn't exist, create a new Meet with this data.
     */
    create: XOR<MeetCreateInput, MeetUncheckedCreateInput>
    /**
     * In case the Meet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetUpdateInput, MeetUncheckedUpdateInput>
  }

  /**
   * Meet delete
   */
  export type MeetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
    /**
     * Filter which Meet to delete.
     */
    where: MeetWhereUniqueInput
  }

  /**
   * Meet deleteMany
   */
  export type MeetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meets to delete
     */
    where?: MeetWhereInput
    /**
     * Limit how many Meets to delete.
     */
    limit?: number
  }

  /**
   * Meet.attendees
   */
  export type Meet$attendeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    where?: UserMeetWhereInput
    orderBy?: UserMeetOrderByWithRelationInput | UserMeetOrderByWithRelationInput[]
    cursor?: UserMeetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMeetScalarFieldEnum | UserMeetScalarFieldEnum[]
  }

  /**
   * Meet without action
   */
  export type MeetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meet
     */
    select?: MeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meet
     */
    omit?: MeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetInclude<ExtArgs> | null
  }


  /**
   * Model UserMeet
   */

  export type AggregateUserMeet = {
    _count: UserMeetCountAggregateOutputType | null
    _avg: UserMeetAvgAggregateOutputType | null
    _sum: UserMeetSumAggregateOutputType | null
    _min: UserMeetMinAggregateOutputType | null
    _max: UserMeetMaxAggregateOutputType | null
  }

  export type UserMeetAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    meetId: number | null
  }

  export type UserMeetSumAggregateOutputType = {
    id: number | null
    userId: number | null
    meetId: number | null
  }

  export type UserMeetMinAggregateOutputType = {
    id: number | null
    userId: number | null
    meetId: number | null
  }

  export type UserMeetMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    meetId: number | null
  }

  export type UserMeetCountAggregateOutputType = {
    id: number
    userId: number
    meetId: number
    _all: number
  }


  export type UserMeetAvgAggregateInputType = {
    id?: true
    userId?: true
    meetId?: true
  }

  export type UserMeetSumAggregateInputType = {
    id?: true
    userId?: true
    meetId?: true
  }

  export type UserMeetMinAggregateInputType = {
    id?: true
    userId?: true
    meetId?: true
  }

  export type UserMeetMaxAggregateInputType = {
    id?: true
    userId?: true
    meetId?: true
  }

  export type UserMeetCountAggregateInputType = {
    id?: true
    userId?: true
    meetId?: true
    _all?: true
  }

  export type UserMeetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMeet to aggregate.
     */
    where?: UserMeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeets to fetch.
     */
    orderBy?: UserMeetOrderByWithRelationInput | UserMeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMeets
    **/
    _count?: true | UserMeetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMeetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMeetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMeetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMeetMaxAggregateInputType
  }

  export type GetUserMeetAggregateType<T extends UserMeetAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMeet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMeet[P]>
      : GetScalarType<T[P], AggregateUserMeet[P]>
  }




  export type UserMeetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMeetWhereInput
    orderBy?: UserMeetOrderByWithAggregationInput | UserMeetOrderByWithAggregationInput[]
    by: UserMeetScalarFieldEnum[] | UserMeetScalarFieldEnum
    having?: UserMeetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMeetCountAggregateInputType | true
    _avg?: UserMeetAvgAggregateInputType
    _sum?: UserMeetSumAggregateInputType
    _min?: UserMeetMinAggregateInputType
    _max?: UserMeetMaxAggregateInputType
  }

  export type UserMeetGroupByOutputType = {
    id: number
    userId: number
    meetId: number
    _count: UserMeetCountAggregateOutputType | null
    _avg: UserMeetAvgAggregateOutputType | null
    _sum: UserMeetSumAggregateOutputType | null
    _min: UserMeetMinAggregateOutputType | null
    _max: UserMeetMaxAggregateOutputType | null
  }

  type GetUserMeetGroupByPayload<T extends UserMeetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMeetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMeetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMeetGroupByOutputType[P]>
            : GetScalarType<T[P], UserMeetGroupByOutputType[P]>
        }
      >
    >


  export type UserMeetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    meetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    meet?: boolean | MeetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMeet"]>

  export type UserMeetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    meetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    meet?: boolean | MeetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMeet"]>

  export type UserMeetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    meetId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    meet?: boolean | MeetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMeet"]>

  export type UserMeetSelectScalar = {
    id?: boolean
    userId?: boolean
    meetId?: boolean
  }

  export type UserMeetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "meetId", ExtArgs["result"]["userMeet"]>
  export type UserMeetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    meet?: boolean | MeetDefaultArgs<ExtArgs>
  }
  export type UserMeetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    meet?: boolean | MeetDefaultArgs<ExtArgs>
  }
  export type UserMeetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    meet?: boolean | MeetDefaultArgs<ExtArgs>
  }

  export type $UserMeetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMeet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      meet: Prisma.$MeetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      meetId: number
    }, ExtArgs["result"]["userMeet"]>
    composites: {}
  }

  type UserMeetGetPayload<S extends boolean | null | undefined | UserMeetDefaultArgs> = $Result.GetResult<Prisma.$UserMeetPayload, S>

  type UserMeetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMeetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMeetCountAggregateInputType | true
    }

  export interface UserMeetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMeet'], meta: { name: 'UserMeet' } }
    /**
     * Find zero or one UserMeet that matches the filter.
     * @param {UserMeetFindUniqueArgs} args - Arguments to find a UserMeet
     * @example
     * // Get one UserMeet
     * const userMeet = await prisma.userMeet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMeetFindUniqueArgs>(args: SelectSubset<T, UserMeetFindUniqueArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMeet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMeetFindUniqueOrThrowArgs} args - Arguments to find a UserMeet
     * @example
     * // Get one UserMeet
     * const userMeet = await prisma.userMeet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMeetFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMeetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMeet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetFindFirstArgs} args - Arguments to find a UserMeet
     * @example
     * // Get one UserMeet
     * const userMeet = await prisma.userMeet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMeetFindFirstArgs>(args?: SelectSubset<T, UserMeetFindFirstArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMeet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetFindFirstOrThrowArgs} args - Arguments to find a UserMeet
     * @example
     * // Get one UserMeet
     * const userMeet = await prisma.userMeet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMeetFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMeetFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMeets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMeets
     * const userMeets = await prisma.userMeet.findMany()
     * 
     * // Get first 10 UserMeets
     * const userMeets = await prisma.userMeet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMeetWithIdOnly = await prisma.userMeet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserMeetFindManyArgs>(args?: SelectSubset<T, UserMeetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMeet.
     * @param {UserMeetCreateArgs} args - Arguments to create a UserMeet.
     * @example
     * // Create one UserMeet
     * const UserMeet = await prisma.userMeet.create({
     *   data: {
     *     // ... data to create a UserMeet
     *   }
     * })
     * 
     */
    create<T extends UserMeetCreateArgs>(args: SelectSubset<T, UserMeetCreateArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMeets.
     * @param {UserMeetCreateManyArgs} args - Arguments to create many UserMeets.
     * @example
     * // Create many UserMeets
     * const userMeet = await prisma.userMeet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMeetCreateManyArgs>(args?: SelectSubset<T, UserMeetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMeets and returns the data saved in the database.
     * @param {UserMeetCreateManyAndReturnArgs} args - Arguments to create many UserMeets.
     * @example
     * // Create many UserMeets
     * const userMeet = await prisma.userMeet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMeets and only return the `id`
     * const userMeetWithIdOnly = await prisma.userMeet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMeetCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMeetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMeet.
     * @param {UserMeetDeleteArgs} args - Arguments to delete one UserMeet.
     * @example
     * // Delete one UserMeet
     * const UserMeet = await prisma.userMeet.delete({
     *   where: {
     *     // ... filter to delete one UserMeet
     *   }
     * })
     * 
     */
    delete<T extends UserMeetDeleteArgs>(args: SelectSubset<T, UserMeetDeleteArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMeet.
     * @param {UserMeetUpdateArgs} args - Arguments to update one UserMeet.
     * @example
     * // Update one UserMeet
     * const userMeet = await prisma.userMeet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMeetUpdateArgs>(args: SelectSubset<T, UserMeetUpdateArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMeets.
     * @param {UserMeetDeleteManyArgs} args - Arguments to filter UserMeets to delete.
     * @example
     * // Delete a few UserMeets
     * const { count } = await prisma.userMeet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMeetDeleteManyArgs>(args?: SelectSubset<T, UserMeetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMeets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMeets
     * const userMeet = await prisma.userMeet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMeetUpdateManyArgs>(args: SelectSubset<T, UserMeetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMeets and returns the data updated in the database.
     * @param {UserMeetUpdateManyAndReturnArgs} args - Arguments to update many UserMeets.
     * @example
     * // Update many UserMeets
     * const userMeet = await prisma.userMeet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMeets and only return the `id`
     * const userMeetWithIdOnly = await prisma.userMeet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserMeetUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMeetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMeet.
     * @param {UserMeetUpsertArgs} args - Arguments to update or create a UserMeet.
     * @example
     * // Update or create a UserMeet
     * const userMeet = await prisma.userMeet.upsert({
     *   create: {
     *     // ... data to create a UserMeet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMeet we want to update
     *   }
     * })
     */
    upsert<T extends UserMeetUpsertArgs>(args: SelectSubset<T, UserMeetUpsertArgs<ExtArgs>>): Prisma__UserMeetClient<$Result.GetResult<Prisma.$UserMeetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMeets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetCountArgs} args - Arguments to filter UserMeets to count.
     * @example
     * // Count the number of UserMeets
     * const count = await prisma.userMeet.count({
     *   where: {
     *     // ... the filter for the UserMeets we want to count
     *   }
     * })
    **/
    count<T extends UserMeetCountArgs>(
      args?: Subset<T, UserMeetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMeetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMeet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMeetAggregateArgs>(args: Subset<T, UserMeetAggregateArgs>): Prisma.PrismaPromise<GetUserMeetAggregateType<T>>

    /**
     * Group by UserMeet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMeetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMeetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMeetGroupByArgs['orderBy'] }
        : { orderBy?: UserMeetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMeetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMeetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMeet model
   */
  readonly fields: UserMeetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMeet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMeetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meet<T extends MeetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetDefaultArgs<ExtArgs>>): Prisma__MeetClient<$Result.GetResult<Prisma.$MeetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMeet model
   */
  interface UserMeetFieldRefs {
    readonly id: FieldRef<"UserMeet", 'Int'>
    readonly userId: FieldRef<"UserMeet", 'Int'>
    readonly meetId: FieldRef<"UserMeet", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserMeet findUnique
   */
  export type UserMeetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * Filter, which UserMeet to fetch.
     */
    where: UserMeetWhereUniqueInput
  }

  /**
   * UserMeet findUniqueOrThrow
   */
  export type UserMeetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * Filter, which UserMeet to fetch.
     */
    where: UserMeetWhereUniqueInput
  }

  /**
   * UserMeet findFirst
   */
  export type UserMeetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * Filter, which UserMeet to fetch.
     */
    where?: UserMeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeets to fetch.
     */
    orderBy?: UserMeetOrderByWithRelationInput | UserMeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMeets.
     */
    cursor?: UserMeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMeets.
     */
    distinct?: UserMeetScalarFieldEnum | UserMeetScalarFieldEnum[]
  }

  /**
   * UserMeet findFirstOrThrow
   */
  export type UserMeetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * Filter, which UserMeet to fetch.
     */
    where?: UserMeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeets to fetch.
     */
    orderBy?: UserMeetOrderByWithRelationInput | UserMeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMeets.
     */
    cursor?: UserMeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMeets.
     */
    distinct?: UserMeetScalarFieldEnum | UserMeetScalarFieldEnum[]
  }

  /**
   * UserMeet findMany
   */
  export type UserMeetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * Filter, which UserMeets to fetch.
     */
    where?: UserMeetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMeets to fetch.
     */
    orderBy?: UserMeetOrderByWithRelationInput | UserMeetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMeets.
     */
    cursor?: UserMeetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMeets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMeets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMeets.
     */
    distinct?: UserMeetScalarFieldEnum | UserMeetScalarFieldEnum[]
  }

  /**
   * UserMeet create
   */
  export type UserMeetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMeet.
     */
    data: XOR<UserMeetCreateInput, UserMeetUncheckedCreateInput>
  }

  /**
   * UserMeet createMany
   */
  export type UserMeetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMeets.
     */
    data: UserMeetCreateManyInput | UserMeetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMeet createManyAndReturn
   */
  export type UserMeetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * The data used to create many UserMeets.
     */
    data: UserMeetCreateManyInput | UserMeetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMeet update
   */
  export type UserMeetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMeet.
     */
    data: XOR<UserMeetUpdateInput, UserMeetUncheckedUpdateInput>
    /**
     * Choose, which UserMeet to update.
     */
    where: UserMeetWhereUniqueInput
  }

  /**
   * UserMeet updateMany
   */
  export type UserMeetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMeets.
     */
    data: XOR<UserMeetUpdateManyMutationInput, UserMeetUncheckedUpdateManyInput>
    /**
     * Filter which UserMeets to update
     */
    where?: UserMeetWhereInput
    /**
     * Limit how many UserMeets to update.
     */
    limit?: number
  }

  /**
   * UserMeet updateManyAndReturn
   */
  export type UserMeetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * The data used to update UserMeets.
     */
    data: XOR<UserMeetUpdateManyMutationInput, UserMeetUncheckedUpdateManyInput>
    /**
     * Filter which UserMeets to update
     */
    where?: UserMeetWhereInput
    /**
     * Limit how many UserMeets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMeet upsert
   */
  export type UserMeetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMeet to update in case it exists.
     */
    where: UserMeetWhereUniqueInput
    /**
     * In case the UserMeet found by the `where` argument doesn't exist, create a new UserMeet with this data.
     */
    create: XOR<UserMeetCreateInput, UserMeetUncheckedCreateInput>
    /**
     * In case the UserMeet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMeetUpdateInput, UserMeetUncheckedUpdateInput>
  }

  /**
   * UserMeet delete
   */
  export type UserMeetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
    /**
     * Filter which UserMeet to delete.
     */
    where: UserMeetWhereUniqueInput
  }

  /**
   * UserMeet deleteMany
   */
  export type UserMeetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMeets to delete
     */
    where?: UserMeetWhereInput
    /**
     * Limit how many UserMeets to delete.
     */
    limit?: number
  }

  /**
   * UserMeet without action
   */
  export type UserMeetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMeet
     */
    select?: UserMeetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMeet
     */
    omit?: UserMeetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMeetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    name: 'name',
    password: 'password',
    userType: 'userType'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MeetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    date: 'date',
    points: 'points',
    creatorId: 'creatorId',
    createdAt: 'createdAt'
  };

  export type MeetScalarFieldEnum = (typeof MeetScalarFieldEnum)[keyof typeof MeetScalarFieldEnum]


  export const UserMeetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    meetId: 'meetId'
  };

  export type UserMeetScalarFieldEnum = (typeof UserMeetScalarFieldEnum)[keyof typeof UserMeetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    meets?: UserMeetListRelationFilter
    createdMeets?: MeetListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    meets?: UserMeetOrderByRelationAggregateInput
    createdMeets?: MeetOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    userType?: EnumUserTypeFilter<"User"> | $Enums.UserType
    meets?: UserMeetListRelationFilter
    createdMeets?: MeetListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    userType?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    userType?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
  }

  export type MeetWhereInput = {
    AND?: MeetWhereInput | MeetWhereInput[]
    OR?: MeetWhereInput[]
    NOT?: MeetWhereInput | MeetWhereInput[]
    id?: IntFilter<"Meet"> | number
    name?: StringFilter<"Meet"> | string
    location?: StringFilter<"Meet"> | string
    date?: StringFilter<"Meet"> | string
    points?: IntFilter<"Meet"> | number
    creatorId?: IntFilter<"Meet"> | number
    createdAt?: DateTimeFilter<"Meet"> | Date | string
    attendees?: UserMeetListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MeetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    points?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    attendees?: UserMeetOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
  }

  export type MeetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MeetWhereInput | MeetWhereInput[]
    OR?: MeetWhereInput[]
    NOT?: MeetWhereInput | MeetWhereInput[]
    name?: StringFilter<"Meet"> | string
    location?: StringFilter<"Meet"> | string
    date?: StringFilter<"Meet"> | string
    points?: IntFilter<"Meet"> | number
    creatorId?: IntFilter<"Meet"> | number
    createdAt?: DateTimeFilter<"Meet"> | Date | string
    attendees?: UserMeetListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MeetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    points?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
    _count?: MeetCountOrderByAggregateInput
    _avg?: MeetAvgOrderByAggregateInput
    _max?: MeetMaxOrderByAggregateInput
    _min?: MeetMinOrderByAggregateInput
    _sum?: MeetSumOrderByAggregateInput
  }

  export type MeetScalarWhereWithAggregatesInput = {
    AND?: MeetScalarWhereWithAggregatesInput | MeetScalarWhereWithAggregatesInput[]
    OR?: MeetScalarWhereWithAggregatesInput[]
    NOT?: MeetScalarWhereWithAggregatesInput | MeetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meet"> | number
    name?: StringWithAggregatesFilter<"Meet"> | string
    location?: StringWithAggregatesFilter<"Meet"> | string
    date?: StringWithAggregatesFilter<"Meet"> | string
    points?: IntWithAggregatesFilter<"Meet"> | number
    creatorId?: IntWithAggregatesFilter<"Meet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Meet"> | Date | string
  }

  export type UserMeetWhereInput = {
    AND?: UserMeetWhereInput | UserMeetWhereInput[]
    OR?: UserMeetWhereInput[]
    NOT?: UserMeetWhereInput | UserMeetWhereInput[]
    id?: IntFilter<"UserMeet"> | number
    userId?: IntFilter<"UserMeet"> | number
    meetId?: IntFilter<"UserMeet"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meet?: XOR<MeetScalarRelationFilter, MeetWhereInput>
  }

  export type UserMeetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    meetId?: SortOrder
    user?: UserOrderByWithRelationInput
    meet?: MeetOrderByWithRelationInput
  }

  export type UserMeetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_meetId?: UserMeetUserIdMeetIdCompoundUniqueInput
    AND?: UserMeetWhereInput | UserMeetWhereInput[]
    OR?: UserMeetWhereInput[]
    NOT?: UserMeetWhereInput | UserMeetWhereInput[]
    userId?: IntFilter<"UserMeet"> | number
    meetId?: IntFilter<"UserMeet"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    meet?: XOR<MeetScalarRelationFilter, MeetWhereInput>
  }, "id" | "userId_meetId">

  export type UserMeetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    meetId?: SortOrder
    _count?: UserMeetCountOrderByAggregateInput
    _avg?: UserMeetAvgOrderByAggregateInput
    _max?: UserMeetMaxOrderByAggregateInput
    _min?: UserMeetMinOrderByAggregateInput
    _sum?: UserMeetSumOrderByAggregateInput
  }

  export type UserMeetScalarWhereWithAggregatesInput = {
    AND?: UserMeetScalarWhereWithAggregatesInput | UserMeetScalarWhereWithAggregatesInput[]
    OR?: UserMeetScalarWhereWithAggregatesInput[]
    NOT?: UserMeetScalarWhereWithAggregatesInput | UserMeetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserMeet"> | number
    userId?: IntWithAggregatesFilter<"UserMeet"> | number
    meetId?: IntWithAggregatesFilter<"UserMeet"> | number
  }

  export type UserCreateInput = {
    username: string
    name?: string | null
    password?: string | null
    userType?: $Enums.UserType
    meets?: UserMeetCreateNestedManyWithoutUserInput
    createdMeets?: MeetCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    name?: string | null
    password?: string | null
    userType?: $Enums.UserType
    meets?: UserMeetUncheckedCreateNestedManyWithoutUserInput
    createdMeets?: MeetUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    meets?: UserMeetUpdateManyWithoutUserNestedInput
    createdMeets?: MeetUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    meets?: UserMeetUncheckedUpdateManyWithoutUserNestedInput
    createdMeets?: MeetUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    name?: string | null
    password?: string | null
    userType?: $Enums.UserType
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type MeetCreateInput = {
    name: string
    location: string
    date: string
    points?: number
    createdAt?: Date | string
    attendees?: UserMeetCreateNestedManyWithoutMeetInput
    creator: UserCreateNestedOneWithoutCreatedMeetsInput
  }

  export type MeetUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    date: string
    points?: number
    creatorId: number
    createdAt?: Date | string
    attendees?: UserMeetUncheckedCreateNestedManyWithoutMeetInput
  }

  export type MeetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserMeetUpdateManyWithoutMeetNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedMeetsNestedInput
  }

  export type MeetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserMeetUncheckedUpdateManyWithoutMeetNestedInput
  }

  export type MeetCreateManyInput = {
    id?: number
    name: string
    location: string
    date: string
    points?: number
    creatorId: number
    createdAt?: Date | string
  }

  export type MeetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MeetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMeetCreateInput = {
    user: UserCreateNestedOneWithoutMeetsInput
    meet: MeetCreateNestedOneWithoutAttendeesInput
  }

  export type UserMeetUncheckedCreateInput = {
    id?: number
    userId: number
    meetId: number
  }

  export type UserMeetUpdateInput = {
    user?: UserUpdateOneRequiredWithoutMeetsNestedInput
    meet?: MeetUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type UserMeetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    meetId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMeetCreateManyInput = {
    id?: number
    userId: number
    meetId: number
  }

  export type UserMeetUpdateManyMutationInput = {

  }

  export type UserMeetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    meetId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type UserMeetListRelationFilter = {
    every?: UserMeetWhereInput
    some?: UserMeetWhereInput
    none?: UserMeetWhereInput
  }

  export type MeetListRelationFilter = {
    every?: MeetWhereInput
    some?: MeetWhereInput
    none?: MeetWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserMeetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userType?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userType?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    userType?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MeetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    points?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MeetAvgOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    creatorId?: SortOrder
  }

  export type MeetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    points?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MeetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    date?: SortOrder
    points?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type MeetSumOrderByAggregateInput = {
    id?: SortOrder
    points?: SortOrder
    creatorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MeetScalarRelationFilter = {
    is?: MeetWhereInput
    isNot?: MeetWhereInput
  }

  export type UserMeetUserIdMeetIdCompoundUniqueInput = {
    userId: number
    meetId: number
  }

  export type UserMeetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meetId?: SortOrder
  }

  export type UserMeetAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meetId?: SortOrder
  }

  export type UserMeetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meetId?: SortOrder
  }

  export type UserMeetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meetId?: SortOrder
  }

  export type UserMeetSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    meetId?: SortOrder
  }

  export type UserMeetCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMeetCreateWithoutUserInput, UserMeetUncheckedCreateWithoutUserInput> | UserMeetCreateWithoutUserInput[] | UserMeetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutUserInput | UserMeetCreateOrConnectWithoutUserInput[]
    createMany?: UserMeetCreateManyUserInputEnvelope
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
  }

  export type MeetCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MeetCreateWithoutCreatorInput, MeetUncheckedCreateWithoutCreatorInput> | MeetCreateWithoutCreatorInput[] | MeetUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetCreateOrConnectWithoutCreatorInput | MeetCreateOrConnectWithoutCreatorInput[]
    createMany?: MeetCreateManyCreatorInputEnvelope
    connect?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
  }

  export type UserMeetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMeetCreateWithoutUserInput, UserMeetUncheckedCreateWithoutUserInput> | UserMeetCreateWithoutUserInput[] | UserMeetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutUserInput | UserMeetCreateOrConnectWithoutUserInput[]
    createMany?: UserMeetCreateManyUserInputEnvelope
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
  }

  export type MeetUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<MeetCreateWithoutCreatorInput, MeetUncheckedCreateWithoutCreatorInput> | MeetCreateWithoutCreatorInput[] | MeetUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetCreateOrConnectWithoutCreatorInput | MeetCreateOrConnectWithoutCreatorInput[]
    createMany?: MeetCreateManyCreatorInputEnvelope
    connect?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type UserMeetUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMeetCreateWithoutUserInput, UserMeetUncheckedCreateWithoutUserInput> | UserMeetCreateWithoutUserInput[] | UserMeetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutUserInput | UserMeetCreateOrConnectWithoutUserInput[]
    upsert?: UserMeetUpsertWithWhereUniqueWithoutUserInput | UserMeetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMeetCreateManyUserInputEnvelope
    set?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    disconnect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    delete?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    update?: UserMeetUpdateWithWhereUniqueWithoutUserInput | UserMeetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMeetUpdateManyWithWhereWithoutUserInput | UserMeetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMeetScalarWhereInput | UserMeetScalarWhereInput[]
  }

  export type MeetUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MeetCreateWithoutCreatorInput, MeetUncheckedCreateWithoutCreatorInput> | MeetCreateWithoutCreatorInput[] | MeetUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetCreateOrConnectWithoutCreatorInput | MeetCreateOrConnectWithoutCreatorInput[]
    upsert?: MeetUpsertWithWhereUniqueWithoutCreatorInput | MeetUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MeetCreateManyCreatorInputEnvelope
    set?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    disconnect?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    delete?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    connect?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    update?: MeetUpdateWithWhereUniqueWithoutCreatorInput | MeetUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MeetUpdateManyWithWhereWithoutCreatorInput | MeetUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MeetScalarWhereInput | MeetScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserMeetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMeetCreateWithoutUserInput, UserMeetUncheckedCreateWithoutUserInput> | UserMeetCreateWithoutUserInput[] | UserMeetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutUserInput | UserMeetCreateOrConnectWithoutUserInput[]
    upsert?: UserMeetUpsertWithWhereUniqueWithoutUserInput | UserMeetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserMeetCreateManyUserInputEnvelope
    set?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    disconnect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    delete?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    update?: UserMeetUpdateWithWhereUniqueWithoutUserInput | UserMeetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMeetUpdateManyWithWhereWithoutUserInput | UserMeetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMeetScalarWhereInput | UserMeetScalarWhereInput[]
  }

  export type MeetUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<MeetCreateWithoutCreatorInput, MeetUncheckedCreateWithoutCreatorInput> | MeetCreateWithoutCreatorInput[] | MeetUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: MeetCreateOrConnectWithoutCreatorInput | MeetCreateOrConnectWithoutCreatorInput[]
    upsert?: MeetUpsertWithWhereUniqueWithoutCreatorInput | MeetUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: MeetCreateManyCreatorInputEnvelope
    set?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    disconnect?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    delete?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    connect?: MeetWhereUniqueInput | MeetWhereUniqueInput[]
    update?: MeetUpdateWithWhereUniqueWithoutCreatorInput | MeetUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: MeetUpdateManyWithWhereWithoutCreatorInput | MeetUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: MeetScalarWhereInput | MeetScalarWhereInput[]
  }

  export type UserMeetCreateNestedManyWithoutMeetInput = {
    create?: XOR<UserMeetCreateWithoutMeetInput, UserMeetUncheckedCreateWithoutMeetInput> | UserMeetCreateWithoutMeetInput[] | UserMeetUncheckedCreateWithoutMeetInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutMeetInput | UserMeetCreateOrConnectWithoutMeetInput[]
    createMany?: UserMeetCreateManyMeetInputEnvelope
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedMeetsInput = {
    create?: XOR<UserCreateWithoutCreatedMeetsInput, UserUncheckedCreateWithoutCreatedMeetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMeetsInput
    connect?: UserWhereUniqueInput
  }

  export type UserMeetUncheckedCreateNestedManyWithoutMeetInput = {
    create?: XOR<UserMeetCreateWithoutMeetInput, UserMeetUncheckedCreateWithoutMeetInput> | UserMeetCreateWithoutMeetInput[] | UserMeetUncheckedCreateWithoutMeetInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutMeetInput | UserMeetCreateOrConnectWithoutMeetInput[]
    createMany?: UserMeetCreateManyMeetInputEnvelope
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserMeetUpdateManyWithoutMeetNestedInput = {
    create?: XOR<UserMeetCreateWithoutMeetInput, UserMeetUncheckedCreateWithoutMeetInput> | UserMeetCreateWithoutMeetInput[] | UserMeetUncheckedCreateWithoutMeetInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutMeetInput | UserMeetCreateOrConnectWithoutMeetInput[]
    upsert?: UserMeetUpsertWithWhereUniqueWithoutMeetInput | UserMeetUpsertWithWhereUniqueWithoutMeetInput[]
    createMany?: UserMeetCreateManyMeetInputEnvelope
    set?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    disconnect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    delete?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    update?: UserMeetUpdateWithWhereUniqueWithoutMeetInput | UserMeetUpdateWithWhereUniqueWithoutMeetInput[]
    updateMany?: UserMeetUpdateManyWithWhereWithoutMeetInput | UserMeetUpdateManyWithWhereWithoutMeetInput[]
    deleteMany?: UserMeetScalarWhereInput | UserMeetScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedMeetsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedMeetsInput, UserUncheckedCreateWithoutCreatedMeetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMeetsInput
    upsert?: UserUpsertWithoutCreatedMeetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedMeetsInput, UserUpdateWithoutCreatedMeetsInput>, UserUncheckedUpdateWithoutCreatedMeetsInput>
  }

  export type UserMeetUncheckedUpdateManyWithoutMeetNestedInput = {
    create?: XOR<UserMeetCreateWithoutMeetInput, UserMeetUncheckedCreateWithoutMeetInput> | UserMeetCreateWithoutMeetInput[] | UserMeetUncheckedCreateWithoutMeetInput[]
    connectOrCreate?: UserMeetCreateOrConnectWithoutMeetInput | UserMeetCreateOrConnectWithoutMeetInput[]
    upsert?: UserMeetUpsertWithWhereUniqueWithoutMeetInput | UserMeetUpsertWithWhereUniqueWithoutMeetInput[]
    createMany?: UserMeetCreateManyMeetInputEnvelope
    set?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    disconnect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    delete?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    connect?: UserMeetWhereUniqueInput | UserMeetWhereUniqueInput[]
    update?: UserMeetUpdateWithWhereUniqueWithoutMeetInput | UserMeetUpdateWithWhereUniqueWithoutMeetInput[]
    updateMany?: UserMeetUpdateManyWithWhereWithoutMeetInput | UserMeetUpdateManyWithWhereWithoutMeetInput[]
    deleteMany?: UserMeetScalarWhereInput | UserMeetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMeetsInput = {
    create?: XOR<UserCreateWithoutMeetsInput, UserUncheckedCreateWithoutMeetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetsInput
    connect?: UserWhereUniqueInput
  }

  export type MeetCreateNestedOneWithoutAttendeesInput = {
    create?: XOR<MeetCreateWithoutAttendeesInput, MeetUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: MeetCreateOrConnectWithoutAttendeesInput
    connect?: MeetWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMeetsNestedInput = {
    create?: XOR<UserCreateWithoutMeetsInput, UserUncheckedCreateWithoutMeetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMeetsInput
    upsert?: UserUpsertWithoutMeetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMeetsInput, UserUpdateWithoutMeetsInput>, UserUncheckedUpdateWithoutMeetsInput>
  }

  export type MeetUpdateOneRequiredWithoutAttendeesNestedInput = {
    create?: XOR<MeetCreateWithoutAttendeesInput, MeetUncheckedCreateWithoutAttendeesInput>
    connectOrCreate?: MeetCreateOrConnectWithoutAttendeesInput
    upsert?: MeetUpsertWithoutAttendeesInput
    connect?: MeetWhereUniqueInput
    update?: XOR<XOR<MeetUpdateToOneWithWhereWithoutAttendeesInput, MeetUpdateWithoutAttendeesInput>, MeetUncheckedUpdateWithoutAttendeesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserMeetCreateWithoutUserInput = {
    meet: MeetCreateNestedOneWithoutAttendeesInput
  }

  export type UserMeetUncheckedCreateWithoutUserInput = {
    id?: number
    meetId: number
  }

  export type UserMeetCreateOrConnectWithoutUserInput = {
    where: UserMeetWhereUniqueInput
    create: XOR<UserMeetCreateWithoutUserInput, UserMeetUncheckedCreateWithoutUserInput>
  }

  export type UserMeetCreateManyUserInputEnvelope = {
    data: UserMeetCreateManyUserInput | UserMeetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MeetCreateWithoutCreatorInput = {
    name: string
    location: string
    date: string
    points?: number
    createdAt?: Date | string
    attendees?: UserMeetCreateNestedManyWithoutMeetInput
  }

  export type MeetUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    location: string
    date: string
    points?: number
    createdAt?: Date | string
    attendees?: UserMeetUncheckedCreateNestedManyWithoutMeetInput
  }

  export type MeetCreateOrConnectWithoutCreatorInput = {
    where: MeetWhereUniqueInput
    create: XOR<MeetCreateWithoutCreatorInput, MeetUncheckedCreateWithoutCreatorInput>
  }

  export type MeetCreateManyCreatorInputEnvelope = {
    data: MeetCreateManyCreatorInput | MeetCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type UserMeetUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMeetWhereUniqueInput
    update: XOR<UserMeetUpdateWithoutUserInput, UserMeetUncheckedUpdateWithoutUserInput>
    create: XOR<UserMeetCreateWithoutUserInput, UserMeetUncheckedCreateWithoutUserInput>
  }

  export type UserMeetUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMeetWhereUniqueInput
    data: XOR<UserMeetUpdateWithoutUserInput, UserMeetUncheckedUpdateWithoutUserInput>
  }

  export type UserMeetUpdateManyWithWhereWithoutUserInput = {
    where: UserMeetScalarWhereInput
    data: XOR<UserMeetUpdateManyMutationInput, UserMeetUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMeetScalarWhereInput = {
    AND?: UserMeetScalarWhereInput | UserMeetScalarWhereInput[]
    OR?: UserMeetScalarWhereInput[]
    NOT?: UserMeetScalarWhereInput | UserMeetScalarWhereInput[]
    id?: IntFilter<"UserMeet"> | number
    userId?: IntFilter<"UserMeet"> | number
    meetId?: IntFilter<"UserMeet"> | number
  }

  export type MeetUpsertWithWhereUniqueWithoutCreatorInput = {
    where: MeetWhereUniqueInput
    update: XOR<MeetUpdateWithoutCreatorInput, MeetUncheckedUpdateWithoutCreatorInput>
    create: XOR<MeetCreateWithoutCreatorInput, MeetUncheckedCreateWithoutCreatorInput>
  }

  export type MeetUpdateWithWhereUniqueWithoutCreatorInput = {
    where: MeetWhereUniqueInput
    data: XOR<MeetUpdateWithoutCreatorInput, MeetUncheckedUpdateWithoutCreatorInput>
  }

  export type MeetUpdateManyWithWhereWithoutCreatorInput = {
    where: MeetScalarWhereInput
    data: XOR<MeetUpdateManyMutationInput, MeetUncheckedUpdateManyWithoutCreatorInput>
  }

  export type MeetScalarWhereInput = {
    AND?: MeetScalarWhereInput | MeetScalarWhereInput[]
    OR?: MeetScalarWhereInput[]
    NOT?: MeetScalarWhereInput | MeetScalarWhereInput[]
    id?: IntFilter<"Meet"> | number
    name?: StringFilter<"Meet"> | string
    location?: StringFilter<"Meet"> | string
    date?: StringFilter<"Meet"> | string
    points?: IntFilter<"Meet"> | number
    creatorId?: IntFilter<"Meet"> | number
    createdAt?: DateTimeFilter<"Meet"> | Date | string
  }

  export type UserMeetCreateWithoutMeetInput = {
    user: UserCreateNestedOneWithoutMeetsInput
  }

  export type UserMeetUncheckedCreateWithoutMeetInput = {
    id?: number
    userId: number
  }

  export type UserMeetCreateOrConnectWithoutMeetInput = {
    where: UserMeetWhereUniqueInput
    create: XOR<UserMeetCreateWithoutMeetInput, UserMeetUncheckedCreateWithoutMeetInput>
  }

  export type UserMeetCreateManyMeetInputEnvelope = {
    data: UserMeetCreateManyMeetInput | UserMeetCreateManyMeetInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedMeetsInput = {
    username: string
    name?: string | null
    password?: string | null
    userType?: $Enums.UserType
    meets?: UserMeetCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedMeetsInput = {
    id?: number
    username: string
    name?: string | null
    password?: string | null
    userType?: $Enums.UserType
    meets?: UserMeetUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedMeetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedMeetsInput, UserUncheckedCreateWithoutCreatedMeetsInput>
  }

  export type UserMeetUpsertWithWhereUniqueWithoutMeetInput = {
    where: UserMeetWhereUniqueInput
    update: XOR<UserMeetUpdateWithoutMeetInput, UserMeetUncheckedUpdateWithoutMeetInput>
    create: XOR<UserMeetCreateWithoutMeetInput, UserMeetUncheckedCreateWithoutMeetInput>
  }

  export type UserMeetUpdateWithWhereUniqueWithoutMeetInput = {
    where: UserMeetWhereUniqueInput
    data: XOR<UserMeetUpdateWithoutMeetInput, UserMeetUncheckedUpdateWithoutMeetInput>
  }

  export type UserMeetUpdateManyWithWhereWithoutMeetInput = {
    where: UserMeetScalarWhereInput
    data: XOR<UserMeetUpdateManyMutationInput, UserMeetUncheckedUpdateManyWithoutMeetInput>
  }

  export type UserUpsertWithoutCreatedMeetsInput = {
    update: XOR<UserUpdateWithoutCreatedMeetsInput, UserUncheckedUpdateWithoutCreatedMeetsInput>
    create: XOR<UserCreateWithoutCreatedMeetsInput, UserUncheckedCreateWithoutCreatedMeetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedMeetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedMeetsInput, UserUncheckedUpdateWithoutCreatedMeetsInput>
  }

  export type UserUpdateWithoutCreatedMeetsInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    meets?: UserMeetUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedMeetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    meets?: UserMeetUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMeetsInput = {
    username: string
    name?: string | null
    password?: string | null
    userType?: $Enums.UserType
    createdMeets?: MeetCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutMeetsInput = {
    id?: number
    username: string
    name?: string | null
    password?: string | null
    userType?: $Enums.UserType
    createdMeets?: MeetUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutMeetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMeetsInput, UserUncheckedCreateWithoutMeetsInput>
  }

  export type MeetCreateWithoutAttendeesInput = {
    name: string
    location: string
    date: string
    points?: number
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedMeetsInput
  }

  export type MeetUncheckedCreateWithoutAttendeesInput = {
    id?: number
    name: string
    location: string
    date: string
    points?: number
    creatorId: number
    createdAt?: Date | string
  }

  export type MeetCreateOrConnectWithoutAttendeesInput = {
    where: MeetWhereUniqueInput
    create: XOR<MeetCreateWithoutAttendeesInput, MeetUncheckedCreateWithoutAttendeesInput>
  }

  export type UserUpsertWithoutMeetsInput = {
    update: XOR<UserUpdateWithoutMeetsInput, UserUncheckedUpdateWithoutMeetsInput>
    create: XOR<UserCreateWithoutMeetsInput, UserUncheckedCreateWithoutMeetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMeetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMeetsInput, UserUncheckedUpdateWithoutMeetsInput>
  }

  export type UserUpdateWithoutMeetsInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdMeets?: MeetUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutMeetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    createdMeets?: MeetUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type MeetUpsertWithoutAttendeesInput = {
    update: XOR<MeetUpdateWithoutAttendeesInput, MeetUncheckedUpdateWithoutAttendeesInput>
    create: XOR<MeetCreateWithoutAttendeesInput, MeetUncheckedCreateWithoutAttendeesInput>
    where?: MeetWhereInput
  }

  export type MeetUpdateToOneWithWhereWithoutAttendeesInput = {
    where?: MeetWhereInput
    data: XOR<MeetUpdateWithoutAttendeesInput, MeetUncheckedUpdateWithoutAttendeesInput>
  }

  export type MeetUpdateWithoutAttendeesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedMeetsNestedInput
  }

  export type MeetUncheckedUpdateWithoutAttendeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    creatorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMeetCreateManyUserInput = {
    id?: number
    meetId: number
  }

  export type MeetCreateManyCreatorInput = {
    id?: number
    name: string
    location: string
    date: string
    points?: number
    createdAt?: Date | string
  }

  export type UserMeetUpdateWithoutUserInput = {
    meet?: MeetUpdateOneRequiredWithoutAttendeesNestedInput
  }

  export type UserMeetUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMeetUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    meetId?: IntFieldUpdateOperationsInput | number
  }

  export type MeetUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserMeetUpdateManyWithoutMeetNestedInput
  }

  export type MeetUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: UserMeetUncheckedUpdateManyWithoutMeetNestedInput
  }

  export type MeetUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMeetCreateManyMeetInput = {
    id?: number
    userId: number
  }

  export type UserMeetUpdateWithoutMeetInput = {
    user?: UserUpdateOneRequiredWithoutMeetsNestedInput
  }

  export type UserMeetUncheckedUpdateWithoutMeetInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMeetUncheckedUpdateManyWithoutMeetInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}