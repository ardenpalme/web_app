
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
 * Model ad_campaigns
 * 
 */
export type ad_campaigns = $Result.DefaultSelection<Prisma.$ad_campaignsPayload>
/**
 * Model dooh_detection
 * 
 */
export type dooh_detection = $Result.DefaultSelection<Prisma.$dooh_detectionPayload>
/**
 * Model pos_purchase
 * 
 */
export type pos_purchase = $Result.DefaultSelection<Prisma.$pos_purchasePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ad_campaigns
 * const ad_campaigns = await prisma.ad_campaigns.findMany()
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
   * // Fetch zero or more Ad_campaigns
   * const ad_campaigns = await prisma.ad_campaigns.findMany()
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
   * `prisma.ad_campaigns`: Exposes CRUD operations for the **ad_campaigns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ad_campaigns
    * const ad_campaigns = await prisma.ad_campaigns.findMany()
    * ```
    */
  get ad_campaigns(): Prisma.ad_campaignsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dooh_detection`: Exposes CRUD operations for the **dooh_detection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dooh_detections
    * const dooh_detections = await prisma.dooh_detection.findMany()
    * ```
    */
  get dooh_detection(): Prisma.dooh_detectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pos_purchase`: Exposes CRUD operations for the **pos_purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pos_purchases
    * const pos_purchases = await prisma.pos_purchase.findMany()
    * ```
    */
  get pos_purchase(): Prisma.pos_purchaseDelegate<ExtArgs, ClientOptions>;
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
    ad_campaigns: 'ad_campaigns',
    dooh_detection: 'dooh_detection',
    pos_purchase: 'pos_purchase'
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
      modelProps: "ad_campaigns" | "dooh_detection" | "pos_purchase"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ad_campaigns: {
        payload: Prisma.$ad_campaignsPayload<ExtArgs>
        fields: Prisma.ad_campaignsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ad_campaignsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ad_campaignsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>
          }
          findFirst: {
            args: Prisma.ad_campaignsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ad_campaignsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>
          }
          findMany: {
            args: Prisma.ad_campaignsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>[]
          }
          create: {
            args: Prisma.ad_campaignsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>
          }
          createMany: {
            args: Prisma.ad_campaignsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ad_campaignsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>[]
          }
          delete: {
            args: Prisma.ad_campaignsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>
          }
          update: {
            args: Prisma.ad_campaignsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>
          }
          deleteMany: {
            args: Prisma.ad_campaignsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ad_campaignsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ad_campaignsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>[]
          }
          upsert: {
            args: Prisma.ad_campaignsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ad_campaignsPayload>
          }
          aggregate: {
            args: Prisma.Ad_campaignsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAd_campaigns>
          }
          groupBy: {
            args: Prisma.ad_campaignsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ad_campaignsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ad_campaignsCountArgs<ExtArgs>
            result: $Utils.Optional<Ad_campaignsCountAggregateOutputType> | number
          }
        }
      }
      dooh_detection: {
        payload: Prisma.$dooh_detectionPayload<ExtArgs>
        fields: Prisma.dooh_detectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dooh_detectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dooh_detectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>
          }
          findFirst: {
            args: Prisma.dooh_detectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dooh_detectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>
          }
          findMany: {
            args: Prisma.dooh_detectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>[]
          }
          create: {
            args: Prisma.dooh_detectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>
          }
          createMany: {
            args: Prisma.dooh_detectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dooh_detectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>[]
          }
          delete: {
            args: Prisma.dooh_detectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>
          }
          update: {
            args: Prisma.dooh_detectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>
          }
          deleteMany: {
            args: Prisma.dooh_detectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dooh_detectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.dooh_detectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>[]
          }
          upsert: {
            args: Prisma.dooh_detectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dooh_detectionPayload>
          }
          aggregate: {
            args: Prisma.Dooh_detectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDooh_detection>
          }
          groupBy: {
            args: Prisma.dooh_detectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Dooh_detectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.dooh_detectionCountArgs<ExtArgs>
            result: $Utils.Optional<Dooh_detectionCountAggregateOutputType> | number
          }
        }
      }
      pos_purchase: {
        payload: Prisma.$pos_purchasePayload<ExtArgs>
        fields: Prisma.pos_purchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pos_purchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pos_purchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>
          }
          findFirst: {
            args: Prisma.pos_purchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pos_purchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>
          }
          findMany: {
            args: Prisma.pos_purchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>[]
          }
          create: {
            args: Prisma.pos_purchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>
          }
          createMany: {
            args: Prisma.pos_purchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pos_purchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>[]
          }
          delete: {
            args: Prisma.pos_purchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>
          }
          update: {
            args: Prisma.pos_purchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>
          }
          deleteMany: {
            args: Prisma.pos_purchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pos_purchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pos_purchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>[]
          }
          upsert: {
            args: Prisma.pos_purchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pos_purchasePayload>
          }
          aggregate: {
            args: Prisma.Pos_purchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePos_purchase>
          }
          groupBy: {
            args: Prisma.pos_purchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Pos_purchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.pos_purchaseCountArgs<ExtArgs>
            result: $Utils.Optional<Pos_purchaseCountAggregateOutputType> | number
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
    ad_campaigns?: ad_campaignsOmit
    dooh_detection?: dooh_detectionOmit
    pos_purchase?: pos_purchaseOmit
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
   * Count Type Ad_campaignsCountOutputType
   */

  export type Ad_campaignsCountOutputType = {
    detections: number
  }

  export type Ad_campaignsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detections?: boolean | Ad_campaignsCountOutputTypeCountDetectionsArgs
  }

  // Custom InputTypes
  /**
   * Ad_campaignsCountOutputType without action
   */
  export type Ad_campaignsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ad_campaignsCountOutputType
     */
    select?: Ad_campaignsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Ad_campaignsCountOutputType without action
   */
  export type Ad_campaignsCountOutputTypeCountDetectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dooh_detectionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ad_campaigns
   */

  export type AggregateAd_campaigns = {
    _count: Ad_campaignsCountAggregateOutputType | null
    _min: Ad_campaignsMinAggregateOutputType | null
    _max: Ad_campaignsMaxAggregateOutputType | null
  }

  export type Ad_campaignsMinAggregateOutputType = {
    ad_id: string | null
    name: string | null
    category: string | null
  }

  export type Ad_campaignsMaxAggregateOutputType = {
    ad_id: string | null
    name: string | null
    category: string | null
  }

  export type Ad_campaignsCountAggregateOutputType = {
    ad_id: number
    name: number
    category: number
    _all: number
  }


  export type Ad_campaignsMinAggregateInputType = {
    ad_id?: true
    name?: true
    category?: true
  }

  export type Ad_campaignsMaxAggregateInputType = {
    ad_id?: true
    name?: true
    category?: true
  }

  export type Ad_campaignsCountAggregateInputType = {
    ad_id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type Ad_campaignsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ad_campaigns to aggregate.
     */
    where?: ad_campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ad_campaigns to fetch.
     */
    orderBy?: ad_campaignsOrderByWithRelationInput | ad_campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ad_campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ad_campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ad_campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ad_campaigns
    **/
    _count?: true | Ad_campaignsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ad_campaignsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ad_campaignsMaxAggregateInputType
  }

  export type GetAd_campaignsAggregateType<T extends Ad_campaignsAggregateArgs> = {
        [P in keyof T & keyof AggregateAd_campaigns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd_campaigns[P]>
      : GetScalarType<T[P], AggregateAd_campaigns[P]>
  }




  export type ad_campaignsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ad_campaignsWhereInput
    orderBy?: ad_campaignsOrderByWithAggregationInput | ad_campaignsOrderByWithAggregationInput[]
    by: Ad_campaignsScalarFieldEnum[] | Ad_campaignsScalarFieldEnum
    having?: ad_campaignsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ad_campaignsCountAggregateInputType | true
    _min?: Ad_campaignsMinAggregateInputType
    _max?: Ad_campaignsMaxAggregateInputType
  }

  export type Ad_campaignsGroupByOutputType = {
    ad_id: string
    name: string
    category: string
    _count: Ad_campaignsCountAggregateOutputType | null
    _min: Ad_campaignsMinAggregateOutputType | null
    _max: Ad_campaignsMaxAggregateOutputType | null
  }

  type GetAd_campaignsGroupByPayload<T extends ad_campaignsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ad_campaignsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ad_campaignsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ad_campaignsGroupByOutputType[P]>
            : GetScalarType<T[P], Ad_campaignsGroupByOutputType[P]>
        }
      >
    >


  export type ad_campaignsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ad_id?: boolean
    name?: boolean
    category?: boolean
    detections?: boolean | ad_campaigns$detectionsArgs<ExtArgs>
    _count?: boolean | Ad_campaignsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ad_campaigns"]>

  export type ad_campaignsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ad_id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["ad_campaigns"]>

  export type ad_campaignsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ad_id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["ad_campaigns"]>

  export type ad_campaignsSelectScalar = {
    ad_id?: boolean
    name?: boolean
    category?: boolean
  }

  export type ad_campaignsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ad_id" | "name" | "category", ExtArgs["result"]["ad_campaigns"]>
  export type ad_campaignsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detections?: boolean | ad_campaigns$detectionsArgs<ExtArgs>
    _count?: boolean | Ad_campaignsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ad_campaignsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ad_campaignsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ad_campaignsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ad_campaigns"
    objects: {
      detections: Prisma.$dooh_detectionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ad_id: string
      name: string
      category: string
    }, ExtArgs["result"]["ad_campaigns"]>
    composites: {}
  }

  type ad_campaignsGetPayload<S extends boolean | null | undefined | ad_campaignsDefaultArgs> = $Result.GetResult<Prisma.$ad_campaignsPayload, S>

  type ad_campaignsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ad_campaignsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ad_campaignsCountAggregateInputType | true
    }

  export interface ad_campaignsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ad_campaigns'], meta: { name: 'ad_campaigns' } }
    /**
     * Find zero or one Ad_campaigns that matches the filter.
     * @param {ad_campaignsFindUniqueArgs} args - Arguments to find a Ad_campaigns
     * @example
     * // Get one Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ad_campaignsFindUniqueArgs>(args: SelectSubset<T, ad_campaignsFindUniqueArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ad_campaigns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ad_campaignsFindUniqueOrThrowArgs} args - Arguments to find a Ad_campaigns
     * @example
     * // Get one Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ad_campaignsFindUniqueOrThrowArgs>(args: SelectSubset<T, ad_campaignsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad_campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_campaignsFindFirstArgs} args - Arguments to find a Ad_campaigns
     * @example
     * // Get one Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ad_campaignsFindFirstArgs>(args?: SelectSubset<T, ad_campaignsFindFirstArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ad_campaigns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_campaignsFindFirstOrThrowArgs} args - Arguments to find a Ad_campaigns
     * @example
     * // Get one Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ad_campaignsFindFirstOrThrowArgs>(args?: SelectSubset<T, ad_campaignsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ad_campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_campaignsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.findMany()
     * 
     * // Get first 10 Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.findMany({ take: 10 })
     * 
     * // Only select the `ad_id`
     * const ad_campaignsWithAd_idOnly = await prisma.ad_campaigns.findMany({ select: { ad_id: true } })
     * 
     */
    findMany<T extends ad_campaignsFindManyArgs>(args?: SelectSubset<T, ad_campaignsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ad_campaigns.
     * @param {ad_campaignsCreateArgs} args - Arguments to create a Ad_campaigns.
     * @example
     * // Create one Ad_campaigns
     * const Ad_campaigns = await prisma.ad_campaigns.create({
     *   data: {
     *     // ... data to create a Ad_campaigns
     *   }
     * })
     * 
     */
    create<T extends ad_campaignsCreateArgs>(args: SelectSubset<T, ad_campaignsCreateArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ad_campaigns.
     * @param {ad_campaignsCreateManyArgs} args - Arguments to create many Ad_campaigns.
     * @example
     * // Create many Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ad_campaignsCreateManyArgs>(args?: SelectSubset<T, ad_campaignsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ad_campaigns and returns the data saved in the database.
     * @param {ad_campaignsCreateManyAndReturnArgs} args - Arguments to create many Ad_campaigns.
     * @example
     * // Create many Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ad_campaigns and only return the `ad_id`
     * const ad_campaignsWithAd_idOnly = await prisma.ad_campaigns.createManyAndReturn({
     *   select: { ad_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ad_campaignsCreateManyAndReturnArgs>(args?: SelectSubset<T, ad_campaignsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ad_campaigns.
     * @param {ad_campaignsDeleteArgs} args - Arguments to delete one Ad_campaigns.
     * @example
     * // Delete one Ad_campaigns
     * const Ad_campaigns = await prisma.ad_campaigns.delete({
     *   where: {
     *     // ... filter to delete one Ad_campaigns
     *   }
     * })
     * 
     */
    delete<T extends ad_campaignsDeleteArgs>(args: SelectSubset<T, ad_campaignsDeleteArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ad_campaigns.
     * @param {ad_campaignsUpdateArgs} args - Arguments to update one Ad_campaigns.
     * @example
     * // Update one Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ad_campaignsUpdateArgs>(args: SelectSubset<T, ad_campaignsUpdateArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ad_campaigns.
     * @param {ad_campaignsDeleteManyArgs} args - Arguments to filter Ad_campaigns to delete.
     * @example
     * // Delete a few Ad_campaigns
     * const { count } = await prisma.ad_campaigns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ad_campaignsDeleteManyArgs>(args?: SelectSubset<T, ad_campaignsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ad_campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_campaignsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ad_campaignsUpdateManyArgs>(args: SelectSubset<T, ad_campaignsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ad_campaigns and returns the data updated in the database.
     * @param {ad_campaignsUpdateManyAndReturnArgs} args - Arguments to update many Ad_campaigns.
     * @example
     * // Update many Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ad_campaigns and only return the `ad_id`
     * const ad_campaignsWithAd_idOnly = await prisma.ad_campaigns.updateManyAndReturn({
     *   select: { ad_id: true },
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
    updateManyAndReturn<T extends ad_campaignsUpdateManyAndReturnArgs>(args: SelectSubset<T, ad_campaignsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ad_campaigns.
     * @param {ad_campaignsUpsertArgs} args - Arguments to update or create a Ad_campaigns.
     * @example
     * // Update or create a Ad_campaigns
     * const ad_campaigns = await prisma.ad_campaigns.upsert({
     *   create: {
     *     // ... data to create a Ad_campaigns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad_campaigns we want to update
     *   }
     * })
     */
    upsert<T extends ad_campaignsUpsertArgs>(args: SelectSubset<T, ad_campaignsUpsertArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ad_campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_campaignsCountArgs} args - Arguments to filter Ad_campaigns to count.
     * @example
     * // Count the number of Ad_campaigns
     * const count = await prisma.ad_campaigns.count({
     *   where: {
     *     // ... the filter for the Ad_campaigns we want to count
     *   }
     * })
    **/
    count<T extends ad_campaignsCountArgs>(
      args?: Subset<T, ad_campaignsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ad_campaignsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ad_campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ad_campaignsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ad_campaignsAggregateArgs>(args: Subset<T, Ad_campaignsAggregateArgs>): Prisma.PrismaPromise<GetAd_campaignsAggregateType<T>>

    /**
     * Group by Ad_campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ad_campaignsGroupByArgs} args - Group by arguments.
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
      T extends ad_campaignsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ad_campaignsGroupByArgs['orderBy'] }
        : { orderBy?: ad_campaignsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ad_campaignsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAd_campaignsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ad_campaigns model
   */
  readonly fields: ad_campaignsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ad_campaigns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ad_campaignsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detections<T extends ad_campaigns$detectionsArgs<ExtArgs> = {}>(args?: Subset<T, ad_campaigns$detectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ad_campaigns model
   */
  interface ad_campaignsFieldRefs {
    readonly ad_id: FieldRef<"ad_campaigns", 'String'>
    readonly name: FieldRef<"ad_campaigns", 'String'>
    readonly category: FieldRef<"ad_campaigns", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ad_campaigns findUnique
   */
  export type ad_campaignsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * Filter, which ad_campaigns to fetch.
     */
    where: ad_campaignsWhereUniqueInput
  }

  /**
   * ad_campaigns findUniqueOrThrow
   */
  export type ad_campaignsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * Filter, which ad_campaigns to fetch.
     */
    where: ad_campaignsWhereUniqueInput
  }

  /**
   * ad_campaigns findFirst
   */
  export type ad_campaignsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * Filter, which ad_campaigns to fetch.
     */
    where?: ad_campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ad_campaigns to fetch.
     */
    orderBy?: ad_campaignsOrderByWithRelationInput | ad_campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ad_campaigns.
     */
    cursor?: ad_campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ad_campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ad_campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ad_campaigns.
     */
    distinct?: Ad_campaignsScalarFieldEnum | Ad_campaignsScalarFieldEnum[]
  }

  /**
   * ad_campaigns findFirstOrThrow
   */
  export type ad_campaignsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * Filter, which ad_campaigns to fetch.
     */
    where?: ad_campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ad_campaigns to fetch.
     */
    orderBy?: ad_campaignsOrderByWithRelationInput | ad_campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ad_campaigns.
     */
    cursor?: ad_campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ad_campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ad_campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ad_campaigns.
     */
    distinct?: Ad_campaignsScalarFieldEnum | Ad_campaignsScalarFieldEnum[]
  }

  /**
   * ad_campaigns findMany
   */
  export type ad_campaignsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * Filter, which ad_campaigns to fetch.
     */
    where?: ad_campaignsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ad_campaigns to fetch.
     */
    orderBy?: ad_campaignsOrderByWithRelationInput | ad_campaignsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ad_campaigns.
     */
    cursor?: ad_campaignsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ad_campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ad_campaigns.
     */
    skip?: number
    distinct?: Ad_campaignsScalarFieldEnum | Ad_campaignsScalarFieldEnum[]
  }

  /**
   * ad_campaigns create
   */
  export type ad_campaignsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * The data needed to create a ad_campaigns.
     */
    data: XOR<ad_campaignsCreateInput, ad_campaignsUncheckedCreateInput>
  }

  /**
   * ad_campaigns createMany
   */
  export type ad_campaignsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ad_campaigns.
     */
    data: ad_campaignsCreateManyInput | ad_campaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ad_campaigns createManyAndReturn
   */
  export type ad_campaignsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * The data used to create many ad_campaigns.
     */
    data: ad_campaignsCreateManyInput | ad_campaignsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ad_campaigns update
   */
  export type ad_campaignsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * The data needed to update a ad_campaigns.
     */
    data: XOR<ad_campaignsUpdateInput, ad_campaignsUncheckedUpdateInput>
    /**
     * Choose, which ad_campaigns to update.
     */
    where: ad_campaignsWhereUniqueInput
  }

  /**
   * ad_campaigns updateMany
   */
  export type ad_campaignsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ad_campaigns.
     */
    data: XOR<ad_campaignsUpdateManyMutationInput, ad_campaignsUncheckedUpdateManyInput>
    /**
     * Filter which ad_campaigns to update
     */
    where?: ad_campaignsWhereInput
    /**
     * Limit how many ad_campaigns to update.
     */
    limit?: number
  }

  /**
   * ad_campaigns updateManyAndReturn
   */
  export type ad_campaignsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * The data used to update ad_campaigns.
     */
    data: XOR<ad_campaignsUpdateManyMutationInput, ad_campaignsUncheckedUpdateManyInput>
    /**
     * Filter which ad_campaigns to update
     */
    where?: ad_campaignsWhereInput
    /**
     * Limit how many ad_campaigns to update.
     */
    limit?: number
  }

  /**
   * ad_campaigns upsert
   */
  export type ad_campaignsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * The filter to search for the ad_campaigns to update in case it exists.
     */
    where: ad_campaignsWhereUniqueInput
    /**
     * In case the ad_campaigns found by the `where` argument doesn't exist, create a new ad_campaigns with this data.
     */
    create: XOR<ad_campaignsCreateInput, ad_campaignsUncheckedCreateInput>
    /**
     * In case the ad_campaigns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ad_campaignsUpdateInput, ad_campaignsUncheckedUpdateInput>
  }

  /**
   * ad_campaigns delete
   */
  export type ad_campaignsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
    /**
     * Filter which ad_campaigns to delete.
     */
    where: ad_campaignsWhereUniqueInput
  }

  /**
   * ad_campaigns deleteMany
   */
  export type ad_campaignsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ad_campaigns to delete
     */
    where?: ad_campaignsWhereInput
    /**
     * Limit how many ad_campaigns to delete.
     */
    limit?: number
  }

  /**
   * ad_campaigns.detections
   */
  export type ad_campaigns$detectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    where?: dooh_detectionWhereInput
    orderBy?: dooh_detectionOrderByWithRelationInput | dooh_detectionOrderByWithRelationInput[]
    cursor?: dooh_detectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Dooh_detectionScalarFieldEnum | Dooh_detectionScalarFieldEnum[]
  }

  /**
   * ad_campaigns without action
   */
  export type ad_campaignsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ad_campaigns
     */
    select?: ad_campaignsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ad_campaigns
     */
    omit?: ad_campaignsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ad_campaignsInclude<ExtArgs> | null
  }


  /**
   * Model dooh_detection
   */

  export type AggregateDooh_detection = {
    _count: Dooh_detectionCountAggregateOutputType | null
    _avg: Dooh_detectionAvgAggregateOutputType | null
    _sum: Dooh_detectionSumAggregateOutputType | null
    _min: Dooh_detectionMinAggregateOutputType | null
    _max: Dooh_detectionMaxAggregateOutputType | null
  }

  export type Dooh_detectionAvgAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type Dooh_detectionSumAggregateOutputType = {
    id: number | null
    age: number | null
  }

  export type Dooh_detectionMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    bluetooth_id_hash: string | null
    ad_id: string | null
    age: number | null
    race: string | null
    gender: string | null
  }

  export type Dooh_detectionMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    bluetooth_id_hash: string | null
    ad_id: string | null
    age: number | null
    race: string | null
    gender: string | null
  }

  export type Dooh_detectionCountAggregateOutputType = {
    id: number
    timestamp: number
    bluetooth_id_hash: number
    ad_id: number
    age: number
    race: number
    gender: number
    _all: number
  }


  export type Dooh_detectionAvgAggregateInputType = {
    id?: true
    age?: true
  }

  export type Dooh_detectionSumAggregateInputType = {
    id?: true
    age?: true
  }

  export type Dooh_detectionMinAggregateInputType = {
    id?: true
    timestamp?: true
    bluetooth_id_hash?: true
    ad_id?: true
    age?: true
    race?: true
    gender?: true
  }

  export type Dooh_detectionMaxAggregateInputType = {
    id?: true
    timestamp?: true
    bluetooth_id_hash?: true
    ad_id?: true
    age?: true
    race?: true
    gender?: true
  }

  export type Dooh_detectionCountAggregateInputType = {
    id?: true
    timestamp?: true
    bluetooth_id_hash?: true
    ad_id?: true
    age?: true
    race?: true
    gender?: true
    _all?: true
  }

  export type Dooh_detectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dooh_detection to aggregate.
     */
    where?: dooh_detectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dooh_detections to fetch.
     */
    orderBy?: dooh_detectionOrderByWithRelationInput | dooh_detectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dooh_detectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dooh_detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dooh_detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dooh_detections
    **/
    _count?: true | Dooh_detectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Dooh_detectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Dooh_detectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Dooh_detectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Dooh_detectionMaxAggregateInputType
  }

  export type GetDooh_detectionAggregateType<T extends Dooh_detectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDooh_detection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDooh_detection[P]>
      : GetScalarType<T[P], AggregateDooh_detection[P]>
  }




  export type dooh_detectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dooh_detectionWhereInput
    orderBy?: dooh_detectionOrderByWithAggregationInput | dooh_detectionOrderByWithAggregationInput[]
    by: Dooh_detectionScalarFieldEnum[] | Dooh_detectionScalarFieldEnum
    having?: dooh_detectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Dooh_detectionCountAggregateInputType | true
    _avg?: Dooh_detectionAvgAggregateInputType
    _sum?: Dooh_detectionSumAggregateInputType
    _min?: Dooh_detectionMinAggregateInputType
    _max?: Dooh_detectionMaxAggregateInputType
  }

  export type Dooh_detectionGroupByOutputType = {
    id: number
    timestamp: Date
    bluetooth_id_hash: string
    ad_id: string
    age: number
    race: string
    gender: string
    _count: Dooh_detectionCountAggregateOutputType | null
    _avg: Dooh_detectionAvgAggregateOutputType | null
    _sum: Dooh_detectionSumAggregateOutputType | null
    _min: Dooh_detectionMinAggregateOutputType | null
    _max: Dooh_detectionMaxAggregateOutputType | null
  }

  type GetDooh_detectionGroupByPayload<T extends dooh_detectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Dooh_detectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Dooh_detectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Dooh_detectionGroupByOutputType[P]>
            : GetScalarType<T[P], Dooh_detectionGroupByOutputType[P]>
        }
      >
    >


  export type dooh_detectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    ad_id?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
    campaign?: boolean | ad_campaignsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dooh_detection"]>

  export type dooh_detectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    ad_id?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
    campaign?: boolean | ad_campaignsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dooh_detection"]>

  export type dooh_detectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    ad_id?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
    campaign?: boolean | ad_campaignsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dooh_detection"]>

  export type dooh_detectionSelectScalar = {
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    ad_id?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
  }

  export type dooh_detectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "bluetooth_id_hash" | "ad_id" | "age" | "race" | "gender", ExtArgs["result"]["dooh_detection"]>
  export type dooh_detectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | ad_campaignsDefaultArgs<ExtArgs>
  }
  export type dooh_detectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | ad_campaignsDefaultArgs<ExtArgs>
  }
  export type dooh_detectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | ad_campaignsDefaultArgs<ExtArgs>
  }

  export type $dooh_detectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dooh_detection"
    objects: {
      campaign: Prisma.$ad_campaignsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      bluetooth_id_hash: string
      ad_id: string
      age: number
      race: string
      gender: string
    }, ExtArgs["result"]["dooh_detection"]>
    composites: {}
  }

  type dooh_detectionGetPayload<S extends boolean | null | undefined | dooh_detectionDefaultArgs> = $Result.GetResult<Prisma.$dooh_detectionPayload, S>

  type dooh_detectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<dooh_detectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Dooh_detectionCountAggregateInputType | true
    }

  export interface dooh_detectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dooh_detection'], meta: { name: 'dooh_detection' } }
    /**
     * Find zero or one Dooh_detection that matches the filter.
     * @param {dooh_detectionFindUniqueArgs} args - Arguments to find a Dooh_detection
     * @example
     * // Get one Dooh_detection
     * const dooh_detection = await prisma.dooh_detection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dooh_detectionFindUniqueArgs>(args: SelectSubset<T, dooh_detectionFindUniqueArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dooh_detection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dooh_detectionFindUniqueOrThrowArgs} args - Arguments to find a Dooh_detection
     * @example
     * // Get one Dooh_detection
     * const dooh_detection = await prisma.dooh_detection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dooh_detectionFindUniqueOrThrowArgs>(args: SelectSubset<T, dooh_detectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dooh_detection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dooh_detectionFindFirstArgs} args - Arguments to find a Dooh_detection
     * @example
     * // Get one Dooh_detection
     * const dooh_detection = await prisma.dooh_detection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dooh_detectionFindFirstArgs>(args?: SelectSubset<T, dooh_detectionFindFirstArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dooh_detection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dooh_detectionFindFirstOrThrowArgs} args - Arguments to find a Dooh_detection
     * @example
     * // Get one Dooh_detection
     * const dooh_detection = await prisma.dooh_detection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dooh_detectionFindFirstOrThrowArgs>(args?: SelectSubset<T, dooh_detectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dooh_detections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dooh_detectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dooh_detections
     * const dooh_detections = await prisma.dooh_detection.findMany()
     * 
     * // Get first 10 Dooh_detections
     * const dooh_detections = await prisma.dooh_detection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dooh_detectionWithIdOnly = await prisma.dooh_detection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dooh_detectionFindManyArgs>(args?: SelectSubset<T, dooh_detectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dooh_detection.
     * @param {dooh_detectionCreateArgs} args - Arguments to create a Dooh_detection.
     * @example
     * // Create one Dooh_detection
     * const Dooh_detection = await prisma.dooh_detection.create({
     *   data: {
     *     // ... data to create a Dooh_detection
     *   }
     * })
     * 
     */
    create<T extends dooh_detectionCreateArgs>(args: SelectSubset<T, dooh_detectionCreateArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dooh_detections.
     * @param {dooh_detectionCreateManyArgs} args - Arguments to create many Dooh_detections.
     * @example
     * // Create many Dooh_detections
     * const dooh_detection = await prisma.dooh_detection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dooh_detectionCreateManyArgs>(args?: SelectSubset<T, dooh_detectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dooh_detections and returns the data saved in the database.
     * @param {dooh_detectionCreateManyAndReturnArgs} args - Arguments to create many Dooh_detections.
     * @example
     * // Create many Dooh_detections
     * const dooh_detection = await prisma.dooh_detection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dooh_detections and only return the `id`
     * const dooh_detectionWithIdOnly = await prisma.dooh_detection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dooh_detectionCreateManyAndReturnArgs>(args?: SelectSubset<T, dooh_detectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dooh_detection.
     * @param {dooh_detectionDeleteArgs} args - Arguments to delete one Dooh_detection.
     * @example
     * // Delete one Dooh_detection
     * const Dooh_detection = await prisma.dooh_detection.delete({
     *   where: {
     *     // ... filter to delete one Dooh_detection
     *   }
     * })
     * 
     */
    delete<T extends dooh_detectionDeleteArgs>(args: SelectSubset<T, dooh_detectionDeleteArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dooh_detection.
     * @param {dooh_detectionUpdateArgs} args - Arguments to update one Dooh_detection.
     * @example
     * // Update one Dooh_detection
     * const dooh_detection = await prisma.dooh_detection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dooh_detectionUpdateArgs>(args: SelectSubset<T, dooh_detectionUpdateArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dooh_detections.
     * @param {dooh_detectionDeleteManyArgs} args - Arguments to filter Dooh_detections to delete.
     * @example
     * // Delete a few Dooh_detections
     * const { count } = await prisma.dooh_detection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dooh_detectionDeleteManyArgs>(args?: SelectSubset<T, dooh_detectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dooh_detections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dooh_detectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dooh_detections
     * const dooh_detection = await prisma.dooh_detection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dooh_detectionUpdateManyArgs>(args: SelectSubset<T, dooh_detectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dooh_detections and returns the data updated in the database.
     * @param {dooh_detectionUpdateManyAndReturnArgs} args - Arguments to update many Dooh_detections.
     * @example
     * // Update many Dooh_detections
     * const dooh_detection = await prisma.dooh_detection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dooh_detections and only return the `id`
     * const dooh_detectionWithIdOnly = await prisma.dooh_detection.updateManyAndReturn({
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
    updateManyAndReturn<T extends dooh_detectionUpdateManyAndReturnArgs>(args: SelectSubset<T, dooh_detectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dooh_detection.
     * @param {dooh_detectionUpsertArgs} args - Arguments to update or create a Dooh_detection.
     * @example
     * // Update or create a Dooh_detection
     * const dooh_detection = await prisma.dooh_detection.upsert({
     *   create: {
     *     // ... data to create a Dooh_detection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dooh_detection we want to update
     *   }
     * })
     */
    upsert<T extends dooh_detectionUpsertArgs>(args: SelectSubset<T, dooh_detectionUpsertArgs<ExtArgs>>): Prisma__dooh_detectionClient<$Result.GetResult<Prisma.$dooh_detectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dooh_detections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dooh_detectionCountArgs} args - Arguments to filter Dooh_detections to count.
     * @example
     * // Count the number of Dooh_detections
     * const count = await prisma.dooh_detection.count({
     *   where: {
     *     // ... the filter for the Dooh_detections we want to count
     *   }
     * })
    **/
    count<T extends dooh_detectionCountArgs>(
      args?: Subset<T, dooh_detectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Dooh_detectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dooh_detection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Dooh_detectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Dooh_detectionAggregateArgs>(args: Subset<T, Dooh_detectionAggregateArgs>): Prisma.PrismaPromise<GetDooh_detectionAggregateType<T>>

    /**
     * Group by Dooh_detection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dooh_detectionGroupByArgs} args - Group by arguments.
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
      T extends dooh_detectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dooh_detectionGroupByArgs['orderBy'] }
        : { orderBy?: dooh_detectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, dooh_detectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDooh_detectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dooh_detection model
   */
  readonly fields: dooh_detectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dooh_detection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dooh_detectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends ad_campaignsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ad_campaignsDefaultArgs<ExtArgs>>): Prisma__ad_campaignsClient<$Result.GetResult<Prisma.$ad_campaignsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the dooh_detection model
   */
  interface dooh_detectionFieldRefs {
    readonly id: FieldRef<"dooh_detection", 'Int'>
    readonly timestamp: FieldRef<"dooh_detection", 'DateTime'>
    readonly bluetooth_id_hash: FieldRef<"dooh_detection", 'String'>
    readonly ad_id: FieldRef<"dooh_detection", 'String'>
    readonly age: FieldRef<"dooh_detection", 'Int'>
    readonly race: FieldRef<"dooh_detection", 'String'>
    readonly gender: FieldRef<"dooh_detection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dooh_detection findUnique
   */
  export type dooh_detectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * Filter, which dooh_detection to fetch.
     */
    where: dooh_detectionWhereUniqueInput
  }

  /**
   * dooh_detection findUniqueOrThrow
   */
  export type dooh_detectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * Filter, which dooh_detection to fetch.
     */
    where: dooh_detectionWhereUniqueInput
  }

  /**
   * dooh_detection findFirst
   */
  export type dooh_detectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * Filter, which dooh_detection to fetch.
     */
    where?: dooh_detectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dooh_detections to fetch.
     */
    orderBy?: dooh_detectionOrderByWithRelationInput | dooh_detectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dooh_detections.
     */
    cursor?: dooh_detectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dooh_detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dooh_detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dooh_detections.
     */
    distinct?: Dooh_detectionScalarFieldEnum | Dooh_detectionScalarFieldEnum[]
  }

  /**
   * dooh_detection findFirstOrThrow
   */
  export type dooh_detectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * Filter, which dooh_detection to fetch.
     */
    where?: dooh_detectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dooh_detections to fetch.
     */
    orderBy?: dooh_detectionOrderByWithRelationInput | dooh_detectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dooh_detections.
     */
    cursor?: dooh_detectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dooh_detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dooh_detections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dooh_detections.
     */
    distinct?: Dooh_detectionScalarFieldEnum | Dooh_detectionScalarFieldEnum[]
  }

  /**
   * dooh_detection findMany
   */
  export type dooh_detectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * Filter, which dooh_detections to fetch.
     */
    where?: dooh_detectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dooh_detections to fetch.
     */
    orderBy?: dooh_detectionOrderByWithRelationInput | dooh_detectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dooh_detections.
     */
    cursor?: dooh_detectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dooh_detections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dooh_detections.
     */
    skip?: number
    distinct?: Dooh_detectionScalarFieldEnum | Dooh_detectionScalarFieldEnum[]
  }

  /**
   * dooh_detection create
   */
  export type dooh_detectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * The data needed to create a dooh_detection.
     */
    data: XOR<dooh_detectionCreateInput, dooh_detectionUncheckedCreateInput>
  }

  /**
   * dooh_detection createMany
   */
  export type dooh_detectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dooh_detections.
     */
    data: dooh_detectionCreateManyInput | dooh_detectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dooh_detection createManyAndReturn
   */
  export type dooh_detectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * The data used to create many dooh_detections.
     */
    data: dooh_detectionCreateManyInput | dooh_detectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dooh_detection update
   */
  export type dooh_detectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * The data needed to update a dooh_detection.
     */
    data: XOR<dooh_detectionUpdateInput, dooh_detectionUncheckedUpdateInput>
    /**
     * Choose, which dooh_detection to update.
     */
    where: dooh_detectionWhereUniqueInput
  }

  /**
   * dooh_detection updateMany
   */
  export type dooh_detectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dooh_detections.
     */
    data: XOR<dooh_detectionUpdateManyMutationInput, dooh_detectionUncheckedUpdateManyInput>
    /**
     * Filter which dooh_detections to update
     */
    where?: dooh_detectionWhereInput
    /**
     * Limit how many dooh_detections to update.
     */
    limit?: number
  }

  /**
   * dooh_detection updateManyAndReturn
   */
  export type dooh_detectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * The data used to update dooh_detections.
     */
    data: XOR<dooh_detectionUpdateManyMutationInput, dooh_detectionUncheckedUpdateManyInput>
    /**
     * Filter which dooh_detections to update
     */
    where?: dooh_detectionWhereInput
    /**
     * Limit how many dooh_detections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * dooh_detection upsert
   */
  export type dooh_detectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * The filter to search for the dooh_detection to update in case it exists.
     */
    where: dooh_detectionWhereUniqueInput
    /**
     * In case the dooh_detection found by the `where` argument doesn't exist, create a new dooh_detection with this data.
     */
    create: XOR<dooh_detectionCreateInput, dooh_detectionUncheckedCreateInput>
    /**
     * In case the dooh_detection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dooh_detectionUpdateInput, dooh_detectionUncheckedUpdateInput>
  }

  /**
   * dooh_detection delete
   */
  export type dooh_detectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
    /**
     * Filter which dooh_detection to delete.
     */
    where: dooh_detectionWhereUniqueInput
  }

  /**
   * dooh_detection deleteMany
   */
  export type dooh_detectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dooh_detections to delete
     */
    where?: dooh_detectionWhereInput
    /**
     * Limit how many dooh_detections to delete.
     */
    limit?: number
  }

  /**
   * dooh_detection without action
   */
  export type dooh_detectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dooh_detection
     */
    select?: dooh_detectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the dooh_detection
     */
    omit?: dooh_detectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dooh_detectionInclude<ExtArgs> | null
  }


  /**
   * Model pos_purchase
   */

  export type AggregatePos_purchase = {
    _count: Pos_purchaseCountAggregateOutputType | null
    _avg: Pos_purchaseAvgAggregateOutputType | null
    _sum: Pos_purchaseSumAggregateOutputType | null
    _min: Pos_purchaseMinAggregateOutputType | null
    _max: Pos_purchaseMaxAggregateOutputType | null
  }

  export type Pos_purchaseAvgAggregateOutputType = {
    id: number | null
    age: number | null
    sale_total: Decimal | null
  }

  export type Pos_purchaseSumAggregateOutputType = {
    id: number | null
    age: number | null
    sale_total: Decimal | null
  }

  export type Pos_purchaseMinAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    bluetooth_id_hash: string | null
    age: number | null
    race: string | null
    gender: string | null
    sale_total: Decimal | null
  }

  export type Pos_purchaseMaxAggregateOutputType = {
    id: number | null
    timestamp: Date | null
    bluetooth_id_hash: string | null
    age: number | null
    race: string | null
    gender: string | null
    sale_total: Decimal | null
  }

  export type Pos_purchaseCountAggregateOutputType = {
    id: number
    timestamp: number
    bluetooth_id_hash: number
    age: number
    race: number
    gender: number
    items_purchased: number
    sale_total: number
    _all: number
  }


  export type Pos_purchaseAvgAggregateInputType = {
    id?: true
    age?: true
    sale_total?: true
  }

  export type Pos_purchaseSumAggregateInputType = {
    id?: true
    age?: true
    sale_total?: true
  }

  export type Pos_purchaseMinAggregateInputType = {
    id?: true
    timestamp?: true
    bluetooth_id_hash?: true
    age?: true
    race?: true
    gender?: true
    sale_total?: true
  }

  export type Pos_purchaseMaxAggregateInputType = {
    id?: true
    timestamp?: true
    bluetooth_id_hash?: true
    age?: true
    race?: true
    gender?: true
    sale_total?: true
  }

  export type Pos_purchaseCountAggregateInputType = {
    id?: true
    timestamp?: true
    bluetooth_id_hash?: true
    age?: true
    race?: true
    gender?: true
    items_purchased?: true
    sale_total?: true
    _all?: true
  }

  export type Pos_purchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pos_purchase to aggregate.
     */
    where?: pos_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pos_purchases to fetch.
     */
    orderBy?: pos_purchaseOrderByWithRelationInput | pos_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pos_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pos_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pos_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pos_purchases
    **/
    _count?: true | Pos_purchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Pos_purchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Pos_purchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Pos_purchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Pos_purchaseMaxAggregateInputType
  }

  export type GetPos_purchaseAggregateType<T extends Pos_purchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePos_purchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePos_purchase[P]>
      : GetScalarType<T[P], AggregatePos_purchase[P]>
  }




  export type pos_purchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pos_purchaseWhereInput
    orderBy?: pos_purchaseOrderByWithAggregationInput | pos_purchaseOrderByWithAggregationInput[]
    by: Pos_purchaseScalarFieldEnum[] | Pos_purchaseScalarFieldEnum
    having?: pos_purchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Pos_purchaseCountAggregateInputType | true
    _avg?: Pos_purchaseAvgAggregateInputType
    _sum?: Pos_purchaseSumAggregateInputType
    _min?: Pos_purchaseMinAggregateInputType
    _max?: Pos_purchaseMaxAggregateInputType
  }

  export type Pos_purchaseGroupByOutputType = {
    id: number
    timestamp: Date
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
    items_purchased: JsonValue | null
    sale_total: Decimal
    _count: Pos_purchaseCountAggregateOutputType | null
    _avg: Pos_purchaseAvgAggregateOutputType | null
    _sum: Pos_purchaseSumAggregateOutputType | null
    _min: Pos_purchaseMinAggregateOutputType | null
    _max: Pos_purchaseMaxAggregateOutputType | null
  }

  type GetPos_purchaseGroupByPayload<T extends pos_purchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Pos_purchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Pos_purchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Pos_purchaseGroupByOutputType[P]>
            : GetScalarType<T[P], Pos_purchaseGroupByOutputType[P]>
        }
      >
    >


  export type pos_purchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
    items_purchased?: boolean
    sale_total?: boolean
  }, ExtArgs["result"]["pos_purchase"]>

  export type pos_purchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
    items_purchased?: boolean
    sale_total?: boolean
  }, ExtArgs["result"]["pos_purchase"]>

  export type pos_purchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
    items_purchased?: boolean
    sale_total?: boolean
  }, ExtArgs["result"]["pos_purchase"]>

  export type pos_purchaseSelectScalar = {
    id?: boolean
    timestamp?: boolean
    bluetooth_id_hash?: boolean
    age?: boolean
    race?: boolean
    gender?: boolean
    items_purchased?: boolean
    sale_total?: boolean
  }

  export type pos_purchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "bluetooth_id_hash" | "age" | "race" | "gender" | "items_purchased" | "sale_total", ExtArgs["result"]["pos_purchase"]>

  export type $pos_purchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pos_purchase"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timestamp: Date
      bluetooth_id_hash: string
      age: number
      race: string
      gender: string
      items_purchased: Prisma.JsonValue | null
      sale_total: Prisma.Decimal
    }, ExtArgs["result"]["pos_purchase"]>
    composites: {}
  }

  type pos_purchaseGetPayload<S extends boolean | null | undefined | pos_purchaseDefaultArgs> = $Result.GetResult<Prisma.$pos_purchasePayload, S>

  type pos_purchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pos_purchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Pos_purchaseCountAggregateInputType | true
    }

  export interface pos_purchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pos_purchase'], meta: { name: 'pos_purchase' } }
    /**
     * Find zero or one Pos_purchase that matches the filter.
     * @param {pos_purchaseFindUniqueArgs} args - Arguments to find a Pos_purchase
     * @example
     * // Get one Pos_purchase
     * const pos_purchase = await prisma.pos_purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pos_purchaseFindUniqueArgs>(args: SelectSubset<T, pos_purchaseFindUniqueArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pos_purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pos_purchaseFindUniqueOrThrowArgs} args - Arguments to find a Pos_purchase
     * @example
     * // Get one Pos_purchase
     * const pos_purchase = await prisma.pos_purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pos_purchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, pos_purchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pos_purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pos_purchaseFindFirstArgs} args - Arguments to find a Pos_purchase
     * @example
     * // Get one Pos_purchase
     * const pos_purchase = await prisma.pos_purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pos_purchaseFindFirstArgs>(args?: SelectSubset<T, pos_purchaseFindFirstArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pos_purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pos_purchaseFindFirstOrThrowArgs} args - Arguments to find a Pos_purchase
     * @example
     * // Get one Pos_purchase
     * const pos_purchase = await prisma.pos_purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pos_purchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, pos_purchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pos_purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pos_purchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pos_purchases
     * const pos_purchases = await prisma.pos_purchase.findMany()
     * 
     * // Get first 10 Pos_purchases
     * const pos_purchases = await prisma.pos_purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pos_purchaseWithIdOnly = await prisma.pos_purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pos_purchaseFindManyArgs>(args?: SelectSubset<T, pos_purchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pos_purchase.
     * @param {pos_purchaseCreateArgs} args - Arguments to create a Pos_purchase.
     * @example
     * // Create one Pos_purchase
     * const Pos_purchase = await prisma.pos_purchase.create({
     *   data: {
     *     // ... data to create a Pos_purchase
     *   }
     * })
     * 
     */
    create<T extends pos_purchaseCreateArgs>(args: SelectSubset<T, pos_purchaseCreateArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pos_purchases.
     * @param {pos_purchaseCreateManyArgs} args - Arguments to create many Pos_purchases.
     * @example
     * // Create many Pos_purchases
     * const pos_purchase = await prisma.pos_purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pos_purchaseCreateManyArgs>(args?: SelectSubset<T, pos_purchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pos_purchases and returns the data saved in the database.
     * @param {pos_purchaseCreateManyAndReturnArgs} args - Arguments to create many Pos_purchases.
     * @example
     * // Create many Pos_purchases
     * const pos_purchase = await prisma.pos_purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pos_purchases and only return the `id`
     * const pos_purchaseWithIdOnly = await prisma.pos_purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pos_purchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, pos_purchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pos_purchase.
     * @param {pos_purchaseDeleteArgs} args - Arguments to delete one Pos_purchase.
     * @example
     * // Delete one Pos_purchase
     * const Pos_purchase = await prisma.pos_purchase.delete({
     *   where: {
     *     // ... filter to delete one Pos_purchase
     *   }
     * })
     * 
     */
    delete<T extends pos_purchaseDeleteArgs>(args: SelectSubset<T, pos_purchaseDeleteArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pos_purchase.
     * @param {pos_purchaseUpdateArgs} args - Arguments to update one Pos_purchase.
     * @example
     * // Update one Pos_purchase
     * const pos_purchase = await prisma.pos_purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pos_purchaseUpdateArgs>(args: SelectSubset<T, pos_purchaseUpdateArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pos_purchases.
     * @param {pos_purchaseDeleteManyArgs} args - Arguments to filter Pos_purchases to delete.
     * @example
     * // Delete a few Pos_purchases
     * const { count } = await prisma.pos_purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pos_purchaseDeleteManyArgs>(args?: SelectSubset<T, pos_purchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pos_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pos_purchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pos_purchases
     * const pos_purchase = await prisma.pos_purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pos_purchaseUpdateManyArgs>(args: SelectSubset<T, pos_purchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pos_purchases and returns the data updated in the database.
     * @param {pos_purchaseUpdateManyAndReturnArgs} args - Arguments to update many Pos_purchases.
     * @example
     * // Update many Pos_purchases
     * const pos_purchase = await prisma.pos_purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pos_purchases and only return the `id`
     * const pos_purchaseWithIdOnly = await prisma.pos_purchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends pos_purchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, pos_purchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pos_purchase.
     * @param {pos_purchaseUpsertArgs} args - Arguments to update or create a Pos_purchase.
     * @example
     * // Update or create a Pos_purchase
     * const pos_purchase = await prisma.pos_purchase.upsert({
     *   create: {
     *     // ... data to create a Pos_purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pos_purchase we want to update
     *   }
     * })
     */
    upsert<T extends pos_purchaseUpsertArgs>(args: SelectSubset<T, pos_purchaseUpsertArgs<ExtArgs>>): Prisma__pos_purchaseClient<$Result.GetResult<Prisma.$pos_purchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pos_purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pos_purchaseCountArgs} args - Arguments to filter Pos_purchases to count.
     * @example
     * // Count the number of Pos_purchases
     * const count = await prisma.pos_purchase.count({
     *   where: {
     *     // ... the filter for the Pos_purchases we want to count
     *   }
     * })
    **/
    count<T extends pos_purchaseCountArgs>(
      args?: Subset<T, pos_purchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Pos_purchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pos_purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Pos_purchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Pos_purchaseAggregateArgs>(args: Subset<T, Pos_purchaseAggregateArgs>): Prisma.PrismaPromise<GetPos_purchaseAggregateType<T>>

    /**
     * Group by Pos_purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pos_purchaseGroupByArgs} args - Group by arguments.
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
      T extends pos_purchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pos_purchaseGroupByArgs['orderBy'] }
        : { orderBy?: pos_purchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pos_purchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPos_purchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pos_purchase model
   */
  readonly fields: pos_purchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pos_purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pos_purchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the pos_purchase model
   */
  interface pos_purchaseFieldRefs {
    readonly id: FieldRef<"pos_purchase", 'Int'>
    readonly timestamp: FieldRef<"pos_purchase", 'DateTime'>
    readonly bluetooth_id_hash: FieldRef<"pos_purchase", 'String'>
    readonly age: FieldRef<"pos_purchase", 'Int'>
    readonly race: FieldRef<"pos_purchase", 'String'>
    readonly gender: FieldRef<"pos_purchase", 'String'>
    readonly items_purchased: FieldRef<"pos_purchase", 'Json'>
    readonly sale_total: FieldRef<"pos_purchase", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * pos_purchase findUnique
   */
  export type pos_purchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * Filter, which pos_purchase to fetch.
     */
    where: pos_purchaseWhereUniqueInput
  }

  /**
   * pos_purchase findUniqueOrThrow
   */
  export type pos_purchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * Filter, which pos_purchase to fetch.
     */
    where: pos_purchaseWhereUniqueInput
  }

  /**
   * pos_purchase findFirst
   */
  export type pos_purchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * Filter, which pos_purchase to fetch.
     */
    where?: pos_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pos_purchases to fetch.
     */
    orderBy?: pos_purchaseOrderByWithRelationInput | pos_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pos_purchases.
     */
    cursor?: pos_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pos_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pos_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pos_purchases.
     */
    distinct?: Pos_purchaseScalarFieldEnum | Pos_purchaseScalarFieldEnum[]
  }

  /**
   * pos_purchase findFirstOrThrow
   */
  export type pos_purchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * Filter, which pos_purchase to fetch.
     */
    where?: pos_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pos_purchases to fetch.
     */
    orderBy?: pos_purchaseOrderByWithRelationInput | pos_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pos_purchases.
     */
    cursor?: pos_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pos_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pos_purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pos_purchases.
     */
    distinct?: Pos_purchaseScalarFieldEnum | Pos_purchaseScalarFieldEnum[]
  }

  /**
   * pos_purchase findMany
   */
  export type pos_purchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * Filter, which pos_purchases to fetch.
     */
    where?: pos_purchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pos_purchases to fetch.
     */
    orderBy?: pos_purchaseOrderByWithRelationInput | pos_purchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pos_purchases.
     */
    cursor?: pos_purchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pos_purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pos_purchases.
     */
    skip?: number
    distinct?: Pos_purchaseScalarFieldEnum | Pos_purchaseScalarFieldEnum[]
  }

  /**
   * pos_purchase create
   */
  export type pos_purchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * The data needed to create a pos_purchase.
     */
    data: XOR<pos_purchaseCreateInput, pos_purchaseUncheckedCreateInput>
  }

  /**
   * pos_purchase createMany
   */
  export type pos_purchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pos_purchases.
     */
    data: pos_purchaseCreateManyInput | pos_purchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pos_purchase createManyAndReturn
   */
  export type pos_purchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * The data used to create many pos_purchases.
     */
    data: pos_purchaseCreateManyInput | pos_purchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pos_purchase update
   */
  export type pos_purchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * The data needed to update a pos_purchase.
     */
    data: XOR<pos_purchaseUpdateInput, pos_purchaseUncheckedUpdateInput>
    /**
     * Choose, which pos_purchase to update.
     */
    where: pos_purchaseWhereUniqueInput
  }

  /**
   * pos_purchase updateMany
   */
  export type pos_purchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pos_purchases.
     */
    data: XOR<pos_purchaseUpdateManyMutationInput, pos_purchaseUncheckedUpdateManyInput>
    /**
     * Filter which pos_purchases to update
     */
    where?: pos_purchaseWhereInput
    /**
     * Limit how many pos_purchases to update.
     */
    limit?: number
  }

  /**
   * pos_purchase updateManyAndReturn
   */
  export type pos_purchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * The data used to update pos_purchases.
     */
    data: XOR<pos_purchaseUpdateManyMutationInput, pos_purchaseUncheckedUpdateManyInput>
    /**
     * Filter which pos_purchases to update
     */
    where?: pos_purchaseWhereInput
    /**
     * Limit how many pos_purchases to update.
     */
    limit?: number
  }

  /**
   * pos_purchase upsert
   */
  export type pos_purchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * The filter to search for the pos_purchase to update in case it exists.
     */
    where: pos_purchaseWhereUniqueInput
    /**
     * In case the pos_purchase found by the `where` argument doesn't exist, create a new pos_purchase with this data.
     */
    create: XOR<pos_purchaseCreateInput, pos_purchaseUncheckedCreateInput>
    /**
     * In case the pos_purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pos_purchaseUpdateInput, pos_purchaseUncheckedUpdateInput>
  }

  /**
   * pos_purchase delete
   */
  export type pos_purchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
    /**
     * Filter which pos_purchase to delete.
     */
    where: pos_purchaseWhereUniqueInput
  }

  /**
   * pos_purchase deleteMany
   */
  export type pos_purchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pos_purchases to delete
     */
    where?: pos_purchaseWhereInput
    /**
     * Limit how many pos_purchases to delete.
     */
    limit?: number
  }

  /**
   * pos_purchase without action
   */
  export type pos_purchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pos_purchase
     */
    select?: pos_purchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pos_purchase
     */
    omit?: pos_purchaseOmit<ExtArgs> | null
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


  export const Ad_campaignsScalarFieldEnum: {
    ad_id: 'ad_id',
    name: 'name',
    category: 'category'
  };

  export type Ad_campaignsScalarFieldEnum = (typeof Ad_campaignsScalarFieldEnum)[keyof typeof Ad_campaignsScalarFieldEnum]


  export const Dooh_detectionScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    bluetooth_id_hash: 'bluetooth_id_hash',
    ad_id: 'ad_id',
    age: 'age',
    race: 'race',
    gender: 'gender'
  };

  export type Dooh_detectionScalarFieldEnum = (typeof Dooh_detectionScalarFieldEnum)[keyof typeof Dooh_detectionScalarFieldEnum]


  export const Pos_purchaseScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    bluetooth_id_hash: 'bluetooth_id_hash',
    age: 'age',
    race: 'race',
    gender: 'gender',
    items_purchased: 'items_purchased',
    sale_total: 'sale_total'
  };

  export type Pos_purchaseScalarFieldEnum = (typeof Pos_purchaseScalarFieldEnum)[keyof typeof Pos_purchaseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type ad_campaignsWhereInput = {
    AND?: ad_campaignsWhereInput | ad_campaignsWhereInput[]
    OR?: ad_campaignsWhereInput[]
    NOT?: ad_campaignsWhereInput | ad_campaignsWhereInput[]
    ad_id?: StringFilter<"ad_campaigns"> | string
    name?: StringFilter<"ad_campaigns"> | string
    category?: StringFilter<"ad_campaigns"> | string
    detections?: Dooh_detectionListRelationFilter
  }

  export type ad_campaignsOrderByWithRelationInput = {
    ad_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    detections?: dooh_detectionOrderByRelationAggregateInput
  }

  export type ad_campaignsWhereUniqueInput = Prisma.AtLeast<{
    ad_id?: string
    AND?: ad_campaignsWhereInput | ad_campaignsWhereInput[]
    OR?: ad_campaignsWhereInput[]
    NOT?: ad_campaignsWhereInput | ad_campaignsWhereInput[]
    name?: StringFilter<"ad_campaigns"> | string
    category?: StringFilter<"ad_campaigns"> | string
    detections?: Dooh_detectionListRelationFilter
  }, "ad_id">

  export type ad_campaignsOrderByWithAggregationInput = {
    ad_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    _count?: ad_campaignsCountOrderByAggregateInput
    _max?: ad_campaignsMaxOrderByAggregateInput
    _min?: ad_campaignsMinOrderByAggregateInput
  }

  export type ad_campaignsScalarWhereWithAggregatesInput = {
    AND?: ad_campaignsScalarWhereWithAggregatesInput | ad_campaignsScalarWhereWithAggregatesInput[]
    OR?: ad_campaignsScalarWhereWithAggregatesInput[]
    NOT?: ad_campaignsScalarWhereWithAggregatesInput | ad_campaignsScalarWhereWithAggregatesInput[]
    ad_id?: StringWithAggregatesFilter<"ad_campaigns"> | string
    name?: StringWithAggregatesFilter<"ad_campaigns"> | string
    category?: StringWithAggregatesFilter<"ad_campaigns"> | string
  }

  export type dooh_detectionWhereInput = {
    AND?: dooh_detectionWhereInput | dooh_detectionWhereInput[]
    OR?: dooh_detectionWhereInput[]
    NOT?: dooh_detectionWhereInput | dooh_detectionWhereInput[]
    id?: IntFilter<"dooh_detection"> | number
    timestamp?: DateTimeFilter<"dooh_detection"> | Date | string
    bluetooth_id_hash?: StringFilter<"dooh_detection"> | string
    ad_id?: StringFilter<"dooh_detection"> | string
    age?: IntFilter<"dooh_detection"> | number
    race?: StringFilter<"dooh_detection"> | string
    gender?: StringFilter<"dooh_detection"> | string
    campaign?: XOR<Ad_campaignsScalarRelationFilter, ad_campaignsWhereInput>
  }

  export type dooh_detectionOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    ad_id?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    campaign?: ad_campaignsOrderByWithRelationInput
  }

  export type dooh_detectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dooh_detectionWhereInput | dooh_detectionWhereInput[]
    OR?: dooh_detectionWhereInput[]
    NOT?: dooh_detectionWhereInput | dooh_detectionWhereInput[]
    timestamp?: DateTimeFilter<"dooh_detection"> | Date | string
    bluetooth_id_hash?: StringFilter<"dooh_detection"> | string
    ad_id?: StringFilter<"dooh_detection"> | string
    age?: IntFilter<"dooh_detection"> | number
    race?: StringFilter<"dooh_detection"> | string
    gender?: StringFilter<"dooh_detection"> | string
    campaign?: XOR<Ad_campaignsScalarRelationFilter, ad_campaignsWhereInput>
  }, "id">

  export type dooh_detectionOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    ad_id?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    _count?: dooh_detectionCountOrderByAggregateInput
    _avg?: dooh_detectionAvgOrderByAggregateInput
    _max?: dooh_detectionMaxOrderByAggregateInput
    _min?: dooh_detectionMinOrderByAggregateInput
    _sum?: dooh_detectionSumOrderByAggregateInput
  }

  export type dooh_detectionScalarWhereWithAggregatesInput = {
    AND?: dooh_detectionScalarWhereWithAggregatesInput | dooh_detectionScalarWhereWithAggregatesInput[]
    OR?: dooh_detectionScalarWhereWithAggregatesInput[]
    NOT?: dooh_detectionScalarWhereWithAggregatesInput | dooh_detectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dooh_detection"> | number
    timestamp?: DateTimeWithAggregatesFilter<"dooh_detection"> | Date | string
    bluetooth_id_hash?: StringWithAggregatesFilter<"dooh_detection"> | string
    ad_id?: StringWithAggregatesFilter<"dooh_detection"> | string
    age?: IntWithAggregatesFilter<"dooh_detection"> | number
    race?: StringWithAggregatesFilter<"dooh_detection"> | string
    gender?: StringWithAggregatesFilter<"dooh_detection"> | string
  }

  export type pos_purchaseWhereInput = {
    AND?: pos_purchaseWhereInput | pos_purchaseWhereInput[]
    OR?: pos_purchaseWhereInput[]
    NOT?: pos_purchaseWhereInput | pos_purchaseWhereInput[]
    id?: IntFilter<"pos_purchase"> | number
    timestamp?: DateTimeFilter<"pos_purchase"> | Date | string
    bluetooth_id_hash?: StringFilter<"pos_purchase"> | string
    age?: IntFilter<"pos_purchase"> | number
    race?: StringFilter<"pos_purchase"> | string
    gender?: StringFilter<"pos_purchase"> | string
    items_purchased?: JsonNullableFilter<"pos_purchase">
    sale_total?: DecimalFilter<"pos_purchase"> | Decimal | DecimalJsLike | number | string
  }

  export type pos_purchaseOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    items_purchased?: SortOrderInput | SortOrder
    sale_total?: SortOrder
  }

  export type pos_purchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pos_purchaseWhereInput | pos_purchaseWhereInput[]
    OR?: pos_purchaseWhereInput[]
    NOT?: pos_purchaseWhereInput | pos_purchaseWhereInput[]
    timestamp?: DateTimeFilter<"pos_purchase"> | Date | string
    bluetooth_id_hash?: StringFilter<"pos_purchase"> | string
    age?: IntFilter<"pos_purchase"> | number
    race?: StringFilter<"pos_purchase"> | string
    gender?: StringFilter<"pos_purchase"> | string
    items_purchased?: JsonNullableFilter<"pos_purchase">
    sale_total?: DecimalFilter<"pos_purchase"> | Decimal | DecimalJsLike | number | string
  }, "id">

  export type pos_purchaseOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    items_purchased?: SortOrderInput | SortOrder
    sale_total?: SortOrder
    _count?: pos_purchaseCountOrderByAggregateInput
    _avg?: pos_purchaseAvgOrderByAggregateInput
    _max?: pos_purchaseMaxOrderByAggregateInput
    _min?: pos_purchaseMinOrderByAggregateInput
    _sum?: pos_purchaseSumOrderByAggregateInput
  }

  export type pos_purchaseScalarWhereWithAggregatesInput = {
    AND?: pos_purchaseScalarWhereWithAggregatesInput | pos_purchaseScalarWhereWithAggregatesInput[]
    OR?: pos_purchaseScalarWhereWithAggregatesInput[]
    NOT?: pos_purchaseScalarWhereWithAggregatesInput | pos_purchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pos_purchase"> | number
    timestamp?: DateTimeWithAggregatesFilter<"pos_purchase"> | Date | string
    bluetooth_id_hash?: StringWithAggregatesFilter<"pos_purchase"> | string
    age?: IntWithAggregatesFilter<"pos_purchase"> | number
    race?: StringWithAggregatesFilter<"pos_purchase"> | string
    gender?: StringWithAggregatesFilter<"pos_purchase"> | string
    items_purchased?: JsonNullableWithAggregatesFilter<"pos_purchase">
    sale_total?: DecimalWithAggregatesFilter<"pos_purchase"> | Decimal | DecimalJsLike | number | string
  }

  export type ad_campaignsCreateInput = {
    ad_id: string
    name: string
    category: string
    detections?: dooh_detectionCreateNestedManyWithoutCampaignInput
  }

  export type ad_campaignsUncheckedCreateInput = {
    ad_id: string
    name: string
    category: string
    detections?: dooh_detectionUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type ad_campaignsUpdateInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    detections?: dooh_detectionUpdateManyWithoutCampaignNestedInput
  }

  export type ad_campaignsUncheckedUpdateInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    detections?: dooh_detectionUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type ad_campaignsCreateManyInput = {
    ad_id: string
    name: string
    category: string
  }

  export type ad_campaignsUpdateManyMutationInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ad_campaignsUncheckedUpdateManyInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type dooh_detectionCreateInput = {
    timestamp: Date | string
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
    campaign: ad_campaignsCreateNestedOneWithoutDetectionsInput
  }

  export type dooh_detectionUncheckedCreateInput = {
    id?: number
    timestamp: Date | string
    bluetooth_id_hash: string
    ad_id: string
    age: number
    race: string
    gender: string
  }

  export type dooh_detectionUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    campaign?: ad_campaignsUpdateOneRequiredWithoutDetectionsNestedInput
  }

  export type dooh_detectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type dooh_detectionCreateManyInput = {
    id?: number
    timestamp: Date | string
    bluetooth_id_hash: string
    ad_id: string
    age: number
    race: string
    gender: string
  }

  export type dooh_detectionUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type dooh_detectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    ad_id?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type pos_purchaseCreateInput = {
    timestamp: Date | string
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
    items_purchased?: NullableJsonNullValueInput | InputJsonValue
    sale_total: Decimal | DecimalJsLike | number | string
  }

  export type pos_purchaseUncheckedCreateInput = {
    id?: number
    timestamp: Date | string
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
    items_purchased?: NullableJsonNullValueInput | InputJsonValue
    sale_total: Decimal | DecimalJsLike | number | string
  }

  export type pos_purchaseUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    items_purchased?: NullableJsonNullValueInput | InputJsonValue
    sale_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pos_purchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    items_purchased?: NullableJsonNullValueInput | InputJsonValue
    sale_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pos_purchaseCreateManyInput = {
    id?: number
    timestamp: Date | string
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
    items_purchased?: NullableJsonNullValueInput | InputJsonValue
    sale_total: Decimal | DecimalJsLike | number | string
  }

  export type pos_purchaseUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    items_purchased?: NullableJsonNullValueInput | InputJsonValue
    sale_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type pos_purchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    items_purchased?: NullableJsonNullValueInput | InputJsonValue
    sale_total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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

  export type Dooh_detectionListRelationFilter = {
    every?: dooh_detectionWhereInput
    some?: dooh_detectionWhereInput
    none?: dooh_detectionWhereInput
  }

  export type dooh_detectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ad_campaignsCountOrderByAggregateInput = {
    ad_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ad_campaignsMaxOrderByAggregateInput = {
    ad_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type ad_campaignsMinOrderByAggregateInput = {
    ad_id?: SortOrder
    name?: SortOrder
    category?: SortOrder
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

  export type Ad_campaignsScalarRelationFilter = {
    is?: ad_campaignsWhereInput
    isNot?: ad_campaignsWhereInput
  }

  export type dooh_detectionCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    ad_id?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
  }

  export type dooh_detectionAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
  }

  export type dooh_detectionMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    ad_id?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
  }

  export type dooh_detectionMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    ad_id?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
  }

  export type dooh_detectionSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type pos_purchaseCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    items_purchased?: SortOrder
    sale_total?: SortOrder
  }

  export type pos_purchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    sale_total?: SortOrder
  }

  export type pos_purchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    sale_total?: SortOrder
  }

  export type pos_purchaseMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    bluetooth_id_hash?: SortOrder
    age?: SortOrder
    race?: SortOrder
    gender?: SortOrder
    sale_total?: SortOrder
  }

  export type pos_purchaseSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    sale_total?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type dooh_detectionCreateNestedManyWithoutCampaignInput = {
    create?: XOR<dooh_detectionCreateWithoutCampaignInput, dooh_detectionUncheckedCreateWithoutCampaignInput> | dooh_detectionCreateWithoutCampaignInput[] | dooh_detectionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: dooh_detectionCreateOrConnectWithoutCampaignInput | dooh_detectionCreateOrConnectWithoutCampaignInput[]
    createMany?: dooh_detectionCreateManyCampaignInputEnvelope
    connect?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
  }

  export type dooh_detectionUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<dooh_detectionCreateWithoutCampaignInput, dooh_detectionUncheckedCreateWithoutCampaignInput> | dooh_detectionCreateWithoutCampaignInput[] | dooh_detectionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: dooh_detectionCreateOrConnectWithoutCampaignInput | dooh_detectionCreateOrConnectWithoutCampaignInput[]
    createMany?: dooh_detectionCreateManyCampaignInputEnvelope
    connect?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type dooh_detectionUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<dooh_detectionCreateWithoutCampaignInput, dooh_detectionUncheckedCreateWithoutCampaignInput> | dooh_detectionCreateWithoutCampaignInput[] | dooh_detectionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: dooh_detectionCreateOrConnectWithoutCampaignInput | dooh_detectionCreateOrConnectWithoutCampaignInput[]
    upsert?: dooh_detectionUpsertWithWhereUniqueWithoutCampaignInput | dooh_detectionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: dooh_detectionCreateManyCampaignInputEnvelope
    set?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    disconnect?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    delete?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    connect?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    update?: dooh_detectionUpdateWithWhereUniqueWithoutCampaignInput | dooh_detectionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: dooh_detectionUpdateManyWithWhereWithoutCampaignInput | dooh_detectionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: dooh_detectionScalarWhereInput | dooh_detectionScalarWhereInput[]
  }

  export type dooh_detectionUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<dooh_detectionCreateWithoutCampaignInput, dooh_detectionUncheckedCreateWithoutCampaignInput> | dooh_detectionCreateWithoutCampaignInput[] | dooh_detectionUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: dooh_detectionCreateOrConnectWithoutCampaignInput | dooh_detectionCreateOrConnectWithoutCampaignInput[]
    upsert?: dooh_detectionUpsertWithWhereUniqueWithoutCampaignInput | dooh_detectionUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: dooh_detectionCreateManyCampaignInputEnvelope
    set?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    disconnect?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    delete?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    connect?: dooh_detectionWhereUniqueInput | dooh_detectionWhereUniqueInput[]
    update?: dooh_detectionUpdateWithWhereUniqueWithoutCampaignInput | dooh_detectionUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: dooh_detectionUpdateManyWithWhereWithoutCampaignInput | dooh_detectionUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: dooh_detectionScalarWhereInput | dooh_detectionScalarWhereInput[]
  }

  export type ad_campaignsCreateNestedOneWithoutDetectionsInput = {
    create?: XOR<ad_campaignsCreateWithoutDetectionsInput, ad_campaignsUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: ad_campaignsCreateOrConnectWithoutDetectionsInput
    connect?: ad_campaignsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ad_campaignsUpdateOneRequiredWithoutDetectionsNestedInput = {
    create?: XOR<ad_campaignsCreateWithoutDetectionsInput, ad_campaignsUncheckedCreateWithoutDetectionsInput>
    connectOrCreate?: ad_campaignsCreateOrConnectWithoutDetectionsInput
    upsert?: ad_campaignsUpsertWithoutDetectionsInput
    connect?: ad_campaignsWhereUniqueInput
    update?: XOR<XOR<ad_campaignsUpdateToOneWithWhereWithoutDetectionsInput, ad_campaignsUpdateWithoutDetectionsInput>, ad_campaignsUncheckedUpdateWithoutDetectionsInput>
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type dooh_detectionCreateWithoutCampaignInput = {
    timestamp: Date | string
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
  }

  export type dooh_detectionUncheckedCreateWithoutCampaignInput = {
    id?: number
    timestamp: Date | string
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
  }

  export type dooh_detectionCreateOrConnectWithoutCampaignInput = {
    where: dooh_detectionWhereUniqueInput
    create: XOR<dooh_detectionCreateWithoutCampaignInput, dooh_detectionUncheckedCreateWithoutCampaignInput>
  }

  export type dooh_detectionCreateManyCampaignInputEnvelope = {
    data: dooh_detectionCreateManyCampaignInput | dooh_detectionCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type dooh_detectionUpsertWithWhereUniqueWithoutCampaignInput = {
    where: dooh_detectionWhereUniqueInput
    update: XOR<dooh_detectionUpdateWithoutCampaignInput, dooh_detectionUncheckedUpdateWithoutCampaignInput>
    create: XOR<dooh_detectionCreateWithoutCampaignInput, dooh_detectionUncheckedCreateWithoutCampaignInput>
  }

  export type dooh_detectionUpdateWithWhereUniqueWithoutCampaignInput = {
    where: dooh_detectionWhereUniqueInput
    data: XOR<dooh_detectionUpdateWithoutCampaignInput, dooh_detectionUncheckedUpdateWithoutCampaignInput>
  }

  export type dooh_detectionUpdateManyWithWhereWithoutCampaignInput = {
    where: dooh_detectionScalarWhereInput
    data: XOR<dooh_detectionUpdateManyMutationInput, dooh_detectionUncheckedUpdateManyWithoutCampaignInput>
  }

  export type dooh_detectionScalarWhereInput = {
    AND?: dooh_detectionScalarWhereInput | dooh_detectionScalarWhereInput[]
    OR?: dooh_detectionScalarWhereInput[]
    NOT?: dooh_detectionScalarWhereInput | dooh_detectionScalarWhereInput[]
    id?: IntFilter<"dooh_detection"> | number
    timestamp?: DateTimeFilter<"dooh_detection"> | Date | string
    bluetooth_id_hash?: StringFilter<"dooh_detection"> | string
    ad_id?: StringFilter<"dooh_detection"> | string
    age?: IntFilter<"dooh_detection"> | number
    race?: StringFilter<"dooh_detection"> | string
    gender?: StringFilter<"dooh_detection"> | string
  }

  export type ad_campaignsCreateWithoutDetectionsInput = {
    ad_id: string
    name: string
    category: string
  }

  export type ad_campaignsUncheckedCreateWithoutDetectionsInput = {
    ad_id: string
    name: string
    category: string
  }

  export type ad_campaignsCreateOrConnectWithoutDetectionsInput = {
    where: ad_campaignsWhereUniqueInput
    create: XOR<ad_campaignsCreateWithoutDetectionsInput, ad_campaignsUncheckedCreateWithoutDetectionsInput>
  }

  export type ad_campaignsUpsertWithoutDetectionsInput = {
    update: XOR<ad_campaignsUpdateWithoutDetectionsInput, ad_campaignsUncheckedUpdateWithoutDetectionsInput>
    create: XOR<ad_campaignsCreateWithoutDetectionsInput, ad_campaignsUncheckedCreateWithoutDetectionsInput>
    where?: ad_campaignsWhereInput
  }

  export type ad_campaignsUpdateToOneWithWhereWithoutDetectionsInput = {
    where?: ad_campaignsWhereInput
    data: XOR<ad_campaignsUpdateWithoutDetectionsInput, ad_campaignsUncheckedUpdateWithoutDetectionsInput>
  }

  export type ad_campaignsUpdateWithoutDetectionsInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type ad_campaignsUncheckedUpdateWithoutDetectionsInput = {
    ad_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type dooh_detectionCreateManyCampaignInput = {
    id?: number
    timestamp: Date | string
    bluetooth_id_hash: string
    age: number
    race: string
    gender: string
  }

  export type dooh_detectionUpdateWithoutCampaignInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type dooh_detectionUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
  }

  export type dooh_detectionUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    bluetooth_id_hash?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    race?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
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