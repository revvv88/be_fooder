
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kelas_Kereta
 * 
 */
export type Kelas_Kereta = $Result.DefaultSelection<Prisma.$Kelas_KeretaPayload>
/**
 * Model Gerbong
 * 
 */
export type Gerbong = $Result.DefaultSelection<Prisma.$GerbongPayload>
/**
 * Model Kursi
 * 
 */
export type Kursi = $Result.DefaultSelection<Prisma.$KursiPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Penumpang
 * 
 */
export type Penumpang = $Result.DefaultSelection<Prisma.$PenumpangPayload>
/**
 * Model Transaksi
 * 
 */
export type Transaksi = $Result.DefaultSelection<Prisma.$TransaksiPayload>
/**
 * Model Metode_Pembayaran
 * 
 */
export type Metode_Pembayaran = $Result.DefaultSelection<Prisma.$Metode_PembayaranPayload>
/**
 * Model Jadwal_Kereta
 * 
 */
export type Jadwal_Kereta = $Result.DefaultSelection<Prisma.$Jadwal_KeretaPayload>
/**
 * Model Stasiun
 * 
 */
export type Stasiun = $Result.DefaultSelection<Prisma.$StasiunPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const order_status: {
  NEW: 'NEW',
  PAID: 'PAID',
  DONE: 'DONE'
};

export type order_status = (typeof order_status)[keyof typeof order_status]


export const paymentmethod_tipe: {
  VIRTUAL: 'VIRTUAL',
  DEBIT: 'DEBIT'
};

export type paymentmethod_tipe = (typeof paymentmethod_tipe)[keyof typeof paymentmethod_tipe]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type order_status = $Enums.order_status

export const order_status: typeof $Enums.order_status

export type paymentmethod_tipe = $Enums.paymentmethod_tipe

