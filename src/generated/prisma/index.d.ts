
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model campaign_creative
 * 
 */
export type campaign_creative = $Result.DefaultSelection<Prisma.$campaign_creativePayload>
/**
 * Model campaigns
 * 
 */
export type campaigns = $Result.DefaultSelection<Prisma.$campaignsPayload>
/**
 * Model creatives
 * 
 */
export type creatives = $Result.DefaultSelection<Prisma.$creativesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaign_creatives
 * const campaign_creatives = await prisma.campaign_creative.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Campaign_creatives
   * const campaign_creatives = await prisma.campaign_creative.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campaign_creative`: Exposes CRUD operations for the **campaign_creative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaign_creatives
    * const campaign_creatives = await prisma.campaign_creative.findMany()
    * ```
    */
  get campaign_creative(): Prisma.campaign_creativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaigns`: Exposes CRUD operations for the **campaigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaigns.findMany()
    * ```
    */
  get campaigns(): Prisma.campaignsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.creatives`: Exposes CRUD operations for the **creatives** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creatives
    * const creatives = await prisma.creatives.findMany()
    * ```
    */
  get creatives(): Prisma.creativesDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
    campaign_creative: 'campaign_creative',
    campaigns: 'campaigns',
    creatives: 'creatives'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campaign_creative" | "campaigns" | "creatives"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      campaign_creative: {
        payload: Prisma.$campaign_creativePayload<ExtArgs>
        fields: Prisma.campaign_creativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.campaign_creativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.campaign_creativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>
          }
          findFirst: {
            args: Prisma.campaign_creativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.campaign_creativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>
          }
          findMany: {
            args: Prisma.campaign_creativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>[]
          }
          create: {
            args: Prisma.campaign_creativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>
          }
          createMany: {
            args: Prisma.campaign_creativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.campaign_creativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>[]
          }
          delete: {
            args: Prisma.campaign_creativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>
          }
          update: {
            args: Prisma.campaign_creativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>
          }
          deleteMany: {
            args: Prisma.campaign_creativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.campaign_creativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.campaign_creativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>[]
          }
          upsert: {
            args: Prisma.campaign_creativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaign_creativePayload>
          }
          aggregate: {
            args: Prisma.Campaign_creativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign_creative>
          }
          groupBy: {
            args: Prisma.campaign_creativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Campaign_creativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.campaign_creativeCountArgs<ExtArgs>
            result: $Utils.Optional<Campaign_creativeCountAggregateOutputType> | number
          }
        }
      }
      campaigns: {
        payload: Prisma.$campaignsPayload<ExtArgs>
        fields: Prisma.campaignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.campaignsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.campaignsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          findFirst: {
            args: Prisma.campaignsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.campaignsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          findMany: {
            args: Prisma.campaignsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>[]
          }
          create: {
            args: Prisma.campaignsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          createMany: {
            args: Prisma.campaignsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.campaignsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>[]
          }
          delete: {
            args: Prisma.campaignsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          update: {
            args: Prisma.campaignsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          deleteMany: {
            args: Prisma.campaignsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.campaignsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.campaignsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>[]
          }
          upsert: {
            args: Prisma.campaignsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$campaignsPayload>
          }
          aggregate: {
            args: Prisma.CampaignsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaigns>
          }
          groupBy: {
            args: Prisma.campaignsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.campaignsCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignsCountAggregateOutputType> | number
          }
        }
      }
      creatives: {
        payload: Prisma.$creativesPayload<ExtArgs>
        fields: Prisma.creativesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.creativesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.creativesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>
          }
          findFirst: {
            args: Prisma.creativesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.creativesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>
          }
          findMany: {
            args: Prisma.creativesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>[]
          }
          create: {
            args: Prisma.creativesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>
          }
          createMany: {
            args: Prisma.creativesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.creativesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>[]
          }
          delete: {
            args: Prisma.creativesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>
          }
          update: {
            args: Prisma.creativesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>
          }
          deleteMany: {
            args: Prisma.creativesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.creativesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.creativesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>[]
          }
          upsert: {
            args: Prisma.creativesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$creativesPayload>
          }
          aggregate: {
            args: Prisma.CreativesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreatives>
          }
          groupBy: {
            args: Prisma.creativesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreativesGroupByOutputType>[]
          }
          count: {
            args: Prisma.creativesCountArgs<ExtArgs>
            result: $Utils.Optional<CreativesCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    campaign_creative?: campaign_creativeOmit
    campaigns?: campaignsOmit
    creatives?: creativesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CampaignsCountOutputType
   */

  export type CampaignsCountOutputType = {
    campaign_creative: number
  }

  export type CampaignsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign_creative?: boolean | CampaignsCountOutputTypeCountCampaign_creativeArgs
  }

  // Custom InputTypes
  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignsCountOutputType
     */
    select?: CampaignsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignsCountOutputType without action
   */
  export type CampaignsCountOutputTypeCountCampaign_creativeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaign_creativeWhereInput
  }


  /**
   * Count Type CreativesCountOutputType
   */

  export type CreativesCountOutputType = {
    campaign_creative: number
  }

  export type CreativesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign_creative?: boolean | CreativesCountOutputTypeCountCampaign_creativeArgs
  }

  // Custom InputTypes
  /**
   * CreativesCountOutputType without action
   */
  export type CreativesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreativesCountOutputType
     */
    select?: CreativesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CreativesCountOutputType without action
   */
  export type CreativesCountOutputTypeCountCampaign_creativeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaign_creativeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model campaign_creative
   */

  export type AggregateCampaign_creative = {
    _count: Campaign_creativeCountAggregateOutputType | null
    _min: Campaign_creativeMinAggregateOutputType | null
    _max: Campaign_creativeMaxAggregateOutputType | null
  }

  export type Campaign_creativeMinAggregateOutputType = {
    campaign_id: string | null
    creative_id: string | null
  }

  export type Campaign_creativeMaxAggregateOutputType = {
    campaign_id: string | null
    creative_id: string | null
  }

  export type Campaign_creativeCountAggregateOutputType = {
    campaign_id: number
    creative_id: number
    _all: number
  }


  export type Campaign_creativeMinAggregateInputType = {
    campaign_id?: true
    creative_id?: true
  }

  export type Campaign_creativeMaxAggregateInputType = {
    campaign_id?: true
    creative_id?: true
  }

  export type Campaign_creativeCountAggregateInputType = {
    campaign_id?: true
    creative_id?: true
    _all?: true
  }

  export type Campaign_creativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaign_creative to aggregate.
     */
    where?: campaign_creativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_creatives to fetch.
     */
    orderBy?: campaign_creativeOrderByWithRelationInput | campaign_creativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: campaign_creativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned campaign_creatives
    **/
    _count?: true | Campaign_creativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Campaign_creativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Campaign_creativeMaxAggregateInputType
  }

  export type GetCampaign_creativeAggregateType<T extends Campaign_creativeAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign_creative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign_creative[P]>
      : GetScalarType<T[P], AggregateCampaign_creative[P]>
  }




  export type campaign_creativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaign_creativeWhereInput
    orderBy?: campaign_creativeOrderByWithAggregationInput | campaign_creativeOrderByWithAggregationInput[]
    by: Campaign_creativeScalarFieldEnum[] | Campaign_creativeScalarFieldEnum
    having?: campaign_creativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Campaign_creativeCountAggregateInputType | true
    _min?: Campaign_creativeMinAggregateInputType
    _max?: Campaign_creativeMaxAggregateInputType
  }

  export type Campaign_creativeGroupByOutputType = {
    campaign_id: string
    creative_id: string
    _count: Campaign_creativeCountAggregateOutputType | null
    _min: Campaign_creativeMinAggregateOutputType | null
    _max: Campaign_creativeMaxAggregateOutputType | null
  }

  type GetCampaign_creativeGroupByPayload<T extends campaign_creativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Campaign_creativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Campaign_creativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Campaign_creativeGroupByOutputType[P]>
            : GetScalarType<T[P], Campaign_creativeGroupByOutputType[P]>
        }
      >
    >


  export type campaign_creativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaign_id?: boolean
    creative_id?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    creatives?: boolean | creativesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign_creative"]>

  export type campaign_creativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaign_id?: boolean
    creative_id?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    creatives?: boolean | creativesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign_creative"]>

  export type campaign_creativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    campaign_id?: boolean
    creative_id?: boolean
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    creatives?: boolean | creativesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign_creative"]>

  export type campaign_creativeSelectScalar = {
    campaign_id?: boolean
    creative_id?: boolean
  }

  export type campaign_creativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"campaign_id" | "creative_id", ExtArgs["result"]["campaign_creative"]>
  export type campaign_creativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    creatives?: boolean | creativesDefaultArgs<ExtArgs>
  }
  export type campaign_creativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    creatives?: boolean | creativesDefaultArgs<ExtArgs>
  }
  export type campaign_creativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | campaignsDefaultArgs<ExtArgs>
    creatives?: boolean | creativesDefaultArgs<ExtArgs>
  }

  export type $campaign_creativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "campaign_creative"
    objects: {
      campaigns: Prisma.$campaignsPayload<ExtArgs>
      creatives: Prisma.$creativesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      campaign_id: string
      creative_id: string
    }, ExtArgs["result"]["campaign_creative"]>
    composites: {}
  }

  type campaign_creativeGetPayload<S extends boolean | null | undefined | campaign_creativeDefaultArgs> = $Result.GetResult<Prisma.$campaign_creativePayload, S>

  type campaign_creativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<campaign_creativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Campaign_creativeCountAggregateInputType | true
    }

  export interface campaign_creativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['campaign_creative'], meta: { name: 'campaign_creative' } }
    /**
     * Find zero or one Campaign_creative that matches the filter.
     * @param {campaign_creativeFindUniqueArgs} args - Arguments to find a Campaign_creative
     * @example
     * // Get one Campaign_creative
     * const campaign_creative = await prisma.campaign_creative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends campaign_creativeFindUniqueArgs>(args: SelectSubset<T, campaign_creativeFindUniqueArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign_creative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {campaign_creativeFindUniqueOrThrowArgs} args - Arguments to find a Campaign_creative
     * @example
     * // Get one Campaign_creative
     * const campaign_creative = await prisma.campaign_creative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends campaign_creativeFindUniqueOrThrowArgs>(args: SelectSubset<T, campaign_creativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign_creative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_creativeFindFirstArgs} args - Arguments to find a Campaign_creative
     * @example
     * // Get one Campaign_creative
     * const campaign_creative = await prisma.campaign_creative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends campaign_creativeFindFirstArgs>(args?: SelectSubset<T, campaign_creativeFindFirstArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign_creative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_creativeFindFirstOrThrowArgs} args - Arguments to find a Campaign_creative
     * @example
     * // Get one Campaign_creative
     * const campaign_creative = await prisma.campaign_creative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends campaign_creativeFindFirstOrThrowArgs>(args?: SelectSubset<T, campaign_creativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaign_creatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_creativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaign_creatives
     * const campaign_creatives = await prisma.campaign_creative.findMany()
     * 
     * // Get first 10 Campaign_creatives
     * const campaign_creatives = await prisma.campaign_creative.findMany({ take: 10 })
     * 
     * // Only select the `campaign_id`
     * const campaign_creativeWithCampaign_idOnly = await prisma.campaign_creative.findMany({ select: { campaign_id: true } })
     * 
     */
    findMany<T extends campaign_creativeFindManyArgs>(args?: SelectSubset<T, campaign_creativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign_creative.
     * @param {campaign_creativeCreateArgs} args - Arguments to create a Campaign_creative.
     * @example
     * // Create one Campaign_creative
     * const Campaign_creative = await prisma.campaign_creative.create({
     *   data: {
     *     // ... data to create a Campaign_creative
     *   }
     * })
     * 
     */
    create<T extends campaign_creativeCreateArgs>(args: SelectSubset<T, campaign_creativeCreateArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaign_creatives.
     * @param {campaign_creativeCreateManyArgs} args - Arguments to create many Campaign_creatives.
     * @example
     * // Create many Campaign_creatives
     * const campaign_creative = await prisma.campaign_creative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends campaign_creativeCreateManyArgs>(args?: SelectSubset<T, campaign_creativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaign_creatives and returns the data saved in the database.
     * @param {campaign_creativeCreateManyAndReturnArgs} args - Arguments to create many Campaign_creatives.
     * @example
     * // Create many Campaign_creatives
     * const campaign_creative = await prisma.campaign_creative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaign_creatives and only return the `campaign_id`
     * const campaign_creativeWithCampaign_idOnly = await prisma.campaign_creative.createManyAndReturn({
     *   select: { campaign_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends campaign_creativeCreateManyAndReturnArgs>(args?: SelectSubset<T, campaign_creativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign_creative.
     * @param {campaign_creativeDeleteArgs} args - Arguments to delete one Campaign_creative.
     * @example
     * // Delete one Campaign_creative
     * const Campaign_creative = await prisma.campaign_creative.delete({
     *   where: {
     *     // ... filter to delete one Campaign_creative
     *   }
     * })
     * 
     */
    delete<T extends campaign_creativeDeleteArgs>(args: SelectSubset<T, campaign_creativeDeleteArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign_creative.
     * @param {campaign_creativeUpdateArgs} args - Arguments to update one Campaign_creative.
     * @example
     * // Update one Campaign_creative
     * const campaign_creative = await prisma.campaign_creative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends campaign_creativeUpdateArgs>(args: SelectSubset<T, campaign_creativeUpdateArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaign_creatives.
     * @param {campaign_creativeDeleteManyArgs} args - Arguments to filter Campaign_creatives to delete.
     * @example
     * // Delete a few Campaign_creatives
     * const { count } = await prisma.campaign_creative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends campaign_creativeDeleteManyArgs>(args?: SelectSubset<T, campaign_creativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaign_creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_creativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaign_creatives
     * const campaign_creative = await prisma.campaign_creative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends campaign_creativeUpdateManyArgs>(args: SelectSubset<T, campaign_creativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaign_creatives and returns the data updated in the database.
     * @param {campaign_creativeUpdateManyAndReturnArgs} args - Arguments to update many Campaign_creatives.
     * @example
     * // Update many Campaign_creatives
     * const campaign_creative = await prisma.campaign_creative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaign_creatives and only return the `campaign_id`
     * const campaign_creativeWithCampaign_idOnly = await prisma.campaign_creative.updateManyAndReturn({
     *   select: { campaign_id: true },
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
    updateManyAndReturn<T extends campaign_creativeUpdateManyAndReturnArgs>(args: SelectSubset<T, campaign_creativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign_creative.
     * @param {campaign_creativeUpsertArgs} args - Arguments to update or create a Campaign_creative.
     * @example
     * // Update or create a Campaign_creative
     * const campaign_creative = await prisma.campaign_creative.upsert({
     *   create: {
     *     // ... data to create a Campaign_creative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign_creative we want to update
     *   }
     * })
     */
    upsert<T extends campaign_creativeUpsertArgs>(args: SelectSubset<T, campaign_creativeUpsertArgs<ExtArgs>>): Prisma__campaign_creativeClient<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaign_creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_creativeCountArgs} args - Arguments to filter Campaign_creatives to count.
     * @example
     * // Count the number of Campaign_creatives
     * const count = await prisma.campaign_creative.count({
     *   where: {
     *     // ... the filter for the Campaign_creatives we want to count
     *   }
     * })
    **/
    count<T extends campaign_creativeCountArgs>(
      args?: Subset<T, campaign_creativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Campaign_creativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign_creative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Campaign_creativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Campaign_creativeAggregateArgs>(args: Subset<T, Campaign_creativeAggregateArgs>): Prisma.PrismaPromise<GetCampaign_creativeAggregateType<T>>

    /**
     * Group by Campaign_creative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaign_creativeGroupByArgs} args - Group by arguments.
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
      T extends campaign_creativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: campaign_creativeGroupByArgs['orderBy'] }
        : { orderBy?: campaign_creativeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, campaign_creativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaign_creativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the campaign_creative model
   */
  readonly fields: campaign_creativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for campaign_creative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__campaign_creativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends campaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, campaignsDefaultArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creatives<T extends creativesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, creativesDefaultArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the campaign_creative model
   */
  interface campaign_creativeFieldRefs {
    readonly campaign_id: FieldRef<"campaign_creative", 'String'>
    readonly creative_id: FieldRef<"campaign_creative", 'String'>
  }
    

  // Custom InputTypes
  /**
   * campaign_creative findUnique
   */
  export type campaign_creativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * Filter, which campaign_creative to fetch.
     */
    where: campaign_creativeWhereUniqueInput
  }

  /**
   * campaign_creative findUniqueOrThrow
   */
  export type campaign_creativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * Filter, which campaign_creative to fetch.
     */
    where: campaign_creativeWhereUniqueInput
  }

  /**
   * campaign_creative findFirst
   */
  export type campaign_creativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * Filter, which campaign_creative to fetch.
     */
    where?: campaign_creativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_creatives to fetch.
     */
    orderBy?: campaign_creativeOrderByWithRelationInput | campaign_creativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaign_creatives.
     */
    cursor?: campaign_creativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaign_creatives.
     */
    distinct?: Campaign_creativeScalarFieldEnum | Campaign_creativeScalarFieldEnum[]
  }

  /**
   * campaign_creative findFirstOrThrow
   */
  export type campaign_creativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * Filter, which campaign_creative to fetch.
     */
    where?: campaign_creativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_creatives to fetch.
     */
    orderBy?: campaign_creativeOrderByWithRelationInput | campaign_creativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaign_creatives.
     */
    cursor?: campaign_creativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaign_creatives.
     */
    distinct?: Campaign_creativeScalarFieldEnum | Campaign_creativeScalarFieldEnum[]
  }

  /**
   * campaign_creative findMany
   */
  export type campaign_creativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * Filter, which campaign_creatives to fetch.
     */
    where?: campaign_creativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaign_creatives to fetch.
     */
    orderBy?: campaign_creativeOrderByWithRelationInput | campaign_creativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing campaign_creatives.
     */
    cursor?: campaign_creativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaign_creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaign_creatives.
     */
    skip?: number
    distinct?: Campaign_creativeScalarFieldEnum | Campaign_creativeScalarFieldEnum[]
  }

  /**
   * campaign_creative create
   */
  export type campaign_creativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * The data needed to create a campaign_creative.
     */
    data: XOR<campaign_creativeCreateInput, campaign_creativeUncheckedCreateInput>
  }

  /**
   * campaign_creative createMany
   */
  export type campaign_creativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many campaign_creatives.
     */
    data: campaign_creativeCreateManyInput | campaign_creativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * campaign_creative createManyAndReturn
   */
  export type campaign_creativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * The data used to create many campaign_creatives.
     */
    data: campaign_creativeCreateManyInput | campaign_creativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * campaign_creative update
   */
  export type campaign_creativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * The data needed to update a campaign_creative.
     */
    data: XOR<campaign_creativeUpdateInput, campaign_creativeUncheckedUpdateInput>
    /**
     * Choose, which campaign_creative to update.
     */
    where: campaign_creativeWhereUniqueInput
  }

  /**
   * campaign_creative updateMany
   */
  export type campaign_creativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update campaign_creatives.
     */
    data: XOR<campaign_creativeUpdateManyMutationInput, campaign_creativeUncheckedUpdateManyInput>
    /**
     * Filter which campaign_creatives to update
     */
    where?: campaign_creativeWhereInput
    /**
     * Limit how many campaign_creatives to update.
     */
    limit?: number
  }

  /**
   * campaign_creative updateManyAndReturn
   */
  export type campaign_creativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * The data used to update campaign_creatives.
     */
    data: XOR<campaign_creativeUpdateManyMutationInput, campaign_creativeUncheckedUpdateManyInput>
    /**
     * Filter which campaign_creatives to update
     */
    where?: campaign_creativeWhereInput
    /**
     * Limit how many campaign_creatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * campaign_creative upsert
   */
  export type campaign_creativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * The filter to search for the campaign_creative to update in case it exists.
     */
    where: campaign_creativeWhereUniqueInput
    /**
     * In case the campaign_creative found by the `where` argument doesn't exist, create a new campaign_creative with this data.
     */
    create: XOR<campaign_creativeCreateInput, campaign_creativeUncheckedCreateInput>
    /**
     * In case the campaign_creative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<campaign_creativeUpdateInput, campaign_creativeUncheckedUpdateInput>
  }

  /**
   * campaign_creative delete
   */
  export type campaign_creativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    /**
     * Filter which campaign_creative to delete.
     */
    where: campaign_creativeWhereUniqueInput
  }

  /**
   * campaign_creative deleteMany
   */
  export type campaign_creativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaign_creatives to delete
     */
    where?: campaign_creativeWhereInput
    /**
     * Limit how many campaign_creatives to delete.
     */
    limit?: number
  }

  /**
   * campaign_creative without action
   */
  export type campaign_creativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
  }


  /**
   * Model campaigns
   */

  export type AggregateCampaigns = {
    _count: CampaignsCountAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  export type CampaignsMinAggregateOutputType = {
    id: string | null
    name: string | null
    start_date: Date | null
    end_date: Date | null
    gender: string | null
  }

  export type CampaignsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    start_date: Date | null
    end_date: Date | null
    gender: string | null
  }

  export type CampaignsCountAggregateOutputType = {
    id: number
    name: number
    start_date: number
    end_date: number
    age_groups: number
    gender: number
    _all: number
  }


  export type CampaignsMinAggregateInputType = {
    id?: true
    name?: true
    start_date?: true
    end_date?: true
    gender?: true
  }

  export type CampaignsMaxAggregateInputType = {
    id?: true
    name?: true
    start_date?: true
    end_date?: true
    gender?: true
  }

  export type CampaignsCountAggregateInputType = {
    id?: true
    name?: true
    start_date?: true
    end_date?: true
    age_groups?: true
    gender?: true
    _all?: true
  }

  export type CampaignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaigns to aggregate.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned campaigns
    **/
    _count?: true | CampaignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignsMaxAggregateInputType
  }

  export type GetCampaignsAggregateType<T extends CampaignsAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaigns[P]>
      : GetScalarType<T[P], AggregateCampaigns[P]>
  }




  export type campaignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: campaignsWhereInput
    orderBy?: campaignsOrderByWithAggregationInput | campaignsOrderByWithAggregationInput[]
    by: CampaignsScalarFieldEnum[] | CampaignsScalarFieldEnum
    having?: campaignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignsCountAggregateInputType | true
    _min?: CampaignsMinAggregateInputType
    _max?: CampaignsMaxAggregateInputType
  }

  export type CampaignsGroupByOutputType = {
    id: string
    name: string
    start_date: Date | null
    end_date: Date | null
    age_groups: string[]
    gender: string | null
    _count: CampaignsCountAggregateOutputType | null
    _min: CampaignsMinAggregateOutputType | null
    _max: CampaignsMaxAggregateOutputType | null
  }

  type GetCampaignsGroupByPayload<T extends campaignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignsGroupByOutputType[P]>
        }
      >
    >


  export type campaignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    age_groups?: boolean
    gender?: boolean
    campaign_creative?: boolean | campaigns$campaign_creativeArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaigns"]>

  export type campaignsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    age_groups?: boolean
    gender?: boolean
  }, ExtArgs["result"]["campaigns"]>

  export type campaignsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    age_groups?: boolean
    gender?: boolean
  }, ExtArgs["result"]["campaigns"]>

  export type campaignsSelectScalar = {
    id?: boolean
    name?: boolean
    start_date?: boolean
    end_date?: boolean
    age_groups?: boolean
    gender?: boolean
  }

  export type campaignsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "start_date" | "end_date" | "age_groups" | "gender", ExtArgs["result"]["campaigns"]>
  export type campaignsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign_creative?: boolean | campaigns$campaign_creativeArgs<ExtArgs>
    _count?: boolean | CampaignsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type campaignsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type campaignsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $campaignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "campaigns"
    objects: {
      campaign_creative: Prisma.$campaign_creativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      start_date: Date | null
      end_date: Date | null
      age_groups: string[]
      gender: string | null
    }, ExtArgs["result"]["campaigns"]>
    composites: {}
  }

  type campaignsGetPayload<S extends boolean | null | undefined | campaignsDefaultArgs> = $Result.GetResult<Prisma.$campaignsPayload, S>

  type campaignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<campaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignsCountAggregateInputType | true
    }

  export interface campaignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['campaigns'], meta: { name: 'campaigns' } }
    /**
     * Find zero or one Campaigns that matches the filter.
     * @param {campaignsFindUniqueArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends campaignsFindUniqueArgs>(args: SelectSubset<T, campaignsFindUniqueArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaigns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {campaignsFindUniqueOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends campaignsFindUniqueOrThrowArgs>(args: SelectSubset<T, campaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindFirstArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends campaignsFindFirstArgs>(args?: SelectSubset<T, campaignsFindFirstArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindFirstOrThrowArgs} args - Arguments to find a Campaigns
     * @example
     * // Get one Campaigns
     * const campaigns = await prisma.campaigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends campaignsFindFirstOrThrowArgs>(args?: SelectSubset<T, campaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaigns.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaigns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends campaignsFindManyArgs>(args?: SelectSubset<T, campaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaigns.
     * @param {campaignsCreateArgs} args - Arguments to create a Campaigns.
     * @example
     * // Create one Campaigns
     * const Campaigns = await prisma.campaigns.create({
     *   data: {
     *     // ... data to create a Campaigns
     *   }
     * })
     * 
     */
    create<T extends campaignsCreateArgs>(args: SelectSubset<T, campaignsCreateArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {campaignsCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends campaignsCreateManyArgs>(args?: SelectSubset<T, campaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {campaignsCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaigns = await prisma.campaigns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends campaignsCreateManyAndReturnArgs>(args?: SelectSubset<T, campaignsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaigns.
     * @param {campaignsDeleteArgs} args - Arguments to delete one Campaigns.
     * @example
     * // Delete one Campaigns
     * const Campaigns = await prisma.campaigns.delete({
     *   where: {
     *     // ... filter to delete one Campaigns
     *   }
     * })
     * 
     */
    delete<T extends campaignsDeleteArgs>(args: SelectSubset<T, campaignsDeleteArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaigns.
     * @param {campaignsUpdateArgs} args - Arguments to update one Campaigns.
     * @example
     * // Update one Campaigns
     * const campaigns = await prisma.campaigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends campaignsUpdateArgs>(args: SelectSubset<T, campaignsUpdateArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {campaignsDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends campaignsDeleteManyArgs>(args?: SelectSubset<T, campaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends campaignsUpdateManyArgs>(args: SelectSubset<T, campaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {campaignsUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaigns = await prisma.campaigns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignsWithIdOnly = await prisma.campaigns.updateManyAndReturn({
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
    updateManyAndReturn<T extends campaignsUpdateManyAndReturnArgs>(args: SelectSubset<T, campaignsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaigns.
     * @param {campaignsUpsertArgs} args - Arguments to update or create a Campaigns.
     * @example
     * // Update or create a Campaigns
     * const campaigns = await prisma.campaigns.upsert({
     *   create: {
     *     // ... data to create a Campaigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaigns we want to update
     *   }
     * })
     */
    upsert<T extends campaignsUpsertArgs>(args: SelectSubset<T, campaignsUpsertArgs<ExtArgs>>): Prisma__campaignsClient<$Result.GetResult<Prisma.$campaignsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaigns.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends campaignsCountArgs>(
      args?: Subset<T, campaignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampaignsAggregateArgs>(args: Subset<T, CampaignsAggregateArgs>): Prisma.PrismaPromise<GetCampaignsAggregateType<T>>

    /**
     * Group by Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {campaignsGroupByArgs} args - Group by arguments.
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
      T extends campaignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: campaignsGroupByArgs['orderBy'] }
        : { orderBy?: campaignsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, campaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the campaigns model
   */
  readonly fields: campaignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for campaigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__campaignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign_creative<T extends campaigns$campaign_creativeArgs<ExtArgs> = {}>(args?: Subset<T, campaigns$campaign_creativeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the campaigns model
   */
  interface campaignsFieldRefs {
    readonly id: FieldRef<"campaigns", 'String'>
    readonly name: FieldRef<"campaigns", 'String'>
    readonly start_date: FieldRef<"campaigns", 'DateTime'>
    readonly end_date: FieldRef<"campaigns", 'DateTime'>
    readonly age_groups: FieldRef<"campaigns", 'String[]'>
    readonly gender: FieldRef<"campaigns", 'String'>
  }
    

  // Custom InputTypes
  /**
   * campaigns findUnique
   */
  export type campaignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns findUniqueOrThrow
   */
  export type campaignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns findFirst
   */
  export type campaignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns findFirstOrThrow
   */
  export type campaignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of campaigns.
     */
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns findMany
   */
  export type campaignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter, which campaigns to fetch.
     */
    where?: campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of campaigns to fetch.
     */
    orderBy?: campaignsOrderByWithRelationInput | campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing campaigns.
     */
    cursor?: campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` campaigns.
     */
    skip?: number
    distinct?: CampaignsScalarFieldEnum | CampaignsScalarFieldEnum[]
  }

  /**
   * campaigns create
   */
  export type campaignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The data needed to create a campaigns.
     */
    data: XOR<campaignsCreateInput, campaignsUncheckedCreateInput>
  }

  /**
   * campaigns createMany
   */
  export type campaignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many campaigns.
     */
    data: campaignsCreateManyInput | campaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * campaigns createManyAndReturn
   */
  export type campaignsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * The data used to create many campaigns.
     */
    data: campaignsCreateManyInput | campaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * campaigns update
   */
  export type campaignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The data needed to update a campaigns.
     */
    data: XOR<campaignsUpdateInput, campaignsUncheckedUpdateInput>
    /**
     * Choose, which campaigns to update.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns updateMany
   */
  export type campaignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update campaigns.
     */
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyInput>
    /**
     * Filter which campaigns to update
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to update.
     */
    limit?: number
  }

  /**
   * campaigns updateManyAndReturn
   */
  export type campaignsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * The data used to update campaigns.
     */
    data: XOR<campaignsUpdateManyMutationInput, campaignsUncheckedUpdateManyInput>
    /**
     * Filter which campaigns to update
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to update.
     */
    limit?: number
  }

  /**
   * campaigns upsert
   */
  export type campaignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * The filter to search for the campaigns to update in case it exists.
     */
    where: campaignsWhereUniqueInput
    /**
     * In case the campaigns found by the `where` argument doesn't exist, create a new campaigns with this data.
     */
    create: XOR<campaignsCreateInput, campaignsUncheckedCreateInput>
    /**
     * In case the campaigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<campaignsUpdateInput, campaignsUncheckedUpdateInput>
  }

  /**
   * campaigns delete
   */
  export type campaignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
    /**
     * Filter which campaigns to delete.
     */
    where: campaignsWhereUniqueInput
  }

  /**
   * campaigns deleteMany
   */
  export type campaignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which campaigns to delete
     */
    where?: campaignsWhereInput
    /**
     * Limit how many campaigns to delete.
     */
    limit?: number
  }

  /**
   * campaigns.campaign_creative
   */
  export type campaigns$campaign_creativeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    where?: campaign_creativeWhereInput
    orderBy?: campaign_creativeOrderByWithRelationInput | campaign_creativeOrderByWithRelationInput[]
    cursor?: campaign_creativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Campaign_creativeScalarFieldEnum | Campaign_creativeScalarFieldEnum[]
  }

  /**
   * campaigns without action
   */
  export type campaignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaigns
     */
    select?: campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaigns
     */
    omit?: campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaignsInclude<ExtArgs> | null
  }


  /**
   * Model creatives
   */

  export type AggregateCreatives = {
    _count: CreativesCountAggregateOutputType | null
    _min: CreativesMinAggregateOutputType | null
    _max: CreativesMaxAggregateOutputType | null
  }

  export type CreativesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type CreativesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
  }

  export type CreativesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type CreativesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type CreativesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type CreativesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type CreativesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which creatives to aggregate.
     */
    where?: creativesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creatives to fetch.
     */
    orderBy?: creativesOrderByWithRelationInput | creativesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: creativesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned creatives
    **/
    _count?: true | CreativesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreativesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreativesMaxAggregateInputType
  }

  export type GetCreativesAggregateType<T extends CreativesAggregateArgs> = {
        [P in keyof T & keyof AggregateCreatives]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreatives[P]>
      : GetScalarType<T[P], AggregateCreatives[P]>
  }




  export type creativesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: creativesWhereInput
    orderBy?: creativesOrderByWithAggregationInput | creativesOrderByWithAggregationInput[]
    by: CreativesScalarFieldEnum[] | CreativesScalarFieldEnum
    having?: creativesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreativesCountAggregateInputType | true
    _min?: CreativesMinAggregateInputType
    _max?: CreativesMaxAggregateInputType
  }

  export type CreativesGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    _count: CreativesCountAggregateOutputType | null
    _min: CreativesMinAggregateOutputType | null
    _max: CreativesMaxAggregateOutputType | null
  }

  type GetCreativesGroupByPayload<T extends creativesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreativesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreativesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreativesGroupByOutputType[P]>
            : GetScalarType<T[P], CreativesGroupByOutputType[P]>
        }
      >
    >


  export type creativesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    campaign_creative?: boolean | creatives$campaign_creativeArgs<ExtArgs>
    _count?: boolean | CreativesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creatives"]>

  export type creativesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["creatives"]>

  export type creativesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["creatives"]>

  export type creativesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type creativesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["creatives"]>
  export type creativesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign_creative?: boolean | creatives$campaign_creativeArgs<ExtArgs>
    _count?: boolean | CreativesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type creativesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type creativesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $creativesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "creatives"
    objects: {
      campaign_creative: Prisma.$campaign_creativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
    }, ExtArgs["result"]["creatives"]>
    composites: {}
  }

  type creativesGetPayload<S extends boolean | null | undefined | creativesDefaultArgs> = $Result.GetResult<Prisma.$creativesPayload, S>

  type creativesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<creativesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CreativesCountAggregateInputType | true
    }

  export interface creativesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['creatives'], meta: { name: 'creatives' } }
    /**
     * Find zero or one Creatives that matches the filter.
     * @param {creativesFindUniqueArgs} args - Arguments to find a Creatives
     * @example
     * // Get one Creatives
     * const creatives = await prisma.creatives.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends creativesFindUniqueArgs>(args: SelectSubset<T, creativesFindUniqueArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Creatives that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {creativesFindUniqueOrThrowArgs} args - Arguments to find a Creatives
     * @example
     * // Get one Creatives
     * const creatives = await prisma.creatives.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends creativesFindUniqueOrThrowArgs>(args: SelectSubset<T, creativesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creativesFindFirstArgs} args - Arguments to find a Creatives
     * @example
     * // Get one Creatives
     * const creatives = await prisma.creatives.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends creativesFindFirstArgs>(args?: SelectSubset<T, creativesFindFirstArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Creatives that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creativesFindFirstOrThrowArgs} args - Arguments to find a Creatives
     * @example
     * // Get one Creatives
     * const creatives = await prisma.creatives.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends creativesFindFirstOrThrowArgs>(args?: SelectSubset<T, creativesFindFirstOrThrowArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Creatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creativesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creatives
     * const creatives = await prisma.creatives.findMany()
     * 
     * // Get first 10 Creatives
     * const creatives = await prisma.creatives.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creativesWithIdOnly = await prisma.creatives.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends creativesFindManyArgs>(args?: SelectSubset<T, creativesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Creatives.
     * @param {creativesCreateArgs} args - Arguments to create a Creatives.
     * @example
     * // Create one Creatives
     * const Creatives = await prisma.creatives.create({
     *   data: {
     *     // ... data to create a Creatives
     *   }
     * })
     * 
     */
    create<T extends creativesCreateArgs>(args: SelectSubset<T, creativesCreateArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Creatives.
     * @param {creativesCreateManyArgs} args - Arguments to create many Creatives.
     * @example
     * // Create many Creatives
     * const creatives = await prisma.creatives.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends creativesCreateManyArgs>(args?: SelectSubset<T, creativesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Creatives and returns the data saved in the database.
     * @param {creativesCreateManyAndReturnArgs} args - Arguments to create many Creatives.
     * @example
     * // Create many Creatives
     * const creatives = await prisma.creatives.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Creatives and only return the `id`
     * const creativesWithIdOnly = await prisma.creatives.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends creativesCreateManyAndReturnArgs>(args?: SelectSubset<T, creativesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Creatives.
     * @param {creativesDeleteArgs} args - Arguments to delete one Creatives.
     * @example
     * // Delete one Creatives
     * const Creatives = await prisma.creatives.delete({
     *   where: {
     *     // ... filter to delete one Creatives
     *   }
     * })
     * 
     */
    delete<T extends creativesDeleteArgs>(args: SelectSubset<T, creativesDeleteArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Creatives.
     * @param {creativesUpdateArgs} args - Arguments to update one Creatives.
     * @example
     * // Update one Creatives
     * const creatives = await prisma.creatives.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends creativesUpdateArgs>(args: SelectSubset<T, creativesUpdateArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Creatives.
     * @param {creativesDeleteManyArgs} args - Arguments to filter Creatives to delete.
     * @example
     * // Delete a few Creatives
     * const { count } = await prisma.creatives.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends creativesDeleteManyArgs>(args?: SelectSubset<T, creativesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creativesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creatives
     * const creatives = await prisma.creatives.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends creativesUpdateManyArgs>(args: SelectSubset<T, creativesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creatives and returns the data updated in the database.
     * @param {creativesUpdateManyAndReturnArgs} args - Arguments to update many Creatives.
     * @example
     * // Update many Creatives
     * const creatives = await prisma.creatives.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Creatives and only return the `id`
     * const creativesWithIdOnly = await prisma.creatives.updateManyAndReturn({
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
    updateManyAndReturn<T extends creativesUpdateManyAndReturnArgs>(args: SelectSubset<T, creativesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Creatives.
     * @param {creativesUpsertArgs} args - Arguments to update or create a Creatives.
     * @example
     * // Update or create a Creatives
     * const creatives = await prisma.creatives.upsert({
     *   create: {
     *     // ... data to create a Creatives
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creatives we want to update
     *   }
     * })
     */
    upsert<T extends creativesUpsertArgs>(args: SelectSubset<T, creativesUpsertArgs<ExtArgs>>): Prisma__creativesClient<$Result.GetResult<Prisma.$creativesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creativesCountArgs} args - Arguments to filter Creatives to count.
     * @example
     * // Count the number of Creatives
     * const count = await prisma.creatives.count({
     *   where: {
     *     // ... the filter for the Creatives we want to count
     *   }
     * })
    **/
    count<T extends creativesCountArgs>(
      args?: Subset<T, creativesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreativesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreativesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreativesAggregateArgs>(args: Subset<T, CreativesAggregateArgs>): Prisma.PrismaPromise<GetCreativesAggregateType<T>>

    /**
     * Group by Creatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creativesGroupByArgs} args - Group by arguments.
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
      T extends creativesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: creativesGroupByArgs['orderBy'] }
        : { orderBy?: creativesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, creativesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreativesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the creatives model
   */
  readonly fields: creativesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for creatives.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__creativesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign_creative<T extends creatives$campaign_creativeArgs<ExtArgs> = {}>(args?: Subset<T, creatives$campaign_creativeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$campaign_creativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the creatives model
   */
  interface creativesFieldRefs {
    readonly id: FieldRef<"creatives", 'String'>
    readonly name: FieldRef<"creatives", 'String'>
    readonly created_at: FieldRef<"creatives", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * creatives findUnique
   */
  export type creativesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * Filter, which creatives to fetch.
     */
    where: creativesWhereUniqueInput
  }

  /**
   * creatives findUniqueOrThrow
   */
  export type creativesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * Filter, which creatives to fetch.
     */
    where: creativesWhereUniqueInput
  }

  /**
   * creatives findFirst
   */
  export type creativesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * Filter, which creatives to fetch.
     */
    where?: creativesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creatives to fetch.
     */
    orderBy?: creativesOrderByWithRelationInput | creativesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for creatives.
     */
    cursor?: creativesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of creatives.
     */
    distinct?: CreativesScalarFieldEnum | CreativesScalarFieldEnum[]
  }

  /**
   * creatives findFirstOrThrow
   */
  export type creativesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * Filter, which creatives to fetch.
     */
    where?: creativesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creatives to fetch.
     */
    orderBy?: creativesOrderByWithRelationInput | creativesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for creatives.
     */
    cursor?: creativesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of creatives.
     */
    distinct?: CreativesScalarFieldEnum | CreativesScalarFieldEnum[]
  }

  /**
   * creatives findMany
   */
  export type creativesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * Filter, which creatives to fetch.
     */
    where?: creativesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creatives to fetch.
     */
    orderBy?: creativesOrderByWithRelationInput | creativesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing creatives.
     */
    cursor?: creativesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creatives.
     */
    skip?: number
    distinct?: CreativesScalarFieldEnum | CreativesScalarFieldEnum[]
  }

  /**
   * creatives create
   */
  export type creativesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * The data needed to create a creatives.
     */
    data: XOR<creativesCreateInput, creativesUncheckedCreateInput>
  }

  /**
   * creatives createMany
   */
  export type creativesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many creatives.
     */
    data: creativesCreateManyInput | creativesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * creatives createManyAndReturn
   */
  export type creativesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * The data used to create many creatives.
     */
    data: creativesCreateManyInput | creativesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * creatives update
   */
  export type creativesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * The data needed to update a creatives.
     */
    data: XOR<creativesUpdateInput, creativesUncheckedUpdateInput>
    /**
     * Choose, which creatives to update.
     */
    where: creativesWhereUniqueInput
  }

  /**
   * creatives updateMany
   */
  export type creativesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update creatives.
     */
    data: XOR<creativesUpdateManyMutationInput, creativesUncheckedUpdateManyInput>
    /**
     * Filter which creatives to update
     */
    where?: creativesWhereInput
    /**
     * Limit how many creatives to update.
     */
    limit?: number
  }

  /**
   * creatives updateManyAndReturn
   */
  export type creativesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * The data used to update creatives.
     */
    data: XOR<creativesUpdateManyMutationInput, creativesUncheckedUpdateManyInput>
    /**
     * Filter which creatives to update
     */
    where?: creativesWhereInput
    /**
     * Limit how many creatives to update.
     */
    limit?: number
  }

  /**
   * creatives upsert
   */
  export type creativesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * The filter to search for the creatives to update in case it exists.
     */
    where: creativesWhereUniqueInput
    /**
     * In case the creatives found by the `where` argument doesn't exist, create a new creatives with this data.
     */
    create: XOR<creativesCreateInput, creativesUncheckedCreateInput>
    /**
     * In case the creatives was found with the provided `where` argument, update it with this data.
     */
    update: XOR<creativesUpdateInput, creativesUncheckedUpdateInput>
  }

  /**
   * creatives delete
   */
  export type creativesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
    /**
     * Filter which creatives to delete.
     */
    where: creativesWhereUniqueInput
  }

  /**
   * creatives deleteMany
   */
  export type creativesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which creatives to delete
     */
    where?: creativesWhereInput
    /**
     * Limit how many creatives to delete.
     */
    limit?: number
  }

  /**
   * creatives.campaign_creative
   */
  export type creatives$campaign_creativeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the campaign_creative
     */
    select?: campaign_creativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the campaign_creative
     */
    omit?: campaign_creativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: campaign_creativeInclude<ExtArgs> | null
    where?: campaign_creativeWhereInput
    orderBy?: campaign_creativeOrderByWithRelationInput | campaign_creativeOrderByWithRelationInput[]
    cursor?: campaign_creativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Campaign_creativeScalarFieldEnum | Campaign_creativeScalarFieldEnum[]
  }

  /**
   * creatives without action
   */
  export type creativesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the creatives
     */
    select?: creativesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the creatives
     */
    omit?: creativesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: creativesInclude<ExtArgs> | null
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


  export const Campaign_creativeScalarFieldEnum: {
    campaign_id: 'campaign_id',
    creative_id: 'creative_id'
  };

  export type Campaign_creativeScalarFieldEnum = (typeof Campaign_creativeScalarFieldEnum)[keyof typeof Campaign_creativeScalarFieldEnum]


  export const CampaignsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    start_date: 'start_date',
    end_date: 'end_date',
    age_groups: 'age_groups',
    gender: 'gender'
  };

  export type CampaignsScalarFieldEnum = (typeof CampaignsScalarFieldEnum)[keyof typeof CampaignsScalarFieldEnum]


  export const CreativesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type CreativesScalarFieldEnum = (typeof CreativesScalarFieldEnum)[keyof typeof CreativesScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type campaign_creativeWhereInput = {
    AND?: campaign_creativeWhereInput | campaign_creativeWhereInput[]
    OR?: campaign_creativeWhereInput[]
    NOT?: campaign_creativeWhereInput | campaign_creativeWhereInput[]
    campaign_id?: UuidFilter<"campaign_creative"> | string
    creative_id?: UuidFilter<"campaign_creative"> | string
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    creatives?: XOR<CreativesScalarRelationFilter, creativesWhereInput>
  }

  export type campaign_creativeOrderByWithRelationInput = {
    campaign_id?: SortOrder
    creative_id?: SortOrder
    campaigns?: campaignsOrderByWithRelationInput
    creatives?: creativesOrderByWithRelationInput
  }

  export type campaign_creativeWhereUniqueInput = Prisma.AtLeast<{
    campaign_id_creative_id?: campaign_creativeCampaign_idCreative_idCompoundUniqueInput
    AND?: campaign_creativeWhereInput | campaign_creativeWhereInput[]
    OR?: campaign_creativeWhereInput[]
    NOT?: campaign_creativeWhereInput | campaign_creativeWhereInput[]
    campaign_id?: UuidFilter<"campaign_creative"> | string
    creative_id?: UuidFilter<"campaign_creative"> | string
    campaigns?: XOR<CampaignsScalarRelationFilter, campaignsWhereInput>
    creatives?: XOR<CreativesScalarRelationFilter, creativesWhereInput>
  }, "campaign_id_creative_id">

  export type campaign_creativeOrderByWithAggregationInput = {
    campaign_id?: SortOrder
    creative_id?: SortOrder
    _count?: campaign_creativeCountOrderByAggregateInput
    _max?: campaign_creativeMaxOrderByAggregateInput
    _min?: campaign_creativeMinOrderByAggregateInput
  }

  export type campaign_creativeScalarWhereWithAggregatesInput = {
    AND?: campaign_creativeScalarWhereWithAggregatesInput | campaign_creativeScalarWhereWithAggregatesInput[]
    OR?: campaign_creativeScalarWhereWithAggregatesInput[]
    NOT?: campaign_creativeScalarWhereWithAggregatesInput | campaign_creativeScalarWhereWithAggregatesInput[]
    campaign_id?: UuidWithAggregatesFilter<"campaign_creative"> | string
    creative_id?: UuidWithAggregatesFilter<"campaign_creative"> | string
  }

  export type campaignsWhereInput = {
    AND?: campaignsWhereInput | campaignsWhereInput[]
    OR?: campaignsWhereInput[]
    NOT?: campaignsWhereInput | campaignsWhereInput[]
    id?: UuidFilter<"campaigns"> | string
    name?: StringFilter<"campaigns"> | string
    start_date?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    end_date?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    age_groups?: StringNullableListFilter<"campaigns">
    gender?: StringNullableFilter<"campaigns"> | string | null
    campaign_creative?: Campaign_creativeListRelationFilter
  }

  export type campaignsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    age_groups?: SortOrder
    gender?: SortOrderInput | SortOrder
    campaign_creative?: campaign_creativeOrderByRelationAggregateInput
  }

  export type campaignsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: campaignsWhereInput | campaignsWhereInput[]
    OR?: campaignsWhereInput[]
    NOT?: campaignsWhereInput | campaignsWhereInput[]
    name?: StringFilter<"campaigns"> | string
    start_date?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    end_date?: DateTimeNullableFilter<"campaigns"> | Date | string | null
    age_groups?: StringNullableListFilter<"campaigns">
    gender?: StringNullableFilter<"campaigns"> | string | null
    campaign_creative?: Campaign_creativeListRelationFilter
  }, "id">

  export type campaignsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    age_groups?: SortOrder
    gender?: SortOrderInput | SortOrder
    _count?: campaignsCountOrderByAggregateInput
    _max?: campaignsMaxOrderByAggregateInput
    _min?: campaignsMinOrderByAggregateInput
  }

  export type campaignsScalarWhereWithAggregatesInput = {
    AND?: campaignsScalarWhereWithAggregatesInput | campaignsScalarWhereWithAggregatesInput[]
    OR?: campaignsScalarWhereWithAggregatesInput[]
    NOT?: campaignsScalarWhereWithAggregatesInput | campaignsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"campaigns"> | string
    name?: StringWithAggregatesFilter<"campaigns"> | string
    start_date?: DateTimeNullableWithAggregatesFilter<"campaigns"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"campaigns"> | Date | string | null
    age_groups?: StringNullableListFilter<"campaigns">
    gender?: StringNullableWithAggregatesFilter<"campaigns"> | string | null
  }

  export type creativesWhereInput = {
    AND?: creativesWhereInput | creativesWhereInput[]
    OR?: creativesWhereInput[]
    NOT?: creativesWhereInput | creativesWhereInput[]
    id?: UuidFilter<"creatives"> | string
    name?: StringFilter<"creatives"> | string
    created_at?: DateTimeNullableFilter<"creatives"> | Date | string | null
    campaign_creative?: Campaign_creativeListRelationFilter
  }

  export type creativesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    campaign_creative?: campaign_creativeOrderByRelationAggregateInput
  }

  export type creativesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: creativesWhereInput | creativesWhereInput[]
    OR?: creativesWhereInput[]
    NOT?: creativesWhereInput | creativesWhereInput[]
    name?: StringFilter<"creatives"> | string
    created_at?: DateTimeNullableFilter<"creatives"> | Date | string | null
    campaign_creative?: Campaign_creativeListRelationFilter
  }, "id">

  export type creativesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: creativesCountOrderByAggregateInput
    _max?: creativesMaxOrderByAggregateInput
    _min?: creativesMinOrderByAggregateInput
  }

  export type creativesScalarWhereWithAggregatesInput = {
    AND?: creativesScalarWhereWithAggregatesInput | creativesScalarWhereWithAggregatesInput[]
    OR?: creativesScalarWhereWithAggregatesInput[]
    NOT?: creativesScalarWhereWithAggregatesInput | creativesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"creatives"> | string
    name?: StringWithAggregatesFilter<"creatives"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"creatives"> | Date | string | null
  }

  export type campaign_creativeCreateInput = {
    campaigns: campaignsCreateNestedOneWithoutCampaign_creativeInput
    creatives: creativesCreateNestedOneWithoutCampaign_creativeInput
  }

  export type campaign_creativeUncheckedCreateInput = {
    campaign_id: string
    creative_id: string
  }

  export type campaign_creativeUpdateInput = {
    campaigns?: campaignsUpdateOneRequiredWithoutCampaign_creativeNestedInput
    creatives?: creativesUpdateOneRequiredWithoutCampaign_creativeNestedInput
  }

  export type campaign_creativeUncheckedUpdateInput = {
    campaign_id?: StringFieldUpdateOperationsInput | string
    creative_id?: StringFieldUpdateOperationsInput | string
  }

  export type campaign_creativeCreateManyInput = {
    campaign_id: string
    creative_id: string
  }

  export type campaign_creativeUpdateManyMutationInput = {

  }

  export type campaign_creativeUncheckedUpdateManyInput = {
    campaign_id?: StringFieldUpdateOperationsInput | string
    creative_id?: StringFieldUpdateOperationsInput | string
  }

  export type campaignsCreateInput = {
    id?: string
    name: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    age_groups?: campaignsCreateage_groupsInput | string[]
    gender?: string | null
    campaign_creative?: campaign_creativeCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUncheckedCreateInput = {
    id?: string
    name: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    age_groups?: campaignsCreateage_groupsInput | string[]
    gender?: string | null
    campaign_creative?: campaign_creativeUncheckedCreateNestedManyWithoutCampaignsInput
  }

  export type campaignsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_groups?: campaignsUpdateage_groupsInput | string[]
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    campaign_creative?: campaign_creativeUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_groups?: campaignsUpdateage_groupsInput | string[]
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    campaign_creative?: campaign_creativeUncheckedUpdateManyWithoutCampaignsNestedInput
  }

  export type campaignsCreateManyInput = {
    id?: string
    name: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    age_groups?: campaignsCreateage_groupsInput | string[]
    gender?: string | null
  }

  export type campaignsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_groups?: campaignsUpdateage_groupsInput | string[]
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type campaignsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_groups?: campaignsUpdateage_groupsInput | string[]
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type creativesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    campaign_creative?: campaign_creativeCreateNestedManyWithoutCreativesInput
  }

  export type creativesUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    campaign_creative?: campaign_creativeUncheckedCreateNestedManyWithoutCreativesInput
  }

  export type creativesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaign_creative?: campaign_creativeUpdateManyWithoutCreativesNestedInput
  }

  export type creativesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    campaign_creative?: campaign_creativeUncheckedUpdateManyWithoutCreativesNestedInput
  }

  export type creativesCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
  }

  export type creativesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type creativesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type CampaignsScalarRelationFilter = {
    is?: campaignsWhereInput
    isNot?: campaignsWhereInput
  }

  export type CreativesScalarRelationFilter = {
    is?: creativesWhereInput
    isNot?: creativesWhereInput
  }

  export type campaign_creativeCampaign_idCreative_idCompoundUniqueInput = {
    campaign_id: string
    creative_id: string
  }

  export type campaign_creativeCountOrderByAggregateInput = {
    campaign_id?: SortOrder
    creative_id?: SortOrder
  }

  export type campaign_creativeMaxOrderByAggregateInput = {
    campaign_id?: SortOrder
    creative_id?: SortOrder
  }

  export type campaign_creativeMinOrderByAggregateInput = {
    campaign_id?: SortOrder
    creative_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type Campaign_creativeListRelationFilter = {
    every?: campaign_creativeWhereInput
    some?: campaign_creativeWhereInput
    none?: campaign_creativeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type campaign_creativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type campaignsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    age_groups?: SortOrder
    gender?: SortOrder
  }

  export type campaignsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    gender?: SortOrder
  }

  export type campaignsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    gender?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type creativesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type creativesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type creativesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type campaignsCreateNestedOneWithoutCampaign_creativeInput = {
    create?: XOR<campaignsCreateWithoutCampaign_creativeInput, campaignsUncheckedCreateWithoutCampaign_creativeInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutCampaign_creativeInput
    connect?: campaignsWhereUniqueInput
  }

  export type creativesCreateNestedOneWithoutCampaign_creativeInput = {
    create?: XOR<creativesCreateWithoutCampaign_creativeInput, creativesUncheckedCreateWithoutCampaign_creativeInput>
    connectOrCreate?: creativesCreateOrConnectWithoutCampaign_creativeInput
    connect?: creativesWhereUniqueInput
  }

  export type campaignsUpdateOneRequiredWithoutCampaign_creativeNestedInput = {
    create?: XOR<campaignsCreateWithoutCampaign_creativeInput, campaignsUncheckedCreateWithoutCampaign_creativeInput>
    connectOrCreate?: campaignsCreateOrConnectWithoutCampaign_creativeInput
    upsert?: campaignsUpsertWithoutCampaign_creativeInput
    connect?: campaignsWhereUniqueInput
    update?: XOR<XOR<campaignsUpdateToOneWithWhereWithoutCampaign_creativeInput, campaignsUpdateWithoutCampaign_creativeInput>, campaignsUncheckedUpdateWithoutCampaign_creativeInput>
  }

  export type creativesUpdateOneRequiredWithoutCampaign_creativeNestedInput = {
    create?: XOR<creativesCreateWithoutCampaign_creativeInput, creativesUncheckedCreateWithoutCampaign_creativeInput>
    connectOrCreate?: creativesCreateOrConnectWithoutCampaign_creativeInput
    upsert?: creativesUpsertWithoutCampaign_creativeInput
    connect?: creativesWhereUniqueInput
    update?: XOR<XOR<creativesUpdateToOneWithWhereWithoutCampaign_creativeInput, creativesUpdateWithoutCampaign_creativeInput>, creativesUncheckedUpdateWithoutCampaign_creativeInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type campaignsCreateage_groupsInput = {
    set: string[]
  }

  export type campaign_creativeCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<campaign_creativeCreateWithoutCampaignsInput, campaign_creativeUncheckedCreateWithoutCampaignsInput> | campaign_creativeCreateWithoutCampaignsInput[] | campaign_creativeUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCampaignsInput | campaign_creativeCreateOrConnectWithoutCampaignsInput[]
    createMany?: campaign_creativeCreateManyCampaignsInputEnvelope
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
  }

  export type campaign_creativeUncheckedCreateNestedManyWithoutCampaignsInput = {
    create?: XOR<campaign_creativeCreateWithoutCampaignsInput, campaign_creativeUncheckedCreateWithoutCampaignsInput> | campaign_creativeCreateWithoutCampaignsInput[] | campaign_creativeUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCampaignsInput | campaign_creativeCreateOrConnectWithoutCampaignsInput[]
    createMany?: campaign_creativeCreateManyCampaignsInputEnvelope
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type campaignsUpdateage_groupsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type campaign_creativeUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<campaign_creativeCreateWithoutCampaignsInput, campaign_creativeUncheckedCreateWithoutCampaignsInput> | campaign_creativeCreateWithoutCampaignsInput[] | campaign_creativeUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCampaignsInput | campaign_creativeCreateOrConnectWithoutCampaignsInput[]
    upsert?: campaign_creativeUpsertWithWhereUniqueWithoutCampaignsInput | campaign_creativeUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: campaign_creativeCreateManyCampaignsInputEnvelope
    set?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    disconnect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    delete?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    update?: campaign_creativeUpdateWithWhereUniqueWithoutCampaignsInput | campaign_creativeUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: campaign_creativeUpdateManyWithWhereWithoutCampaignsInput | campaign_creativeUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: campaign_creativeScalarWhereInput | campaign_creativeScalarWhereInput[]
  }

  export type campaign_creativeUncheckedUpdateManyWithoutCampaignsNestedInput = {
    create?: XOR<campaign_creativeCreateWithoutCampaignsInput, campaign_creativeUncheckedCreateWithoutCampaignsInput> | campaign_creativeCreateWithoutCampaignsInput[] | campaign_creativeUncheckedCreateWithoutCampaignsInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCampaignsInput | campaign_creativeCreateOrConnectWithoutCampaignsInput[]
    upsert?: campaign_creativeUpsertWithWhereUniqueWithoutCampaignsInput | campaign_creativeUpsertWithWhereUniqueWithoutCampaignsInput[]
    createMany?: campaign_creativeCreateManyCampaignsInputEnvelope
    set?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    disconnect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    delete?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    update?: campaign_creativeUpdateWithWhereUniqueWithoutCampaignsInput | campaign_creativeUpdateWithWhereUniqueWithoutCampaignsInput[]
    updateMany?: campaign_creativeUpdateManyWithWhereWithoutCampaignsInput | campaign_creativeUpdateManyWithWhereWithoutCampaignsInput[]
    deleteMany?: campaign_creativeScalarWhereInput | campaign_creativeScalarWhereInput[]
  }

  export type campaign_creativeCreateNestedManyWithoutCreativesInput = {
    create?: XOR<campaign_creativeCreateWithoutCreativesInput, campaign_creativeUncheckedCreateWithoutCreativesInput> | campaign_creativeCreateWithoutCreativesInput[] | campaign_creativeUncheckedCreateWithoutCreativesInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCreativesInput | campaign_creativeCreateOrConnectWithoutCreativesInput[]
    createMany?: campaign_creativeCreateManyCreativesInputEnvelope
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
  }

  export type campaign_creativeUncheckedCreateNestedManyWithoutCreativesInput = {
    create?: XOR<campaign_creativeCreateWithoutCreativesInput, campaign_creativeUncheckedCreateWithoutCreativesInput> | campaign_creativeCreateWithoutCreativesInput[] | campaign_creativeUncheckedCreateWithoutCreativesInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCreativesInput | campaign_creativeCreateOrConnectWithoutCreativesInput[]
    createMany?: campaign_creativeCreateManyCreativesInputEnvelope
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
  }

  export type campaign_creativeUpdateManyWithoutCreativesNestedInput = {
    create?: XOR<campaign_creativeCreateWithoutCreativesInput, campaign_creativeUncheckedCreateWithoutCreativesInput> | campaign_creativeCreateWithoutCreativesInput[] | campaign_creativeUncheckedCreateWithoutCreativesInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCreativesInput | campaign_creativeCreateOrConnectWithoutCreativesInput[]
    upsert?: campaign_creativeUpsertWithWhereUniqueWithoutCreativesInput | campaign_creativeUpsertWithWhereUniqueWithoutCreativesInput[]
    createMany?: campaign_creativeCreateManyCreativesInputEnvelope
    set?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    disconnect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    delete?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    update?: campaign_creativeUpdateWithWhereUniqueWithoutCreativesInput | campaign_creativeUpdateWithWhereUniqueWithoutCreativesInput[]
    updateMany?: campaign_creativeUpdateManyWithWhereWithoutCreativesInput | campaign_creativeUpdateManyWithWhereWithoutCreativesInput[]
    deleteMany?: campaign_creativeScalarWhereInput | campaign_creativeScalarWhereInput[]
  }

  export type campaign_creativeUncheckedUpdateManyWithoutCreativesNestedInput = {
    create?: XOR<campaign_creativeCreateWithoutCreativesInput, campaign_creativeUncheckedCreateWithoutCreativesInput> | campaign_creativeCreateWithoutCreativesInput[] | campaign_creativeUncheckedCreateWithoutCreativesInput[]
    connectOrCreate?: campaign_creativeCreateOrConnectWithoutCreativesInput | campaign_creativeCreateOrConnectWithoutCreativesInput[]
    upsert?: campaign_creativeUpsertWithWhereUniqueWithoutCreativesInput | campaign_creativeUpsertWithWhereUniqueWithoutCreativesInput[]
    createMany?: campaign_creativeCreateManyCreativesInputEnvelope
    set?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    disconnect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    delete?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    connect?: campaign_creativeWhereUniqueInput | campaign_creativeWhereUniqueInput[]
    update?: campaign_creativeUpdateWithWhereUniqueWithoutCreativesInput | campaign_creativeUpdateWithWhereUniqueWithoutCreativesInput[]
    updateMany?: campaign_creativeUpdateManyWithWhereWithoutCreativesInput | campaign_creativeUpdateManyWithWhereWithoutCreativesInput[]
    deleteMany?: campaign_creativeScalarWhereInput | campaign_creativeScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type campaignsCreateWithoutCampaign_creativeInput = {
    id?: string
    name: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    age_groups?: campaignsCreateage_groupsInput | string[]
    gender?: string | null
  }

  export type campaignsUncheckedCreateWithoutCampaign_creativeInput = {
    id?: string
    name: string
    start_date?: Date | string | null
    end_date?: Date | string | null
    age_groups?: campaignsCreateage_groupsInput | string[]
    gender?: string | null
  }

  export type campaignsCreateOrConnectWithoutCampaign_creativeInput = {
    where: campaignsWhereUniqueInput
    create: XOR<campaignsCreateWithoutCampaign_creativeInput, campaignsUncheckedCreateWithoutCampaign_creativeInput>
  }

  export type creativesCreateWithoutCampaign_creativeInput = {
    id?: string
    name: string
    created_at?: Date | string | null
  }

  export type creativesUncheckedCreateWithoutCampaign_creativeInput = {
    id?: string
    name: string
    created_at?: Date | string | null
  }

  export type creativesCreateOrConnectWithoutCampaign_creativeInput = {
    where: creativesWhereUniqueInput
    create: XOR<creativesCreateWithoutCampaign_creativeInput, creativesUncheckedCreateWithoutCampaign_creativeInput>
  }

  export type campaignsUpsertWithoutCampaign_creativeInput = {
    update: XOR<campaignsUpdateWithoutCampaign_creativeInput, campaignsUncheckedUpdateWithoutCampaign_creativeInput>
    create: XOR<campaignsCreateWithoutCampaign_creativeInput, campaignsUncheckedCreateWithoutCampaign_creativeInput>
    where?: campaignsWhereInput
  }

  export type campaignsUpdateToOneWithWhereWithoutCampaign_creativeInput = {
    where?: campaignsWhereInput
    data: XOR<campaignsUpdateWithoutCampaign_creativeInput, campaignsUncheckedUpdateWithoutCampaign_creativeInput>
  }

  export type campaignsUpdateWithoutCampaign_creativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_groups?: campaignsUpdateage_groupsInput | string[]
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type campaignsUncheckedUpdateWithoutCampaign_creativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age_groups?: campaignsUpdateage_groupsInput | string[]
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type creativesUpsertWithoutCampaign_creativeInput = {
    update: XOR<creativesUpdateWithoutCampaign_creativeInput, creativesUncheckedUpdateWithoutCampaign_creativeInput>
    create: XOR<creativesCreateWithoutCampaign_creativeInput, creativesUncheckedCreateWithoutCampaign_creativeInput>
    where?: creativesWhereInput
  }

  export type creativesUpdateToOneWithWhereWithoutCampaign_creativeInput = {
    where?: creativesWhereInput
    data: XOR<creativesUpdateWithoutCampaign_creativeInput, creativesUncheckedUpdateWithoutCampaign_creativeInput>
  }

  export type creativesUpdateWithoutCampaign_creativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type creativesUncheckedUpdateWithoutCampaign_creativeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type campaign_creativeCreateWithoutCampaignsInput = {
    creatives: creativesCreateNestedOneWithoutCampaign_creativeInput
  }

  export type campaign_creativeUncheckedCreateWithoutCampaignsInput = {
    creative_id: string
  }

  export type campaign_creativeCreateOrConnectWithoutCampaignsInput = {
    where: campaign_creativeWhereUniqueInput
    create: XOR<campaign_creativeCreateWithoutCampaignsInput, campaign_creativeUncheckedCreateWithoutCampaignsInput>
  }

  export type campaign_creativeCreateManyCampaignsInputEnvelope = {
    data: campaign_creativeCreateManyCampaignsInput | campaign_creativeCreateManyCampaignsInput[]
    skipDuplicates?: boolean
  }

  export type campaign_creativeUpsertWithWhereUniqueWithoutCampaignsInput = {
    where: campaign_creativeWhereUniqueInput
    update: XOR<campaign_creativeUpdateWithoutCampaignsInput, campaign_creativeUncheckedUpdateWithoutCampaignsInput>
    create: XOR<campaign_creativeCreateWithoutCampaignsInput, campaign_creativeUncheckedCreateWithoutCampaignsInput>
  }

  export type campaign_creativeUpdateWithWhereUniqueWithoutCampaignsInput = {
    where: campaign_creativeWhereUniqueInput
    data: XOR<campaign_creativeUpdateWithoutCampaignsInput, campaign_creativeUncheckedUpdateWithoutCampaignsInput>
  }

  export type campaign_creativeUpdateManyWithWhereWithoutCampaignsInput = {
    where: campaign_creativeScalarWhereInput
    data: XOR<campaign_creativeUpdateManyMutationInput, campaign_creativeUncheckedUpdateManyWithoutCampaignsInput>
  }

  export type campaign_creativeScalarWhereInput = {
    AND?: campaign_creativeScalarWhereInput | campaign_creativeScalarWhereInput[]
    OR?: campaign_creativeScalarWhereInput[]
    NOT?: campaign_creativeScalarWhereInput | campaign_creativeScalarWhereInput[]
    campaign_id?: UuidFilter<"campaign_creative"> | string
    creative_id?: UuidFilter<"campaign_creative"> | string
  }

  export type campaign_creativeCreateWithoutCreativesInput = {
    campaigns: campaignsCreateNestedOneWithoutCampaign_creativeInput
  }

  export type campaign_creativeUncheckedCreateWithoutCreativesInput = {
    campaign_id: string
  }

  export type campaign_creativeCreateOrConnectWithoutCreativesInput = {
    where: campaign_creativeWhereUniqueInput
    create: XOR<campaign_creativeCreateWithoutCreativesInput, campaign_creativeUncheckedCreateWithoutCreativesInput>
  }

  export type campaign_creativeCreateManyCreativesInputEnvelope = {
    data: campaign_creativeCreateManyCreativesInput | campaign_creativeCreateManyCreativesInput[]
    skipDuplicates?: boolean
  }

  export type campaign_creativeUpsertWithWhereUniqueWithoutCreativesInput = {
    where: campaign_creativeWhereUniqueInput
    update: XOR<campaign_creativeUpdateWithoutCreativesInput, campaign_creativeUncheckedUpdateWithoutCreativesInput>
    create: XOR<campaign_creativeCreateWithoutCreativesInput, campaign_creativeUncheckedCreateWithoutCreativesInput>
  }

  export type campaign_creativeUpdateWithWhereUniqueWithoutCreativesInput = {
    where: campaign_creativeWhereUniqueInput
    data: XOR<campaign_creativeUpdateWithoutCreativesInput, campaign_creativeUncheckedUpdateWithoutCreativesInput>
  }

  export type campaign_creativeUpdateManyWithWhereWithoutCreativesInput = {
    where: campaign_creativeScalarWhereInput
    data: XOR<campaign_creativeUpdateManyMutationInput, campaign_creativeUncheckedUpdateManyWithoutCreativesInput>
  }

  export type campaign_creativeCreateManyCampaignsInput = {
    creative_id: string
  }

  export type campaign_creativeUpdateWithoutCampaignsInput = {
    creatives?: creativesUpdateOneRequiredWithoutCampaign_creativeNestedInput
  }

  export type campaign_creativeUncheckedUpdateWithoutCampaignsInput = {
    creative_id?: StringFieldUpdateOperationsInput | string
  }

  export type campaign_creativeUncheckedUpdateManyWithoutCampaignsInput = {
    creative_id?: StringFieldUpdateOperationsInput | string
  }

  export type campaign_creativeCreateManyCreativesInput = {
    campaign_id: string
  }

  export type campaign_creativeUpdateWithoutCreativesInput = {
    campaigns?: campaignsUpdateOneRequiredWithoutCampaign_creativeNestedInput
  }

  export type campaign_creativeUncheckedUpdateWithoutCreativesInput = {
    campaign_id?: StringFieldUpdateOperationsInput | string
  }

  export type campaign_creativeUncheckedUpdateManyWithoutCreativesInput = {
    campaign_id?: StringFieldUpdateOperationsInput | string
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