export const paymentmethod_tipe: typeof $Enums.paymentmethod_tipe

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kelas_Kereta`: Exposes CRUD operations for the **Kelas_Kereta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kelas_Keretas
    * const kelas_Keretas = await prisma.kelas_Kereta.findMany()
    * ```
    */
  get kelas_Kereta(): Prisma.Kelas_KeretaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gerbong`: Exposes CRUD operations for the **Gerbong** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gerbongs
    * const gerbongs = await prisma.gerbong.findMany()
    * ```
    */
  get gerbong(): Prisma.GerbongDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kursi`: Exposes CRUD operations for the **Kursi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kursis
    * const kursis = await prisma.kursi.findMany()
    * ```
    */
  get kursi(): Prisma.KursiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.penumpang`: Exposes CRUD operations for the **Penumpang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Penumpangs
    * const penumpangs = await prisma.penumpang.findMany()
    * ```
    */
  get penumpang(): Prisma.PenumpangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **Transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.TransaksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metode_Pembayaran`: Exposes CRUD operations for the **Metode_Pembayaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metode_Pembayarans
    * const metode_Pembayarans = await prisma.metode_Pembayaran.findMany()
    * ```
    */
  get metode_Pembayaran(): Prisma.Metode_PembayaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal_Kereta`: Exposes CRUD operations for the **Jadwal_Kereta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwal_Keretas
    * const jadwal_Keretas = await prisma.jadwal_Kereta.findMany()
    * ```
    */
  get jadwal_Kereta(): Prisma.Jadwal_KeretaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stasiun`: Exposes CRUD operations for the **Stasiun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stasiuns
    * const stasiuns = await prisma.stasiun.findMany()
    * ```
    */
  get stasiun(): Prisma.StasiunDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
    User: 'User',
    Kelas_Kereta: 'Kelas_Kereta',
    Gerbong: 'Gerbong',
    Kursi: 'Kursi',
    Ticket: 'Ticket',
    Penumpang: 'Penumpang',
    Transaksi: 'Transaksi',
    Metode_Pembayaran: 'Metode_Pembayaran',
    Jadwal_Kereta: 'Jadwal_Kereta',
    Stasiun: 'Stasiun'
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
      modelProps: "user" | "kelas_Kereta" | "gerbong" | "kursi" | "ticket" | "penumpang" | "transaksi" | "metode_Pembayaran" | "jadwal_Kereta" | "stasiun"
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
      Kelas_Kereta: {
        payload: Prisma.$Kelas_KeretaPayload<ExtArgs>
        fields: Prisma.Kelas_KeretaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Kelas_KeretaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Kelas_KeretaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload>
          }
          findFirst: {
            args: Prisma.Kelas_KeretaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Kelas_KeretaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload>
          }
          findMany: {
            args: Prisma.Kelas_KeretaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload>[]
          }
          create: {
            args: Prisma.Kelas_KeretaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload>
          }
          createMany: {
            args: Prisma.Kelas_KeretaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Kelas_KeretaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload>
          }
          update: {
            args: Prisma.Kelas_KeretaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload>
          }
          deleteMany: {
            args: Prisma.Kelas_KeretaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Kelas_KeretaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Kelas_KeretaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Kelas_KeretaPayload>
          }
          aggregate: {
            args: Prisma.Kelas_KeretaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKelas_Kereta>
          }
          groupBy: {
            args: Prisma.Kelas_KeretaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Kelas_KeretaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Kelas_KeretaCountArgs<ExtArgs>
            result: $Utils.Optional<Kelas_KeretaCountAggregateOutputType> | number
          }
        }
      }
      Gerbong: {
        payload: Prisma.$GerbongPayload<ExtArgs>
        fields: Prisma.GerbongFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GerbongFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GerbongFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          findFirst: {
            args: Prisma.GerbongFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GerbongFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          findMany: {
            args: Prisma.GerbongFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>[]
          }
          create: {
            args: Prisma.GerbongCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          createMany: {
            args: Prisma.GerbongCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GerbongDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          update: {
            args: Prisma.GerbongUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          deleteMany: {
            args: Prisma.GerbongDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GerbongUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GerbongUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GerbongPayload>
          }
          aggregate: {
            args: Prisma.GerbongAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGerbong>
          }
          groupBy: {
            args: Prisma.GerbongGroupByArgs<ExtArgs>
            result: $Utils.Optional<GerbongGroupByOutputType>[]
          }
          count: {
            args: Prisma.GerbongCountArgs<ExtArgs>
            result: $Utils.Optional<GerbongCountAggregateOutputType> | number
          }
        }
      }
      Kursi: {
        payload: Prisma.$KursiPayload<ExtArgs>
        fields: Prisma.KursiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KursiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KursiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          findFirst: {
            args: Prisma.KursiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KursiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          findMany: {
            args: Prisma.KursiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>[]
          }
          create: {
            args: Prisma.KursiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          createMany: {
            args: Prisma.KursiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KursiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          update: {
            args: Prisma.KursiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          deleteMany: {
            args: Prisma.KursiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KursiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KursiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursiPayload>
          }
          aggregate: {
            args: Prisma.KursiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKursi>
          }
          groupBy: {
            args: Prisma.KursiGroupByArgs<ExtArgs>
            result: $Utils.Optional<KursiGroupByOutputType>[]
          }
          count: {
            args: Prisma.KursiCountArgs<ExtArgs>
            result: $Utils.Optional<KursiCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Penumpang: {
        payload: Prisma.$PenumpangPayload<ExtArgs>
        fields: Prisma.PenumpangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PenumpangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PenumpangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload>
          }
          findFirst: {
            args: Prisma.PenumpangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PenumpangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload>
          }
          findMany: {
            args: Prisma.PenumpangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload>[]
          }
          create: {
            args: Prisma.PenumpangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload>
          }
          createMany: {
            args: Prisma.PenumpangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PenumpangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload>
          }
          update: {
            args: Prisma.PenumpangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload>
          }
          deleteMany: {
            args: Prisma.PenumpangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PenumpangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PenumpangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PenumpangPayload>
          }
          aggregate: {
            args: Prisma.PenumpangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePenumpang>
          }
          groupBy: {
            args: Prisma.PenumpangGroupByArgs<ExtArgs>
            result: $Utils.Optional<PenumpangGroupByOutputType>[]
          }
          count: {
            args: Prisma.PenumpangCountArgs<ExtArgs>
            result: $Utils.Optional<PenumpangCountAggregateOutputType> | number
          }
        }
      }
      Transaksi: {
        payload: Prisma.$TransaksiPayload<ExtArgs>
        fields: Prisma.TransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findFirst: {
            args: Prisma.TransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findMany: {
            args: Prisma.TransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          create: {
            args: Prisma.TransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          createMany: {
            args: Prisma.TransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          update: {
            args: Prisma.TransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.TransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
      Metode_Pembayaran: {
        payload: Prisma.$Metode_PembayaranPayload<ExtArgs>
        fields: Prisma.Metode_PembayaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Metode_PembayaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Metode_PembayaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload>
          }
          findFirst: {
            args: Prisma.Metode_PembayaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Metode_PembayaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload>
          }
          findMany: {
            args: Prisma.Metode_PembayaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload>[]
          }
          create: {
            args: Prisma.Metode_PembayaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload>
          }
          createMany: {
            args: Prisma.Metode_PembayaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Metode_PembayaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload>
          }
          update: {
            args: Prisma.Metode_PembayaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload>
          }
          deleteMany: {
            args: Prisma.Metode_PembayaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Metode_PembayaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Metode_PembayaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Metode_PembayaranPayload>
          }
          aggregate: {
            args: Prisma.Metode_PembayaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetode_Pembayaran>
          }
          groupBy: {
            args: Prisma.Metode_PembayaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<Metode_PembayaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.Metode_PembayaranCountArgs<ExtArgs>
            result: $Utils.Optional<Metode_PembayaranCountAggregateOutputType> | number
          }
        }
      }
      Jadwal_Kereta: {
        payload: Prisma.$Jadwal_KeretaPayload<ExtArgs>
        fields: Prisma.Jadwal_KeretaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Jadwal_KeretaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Jadwal_KeretaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload>
          }
          findFirst: {
            args: Prisma.Jadwal_KeretaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Jadwal_KeretaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload>
          }
          findMany: {
            args: Prisma.Jadwal_KeretaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload>[]
          }
          create: {
            args: Prisma.Jadwal_KeretaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload>
          }
          createMany: {
            args: Prisma.Jadwal_KeretaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.Jadwal_KeretaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload>
          }
          update: {
            args: Prisma.Jadwal_KeretaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload>
          }
          deleteMany: {
            args: Prisma.Jadwal_KeretaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Jadwal_KeretaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.Jadwal_KeretaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Jadwal_KeretaPayload>
          }
          aggregate: {
            args: Prisma.Jadwal_KeretaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal_Kereta>
          }
          groupBy: {
            args: Prisma.Jadwal_KeretaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Jadwal_KeretaGroupByOutputType>[]
          }
          count: {
            args: Prisma.Jadwal_KeretaCountArgs<ExtArgs>
            result: $Utils.Optional<Jadwal_KeretaCountAggregateOutputType> | number
          }
        }
      }
      Stasiun: {
        payload: Prisma.$StasiunPayload<ExtArgs>
        fields: Prisma.StasiunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StasiunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StasiunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload>
          }
          findFirst: {
            args: Prisma.StasiunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StasiunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload>
          }
          findMany: {
            args: Prisma.StasiunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload>[]
          }
          create: {
            args: Prisma.StasiunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload>
          }
          createMany: {
            args: Prisma.StasiunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StasiunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload>
          }
          update: {
            args: Prisma.StasiunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload>
          }
          deleteMany: {
            args: Prisma.StasiunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StasiunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StasiunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StasiunPayload>
          }
          aggregate: {
            args: Prisma.StasiunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStasiun>
          }
          groupBy: {
            args: Prisma.StasiunGroupByArgs<ExtArgs>
            result: $Utils.Optional<StasiunGroupByOutputType>[]
          }
          count: {
            args: Prisma.StasiunCountArgs<ExtArgs>
            result: $Utils.Optional<StasiunCountAggregateOutputType> | number
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
    user?: UserOmit
    kelas_Kereta?: Kelas_KeretaOmit
    gerbong?: GerbongOmit
    kursi?: KursiOmit
    ticket?: TicketOmit
    penumpang?: PenumpangOmit
    transaksi?: TransaksiOmit
    metode_Pembayaran?: Metode_PembayaranOmit
    jadwal_Kereta?: Jadwal_KeretaOmit
    stasiun?: StasiunOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tickets: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
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
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type Kelas_KeretaCountOutputType
   */

  export type Kelas_KeretaCountOutputType = {
    gerbong_list: number
    tickets: number
    jadwal_kereta: number
  }

  export type Kelas_KeretaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gerbong_list?: boolean | Kelas_KeretaCountOutputTypeCountGerbong_listArgs
    tickets?: boolean | Kelas_KeretaCountOutputTypeCountTicketsArgs
    jadwal_kereta?: boolean | Kelas_KeretaCountOutputTypeCountJadwal_keretaArgs
  }

  // Custom InputTypes
  /**
   * Kelas_KeretaCountOutputType without action
   */
  export type Kelas_KeretaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_KeretaCountOutputType
     */
    select?: Kelas_KeretaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Kelas_KeretaCountOutputType without action
   */
  export type Kelas_KeretaCountOutputTypeCountGerbong_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GerbongWhereInput
  }

  /**
   * Kelas_KeretaCountOutputType without action
   */
  export type Kelas_KeretaCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * Kelas_KeretaCountOutputType without action
   */
  export type Kelas_KeretaCountOutputTypeCountJadwal_keretaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Jadwal_KeretaWhereInput
  }


  /**
   * Count Type GerbongCountOutputType
   */

  export type GerbongCountOutputType = {
    kursi_list: number
    Jadwal_Kereta: number
  }

  export type GerbongCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursi_list?: boolean | GerbongCountOutputTypeCountKursi_listArgs
    Jadwal_Kereta?: boolean | GerbongCountOutputTypeCountJadwal_KeretaArgs
  }

  // Custom InputTypes
  /**
   * GerbongCountOutputType without action
   */
  export type GerbongCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GerbongCountOutputType
     */
    select?: GerbongCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GerbongCountOutputType without action
   */
  export type GerbongCountOutputTypeCountKursi_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KursiWhereInput
  }

  /**
   * GerbongCountOutputType without action
   */
  export type GerbongCountOutputTypeCountJadwal_KeretaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Jadwal_KeretaWhereInput
  }


  /**
   * Count Type KursiCountOutputType
   */

  export type KursiCountOutputType = {
    tickets: number
  }

  export type KursiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | KursiCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * KursiCountOutputType without action
   */
  export type KursiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KursiCountOutputType
     */
    select?: KursiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KursiCountOutputType without action
   */
  export type KursiCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TransaksiCountOutputType
   */

  export type TransaksiCountOutputType = {
    tickets: number
  }

  export type TransaksiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | TransaksiCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiCountOutputType
     */
    select?: TransaksiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type Metode_PembayaranCountOutputType
   */

  export type Metode_PembayaranCountOutputType = {
    transaksi_list: number
  }

  export type Metode_PembayaranCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi_list?: boolean | Metode_PembayaranCountOutputTypeCountTransaksi_listArgs
  }

  // Custom InputTypes
  /**
   * Metode_PembayaranCountOutputType without action
   */
  export type Metode_PembayaranCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_PembayaranCountOutputType
     */
    select?: Metode_PembayaranCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Metode_PembayaranCountOutputType without action
   */
  export type Metode_PembayaranCountOutputTypeCountTransaksi_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
  }


  /**
   * Count Type Jadwal_KeretaCountOutputType
   */

  export type Jadwal_KeretaCountOutputType = {
    tickets: number
  }

  export type Jadwal_KeretaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Jadwal_KeretaCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * Jadwal_KeretaCountOutputType without action
   */
  export type Jadwal_KeretaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_KeretaCountOutputType
     */
    select?: Jadwal_KeretaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Jadwal_KeretaCountOutputType without action
   */
  export type Jadwal_KeretaCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type StasiunCountOutputType
   */

  export type StasiunCountOutputType = {
    jadwal_berangkat: number
    jadwal_tujuan: number
  }

  export type StasiunCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal_berangkat?: boolean | StasiunCountOutputTypeCountJadwal_berangkatArgs
    jadwal_tujuan?: boolean | StasiunCountOutputTypeCountJadwal_tujuanArgs
  }

  // Custom InputTypes
  /**
   * StasiunCountOutputType without action
   */
  export type StasiunCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StasiunCountOutputType
     */
    select?: StasiunCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StasiunCountOutputType without action
   */
  export type StasiunCountOutputTypeCountJadwal_berangkatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Jadwal_KeretaWhereInput
  }

  /**
   * StasiunCountOutputType without action
   */
  export type StasiunCountOutputTypeCountJadwal_tujuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Jadwal_KeretaWhereInput
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
    name: string | null
    nomor_identitas: string | null
    nomor_hp: string | null
    email: string | null
    alamat: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    nomor_identitas: string | null
    nomor_hp: string | null
    email: string | null
    alamat: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    nomor_identitas: number
    nomor_hp: number
    email: number
    alamat: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
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
    name?: true
    nomor_identitas?: true
    nomor_hp?: true
    email?: true
    alamat?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    nomor_identitas?: true
    nomor_hp?: true
    email?: true
    alamat?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    nomor_identitas?: true
    nomor_hp?: true
    email?: true
    alamat?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    nomor_identitas: string
    nomor_hp: string
    email: string
    alamat: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    nomor_identitas?: boolean
    nomor_hp?: boolean
    email?: boolean
    alamat?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    nomor_identitas?: boolean
    nomor_hp?: boolean
    email?: boolean
    alamat?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nomor_identitas" | "nomor_hp" | "email" | "alamat" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      nomor_identitas: string
      nomor_hp: string
      email: string
      alamat: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
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
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly nomor_identitas: FieldRef<"User", 'String'>
    readonly nomor_hp: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly alamat: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
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
   * Model Kelas_Kereta
   */

  export type AggregateKelas_Kereta = {
    _count: Kelas_KeretaCountAggregateOutputType | null
    _avg: Kelas_KeretaAvgAggregateOutputType | null
    _sum: Kelas_KeretaSumAggregateOutputType | null
    _min: Kelas_KeretaMinAggregateOutputType | null
    _max: Kelas_KeretaMaxAggregateOutputType | null
  }

  export type Kelas_KeretaAvgAggregateOutputType = {
    id: number | null
  }

  export type Kelas_KeretaSumAggregateOutputType = {
    id: number | null
  }

  export type Kelas_KeretaMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type Kelas_KeretaMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type Kelas_KeretaCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type Kelas_KeretaAvgAggregateInputType = {
    id?: true
  }

  export type Kelas_KeretaSumAggregateInputType = {
    id?: true
  }

  export type Kelas_KeretaMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type Kelas_KeretaMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type Kelas_KeretaCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type Kelas_KeretaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas_Kereta to aggregate.
     */
    where?: Kelas_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas_Keretas to fetch.
     */
    orderBy?: Kelas_KeretaOrderByWithRelationInput | Kelas_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Kelas_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas_Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kelas_Keretas
    **/
    _count?: true | Kelas_KeretaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Kelas_KeretaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Kelas_KeretaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Kelas_KeretaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Kelas_KeretaMaxAggregateInputType
  }

  export type GetKelas_KeretaAggregateType<T extends Kelas_KeretaAggregateArgs> = {
        [P in keyof T & keyof AggregateKelas_Kereta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKelas_Kereta[P]>
      : GetScalarType<T[P], AggregateKelas_Kereta[P]>
  }




  export type Kelas_KeretaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Kelas_KeretaWhereInput
    orderBy?: Kelas_KeretaOrderByWithAggregationInput | Kelas_KeretaOrderByWithAggregationInput[]
    by: Kelas_KeretaScalarFieldEnum[] | Kelas_KeretaScalarFieldEnum
    having?: Kelas_KeretaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Kelas_KeretaCountAggregateInputType | true
    _avg?: Kelas_KeretaAvgAggregateInputType
    _sum?: Kelas_KeretaSumAggregateInputType
    _min?: Kelas_KeretaMinAggregateInputType
    _max?: Kelas_KeretaMaxAggregateInputType
  }

  export type Kelas_KeretaGroupByOutputType = {
    id: number
    nama: string
    _count: Kelas_KeretaCountAggregateOutputType | null
    _avg: Kelas_KeretaAvgAggregateOutputType | null
    _sum: Kelas_KeretaSumAggregateOutputType | null
    _min: Kelas_KeretaMinAggregateOutputType | null
    _max: Kelas_KeretaMaxAggregateOutputType | null
  }

  type GetKelas_KeretaGroupByPayload<T extends Kelas_KeretaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Kelas_KeretaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Kelas_KeretaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Kelas_KeretaGroupByOutputType[P]>
            : GetScalarType<T[P], Kelas_KeretaGroupByOutputType[P]>
        }
      >
    >


  export type Kelas_KeretaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    gerbong_list?: boolean | Kelas_Kereta$gerbong_listArgs<ExtArgs>
    tickets?: boolean | Kelas_Kereta$ticketsArgs<ExtArgs>
    jadwal_kereta?: boolean | Kelas_Kereta$jadwal_keretaArgs<ExtArgs>
    _count?: boolean | Kelas_KeretaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kelas_Kereta"]>



  export type Kelas_KeretaSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type Kelas_KeretaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["kelas_Kereta"]>
  export type Kelas_KeretaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gerbong_list?: boolean | Kelas_Kereta$gerbong_listArgs<ExtArgs>
    tickets?: boolean | Kelas_Kereta$ticketsArgs<ExtArgs>
    jadwal_kereta?: boolean | Kelas_Kereta$jadwal_keretaArgs<ExtArgs>
    _count?: boolean | Kelas_KeretaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Kelas_KeretaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kelas_Kereta"
    objects: {
      gerbong_list: Prisma.$GerbongPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      jadwal_kereta: Prisma.$Jadwal_KeretaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
    }, ExtArgs["result"]["kelas_Kereta"]>
    composites: {}
  }

  type Kelas_KeretaGetPayload<S extends boolean | null | undefined | Kelas_KeretaDefaultArgs> = $Result.GetResult<Prisma.$Kelas_KeretaPayload, S>

  type Kelas_KeretaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Kelas_KeretaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Kelas_KeretaCountAggregateInputType | true
    }

  export interface Kelas_KeretaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kelas_Kereta'], meta: { name: 'Kelas_Kereta' } }
    /**
     * Find zero or one Kelas_Kereta that matches the filter.
     * @param {Kelas_KeretaFindUniqueArgs} args - Arguments to find a Kelas_Kereta
     * @example
     * // Get one Kelas_Kereta
     * const kelas_Kereta = await prisma.kelas_Kereta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Kelas_KeretaFindUniqueArgs>(args: SelectSubset<T, Kelas_KeretaFindUniqueArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kelas_Kereta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Kelas_KeretaFindUniqueOrThrowArgs} args - Arguments to find a Kelas_Kereta
     * @example
     * // Get one Kelas_Kereta
     * const kelas_Kereta = await prisma.kelas_Kereta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Kelas_KeretaFindUniqueOrThrowArgs>(args: SelectSubset<T, Kelas_KeretaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas_Kereta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kelas_KeretaFindFirstArgs} args - Arguments to find a Kelas_Kereta
     * @example
     * // Get one Kelas_Kereta
     * const kelas_Kereta = await prisma.kelas_Kereta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Kelas_KeretaFindFirstArgs>(args?: SelectSubset<T, Kelas_KeretaFindFirstArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kelas_Kereta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kelas_KeretaFindFirstOrThrowArgs} args - Arguments to find a Kelas_Kereta
     * @example
     * // Get one Kelas_Kereta
     * const kelas_Kereta = await prisma.kelas_Kereta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Kelas_KeretaFindFirstOrThrowArgs>(args?: SelectSubset<T, Kelas_KeretaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kelas_Keretas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kelas_KeretaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kelas_Keretas
     * const kelas_Keretas = await prisma.kelas_Kereta.findMany()
     * 
     * // Get first 10 Kelas_Keretas
     * const kelas_Keretas = await prisma.kelas_Kereta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kelas_KeretaWithIdOnly = await prisma.kelas_Kereta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Kelas_KeretaFindManyArgs>(args?: SelectSubset<T, Kelas_KeretaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kelas_Kereta.
     * @param {Kelas_KeretaCreateArgs} args - Arguments to create a Kelas_Kereta.
     * @example
     * // Create one Kelas_Kereta
     * const Kelas_Kereta = await prisma.kelas_Kereta.create({
     *   data: {
     *     // ... data to create a Kelas_Kereta
     *   }
     * })
     * 
     */
    create<T extends Kelas_KeretaCreateArgs>(args: SelectSubset<T, Kelas_KeretaCreateArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kelas_Keretas.
     * @param {Kelas_KeretaCreateManyArgs} args - Arguments to create many Kelas_Keretas.
     * @example
     * // Create many Kelas_Keretas
     * const kelas_Kereta = await prisma.kelas_Kereta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Kelas_KeretaCreateManyArgs>(args?: SelectSubset<T, Kelas_KeretaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kelas_Kereta.
     * @param {Kelas_KeretaDeleteArgs} args - Arguments to delete one Kelas_Kereta.
     * @example
     * // Delete one Kelas_Kereta
     * const Kelas_Kereta = await prisma.kelas_Kereta.delete({
     *   where: {
     *     // ... filter to delete one Kelas_Kereta
     *   }
     * })
     * 
     */
    delete<T extends Kelas_KeretaDeleteArgs>(args: SelectSubset<T, Kelas_KeretaDeleteArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kelas_Kereta.
     * @param {Kelas_KeretaUpdateArgs} args - Arguments to update one Kelas_Kereta.
     * @example
     * // Update one Kelas_Kereta
     * const kelas_Kereta = await prisma.kelas_Kereta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Kelas_KeretaUpdateArgs>(args: SelectSubset<T, Kelas_KeretaUpdateArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kelas_Keretas.
     * @param {Kelas_KeretaDeleteManyArgs} args - Arguments to filter Kelas_Keretas to delete.
     * @example
     * // Delete a few Kelas_Keretas
     * const { count } = await prisma.kelas_Kereta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Kelas_KeretaDeleteManyArgs>(args?: SelectSubset<T, Kelas_KeretaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kelas_Keretas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kelas_KeretaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kelas_Keretas
     * const kelas_Kereta = await prisma.kelas_Kereta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Kelas_KeretaUpdateManyArgs>(args: SelectSubset<T, Kelas_KeretaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kelas_Kereta.
     * @param {Kelas_KeretaUpsertArgs} args - Arguments to update or create a Kelas_Kereta.
     * @example
     * // Update or create a Kelas_Kereta
     * const kelas_Kereta = await prisma.kelas_Kereta.upsert({
     *   create: {
     *     // ... data to create a Kelas_Kereta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kelas_Kereta we want to update
     *   }
     * })
     */
    upsert<T extends Kelas_KeretaUpsertArgs>(args: SelectSubset<T, Kelas_KeretaUpsertArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kelas_Keretas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kelas_KeretaCountArgs} args - Arguments to filter Kelas_Keretas to count.
     * @example
     * // Count the number of Kelas_Keretas
     * const count = await prisma.kelas_Kereta.count({
     *   where: {
     *     // ... the filter for the Kelas_Keretas we want to count
     *   }
     * })
    **/
    count<T extends Kelas_KeretaCountArgs>(
      args?: Subset<T, Kelas_KeretaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Kelas_KeretaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kelas_Kereta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kelas_KeretaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Kelas_KeretaAggregateArgs>(args: Subset<T, Kelas_KeretaAggregateArgs>): Prisma.PrismaPromise<GetKelas_KeretaAggregateType<T>>

    /**
     * Group by Kelas_Kereta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kelas_KeretaGroupByArgs} args - Group by arguments.
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
      T extends Kelas_KeretaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Kelas_KeretaGroupByArgs['orderBy'] }
        : { orderBy?: Kelas_KeretaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Kelas_KeretaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKelas_KeretaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kelas_Kereta model
   */
  readonly fields: Kelas_KeretaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kelas_Kereta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Kelas_KeretaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gerbong_list<T extends Kelas_Kereta$gerbong_listArgs<ExtArgs> = {}>(args?: Subset<T, Kelas_Kereta$gerbong_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Kelas_Kereta$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Kelas_Kereta$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jadwal_kereta<T extends Kelas_Kereta$jadwal_keretaArgs<ExtArgs> = {}>(args?: Subset<T, Kelas_Kereta$jadwal_keretaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kelas_Kereta model
   */
  interface Kelas_KeretaFieldRefs {
    readonly id: FieldRef<"Kelas_Kereta", 'Int'>
    readonly nama: FieldRef<"Kelas_Kereta", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kelas_Kereta findUnique
   */
  export type Kelas_KeretaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kelas_Kereta to fetch.
     */
    where: Kelas_KeretaWhereUniqueInput
  }

  /**
   * Kelas_Kereta findUniqueOrThrow
   */
  export type Kelas_KeretaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kelas_Kereta to fetch.
     */
    where: Kelas_KeretaWhereUniqueInput
  }

  /**
   * Kelas_Kereta findFirst
   */
  export type Kelas_KeretaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kelas_Kereta to fetch.
     */
    where?: Kelas_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas_Keretas to fetch.
     */
    orderBy?: Kelas_KeretaOrderByWithRelationInput | Kelas_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas_Keretas.
     */
    cursor?: Kelas_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas_Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas_Keretas.
     */
    distinct?: Kelas_KeretaScalarFieldEnum | Kelas_KeretaScalarFieldEnum[]
  }

  /**
   * Kelas_Kereta findFirstOrThrow
   */
  export type Kelas_KeretaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kelas_Kereta to fetch.
     */
    where?: Kelas_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas_Keretas to fetch.
     */
    orderBy?: Kelas_KeretaOrderByWithRelationInput | Kelas_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kelas_Keretas.
     */
    cursor?: Kelas_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas_Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kelas_Keretas.
     */
    distinct?: Kelas_KeretaScalarFieldEnum | Kelas_KeretaScalarFieldEnum[]
  }

  /**
   * Kelas_Kereta findMany
   */
  export type Kelas_KeretaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Kelas_Keretas to fetch.
     */
    where?: Kelas_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kelas_Keretas to fetch.
     */
    orderBy?: Kelas_KeretaOrderByWithRelationInput | Kelas_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kelas_Keretas.
     */
    cursor?: Kelas_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kelas_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kelas_Keretas.
     */
    skip?: number
    distinct?: Kelas_KeretaScalarFieldEnum | Kelas_KeretaScalarFieldEnum[]
  }

  /**
   * Kelas_Kereta create
   */
  export type Kelas_KeretaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * The data needed to create a Kelas_Kereta.
     */
    data: XOR<Kelas_KeretaCreateInput, Kelas_KeretaUncheckedCreateInput>
  }

  /**
   * Kelas_Kereta createMany
   */
  export type Kelas_KeretaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kelas_Keretas.
     */
    data: Kelas_KeretaCreateManyInput | Kelas_KeretaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kelas_Kereta update
   */
  export type Kelas_KeretaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * The data needed to update a Kelas_Kereta.
     */
    data: XOR<Kelas_KeretaUpdateInput, Kelas_KeretaUncheckedUpdateInput>
    /**
     * Choose, which Kelas_Kereta to update.
     */
    where: Kelas_KeretaWhereUniqueInput
  }

  /**
   * Kelas_Kereta updateMany
   */
  export type Kelas_KeretaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kelas_Keretas.
     */
    data: XOR<Kelas_KeretaUpdateManyMutationInput, Kelas_KeretaUncheckedUpdateManyInput>
    /**
     * Filter which Kelas_Keretas to update
     */
    where?: Kelas_KeretaWhereInput
  }

  /**
   * Kelas_Kereta upsert
   */
  export type Kelas_KeretaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * The filter to search for the Kelas_Kereta to update in case it exists.
     */
    where: Kelas_KeretaWhereUniqueInput
    /**
     * In case the Kelas_Kereta found by the `where` argument doesn't exist, create a new Kelas_Kereta with this data.
     */
    create: XOR<Kelas_KeretaCreateInput, Kelas_KeretaUncheckedCreateInput>
    /**
     * In case the Kelas_Kereta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Kelas_KeretaUpdateInput, Kelas_KeretaUncheckedUpdateInput>
  }

  /**
   * Kelas_Kereta delete
   */
  export type Kelas_KeretaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
    /**
     * Filter which Kelas_Kereta to delete.
     */
    where: Kelas_KeretaWhereUniqueInput
  }

  /**
   * Kelas_Kereta deleteMany
   */
  export type Kelas_KeretaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kelas_Keretas to delete
     */
    where?: Kelas_KeretaWhereInput
  }

  /**
   * Kelas_Kereta.gerbong_list
   */
  export type Kelas_Kereta$gerbong_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    where?: GerbongWhereInput
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    cursor?: GerbongWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Kelas_Kereta.tickets
   */
  export type Kelas_Kereta$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Kelas_Kereta.jadwal_kereta
   */
  export type Kelas_Kereta$jadwal_keretaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    where?: Jadwal_KeretaWhereInput
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    cursor?: Jadwal_KeretaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jadwal_KeretaScalarFieldEnum | Jadwal_KeretaScalarFieldEnum[]
  }

  /**
   * Kelas_Kereta without action
   */
  export type Kelas_KeretaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kelas_Kereta
     */
    select?: Kelas_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kelas_Kereta
     */
    omit?: Kelas_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Kelas_KeretaInclude<ExtArgs> | null
  }


  /**
   * Model Gerbong
   */

  export type AggregateGerbong = {
    _count: GerbongCountAggregateOutputType | null
    _avg: GerbongAvgAggregateOutputType | null
    _sum: GerbongSumAggregateOutputType | null
    _min: GerbongMinAggregateOutputType | null
    _max: GerbongMaxAggregateOutputType | null
  }

  export type GerbongAvgAggregateOutputType = {
    id: number | null
    kelas_kereta_id: number | null
  }

  export type GerbongSumAggregateOutputType = {
    id: number | null
    kelas_kereta_id: number | null
  }

  export type GerbongMinAggregateOutputType = {
    id: number | null
    nama: string | null
    kelas_kereta_id: number | null
  }

  export type GerbongMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    kelas_kereta_id: number | null
  }

  export type GerbongCountAggregateOutputType = {
    id: number
    nama: number
    kelas_kereta_id: number
    _all: number
  }


  export type GerbongAvgAggregateInputType = {
    id?: true
    kelas_kereta_id?: true
  }

  export type GerbongSumAggregateInputType = {
    id?: true
    kelas_kereta_id?: true
  }

  export type GerbongMinAggregateInputType = {
    id?: true
    nama?: true
    kelas_kereta_id?: true
  }

  export type GerbongMaxAggregateInputType = {
    id?: true
    nama?: true
    kelas_kereta_id?: true
  }

  export type GerbongCountAggregateInputType = {
    id?: true
    nama?: true
    kelas_kereta_id?: true
    _all?: true
  }

  export type GerbongAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gerbong to aggregate.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gerbongs
    **/
    _count?: true | GerbongCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GerbongAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GerbongSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GerbongMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GerbongMaxAggregateInputType
  }

  export type GetGerbongAggregateType<T extends GerbongAggregateArgs> = {
        [P in keyof T & keyof AggregateGerbong]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGerbong[P]>
      : GetScalarType<T[P], AggregateGerbong[P]>
  }




  export type GerbongGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GerbongWhereInput
    orderBy?: GerbongOrderByWithAggregationInput | GerbongOrderByWithAggregationInput[]
    by: GerbongScalarFieldEnum[] | GerbongScalarFieldEnum
    having?: GerbongScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GerbongCountAggregateInputType | true
    _avg?: GerbongAvgAggregateInputType
    _sum?: GerbongSumAggregateInputType
    _min?: GerbongMinAggregateInputType
    _max?: GerbongMaxAggregateInputType
  }

  export type GerbongGroupByOutputType = {
    id: number
    nama: string
    kelas_kereta_id: number
    _count: GerbongCountAggregateOutputType | null
    _avg: GerbongAvgAggregateOutputType | null
    _sum: GerbongSumAggregateOutputType | null
    _min: GerbongMinAggregateOutputType | null
    _max: GerbongMaxAggregateOutputType | null
  }

  type GetGerbongGroupByPayload<T extends GerbongGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GerbongGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GerbongGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GerbongGroupByOutputType[P]>
            : GetScalarType<T[P], GerbongGroupByOutputType[P]>
        }
      >
    >


  export type GerbongSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kelas_kereta_id?: boolean
    kelas_kereta?: boolean | Kelas_KeretaDefaultArgs<ExtArgs>
    kursi_list?: boolean | Gerbong$kursi_listArgs<ExtArgs>
    Jadwal_Kereta?: boolean | Gerbong$Jadwal_KeretaArgs<ExtArgs>
    _count?: boolean | GerbongCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gerbong"]>



  export type GerbongSelectScalar = {
    id?: boolean
    nama?: boolean
    kelas_kereta_id?: boolean
  }

  export type GerbongOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kelas_kereta_id", ExtArgs["result"]["gerbong"]>
  export type GerbongInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kelas_kereta?: boolean | Kelas_KeretaDefaultArgs<ExtArgs>
    kursi_list?: boolean | Gerbong$kursi_listArgs<ExtArgs>
    Jadwal_Kereta?: boolean | Gerbong$Jadwal_KeretaArgs<ExtArgs>
    _count?: boolean | GerbongCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GerbongPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gerbong"
    objects: {
      kelas_kereta: Prisma.$Kelas_KeretaPayload<ExtArgs>
      kursi_list: Prisma.$KursiPayload<ExtArgs>[]
      Jadwal_Kereta: Prisma.$Jadwal_KeretaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      kelas_kereta_id: number
    }, ExtArgs["result"]["gerbong"]>
    composites: {}
  }

  type GerbongGetPayload<S extends boolean | null | undefined | GerbongDefaultArgs> = $Result.GetResult<Prisma.$GerbongPayload, S>

  type GerbongCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GerbongFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GerbongCountAggregateInputType | true
    }

  export interface GerbongDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gerbong'], meta: { name: 'Gerbong' } }
    /**
     * Find zero or one Gerbong that matches the filter.
     * @param {GerbongFindUniqueArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GerbongFindUniqueArgs>(args: SelectSubset<T, GerbongFindUniqueArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gerbong that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GerbongFindUniqueOrThrowArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GerbongFindUniqueOrThrowArgs>(args: SelectSubset<T, GerbongFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gerbong that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongFindFirstArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GerbongFindFirstArgs>(args?: SelectSubset<T, GerbongFindFirstArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gerbong that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongFindFirstOrThrowArgs} args - Arguments to find a Gerbong
     * @example
     * // Get one Gerbong
     * const gerbong = await prisma.gerbong.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GerbongFindFirstOrThrowArgs>(args?: SelectSubset<T, GerbongFindFirstOrThrowArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gerbongs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gerbongs
     * const gerbongs = await prisma.gerbong.findMany()
     * 
     * // Get first 10 Gerbongs
     * const gerbongs = await prisma.gerbong.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gerbongWithIdOnly = await prisma.gerbong.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GerbongFindManyArgs>(args?: SelectSubset<T, GerbongFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gerbong.
     * @param {GerbongCreateArgs} args - Arguments to create a Gerbong.
     * @example
     * // Create one Gerbong
     * const Gerbong = await prisma.gerbong.create({
     *   data: {
     *     // ... data to create a Gerbong
     *   }
     * })
     * 
     */
    create<T extends GerbongCreateArgs>(args: SelectSubset<T, GerbongCreateArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gerbongs.
     * @param {GerbongCreateManyArgs} args - Arguments to create many Gerbongs.
     * @example
     * // Create many Gerbongs
     * const gerbong = await prisma.gerbong.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GerbongCreateManyArgs>(args?: SelectSubset<T, GerbongCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gerbong.
     * @param {GerbongDeleteArgs} args - Arguments to delete one Gerbong.
     * @example
     * // Delete one Gerbong
     * const Gerbong = await prisma.gerbong.delete({
     *   where: {
     *     // ... filter to delete one Gerbong
     *   }
     * })
     * 
     */
    delete<T extends GerbongDeleteArgs>(args: SelectSubset<T, GerbongDeleteArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gerbong.
     * @param {GerbongUpdateArgs} args - Arguments to update one Gerbong.
     * @example
     * // Update one Gerbong
     * const gerbong = await prisma.gerbong.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GerbongUpdateArgs>(args: SelectSubset<T, GerbongUpdateArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gerbongs.
     * @param {GerbongDeleteManyArgs} args - Arguments to filter Gerbongs to delete.
     * @example
     * // Delete a few Gerbongs
     * const { count } = await prisma.gerbong.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GerbongDeleteManyArgs>(args?: SelectSubset<T, GerbongDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gerbongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gerbongs
     * const gerbong = await prisma.gerbong.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GerbongUpdateManyArgs>(args: SelectSubset<T, GerbongUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gerbong.
     * @param {GerbongUpsertArgs} args - Arguments to update or create a Gerbong.
     * @example
     * // Update or create a Gerbong
     * const gerbong = await prisma.gerbong.upsert({
     *   create: {
     *     // ... data to create a Gerbong
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gerbong we want to update
     *   }
     * })
     */
    upsert<T extends GerbongUpsertArgs>(args: SelectSubset<T, GerbongUpsertArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gerbongs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongCountArgs} args - Arguments to filter Gerbongs to count.
     * @example
     * // Count the number of Gerbongs
     * const count = await prisma.gerbong.count({
     *   where: {
     *     // ... the filter for the Gerbongs we want to count
     *   }
     * })
    **/
    count<T extends GerbongCountArgs>(
      args?: Subset<T, GerbongCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GerbongCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gerbong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GerbongAggregateArgs>(args: Subset<T, GerbongAggregateArgs>): Prisma.PrismaPromise<GetGerbongAggregateType<T>>

    /**
     * Group by Gerbong.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GerbongGroupByArgs} args - Group by arguments.
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
      T extends GerbongGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GerbongGroupByArgs['orderBy'] }
        : { orderBy?: GerbongGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GerbongGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGerbongGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gerbong model
   */
  readonly fields: GerbongFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gerbong.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GerbongClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kelas_kereta<T extends Kelas_KeretaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Kelas_KeretaDefaultArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kursi_list<T extends Gerbong$kursi_listArgs<ExtArgs> = {}>(args?: Subset<T, Gerbong$kursi_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Jadwal_Kereta<T extends Gerbong$Jadwal_KeretaArgs<ExtArgs> = {}>(args?: Subset<T, Gerbong$Jadwal_KeretaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Gerbong model
   */
  interface GerbongFieldRefs {
    readonly id: FieldRef<"Gerbong", 'Int'>
    readonly nama: FieldRef<"Gerbong", 'String'>
    readonly kelas_kereta_id: FieldRef<"Gerbong", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Gerbong findUnique
   */
  export type GerbongFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong findUniqueOrThrow
   */
  export type GerbongFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong findFirst
   */
  export type GerbongFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gerbongs.
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gerbongs.
     */
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Gerbong findFirstOrThrow
   */
  export type GerbongFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbong to fetch.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gerbongs.
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gerbongs.
     */
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Gerbong findMany
   */
  export type GerbongFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter, which Gerbongs to fetch.
     */
    where?: GerbongWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gerbongs to fetch.
     */
    orderBy?: GerbongOrderByWithRelationInput | GerbongOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gerbongs.
     */
    cursor?: GerbongWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gerbongs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gerbongs.
     */
    skip?: number
    distinct?: GerbongScalarFieldEnum | GerbongScalarFieldEnum[]
  }

  /**
   * Gerbong create
   */
  export type GerbongCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * The data needed to create a Gerbong.
     */
    data: XOR<GerbongCreateInput, GerbongUncheckedCreateInput>
  }

  /**
   * Gerbong createMany
   */
  export type GerbongCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gerbongs.
     */
    data: GerbongCreateManyInput | GerbongCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gerbong update
   */
  export type GerbongUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * The data needed to update a Gerbong.
     */
    data: XOR<GerbongUpdateInput, GerbongUncheckedUpdateInput>
    /**
     * Choose, which Gerbong to update.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong updateMany
   */
  export type GerbongUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gerbongs.
     */
    data: XOR<GerbongUpdateManyMutationInput, GerbongUncheckedUpdateManyInput>
    /**
     * Filter which Gerbongs to update
     */
    where?: GerbongWhereInput
  }

  /**
   * Gerbong upsert
   */
  export type GerbongUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * The filter to search for the Gerbong to update in case it exists.
     */
    where: GerbongWhereUniqueInput
    /**
     * In case the Gerbong found by the `where` argument doesn't exist, create a new Gerbong with this data.
     */
    create: XOR<GerbongCreateInput, GerbongUncheckedCreateInput>
    /**
     * In case the Gerbong was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GerbongUpdateInput, GerbongUncheckedUpdateInput>
  }

  /**
   * Gerbong delete
   */
  export type GerbongDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
    /**
     * Filter which Gerbong to delete.
     */
    where: GerbongWhereUniqueInput
  }

  /**
   * Gerbong deleteMany
   */
  export type GerbongDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gerbongs to delete
     */
    where?: GerbongWhereInput
  }

  /**
   * Gerbong.kursi_list
   */
  export type Gerbong$kursi_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    where?: KursiWhereInput
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    cursor?: KursiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Gerbong.Jadwal_Kereta
   */
  export type Gerbong$Jadwal_KeretaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    where?: Jadwal_KeretaWhereInput
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    cursor?: Jadwal_KeretaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jadwal_KeretaScalarFieldEnum | Jadwal_KeretaScalarFieldEnum[]
  }

  /**
   * Gerbong without action
   */
  export type GerbongDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gerbong
     */
    select?: GerbongSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gerbong
     */
    omit?: GerbongOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GerbongInclude<ExtArgs> | null
  }


  /**
   * Model Kursi
   */

  export type AggregateKursi = {
    _count: KursiCountAggregateOutputType | null
    _avg: KursiAvgAggregateOutputType | null
    _sum: KursiSumAggregateOutputType | null
    _min: KursiMinAggregateOutputType | null
    _max: KursiMaxAggregateOutputType | null
  }

  export type KursiAvgAggregateOutputType = {
    id: number | null
    gerbong_id: number | null
  }

  export type KursiSumAggregateOutputType = {
    id: number | null
    gerbong_id: number | null
  }

  export type KursiMinAggregateOutputType = {
    id: number | null
    nomor: string | null
    gerbong_id: number | null
  }

  export type KursiMaxAggregateOutputType = {
    id: number | null
    nomor: string | null
    gerbong_id: number | null
  }

  export type KursiCountAggregateOutputType = {
    id: number
    nomor: number
    gerbong_id: number
    _all: number
  }


  export type KursiAvgAggregateInputType = {
    id?: true
    gerbong_id?: true
  }

  export type KursiSumAggregateInputType = {
    id?: true
    gerbong_id?: true
  }

  export type KursiMinAggregateInputType = {
    id?: true
    nomor?: true
    gerbong_id?: true
  }

  export type KursiMaxAggregateInputType = {
    id?: true
    nomor?: true
    gerbong_id?: true
  }

  export type KursiCountAggregateInputType = {
    id?: true
    nomor?: true
    gerbong_id?: true
    _all?: true
  }

  export type KursiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kursi to aggregate.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kursis
    **/
    _count?: true | KursiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KursiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KursiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KursiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KursiMaxAggregateInputType
  }

  export type GetKursiAggregateType<T extends KursiAggregateArgs> = {
        [P in keyof T & keyof AggregateKursi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKursi[P]>
      : GetScalarType<T[P], AggregateKursi[P]>
  }




  export type KursiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KursiWhereInput
    orderBy?: KursiOrderByWithAggregationInput | KursiOrderByWithAggregationInput[]
    by: KursiScalarFieldEnum[] | KursiScalarFieldEnum
    having?: KursiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KursiCountAggregateInputType | true
    _avg?: KursiAvgAggregateInputType
    _sum?: KursiSumAggregateInputType
    _min?: KursiMinAggregateInputType
    _max?: KursiMaxAggregateInputType
  }

  export type KursiGroupByOutputType = {
    id: number
    nomor: string
    gerbong_id: number
    _count: KursiCountAggregateOutputType | null
    _avg: KursiAvgAggregateOutputType | null
    _sum: KursiSumAggregateOutputType | null
    _min: KursiMinAggregateOutputType | null
    _max: KursiMaxAggregateOutputType | null
  }

  type GetKursiGroupByPayload<T extends KursiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KursiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KursiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KursiGroupByOutputType[P]>
            : GetScalarType<T[P], KursiGroupByOutputType[P]>
        }
      >
    >


  export type KursiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomor?: boolean
    gerbong_id?: boolean
    gerbong?: boolean | GerbongDefaultArgs<ExtArgs>
    tickets?: boolean | Kursi$ticketsArgs<ExtArgs>
    _count?: boolean | KursiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kursi"]>



  export type KursiSelectScalar = {
    id?: boolean
    nomor?: boolean
    gerbong_id?: boolean
  }

  export type KursiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomor" | "gerbong_id", ExtArgs["result"]["kursi"]>
  export type KursiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gerbong?: boolean | GerbongDefaultArgs<ExtArgs>
    tickets?: boolean | Kursi$ticketsArgs<ExtArgs>
    _count?: boolean | KursiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $KursiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kursi"
    objects: {
      gerbong: Prisma.$GerbongPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomor: string
      gerbong_id: number
    }, ExtArgs["result"]["kursi"]>
    composites: {}
  }

  type KursiGetPayload<S extends boolean | null | undefined | KursiDefaultArgs> = $Result.GetResult<Prisma.$KursiPayload, S>

  type KursiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KursiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KursiCountAggregateInputType | true
    }

  export interface KursiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kursi'], meta: { name: 'Kursi' } }
    /**
     * Find zero or one Kursi that matches the filter.
     * @param {KursiFindUniqueArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KursiFindUniqueArgs>(args: SelectSubset<T, KursiFindUniqueArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kursi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KursiFindUniqueOrThrowArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KursiFindUniqueOrThrowArgs>(args: SelectSubset<T, KursiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kursi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiFindFirstArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KursiFindFirstArgs>(args?: SelectSubset<T, KursiFindFirstArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kursi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiFindFirstOrThrowArgs} args - Arguments to find a Kursi
     * @example
     * // Get one Kursi
     * const kursi = await prisma.kursi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KursiFindFirstOrThrowArgs>(args?: SelectSubset<T, KursiFindFirstOrThrowArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kursis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kursis
     * const kursis = await prisma.kursi.findMany()
     * 
     * // Get first 10 Kursis
     * const kursis = await prisma.kursi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kursiWithIdOnly = await prisma.kursi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KursiFindManyArgs>(args?: SelectSubset<T, KursiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kursi.
     * @param {KursiCreateArgs} args - Arguments to create a Kursi.
     * @example
     * // Create one Kursi
     * const Kursi = await prisma.kursi.create({
     *   data: {
     *     // ... data to create a Kursi
     *   }
     * })
     * 
     */
    create<T extends KursiCreateArgs>(args: SelectSubset<T, KursiCreateArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kursis.
     * @param {KursiCreateManyArgs} args - Arguments to create many Kursis.
     * @example
     * // Create many Kursis
     * const kursi = await prisma.kursi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KursiCreateManyArgs>(args?: SelectSubset<T, KursiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kursi.
     * @param {KursiDeleteArgs} args - Arguments to delete one Kursi.
     * @example
     * // Delete one Kursi
     * const Kursi = await prisma.kursi.delete({
     *   where: {
     *     // ... filter to delete one Kursi
     *   }
     * })
     * 
     */
    delete<T extends KursiDeleteArgs>(args: SelectSubset<T, KursiDeleteArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kursi.
     * @param {KursiUpdateArgs} args - Arguments to update one Kursi.
     * @example
     * // Update one Kursi
     * const kursi = await prisma.kursi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KursiUpdateArgs>(args: SelectSubset<T, KursiUpdateArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kursis.
     * @param {KursiDeleteManyArgs} args - Arguments to filter Kursis to delete.
     * @example
     * // Delete a few Kursis
     * const { count } = await prisma.kursi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KursiDeleteManyArgs>(args?: SelectSubset<T, KursiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kursis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kursis
     * const kursi = await prisma.kursi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KursiUpdateManyArgs>(args: SelectSubset<T, KursiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kursi.
     * @param {KursiUpsertArgs} args - Arguments to update or create a Kursi.
     * @example
     * // Update or create a Kursi
     * const kursi = await prisma.kursi.upsert({
     *   create: {
     *     // ... data to create a Kursi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kursi we want to update
     *   }
     * })
     */
    upsert<T extends KursiUpsertArgs>(args: SelectSubset<T, KursiUpsertArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kursis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiCountArgs} args - Arguments to filter Kursis to count.
     * @example
     * // Count the number of Kursis
     * const count = await prisma.kursi.count({
     *   where: {
     *     // ... the filter for the Kursis we want to count
     *   }
     * })
    **/
    count<T extends KursiCountArgs>(
      args?: Subset<T, KursiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KursiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kursi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KursiAggregateArgs>(args: Subset<T, KursiAggregateArgs>): Prisma.PrismaPromise<GetKursiAggregateType<T>>

    /**
     * Group by Kursi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursiGroupByArgs} args - Group by arguments.
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
      T extends KursiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KursiGroupByArgs['orderBy'] }
        : { orderBy?: KursiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KursiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKursiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kursi model
   */
  readonly fields: KursiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kursi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KursiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gerbong<T extends GerbongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GerbongDefaultArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Kursi$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Kursi$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kursi model
   */
  interface KursiFieldRefs {
    readonly id: FieldRef<"Kursi", 'Int'>
    readonly nomor: FieldRef<"Kursi", 'String'>
    readonly gerbong_id: FieldRef<"Kursi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Kursi findUnique
   */
  export type KursiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi findUniqueOrThrow
   */
  export type KursiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi findFirst
   */
  export type KursiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kursis.
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kursis.
     */
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Kursi findFirstOrThrow
   */
  export type KursiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursi to fetch.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kursis.
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kursis.
     */
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Kursi findMany
   */
  export type KursiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter, which Kursis to fetch.
     */
    where?: KursiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursis to fetch.
     */
    orderBy?: KursiOrderByWithRelationInput | KursiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kursis.
     */
    cursor?: KursiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursis.
     */
    skip?: number
    distinct?: KursiScalarFieldEnum | KursiScalarFieldEnum[]
  }

  /**
   * Kursi create
   */
  export type KursiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * The data needed to create a Kursi.
     */
    data: XOR<KursiCreateInput, KursiUncheckedCreateInput>
  }

  /**
   * Kursi createMany
   */
  export type KursiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kursis.
     */
    data: KursiCreateManyInput | KursiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kursi update
   */
  export type KursiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * The data needed to update a Kursi.
     */
    data: XOR<KursiUpdateInput, KursiUncheckedUpdateInput>
    /**
     * Choose, which Kursi to update.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi updateMany
   */
  export type KursiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kursis.
     */
    data: XOR<KursiUpdateManyMutationInput, KursiUncheckedUpdateManyInput>
    /**
     * Filter which Kursis to update
     */
    where?: KursiWhereInput
  }

  /**
   * Kursi upsert
   */
  export type KursiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * The filter to search for the Kursi to update in case it exists.
     */
    where: KursiWhereUniqueInput
    /**
     * In case the Kursi found by the `where` argument doesn't exist, create a new Kursi with this data.
     */
    create: XOR<KursiCreateInput, KursiUncheckedCreateInput>
    /**
     * In case the Kursi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KursiUpdateInput, KursiUncheckedUpdateInput>
  }

  /**
   * Kursi delete
   */
  export type KursiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
    /**
     * Filter which Kursi to delete.
     */
    where: KursiWhereUniqueInput
  }

  /**
   * Kursi deleteMany
   */
  export type KursiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kursis to delete
     */
    where?: KursiWhereInput
  }

  /**
   * Kursi.tickets
   */
  export type Kursi$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Kursi without action
   */
  export type KursiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursi
     */
    select?: KursiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursi
     */
    omit?: KursiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursiInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    kursi_id: number | null
    kelas_kereta_id: number | null
    jadwal_kereta_id: number | null
    transaksi_id: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    kursi_id: number | null
    kelas_kereta_id: number | null
    jadwal_kereta_id: number | null
    transaksi_id: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    kursi_id: number | null
    kelas_kereta_id: number | null
    jadwal_kereta_id: number | null
    transaksi_id: number | null
    tanggal: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    kursi_id: number | null
    kelas_kereta_id: number | null
    jadwal_kereta_id: number | null
    transaksi_id: number | null
    tanggal: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id: number
    tanggal: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    user_id?: true
    kursi_id?: true
    kelas_kereta_id?: true
    jadwal_kereta_id?: true
    transaksi_id?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    user_id?: true
    kursi_id?: true
    kelas_kereta_id?: true
    jadwal_kereta_id?: true
    transaksi_id?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    user_id?: true
    kursi_id?: true
    kelas_kereta_id?: true
    jadwal_kereta_id?: true
    transaksi_id?: true
    tanggal?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    user_id?: true
    kursi_id?: true
    kelas_kereta_id?: true
    jadwal_kereta_id?: true
    transaksi_id?: true
    tanggal?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    user_id?: true
    kursi_id?: true
    kelas_kereta_id?: true
    jadwal_kereta_id?: true
    transaksi_id?: true
    tanggal?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id: number | null
    tanggal: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    kursi_id?: boolean
    kelas_kereta_id?: boolean
    jadwal_kereta_id?: boolean
    transaksi_id?: boolean
    tanggal?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursi?: boolean | KursiDefaultArgs<ExtArgs>
    kelas_kereta?: boolean | Kelas_KeretaDefaultArgs<ExtArgs>
    jadwal_kereta?: boolean | Jadwal_KeretaDefaultArgs<ExtArgs>
    transaksi?: boolean | Ticket$transaksiArgs<ExtArgs>
    penumpang?: boolean | Ticket$penumpangArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    user_id?: boolean
    kursi_id?: boolean
    kelas_kereta_id?: boolean
    jadwal_kereta_id?: boolean
    transaksi_id?: boolean
    tanggal?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "kursi_id" | "kelas_kereta_id" | "jadwal_kereta_id" | "transaksi_id" | "tanggal", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursi?: boolean | KursiDefaultArgs<ExtArgs>
    kelas_kereta?: boolean | Kelas_KeretaDefaultArgs<ExtArgs>
    jadwal_kereta?: boolean | Jadwal_KeretaDefaultArgs<ExtArgs>
    transaksi?: boolean | Ticket$transaksiArgs<ExtArgs>
    penumpang?: boolean | Ticket$penumpangArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      kursi: Prisma.$KursiPayload<ExtArgs>
      kelas_kereta: Prisma.$Kelas_KeretaPayload<ExtArgs>
      jadwal_kereta: Prisma.$Jadwal_KeretaPayload<ExtArgs>
      transaksi: Prisma.$TransaksiPayload<ExtArgs> | null
      penumpang: Prisma.$PenumpangPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      kursi_id: number
      kelas_kereta_id: number
      jadwal_kereta_id: number
      transaksi_id: number | null
      tanggal: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kursi<T extends KursiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KursiDefaultArgs<ExtArgs>>): Prisma__KursiClient<$Result.GetResult<Prisma.$KursiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas_kereta<T extends Kelas_KeretaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Kelas_KeretaDefaultArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    jadwal_kereta<T extends Jadwal_KeretaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Jadwal_KeretaDefaultArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaksi<T extends Ticket$transaksiArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$transaksiArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    penumpang<T extends Ticket$penumpangArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$penumpangArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly user_id: FieldRef<"Ticket", 'Int'>
    readonly kursi_id: FieldRef<"Ticket", 'Int'>
    readonly kelas_kereta_id: FieldRef<"Ticket", 'Int'>
    readonly jadwal_kereta_id: FieldRef<"Ticket", 'Int'>
    readonly transaksi_id: FieldRef<"Ticket", 'Int'>
    readonly tanggal: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
  }

  /**
   * Ticket.transaksi
   */
  export type Ticket$transaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
  }

  /**
   * Ticket.penumpang
   */
  export type Ticket$penumpangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    where?: PenumpangWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Penumpang
   */

  export type AggregatePenumpang = {
    _count: PenumpangCountAggregateOutputType | null
    _avg: PenumpangAvgAggregateOutputType | null
    _sum: PenumpangSumAggregateOutputType | null
    _min: PenumpangMinAggregateOutputType | null
    _max: PenumpangMaxAggregateOutputType | null
  }

  export type PenumpangAvgAggregateOutputType = {
    id: number | null
    ticket_id: number | null
  }

  export type PenumpangSumAggregateOutputType = {
    id: number | null
    ticket_id: number | null
  }

  export type PenumpangMinAggregateOutputType = {
    id: number | null
    nama: string | null
    nomor_identitas: string | null
    nomor_hp: string | null
    address: string | null
    ticket_id: number | null
  }

  export type PenumpangMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    nomor_identitas: string | null
    nomor_hp: string | null
    address: string | null
    ticket_id: number | null
  }

  export type PenumpangCountAggregateOutputType = {
    id: number
    nama: number
    nomor_identitas: number
    nomor_hp: number
    address: number
    ticket_id: number
    _all: number
  }


  export type PenumpangAvgAggregateInputType = {
    id?: true
    ticket_id?: true
  }

  export type PenumpangSumAggregateInputType = {
    id?: true
    ticket_id?: true
  }

  export type PenumpangMinAggregateInputType = {
    id?: true
    nama?: true
    nomor_identitas?: true
    nomor_hp?: true
    address?: true
    ticket_id?: true
  }

  export type PenumpangMaxAggregateInputType = {
    id?: true
    nama?: true
    nomor_identitas?: true
    nomor_hp?: true
    address?: true
    ticket_id?: true
  }

  export type PenumpangCountAggregateInputType = {
    id?: true
    nama?: true
    nomor_identitas?: true
    nomor_hp?: true
    address?: true
    ticket_id?: true
    _all?: true
  }

  export type PenumpangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penumpang to aggregate.
     */
    where?: PenumpangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penumpangs to fetch.
     */
    orderBy?: PenumpangOrderByWithRelationInput | PenumpangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PenumpangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penumpangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penumpangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Penumpangs
    **/
    _count?: true | PenumpangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PenumpangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PenumpangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PenumpangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PenumpangMaxAggregateInputType
  }

  export type GetPenumpangAggregateType<T extends PenumpangAggregateArgs> = {
        [P in keyof T & keyof AggregatePenumpang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePenumpang[P]>
      : GetScalarType<T[P], AggregatePenumpang[P]>
  }




  export type PenumpangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PenumpangWhereInput
    orderBy?: PenumpangOrderByWithAggregationInput | PenumpangOrderByWithAggregationInput[]
    by: PenumpangScalarFieldEnum[] | PenumpangScalarFieldEnum
    having?: PenumpangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PenumpangCountAggregateInputType | true
    _avg?: PenumpangAvgAggregateInputType
    _sum?: PenumpangSumAggregateInputType
    _min?: PenumpangMinAggregateInputType
    _max?: PenumpangMaxAggregateInputType
  }

  export type PenumpangGroupByOutputType = {
    id: number
    nama: string
    nomor_identitas: string
    nomor_hp: string
    address: string
    ticket_id: number
    _count: PenumpangCountAggregateOutputType | null
    _avg: PenumpangAvgAggregateOutputType | null
    _sum: PenumpangSumAggregateOutputType | null
    _min: PenumpangMinAggregateOutputType | null
    _max: PenumpangMaxAggregateOutputType | null
  }

  type GetPenumpangGroupByPayload<T extends PenumpangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PenumpangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PenumpangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PenumpangGroupByOutputType[P]>
            : GetScalarType<T[P], PenumpangGroupByOutputType[P]>
        }
      >
    >


  export type PenumpangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nomor_identitas?: boolean
    nomor_hp?: boolean
    address?: boolean
    ticket_id?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["penumpang"]>



  export type PenumpangSelectScalar = {
    id?: boolean
    nama?: boolean
    nomor_identitas?: boolean
    nomor_hp?: boolean
    address?: boolean
    ticket_id?: boolean
  }

  export type PenumpangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nomor_identitas" | "nomor_hp" | "address" | "ticket_id", ExtArgs["result"]["penumpang"]>
  export type PenumpangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $PenumpangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Penumpang"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      nomor_identitas: string
      nomor_hp: string
      address: string
      ticket_id: number
    }, ExtArgs["result"]["penumpang"]>
    composites: {}
  }

  type PenumpangGetPayload<S extends boolean | null | undefined | PenumpangDefaultArgs> = $Result.GetResult<Prisma.$PenumpangPayload, S>

  type PenumpangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PenumpangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PenumpangCountAggregateInputType | true
    }

  export interface PenumpangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Penumpang'], meta: { name: 'Penumpang' } }
    /**
     * Find zero or one Penumpang that matches the filter.
     * @param {PenumpangFindUniqueArgs} args - Arguments to find a Penumpang
     * @example
     * // Get one Penumpang
     * const penumpang = await prisma.penumpang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PenumpangFindUniqueArgs>(args: SelectSubset<T, PenumpangFindUniqueArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Penumpang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PenumpangFindUniqueOrThrowArgs} args - Arguments to find a Penumpang
     * @example
     * // Get one Penumpang
     * const penumpang = await prisma.penumpang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PenumpangFindUniqueOrThrowArgs>(args: SelectSubset<T, PenumpangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penumpang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenumpangFindFirstArgs} args - Arguments to find a Penumpang
     * @example
     * // Get one Penumpang
     * const penumpang = await prisma.penumpang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PenumpangFindFirstArgs>(args?: SelectSubset<T, PenumpangFindFirstArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Penumpang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenumpangFindFirstOrThrowArgs} args - Arguments to find a Penumpang
     * @example
     * // Get one Penumpang
     * const penumpang = await prisma.penumpang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PenumpangFindFirstOrThrowArgs>(args?: SelectSubset<T, PenumpangFindFirstOrThrowArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Penumpangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenumpangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Penumpangs
     * const penumpangs = await prisma.penumpang.findMany()
     * 
     * // Get first 10 Penumpangs
     * const penumpangs = await prisma.penumpang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const penumpangWithIdOnly = await prisma.penumpang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PenumpangFindManyArgs>(args?: SelectSubset<T, PenumpangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Penumpang.
     * @param {PenumpangCreateArgs} args - Arguments to create a Penumpang.
     * @example
     * // Create one Penumpang
     * const Penumpang = await prisma.penumpang.create({
     *   data: {
     *     // ... data to create a Penumpang
     *   }
     * })
     * 
     */
    create<T extends PenumpangCreateArgs>(args: SelectSubset<T, PenumpangCreateArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Penumpangs.
     * @param {PenumpangCreateManyArgs} args - Arguments to create many Penumpangs.
     * @example
     * // Create many Penumpangs
     * const penumpang = await prisma.penumpang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PenumpangCreateManyArgs>(args?: SelectSubset<T, PenumpangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Penumpang.
     * @param {PenumpangDeleteArgs} args - Arguments to delete one Penumpang.
     * @example
     * // Delete one Penumpang
     * const Penumpang = await prisma.penumpang.delete({
     *   where: {
     *     // ... filter to delete one Penumpang
     *   }
     * })
     * 
     */
    delete<T extends PenumpangDeleteArgs>(args: SelectSubset<T, PenumpangDeleteArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Penumpang.
     * @param {PenumpangUpdateArgs} args - Arguments to update one Penumpang.
     * @example
     * // Update one Penumpang
     * const penumpang = await prisma.penumpang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PenumpangUpdateArgs>(args: SelectSubset<T, PenumpangUpdateArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Penumpangs.
     * @param {PenumpangDeleteManyArgs} args - Arguments to filter Penumpangs to delete.
     * @example
     * // Delete a few Penumpangs
     * const { count } = await prisma.penumpang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PenumpangDeleteManyArgs>(args?: SelectSubset<T, PenumpangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Penumpangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenumpangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Penumpangs
     * const penumpang = await prisma.penumpang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PenumpangUpdateManyArgs>(args: SelectSubset<T, PenumpangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Penumpang.
     * @param {PenumpangUpsertArgs} args - Arguments to update or create a Penumpang.
     * @example
     * // Update or create a Penumpang
     * const penumpang = await prisma.penumpang.upsert({
     *   create: {
     *     // ... data to create a Penumpang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Penumpang we want to update
     *   }
     * })
     */
    upsert<T extends PenumpangUpsertArgs>(args: SelectSubset<T, PenumpangUpsertArgs<ExtArgs>>): Prisma__PenumpangClient<$Result.GetResult<Prisma.$PenumpangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Penumpangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenumpangCountArgs} args - Arguments to filter Penumpangs to count.
     * @example
     * // Count the number of Penumpangs
     * const count = await prisma.penumpang.count({
     *   where: {
     *     // ... the filter for the Penumpangs we want to count
     *   }
     * })
    **/
    count<T extends PenumpangCountArgs>(
      args?: Subset<T, PenumpangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PenumpangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Penumpang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenumpangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PenumpangAggregateArgs>(args: Subset<T, PenumpangAggregateArgs>): Prisma.PrismaPromise<GetPenumpangAggregateType<T>>

    /**
     * Group by Penumpang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PenumpangGroupByArgs} args - Group by arguments.
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
      T extends PenumpangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PenumpangGroupByArgs['orderBy'] }
        : { orderBy?: PenumpangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PenumpangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPenumpangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Penumpang model
   */
  readonly fields: PenumpangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Penumpang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PenumpangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Penumpang model
   */
  interface PenumpangFieldRefs {
    readonly id: FieldRef<"Penumpang", 'Int'>
    readonly nama: FieldRef<"Penumpang", 'String'>
    readonly nomor_identitas: FieldRef<"Penumpang", 'String'>
    readonly nomor_hp: FieldRef<"Penumpang", 'String'>
    readonly address: FieldRef<"Penumpang", 'String'>
    readonly ticket_id: FieldRef<"Penumpang", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Penumpang findUnique
   */
  export type PenumpangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * Filter, which Penumpang to fetch.
     */
    where: PenumpangWhereUniqueInput
  }

  /**
   * Penumpang findUniqueOrThrow
   */
  export type PenumpangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * Filter, which Penumpang to fetch.
     */
    where: PenumpangWhereUniqueInput
  }

  /**
   * Penumpang findFirst
   */
  export type PenumpangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * Filter, which Penumpang to fetch.
     */
    where?: PenumpangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penumpangs to fetch.
     */
    orderBy?: PenumpangOrderByWithRelationInput | PenumpangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penumpangs.
     */
    cursor?: PenumpangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penumpangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penumpangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penumpangs.
     */
    distinct?: PenumpangScalarFieldEnum | PenumpangScalarFieldEnum[]
  }

  /**
   * Penumpang findFirstOrThrow
   */
  export type PenumpangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * Filter, which Penumpang to fetch.
     */
    where?: PenumpangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penumpangs to fetch.
     */
    orderBy?: PenumpangOrderByWithRelationInput | PenumpangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Penumpangs.
     */
    cursor?: PenumpangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penumpangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penumpangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Penumpangs.
     */
    distinct?: PenumpangScalarFieldEnum | PenumpangScalarFieldEnum[]
  }

  /**
   * Penumpang findMany
   */
  export type PenumpangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * Filter, which Penumpangs to fetch.
     */
    where?: PenumpangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Penumpangs to fetch.
     */
    orderBy?: PenumpangOrderByWithRelationInput | PenumpangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Penumpangs.
     */
    cursor?: PenumpangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Penumpangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Penumpangs.
     */
    skip?: number
    distinct?: PenumpangScalarFieldEnum | PenumpangScalarFieldEnum[]
  }

  /**
   * Penumpang create
   */
  export type PenumpangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * The data needed to create a Penumpang.
     */
    data: XOR<PenumpangCreateInput, PenumpangUncheckedCreateInput>
  }

  /**
   * Penumpang createMany
   */
  export type PenumpangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Penumpangs.
     */
    data: PenumpangCreateManyInput | PenumpangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Penumpang update
   */
  export type PenumpangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * The data needed to update a Penumpang.
     */
    data: XOR<PenumpangUpdateInput, PenumpangUncheckedUpdateInput>
    /**
     * Choose, which Penumpang to update.
     */
    where: PenumpangWhereUniqueInput
  }

  /**
   * Penumpang updateMany
   */
  export type PenumpangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Penumpangs.
     */
    data: XOR<PenumpangUpdateManyMutationInput, PenumpangUncheckedUpdateManyInput>
    /**
     * Filter which Penumpangs to update
     */
    where?: PenumpangWhereInput
  }

  /**
   * Penumpang upsert
   */
  export type PenumpangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * The filter to search for the Penumpang to update in case it exists.
     */
    where: PenumpangWhereUniqueInput
    /**
     * In case the Penumpang found by the `where` argument doesn't exist, create a new Penumpang with this data.
     */
    create: XOR<PenumpangCreateInput, PenumpangUncheckedCreateInput>
    /**
     * In case the Penumpang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PenumpangUpdateInput, PenumpangUncheckedUpdateInput>
  }

  /**
   * Penumpang delete
   */
  export type PenumpangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
    /**
     * Filter which Penumpang to delete.
     */
    where: PenumpangWhereUniqueInput
  }

  /**
   * Penumpang deleteMany
   */
  export type PenumpangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Penumpangs to delete
     */
    where?: PenumpangWhereInput
  }

  /**
   * Penumpang without action
   */
  export type PenumpangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Penumpang
     */
    select?: PenumpangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Penumpang
     */
    omit?: PenumpangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PenumpangInclude<ExtArgs> | null
  }


  /**
   * Model Transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    id: number | null
    total_harga: number | null
    metode_pembayaran_id: number | null
  }

  export type TransaksiSumAggregateOutputType = {
    id: number | null
    total_harga: number | null
    metode_pembayaran_id: number | null
  }

  export type TransaksiMinAggregateOutputType = {
    id: number | null
    total_harga: number | null
    metode_pembayaran_id: number | null
    status: $Enums.order_status | null
    createdAt: Date | null
    va: string | null
    nomor_kartu: string | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id: number | null
    total_harga: number | null
    metode_pembayaran_id: number | null
    status: $Enums.order_status | null
    createdAt: Date | null
    va: string | null
    nomor_kartu: string | null
  }

  export type TransaksiCountAggregateOutputType = {
    id: number
    total_harga: number
    metode_pembayaran_id: number
    status: number
    createdAt: number
    va: number
    nomor_kartu: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    id?: true
    total_harga?: true
    metode_pembayaran_id?: true
  }

  export type TransaksiSumAggregateInputType = {
    id?: true
    total_harga?: true
    metode_pembayaran_id?: true
  }

  export type TransaksiMinAggregateInputType = {
    id?: true
    total_harga?: true
    metode_pembayaran_id?: true
    status?: true
    createdAt?: true
    va?: true
    nomor_kartu?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id?: true
    total_harga?: true
    metode_pembayaran_id?: true
    status?: true
    createdAt?: true
    va?: true
    nomor_kartu?: true
  }

  export type TransaksiCountAggregateInputType = {
    id?: true
    total_harga?: true
    metode_pembayaran_id?: true
    status?: true
    createdAt?: true
    va?: true
    nomor_kartu?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksi to aggregate.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type TransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithAggregationInput | TransaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: TransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id: number
    total_harga: number
    metode_pembayaran_id: number
    status: $Enums.order_status
    createdAt: Date
    va: string | null
    nomor_kartu: string | null
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends TransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_harga?: boolean
    metode_pembayaran_id?: boolean
    status?: boolean
    createdAt?: boolean
    va?: boolean
    nomor_kartu?: boolean
    tickets?: boolean | Transaksi$ticketsArgs<ExtArgs>
    metode_pembayaran?: boolean | Metode_PembayaranDefaultArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>



  export type TransaksiSelectScalar = {
    id?: boolean
    total_harga?: boolean
    metode_pembayaran_id?: boolean
    status?: boolean
    createdAt?: boolean
    va?: boolean
    nomor_kartu?: boolean
  }

  export type TransaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total_harga" | "metode_pembayaran_id" | "status" | "createdAt" | "va" | "nomor_kartu", ExtArgs["result"]["transaksi"]>
  export type TransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | Transaksi$ticketsArgs<ExtArgs>
    metode_pembayaran?: boolean | Metode_PembayaranDefaultArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaksi"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      metode_pembayaran: Prisma.$Metode_PembayaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total_harga: number
      metode_pembayaran_id: number
      status: $Enums.order_status
      createdAt: Date
      va: string | null
      nomor_kartu: string | null
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type TransaksiGetPayload<S extends boolean | null | undefined | TransaksiDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPayload, S>

  type TransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface TransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaksi'], meta: { name: 'Transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {TransaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiFindUniqueArgs>(args: SelectSubset<T, TransaksiFindUniqueArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiFindFirstArgs>(args?: SelectSubset<T, TransaksiFindFirstArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiFindManyArgs>(args?: SelectSubset<T, TransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {TransaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends TransaksiCreateArgs>(args: SelectSubset<T, TransaksiCreateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {TransaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiCreateManyArgs>(args?: SelectSubset<T, TransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaksi.
     * @param {TransaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends TransaksiDeleteArgs>(args: SelectSubset<T, TransaksiDeleteArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {TransaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiUpdateArgs>(args: SelectSubset<T, TransaksiUpdateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {TransaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiDeleteManyArgs>(args?: SelectSubset<T, TransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiUpdateManyArgs>(args: SelectSubset<T, TransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaksi.
     * @param {TransaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiUpsertArgs>(args: SelectSubset<T, TransaksiUpsertArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends TransaksiCountArgs>(
      args?: Subset<T, TransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiGroupByArgs} args - Group by arguments.
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
      T extends TransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaksi model
   */
  readonly fields: TransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends Transaksi$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Transaksi$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metode_pembayaran<T extends Metode_PembayaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Metode_PembayaranDefaultArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaksi model
   */
  interface TransaksiFieldRefs {
    readonly id: FieldRef<"Transaksi", 'Int'>
    readonly total_harga: FieldRef<"Transaksi", 'Float'>
    readonly metode_pembayaran_id: FieldRef<"Transaksi", 'Int'>
    readonly status: FieldRef<"Transaksi", 'order_status'>
    readonly createdAt: FieldRef<"Transaksi", 'DateTime'>
    readonly va: FieldRef<"Transaksi", 'String'>
    readonly nomor_kartu: FieldRef<"Transaksi", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transaksi findUnique
   */
  export type TransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findUniqueOrThrow
   */
  export type TransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findFirst
   */
  export type TransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findFirstOrThrow
   */
  export type TransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findMany
   */
  export type TransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksis to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi create
   */
  export type TransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaksi.
     */
    data: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
  }

  /**
   * Transaksi createMany
   */
  export type TransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi update
   */
  export type TransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaksi.
     */
    data: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
    /**
     * Choose, which Transaksi to update.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi updateMany
   */
  export type TransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
  }

  /**
   * Transaksi upsert
   */
  export type TransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaksi to update in case it exists.
     */
    where: TransaksiWhereUniqueInput
    /**
     * In case the Transaksi found by the `where` argument doesn't exist, create a new Transaksi with this data.
     */
    create: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
    /**
     * In case the Transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
  }

  /**
   * Transaksi delete
   */
  export type TransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter which Transaksi to delete.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi deleteMany
   */
  export type TransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksis to delete
     */
    where?: TransaksiWhereInput
  }

  /**
   * Transaksi.tickets
   */
  export type Transaksi$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Transaksi without action
   */
  export type TransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
  }


  /**
   * Model Metode_Pembayaran
   */

  export type AggregateMetode_Pembayaran = {
    _count: Metode_PembayaranCountAggregateOutputType | null
    _avg: Metode_PembayaranAvgAggregateOutputType | null
    _sum: Metode_PembayaranSumAggregateOutputType | null
    _min: Metode_PembayaranMinAggregateOutputType | null
    _max: Metode_PembayaranMaxAggregateOutputType | null
  }

  export type Metode_PembayaranAvgAggregateOutputType = {
    id: number | null
  }

  export type Metode_PembayaranSumAggregateOutputType = {
    id: number | null
  }

  export type Metode_PembayaranMinAggregateOutputType = {
    id: number | null
    nama: string | null
    tipe: $Enums.paymentmethod_tipe | null
  }

  export type Metode_PembayaranMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    tipe: $Enums.paymentmethod_tipe | null
  }

  export type Metode_PembayaranCountAggregateOutputType = {
    id: number
    nama: number
    tipe: number
    _all: number
  }


  export type Metode_PembayaranAvgAggregateInputType = {
    id?: true
  }

  export type Metode_PembayaranSumAggregateInputType = {
    id?: true
  }

  export type Metode_PembayaranMinAggregateInputType = {
    id?: true
    nama?: true
    tipe?: true
  }

  export type Metode_PembayaranMaxAggregateInputType = {
    id?: true
    nama?: true
    tipe?: true
  }

  export type Metode_PembayaranCountAggregateInputType = {
    id?: true
    nama?: true
    tipe?: true
    _all?: true
  }

  export type Metode_PembayaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metode_Pembayaran to aggregate.
     */
    where?: Metode_PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metode_Pembayarans to fetch.
     */
    orderBy?: Metode_PembayaranOrderByWithRelationInput | Metode_PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Metode_PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metode_Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metode_Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metode_Pembayarans
    **/
    _count?: true | Metode_PembayaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Metode_PembayaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Metode_PembayaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Metode_PembayaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Metode_PembayaranMaxAggregateInputType
  }

  export type GetMetode_PembayaranAggregateType<T extends Metode_PembayaranAggregateArgs> = {
        [P in keyof T & keyof AggregateMetode_Pembayaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetode_Pembayaran[P]>
      : GetScalarType<T[P], AggregateMetode_Pembayaran[P]>
  }




  export type Metode_PembayaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Metode_PembayaranWhereInput
    orderBy?: Metode_PembayaranOrderByWithAggregationInput | Metode_PembayaranOrderByWithAggregationInput[]
    by: Metode_PembayaranScalarFieldEnum[] | Metode_PembayaranScalarFieldEnum
    having?: Metode_PembayaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Metode_PembayaranCountAggregateInputType | true
    _avg?: Metode_PembayaranAvgAggregateInputType
    _sum?: Metode_PembayaranSumAggregateInputType
    _min?: Metode_PembayaranMinAggregateInputType
    _max?: Metode_PembayaranMaxAggregateInputType
  }

  export type Metode_PembayaranGroupByOutputType = {
    id: number
    nama: string
    tipe: $Enums.paymentmethod_tipe | null
    _count: Metode_PembayaranCountAggregateOutputType | null
    _avg: Metode_PembayaranAvgAggregateOutputType | null
    _sum: Metode_PembayaranSumAggregateOutputType | null
    _min: Metode_PembayaranMinAggregateOutputType | null
    _max: Metode_PembayaranMaxAggregateOutputType | null
  }

  type GetMetode_PembayaranGroupByPayload<T extends Metode_PembayaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Metode_PembayaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Metode_PembayaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Metode_PembayaranGroupByOutputType[P]>
            : GetScalarType<T[P], Metode_PembayaranGroupByOutputType[P]>
        }
      >
    >


  export type Metode_PembayaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    tipe?: boolean
    transaksi_list?: boolean | Metode_Pembayaran$transaksi_listArgs<ExtArgs>
    _count?: boolean | Metode_PembayaranCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metode_Pembayaran"]>



  export type Metode_PembayaranSelectScalar = {
    id?: boolean
    nama?: boolean
    tipe?: boolean
  }

  export type Metode_PembayaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "tipe", ExtArgs["result"]["metode_Pembayaran"]>
  export type Metode_PembayaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi_list?: boolean | Metode_Pembayaran$transaksi_listArgs<ExtArgs>
    _count?: boolean | Metode_PembayaranCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Metode_PembayaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metode_Pembayaran"
    objects: {
      transaksi_list: Prisma.$TransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      tipe: $Enums.paymentmethod_tipe | null
    }, ExtArgs["result"]["metode_Pembayaran"]>
    composites: {}
  }

  type Metode_PembayaranGetPayload<S extends boolean | null | undefined | Metode_PembayaranDefaultArgs> = $Result.GetResult<Prisma.$Metode_PembayaranPayload, S>

  type Metode_PembayaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Metode_PembayaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Metode_PembayaranCountAggregateInputType | true
    }

  export interface Metode_PembayaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metode_Pembayaran'], meta: { name: 'Metode_Pembayaran' } }
    /**
     * Find zero or one Metode_Pembayaran that matches the filter.
     * @param {Metode_PembayaranFindUniqueArgs} args - Arguments to find a Metode_Pembayaran
     * @example
     * // Get one Metode_Pembayaran
     * const metode_Pembayaran = await prisma.metode_Pembayaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Metode_PembayaranFindUniqueArgs>(args: SelectSubset<T, Metode_PembayaranFindUniqueArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metode_Pembayaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Metode_PembayaranFindUniqueOrThrowArgs} args - Arguments to find a Metode_Pembayaran
     * @example
     * // Get one Metode_Pembayaran
     * const metode_Pembayaran = await prisma.metode_Pembayaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Metode_PembayaranFindUniqueOrThrowArgs>(args: SelectSubset<T, Metode_PembayaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metode_Pembayaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metode_PembayaranFindFirstArgs} args - Arguments to find a Metode_Pembayaran
     * @example
     * // Get one Metode_Pembayaran
     * const metode_Pembayaran = await prisma.metode_Pembayaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Metode_PembayaranFindFirstArgs>(args?: SelectSubset<T, Metode_PembayaranFindFirstArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metode_Pembayaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metode_PembayaranFindFirstOrThrowArgs} args - Arguments to find a Metode_Pembayaran
     * @example
     * // Get one Metode_Pembayaran
     * const metode_Pembayaran = await prisma.metode_Pembayaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Metode_PembayaranFindFirstOrThrowArgs>(args?: SelectSubset<T, Metode_PembayaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metode_Pembayarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metode_PembayaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metode_Pembayarans
     * const metode_Pembayarans = await prisma.metode_Pembayaran.findMany()
     * 
     * // Get first 10 Metode_Pembayarans
     * const metode_Pembayarans = await prisma.metode_Pembayaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metode_PembayaranWithIdOnly = await prisma.metode_Pembayaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Metode_PembayaranFindManyArgs>(args?: SelectSubset<T, Metode_PembayaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metode_Pembayaran.
     * @param {Metode_PembayaranCreateArgs} args - Arguments to create a Metode_Pembayaran.
     * @example
     * // Create one Metode_Pembayaran
     * const Metode_Pembayaran = await prisma.metode_Pembayaran.create({
     *   data: {
     *     // ... data to create a Metode_Pembayaran
     *   }
     * })
     * 
     */
    create<T extends Metode_PembayaranCreateArgs>(args: SelectSubset<T, Metode_PembayaranCreateArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metode_Pembayarans.
     * @param {Metode_PembayaranCreateManyArgs} args - Arguments to create many Metode_Pembayarans.
     * @example
     * // Create many Metode_Pembayarans
     * const metode_Pembayaran = await prisma.metode_Pembayaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Metode_PembayaranCreateManyArgs>(args?: SelectSubset<T, Metode_PembayaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Metode_Pembayaran.
     * @param {Metode_PembayaranDeleteArgs} args - Arguments to delete one Metode_Pembayaran.
     * @example
     * // Delete one Metode_Pembayaran
     * const Metode_Pembayaran = await prisma.metode_Pembayaran.delete({
     *   where: {
     *     // ... filter to delete one Metode_Pembayaran
     *   }
     * })
     * 
     */
    delete<T extends Metode_PembayaranDeleteArgs>(args: SelectSubset<T, Metode_PembayaranDeleteArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metode_Pembayaran.
     * @param {Metode_PembayaranUpdateArgs} args - Arguments to update one Metode_Pembayaran.
     * @example
     * // Update one Metode_Pembayaran
     * const metode_Pembayaran = await prisma.metode_Pembayaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Metode_PembayaranUpdateArgs>(args: SelectSubset<T, Metode_PembayaranUpdateArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metode_Pembayarans.
     * @param {Metode_PembayaranDeleteManyArgs} args - Arguments to filter Metode_Pembayarans to delete.
     * @example
     * // Delete a few Metode_Pembayarans
     * const { count } = await prisma.metode_Pembayaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Metode_PembayaranDeleteManyArgs>(args?: SelectSubset<T, Metode_PembayaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metode_Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metode_PembayaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metode_Pembayarans
     * const metode_Pembayaran = await prisma.metode_Pembayaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Metode_PembayaranUpdateManyArgs>(args: SelectSubset<T, Metode_PembayaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Metode_Pembayaran.
     * @param {Metode_PembayaranUpsertArgs} args - Arguments to update or create a Metode_Pembayaran.
     * @example
     * // Update or create a Metode_Pembayaran
     * const metode_Pembayaran = await prisma.metode_Pembayaran.upsert({
     *   create: {
     *     // ... data to create a Metode_Pembayaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metode_Pembayaran we want to update
     *   }
     * })
     */
    upsert<T extends Metode_PembayaranUpsertArgs>(args: SelectSubset<T, Metode_PembayaranUpsertArgs<ExtArgs>>): Prisma__Metode_PembayaranClient<$Result.GetResult<Prisma.$Metode_PembayaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metode_Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metode_PembayaranCountArgs} args - Arguments to filter Metode_Pembayarans to count.
     * @example
     * // Count the number of Metode_Pembayarans
     * const count = await prisma.metode_Pembayaran.count({
     *   where: {
     *     // ... the filter for the Metode_Pembayarans we want to count
     *   }
     * })
    **/
    count<T extends Metode_PembayaranCountArgs>(
      args?: Subset<T, Metode_PembayaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Metode_PembayaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metode_Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metode_PembayaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Metode_PembayaranAggregateArgs>(args: Subset<T, Metode_PembayaranAggregateArgs>): Prisma.PrismaPromise<GetMetode_PembayaranAggregateType<T>>

    /**
     * Group by Metode_Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Metode_PembayaranGroupByArgs} args - Group by arguments.
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
      T extends Metode_PembayaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Metode_PembayaranGroupByArgs['orderBy'] }
        : { orderBy?: Metode_PembayaranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Metode_PembayaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetode_PembayaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metode_Pembayaran model
   */
  readonly fields: Metode_PembayaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metode_Pembayaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Metode_PembayaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi_list<T extends Metode_Pembayaran$transaksi_listArgs<ExtArgs> = {}>(args?: Subset<T, Metode_Pembayaran$transaksi_listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Metode_Pembayaran model
   */
  interface Metode_PembayaranFieldRefs {
    readonly id: FieldRef<"Metode_Pembayaran", 'Int'>
    readonly nama: FieldRef<"Metode_Pembayaran", 'String'>
    readonly tipe: FieldRef<"Metode_Pembayaran", 'paymentmethod_tipe'>
  }
    

  // Custom InputTypes
  /**
   * Metode_Pembayaran findUnique
   */
  export type Metode_PembayaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Metode_Pembayaran to fetch.
     */
    where: Metode_PembayaranWhereUniqueInput
  }

  /**
   * Metode_Pembayaran findUniqueOrThrow
   */
  export type Metode_PembayaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Metode_Pembayaran to fetch.
     */
    where: Metode_PembayaranWhereUniqueInput
  }

  /**
   * Metode_Pembayaran findFirst
   */
  export type Metode_PembayaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Metode_Pembayaran to fetch.
     */
    where?: Metode_PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metode_Pembayarans to fetch.
     */
    orderBy?: Metode_PembayaranOrderByWithRelationInput | Metode_PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metode_Pembayarans.
     */
    cursor?: Metode_PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metode_Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metode_Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metode_Pembayarans.
     */
    distinct?: Metode_PembayaranScalarFieldEnum | Metode_PembayaranScalarFieldEnum[]
  }

  /**
   * Metode_Pembayaran findFirstOrThrow
   */
  export type Metode_PembayaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Metode_Pembayaran to fetch.
     */
    where?: Metode_PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metode_Pembayarans to fetch.
     */
    orderBy?: Metode_PembayaranOrderByWithRelationInput | Metode_PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metode_Pembayarans.
     */
    cursor?: Metode_PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metode_Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metode_Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metode_Pembayarans.
     */
    distinct?: Metode_PembayaranScalarFieldEnum | Metode_PembayaranScalarFieldEnum[]
  }

  /**
   * Metode_Pembayaran findMany
   */
  export type Metode_PembayaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Metode_Pembayarans to fetch.
     */
    where?: Metode_PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metode_Pembayarans to fetch.
     */
    orderBy?: Metode_PembayaranOrderByWithRelationInput | Metode_PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metode_Pembayarans.
     */
    cursor?: Metode_PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metode_Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metode_Pembayarans.
     */
    skip?: number
    distinct?: Metode_PembayaranScalarFieldEnum | Metode_PembayaranScalarFieldEnum[]
  }

  /**
   * Metode_Pembayaran create
   */
  export type Metode_PembayaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to create a Metode_Pembayaran.
     */
    data: XOR<Metode_PembayaranCreateInput, Metode_PembayaranUncheckedCreateInput>
  }

  /**
   * Metode_Pembayaran createMany
   */
  export type Metode_PembayaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metode_Pembayarans.
     */
    data: Metode_PembayaranCreateManyInput | Metode_PembayaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metode_Pembayaran update
   */
  export type Metode_PembayaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to update a Metode_Pembayaran.
     */
    data: XOR<Metode_PembayaranUpdateInput, Metode_PembayaranUncheckedUpdateInput>
    /**
     * Choose, which Metode_Pembayaran to update.
     */
    where: Metode_PembayaranWhereUniqueInput
  }

  /**
   * Metode_Pembayaran updateMany
   */
  export type Metode_PembayaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metode_Pembayarans.
     */
    data: XOR<Metode_PembayaranUpdateManyMutationInput, Metode_PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Metode_Pembayarans to update
     */
    where?: Metode_PembayaranWhereInput
  }

  /**
   * Metode_Pembayaran upsert
   */
  export type Metode_PembayaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * The filter to search for the Metode_Pembayaran to update in case it exists.
     */
    where: Metode_PembayaranWhereUniqueInput
    /**
     * In case the Metode_Pembayaran found by the `where` argument doesn't exist, create a new Metode_Pembayaran with this data.
     */
    create: XOR<Metode_PembayaranCreateInput, Metode_PembayaranUncheckedCreateInput>
    /**
     * In case the Metode_Pembayaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Metode_PembayaranUpdateInput, Metode_PembayaranUncheckedUpdateInput>
  }

  /**
   * Metode_Pembayaran delete
   */
  export type Metode_PembayaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
    /**
     * Filter which Metode_Pembayaran to delete.
     */
    where: Metode_PembayaranWhereUniqueInput
  }

  /**
   * Metode_Pembayaran deleteMany
   */
  export type Metode_PembayaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metode_Pembayarans to delete
     */
    where?: Metode_PembayaranWhereInput
  }

  /**
   * Metode_Pembayaran.transaksi_list
   */
  export type Metode_Pembayaran$transaksi_listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    cursor?: TransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Metode_Pembayaran without action
   */
  export type Metode_PembayaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metode_Pembayaran
     */
    select?: Metode_PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metode_Pembayaran
     */
    omit?: Metode_PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Metode_PembayaranInclude<ExtArgs> | null
  }


  /**
   * Model Jadwal_Kereta
   */

  export type AggregateJadwal_Kereta = {
    _count: Jadwal_KeretaCountAggregateOutputType | null
    _avg: Jadwal_KeretaAvgAggregateOutputType | null
    _sum: Jadwal_KeretaSumAggregateOutputType | null
    _min: Jadwal_KeretaMinAggregateOutputType | null
    _max: Jadwal_KeretaMaxAggregateOutputType | null
  }

  export type Jadwal_KeretaAvgAggregateOutputType = {
    id: number | null
    dari_id: number | null
    ke_id: number | null
    kelas_kereta_id: number | null
    harga: number | null
    gerbong_id: number | null
  }

  export type Jadwal_KeretaSumAggregateOutputType = {
    id: number | null
    dari_id: number | null
    ke_id: number | null
    kelas_kereta_id: number | null
    harga: number | null
    gerbong_id: number | null
  }

  export type Jadwal_KeretaMinAggregateOutputType = {
    id: number | null
    dari_id: number | null
    ke_id: number | null
    tanggal: Date | null
    kelas_kereta_id: number | null
    jam_berangkat: string | null
    jam_tiba: string | null
    harga: number | null
    gerbong_id: number | null
  }

  export type Jadwal_KeretaMaxAggregateOutputType = {
    id: number | null
    dari_id: number | null
    ke_id: number | null
    tanggal: Date | null
    kelas_kereta_id: number | null
    jam_berangkat: string | null
    jam_tiba: string | null
    harga: number | null
    gerbong_id: number | null
  }

  export type Jadwal_KeretaCountAggregateOutputType = {
    id: number
    dari_id: number
    ke_id: number
    tanggal: number
    kelas_kereta_id: number
    jam_berangkat: number
    jam_tiba: number
    harga: number
    gerbong_id: number
    _all: number
  }


  export type Jadwal_KeretaAvgAggregateInputType = {
    id?: true
    dari_id?: true
    ke_id?: true
    kelas_kereta_id?: true
    harga?: true
    gerbong_id?: true
  }

  export type Jadwal_KeretaSumAggregateInputType = {
    id?: true
    dari_id?: true
    ke_id?: true
    kelas_kereta_id?: true
    harga?: true
    gerbong_id?: true
  }

  export type Jadwal_KeretaMinAggregateInputType = {
    id?: true
    dari_id?: true
    ke_id?: true
    tanggal?: true
    kelas_kereta_id?: true
    jam_berangkat?: true
    jam_tiba?: true
    harga?: true
    gerbong_id?: true
  }

  export type Jadwal_KeretaMaxAggregateInputType = {
    id?: true
    dari_id?: true
    ke_id?: true
    tanggal?: true
    kelas_kereta_id?: true
    jam_berangkat?: true
    jam_tiba?: true
    harga?: true
    gerbong_id?: true
  }

  export type Jadwal_KeretaCountAggregateInputType = {
    id?: true
    dari_id?: true
    ke_id?: true
    tanggal?: true
    kelas_kereta_id?: true
    jam_berangkat?: true
    jam_tiba?: true
    harga?: true
    gerbong_id?: true
    _all?: true
  }

  export type Jadwal_KeretaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal_Kereta to aggregate.
     */
    where?: Jadwal_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwal_Keretas to fetch.
     */
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Jadwal_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwal_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwal_Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwal_Keretas
    **/
    _count?: true | Jadwal_KeretaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Jadwal_KeretaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Jadwal_KeretaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Jadwal_KeretaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Jadwal_KeretaMaxAggregateInputType
  }

  export type GetJadwal_KeretaAggregateType<T extends Jadwal_KeretaAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal_Kereta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal_Kereta[P]>
      : GetScalarType<T[P], AggregateJadwal_Kereta[P]>
  }




  export type Jadwal_KeretaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Jadwal_KeretaWhereInput
    orderBy?: Jadwal_KeretaOrderByWithAggregationInput | Jadwal_KeretaOrderByWithAggregationInput[]
    by: Jadwal_KeretaScalarFieldEnum[] | Jadwal_KeretaScalarFieldEnum
    having?: Jadwal_KeretaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Jadwal_KeretaCountAggregateInputType | true
    _avg?: Jadwal_KeretaAvgAggregateInputType
    _sum?: Jadwal_KeretaSumAggregateInputType
    _min?: Jadwal_KeretaMinAggregateInputType
    _max?: Jadwal_KeretaMaxAggregateInputType
  }

  export type Jadwal_KeretaGroupByOutputType = {
    id: number
    dari_id: number
    ke_id: number
    tanggal: Date
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
    _count: Jadwal_KeretaCountAggregateOutputType | null
    _avg: Jadwal_KeretaAvgAggregateOutputType | null
    _sum: Jadwal_KeretaSumAggregateOutputType | null
    _min: Jadwal_KeretaMinAggregateOutputType | null
    _max: Jadwal_KeretaMaxAggregateOutputType | null
  }

  type GetJadwal_KeretaGroupByPayload<T extends Jadwal_KeretaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Jadwal_KeretaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Jadwal_KeretaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Jadwal_KeretaGroupByOutputType[P]>
            : GetScalarType<T[P], Jadwal_KeretaGroupByOutputType[P]>
        }
      >
    >


  export type Jadwal_KeretaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dari_id?: boolean
    ke_id?: boolean
    tanggal?: boolean
    kelas_kereta_id?: boolean
    jam_berangkat?: boolean
    jam_tiba?: boolean
    harga?: boolean
    gerbong_id?: boolean
    dari_stasiun?: boolean | StasiunDefaultArgs<ExtArgs>
    ke_stasiun?: boolean | StasiunDefaultArgs<ExtArgs>
    kelas_kereta?: boolean | Kelas_KeretaDefaultArgs<ExtArgs>
    tickets?: boolean | Jadwal_Kereta$ticketsArgs<ExtArgs>
    gerbong?: boolean | GerbongDefaultArgs<ExtArgs>
    _count?: boolean | Jadwal_KeretaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal_Kereta"]>



  export type Jadwal_KeretaSelectScalar = {
    id?: boolean
    dari_id?: boolean
    ke_id?: boolean
    tanggal?: boolean
    kelas_kereta_id?: boolean
    jam_berangkat?: boolean
    jam_tiba?: boolean
    harga?: boolean
    gerbong_id?: boolean
  }

  export type Jadwal_KeretaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dari_id" | "ke_id" | "tanggal" | "kelas_kereta_id" | "jam_berangkat" | "jam_tiba" | "harga" | "gerbong_id", ExtArgs["result"]["jadwal_Kereta"]>
  export type Jadwal_KeretaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dari_stasiun?: boolean | StasiunDefaultArgs<ExtArgs>
    ke_stasiun?: boolean | StasiunDefaultArgs<ExtArgs>
    kelas_kereta?: boolean | Kelas_KeretaDefaultArgs<ExtArgs>
    tickets?: boolean | Jadwal_Kereta$ticketsArgs<ExtArgs>
    gerbong?: boolean | GerbongDefaultArgs<ExtArgs>
    _count?: boolean | Jadwal_KeretaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $Jadwal_KeretaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal_Kereta"
    objects: {
      dari_stasiun: Prisma.$StasiunPayload<ExtArgs>
      ke_stasiun: Prisma.$StasiunPayload<ExtArgs>
      kelas_kereta: Prisma.$Kelas_KeretaPayload<ExtArgs>
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      gerbong: Prisma.$GerbongPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dari_id: number
      ke_id: number
      tanggal: Date
      kelas_kereta_id: number
      jam_berangkat: string
      jam_tiba: string
      harga: number
      gerbong_id: number
    }, ExtArgs["result"]["jadwal_Kereta"]>
    composites: {}
  }

  type Jadwal_KeretaGetPayload<S extends boolean | null | undefined | Jadwal_KeretaDefaultArgs> = $Result.GetResult<Prisma.$Jadwal_KeretaPayload, S>

  type Jadwal_KeretaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Jadwal_KeretaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Jadwal_KeretaCountAggregateInputType | true
    }

  export interface Jadwal_KeretaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal_Kereta'], meta: { name: 'Jadwal_Kereta' } }
    /**
     * Find zero or one Jadwal_Kereta that matches the filter.
     * @param {Jadwal_KeretaFindUniqueArgs} args - Arguments to find a Jadwal_Kereta
     * @example
     * // Get one Jadwal_Kereta
     * const jadwal_Kereta = await prisma.jadwal_Kereta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Jadwal_KeretaFindUniqueArgs>(args: SelectSubset<T, Jadwal_KeretaFindUniqueArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal_Kereta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Jadwal_KeretaFindUniqueOrThrowArgs} args - Arguments to find a Jadwal_Kereta
     * @example
     * // Get one Jadwal_Kereta
     * const jadwal_Kereta = await prisma.jadwal_Kereta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Jadwal_KeretaFindUniqueOrThrowArgs>(args: SelectSubset<T, Jadwal_KeretaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal_Kereta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_KeretaFindFirstArgs} args - Arguments to find a Jadwal_Kereta
     * @example
     * // Get one Jadwal_Kereta
     * const jadwal_Kereta = await prisma.jadwal_Kereta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Jadwal_KeretaFindFirstArgs>(args?: SelectSubset<T, Jadwal_KeretaFindFirstArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal_Kereta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_KeretaFindFirstOrThrowArgs} args - Arguments to find a Jadwal_Kereta
     * @example
     * // Get one Jadwal_Kereta
     * const jadwal_Kereta = await prisma.jadwal_Kereta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Jadwal_KeretaFindFirstOrThrowArgs>(args?: SelectSubset<T, Jadwal_KeretaFindFirstOrThrowArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwal_Keretas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_KeretaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwal_Keretas
     * const jadwal_Keretas = await prisma.jadwal_Kereta.findMany()
     * 
     * // Get first 10 Jadwal_Keretas
     * const jadwal_Keretas = await prisma.jadwal_Kereta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwal_KeretaWithIdOnly = await prisma.jadwal_Kereta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Jadwal_KeretaFindManyArgs>(args?: SelectSubset<T, Jadwal_KeretaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal_Kereta.
     * @param {Jadwal_KeretaCreateArgs} args - Arguments to create a Jadwal_Kereta.
     * @example
     * // Create one Jadwal_Kereta
     * const Jadwal_Kereta = await prisma.jadwal_Kereta.create({
     *   data: {
     *     // ... data to create a Jadwal_Kereta
     *   }
     * })
     * 
     */
    create<T extends Jadwal_KeretaCreateArgs>(args: SelectSubset<T, Jadwal_KeretaCreateArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwal_Keretas.
     * @param {Jadwal_KeretaCreateManyArgs} args - Arguments to create many Jadwal_Keretas.
     * @example
     * // Create many Jadwal_Keretas
     * const jadwal_Kereta = await prisma.jadwal_Kereta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Jadwal_KeretaCreateManyArgs>(args?: SelectSubset<T, Jadwal_KeretaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Jadwal_Kereta.
     * @param {Jadwal_KeretaDeleteArgs} args - Arguments to delete one Jadwal_Kereta.
     * @example
     * // Delete one Jadwal_Kereta
     * const Jadwal_Kereta = await prisma.jadwal_Kereta.delete({
     *   where: {
     *     // ... filter to delete one Jadwal_Kereta
     *   }
     * })
     * 
     */
    delete<T extends Jadwal_KeretaDeleteArgs>(args: SelectSubset<T, Jadwal_KeretaDeleteArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal_Kereta.
     * @param {Jadwal_KeretaUpdateArgs} args - Arguments to update one Jadwal_Kereta.
     * @example
     * // Update one Jadwal_Kereta
     * const jadwal_Kereta = await prisma.jadwal_Kereta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Jadwal_KeretaUpdateArgs>(args: SelectSubset<T, Jadwal_KeretaUpdateArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwal_Keretas.
     * @param {Jadwal_KeretaDeleteManyArgs} args - Arguments to filter Jadwal_Keretas to delete.
     * @example
     * // Delete a few Jadwal_Keretas
     * const { count } = await prisma.jadwal_Kereta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Jadwal_KeretaDeleteManyArgs>(args?: SelectSubset<T, Jadwal_KeretaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwal_Keretas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_KeretaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwal_Keretas
     * const jadwal_Kereta = await prisma.jadwal_Kereta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Jadwal_KeretaUpdateManyArgs>(args: SelectSubset<T, Jadwal_KeretaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jadwal_Kereta.
     * @param {Jadwal_KeretaUpsertArgs} args - Arguments to update or create a Jadwal_Kereta.
     * @example
     * // Update or create a Jadwal_Kereta
     * const jadwal_Kereta = await prisma.jadwal_Kereta.upsert({
     *   create: {
     *     // ... data to create a Jadwal_Kereta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal_Kereta we want to update
     *   }
     * })
     */
    upsert<T extends Jadwal_KeretaUpsertArgs>(args: SelectSubset<T, Jadwal_KeretaUpsertArgs<ExtArgs>>): Prisma__Jadwal_KeretaClient<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwal_Keretas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_KeretaCountArgs} args - Arguments to filter Jadwal_Keretas to count.
     * @example
     * // Count the number of Jadwal_Keretas
     * const count = await prisma.jadwal_Kereta.count({
     *   where: {
     *     // ... the filter for the Jadwal_Keretas we want to count
     *   }
     * })
    **/
    count<T extends Jadwal_KeretaCountArgs>(
      args?: Subset<T, Jadwal_KeretaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Jadwal_KeretaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal_Kereta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_KeretaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Jadwal_KeretaAggregateArgs>(args: Subset<T, Jadwal_KeretaAggregateArgs>): Prisma.PrismaPromise<GetJadwal_KeretaAggregateType<T>>

    /**
     * Group by Jadwal_Kereta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Jadwal_KeretaGroupByArgs} args - Group by arguments.
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
      T extends Jadwal_KeretaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Jadwal_KeretaGroupByArgs['orderBy'] }
        : { orderBy?: Jadwal_KeretaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Jadwal_KeretaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwal_KeretaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal_Kereta model
   */
  readonly fields: Jadwal_KeretaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal_Kereta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Jadwal_KeretaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dari_stasiun<T extends StasiunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StasiunDefaultArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ke_stasiun<T extends StasiunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StasiunDefaultArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kelas_kereta<T extends Kelas_KeretaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Kelas_KeretaDefaultArgs<ExtArgs>>): Prisma__Kelas_KeretaClient<$Result.GetResult<Prisma.$Kelas_KeretaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tickets<T extends Jadwal_Kereta$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Jadwal_Kereta$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gerbong<T extends GerbongDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GerbongDefaultArgs<ExtArgs>>): Prisma__GerbongClient<$Result.GetResult<Prisma.$GerbongPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Jadwal_Kereta model
   */
  interface Jadwal_KeretaFieldRefs {
    readonly id: FieldRef<"Jadwal_Kereta", 'Int'>
    readonly dari_id: FieldRef<"Jadwal_Kereta", 'Int'>
    readonly ke_id: FieldRef<"Jadwal_Kereta", 'Int'>
    readonly tanggal: FieldRef<"Jadwal_Kereta", 'DateTime'>
    readonly kelas_kereta_id: FieldRef<"Jadwal_Kereta", 'Int'>
    readonly jam_berangkat: FieldRef<"Jadwal_Kereta", 'String'>
    readonly jam_tiba: FieldRef<"Jadwal_Kereta", 'String'>
    readonly harga: FieldRef<"Jadwal_Kereta", 'Float'>
    readonly gerbong_id: FieldRef<"Jadwal_Kereta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal_Kereta findUnique
   */
  export type Jadwal_KeretaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal_Kereta to fetch.
     */
    where: Jadwal_KeretaWhereUniqueInput
  }

  /**
   * Jadwal_Kereta findUniqueOrThrow
   */
  export type Jadwal_KeretaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal_Kereta to fetch.
     */
    where: Jadwal_KeretaWhereUniqueInput
  }

  /**
   * Jadwal_Kereta findFirst
   */
  export type Jadwal_KeretaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal_Kereta to fetch.
     */
    where?: Jadwal_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwal_Keretas to fetch.
     */
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwal_Keretas.
     */
    cursor?: Jadwal_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwal_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwal_Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwal_Keretas.
     */
    distinct?: Jadwal_KeretaScalarFieldEnum | Jadwal_KeretaScalarFieldEnum[]
  }

  /**
   * Jadwal_Kereta findFirstOrThrow
   */
  export type Jadwal_KeretaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal_Kereta to fetch.
     */
    where?: Jadwal_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwal_Keretas to fetch.
     */
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwal_Keretas.
     */
    cursor?: Jadwal_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwal_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwal_Keretas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwal_Keretas.
     */
    distinct?: Jadwal_KeretaScalarFieldEnum | Jadwal_KeretaScalarFieldEnum[]
  }

  /**
   * Jadwal_Kereta findMany
   */
  export type Jadwal_KeretaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal_Keretas to fetch.
     */
    where?: Jadwal_KeretaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwal_Keretas to fetch.
     */
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwal_Keretas.
     */
    cursor?: Jadwal_KeretaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwal_Keretas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwal_Keretas.
     */
    skip?: number
    distinct?: Jadwal_KeretaScalarFieldEnum | Jadwal_KeretaScalarFieldEnum[]
  }

  /**
   * Jadwal_Kereta create
   */
  export type Jadwal_KeretaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * The data needed to create a Jadwal_Kereta.
     */
    data: XOR<Jadwal_KeretaCreateInput, Jadwal_KeretaUncheckedCreateInput>
  }

  /**
   * Jadwal_Kereta createMany
   */
  export type Jadwal_KeretaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwal_Keretas.
     */
    data: Jadwal_KeretaCreateManyInput | Jadwal_KeretaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal_Kereta update
   */
  export type Jadwal_KeretaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * The data needed to update a Jadwal_Kereta.
     */
    data: XOR<Jadwal_KeretaUpdateInput, Jadwal_KeretaUncheckedUpdateInput>
    /**
     * Choose, which Jadwal_Kereta to update.
     */
    where: Jadwal_KeretaWhereUniqueInput
  }

  /**
   * Jadwal_Kereta updateMany
   */
  export type Jadwal_KeretaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwal_Keretas.
     */
    data: XOR<Jadwal_KeretaUpdateManyMutationInput, Jadwal_KeretaUncheckedUpdateManyInput>
    /**
     * Filter which Jadwal_Keretas to update
     */
    where?: Jadwal_KeretaWhereInput
  }

  /**
   * Jadwal_Kereta upsert
   */
  export type Jadwal_KeretaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * The filter to search for the Jadwal_Kereta to update in case it exists.
     */
    where: Jadwal_KeretaWhereUniqueInput
    /**
     * In case the Jadwal_Kereta found by the `where` argument doesn't exist, create a new Jadwal_Kereta with this data.
     */
    create: XOR<Jadwal_KeretaCreateInput, Jadwal_KeretaUncheckedCreateInput>
    /**
     * In case the Jadwal_Kereta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Jadwal_KeretaUpdateInput, Jadwal_KeretaUncheckedUpdateInput>
  }

  /**
   * Jadwal_Kereta delete
   */
  export type Jadwal_KeretaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    /**
     * Filter which Jadwal_Kereta to delete.
     */
    where: Jadwal_KeretaWhereUniqueInput
  }

  /**
   * Jadwal_Kereta deleteMany
   */
  export type Jadwal_KeretaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal_Keretas to delete
     */
    where?: Jadwal_KeretaWhereInput
  }

  /**
   * Jadwal_Kereta.tickets
   */
  export type Jadwal_Kereta$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Jadwal_Kereta without action
   */
  export type Jadwal_KeretaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
  }


  /**
   * Model Stasiun
   */

  export type AggregateStasiun = {
    _count: StasiunCountAggregateOutputType | null
    _avg: StasiunAvgAggregateOutputType | null
    _sum: StasiunSumAggregateOutputType | null
    _min: StasiunMinAggregateOutputType | null
    _max: StasiunMaxAggregateOutputType | null
  }

  export type StasiunAvgAggregateOutputType = {
    id: number | null
  }

  export type StasiunSumAggregateOutputType = {
    id: number | null
  }

  export type StasiunMinAggregateOutputType = {
    id: number | null
    nama: string | null
    kota: string | null
  }

  export type StasiunMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    kota: string | null
  }

  export type StasiunCountAggregateOutputType = {
    id: number
    nama: number
    kota: number
    _all: number
  }


  export type StasiunAvgAggregateInputType = {
    id?: true
  }

  export type StasiunSumAggregateInputType = {
    id?: true
  }

  export type StasiunMinAggregateInputType = {
    id?: true
    nama?: true
    kota?: true
  }

  export type StasiunMaxAggregateInputType = {
    id?: true
    nama?: true
    kota?: true
  }

  export type StasiunCountAggregateInputType = {
    id?: true
    nama?: true
    kota?: true
    _all?: true
  }

  export type StasiunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stasiun to aggregate.
     */
    where?: StasiunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stasiuns to fetch.
     */
    orderBy?: StasiunOrderByWithRelationInput | StasiunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StasiunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stasiuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stasiuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stasiuns
    **/
    _count?: true | StasiunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StasiunAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StasiunSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StasiunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StasiunMaxAggregateInputType
  }

  export type GetStasiunAggregateType<T extends StasiunAggregateArgs> = {
        [P in keyof T & keyof AggregateStasiun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStasiun[P]>
      : GetScalarType<T[P], AggregateStasiun[P]>
  }




  export type StasiunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StasiunWhereInput
    orderBy?: StasiunOrderByWithAggregationInput | StasiunOrderByWithAggregationInput[]
    by: StasiunScalarFieldEnum[] | StasiunScalarFieldEnum
    having?: StasiunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StasiunCountAggregateInputType | true
    _avg?: StasiunAvgAggregateInputType
    _sum?: StasiunSumAggregateInputType
    _min?: StasiunMinAggregateInputType
    _max?: StasiunMaxAggregateInputType
  }

  export type StasiunGroupByOutputType = {
    id: number
    nama: string
    kota: string
    _count: StasiunCountAggregateOutputType | null
    _avg: StasiunAvgAggregateOutputType | null
    _sum: StasiunSumAggregateOutputType | null
    _min: StasiunMinAggregateOutputType | null
    _max: StasiunMaxAggregateOutputType | null
  }

  type GetStasiunGroupByPayload<T extends StasiunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StasiunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StasiunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StasiunGroupByOutputType[P]>
            : GetScalarType<T[P], StasiunGroupByOutputType[P]>
        }
      >
    >


  export type StasiunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    kota?: boolean
    jadwal_berangkat?: boolean | Stasiun$jadwal_berangkatArgs<ExtArgs>
    jadwal_tujuan?: boolean | Stasiun$jadwal_tujuanArgs<ExtArgs>
    _count?: boolean | StasiunCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stasiun"]>



  export type StasiunSelectScalar = {
    id?: boolean
    nama?: boolean
    kota?: boolean
  }

  export type StasiunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "kota", ExtArgs["result"]["stasiun"]>
  export type StasiunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal_berangkat?: boolean | Stasiun$jadwal_berangkatArgs<ExtArgs>
    jadwal_tujuan?: boolean | Stasiun$jadwal_tujuanArgs<ExtArgs>
    _count?: boolean | StasiunCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StasiunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stasiun"
    objects: {
      jadwal_berangkat: Prisma.$Jadwal_KeretaPayload<ExtArgs>[]
      jadwal_tujuan: Prisma.$Jadwal_KeretaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      kota: string
    }, ExtArgs["result"]["stasiun"]>
    composites: {}
  }

  type StasiunGetPayload<S extends boolean | null | undefined | StasiunDefaultArgs> = $Result.GetResult<Prisma.$StasiunPayload, S>

  type StasiunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StasiunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StasiunCountAggregateInputType | true
    }

  export interface StasiunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stasiun'], meta: { name: 'Stasiun' } }
    /**
     * Find zero or one Stasiun that matches the filter.
     * @param {StasiunFindUniqueArgs} args - Arguments to find a Stasiun
     * @example
     * // Get one Stasiun
     * const stasiun = await prisma.stasiun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StasiunFindUniqueArgs>(args: SelectSubset<T, StasiunFindUniqueArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stasiun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StasiunFindUniqueOrThrowArgs} args - Arguments to find a Stasiun
     * @example
     * // Get one Stasiun
     * const stasiun = await prisma.stasiun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StasiunFindUniqueOrThrowArgs>(args: SelectSubset<T, StasiunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stasiun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StasiunFindFirstArgs} args - Arguments to find a Stasiun
     * @example
     * // Get one Stasiun
     * const stasiun = await prisma.stasiun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StasiunFindFirstArgs>(args?: SelectSubset<T, StasiunFindFirstArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stasiun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StasiunFindFirstOrThrowArgs} args - Arguments to find a Stasiun
     * @example
     * // Get one Stasiun
     * const stasiun = await prisma.stasiun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StasiunFindFirstOrThrowArgs>(args?: SelectSubset<T, StasiunFindFirstOrThrowArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stasiuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StasiunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stasiuns
     * const stasiuns = await prisma.stasiun.findMany()
     * 
     * // Get first 10 Stasiuns
     * const stasiuns = await prisma.stasiun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stasiunWithIdOnly = await prisma.stasiun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StasiunFindManyArgs>(args?: SelectSubset<T, StasiunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stasiun.
     * @param {StasiunCreateArgs} args - Arguments to create a Stasiun.
     * @example
     * // Create one Stasiun
     * const Stasiun = await prisma.stasiun.create({
     *   data: {
     *     // ... data to create a Stasiun
     *   }
     * })
     * 
     */
    create<T extends StasiunCreateArgs>(args: SelectSubset<T, StasiunCreateArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stasiuns.
     * @param {StasiunCreateManyArgs} args - Arguments to create many Stasiuns.
     * @example
     * // Create many Stasiuns
     * const stasiun = await prisma.stasiun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StasiunCreateManyArgs>(args?: SelectSubset<T, StasiunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Stasiun.
     * @param {StasiunDeleteArgs} args - Arguments to delete one Stasiun.
     * @example
     * // Delete one Stasiun
     * const Stasiun = await prisma.stasiun.delete({
     *   where: {
     *     // ... filter to delete one Stasiun
     *   }
     * })
     * 
     */
    delete<T extends StasiunDeleteArgs>(args: SelectSubset<T, StasiunDeleteArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stasiun.
     * @param {StasiunUpdateArgs} args - Arguments to update one Stasiun.
     * @example
     * // Update one Stasiun
     * const stasiun = await prisma.stasiun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StasiunUpdateArgs>(args: SelectSubset<T, StasiunUpdateArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stasiuns.
     * @param {StasiunDeleteManyArgs} args - Arguments to filter Stasiuns to delete.
     * @example
     * // Delete a few Stasiuns
     * const { count } = await prisma.stasiun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StasiunDeleteManyArgs>(args?: SelectSubset<T, StasiunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stasiuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StasiunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stasiuns
     * const stasiun = await prisma.stasiun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StasiunUpdateManyArgs>(args: SelectSubset<T, StasiunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stasiun.
     * @param {StasiunUpsertArgs} args - Arguments to update or create a Stasiun.
     * @example
     * // Update or create a Stasiun
     * const stasiun = await prisma.stasiun.upsert({
     *   create: {
     *     // ... data to create a Stasiun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stasiun we want to update
     *   }
     * })
     */
    upsert<T extends StasiunUpsertArgs>(args: SelectSubset<T, StasiunUpsertArgs<ExtArgs>>): Prisma__StasiunClient<$Result.GetResult<Prisma.$StasiunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stasiuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StasiunCountArgs} args - Arguments to filter Stasiuns to count.
     * @example
     * // Count the number of Stasiuns
     * const count = await prisma.stasiun.count({
     *   where: {
     *     // ... the filter for the Stasiuns we want to count
     *   }
     * })
    **/
    count<T extends StasiunCountArgs>(
      args?: Subset<T, StasiunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StasiunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stasiun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StasiunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StasiunAggregateArgs>(args: Subset<T, StasiunAggregateArgs>): Prisma.PrismaPromise<GetStasiunAggregateType<T>>

    /**
     * Group by Stasiun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StasiunGroupByArgs} args - Group by arguments.
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
      T extends StasiunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StasiunGroupByArgs['orderBy'] }
        : { orderBy?: StasiunGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StasiunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStasiunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stasiun model
   */
  readonly fields: StasiunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stasiun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StasiunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal_berangkat<T extends Stasiun$jadwal_berangkatArgs<ExtArgs> = {}>(args?: Subset<T, Stasiun$jadwal_berangkatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jadwal_tujuan<T extends Stasiun$jadwal_tujuanArgs<ExtArgs> = {}>(args?: Subset<T, Stasiun$jadwal_tujuanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Jadwal_KeretaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Stasiun model
   */
  interface StasiunFieldRefs {
    readonly id: FieldRef<"Stasiun", 'Int'>
    readonly nama: FieldRef<"Stasiun", 'String'>
    readonly kota: FieldRef<"Stasiun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stasiun findUnique
   */
  export type StasiunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * Filter, which Stasiun to fetch.
     */
    where: StasiunWhereUniqueInput
  }

  /**
   * Stasiun findUniqueOrThrow
   */
  export type StasiunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * Filter, which Stasiun to fetch.
     */
    where: StasiunWhereUniqueInput
  }

  /**
   * Stasiun findFirst
   */
  export type StasiunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * Filter, which Stasiun to fetch.
     */
    where?: StasiunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stasiuns to fetch.
     */
    orderBy?: StasiunOrderByWithRelationInput | StasiunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stasiuns.
     */
    cursor?: StasiunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stasiuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stasiuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stasiuns.
     */
    distinct?: StasiunScalarFieldEnum | StasiunScalarFieldEnum[]
  }

  /**
   * Stasiun findFirstOrThrow
   */
  export type StasiunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * Filter, which Stasiun to fetch.
     */
    where?: StasiunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stasiuns to fetch.
     */
    orderBy?: StasiunOrderByWithRelationInput | StasiunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stasiuns.
     */
    cursor?: StasiunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stasiuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stasiuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stasiuns.
     */
    distinct?: StasiunScalarFieldEnum | StasiunScalarFieldEnum[]
  }

  /**
   * Stasiun findMany
   */
  export type StasiunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * Filter, which Stasiuns to fetch.
     */
    where?: StasiunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stasiuns to fetch.
     */
    orderBy?: StasiunOrderByWithRelationInput | StasiunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stasiuns.
     */
    cursor?: StasiunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stasiuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stasiuns.
     */
    skip?: number
    distinct?: StasiunScalarFieldEnum | StasiunScalarFieldEnum[]
  }

  /**
   * Stasiun create
   */
  export type StasiunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * The data needed to create a Stasiun.
     */
    data: XOR<StasiunCreateInput, StasiunUncheckedCreateInput>
  }

  /**
   * Stasiun createMany
   */
  export type StasiunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stasiuns.
     */
    data: StasiunCreateManyInput | StasiunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stasiun update
   */
  export type StasiunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * The data needed to update a Stasiun.
     */
    data: XOR<StasiunUpdateInput, StasiunUncheckedUpdateInput>
    /**
     * Choose, which Stasiun to update.
     */
    where: StasiunWhereUniqueInput
  }

  /**
   * Stasiun updateMany
   */
  export type StasiunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stasiuns.
     */
    data: XOR<StasiunUpdateManyMutationInput, StasiunUncheckedUpdateManyInput>
    /**
     * Filter which Stasiuns to update
     */
    where?: StasiunWhereInput
  }

  /**
   * Stasiun upsert
   */
  export type StasiunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * The filter to search for the Stasiun to update in case it exists.
     */
    where: StasiunWhereUniqueInput
    /**
     * In case the Stasiun found by the `where` argument doesn't exist, create a new Stasiun with this data.
     */
    create: XOR<StasiunCreateInput, StasiunUncheckedCreateInput>
    /**
     * In case the Stasiun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StasiunUpdateInput, StasiunUncheckedUpdateInput>
  }

  /**
   * Stasiun delete
   */
  export type StasiunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
    /**
     * Filter which Stasiun to delete.
     */
    where: StasiunWhereUniqueInput
  }

  /**
   * Stasiun deleteMany
   */
  export type StasiunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stasiuns to delete
     */
    where?: StasiunWhereInput
  }

  /**
   * Stasiun.jadwal_berangkat
   */
  export type Stasiun$jadwal_berangkatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    where?: Jadwal_KeretaWhereInput
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    cursor?: Jadwal_KeretaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jadwal_KeretaScalarFieldEnum | Jadwal_KeretaScalarFieldEnum[]
  }

  /**
   * Stasiun.jadwal_tujuan
   */
  export type Stasiun$jadwal_tujuanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal_Kereta
     */
    select?: Jadwal_KeretaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal_Kereta
     */
    omit?: Jadwal_KeretaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Jadwal_KeretaInclude<ExtArgs> | null
    where?: Jadwal_KeretaWhereInput
    orderBy?: Jadwal_KeretaOrderByWithRelationInput | Jadwal_KeretaOrderByWithRelationInput[]
    cursor?: Jadwal_KeretaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Jadwal_KeretaScalarFieldEnum | Jadwal_KeretaScalarFieldEnum[]
  }

  /**
   * Stasiun without action
   */
  export type StasiunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stasiun
     */
    select?: StasiunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stasiun
     */
    omit?: StasiunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StasiunInclude<ExtArgs> | null
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
    name: 'name',
    nomor_identitas: 'nomor_identitas',
    nomor_hp: 'nomor_hp',
    email: 'email',
    alamat: 'alamat',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const Kelas_KeretaScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type Kelas_KeretaScalarFieldEnum = (typeof Kelas_KeretaScalarFieldEnum)[keyof typeof Kelas_KeretaScalarFieldEnum]


  export const GerbongScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kelas_kereta_id: 'kelas_kereta_id'
  };

  export type GerbongScalarFieldEnum = (typeof GerbongScalarFieldEnum)[keyof typeof GerbongScalarFieldEnum]


  export const KursiScalarFieldEnum: {
    id: 'id',
    nomor: 'nomor',
    gerbong_id: 'gerbong_id'
  };

  export type KursiScalarFieldEnum = (typeof KursiScalarFieldEnum)[keyof typeof KursiScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    kursi_id: 'kursi_id',
    kelas_kereta_id: 'kelas_kereta_id',
    jadwal_kereta_id: 'jadwal_kereta_id',
    transaksi_id: 'transaksi_id',
    tanggal: 'tanggal'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const PenumpangScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nomor_identitas: 'nomor_identitas',
    nomor_hp: 'nomor_hp',
    address: 'address',
    ticket_id: 'ticket_id'
  };

  export type PenumpangScalarFieldEnum = (typeof PenumpangScalarFieldEnum)[keyof typeof PenumpangScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id: 'id',
    total_harga: 'total_harga',
    metode_pembayaran_id: 'metode_pembayaran_id',
    status: 'status',
    createdAt: 'createdAt',
    va: 'va',
    nomor_kartu: 'nomor_kartu'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const Metode_PembayaranScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    tipe: 'tipe'
  };

  export type Metode_PembayaranScalarFieldEnum = (typeof Metode_PembayaranScalarFieldEnum)[keyof typeof Metode_PembayaranScalarFieldEnum]


  export const Jadwal_KeretaScalarFieldEnum: {
    id: 'id',
    dari_id: 'dari_id',
    ke_id: 'ke_id',
    tanggal: 'tanggal',
    kelas_kereta_id: 'kelas_kereta_id',
    jam_berangkat: 'jam_berangkat',
    jam_tiba: 'jam_tiba',
    harga: 'harga',
    gerbong_id: 'gerbong_id'
  };

  export type Jadwal_KeretaScalarFieldEnum = (typeof Jadwal_KeretaScalarFieldEnum)[keyof typeof Jadwal_KeretaScalarFieldEnum]


  export const StasiunScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    kota: 'kota'
  };

  export type StasiunScalarFieldEnum = (typeof StasiunScalarFieldEnum)[keyof typeof StasiunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'order_status'
   */
  export type Enumorder_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'order_status'>
    


  /**
   * Reference to a field of type 'paymentmethod_tipe'
   */
  export type Enumpaymentmethod_tipeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paymentmethod_tipe'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    nomor_identitas?: StringFilter<"User"> | string
    nomor_hp?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    alamat?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tickets?: TicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    nomor_identitas?: StringFilter<"User"> | string
    nomor_hp?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    alamat?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tickets?: TicketListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    nomor_identitas?: StringWithAggregatesFilter<"User"> | string
    nomor_hp?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    alamat?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type Kelas_KeretaWhereInput = {
    AND?: Kelas_KeretaWhereInput | Kelas_KeretaWhereInput[]
    OR?: Kelas_KeretaWhereInput[]
    NOT?: Kelas_KeretaWhereInput | Kelas_KeretaWhereInput[]
    id?: IntFilter<"Kelas_Kereta"> | number
    nama?: StringFilter<"Kelas_Kereta"> | string
    gerbong_list?: GerbongListRelationFilter
    tickets?: TicketListRelationFilter
    jadwal_kereta?: Jadwal_KeretaListRelationFilter
  }

  export type Kelas_KeretaOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    gerbong_list?: GerbongOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    jadwal_kereta?: Jadwal_KeretaOrderByRelationAggregateInput
  }

  export type Kelas_KeretaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Kelas_KeretaWhereInput | Kelas_KeretaWhereInput[]
    OR?: Kelas_KeretaWhereInput[]
    NOT?: Kelas_KeretaWhereInput | Kelas_KeretaWhereInput[]
    nama?: StringFilter<"Kelas_Kereta"> | string
    gerbong_list?: GerbongListRelationFilter
    tickets?: TicketListRelationFilter
    jadwal_kereta?: Jadwal_KeretaListRelationFilter
  }, "id">

  export type Kelas_KeretaOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: Kelas_KeretaCountOrderByAggregateInput
    _avg?: Kelas_KeretaAvgOrderByAggregateInput
    _max?: Kelas_KeretaMaxOrderByAggregateInput
    _min?: Kelas_KeretaMinOrderByAggregateInput
    _sum?: Kelas_KeretaSumOrderByAggregateInput
  }

  export type Kelas_KeretaScalarWhereWithAggregatesInput = {
    AND?: Kelas_KeretaScalarWhereWithAggregatesInput | Kelas_KeretaScalarWhereWithAggregatesInput[]
    OR?: Kelas_KeretaScalarWhereWithAggregatesInput[]
    NOT?: Kelas_KeretaScalarWhereWithAggregatesInput | Kelas_KeretaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kelas_Kereta"> | number
    nama?: StringWithAggregatesFilter<"Kelas_Kereta"> | string
  }

  export type GerbongWhereInput = {
    AND?: GerbongWhereInput | GerbongWhereInput[]
    OR?: GerbongWhereInput[]
    NOT?: GerbongWhereInput | GerbongWhereInput[]
    id?: IntFilter<"Gerbong"> | number
    nama?: StringFilter<"Gerbong"> | string
    kelas_kereta_id?: IntFilter<"Gerbong"> | number
    kelas_kereta?: XOR<Kelas_KeretaRelationFilter, Kelas_KeretaWhereInput>
    kursi_list?: KursiListRelationFilter
    Jadwal_Kereta?: Jadwal_KeretaListRelationFilter
  }

  export type GerbongOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kelas_kereta_id?: SortOrder
    kelas_kereta?: Kelas_KeretaOrderByWithRelationInput
    kursi_list?: KursiOrderByRelationAggregateInput
    Jadwal_Kereta?: Jadwal_KeretaOrderByRelationAggregateInput
  }

  export type GerbongWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GerbongWhereInput | GerbongWhereInput[]
    OR?: GerbongWhereInput[]
    NOT?: GerbongWhereInput | GerbongWhereInput[]
    nama?: StringFilter<"Gerbong"> | string
    kelas_kereta_id?: IntFilter<"Gerbong"> | number
    kelas_kereta?: XOR<Kelas_KeretaRelationFilter, Kelas_KeretaWhereInput>
    kursi_list?: KursiListRelationFilter
    Jadwal_Kereta?: Jadwal_KeretaListRelationFilter
  }, "id">

  export type GerbongOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kelas_kereta_id?: SortOrder
    _count?: GerbongCountOrderByAggregateInput
    _avg?: GerbongAvgOrderByAggregateInput
    _max?: GerbongMaxOrderByAggregateInput
    _min?: GerbongMinOrderByAggregateInput
    _sum?: GerbongSumOrderByAggregateInput
  }

  export type GerbongScalarWhereWithAggregatesInput = {
    AND?: GerbongScalarWhereWithAggregatesInput | GerbongScalarWhereWithAggregatesInput[]
    OR?: GerbongScalarWhereWithAggregatesInput[]
    NOT?: GerbongScalarWhereWithAggregatesInput | GerbongScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gerbong"> | number
    nama?: StringWithAggregatesFilter<"Gerbong"> | string
    kelas_kereta_id?: IntWithAggregatesFilter<"Gerbong"> | number
  }

  export type KursiWhereInput = {
    AND?: KursiWhereInput | KursiWhereInput[]
    OR?: KursiWhereInput[]
    NOT?: KursiWhereInput | KursiWhereInput[]
    id?: IntFilter<"Kursi"> | number
    nomor?: StringFilter<"Kursi"> | string
    gerbong_id?: IntFilter<"Kursi"> | number
    gerbong?: XOR<GerbongRelationFilter, GerbongWhereInput>
    tickets?: TicketListRelationFilter
  }

  export type KursiOrderByWithRelationInput = {
    id?: SortOrder
    nomor?: SortOrder
    gerbong_id?: SortOrder
    gerbong?: GerbongOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type KursiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KursiWhereInput | KursiWhereInput[]
    OR?: KursiWhereInput[]
    NOT?: KursiWhereInput | KursiWhereInput[]
    nomor?: StringFilter<"Kursi"> | string
    gerbong_id?: IntFilter<"Kursi"> | number
    gerbong?: XOR<GerbongRelationFilter, GerbongWhereInput>
    tickets?: TicketListRelationFilter
  }, "id">

  export type KursiOrderByWithAggregationInput = {
    id?: SortOrder
    nomor?: SortOrder
    gerbong_id?: SortOrder
    _count?: KursiCountOrderByAggregateInput
    _avg?: KursiAvgOrderByAggregateInput
    _max?: KursiMaxOrderByAggregateInput
    _min?: KursiMinOrderByAggregateInput
    _sum?: KursiSumOrderByAggregateInput
  }

  export type KursiScalarWhereWithAggregatesInput = {
    AND?: KursiScalarWhereWithAggregatesInput | KursiScalarWhereWithAggregatesInput[]
    OR?: KursiScalarWhereWithAggregatesInput[]
    NOT?: KursiScalarWhereWithAggregatesInput | KursiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kursi"> | number
    nomor?: StringWithAggregatesFilter<"Kursi"> | string
    gerbong_id?: IntWithAggregatesFilter<"Kursi"> | number
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    user_id?: IntFilter<"Ticket"> | number
    kursi_id?: IntFilter<"Ticket"> | number
    kelas_kereta_id?: IntFilter<"Ticket"> | number
    jadwal_kereta_id?: IntFilter<"Ticket"> | number
    transaksi_id?: IntNullableFilter<"Ticket"> | number | null
    tanggal?: DateTimeFilter<"Ticket"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    kursi?: XOR<KursiRelationFilter, KursiWhereInput>
    kelas_kereta?: XOR<Kelas_KeretaRelationFilter, Kelas_KeretaWhereInput>
    jadwal_kereta?: XOR<Jadwal_KeretaRelationFilter, Jadwal_KeretaWhereInput>
    transaksi?: XOR<TransaksiNullableRelationFilter, TransaksiWhereInput> | null
    penumpang?: XOR<PenumpangNullableRelationFilter, PenumpangWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    kursi_id?: SortOrder
    kelas_kereta_id?: SortOrder
    jadwal_kereta_id?: SortOrder
    transaksi_id?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    user?: UserOrderByWithRelationInput
    kursi?: KursiOrderByWithRelationInput
    kelas_kereta?: Kelas_KeretaOrderByWithRelationInput
    jadwal_kereta?: Jadwal_KeretaOrderByWithRelationInput
    transaksi?: TransaksiOrderByWithRelationInput
    penumpang?: PenumpangOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    user_id?: IntFilter<"Ticket"> | number
    kursi_id?: IntFilter<"Ticket"> | number
    kelas_kereta_id?: IntFilter<"Ticket"> | number
    jadwal_kereta_id?: IntFilter<"Ticket"> | number
    transaksi_id?: IntNullableFilter<"Ticket"> | number | null
    tanggal?: DateTimeFilter<"Ticket"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    kursi?: XOR<KursiRelationFilter, KursiWhereInput>
    kelas_kereta?: XOR<Kelas_KeretaRelationFilter, Kelas_KeretaWhereInput>
    jadwal_kereta?: XOR<Jadwal_KeretaRelationFilter, Jadwal_KeretaWhereInput>
    transaksi?: XOR<TransaksiNullableRelationFilter, TransaksiWhereInput> | null
    penumpang?: XOR<PenumpangNullableRelationFilter, PenumpangWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    kursi_id?: SortOrder
    kelas_kereta_id?: SortOrder
    jadwal_kereta_id?: SortOrder
    transaksi_id?: SortOrderInput | SortOrder
    tanggal?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    user_id?: IntWithAggregatesFilter<"Ticket"> | number
    kursi_id?: IntWithAggregatesFilter<"Ticket"> | number
    kelas_kereta_id?: IntWithAggregatesFilter<"Ticket"> | number
    jadwal_kereta_id?: IntWithAggregatesFilter<"Ticket"> | number
    transaksi_id?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    tanggal?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type PenumpangWhereInput = {
    AND?: PenumpangWhereInput | PenumpangWhereInput[]
    OR?: PenumpangWhereInput[]
    NOT?: PenumpangWhereInput | PenumpangWhereInput[]
    id?: IntFilter<"Penumpang"> | number
    nama?: StringFilter<"Penumpang"> | string
    nomor_identitas?: StringFilter<"Penumpang"> | string
    nomor_hp?: StringFilter<"Penumpang"> | string
    address?: StringFilter<"Penumpang"> | string
    ticket_id?: IntFilter<"Penumpang"> | number
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }

  export type PenumpangOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    address?: SortOrder
    ticket_id?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type PenumpangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticket_id?: number
    AND?: PenumpangWhereInput | PenumpangWhereInput[]
    OR?: PenumpangWhereInput[]
    NOT?: PenumpangWhereInput | PenumpangWhereInput[]
    nama?: StringFilter<"Penumpang"> | string
    nomor_identitas?: StringFilter<"Penumpang"> | string
    nomor_hp?: StringFilter<"Penumpang"> | string
    address?: StringFilter<"Penumpang"> | string
    ticket?: XOR<TicketRelationFilter, TicketWhereInput>
  }, "id" | "ticket_id">

  export type PenumpangOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    address?: SortOrder
    ticket_id?: SortOrder
    _count?: PenumpangCountOrderByAggregateInput
    _avg?: PenumpangAvgOrderByAggregateInput
    _max?: PenumpangMaxOrderByAggregateInput
    _min?: PenumpangMinOrderByAggregateInput
    _sum?: PenumpangSumOrderByAggregateInput
  }

  export type PenumpangScalarWhereWithAggregatesInput = {
    AND?: PenumpangScalarWhereWithAggregatesInput | PenumpangScalarWhereWithAggregatesInput[]
    OR?: PenumpangScalarWhereWithAggregatesInput[]
    NOT?: PenumpangScalarWhereWithAggregatesInput | PenumpangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Penumpang"> | number
    nama?: StringWithAggregatesFilter<"Penumpang"> | string
    nomor_identitas?: StringWithAggregatesFilter<"Penumpang"> | string
    nomor_hp?: StringWithAggregatesFilter<"Penumpang"> | string
    address?: StringWithAggregatesFilter<"Penumpang"> | string
    ticket_id?: IntWithAggregatesFilter<"Penumpang"> | number
  }

  export type TransaksiWhereInput = {
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    id?: IntFilter<"Transaksi"> | number
    total_harga?: FloatFilter<"Transaksi"> | number
    metode_pembayaran_id?: IntFilter<"Transaksi"> | number
    status?: Enumorder_statusFilter<"Transaksi"> | $Enums.order_status
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    va?: StringNullableFilter<"Transaksi"> | string | null
    nomor_kartu?: StringNullableFilter<"Transaksi"> | string | null
    tickets?: TicketListRelationFilter
    metode_pembayaran?: XOR<Metode_PembayaranRelationFilter, Metode_PembayaranWhereInput>
  }

  export type TransaksiOrderByWithRelationInput = {
    id?: SortOrder
    total_harga?: SortOrder
    metode_pembayaran_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    va?: SortOrderInput | SortOrder
    nomor_kartu?: SortOrderInput | SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    metode_pembayaran?: Metode_PembayaranOrderByWithRelationInput
  }

  export type TransaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    total_harga?: FloatFilter<"Transaksi"> | number
    metode_pembayaran_id?: IntFilter<"Transaksi"> | number
    status?: Enumorder_statusFilter<"Transaksi"> | $Enums.order_status
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    va?: StringNullableFilter<"Transaksi"> | string | null
    nomor_kartu?: StringNullableFilter<"Transaksi"> | string | null
    tickets?: TicketListRelationFilter
    metode_pembayaran?: XOR<Metode_PembayaranRelationFilter, Metode_PembayaranWhereInput>
  }, "id">

  export type TransaksiOrderByWithAggregationInput = {
    id?: SortOrder
    total_harga?: SortOrder
    metode_pembayaran_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    va?: SortOrderInput | SortOrder
    nomor_kartu?: SortOrderInput | SortOrder
    _count?: TransaksiCountOrderByAggregateInput
    _avg?: TransaksiAvgOrderByAggregateInput
    _max?: TransaksiMaxOrderByAggregateInput
    _min?: TransaksiMinOrderByAggregateInput
    _sum?: TransaksiSumOrderByAggregateInput
  }

  export type TransaksiScalarWhereWithAggregatesInput = {
    AND?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    OR?: TransaksiScalarWhereWithAggregatesInput[]
    NOT?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaksi"> | number
    total_harga?: FloatWithAggregatesFilter<"Transaksi"> | number
    metode_pembayaran_id?: IntWithAggregatesFilter<"Transaksi"> | number
    status?: Enumorder_statusWithAggregatesFilter<"Transaksi"> | $Enums.order_status
    createdAt?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
    va?: StringNullableWithAggregatesFilter<"Transaksi"> | string | null
    nomor_kartu?: StringNullableWithAggregatesFilter<"Transaksi"> | string | null
  }

  export type Metode_PembayaranWhereInput = {
    AND?: Metode_PembayaranWhereInput | Metode_PembayaranWhereInput[]
    OR?: Metode_PembayaranWhereInput[]
    NOT?: Metode_PembayaranWhereInput | Metode_PembayaranWhereInput[]
    id?: IntFilter<"Metode_Pembayaran"> | number
    nama?: StringFilter<"Metode_Pembayaran"> | string
    tipe?: Enumpaymentmethod_tipeNullableFilter<"Metode_Pembayaran"> | $Enums.paymentmethod_tipe | null
    transaksi_list?: TransaksiListRelationFilter
  }

  export type Metode_PembayaranOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    tipe?: SortOrderInput | SortOrder
    transaksi_list?: TransaksiOrderByRelationAggregateInput
  }

  export type Metode_PembayaranWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Metode_PembayaranWhereInput | Metode_PembayaranWhereInput[]
    OR?: Metode_PembayaranWhereInput[]
    NOT?: Metode_PembayaranWhereInput | Metode_PembayaranWhereInput[]
    nama?: StringFilter<"Metode_Pembayaran"> | string
    tipe?: Enumpaymentmethod_tipeNullableFilter<"Metode_Pembayaran"> | $Enums.paymentmethod_tipe | null
    transaksi_list?: TransaksiListRelationFilter
  }, "id">

  export type Metode_PembayaranOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    tipe?: SortOrderInput | SortOrder
    _count?: Metode_PembayaranCountOrderByAggregateInput
    _avg?: Metode_PembayaranAvgOrderByAggregateInput
    _max?: Metode_PembayaranMaxOrderByAggregateInput
    _min?: Metode_PembayaranMinOrderByAggregateInput
    _sum?: Metode_PembayaranSumOrderByAggregateInput
  }

  export type Metode_PembayaranScalarWhereWithAggregatesInput = {
    AND?: Metode_PembayaranScalarWhereWithAggregatesInput | Metode_PembayaranScalarWhereWithAggregatesInput[]
    OR?: Metode_PembayaranScalarWhereWithAggregatesInput[]
    NOT?: Metode_PembayaranScalarWhereWithAggregatesInput | Metode_PembayaranScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Metode_Pembayaran"> | number
    nama?: StringWithAggregatesFilter<"Metode_Pembayaran"> | string
    tipe?: Enumpaymentmethod_tipeNullableWithAggregatesFilter<"Metode_Pembayaran"> | $Enums.paymentmethod_tipe | null
  }

  export type Jadwal_KeretaWhereInput = {
    AND?: Jadwal_KeretaWhereInput | Jadwal_KeretaWhereInput[]
    OR?: Jadwal_KeretaWhereInput[]
    NOT?: Jadwal_KeretaWhereInput | Jadwal_KeretaWhereInput[]
    id?: IntFilter<"Jadwal_Kereta"> | number
    dari_id?: IntFilter<"Jadwal_Kereta"> | number
    ke_id?: IntFilter<"Jadwal_Kereta"> | number
    tanggal?: DateTimeFilter<"Jadwal_Kereta"> | Date | string
    kelas_kereta_id?: IntFilter<"Jadwal_Kereta"> | number
    jam_berangkat?: StringFilter<"Jadwal_Kereta"> | string
    jam_tiba?: StringFilter<"Jadwal_Kereta"> | string
    harga?: FloatFilter<"Jadwal_Kereta"> | number
    gerbong_id?: IntFilter<"Jadwal_Kereta"> | number
    dari_stasiun?: XOR<StasiunRelationFilter, StasiunWhereInput>
    ke_stasiun?: XOR<StasiunRelationFilter, StasiunWhereInput>
    kelas_kereta?: XOR<Kelas_KeretaRelationFilter, Kelas_KeretaWhereInput>
    tickets?: TicketListRelationFilter
    gerbong?: XOR<GerbongRelationFilter, GerbongWhereInput>
  }

  export type Jadwal_KeretaOrderByWithRelationInput = {
    id?: SortOrder
    dari_id?: SortOrder
    ke_id?: SortOrder
    tanggal?: SortOrder
    kelas_kereta_id?: SortOrder
    jam_berangkat?: SortOrder
    jam_tiba?: SortOrder
    harga?: SortOrder
    gerbong_id?: SortOrder
    dari_stasiun?: StasiunOrderByWithRelationInput
    ke_stasiun?: StasiunOrderByWithRelationInput
    kelas_kereta?: Kelas_KeretaOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    gerbong?: GerbongOrderByWithRelationInput
  }

  export type Jadwal_KeretaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Jadwal_KeretaWhereInput | Jadwal_KeretaWhereInput[]
    OR?: Jadwal_KeretaWhereInput[]
    NOT?: Jadwal_KeretaWhereInput | Jadwal_KeretaWhereInput[]
    dari_id?: IntFilter<"Jadwal_Kereta"> | number
    ke_id?: IntFilter<"Jadwal_Kereta"> | number
    tanggal?: DateTimeFilter<"Jadwal_Kereta"> | Date | string
    kelas_kereta_id?: IntFilter<"Jadwal_Kereta"> | number
    jam_berangkat?: StringFilter<"Jadwal_Kereta"> | string
    jam_tiba?: StringFilter<"Jadwal_Kereta"> | string
    harga?: FloatFilter<"Jadwal_Kereta"> | number
    gerbong_id?: IntFilter<"Jadwal_Kereta"> | number
    dari_stasiun?: XOR<StasiunRelationFilter, StasiunWhereInput>
    ke_stasiun?: XOR<StasiunRelationFilter, StasiunWhereInput>
    kelas_kereta?: XOR<Kelas_KeretaRelationFilter, Kelas_KeretaWhereInput>
    tickets?: TicketListRelationFilter
    gerbong?: XOR<GerbongRelationFilter, GerbongWhereInput>
  }, "id">

  export type Jadwal_KeretaOrderByWithAggregationInput = {
    id?: SortOrder
    dari_id?: SortOrder
    ke_id?: SortOrder
    tanggal?: SortOrder
    kelas_kereta_id?: SortOrder
    jam_berangkat?: SortOrder
    jam_tiba?: SortOrder
    harga?: SortOrder
    gerbong_id?: SortOrder
    _count?: Jadwal_KeretaCountOrderByAggregateInput
    _avg?: Jadwal_KeretaAvgOrderByAggregateInput
    _max?: Jadwal_KeretaMaxOrderByAggregateInput
    _min?: Jadwal_KeretaMinOrderByAggregateInput
    _sum?: Jadwal_KeretaSumOrderByAggregateInput
  }

  export type Jadwal_KeretaScalarWhereWithAggregatesInput = {
    AND?: Jadwal_KeretaScalarWhereWithAggregatesInput | Jadwal_KeretaScalarWhereWithAggregatesInput[]
    OR?: Jadwal_KeretaScalarWhereWithAggregatesInput[]
    NOT?: Jadwal_KeretaScalarWhereWithAggregatesInput | Jadwal_KeretaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Jadwal_Kereta"> | number
    dari_id?: IntWithAggregatesFilter<"Jadwal_Kereta"> | number
    ke_id?: IntWithAggregatesFilter<"Jadwal_Kereta"> | number
    tanggal?: DateTimeWithAggregatesFilter<"Jadwal_Kereta"> | Date | string
    kelas_kereta_id?: IntWithAggregatesFilter<"Jadwal_Kereta"> | number
    jam_berangkat?: StringWithAggregatesFilter<"Jadwal_Kereta"> | string
    jam_tiba?: StringWithAggregatesFilter<"Jadwal_Kereta"> | string
    harga?: FloatWithAggregatesFilter<"Jadwal_Kereta"> | number
    gerbong_id?: IntWithAggregatesFilter<"Jadwal_Kereta"> | number
  }

  export type StasiunWhereInput = {
    AND?: StasiunWhereInput | StasiunWhereInput[]
    OR?: StasiunWhereInput[]
    NOT?: StasiunWhereInput | StasiunWhereInput[]
    id?: IntFilter<"Stasiun"> | number
    nama?: StringFilter<"Stasiun"> | string
    kota?: StringFilter<"Stasiun"> | string
    jadwal_berangkat?: Jadwal_KeretaListRelationFilter
    jadwal_tujuan?: Jadwal_KeretaListRelationFilter
  }

  export type StasiunOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
    jadwal_berangkat?: Jadwal_KeretaOrderByRelationAggregateInput
    jadwal_tujuan?: Jadwal_KeretaOrderByRelationAggregateInput
  }

  export type StasiunWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StasiunWhereInput | StasiunWhereInput[]
    OR?: StasiunWhereInput[]
    NOT?: StasiunWhereInput | StasiunWhereInput[]
    nama?: StringFilter<"Stasiun"> | string
    kota?: StringFilter<"Stasiun"> | string
    jadwal_berangkat?: Jadwal_KeretaListRelationFilter
    jadwal_tujuan?: Jadwal_KeretaListRelationFilter
  }, "id">

  export type StasiunOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
    _count?: StasiunCountOrderByAggregateInput
    _avg?: StasiunAvgOrderByAggregateInput
    _max?: StasiunMaxOrderByAggregateInput
    _min?: StasiunMinOrderByAggregateInput
    _sum?: StasiunSumOrderByAggregateInput
  }

  export type StasiunScalarWhereWithAggregatesInput = {
    AND?: StasiunScalarWhereWithAggregatesInput | StasiunScalarWhereWithAggregatesInput[]
    OR?: StasiunScalarWhereWithAggregatesInput[]
    NOT?: StasiunScalarWhereWithAggregatesInput | StasiunScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stasiun"> | number
    nama?: StringWithAggregatesFilter<"Stasiun"> | string
    kota?: StringWithAggregatesFilter<"Stasiun"> | string
  }

  export type UserCreateInput = {
    name: string
    nomor_identitas: string
    nomor_hp: string
    email: string
    alamat: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    nomor_identitas: string
    nomor_hp: string
    email: string
    alamat: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    nomor_identitas: string
    nomor_hp: string
    email: string
    alamat: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Kelas_KeretaCreateInput = {
    nama: string
    gerbong_list?: GerbongCreateNestedManyWithoutKelas_keretaInput
    tickets?: TicketCreateNestedManyWithoutKelas_keretaInput
    jadwal_kereta?: Jadwal_KeretaCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaUncheckedCreateInput = {
    id?: number
    nama: string
    gerbong_list?: GerbongUncheckedCreateNestedManyWithoutKelas_keretaInput
    tickets?: TicketUncheckedCreateNestedManyWithoutKelas_keretaInput
    jadwal_kereta?: Jadwal_KeretaUncheckedCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gerbong_list?: GerbongUpdateManyWithoutKelas_keretaNestedInput
    tickets?: TicketUpdateManyWithoutKelas_keretaNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateManyWithoutKelas_keretaNestedInput
  }

  export type Kelas_KeretaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    gerbong_list?: GerbongUncheckedUpdateManyWithoutKelas_keretaNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutKelas_keretaNestedInput
    jadwal_kereta?: Jadwal_KeretaUncheckedUpdateManyWithoutKelas_keretaNestedInput
  }

  export type Kelas_KeretaCreateManyInput = {
    id?: number
    nama: string
  }

  export type Kelas_KeretaUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type Kelas_KeretaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GerbongCreateInput = {
    nama: string
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutGerbong_listInput
    kursi_list?: KursiCreateNestedManyWithoutGerbongInput
    Jadwal_Kereta?: Jadwal_KeretaCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUncheckedCreateInput = {
    id?: number
    nama: string
    kelas_kereta_id: number
    kursi_list?: KursiUncheckedCreateNestedManyWithoutGerbongInput
    Jadwal_Kereta?: Jadwal_KeretaUncheckedCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutGerbong_listNestedInput
    kursi_list?: KursiUpdateManyWithoutGerbongNestedInput
    Jadwal_Kereta?: Jadwal_KeretaUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    kursi_list?: KursiUncheckedUpdateManyWithoutGerbongNestedInput
    Jadwal_Kereta?: Jadwal_KeretaUncheckedUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongCreateManyInput = {
    id?: number
    nama: string
    kelas_kereta_id: number
  }

  export type GerbongUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type GerbongUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
  }

  export type KursiCreateInput = {
    nomor: string
    gerbong: GerbongCreateNestedOneWithoutKursi_listInput
    tickets?: TicketCreateNestedManyWithoutKursiInput
  }

  export type KursiUncheckedCreateInput = {
    id?: number
    nomor: string
    gerbong_id: number
    tickets?: TicketUncheckedCreateNestedManyWithoutKursiInput
  }

  export type KursiUpdateInput = {
    nomor?: StringFieldUpdateOperationsInput | string
    gerbong?: GerbongUpdateOneRequiredWithoutKursi_listNestedInput
    tickets?: TicketUpdateManyWithoutKursiNestedInput
  }

  export type KursiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor?: StringFieldUpdateOperationsInput | string
    gerbong_id?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutKursiNestedInput
  }

  export type KursiCreateManyInput = {
    id?: number
    nomor: string
    gerbong_id: number
  }

  export type KursiUpdateManyMutationInput = {
    nomor?: StringFieldUpdateOperationsInput | string
  }

  export type KursiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor?: StringFieldUpdateOperationsInput | string
    gerbong_id?: IntFieldUpdateOperationsInput | number
  }

  export type TicketCreateInput = {
    tanggal: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
    kursi: KursiCreateNestedOneWithoutTicketsInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutTicketsInput
    jadwal_kereta: Jadwal_KeretaCreateNestedOneWithoutTicketsInput
    transaksi?: TransaksiCreateNestedOneWithoutTicketsInput
    penumpang?: PenumpangCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
    penumpang?: PenumpangUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    kursi?: KursiUpdateOneRequiredWithoutTicketsNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    transaksi?: TransaksiUpdateOneWithoutTicketsNestedInput
    penumpang?: PenumpangUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    penumpang?: PenumpangUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PenumpangCreateInput = {
    nama: string
    nomor_identitas: string
    nomor_hp: string
    address: string
    ticket: TicketCreateNestedOneWithoutPenumpangInput
  }

  export type PenumpangUncheckedCreateInput = {
    id?: number
    nama: string
    nomor_identitas: string
    nomor_hp: string
    address: string
    ticket_id: number
  }

  export type PenumpangUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUpdateOneRequiredWithoutPenumpangNestedInput
  }

  export type PenumpangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type PenumpangCreateManyInput = {
    id?: number
    nama: string
    nomor_identitas: string
    nomor_hp: string
    address: string
    ticket_id: number
  }

  export type PenumpangUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type PenumpangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    ticket_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiCreateInput = {
    total_harga: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
    tickets?: TicketCreateNestedManyWithoutTransaksiInput
    metode_pembayaran: Metode_PembayaranCreateNestedOneWithoutTransaksi_listInput
  }

  export type TransaksiUncheckedCreateInput = {
    id?: number
    total_harga: number
    metode_pembayaran_id: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiUpdateInput = {
    total_harga?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUpdateManyWithoutTransaksiNestedInput
    metode_pembayaran?: Metode_PembayaranUpdateOneRequiredWithoutTransaksi_listNestedInput
  }

  export type TransaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_harga?: FloatFieldUpdateOperationsInput | number
    metode_pembayaran_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiCreateManyInput = {
    id?: number
    total_harga: number
    metode_pembayaran_id: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
  }

  export type TransaksiUpdateManyMutationInput = {
    total_harga?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_harga?: FloatFieldUpdateOperationsInput | number
    metode_pembayaran_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Metode_PembayaranCreateInput = {
    nama: string
    tipe?: $Enums.paymentmethod_tipe | null
    transaksi_list?: TransaksiCreateNestedManyWithoutMetode_pembayaranInput
  }

  export type Metode_PembayaranUncheckedCreateInput = {
    id?: number
    nama: string
    tipe?: $Enums.paymentmethod_tipe | null
    transaksi_list?: TransaksiUncheckedCreateNestedManyWithoutMetode_pembayaranInput
  }

  export type Metode_PembayaranUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    tipe?: NullableEnumpaymentmethod_tipeFieldUpdateOperationsInput | $Enums.paymentmethod_tipe | null
    transaksi_list?: TransaksiUpdateManyWithoutMetode_pembayaranNestedInput
  }

  export type Metode_PembayaranUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    tipe?: NullableEnumpaymentmethod_tipeFieldUpdateOperationsInput | $Enums.paymentmethod_tipe | null
    transaksi_list?: TransaksiUncheckedUpdateManyWithoutMetode_pembayaranNestedInput
  }

  export type Metode_PembayaranCreateManyInput = {
    id?: number
    nama: string
    tipe?: $Enums.paymentmethod_tipe | null
  }

  export type Metode_PembayaranUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    tipe?: NullableEnumpaymentmethod_tipeFieldUpdateOperationsInput | $Enums.paymentmethod_tipe | null
  }

  export type Metode_PembayaranUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    tipe?: NullableEnumpaymentmethod_tipeFieldUpdateOperationsInput | $Enums.paymentmethod_tipe | null
  }

  export type Jadwal_KeretaCreateInput = {
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    dari_stasiun: StasiunCreateNestedOneWithoutJadwal_berangkatInput
    ke_stasiun: StasiunCreateNestedOneWithoutJadwal_tujuanInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutJadwal_keretaInput
    tickets?: TicketCreateNestedManyWithoutJadwal_keretaInput
    gerbong: GerbongCreateNestedOneWithoutJadwal_KeretaInput
  }

  export type Jadwal_KeretaUncheckedCreateInput = {
    id?: number
    dari_id: number
    ke_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
    tickets?: TicketUncheckedCreateNestedManyWithoutJadwal_keretaInput
  }

  export type Jadwal_KeretaUpdateInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    dari_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_berangkatNestedInput
    ke_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_tujuanNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutJadwal_keretaNestedInput
    tickets?: TicketUpdateManyWithoutJadwal_keretaNestedInput
    gerbong?: GerbongUpdateOneRequiredWithoutJadwal_KeretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutJadwal_keretaNestedInput
  }

  export type Jadwal_KeretaCreateManyInput = {
    id?: number
    dari_id: number
    ke_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
  }

  export type Jadwal_KeretaUpdateManyMutationInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
  }

  export type Jadwal_KeretaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
  }

  export type StasiunCreateInput = {
    nama: string
    kota: string
    jadwal_berangkat?: Jadwal_KeretaCreateNestedManyWithoutDari_stasiunInput
    jadwal_tujuan?: Jadwal_KeretaCreateNestedManyWithoutKe_stasiunInput
  }

  export type StasiunUncheckedCreateInput = {
    id?: number
    nama: string
    kota: string
    jadwal_berangkat?: Jadwal_KeretaUncheckedCreateNestedManyWithoutDari_stasiunInput
    jadwal_tujuan?: Jadwal_KeretaUncheckedCreateNestedManyWithoutKe_stasiunInput
  }

  export type StasiunUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    jadwal_berangkat?: Jadwal_KeretaUpdateManyWithoutDari_stasiunNestedInput
    jadwal_tujuan?: Jadwal_KeretaUpdateManyWithoutKe_stasiunNestedInput
  }

  export type StasiunUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    jadwal_berangkat?: Jadwal_KeretaUncheckedUpdateManyWithoutDari_stasiunNestedInput
    jadwal_tujuan?: Jadwal_KeretaUncheckedUpdateManyWithoutKe_stasiunNestedInput
  }

  export type StasiunCreateManyInput = {
    id?: number
    nama: string
    kota: string
  }

  export type StasiunUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
  }

  export type StasiunUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    email?: SortOrder
    alamat?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GerbongListRelationFilter = {
    every?: GerbongWhereInput
    some?: GerbongWhereInput
    none?: GerbongWhereInput
  }

  export type Jadwal_KeretaListRelationFilter = {
    every?: Jadwal_KeretaWhereInput
    some?: Jadwal_KeretaWhereInput
    none?: Jadwal_KeretaWhereInput
  }

  export type GerbongOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Jadwal_KeretaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Kelas_KeretaCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type Kelas_KeretaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Kelas_KeretaMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type Kelas_KeretaMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type Kelas_KeretaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Kelas_KeretaRelationFilter = {
    is?: Kelas_KeretaWhereInput
    isNot?: Kelas_KeretaWhereInput
  }

  export type KursiListRelationFilter = {
    every?: KursiWhereInput
    some?: KursiWhereInput
    none?: KursiWhereInput
  }

  export type KursiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GerbongCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kelas_kereta_id?: SortOrder
  }

  export type GerbongAvgOrderByAggregateInput = {
    id?: SortOrder
    kelas_kereta_id?: SortOrder
  }

  export type GerbongMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kelas_kereta_id?: SortOrder
  }

  export type GerbongMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kelas_kereta_id?: SortOrder
  }

  export type GerbongSumOrderByAggregateInput = {
    id?: SortOrder
    kelas_kereta_id?: SortOrder
  }

  export type GerbongRelationFilter = {
    is?: GerbongWhereInput
    isNot?: GerbongWhereInput
  }

  export type KursiCountOrderByAggregateInput = {
    id?: SortOrder
    nomor?: SortOrder
    gerbong_id?: SortOrder
  }

  export type KursiAvgOrderByAggregateInput = {
    id?: SortOrder
    gerbong_id?: SortOrder
  }

  export type KursiMaxOrderByAggregateInput = {
    id?: SortOrder
    nomor?: SortOrder
    gerbong_id?: SortOrder
  }

  export type KursiMinOrderByAggregateInput = {
    id?: SortOrder
    nomor?: SortOrder
    gerbong_id?: SortOrder
  }

  export type KursiSumOrderByAggregateInput = {
    id?: SortOrder
    gerbong_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type KursiRelationFilter = {
    is?: KursiWhereInput
    isNot?: KursiWhereInput
  }

  export type Jadwal_KeretaRelationFilter = {
    is?: Jadwal_KeretaWhereInput
    isNot?: Jadwal_KeretaWhereInput
  }

  export type TransaksiNullableRelationFilter = {
    is?: TransaksiWhereInput | null
    isNot?: TransaksiWhereInput | null
  }

  export type PenumpangNullableRelationFilter = {
    is?: PenumpangWhereInput | null
    isNot?: PenumpangWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kursi_id?: SortOrder
    kelas_kereta_id?: SortOrder
    jadwal_kereta_id?: SortOrder
    transaksi_id?: SortOrder
    tanggal?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kursi_id?: SortOrder
    kelas_kereta_id?: SortOrder
    jadwal_kereta_id?: SortOrder
    transaksi_id?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kursi_id?: SortOrder
    kelas_kereta_id?: SortOrder
    jadwal_kereta_id?: SortOrder
    transaksi_id?: SortOrder
    tanggal?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kursi_id?: SortOrder
    kelas_kereta_id?: SortOrder
    jadwal_kereta_id?: SortOrder
    transaksi_id?: SortOrder
    tanggal?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    kursi_id?: SortOrder
    kelas_kereta_id?: SortOrder
    jadwal_kereta_id?: SortOrder
    transaksi_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TicketRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type PenumpangCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    address?: SortOrder
    ticket_id?: SortOrder
  }

  export type PenumpangAvgOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
  }

  export type PenumpangMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    address?: SortOrder
    ticket_id?: SortOrder
  }

  export type PenumpangMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nomor_identitas?: SortOrder
    nomor_hp?: SortOrder
    address?: SortOrder
    ticket_id?: SortOrder
  }

  export type PenumpangSumOrderByAggregateInput = {
    id?: SortOrder
    ticket_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type Enumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Metode_PembayaranRelationFilter = {
    is?: Metode_PembayaranWhereInput
    isNot?: Metode_PembayaranWhereInput
  }

  export type TransaksiCountOrderByAggregateInput = {
    id?: SortOrder
    total_harga?: SortOrder
    metode_pembayaran_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    va?: SortOrder
    nomor_kartu?: SortOrder
  }

  export type TransaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    total_harga?: SortOrder
    metode_pembayaran_id?: SortOrder
  }

  export type TransaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    total_harga?: SortOrder
    metode_pembayaran_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    va?: SortOrder
    nomor_kartu?: SortOrder
  }

  export type TransaksiMinOrderByAggregateInput = {
    id?: SortOrder
    total_harga?: SortOrder
    metode_pembayaran_id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    va?: SortOrder
    nomor_kartu?: SortOrder
  }

  export type TransaksiSumOrderByAggregateInput = {
    id?: SortOrder
    total_harga?: SortOrder
    metode_pembayaran_id?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type Enumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type Enumpaymentmethod_tipeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod_tipe | Enumpaymentmethod_tipeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paymentmethod_tipe[] | null
    notIn?: $Enums.paymentmethod_tipe[] | null
    not?: NestedEnumpaymentmethod_tipeNullableFilter<$PrismaModel> | $Enums.paymentmethod_tipe | null
  }

  export type TransaksiListRelationFilter = {
    every?: TransaksiWhereInput
    some?: TransaksiWhereInput
    none?: TransaksiWhereInput
  }

  export type TransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Metode_PembayaranCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tipe?: SortOrder
  }

  export type Metode_PembayaranAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Metode_PembayaranMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tipe?: SortOrder
  }

  export type Metode_PembayaranMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    tipe?: SortOrder
  }

  export type Metode_PembayaranSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Enumpaymentmethod_tipeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod_tipe | Enumpaymentmethod_tipeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paymentmethod_tipe[] | null
    notIn?: $Enums.paymentmethod_tipe[] | null
    not?: NestedEnumpaymentmethod_tipeNullableWithAggregatesFilter<$PrismaModel> | $Enums.paymentmethod_tipe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpaymentmethod_tipeNullableFilter<$PrismaModel>
    _max?: NestedEnumpaymentmethod_tipeNullableFilter<$PrismaModel>
  }

  export type StasiunRelationFilter = {
    is?: StasiunWhereInput
    isNot?: StasiunWhereInput
  }

  export type Jadwal_KeretaCountOrderByAggregateInput = {
    id?: SortOrder
    dari_id?: SortOrder
    ke_id?: SortOrder
    tanggal?: SortOrder
    kelas_kereta_id?: SortOrder
    jam_berangkat?: SortOrder
    jam_tiba?: SortOrder
    harga?: SortOrder
    gerbong_id?: SortOrder
  }

  export type Jadwal_KeretaAvgOrderByAggregateInput = {
    id?: SortOrder
    dari_id?: SortOrder
    ke_id?: SortOrder
    kelas_kereta_id?: SortOrder
    harga?: SortOrder
    gerbong_id?: SortOrder
  }

  export type Jadwal_KeretaMaxOrderByAggregateInput = {
    id?: SortOrder
    dari_id?: SortOrder
    ke_id?: SortOrder
    tanggal?: SortOrder
    kelas_kereta_id?: SortOrder
    jam_berangkat?: SortOrder
    jam_tiba?: SortOrder
    harga?: SortOrder
    gerbong_id?: SortOrder
  }

  export type Jadwal_KeretaMinOrderByAggregateInput = {
    id?: SortOrder
    dari_id?: SortOrder
    ke_id?: SortOrder
    tanggal?: SortOrder
    kelas_kereta_id?: SortOrder
    jam_berangkat?: SortOrder
    jam_tiba?: SortOrder
    harga?: SortOrder
    gerbong_id?: SortOrder
  }

  export type Jadwal_KeretaSumOrderByAggregateInput = {
    id?: SortOrder
    dari_id?: SortOrder
    ke_id?: SortOrder
    kelas_kereta_id?: SortOrder
    harga?: SortOrder
    gerbong_id?: SortOrder
  }

  export type StasiunCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
  }

  export type StasiunAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StasiunMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
  }

  export type StasiunMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
  }

  export type StasiunSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type GerbongCreateNestedManyWithoutKelas_keretaInput = {
    create?: XOR<GerbongCreateWithoutKelas_keretaInput, GerbongUncheckedCreateWithoutKelas_keretaInput> | GerbongCreateWithoutKelas_keretaInput[] | GerbongUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKelas_keretaInput | GerbongCreateOrConnectWithoutKelas_keretaInput[]
    createMany?: GerbongCreateManyKelas_keretaInputEnvelope
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutKelas_keretaInput = {
    create?: XOR<TicketCreateWithoutKelas_keretaInput, TicketUncheckedCreateWithoutKelas_keretaInput> | TicketCreateWithoutKelas_keretaInput[] | TicketUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKelas_keretaInput | TicketCreateOrConnectWithoutKelas_keretaInput[]
    createMany?: TicketCreateManyKelas_keretaInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type Jadwal_KeretaCreateNestedManyWithoutKelas_keretaInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput> | Jadwal_KeretaCreateWithoutKelas_keretaInput[] | Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput | Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput[]
    createMany?: Jadwal_KeretaCreateManyKelas_keretaInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type GerbongUncheckedCreateNestedManyWithoutKelas_keretaInput = {
    create?: XOR<GerbongCreateWithoutKelas_keretaInput, GerbongUncheckedCreateWithoutKelas_keretaInput> | GerbongCreateWithoutKelas_keretaInput[] | GerbongUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKelas_keretaInput | GerbongCreateOrConnectWithoutKelas_keretaInput[]
    createMany?: GerbongCreateManyKelas_keretaInputEnvelope
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutKelas_keretaInput = {
    create?: XOR<TicketCreateWithoutKelas_keretaInput, TicketUncheckedCreateWithoutKelas_keretaInput> | TicketCreateWithoutKelas_keretaInput[] | TicketUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKelas_keretaInput | TicketCreateOrConnectWithoutKelas_keretaInput[]
    createMany?: TicketCreateManyKelas_keretaInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type Jadwal_KeretaUncheckedCreateNestedManyWithoutKelas_keretaInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput> | Jadwal_KeretaCreateWithoutKelas_keretaInput[] | Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput | Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput[]
    createMany?: Jadwal_KeretaCreateManyKelas_keretaInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type GerbongUpdateManyWithoutKelas_keretaNestedInput = {
    create?: XOR<GerbongCreateWithoutKelas_keretaInput, GerbongUncheckedCreateWithoutKelas_keretaInput> | GerbongCreateWithoutKelas_keretaInput[] | GerbongUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKelas_keretaInput | GerbongCreateOrConnectWithoutKelas_keretaInput[]
    upsert?: GerbongUpsertWithWhereUniqueWithoutKelas_keretaInput | GerbongUpsertWithWhereUniqueWithoutKelas_keretaInput[]
    createMany?: GerbongCreateManyKelas_keretaInputEnvelope
    set?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    disconnect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    delete?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    update?: GerbongUpdateWithWhereUniqueWithoutKelas_keretaInput | GerbongUpdateWithWhereUniqueWithoutKelas_keretaInput[]
    updateMany?: GerbongUpdateManyWithWhereWithoutKelas_keretaInput | GerbongUpdateManyWithWhereWithoutKelas_keretaInput[]
    deleteMany?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutKelas_keretaNestedInput = {
    create?: XOR<TicketCreateWithoutKelas_keretaInput, TicketUncheckedCreateWithoutKelas_keretaInput> | TicketCreateWithoutKelas_keretaInput[] | TicketUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKelas_keretaInput | TicketCreateOrConnectWithoutKelas_keretaInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutKelas_keretaInput | TicketUpsertWithWhereUniqueWithoutKelas_keretaInput[]
    createMany?: TicketCreateManyKelas_keretaInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutKelas_keretaInput | TicketUpdateWithWhereUniqueWithoutKelas_keretaInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutKelas_keretaInput | TicketUpdateManyWithWhereWithoutKelas_keretaInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Jadwal_KeretaUpdateManyWithoutKelas_keretaNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput> | Jadwal_KeretaCreateWithoutKelas_keretaInput[] | Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput | Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutKelas_keretaInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutKelas_keretaInput[]
    createMany?: Jadwal_KeretaCreateManyKelas_keretaInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutKelas_keretaInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutKelas_keretaInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutKelas_keretaInput | Jadwal_KeretaUpdateManyWithWhereWithoutKelas_keretaInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type GerbongUncheckedUpdateManyWithoutKelas_keretaNestedInput = {
    create?: XOR<GerbongCreateWithoutKelas_keretaInput, GerbongUncheckedCreateWithoutKelas_keretaInput> | GerbongCreateWithoutKelas_keretaInput[] | GerbongUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: GerbongCreateOrConnectWithoutKelas_keretaInput | GerbongCreateOrConnectWithoutKelas_keretaInput[]
    upsert?: GerbongUpsertWithWhereUniqueWithoutKelas_keretaInput | GerbongUpsertWithWhereUniqueWithoutKelas_keretaInput[]
    createMany?: GerbongCreateManyKelas_keretaInputEnvelope
    set?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    disconnect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    delete?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    connect?: GerbongWhereUniqueInput | GerbongWhereUniqueInput[]
    update?: GerbongUpdateWithWhereUniqueWithoutKelas_keretaInput | GerbongUpdateWithWhereUniqueWithoutKelas_keretaInput[]
    updateMany?: GerbongUpdateManyWithWhereWithoutKelas_keretaInput | GerbongUpdateManyWithWhereWithoutKelas_keretaInput[]
    deleteMany?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutKelas_keretaNestedInput = {
    create?: XOR<TicketCreateWithoutKelas_keretaInput, TicketUncheckedCreateWithoutKelas_keretaInput> | TicketCreateWithoutKelas_keretaInput[] | TicketUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKelas_keretaInput | TicketCreateOrConnectWithoutKelas_keretaInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutKelas_keretaInput | TicketUpsertWithWhereUniqueWithoutKelas_keretaInput[]
    createMany?: TicketCreateManyKelas_keretaInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutKelas_keretaInput | TicketUpdateWithWhereUniqueWithoutKelas_keretaInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutKelas_keretaInput | TicketUpdateManyWithWhereWithoutKelas_keretaInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutKelas_keretaNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput> | Jadwal_KeretaCreateWithoutKelas_keretaInput[] | Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput | Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutKelas_keretaInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutKelas_keretaInput[]
    createMany?: Jadwal_KeretaCreateManyKelas_keretaInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutKelas_keretaInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutKelas_keretaInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutKelas_keretaInput | Jadwal_KeretaUpdateManyWithWhereWithoutKelas_keretaInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type Kelas_KeretaCreateNestedOneWithoutGerbong_listInput = {
    create?: XOR<Kelas_KeretaCreateWithoutGerbong_listInput, Kelas_KeretaUncheckedCreateWithoutGerbong_listInput>
    connectOrCreate?: Kelas_KeretaCreateOrConnectWithoutGerbong_listInput
    connect?: Kelas_KeretaWhereUniqueInput
  }

  export type KursiCreateNestedManyWithoutGerbongInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
  }

  export type Jadwal_KeretaCreateNestedManyWithoutGerbongInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutGerbongInput, Jadwal_KeretaUncheckedCreateWithoutGerbongInput> | Jadwal_KeretaCreateWithoutGerbongInput[] | Jadwal_KeretaUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutGerbongInput | Jadwal_KeretaCreateOrConnectWithoutGerbongInput[]
    createMany?: Jadwal_KeretaCreateManyGerbongInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type KursiUncheckedCreateNestedManyWithoutGerbongInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
  }

  export type Jadwal_KeretaUncheckedCreateNestedManyWithoutGerbongInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutGerbongInput, Jadwal_KeretaUncheckedCreateWithoutGerbongInput> | Jadwal_KeretaCreateWithoutGerbongInput[] | Jadwal_KeretaUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutGerbongInput | Jadwal_KeretaCreateOrConnectWithoutGerbongInput[]
    createMany?: Jadwal_KeretaCreateManyGerbongInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type Kelas_KeretaUpdateOneRequiredWithoutGerbong_listNestedInput = {
    create?: XOR<Kelas_KeretaCreateWithoutGerbong_listInput, Kelas_KeretaUncheckedCreateWithoutGerbong_listInput>
    connectOrCreate?: Kelas_KeretaCreateOrConnectWithoutGerbong_listInput
    upsert?: Kelas_KeretaUpsertWithoutGerbong_listInput
    connect?: Kelas_KeretaWhereUniqueInput
    update?: XOR<XOR<Kelas_KeretaUpdateToOneWithWhereWithoutGerbong_listInput, Kelas_KeretaUpdateWithoutGerbong_listInput>, Kelas_KeretaUncheckedUpdateWithoutGerbong_listInput>
  }

  export type KursiUpdateManyWithoutGerbongNestedInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    upsert?: KursiUpsertWithWhereUniqueWithoutGerbongInput | KursiUpsertWithWhereUniqueWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    set?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    disconnect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    delete?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    update?: KursiUpdateWithWhereUniqueWithoutGerbongInput | KursiUpdateWithWhereUniqueWithoutGerbongInput[]
    updateMany?: KursiUpdateManyWithWhereWithoutGerbongInput | KursiUpdateManyWithWhereWithoutGerbongInput[]
    deleteMany?: KursiScalarWhereInput | KursiScalarWhereInput[]
  }

  export type Jadwal_KeretaUpdateManyWithoutGerbongNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutGerbongInput, Jadwal_KeretaUncheckedCreateWithoutGerbongInput> | Jadwal_KeretaCreateWithoutGerbongInput[] | Jadwal_KeretaUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutGerbongInput | Jadwal_KeretaCreateOrConnectWithoutGerbongInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutGerbongInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutGerbongInput[]
    createMany?: Jadwal_KeretaCreateManyGerbongInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutGerbongInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutGerbongInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutGerbongInput | Jadwal_KeretaUpdateManyWithWhereWithoutGerbongInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type KursiUncheckedUpdateManyWithoutGerbongNestedInput = {
    create?: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput> | KursiCreateWithoutGerbongInput[] | KursiUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: KursiCreateOrConnectWithoutGerbongInput | KursiCreateOrConnectWithoutGerbongInput[]
    upsert?: KursiUpsertWithWhereUniqueWithoutGerbongInput | KursiUpsertWithWhereUniqueWithoutGerbongInput[]
    createMany?: KursiCreateManyGerbongInputEnvelope
    set?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    disconnect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    delete?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    connect?: KursiWhereUniqueInput | KursiWhereUniqueInput[]
    update?: KursiUpdateWithWhereUniqueWithoutGerbongInput | KursiUpdateWithWhereUniqueWithoutGerbongInput[]
    updateMany?: KursiUpdateManyWithWhereWithoutGerbongInput | KursiUpdateManyWithWhereWithoutGerbongInput[]
    deleteMany?: KursiScalarWhereInput | KursiScalarWhereInput[]
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutGerbongNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutGerbongInput, Jadwal_KeretaUncheckedCreateWithoutGerbongInput> | Jadwal_KeretaCreateWithoutGerbongInput[] | Jadwal_KeretaUncheckedCreateWithoutGerbongInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutGerbongInput | Jadwal_KeretaCreateOrConnectWithoutGerbongInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutGerbongInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutGerbongInput[]
    createMany?: Jadwal_KeretaCreateManyGerbongInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutGerbongInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutGerbongInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutGerbongInput | Jadwal_KeretaUpdateManyWithWhereWithoutGerbongInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type GerbongCreateNestedOneWithoutKursi_listInput = {
    create?: XOR<GerbongCreateWithoutKursi_listInput, GerbongUncheckedCreateWithoutKursi_listInput>
    connectOrCreate?: GerbongCreateOrConnectWithoutKursi_listInput
    connect?: GerbongWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutKursiInput = {
    create?: XOR<TicketCreateWithoutKursiInput, TicketUncheckedCreateWithoutKursiInput> | TicketCreateWithoutKursiInput[] | TicketUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKursiInput | TicketCreateOrConnectWithoutKursiInput[]
    createMany?: TicketCreateManyKursiInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutKursiInput = {
    create?: XOR<TicketCreateWithoutKursiInput, TicketUncheckedCreateWithoutKursiInput> | TicketCreateWithoutKursiInput[] | TicketUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKursiInput | TicketCreateOrConnectWithoutKursiInput[]
    createMany?: TicketCreateManyKursiInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type GerbongUpdateOneRequiredWithoutKursi_listNestedInput = {
    create?: XOR<GerbongCreateWithoutKursi_listInput, GerbongUncheckedCreateWithoutKursi_listInput>
    connectOrCreate?: GerbongCreateOrConnectWithoutKursi_listInput
    upsert?: GerbongUpsertWithoutKursi_listInput
    connect?: GerbongWhereUniqueInput
    update?: XOR<XOR<GerbongUpdateToOneWithWhereWithoutKursi_listInput, GerbongUpdateWithoutKursi_listInput>, GerbongUncheckedUpdateWithoutKursi_listInput>
  }

  export type TicketUpdateManyWithoutKursiNestedInput = {
    create?: XOR<TicketCreateWithoutKursiInput, TicketUncheckedCreateWithoutKursiInput> | TicketCreateWithoutKursiInput[] | TicketUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKursiInput | TicketCreateOrConnectWithoutKursiInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutKursiInput | TicketUpsertWithWhereUniqueWithoutKursiInput[]
    createMany?: TicketCreateManyKursiInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutKursiInput | TicketUpdateWithWhereUniqueWithoutKursiInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutKursiInput | TicketUpdateManyWithWhereWithoutKursiInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutKursiNestedInput = {
    create?: XOR<TicketCreateWithoutKursiInput, TicketUncheckedCreateWithoutKursiInput> | TicketCreateWithoutKursiInput[] | TicketUncheckedCreateWithoutKursiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutKursiInput | TicketCreateOrConnectWithoutKursiInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutKursiInput | TicketUpsertWithWhereUniqueWithoutKursiInput[]
    createMany?: TicketCreateManyKursiInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutKursiInput | TicketUpdateWithWhereUniqueWithoutKursiInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutKursiInput | TicketUpdateManyWithWhereWithoutKursiInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type KursiCreateNestedOneWithoutTicketsInput = {
    create?: XOR<KursiCreateWithoutTicketsInput, KursiUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: KursiCreateOrConnectWithoutTicketsInput
    connect?: KursiWhereUniqueInput
  }

  export type Kelas_KeretaCreateNestedOneWithoutTicketsInput = {
    create?: XOR<Kelas_KeretaCreateWithoutTicketsInput, Kelas_KeretaUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Kelas_KeretaCreateOrConnectWithoutTicketsInput
    connect?: Kelas_KeretaWhereUniqueInput
  }

  export type Jadwal_KeretaCreateNestedOneWithoutTicketsInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutTicketsInput, Jadwal_KeretaUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutTicketsInput
    connect?: Jadwal_KeretaWhereUniqueInput
  }

  export type TransaksiCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TransaksiCreateWithoutTicketsInput, TransaksiUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TransaksiCreateOrConnectWithoutTicketsInput
    connect?: TransaksiWhereUniqueInput
  }

  export type PenumpangCreateNestedOneWithoutTicketInput = {
    create?: XOR<PenumpangCreateWithoutTicketInput, PenumpangUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PenumpangCreateOrConnectWithoutTicketInput
    connect?: PenumpangWhereUniqueInput
  }

  export type PenumpangUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<PenumpangCreateWithoutTicketInput, PenumpangUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PenumpangCreateOrConnectWithoutTicketInput
    connect?: PenumpangWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type KursiUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<KursiCreateWithoutTicketsInput, KursiUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: KursiCreateOrConnectWithoutTicketsInput
    upsert?: KursiUpsertWithoutTicketsInput
    connect?: KursiWhereUniqueInput
    update?: XOR<XOR<KursiUpdateToOneWithWhereWithoutTicketsInput, KursiUpdateWithoutTicketsInput>, KursiUncheckedUpdateWithoutTicketsInput>
  }

  export type Kelas_KeretaUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<Kelas_KeretaCreateWithoutTicketsInput, Kelas_KeretaUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Kelas_KeretaCreateOrConnectWithoutTicketsInput
    upsert?: Kelas_KeretaUpsertWithoutTicketsInput
    connect?: Kelas_KeretaWhereUniqueInput
    update?: XOR<XOR<Kelas_KeretaUpdateToOneWithWhereWithoutTicketsInput, Kelas_KeretaUpdateWithoutTicketsInput>, Kelas_KeretaUncheckedUpdateWithoutTicketsInput>
  }

  export type Jadwal_KeretaUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutTicketsInput, Jadwal_KeretaUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutTicketsInput
    upsert?: Jadwal_KeretaUpsertWithoutTicketsInput
    connect?: Jadwal_KeretaWhereUniqueInput
    update?: XOR<XOR<Jadwal_KeretaUpdateToOneWithWhereWithoutTicketsInput, Jadwal_KeretaUpdateWithoutTicketsInput>, Jadwal_KeretaUncheckedUpdateWithoutTicketsInput>
  }

  export type TransaksiUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<TransaksiCreateWithoutTicketsInput, TransaksiUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TransaksiCreateOrConnectWithoutTicketsInput
    upsert?: TransaksiUpsertWithoutTicketsInput
    disconnect?: TransaksiWhereInput | boolean
    delete?: TransaksiWhereInput | boolean
    connect?: TransaksiWhereUniqueInput
    update?: XOR<XOR<TransaksiUpdateToOneWithWhereWithoutTicketsInput, TransaksiUpdateWithoutTicketsInput>, TransaksiUncheckedUpdateWithoutTicketsInput>
  }

  export type PenumpangUpdateOneWithoutTicketNestedInput = {
    create?: XOR<PenumpangCreateWithoutTicketInput, PenumpangUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PenumpangCreateOrConnectWithoutTicketInput
    upsert?: PenumpangUpsertWithoutTicketInput
    disconnect?: PenumpangWhereInput | boolean
    delete?: PenumpangWhereInput | boolean
    connect?: PenumpangWhereUniqueInput
    update?: XOR<XOR<PenumpangUpdateToOneWithWhereWithoutTicketInput, PenumpangUpdateWithoutTicketInput>, PenumpangUncheckedUpdateWithoutTicketInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PenumpangUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<PenumpangCreateWithoutTicketInput, PenumpangUncheckedCreateWithoutTicketInput>
    connectOrCreate?: PenumpangCreateOrConnectWithoutTicketInput
    upsert?: PenumpangUpsertWithoutTicketInput
    disconnect?: PenumpangWhereInput | boolean
    delete?: PenumpangWhereInput | boolean
    connect?: PenumpangWhereUniqueInput
    update?: XOR<XOR<PenumpangUpdateToOneWithWhereWithoutTicketInput, PenumpangUpdateWithoutTicketInput>, PenumpangUncheckedUpdateWithoutTicketInput>
  }

  export type TicketCreateNestedOneWithoutPenumpangInput = {
    create?: XOR<TicketCreateWithoutPenumpangInput, TicketUncheckedCreateWithoutPenumpangInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPenumpangInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutPenumpangNestedInput = {
    create?: XOR<TicketCreateWithoutPenumpangInput, TicketUncheckedCreateWithoutPenumpangInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPenumpangInput
    upsert?: TicketUpsertWithoutPenumpangInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutPenumpangInput, TicketUpdateWithoutPenumpangInput>, TicketUncheckedUpdateWithoutPenumpangInput>
  }

  export type TicketCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<TicketCreateWithoutTransaksiInput, TicketUncheckedCreateWithoutTransaksiInput> | TicketCreateWithoutTransaksiInput[] | TicketUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransaksiInput | TicketCreateOrConnectWithoutTransaksiInput[]
    createMany?: TicketCreateManyTransaksiInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type Metode_PembayaranCreateNestedOneWithoutTransaksi_listInput = {
    create?: XOR<Metode_PembayaranCreateWithoutTransaksi_listInput, Metode_PembayaranUncheckedCreateWithoutTransaksi_listInput>
    connectOrCreate?: Metode_PembayaranCreateOrConnectWithoutTransaksi_listInput
    connect?: Metode_PembayaranWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<TicketCreateWithoutTransaksiInput, TicketUncheckedCreateWithoutTransaksiInput> | TicketCreateWithoutTransaksiInput[] | TicketUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransaksiInput | TicketCreateOrConnectWithoutTransaksiInput[]
    createMany?: TicketCreateManyTransaksiInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumorder_statusFieldUpdateOperationsInput = {
    set?: $Enums.order_status
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TicketUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<TicketCreateWithoutTransaksiInput, TicketUncheckedCreateWithoutTransaksiInput> | TicketCreateWithoutTransaksiInput[] | TicketUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransaksiInput | TicketCreateOrConnectWithoutTransaksiInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTransaksiInput | TicketUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: TicketCreateManyTransaksiInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTransaksiInput | TicketUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTransaksiInput | TicketUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Metode_PembayaranUpdateOneRequiredWithoutTransaksi_listNestedInput = {
    create?: XOR<Metode_PembayaranCreateWithoutTransaksi_listInput, Metode_PembayaranUncheckedCreateWithoutTransaksi_listInput>
    connectOrCreate?: Metode_PembayaranCreateOrConnectWithoutTransaksi_listInput
    upsert?: Metode_PembayaranUpsertWithoutTransaksi_listInput
    connect?: Metode_PembayaranWhereUniqueInput
    update?: XOR<XOR<Metode_PembayaranUpdateToOneWithWhereWithoutTransaksi_listInput, Metode_PembayaranUpdateWithoutTransaksi_listInput>, Metode_PembayaranUncheckedUpdateWithoutTransaksi_listInput>
  }

  export type TicketUncheckedUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<TicketCreateWithoutTransaksiInput, TicketUncheckedCreateWithoutTransaksiInput> | TicketCreateWithoutTransaksiInput[] | TicketUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTransaksiInput | TicketCreateOrConnectWithoutTransaksiInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTransaksiInput | TicketUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: TicketCreateManyTransaksiInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTransaksiInput | TicketUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTransaksiInput | TicketUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TransaksiCreateNestedManyWithoutMetode_pembayaranInput = {
    create?: XOR<TransaksiCreateWithoutMetode_pembayaranInput, TransaksiUncheckedCreateWithoutMetode_pembayaranInput> | TransaksiCreateWithoutMetode_pembayaranInput[] | TransaksiUncheckedCreateWithoutMetode_pembayaranInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutMetode_pembayaranInput | TransaksiCreateOrConnectWithoutMetode_pembayaranInput[]
    createMany?: TransaksiCreateManyMetode_pembayaranInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type TransaksiUncheckedCreateNestedManyWithoutMetode_pembayaranInput = {
    create?: XOR<TransaksiCreateWithoutMetode_pembayaranInput, TransaksiUncheckedCreateWithoutMetode_pembayaranInput> | TransaksiCreateWithoutMetode_pembayaranInput[] | TransaksiUncheckedCreateWithoutMetode_pembayaranInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutMetode_pembayaranInput | TransaksiCreateOrConnectWithoutMetode_pembayaranInput[]
    createMany?: TransaksiCreateManyMetode_pembayaranInputEnvelope
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
  }

  export type NullableEnumpaymentmethod_tipeFieldUpdateOperationsInput = {
    set?: $Enums.paymentmethod_tipe | null
  }

  export type TransaksiUpdateManyWithoutMetode_pembayaranNestedInput = {
    create?: XOR<TransaksiCreateWithoutMetode_pembayaranInput, TransaksiUncheckedCreateWithoutMetode_pembayaranInput> | TransaksiCreateWithoutMetode_pembayaranInput[] | TransaksiUncheckedCreateWithoutMetode_pembayaranInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutMetode_pembayaranInput | TransaksiCreateOrConnectWithoutMetode_pembayaranInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutMetode_pembayaranInput | TransaksiUpsertWithWhereUniqueWithoutMetode_pembayaranInput[]
    createMany?: TransaksiCreateManyMetode_pembayaranInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutMetode_pembayaranInput | TransaksiUpdateWithWhereUniqueWithoutMetode_pembayaranInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutMetode_pembayaranInput | TransaksiUpdateManyWithWhereWithoutMetode_pembayaranInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type TransaksiUncheckedUpdateManyWithoutMetode_pembayaranNestedInput = {
    create?: XOR<TransaksiCreateWithoutMetode_pembayaranInput, TransaksiUncheckedCreateWithoutMetode_pembayaranInput> | TransaksiCreateWithoutMetode_pembayaranInput[] | TransaksiUncheckedCreateWithoutMetode_pembayaranInput[]
    connectOrCreate?: TransaksiCreateOrConnectWithoutMetode_pembayaranInput | TransaksiCreateOrConnectWithoutMetode_pembayaranInput[]
    upsert?: TransaksiUpsertWithWhereUniqueWithoutMetode_pembayaranInput | TransaksiUpsertWithWhereUniqueWithoutMetode_pembayaranInput[]
    createMany?: TransaksiCreateManyMetode_pembayaranInputEnvelope
    set?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    disconnect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    delete?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    connect?: TransaksiWhereUniqueInput | TransaksiWhereUniqueInput[]
    update?: TransaksiUpdateWithWhereUniqueWithoutMetode_pembayaranInput | TransaksiUpdateWithWhereUniqueWithoutMetode_pembayaranInput[]
    updateMany?: TransaksiUpdateManyWithWhereWithoutMetode_pembayaranInput | TransaksiUpdateManyWithWhereWithoutMetode_pembayaranInput[]
    deleteMany?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
  }

  export type StasiunCreateNestedOneWithoutJadwal_berangkatInput = {
    create?: XOR<StasiunCreateWithoutJadwal_berangkatInput, StasiunUncheckedCreateWithoutJadwal_berangkatInput>
    connectOrCreate?: StasiunCreateOrConnectWithoutJadwal_berangkatInput
    connect?: StasiunWhereUniqueInput
  }

  export type StasiunCreateNestedOneWithoutJadwal_tujuanInput = {
    create?: XOR<StasiunCreateWithoutJadwal_tujuanInput, StasiunUncheckedCreateWithoutJadwal_tujuanInput>
    connectOrCreate?: StasiunCreateOrConnectWithoutJadwal_tujuanInput
    connect?: StasiunWhereUniqueInput
  }

  export type Kelas_KeretaCreateNestedOneWithoutJadwal_keretaInput = {
    create?: XOR<Kelas_KeretaCreateWithoutJadwal_keretaInput, Kelas_KeretaUncheckedCreateWithoutJadwal_keretaInput>
    connectOrCreate?: Kelas_KeretaCreateOrConnectWithoutJadwal_keretaInput
    connect?: Kelas_KeretaWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutJadwal_keretaInput = {
    create?: XOR<TicketCreateWithoutJadwal_keretaInput, TicketUncheckedCreateWithoutJadwal_keretaInput> | TicketCreateWithoutJadwal_keretaInput[] | TicketUncheckedCreateWithoutJadwal_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutJadwal_keretaInput | TicketCreateOrConnectWithoutJadwal_keretaInput[]
    createMany?: TicketCreateManyJadwal_keretaInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type GerbongCreateNestedOneWithoutJadwal_KeretaInput = {
    create?: XOR<GerbongCreateWithoutJadwal_KeretaInput, GerbongUncheckedCreateWithoutJadwal_KeretaInput>
    connectOrCreate?: GerbongCreateOrConnectWithoutJadwal_KeretaInput
    connect?: GerbongWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutJadwal_keretaInput = {
    create?: XOR<TicketCreateWithoutJadwal_keretaInput, TicketUncheckedCreateWithoutJadwal_keretaInput> | TicketCreateWithoutJadwal_keretaInput[] | TicketUncheckedCreateWithoutJadwal_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutJadwal_keretaInput | TicketCreateOrConnectWithoutJadwal_keretaInput[]
    createMany?: TicketCreateManyJadwal_keretaInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type StasiunUpdateOneRequiredWithoutJadwal_berangkatNestedInput = {
    create?: XOR<StasiunCreateWithoutJadwal_berangkatInput, StasiunUncheckedCreateWithoutJadwal_berangkatInput>
    connectOrCreate?: StasiunCreateOrConnectWithoutJadwal_berangkatInput
    upsert?: StasiunUpsertWithoutJadwal_berangkatInput
    connect?: StasiunWhereUniqueInput
    update?: XOR<XOR<StasiunUpdateToOneWithWhereWithoutJadwal_berangkatInput, StasiunUpdateWithoutJadwal_berangkatInput>, StasiunUncheckedUpdateWithoutJadwal_berangkatInput>
  }

  export type StasiunUpdateOneRequiredWithoutJadwal_tujuanNestedInput = {
    create?: XOR<StasiunCreateWithoutJadwal_tujuanInput, StasiunUncheckedCreateWithoutJadwal_tujuanInput>
    connectOrCreate?: StasiunCreateOrConnectWithoutJadwal_tujuanInput
    upsert?: StasiunUpsertWithoutJadwal_tujuanInput
    connect?: StasiunWhereUniqueInput
    update?: XOR<XOR<StasiunUpdateToOneWithWhereWithoutJadwal_tujuanInput, StasiunUpdateWithoutJadwal_tujuanInput>, StasiunUncheckedUpdateWithoutJadwal_tujuanInput>
  }

  export type Kelas_KeretaUpdateOneRequiredWithoutJadwal_keretaNestedInput = {
    create?: XOR<Kelas_KeretaCreateWithoutJadwal_keretaInput, Kelas_KeretaUncheckedCreateWithoutJadwal_keretaInput>
    connectOrCreate?: Kelas_KeretaCreateOrConnectWithoutJadwal_keretaInput
    upsert?: Kelas_KeretaUpsertWithoutJadwal_keretaInput
    connect?: Kelas_KeretaWhereUniqueInput
    update?: XOR<XOR<Kelas_KeretaUpdateToOneWithWhereWithoutJadwal_keretaInput, Kelas_KeretaUpdateWithoutJadwal_keretaInput>, Kelas_KeretaUncheckedUpdateWithoutJadwal_keretaInput>
  }

  export type TicketUpdateManyWithoutJadwal_keretaNestedInput = {
    create?: XOR<TicketCreateWithoutJadwal_keretaInput, TicketUncheckedCreateWithoutJadwal_keretaInput> | TicketCreateWithoutJadwal_keretaInput[] | TicketUncheckedCreateWithoutJadwal_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutJadwal_keretaInput | TicketCreateOrConnectWithoutJadwal_keretaInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutJadwal_keretaInput | TicketUpsertWithWhereUniqueWithoutJadwal_keretaInput[]
    createMany?: TicketCreateManyJadwal_keretaInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutJadwal_keretaInput | TicketUpdateWithWhereUniqueWithoutJadwal_keretaInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutJadwal_keretaInput | TicketUpdateManyWithWhereWithoutJadwal_keretaInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type GerbongUpdateOneRequiredWithoutJadwal_KeretaNestedInput = {
    create?: XOR<GerbongCreateWithoutJadwal_KeretaInput, GerbongUncheckedCreateWithoutJadwal_KeretaInput>
    connectOrCreate?: GerbongCreateOrConnectWithoutJadwal_KeretaInput
    upsert?: GerbongUpsertWithoutJadwal_KeretaInput
    connect?: GerbongWhereUniqueInput
    update?: XOR<XOR<GerbongUpdateToOneWithWhereWithoutJadwal_KeretaInput, GerbongUpdateWithoutJadwal_KeretaInput>, GerbongUncheckedUpdateWithoutJadwal_KeretaInput>
  }

  export type TicketUncheckedUpdateManyWithoutJadwal_keretaNestedInput = {
    create?: XOR<TicketCreateWithoutJadwal_keretaInput, TicketUncheckedCreateWithoutJadwal_keretaInput> | TicketCreateWithoutJadwal_keretaInput[] | TicketUncheckedCreateWithoutJadwal_keretaInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutJadwal_keretaInput | TicketCreateOrConnectWithoutJadwal_keretaInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutJadwal_keretaInput | TicketUpsertWithWhereUniqueWithoutJadwal_keretaInput[]
    createMany?: TicketCreateManyJadwal_keretaInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutJadwal_keretaInput | TicketUpdateWithWhereUniqueWithoutJadwal_keretaInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutJadwal_keretaInput | TicketUpdateManyWithWhereWithoutJadwal_keretaInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type Jadwal_KeretaCreateNestedManyWithoutDari_stasiunInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput> | Jadwal_KeretaCreateWithoutDari_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyDari_stasiunInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type Jadwal_KeretaCreateNestedManyWithoutKe_stasiunInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput> | Jadwal_KeretaCreateWithoutKe_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyKe_stasiunInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type Jadwal_KeretaUncheckedCreateNestedManyWithoutDari_stasiunInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput> | Jadwal_KeretaCreateWithoutDari_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyDari_stasiunInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type Jadwal_KeretaUncheckedCreateNestedManyWithoutKe_stasiunInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput> | Jadwal_KeretaCreateWithoutKe_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyKe_stasiunInputEnvelope
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
  }

  export type Jadwal_KeretaUpdateManyWithoutDari_stasiunNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput> | Jadwal_KeretaCreateWithoutDari_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutDari_stasiunInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutDari_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyDari_stasiunInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutDari_stasiunInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutDari_stasiunInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutDari_stasiunInput | Jadwal_KeretaUpdateManyWithWhereWithoutDari_stasiunInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type Jadwal_KeretaUpdateManyWithoutKe_stasiunNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput> | Jadwal_KeretaCreateWithoutKe_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutKe_stasiunInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutKe_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyKe_stasiunInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutKe_stasiunInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutKe_stasiunInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutKe_stasiunInput | Jadwal_KeretaUpdateManyWithWhereWithoutKe_stasiunInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutDari_stasiunNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput> | Jadwal_KeretaCreateWithoutDari_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutDari_stasiunInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutDari_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyDari_stasiunInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutDari_stasiunInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutDari_stasiunInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutDari_stasiunInput | Jadwal_KeretaUpdateManyWithWhereWithoutDari_stasiunInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutKe_stasiunNestedInput = {
    create?: XOR<Jadwal_KeretaCreateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput> | Jadwal_KeretaCreateWithoutKe_stasiunInput[] | Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput[]
    connectOrCreate?: Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput | Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput[]
    upsert?: Jadwal_KeretaUpsertWithWhereUniqueWithoutKe_stasiunInput | Jadwal_KeretaUpsertWithWhereUniqueWithoutKe_stasiunInput[]
    createMany?: Jadwal_KeretaCreateManyKe_stasiunInputEnvelope
    set?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    disconnect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    delete?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    connect?: Jadwal_KeretaWhereUniqueInput | Jadwal_KeretaWhereUniqueInput[]
    update?: Jadwal_KeretaUpdateWithWhereUniqueWithoutKe_stasiunInput | Jadwal_KeretaUpdateWithWhereUniqueWithoutKe_stasiunInput[]
    updateMany?: Jadwal_KeretaUpdateManyWithWhereWithoutKe_stasiunInput | Jadwal_KeretaUpdateManyWithWhereWithoutKe_stasiunInput[]
    deleteMany?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumorder_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusFilter<$PrismaModel> | $Enums.order_status
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumorder_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.order_status | Enumorder_statusFieldRefInput<$PrismaModel>
    in?: $Enums.order_status[]
    notIn?: $Enums.order_status[]
    not?: NestedEnumorder_statusWithAggregatesFilter<$PrismaModel> | $Enums.order_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumorder_statusFilter<$PrismaModel>
    _max?: NestedEnumorder_statusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedEnumpaymentmethod_tipeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod_tipe | Enumpaymentmethod_tipeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paymentmethod_tipe[] | null
    notIn?: $Enums.paymentmethod_tipe[] | null
    not?: NestedEnumpaymentmethod_tipeNullableFilter<$PrismaModel> | $Enums.paymentmethod_tipe | null
  }

  export type NestedEnumpaymentmethod_tipeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paymentmethod_tipe | Enumpaymentmethod_tipeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paymentmethod_tipe[] | null
    notIn?: $Enums.paymentmethod_tipe[] | null
    not?: NestedEnumpaymentmethod_tipeNullableWithAggregatesFilter<$PrismaModel> | $Enums.paymentmethod_tipe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpaymentmethod_tipeNullableFilter<$PrismaModel>
    _max?: NestedEnumpaymentmethod_tipeNullableFilter<$PrismaModel>
  }

  export type TicketCreateWithoutUserInput = {
    tanggal: Date | string
    kursi: KursiCreateNestedOneWithoutTicketsInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutTicketsInput
    jadwal_kereta: Jadwal_KeretaCreateNestedOneWithoutTicketsInput
    transaksi?: TransaksiCreateNestedOneWithoutTicketsInput
    penumpang?: PenumpangCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
    penumpang?: PenumpangUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    user_id?: IntFilter<"Ticket"> | number
    kursi_id?: IntFilter<"Ticket"> | number
    kelas_kereta_id?: IntFilter<"Ticket"> | number
    jadwal_kereta_id?: IntFilter<"Ticket"> | number
    transaksi_id?: IntNullableFilter<"Ticket"> | number | null
    tanggal?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type GerbongCreateWithoutKelas_keretaInput = {
    nama: string
    kursi_list?: KursiCreateNestedManyWithoutGerbongInput
    Jadwal_Kereta?: Jadwal_KeretaCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUncheckedCreateWithoutKelas_keretaInput = {
    id?: number
    nama: string
    kursi_list?: KursiUncheckedCreateNestedManyWithoutGerbongInput
    Jadwal_Kereta?: Jadwal_KeretaUncheckedCreateNestedManyWithoutGerbongInput
  }

  export type GerbongCreateOrConnectWithoutKelas_keretaInput = {
    where: GerbongWhereUniqueInput
    create: XOR<GerbongCreateWithoutKelas_keretaInput, GerbongUncheckedCreateWithoutKelas_keretaInput>
  }

  export type GerbongCreateManyKelas_keretaInputEnvelope = {
    data: GerbongCreateManyKelas_keretaInput | GerbongCreateManyKelas_keretaInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutKelas_keretaInput = {
    tanggal: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
    kursi: KursiCreateNestedOneWithoutTicketsInput
    jadwal_kereta: Jadwal_KeretaCreateNestedOneWithoutTicketsInput
    transaksi?: TransaksiCreateNestedOneWithoutTicketsInput
    penumpang?: PenumpangCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutKelas_keretaInput = {
    id?: number
    user_id: number
    kursi_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
    penumpang?: PenumpangUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutKelas_keretaInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutKelas_keretaInput, TicketUncheckedCreateWithoutKelas_keretaInput>
  }

  export type TicketCreateManyKelas_keretaInputEnvelope = {
    data: TicketCreateManyKelas_keretaInput | TicketCreateManyKelas_keretaInput[]
    skipDuplicates?: boolean
  }

  export type Jadwal_KeretaCreateWithoutKelas_keretaInput = {
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    dari_stasiun: StasiunCreateNestedOneWithoutJadwal_berangkatInput
    ke_stasiun: StasiunCreateNestedOneWithoutJadwal_tujuanInput
    tickets?: TicketCreateNestedManyWithoutJadwal_keretaInput
    gerbong: GerbongCreateNestedOneWithoutJadwal_KeretaInput
  }

  export type Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput = {
    id?: number
    dari_id: number
    ke_id: number
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
    tickets?: TicketUncheckedCreateNestedManyWithoutJadwal_keretaInput
  }

  export type Jadwal_KeretaCreateOrConnectWithoutKelas_keretaInput = {
    where: Jadwal_KeretaWhereUniqueInput
    create: XOR<Jadwal_KeretaCreateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput>
  }

  export type Jadwal_KeretaCreateManyKelas_keretaInputEnvelope = {
    data: Jadwal_KeretaCreateManyKelas_keretaInput | Jadwal_KeretaCreateManyKelas_keretaInput[]
    skipDuplicates?: boolean
  }

  export type GerbongUpsertWithWhereUniqueWithoutKelas_keretaInput = {
    where: GerbongWhereUniqueInput
    update: XOR<GerbongUpdateWithoutKelas_keretaInput, GerbongUncheckedUpdateWithoutKelas_keretaInput>
    create: XOR<GerbongCreateWithoutKelas_keretaInput, GerbongUncheckedCreateWithoutKelas_keretaInput>
  }

  export type GerbongUpdateWithWhereUniqueWithoutKelas_keretaInput = {
    where: GerbongWhereUniqueInput
    data: XOR<GerbongUpdateWithoutKelas_keretaInput, GerbongUncheckedUpdateWithoutKelas_keretaInput>
  }

  export type GerbongUpdateManyWithWhereWithoutKelas_keretaInput = {
    where: GerbongScalarWhereInput
    data: XOR<GerbongUpdateManyMutationInput, GerbongUncheckedUpdateManyWithoutKelas_keretaInput>
  }

  export type GerbongScalarWhereInput = {
    AND?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
    OR?: GerbongScalarWhereInput[]
    NOT?: GerbongScalarWhereInput | GerbongScalarWhereInput[]
    id?: IntFilter<"Gerbong"> | number
    nama?: StringFilter<"Gerbong"> | string
    kelas_kereta_id?: IntFilter<"Gerbong"> | number
  }

  export type TicketUpsertWithWhereUniqueWithoutKelas_keretaInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutKelas_keretaInput, TicketUncheckedUpdateWithoutKelas_keretaInput>
    create: XOR<TicketCreateWithoutKelas_keretaInput, TicketUncheckedCreateWithoutKelas_keretaInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutKelas_keretaInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutKelas_keretaInput, TicketUncheckedUpdateWithoutKelas_keretaInput>
  }

  export type TicketUpdateManyWithWhereWithoutKelas_keretaInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutKelas_keretaInput>
  }

  export type Jadwal_KeretaUpsertWithWhereUniqueWithoutKelas_keretaInput = {
    where: Jadwal_KeretaWhereUniqueInput
    update: XOR<Jadwal_KeretaUpdateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedUpdateWithoutKelas_keretaInput>
    create: XOR<Jadwal_KeretaCreateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedCreateWithoutKelas_keretaInput>
  }

  export type Jadwal_KeretaUpdateWithWhereUniqueWithoutKelas_keretaInput = {
    where: Jadwal_KeretaWhereUniqueInput
    data: XOR<Jadwal_KeretaUpdateWithoutKelas_keretaInput, Jadwal_KeretaUncheckedUpdateWithoutKelas_keretaInput>
  }

  export type Jadwal_KeretaUpdateManyWithWhereWithoutKelas_keretaInput = {
    where: Jadwal_KeretaScalarWhereInput
    data: XOR<Jadwal_KeretaUpdateManyMutationInput, Jadwal_KeretaUncheckedUpdateManyWithoutKelas_keretaInput>
  }

  export type Jadwal_KeretaScalarWhereInput = {
    AND?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
    OR?: Jadwal_KeretaScalarWhereInput[]
    NOT?: Jadwal_KeretaScalarWhereInput | Jadwal_KeretaScalarWhereInput[]
    id?: IntFilter<"Jadwal_Kereta"> | number
    dari_id?: IntFilter<"Jadwal_Kereta"> | number
    ke_id?: IntFilter<"Jadwal_Kereta"> | number
    tanggal?: DateTimeFilter<"Jadwal_Kereta"> | Date | string
    kelas_kereta_id?: IntFilter<"Jadwal_Kereta"> | number
    jam_berangkat?: StringFilter<"Jadwal_Kereta"> | string
    jam_tiba?: StringFilter<"Jadwal_Kereta"> | string
    harga?: FloatFilter<"Jadwal_Kereta"> | number
    gerbong_id?: IntFilter<"Jadwal_Kereta"> | number
  }

  export type Kelas_KeretaCreateWithoutGerbong_listInput = {
    nama: string
    tickets?: TicketCreateNestedManyWithoutKelas_keretaInput
    jadwal_kereta?: Jadwal_KeretaCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaUncheckedCreateWithoutGerbong_listInput = {
    id?: number
    nama: string
    tickets?: TicketUncheckedCreateNestedManyWithoutKelas_keretaInput
    jadwal_kereta?: Jadwal_KeretaUncheckedCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaCreateOrConnectWithoutGerbong_listInput = {
    where: Kelas_KeretaWhereUniqueInput
    create: XOR<Kelas_KeretaCreateWithoutGerbong_listInput, Kelas_KeretaUncheckedCreateWithoutGerbong_listInput>
  }

  export type KursiCreateWithoutGerbongInput = {
    nomor: string
    tickets?: TicketCreateNestedManyWithoutKursiInput
  }

  export type KursiUncheckedCreateWithoutGerbongInput = {
    id?: number
    nomor: string
    tickets?: TicketUncheckedCreateNestedManyWithoutKursiInput
  }

  export type KursiCreateOrConnectWithoutGerbongInput = {
    where: KursiWhereUniqueInput
    create: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput>
  }

  export type KursiCreateManyGerbongInputEnvelope = {
    data: KursiCreateManyGerbongInput | KursiCreateManyGerbongInput[]
    skipDuplicates?: boolean
  }

  export type Jadwal_KeretaCreateWithoutGerbongInput = {
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    dari_stasiun: StasiunCreateNestedOneWithoutJadwal_berangkatInput
    ke_stasiun: StasiunCreateNestedOneWithoutJadwal_tujuanInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutJadwal_keretaInput
    tickets?: TicketCreateNestedManyWithoutJadwal_keretaInput
  }

  export type Jadwal_KeretaUncheckedCreateWithoutGerbongInput = {
    id?: number
    dari_id: number
    ke_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    tickets?: TicketUncheckedCreateNestedManyWithoutJadwal_keretaInput
  }

  export type Jadwal_KeretaCreateOrConnectWithoutGerbongInput = {
    where: Jadwal_KeretaWhereUniqueInput
    create: XOR<Jadwal_KeretaCreateWithoutGerbongInput, Jadwal_KeretaUncheckedCreateWithoutGerbongInput>
  }

  export type Jadwal_KeretaCreateManyGerbongInputEnvelope = {
    data: Jadwal_KeretaCreateManyGerbongInput | Jadwal_KeretaCreateManyGerbongInput[]
    skipDuplicates?: boolean
  }

  export type Kelas_KeretaUpsertWithoutGerbong_listInput = {
    update: XOR<Kelas_KeretaUpdateWithoutGerbong_listInput, Kelas_KeretaUncheckedUpdateWithoutGerbong_listInput>
    create: XOR<Kelas_KeretaCreateWithoutGerbong_listInput, Kelas_KeretaUncheckedCreateWithoutGerbong_listInput>
    where?: Kelas_KeretaWhereInput
  }

  export type Kelas_KeretaUpdateToOneWithWhereWithoutGerbong_listInput = {
    where?: Kelas_KeretaWhereInput
    data: XOR<Kelas_KeretaUpdateWithoutGerbong_listInput, Kelas_KeretaUncheckedUpdateWithoutGerbong_listInput>
  }

  export type Kelas_KeretaUpdateWithoutGerbong_listInput = {
    nama?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutKelas_keretaNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateManyWithoutKelas_keretaNestedInput
  }

  export type Kelas_KeretaUncheckedUpdateWithoutGerbong_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutKelas_keretaNestedInput
    jadwal_kereta?: Jadwal_KeretaUncheckedUpdateManyWithoutKelas_keretaNestedInput
  }

  export type KursiUpsertWithWhereUniqueWithoutGerbongInput = {
    where: KursiWhereUniqueInput
    update: XOR<KursiUpdateWithoutGerbongInput, KursiUncheckedUpdateWithoutGerbongInput>
    create: XOR<KursiCreateWithoutGerbongInput, KursiUncheckedCreateWithoutGerbongInput>
  }

  export type KursiUpdateWithWhereUniqueWithoutGerbongInput = {
    where: KursiWhereUniqueInput
    data: XOR<KursiUpdateWithoutGerbongInput, KursiUncheckedUpdateWithoutGerbongInput>
  }

  export type KursiUpdateManyWithWhereWithoutGerbongInput = {
    where: KursiScalarWhereInput
    data: XOR<KursiUpdateManyMutationInput, KursiUncheckedUpdateManyWithoutGerbongInput>
  }

  export type KursiScalarWhereInput = {
    AND?: KursiScalarWhereInput | KursiScalarWhereInput[]
    OR?: KursiScalarWhereInput[]
    NOT?: KursiScalarWhereInput | KursiScalarWhereInput[]
    id?: IntFilter<"Kursi"> | number
    nomor?: StringFilter<"Kursi"> | string
    gerbong_id?: IntFilter<"Kursi"> | number
  }

  export type Jadwal_KeretaUpsertWithWhereUniqueWithoutGerbongInput = {
    where: Jadwal_KeretaWhereUniqueInput
    update: XOR<Jadwal_KeretaUpdateWithoutGerbongInput, Jadwal_KeretaUncheckedUpdateWithoutGerbongInput>
    create: XOR<Jadwal_KeretaCreateWithoutGerbongInput, Jadwal_KeretaUncheckedCreateWithoutGerbongInput>
  }

  export type Jadwal_KeretaUpdateWithWhereUniqueWithoutGerbongInput = {
    where: Jadwal_KeretaWhereUniqueInput
    data: XOR<Jadwal_KeretaUpdateWithoutGerbongInput, Jadwal_KeretaUncheckedUpdateWithoutGerbongInput>
  }

  export type Jadwal_KeretaUpdateManyWithWhereWithoutGerbongInput = {
    where: Jadwal_KeretaScalarWhereInput
    data: XOR<Jadwal_KeretaUpdateManyMutationInput, Jadwal_KeretaUncheckedUpdateManyWithoutGerbongInput>
  }

  export type GerbongCreateWithoutKursi_listInput = {
    nama: string
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutGerbong_listInput
    Jadwal_Kereta?: Jadwal_KeretaCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUncheckedCreateWithoutKursi_listInput = {
    id?: number
    nama: string
    kelas_kereta_id: number
    Jadwal_Kereta?: Jadwal_KeretaUncheckedCreateNestedManyWithoutGerbongInput
  }

  export type GerbongCreateOrConnectWithoutKursi_listInput = {
    where: GerbongWhereUniqueInput
    create: XOR<GerbongCreateWithoutKursi_listInput, GerbongUncheckedCreateWithoutKursi_listInput>
  }

  export type TicketCreateWithoutKursiInput = {
    tanggal: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutTicketsInput
    jadwal_kereta: Jadwal_KeretaCreateNestedOneWithoutTicketsInput
    transaksi?: TransaksiCreateNestedOneWithoutTicketsInput
    penumpang?: PenumpangCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutKursiInput = {
    id?: number
    user_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
    penumpang?: PenumpangUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutKursiInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutKursiInput, TicketUncheckedCreateWithoutKursiInput>
  }

  export type TicketCreateManyKursiInputEnvelope = {
    data: TicketCreateManyKursiInput | TicketCreateManyKursiInput[]
    skipDuplicates?: boolean
  }

  export type GerbongUpsertWithoutKursi_listInput = {
    update: XOR<GerbongUpdateWithoutKursi_listInput, GerbongUncheckedUpdateWithoutKursi_listInput>
    create: XOR<GerbongCreateWithoutKursi_listInput, GerbongUncheckedCreateWithoutKursi_listInput>
    where?: GerbongWhereInput
  }

  export type GerbongUpdateToOneWithWhereWithoutKursi_listInput = {
    where?: GerbongWhereInput
    data: XOR<GerbongUpdateWithoutKursi_listInput, GerbongUncheckedUpdateWithoutKursi_listInput>
  }

  export type GerbongUpdateWithoutKursi_listInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutGerbong_listNestedInput
    Jadwal_Kereta?: Jadwal_KeretaUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateWithoutKursi_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    Jadwal_Kereta?: Jadwal_KeretaUncheckedUpdateManyWithoutGerbongNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutKursiInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutKursiInput, TicketUncheckedUpdateWithoutKursiInput>
    create: XOR<TicketCreateWithoutKursiInput, TicketUncheckedCreateWithoutKursiInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutKursiInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutKursiInput, TicketUncheckedUpdateWithoutKursiInput>
  }

  export type TicketUpdateManyWithWhereWithoutKursiInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutKursiInput>
  }

  export type UserCreateWithoutTicketsInput = {
    name: string
    nomor_identitas: string
    nomor_hp: string
    email: string
    alamat: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    nomor_identitas: string
    nomor_hp: string
    email: string
    alamat: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type KursiCreateWithoutTicketsInput = {
    nomor: string
    gerbong: GerbongCreateNestedOneWithoutKursi_listInput
  }

  export type KursiUncheckedCreateWithoutTicketsInput = {
    id?: number
    nomor: string
    gerbong_id: number
  }

  export type KursiCreateOrConnectWithoutTicketsInput = {
    where: KursiWhereUniqueInput
    create: XOR<KursiCreateWithoutTicketsInput, KursiUncheckedCreateWithoutTicketsInput>
  }

  export type Kelas_KeretaCreateWithoutTicketsInput = {
    nama: string
    gerbong_list?: GerbongCreateNestedManyWithoutKelas_keretaInput
    jadwal_kereta?: Jadwal_KeretaCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaUncheckedCreateWithoutTicketsInput = {
    id?: number
    nama: string
    gerbong_list?: GerbongUncheckedCreateNestedManyWithoutKelas_keretaInput
    jadwal_kereta?: Jadwal_KeretaUncheckedCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaCreateOrConnectWithoutTicketsInput = {
    where: Kelas_KeretaWhereUniqueInput
    create: XOR<Kelas_KeretaCreateWithoutTicketsInput, Kelas_KeretaUncheckedCreateWithoutTicketsInput>
  }

  export type Jadwal_KeretaCreateWithoutTicketsInput = {
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    dari_stasiun: StasiunCreateNestedOneWithoutJadwal_berangkatInput
    ke_stasiun: StasiunCreateNestedOneWithoutJadwal_tujuanInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutJadwal_keretaInput
    gerbong: GerbongCreateNestedOneWithoutJadwal_KeretaInput
  }

  export type Jadwal_KeretaUncheckedCreateWithoutTicketsInput = {
    id?: number
    dari_id: number
    ke_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
  }

  export type Jadwal_KeretaCreateOrConnectWithoutTicketsInput = {
    where: Jadwal_KeretaWhereUniqueInput
    create: XOR<Jadwal_KeretaCreateWithoutTicketsInput, Jadwal_KeretaUncheckedCreateWithoutTicketsInput>
  }

  export type TransaksiCreateWithoutTicketsInput = {
    total_harga: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
    metode_pembayaran: Metode_PembayaranCreateNestedOneWithoutTransaksi_listInput
  }

  export type TransaksiUncheckedCreateWithoutTicketsInput = {
    id?: number
    total_harga: number
    metode_pembayaran_id: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
  }

  export type TransaksiCreateOrConnectWithoutTicketsInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutTicketsInput, TransaksiUncheckedCreateWithoutTicketsInput>
  }

  export type PenumpangCreateWithoutTicketInput = {
    nama: string
    nomor_identitas: string
    nomor_hp: string
    address: string
  }

  export type PenumpangUncheckedCreateWithoutTicketInput = {
    id?: number
    nama: string
    nomor_identitas: string
    nomor_hp: string
    address: string
  }

  export type PenumpangCreateOrConnectWithoutTicketInput = {
    where: PenumpangWhereUniqueInput
    create: XOR<PenumpangCreateWithoutTicketInput, PenumpangUncheckedCreateWithoutTicketInput>
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KursiUpsertWithoutTicketsInput = {
    update: XOR<KursiUpdateWithoutTicketsInput, KursiUncheckedUpdateWithoutTicketsInput>
    create: XOR<KursiCreateWithoutTicketsInput, KursiUncheckedCreateWithoutTicketsInput>
    where?: KursiWhereInput
  }

  export type KursiUpdateToOneWithWhereWithoutTicketsInput = {
    where?: KursiWhereInput
    data: XOR<KursiUpdateWithoutTicketsInput, KursiUncheckedUpdateWithoutTicketsInput>
  }

  export type KursiUpdateWithoutTicketsInput = {
    nomor?: StringFieldUpdateOperationsInput | string
    gerbong?: GerbongUpdateOneRequiredWithoutKursi_listNestedInput
  }

  export type KursiUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor?: StringFieldUpdateOperationsInput | string
    gerbong_id?: IntFieldUpdateOperationsInput | number
  }

  export type Kelas_KeretaUpsertWithoutTicketsInput = {
    update: XOR<Kelas_KeretaUpdateWithoutTicketsInput, Kelas_KeretaUncheckedUpdateWithoutTicketsInput>
    create: XOR<Kelas_KeretaCreateWithoutTicketsInput, Kelas_KeretaUncheckedCreateWithoutTicketsInput>
    where?: Kelas_KeretaWhereInput
  }

  export type Kelas_KeretaUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Kelas_KeretaWhereInput
    data: XOR<Kelas_KeretaUpdateWithoutTicketsInput, Kelas_KeretaUncheckedUpdateWithoutTicketsInput>
  }

  export type Kelas_KeretaUpdateWithoutTicketsInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gerbong_list?: GerbongUpdateManyWithoutKelas_keretaNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateManyWithoutKelas_keretaNestedInput
  }

  export type Kelas_KeretaUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    gerbong_list?: GerbongUncheckedUpdateManyWithoutKelas_keretaNestedInput
    jadwal_kereta?: Jadwal_KeretaUncheckedUpdateManyWithoutKelas_keretaNestedInput
  }

  export type Jadwal_KeretaUpsertWithoutTicketsInput = {
    update: XOR<Jadwal_KeretaUpdateWithoutTicketsInput, Jadwal_KeretaUncheckedUpdateWithoutTicketsInput>
    create: XOR<Jadwal_KeretaCreateWithoutTicketsInput, Jadwal_KeretaUncheckedCreateWithoutTicketsInput>
    where?: Jadwal_KeretaWhereInput
  }

  export type Jadwal_KeretaUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Jadwal_KeretaWhereInput
    data: XOR<Jadwal_KeretaUpdateWithoutTicketsInput, Jadwal_KeretaUncheckedUpdateWithoutTicketsInput>
  }

  export type Jadwal_KeretaUpdateWithoutTicketsInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    dari_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_berangkatNestedInput
    ke_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_tujuanNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutJadwal_keretaNestedInput
    gerbong?: GerbongUpdateOneRequiredWithoutJadwal_KeretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
  }

  export type TransaksiUpsertWithoutTicketsInput = {
    update: XOR<TransaksiUpdateWithoutTicketsInput, TransaksiUncheckedUpdateWithoutTicketsInput>
    create: XOR<TransaksiCreateWithoutTicketsInput, TransaksiUncheckedCreateWithoutTicketsInput>
    where?: TransaksiWhereInput
  }

  export type TransaksiUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TransaksiWhereInput
    data: XOR<TransaksiUpdateWithoutTicketsInput, TransaksiUncheckedUpdateWithoutTicketsInput>
  }

  export type TransaksiUpdateWithoutTicketsInput = {
    total_harga?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
    metode_pembayaran?: Metode_PembayaranUpdateOneRequiredWithoutTransaksi_listNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_harga?: FloatFieldUpdateOperationsInput | number
    metode_pembayaran_id?: IntFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PenumpangUpsertWithoutTicketInput = {
    update: XOR<PenumpangUpdateWithoutTicketInput, PenumpangUncheckedUpdateWithoutTicketInput>
    create: XOR<PenumpangCreateWithoutTicketInput, PenumpangUncheckedCreateWithoutTicketInput>
    where?: PenumpangWhereInput
  }

  export type PenumpangUpdateToOneWithWhereWithoutTicketInput = {
    where?: PenumpangWhereInput
    data: XOR<PenumpangUpdateWithoutTicketInput, PenumpangUncheckedUpdateWithoutTicketInput>
  }

  export type PenumpangUpdateWithoutTicketInput = {
    nama?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type PenumpangUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    nomor_identitas?: StringFieldUpdateOperationsInput | string
    nomor_hp?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateWithoutPenumpangInput = {
    tanggal: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
    kursi: KursiCreateNestedOneWithoutTicketsInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutTicketsInput
    jadwal_kereta: Jadwal_KeretaCreateNestedOneWithoutTicketsInput
    transaksi?: TransaksiCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutPenumpangInput = {
    id?: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
  }

  export type TicketCreateOrConnectWithoutPenumpangInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPenumpangInput, TicketUncheckedCreateWithoutPenumpangInput>
  }

  export type TicketUpsertWithoutPenumpangInput = {
    update: XOR<TicketUpdateWithoutPenumpangInput, TicketUncheckedUpdateWithoutPenumpangInput>
    create: XOR<TicketCreateWithoutPenumpangInput, TicketUncheckedCreateWithoutPenumpangInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutPenumpangInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutPenumpangInput, TicketUncheckedUpdateWithoutPenumpangInput>
  }

  export type TicketUpdateWithoutPenumpangInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    kursi?: KursiUpdateOneRequiredWithoutTicketsNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    transaksi?: TransaksiUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutPenumpangInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutTransaksiInput = {
    tanggal: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
    kursi: KursiCreateNestedOneWithoutTicketsInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutTicketsInput
    jadwal_kereta: Jadwal_KeretaCreateNestedOneWithoutTicketsInput
    penumpang?: PenumpangCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTransaksiInput = {
    id?: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    tanggal: Date | string
    penumpang?: PenumpangUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTransaksiInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTransaksiInput, TicketUncheckedCreateWithoutTransaksiInput>
  }

  export type TicketCreateManyTransaksiInputEnvelope = {
    data: TicketCreateManyTransaksiInput | TicketCreateManyTransaksiInput[]
    skipDuplicates?: boolean
  }

  export type Metode_PembayaranCreateWithoutTransaksi_listInput = {
    nama: string
    tipe?: $Enums.paymentmethod_tipe | null
  }

  export type Metode_PembayaranUncheckedCreateWithoutTransaksi_listInput = {
    id?: number
    nama: string
    tipe?: $Enums.paymentmethod_tipe | null
  }

  export type Metode_PembayaranCreateOrConnectWithoutTransaksi_listInput = {
    where: Metode_PembayaranWhereUniqueInput
    create: XOR<Metode_PembayaranCreateWithoutTransaksi_listInput, Metode_PembayaranUncheckedCreateWithoutTransaksi_listInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutTransaksiInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTransaksiInput, TicketUncheckedUpdateWithoutTransaksiInput>
    create: XOR<TicketCreateWithoutTransaksiInput, TicketUncheckedCreateWithoutTransaksiInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTransaksiInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTransaksiInput, TicketUncheckedUpdateWithoutTransaksiInput>
  }

  export type TicketUpdateManyWithWhereWithoutTransaksiInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTransaksiInput>
  }

  export type Metode_PembayaranUpsertWithoutTransaksi_listInput = {
    update: XOR<Metode_PembayaranUpdateWithoutTransaksi_listInput, Metode_PembayaranUncheckedUpdateWithoutTransaksi_listInput>
    create: XOR<Metode_PembayaranCreateWithoutTransaksi_listInput, Metode_PembayaranUncheckedCreateWithoutTransaksi_listInput>
    where?: Metode_PembayaranWhereInput
  }

  export type Metode_PembayaranUpdateToOneWithWhereWithoutTransaksi_listInput = {
    where?: Metode_PembayaranWhereInput
    data: XOR<Metode_PembayaranUpdateWithoutTransaksi_listInput, Metode_PembayaranUncheckedUpdateWithoutTransaksi_listInput>
  }

  export type Metode_PembayaranUpdateWithoutTransaksi_listInput = {
    nama?: StringFieldUpdateOperationsInput | string
    tipe?: NullableEnumpaymentmethod_tipeFieldUpdateOperationsInput | $Enums.paymentmethod_tipe | null
  }

  export type Metode_PembayaranUncheckedUpdateWithoutTransaksi_listInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    tipe?: NullableEnumpaymentmethod_tipeFieldUpdateOperationsInput | $Enums.paymentmethod_tipe | null
  }

  export type TransaksiCreateWithoutMetode_pembayaranInput = {
    total_harga: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
    tickets?: TicketCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateWithoutMetode_pembayaranInput = {
    id?: number
    total_harga: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
    tickets?: TicketUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiCreateOrConnectWithoutMetode_pembayaranInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutMetode_pembayaranInput, TransaksiUncheckedCreateWithoutMetode_pembayaranInput>
  }

  export type TransaksiCreateManyMetode_pembayaranInputEnvelope = {
    data: TransaksiCreateManyMetode_pembayaranInput | TransaksiCreateManyMetode_pembayaranInput[]
    skipDuplicates?: boolean
  }

  export type TransaksiUpsertWithWhereUniqueWithoutMetode_pembayaranInput = {
    where: TransaksiWhereUniqueInput
    update: XOR<TransaksiUpdateWithoutMetode_pembayaranInput, TransaksiUncheckedUpdateWithoutMetode_pembayaranInput>
    create: XOR<TransaksiCreateWithoutMetode_pembayaranInput, TransaksiUncheckedCreateWithoutMetode_pembayaranInput>
  }

  export type TransaksiUpdateWithWhereUniqueWithoutMetode_pembayaranInput = {
    where: TransaksiWhereUniqueInput
    data: XOR<TransaksiUpdateWithoutMetode_pembayaranInput, TransaksiUncheckedUpdateWithoutMetode_pembayaranInput>
  }

  export type TransaksiUpdateManyWithWhereWithoutMetode_pembayaranInput = {
    where: TransaksiScalarWhereInput
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyWithoutMetode_pembayaranInput>
  }

  export type TransaksiScalarWhereInput = {
    AND?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    OR?: TransaksiScalarWhereInput[]
    NOT?: TransaksiScalarWhereInput | TransaksiScalarWhereInput[]
    id?: IntFilter<"Transaksi"> | number
    total_harga?: FloatFilter<"Transaksi"> | number
    metode_pembayaran_id?: IntFilter<"Transaksi"> | number
    status?: Enumorder_statusFilter<"Transaksi"> | $Enums.order_status
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    va?: StringNullableFilter<"Transaksi"> | string | null
    nomor_kartu?: StringNullableFilter<"Transaksi"> | string | null
  }

  export type StasiunCreateWithoutJadwal_berangkatInput = {
    nama: string
    kota: string
    jadwal_tujuan?: Jadwal_KeretaCreateNestedManyWithoutKe_stasiunInput
  }

  export type StasiunUncheckedCreateWithoutJadwal_berangkatInput = {
    id?: number
    nama: string
    kota: string
    jadwal_tujuan?: Jadwal_KeretaUncheckedCreateNestedManyWithoutKe_stasiunInput
  }

  export type StasiunCreateOrConnectWithoutJadwal_berangkatInput = {
    where: StasiunWhereUniqueInput
    create: XOR<StasiunCreateWithoutJadwal_berangkatInput, StasiunUncheckedCreateWithoutJadwal_berangkatInput>
  }

  export type StasiunCreateWithoutJadwal_tujuanInput = {
    nama: string
    kota: string
    jadwal_berangkat?: Jadwal_KeretaCreateNestedManyWithoutDari_stasiunInput
  }

  export type StasiunUncheckedCreateWithoutJadwal_tujuanInput = {
    id?: number
    nama: string
    kota: string
    jadwal_berangkat?: Jadwal_KeretaUncheckedCreateNestedManyWithoutDari_stasiunInput
  }

  export type StasiunCreateOrConnectWithoutJadwal_tujuanInput = {
    where: StasiunWhereUniqueInput
    create: XOR<StasiunCreateWithoutJadwal_tujuanInput, StasiunUncheckedCreateWithoutJadwal_tujuanInput>
  }

  export type Kelas_KeretaCreateWithoutJadwal_keretaInput = {
    nama: string
    gerbong_list?: GerbongCreateNestedManyWithoutKelas_keretaInput
    tickets?: TicketCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaUncheckedCreateWithoutJadwal_keretaInput = {
    id?: number
    nama: string
    gerbong_list?: GerbongUncheckedCreateNestedManyWithoutKelas_keretaInput
    tickets?: TicketUncheckedCreateNestedManyWithoutKelas_keretaInput
  }

  export type Kelas_KeretaCreateOrConnectWithoutJadwal_keretaInput = {
    where: Kelas_KeretaWhereUniqueInput
    create: XOR<Kelas_KeretaCreateWithoutJadwal_keretaInput, Kelas_KeretaUncheckedCreateWithoutJadwal_keretaInput>
  }

  export type TicketCreateWithoutJadwal_keretaInput = {
    tanggal: Date | string
    user: UserCreateNestedOneWithoutTicketsInput
    kursi: KursiCreateNestedOneWithoutTicketsInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutTicketsInput
    transaksi?: TransaksiCreateNestedOneWithoutTicketsInput
    penumpang?: PenumpangCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutJadwal_keretaInput = {
    id?: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
    penumpang?: PenumpangUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutJadwal_keretaInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutJadwal_keretaInput, TicketUncheckedCreateWithoutJadwal_keretaInput>
  }

  export type TicketCreateManyJadwal_keretaInputEnvelope = {
    data: TicketCreateManyJadwal_keretaInput | TicketCreateManyJadwal_keretaInput[]
    skipDuplicates?: boolean
  }

  export type GerbongCreateWithoutJadwal_KeretaInput = {
    nama: string
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutGerbong_listInput
    kursi_list?: KursiCreateNestedManyWithoutGerbongInput
  }

  export type GerbongUncheckedCreateWithoutJadwal_KeretaInput = {
    id?: number
    nama: string
    kelas_kereta_id: number
    kursi_list?: KursiUncheckedCreateNestedManyWithoutGerbongInput
  }

  export type GerbongCreateOrConnectWithoutJadwal_KeretaInput = {
    where: GerbongWhereUniqueInput
    create: XOR<GerbongCreateWithoutJadwal_KeretaInput, GerbongUncheckedCreateWithoutJadwal_KeretaInput>
  }

  export type StasiunUpsertWithoutJadwal_berangkatInput = {
    update: XOR<StasiunUpdateWithoutJadwal_berangkatInput, StasiunUncheckedUpdateWithoutJadwal_berangkatInput>
    create: XOR<StasiunCreateWithoutJadwal_berangkatInput, StasiunUncheckedCreateWithoutJadwal_berangkatInput>
    where?: StasiunWhereInput
  }

  export type StasiunUpdateToOneWithWhereWithoutJadwal_berangkatInput = {
    where?: StasiunWhereInput
    data: XOR<StasiunUpdateWithoutJadwal_berangkatInput, StasiunUncheckedUpdateWithoutJadwal_berangkatInput>
  }

  export type StasiunUpdateWithoutJadwal_berangkatInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    jadwal_tujuan?: Jadwal_KeretaUpdateManyWithoutKe_stasiunNestedInput
  }

  export type StasiunUncheckedUpdateWithoutJadwal_berangkatInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    jadwal_tujuan?: Jadwal_KeretaUncheckedUpdateManyWithoutKe_stasiunNestedInput
  }

  export type StasiunUpsertWithoutJadwal_tujuanInput = {
    update: XOR<StasiunUpdateWithoutJadwal_tujuanInput, StasiunUncheckedUpdateWithoutJadwal_tujuanInput>
    create: XOR<StasiunCreateWithoutJadwal_tujuanInput, StasiunUncheckedCreateWithoutJadwal_tujuanInput>
    where?: StasiunWhereInput
  }

  export type StasiunUpdateToOneWithWhereWithoutJadwal_tujuanInput = {
    where?: StasiunWhereInput
    data: XOR<StasiunUpdateWithoutJadwal_tujuanInput, StasiunUncheckedUpdateWithoutJadwal_tujuanInput>
  }

  export type StasiunUpdateWithoutJadwal_tujuanInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    jadwal_berangkat?: Jadwal_KeretaUpdateManyWithoutDari_stasiunNestedInput
  }

  export type StasiunUncheckedUpdateWithoutJadwal_tujuanInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    jadwal_berangkat?: Jadwal_KeretaUncheckedUpdateManyWithoutDari_stasiunNestedInput
  }

  export type Kelas_KeretaUpsertWithoutJadwal_keretaInput = {
    update: XOR<Kelas_KeretaUpdateWithoutJadwal_keretaInput, Kelas_KeretaUncheckedUpdateWithoutJadwal_keretaInput>
    create: XOR<Kelas_KeretaCreateWithoutJadwal_keretaInput, Kelas_KeretaUncheckedCreateWithoutJadwal_keretaInput>
    where?: Kelas_KeretaWhereInput
  }

  export type Kelas_KeretaUpdateToOneWithWhereWithoutJadwal_keretaInput = {
    where?: Kelas_KeretaWhereInput
    data: XOR<Kelas_KeretaUpdateWithoutJadwal_keretaInput, Kelas_KeretaUncheckedUpdateWithoutJadwal_keretaInput>
  }

  export type Kelas_KeretaUpdateWithoutJadwal_keretaInput = {
    nama?: StringFieldUpdateOperationsInput | string
    gerbong_list?: GerbongUpdateManyWithoutKelas_keretaNestedInput
    tickets?: TicketUpdateManyWithoutKelas_keretaNestedInput
  }

  export type Kelas_KeretaUncheckedUpdateWithoutJadwal_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    gerbong_list?: GerbongUncheckedUpdateManyWithoutKelas_keretaNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutKelas_keretaNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutJadwal_keretaInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutJadwal_keretaInput, TicketUncheckedUpdateWithoutJadwal_keretaInput>
    create: XOR<TicketCreateWithoutJadwal_keretaInput, TicketUncheckedCreateWithoutJadwal_keretaInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutJadwal_keretaInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutJadwal_keretaInput, TicketUncheckedUpdateWithoutJadwal_keretaInput>
  }

  export type TicketUpdateManyWithWhereWithoutJadwal_keretaInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutJadwal_keretaInput>
  }

  export type GerbongUpsertWithoutJadwal_KeretaInput = {
    update: XOR<GerbongUpdateWithoutJadwal_KeretaInput, GerbongUncheckedUpdateWithoutJadwal_KeretaInput>
    create: XOR<GerbongCreateWithoutJadwal_KeretaInput, GerbongUncheckedCreateWithoutJadwal_KeretaInput>
    where?: GerbongWhereInput
  }

  export type GerbongUpdateToOneWithWhereWithoutJadwal_KeretaInput = {
    where?: GerbongWhereInput
    data: XOR<GerbongUpdateWithoutJadwal_KeretaInput, GerbongUncheckedUpdateWithoutJadwal_KeretaInput>
  }

  export type GerbongUpdateWithoutJadwal_KeretaInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutGerbong_listNestedInput
    kursi_list?: KursiUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateWithoutJadwal_KeretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    kursi_list?: KursiUncheckedUpdateManyWithoutGerbongNestedInput
  }

  export type Jadwal_KeretaCreateWithoutDari_stasiunInput = {
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    ke_stasiun: StasiunCreateNestedOneWithoutJadwal_tujuanInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutJadwal_keretaInput
    tickets?: TicketCreateNestedManyWithoutJadwal_keretaInput
    gerbong: GerbongCreateNestedOneWithoutJadwal_KeretaInput
  }

  export type Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput = {
    id?: number
    ke_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
    tickets?: TicketUncheckedCreateNestedManyWithoutJadwal_keretaInput
  }

  export type Jadwal_KeretaCreateOrConnectWithoutDari_stasiunInput = {
    where: Jadwal_KeretaWhereUniqueInput
    create: XOR<Jadwal_KeretaCreateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput>
  }

  export type Jadwal_KeretaCreateManyDari_stasiunInputEnvelope = {
    data: Jadwal_KeretaCreateManyDari_stasiunInput | Jadwal_KeretaCreateManyDari_stasiunInput[]
    skipDuplicates?: boolean
  }

  export type Jadwal_KeretaCreateWithoutKe_stasiunInput = {
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    dari_stasiun: StasiunCreateNestedOneWithoutJadwal_berangkatInput
    kelas_kereta: Kelas_KeretaCreateNestedOneWithoutJadwal_keretaInput
    tickets?: TicketCreateNestedManyWithoutJadwal_keretaInput
    gerbong: GerbongCreateNestedOneWithoutJadwal_KeretaInput
  }

  export type Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput = {
    id?: number
    dari_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
    tickets?: TicketUncheckedCreateNestedManyWithoutJadwal_keretaInput
  }

  export type Jadwal_KeretaCreateOrConnectWithoutKe_stasiunInput = {
    where: Jadwal_KeretaWhereUniqueInput
    create: XOR<Jadwal_KeretaCreateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput>
  }

  export type Jadwal_KeretaCreateManyKe_stasiunInputEnvelope = {
    data: Jadwal_KeretaCreateManyKe_stasiunInput | Jadwal_KeretaCreateManyKe_stasiunInput[]
    skipDuplicates?: boolean
  }

  export type Jadwal_KeretaUpsertWithWhereUniqueWithoutDari_stasiunInput = {
    where: Jadwal_KeretaWhereUniqueInput
    update: XOR<Jadwal_KeretaUpdateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedUpdateWithoutDari_stasiunInput>
    create: XOR<Jadwal_KeretaCreateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutDari_stasiunInput>
  }

  export type Jadwal_KeretaUpdateWithWhereUniqueWithoutDari_stasiunInput = {
    where: Jadwal_KeretaWhereUniqueInput
    data: XOR<Jadwal_KeretaUpdateWithoutDari_stasiunInput, Jadwal_KeretaUncheckedUpdateWithoutDari_stasiunInput>
  }

  export type Jadwal_KeretaUpdateManyWithWhereWithoutDari_stasiunInput = {
    where: Jadwal_KeretaScalarWhereInput
    data: XOR<Jadwal_KeretaUpdateManyMutationInput, Jadwal_KeretaUncheckedUpdateManyWithoutDari_stasiunInput>
  }

  export type Jadwal_KeretaUpsertWithWhereUniqueWithoutKe_stasiunInput = {
    where: Jadwal_KeretaWhereUniqueInput
    update: XOR<Jadwal_KeretaUpdateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedUpdateWithoutKe_stasiunInput>
    create: XOR<Jadwal_KeretaCreateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedCreateWithoutKe_stasiunInput>
  }

  export type Jadwal_KeretaUpdateWithWhereUniqueWithoutKe_stasiunInput = {
    where: Jadwal_KeretaWhereUniqueInput
    data: XOR<Jadwal_KeretaUpdateWithoutKe_stasiunInput, Jadwal_KeretaUncheckedUpdateWithoutKe_stasiunInput>
  }

  export type Jadwal_KeretaUpdateManyWithWhereWithoutKe_stasiunInput = {
    where: Jadwal_KeretaScalarWhereInput
    data: XOR<Jadwal_KeretaUpdateManyMutationInput, Jadwal_KeretaUncheckedUpdateManyWithoutKe_stasiunInput>
  }

  export type TicketCreateManyUserInput = {
    id?: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
  }

  export type TicketUpdateWithoutUserInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kursi?: KursiUpdateOneRequiredWithoutTicketsNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    transaksi?: TransaksiUpdateOneWithoutTicketsNestedInput
    penumpang?: PenumpangUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    penumpang?: PenumpangUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GerbongCreateManyKelas_keretaInput = {
    id?: number
    nama: string
  }

  export type TicketCreateManyKelas_keretaInput = {
    id?: number
    user_id: number
    kursi_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
  }

  export type Jadwal_KeretaCreateManyKelas_keretaInput = {
    id?: number
    dari_id: number
    ke_id: number
    tanggal?: Date | string
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
  }

  export type GerbongUpdateWithoutKelas_keretaInput = {
    nama?: StringFieldUpdateOperationsInput | string
    kursi_list?: KursiUpdateManyWithoutGerbongNestedInput
    Jadwal_Kereta?: Jadwal_KeretaUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateWithoutKelas_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    kursi_list?: KursiUncheckedUpdateManyWithoutGerbongNestedInput
    Jadwal_Kereta?: Jadwal_KeretaUncheckedUpdateManyWithoutGerbongNestedInput
  }

  export type GerbongUncheckedUpdateManyWithoutKelas_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUpdateWithoutKelas_keretaInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    kursi?: KursiUpdateOneRequiredWithoutTicketsNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    transaksi?: TransaksiUpdateOneWithoutTicketsNestedInput
    penumpang?: PenumpangUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutKelas_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    penumpang?: PenumpangUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutKelas_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Jadwal_KeretaUpdateWithoutKelas_keretaInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    dari_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_berangkatNestedInput
    ke_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_tujuanNestedInput
    tickets?: TicketUpdateManyWithoutJadwal_keretaNestedInput
    gerbong?: GerbongUpdateOneRequiredWithoutJadwal_KeretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateWithoutKelas_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutJadwal_keretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutKelas_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
  }

  export type KursiCreateManyGerbongInput = {
    id?: number
    nomor: string
  }

  export type Jadwal_KeretaCreateManyGerbongInput = {
    id?: number
    dari_id: number
    ke_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
  }

  export type KursiUpdateWithoutGerbongInput = {
    nomor?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutKursiNestedInput
  }

  export type KursiUncheckedUpdateWithoutGerbongInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutKursiNestedInput
  }

  export type KursiUncheckedUpdateManyWithoutGerbongInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomor?: StringFieldUpdateOperationsInput | string
  }

  export type Jadwal_KeretaUpdateWithoutGerbongInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    dari_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_berangkatNestedInput
    ke_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_tujuanNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutJadwal_keretaNestedInput
    tickets?: TicketUpdateManyWithoutJadwal_keretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateWithoutGerbongInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutJadwal_keretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutGerbongInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
  }

  export type TicketCreateManyKursiInput = {
    id?: number
    user_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
  }

  export type TicketUpdateWithoutKursiInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    transaksi?: TransaksiUpdateOneWithoutTicketsNestedInput
    penumpang?: PenumpangUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutKursiInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    penumpang?: PenumpangUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutKursiInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyTransaksiInput = {
    id?: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    jadwal_kereta_id: number
    tanggal: Date | string
  }

  export type TicketUpdateWithoutTransaksiInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    kursi?: KursiUpdateOneRequiredWithoutTicketsNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    jadwal_kereta?: Jadwal_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    penumpang?: PenumpangUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    penumpang?: PenumpangUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jadwal_kereta_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiCreateManyMetode_pembayaranInput = {
    id?: number
    total_harga: number
    status: $Enums.order_status
    createdAt?: Date | string
    va?: string | null
    nomor_kartu?: string | null
  }

  export type TransaksiUpdateWithoutMetode_pembayaranInput = {
    total_harga?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateWithoutMetode_pembayaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_harga?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
    tickets?: TicketUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateManyWithoutMetode_pembayaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    total_harga?: FloatFieldUpdateOperationsInput | number
    status?: Enumorder_statusFieldUpdateOperationsInput | $Enums.order_status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    va?: NullableStringFieldUpdateOperationsInput | string | null
    nomor_kartu?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TicketCreateManyJadwal_keretaInput = {
    id?: number
    user_id: number
    kursi_id: number
    kelas_kereta_id: number
    transaksi_id?: number | null
    tanggal: Date | string
  }

  export type TicketUpdateWithoutJadwal_keretaInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    kursi?: KursiUpdateOneRequiredWithoutTicketsNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutTicketsNestedInput
    transaksi?: TransaksiUpdateOneWithoutTicketsNestedInput
    penumpang?: PenumpangUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutJadwal_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    penumpang?: PenumpangUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutJadwal_keretaInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    kursi_id?: IntFieldUpdateOperationsInput | number
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    transaksi_id?: NullableIntFieldUpdateOperationsInput | number | null
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Jadwal_KeretaCreateManyDari_stasiunInput = {
    id?: number
    ke_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
  }

  export type Jadwal_KeretaCreateManyKe_stasiunInput = {
    id?: number
    dari_id: number
    tanggal?: Date | string
    kelas_kereta_id: number
    jam_berangkat: string
    jam_tiba: string
    harga: number
    gerbong_id: number
  }

  export type Jadwal_KeretaUpdateWithoutDari_stasiunInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    ke_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_tujuanNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutJadwal_keretaNestedInput
    tickets?: TicketUpdateManyWithoutJadwal_keretaNestedInput
    gerbong?: GerbongUpdateOneRequiredWithoutJadwal_KeretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateWithoutDari_stasiunInput = {
    id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutJadwal_keretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutDari_stasiunInput = {
    id?: IntFieldUpdateOperationsInput | number
    ke_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
  }

  export type Jadwal_KeretaUpdateWithoutKe_stasiunInput = {
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    dari_stasiun?: StasiunUpdateOneRequiredWithoutJadwal_berangkatNestedInput
    kelas_kereta?: Kelas_KeretaUpdateOneRequiredWithoutJadwal_keretaNestedInput
    tickets?: TicketUpdateManyWithoutJadwal_keretaNestedInput
    gerbong?: GerbongUpdateOneRequiredWithoutJadwal_KeretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateWithoutKe_stasiunInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
    tickets?: TicketUncheckedUpdateManyWithoutJadwal_keretaNestedInput
  }

  export type Jadwal_KeretaUncheckedUpdateManyWithoutKe_stasiunInput = {
    id?: IntFieldUpdateOperationsInput | number
    dari_id?: IntFieldUpdateOperationsInput | number
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    kelas_kereta_id?: IntFieldUpdateOperationsInput | number
    jam_berangkat?: StringFieldUpdateOperationsInput | string
    jam_tiba?: StringFieldUpdateOperationsInput | string
    harga?: FloatFieldUpdateOperationsInput | number
    gerbong_id?: IntFieldUpdateOperationsInput | number
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