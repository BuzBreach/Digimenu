
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
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model MenuCategory
 * 
 */
export type MenuCategory = $Result.DefaultSelection<Prisma.$MenuCategoryPayload>
/**
 * Model MenuItem
 * 
 */
export type MenuItem = $Result.DefaultSelection<Prisma.$MenuItemPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>
/**
 * Model AppSetting
 * 
 */
export type AppSetting = $Result.DefaultSelection<Prisma.$AppSettingPayload>
/**
 * Model CustomerFeedback
 * 
 */
export type CustomerFeedback = $Result.DefaultSelection<Prisma.$CustomerFeedbackPayload>
/**
 * Model InventoryTransaction
 * 
 */
export type InventoryTransaction = $Result.DefaultSelection<Prisma.$InventoryTransactionPayload>
/**
 * Model StaffShift
 * 
 */
export type StaffShift = $Result.DefaultSelection<Prisma.$StaffShiftPayload>
/**
 * Model Recommendation
 * 
 */
export type Recommendation = $Result.DefaultSelection<Prisma.$RecommendationPayload>
/**
 * Model KitchenQueue
 * 
 */
export type KitchenQueue = $Result.DefaultSelection<Prisma.$KitchenQueuePayload>
/**
 * Model BarQueue
 * 
 */
export type BarQueue = $Result.DefaultSelection<Prisma.$BarQueuePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const QueueTarget: {
  KITCHEN: 'KITCHEN',
  BAR: 'BAR'
};

export type QueueTarget = (typeof QueueTarget)[keyof typeof QueueTarget]


export const OrderStatus: {
  PENDING: 'PENDING',
  PREPARING: 'PREPARING',
  READY: 'READY',
  SERVED: 'SERVED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const RecommendationSource: {
  LAST_ORDER: 'LAST_ORDER',
  FAVORITE: 'FAVORITE',
  FREQUENT: 'FREQUENT',
  RULE_BASED: 'RULE_BASED',
  COLLABORATIVE: 'COLLABORATIVE',
  BEST_SELLER: 'BEST_SELLER'
};

export type RecommendationSource = (typeof RecommendationSource)[keyof typeof RecommendationSource]

}

export type QueueTarget = $Enums.QueueTarget

export const QueueTarget: typeof $Enums.QueueTarget

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type RecommendationSource = $Enums.RecommendationSource

export const RecommendationSource: typeof $Enums.RecommendationSource

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
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
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.menuCategory`: Exposes CRUD operations for the **MenuCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuCategories
    * const menuCategories = await prisma.menuCategory.findMany()
    * ```
    */
  get menuCategory(): Prisma.MenuCategoryDelegate<ExtArgs>;

  /**
   * `prisma.menuItem`: Exposes CRUD operations for the **MenuItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MenuItems
    * const menuItems = await prisma.menuItem.findMany()
    * ```
    */
  get menuItem(): Prisma.MenuItemDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs>;

  /**
   * `prisma.appSetting`: Exposes CRUD operations for the **AppSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSettings
    * const appSettings = await prisma.appSetting.findMany()
    * ```
    */
  get appSetting(): Prisma.AppSettingDelegate<ExtArgs>;

  /**
   * `prisma.customerFeedback`: Exposes CRUD operations for the **CustomerFeedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerFeedbacks
    * const customerFeedbacks = await prisma.customerFeedback.findMany()
    * ```
    */
  get customerFeedback(): Prisma.CustomerFeedbackDelegate<ExtArgs>;

  /**
   * `prisma.inventoryTransaction`: Exposes CRUD operations for the **InventoryTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryTransactions
    * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
    * ```
    */
  get inventoryTransaction(): Prisma.InventoryTransactionDelegate<ExtArgs>;

  /**
   * `prisma.staffShift`: Exposes CRUD operations for the **StaffShift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffShifts
    * const staffShifts = await prisma.staffShift.findMany()
    * ```
    */
  get staffShift(): Prisma.StaffShiftDelegate<ExtArgs>;

  /**
   * `prisma.recommendation`: Exposes CRUD operations for the **Recommendation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recommendations
    * const recommendations = await prisma.recommendation.findMany()
    * ```
    */
  get recommendation(): Prisma.RecommendationDelegate<ExtArgs>;

  /**
   * `prisma.kitchenQueue`: Exposes CRUD operations for the **KitchenQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KitchenQueues
    * const kitchenQueues = await prisma.kitchenQueue.findMany()
    * ```
    */
  get kitchenQueue(): Prisma.KitchenQueueDelegate<ExtArgs>;

  /**
   * `prisma.barQueue`: Exposes CRUD operations for the **BarQueue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarQueues
    * const barQueues = await prisma.barQueue.findMany()
    * ```
    */
  get barQueue(): Prisma.BarQueueDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Customer: 'Customer',
    MenuCategory: 'MenuCategory',
    MenuItem: 'MenuItem',
    Order: 'Order',
    Payment: 'Payment',
    OrderItem: 'OrderItem',
    AdminUser: 'AdminUser',
    AppSetting: 'AppSetting',
    CustomerFeedback: 'CustomerFeedback',
    InventoryTransaction: 'InventoryTransaction',
    StaffShift: 'StaffShift',
    Recommendation: 'Recommendation',
    KitchenQueue: 'KitchenQueue',
    BarQueue: 'BarQueue'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "customer" | "menuCategory" | "menuItem" | "order" | "payment" | "orderItem" | "adminUser" | "appSetting" | "customerFeedback" | "inventoryTransaction" | "staffShift" | "recommendation" | "kitchenQueue" | "barQueue"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      MenuCategory: {
        payload: Prisma.$MenuCategoryPayload<ExtArgs>
        fields: Prisma.MenuCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findFirst: {
            args: Prisma.MenuCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          findMany: {
            args: Prisma.MenuCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          create: {
            args: Prisma.MenuCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          createMany: {
            args: Prisma.MenuCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[]
          }
          delete: {
            args: Prisma.MenuCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          update: {
            args: Prisma.MenuCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          deleteMany: {
            args: Prisma.MenuCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>
          }
          aggregate: {
            args: Prisma.MenuCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuCategory>
          }
          groupBy: {
            args: Prisma.MenuCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCategoryCountAggregateOutputType> | number
          }
        }
      }
      MenuItem: {
        payload: Prisma.$MenuItemPayload<ExtArgs>
        fields: Prisma.MenuItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findFirst: {
            args: Prisma.MenuItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          findMany: {
            args: Prisma.MenuItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          create: {
            args: Prisma.MenuItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          createMany: {
            args: Prisma.MenuItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MenuItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>[]
          }
          delete: {
            args: Prisma.MenuItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          update: {
            args: Prisma.MenuItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          deleteMany: {
            args: Prisma.MenuItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuItemPayload>
          }
          aggregate: {
            args: Prisma.MenuItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuItem>
          }
          groupBy: {
            args: Prisma.MenuItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuItemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuItemCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
          }
        }
      }
      AppSetting: {
        payload: Prisma.$AppSettingPayload<ExtArgs>
        fields: Prisma.AppSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findFirst: {
            args: Prisma.AppSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findMany: {
            args: Prisma.AppSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          create: {
            args: Prisma.AppSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          createMany: {
            args: Prisma.AppSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          delete: {
            args: Prisma.AppSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          update: {
            args: Prisma.AppSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          deleteMany: {
            args: Prisma.AppSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          aggregate: {
            args: Prisma.AppSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSetting>
          }
          groupBy: {
            args: Prisma.AppSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSettingCountArgs<ExtArgs>
            result: $Utils.Optional<AppSettingCountAggregateOutputType> | number
          }
        }
      }
      CustomerFeedback: {
        payload: Prisma.$CustomerFeedbackPayload<ExtArgs>
        fields: Prisma.CustomerFeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>
          }
          findFirst: {
            args: Prisma.CustomerFeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>
          }
          findMany: {
            args: Prisma.CustomerFeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>[]
          }
          create: {
            args: Prisma.CustomerFeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>
          }
          createMany: {
            args: Prisma.CustomerFeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerFeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>[]
          }
          delete: {
            args: Prisma.CustomerFeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>
          }
          update: {
            args: Prisma.CustomerFeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>
          }
          deleteMany: {
            args: Prisma.CustomerFeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerFeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerFeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerFeedbackPayload>
          }
          aggregate: {
            args: Prisma.CustomerFeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerFeedback>
          }
          groupBy: {
            args: Prisma.CustomerFeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerFeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerFeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerFeedbackCountAggregateOutputType> | number
          }
        }
      }
      InventoryTransaction: {
        payload: Prisma.$InventoryTransactionPayload<ExtArgs>
        fields: Prisma.InventoryTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findFirst: {
            args: Prisma.InventoryTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          findMany: {
            args: Prisma.InventoryTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>[]
          }
          create: {
            args: Prisma.InventoryTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          createMany: {
            args: Prisma.InventoryTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>[]
          }
          delete: {
            args: Prisma.InventoryTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          update: {
            args: Prisma.InventoryTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          deleteMany: {
            args: Prisma.InventoryTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryTransactionPayload>
          }
          aggregate: {
            args: Prisma.InventoryTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryTransaction>
          }
          groupBy: {
            args: Prisma.InventoryTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryTransactionCountAggregateOutputType> | number
          }
        }
      }
      StaffShift: {
        payload: Prisma.$StaffShiftPayload<ExtArgs>
        fields: Prisma.StaffShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffShiftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffShiftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>
          }
          findFirst: {
            args: Prisma.StaffShiftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffShiftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>
          }
          findMany: {
            args: Prisma.StaffShiftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>[]
          }
          create: {
            args: Prisma.StaffShiftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>
          }
          createMany: {
            args: Prisma.StaffShiftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffShiftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>[]
          }
          delete: {
            args: Prisma.StaffShiftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>
          }
          update: {
            args: Prisma.StaffShiftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>
          }
          deleteMany: {
            args: Prisma.StaffShiftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffShiftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StaffShiftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffShiftPayload>
          }
          aggregate: {
            args: Prisma.StaffShiftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffShift>
          }
          groupBy: {
            args: Prisma.StaffShiftGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffShiftCountArgs<ExtArgs>
            result: $Utils.Optional<StaffShiftCountAggregateOutputType> | number
          }
        }
      }
      Recommendation: {
        payload: Prisma.$RecommendationPayload<ExtArgs>
        fields: Prisma.RecommendationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecommendationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecommendationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findFirst: {
            args: Prisma.RecommendationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecommendationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          findMany: {
            args: Prisma.RecommendationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          create: {
            args: Prisma.RecommendationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          createMany: {
            args: Prisma.RecommendationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecommendationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>[]
          }
          delete: {
            args: Prisma.RecommendationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          update: {
            args: Prisma.RecommendationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          deleteMany: {
            args: Prisma.RecommendationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecommendationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecommendationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecommendationPayload>
          }
          aggregate: {
            args: Prisma.RecommendationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecommendation>
          }
          groupBy: {
            args: Prisma.RecommendationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecommendationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecommendationCountArgs<ExtArgs>
            result: $Utils.Optional<RecommendationCountAggregateOutputType> | number
          }
        }
      }
      KitchenQueue: {
        payload: Prisma.$KitchenQueuePayload<ExtArgs>
        fields: Prisma.KitchenQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KitchenQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KitchenQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>
          }
          findFirst: {
            args: Prisma.KitchenQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KitchenQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>
          }
          findMany: {
            args: Prisma.KitchenQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>[]
          }
          create: {
            args: Prisma.KitchenQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>
          }
          createMany: {
            args: Prisma.KitchenQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KitchenQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>[]
          }
          delete: {
            args: Prisma.KitchenQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>
          }
          update: {
            args: Prisma.KitchenQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>
          }
          deleteMany: {
            args: Prisma.KitchenQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KitchenQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KitchenQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KitchenQueuePayload>
          }
          aggregate: {
            args: Prisma.KitchenQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKitchenQueue>
          }
          groupBy: {
            args: Prisma.KitchenQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<KitchenQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.KitchenQueueCountArgs<ExtArgs>
            result: $Utils.Optional<KitchenQueueCountAggregateOutputType> | number
          }
        }
      }
      BarQueue: {
        payload: Prisma.$BarQueuePayload<ExtArgs>
        fields: Prisma.BarQueueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarQueueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarQueueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>
          }
          findFirst: {
            args: Prisma.BarQueueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarQueueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>
          }
          findMany: {
            args: Prisma.BarQueueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>[]
          }
          create: {
            args: Prisma.BarQueueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>
          }
          createMany: {
            args: Prisma.BarQueueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarQueueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>[]
          }
          delete: {
            args: Prisma.BarQueueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>
          }
          update: {
            args: Prisma.BarQueueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>
          }
          deleteMany: {
            args: Prisma.BarQueueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarQueueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BarQueueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarQueuePayload>
          }
          aggregate: {
            args: Prisma.BarQueueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarQueue>
          }
          groupBy: {
            args: Prisma.BarQueueGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarQueueGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarQueueCountArgs<ExtArgs>
            result: $Utils.Optional<BarQueueCountAggregateOutputType> | number
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
    recommendations: number
    feedback: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
    recommendations?: boolean | CustomerCountOutputTypeCountRecommendationsArgs
    feedback?: boolean | CustomerCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFeedbackWhereInput
  }


  /**
   * Count Type MenuCategoryCountOutputType
   */

  export type MenuCategoryCountOutputType = {
    items: number
  }

  export type MenuCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MenuCategoryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategoryCountOutputType
     */
    select?: MenuCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
  }


  /**
   * Count Type MenuItemCountOutputType
   */

  export type MenuItemCountOutputType = {
    orderItems: number
    recommendations: number
    inventoryTransactions: number
  }

  export type MenuItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuItemCountOutputTypeCountOrderItemsArgs
    recommendations?: boolean | MenuItemCountOutputTypeCountRecommendationsArgs
    inventoryTransactions?: boolean | MenuItemCountOutputTypeCountInventoryTransactionsArgs
  }

  // Custom InputTypes
  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItemCountOutputType
     */
    select?: MenuItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountRecommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
  }

  /**
   * MenuItemCountOutputType without action
   */
  export type MenuItemCountOutputTypeCountInventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    items: number
    payments: number
    kitchenQueue: number
    barQueue: number
    feedback: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrderCountOutputTypeCountItemsArgs
    payments?: boolean | OrderCountOutputTypeCountPaymentsArgs
    kitchenQueue?: boolean | OrderCountOutputTypeCountKitchenQueueArgs
    barQueue?: boolean | OrderCountOutputTypeCountBarQueueArgs
    feedback?: boolean | OrderCountOutputTypeCountFeedbackArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountKitchenQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KitchenQueueWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountBarQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarQueueWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFeedbackWhereInput
  }


  /**
   * Count Type AdminUserCountOutputType
   */

  export type AdminUserCountOutputType = {
    shifts: number
    inventoryTransactions: number
  }

  export type AdminUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shifts?: boolean | AdminUserCountOutputTypeCountShiftsArgs
    inventoryTransactions?: boolean | AdminUserCountOutputTypeCountInventoryTransactionsArgs
  }

  // Custom InputTypes
  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUserCountOutputType
     */
    select?: AdminUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffShiftWhereInput
  }

  /**
   * AdminUserCountOutputType without action
   */
  export type AdminUserCountOutputTypeCountInventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    loyaltyPoints: number | null
  }

  export type CustomerSumAggregateOutputType = {
    loyaltyPoints: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    mobile: string | null
    name: string | null
    loyaltyPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    mobile: string | null
    name: string | null
    loyaltyPoints: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    mobile: number
    name: number
    loyaltyPoints: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    loyaltyPoints?: true
  }

  export type CustomerSumAggregateInputType = {
    loyaltyPoints?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    loyaltyPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    loyaltyPoints?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    mobile?: true
    name?: true
    loyaltyPoints?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    mobile: string
    name: string | null
    loyaltyPoints: number
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    loyaltyPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    recommendations?: boolean | Customer$recommendationsArgs<ExtArgs>
    feedback?: boolean | Customer$feedbackArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mobile?: boolean
    name?: boolean
    loyaltyPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    mobile?: boolean
    name?: boolean
    loyaltyPoints?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    recommendations?: boolean | Customer$recommendationsArgs<ExtArgs>
    feedback?: boolean | Customer$feedbackArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
      feedback: Prisma.$CustomerFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mobile: string
      name: string | null
      loyaltyPoints: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    recommendations<T extends Customer$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany"> | Null>
    feedback<T extends Customer$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Customer$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly loyaltyPoints: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer.recommendations
   */
  export type Customer$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Customer.feedback
   */
  export type Customer$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    where?: CustomerFeedbackWhereInput
    orderBy?: CustomerFeedbackOrderByWithRelationInput | CustomerFeedbackOrderByWithRelationInput[]
    cursor?: CustomerFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerFeedbackScalarFieldEnum | CustomerFeedbackScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model MenuCategory
   */

  export type AggregateMenuCategory = {
    _count: MenuCategoryCountAggregateOutputType | null
    _avg: MenuCategoryAvgAggregateOutputType | null
    _sum: MenuCategorySumAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  export type MenuCategoryAvgAggregateOutputType = {
    sortOrder: number | null
  }

  export type MenuCategorySumAggregateOutputType = {
    sortOrder: number | null
  }

  export type MenuCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    icon: string | null
    sortOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCategoryCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    sortOrder: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuCategoryAvgAggregateInputType = {
    sortOrder?: true
  }

  export type MenuCategorySumAggregateInputType = {
    sortOrder?: true
  }

  export type MenuCategoryMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCategoryCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    sortOrder?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategory to aggregate.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuCategories
    **/
    _count?: true | MenuCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type GetMenuCategoryAggregateType<T extends MenuCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuCategory[P]>
      : GetScalarType<T[P], AggregateMenuCategory[P]>
  }




  export type MenuCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuCategoryWhereInput
    orderBy?: MenuCategoryOrderByWithAggregationInput | MenuCategoryOrderByWithAggregationInput[]
    by: MenuCategoryScalarFieldEnum[] | MenuCategoryScalarFieldEnum
    having?: MenuCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCategoryCountAggregateInputType | true
    _avg?: MenuCategoryAvgAggregateInputType
    _sum?: MenuCategorySumAggregateInputType
    _min?: MenuCategoryMinAggregateInputType
    _max?: MenuCategoryMaxAggregateInputType
  }

  export type MenuCategoryGroupByOutputType = {
    id: string
    name: string
    icon: string
    sortOrder: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: MenuCategoryCountAggregateOutputType | null
    _avg: MenuCategoryAvgAggregateOutputType | null
    _sum: MenuCategorySumAggregateOutputType | null
    _min: MenuCategoryMinAggregateOutputType | null
    _max: MenuCategoryMaxAggregateOutputType | null
  }

  type GetMenuCategoryGroupByPayload<T extends MenuCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
        }
      >
    >


  export type MenuCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | MenuCategory$itemsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuCategory"]>

  export type MenuCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["menuCategory"]>

  export type MenuCategorySelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    sortOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MenuCategory$itemsArgs<ExtArgs>
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MenuCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuCategory"
    objects: {
      items: Prisma.$MenuItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      icon: string
      sortOrder: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuCategory"]>
    composites: {}
  }

  type MenuCategoryGetPayload<S extends boolean | null | undefined | MenuCategoryDefaultArgs> = $Result.GetResult<Prisma.$MenuCategoryPayload, S>

  type MenuCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCategoryCountAggregateInputType | true
    }

  export interface MenuCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuCategory'], meta: { name: 'MenuCategory' } }
    /**
     * Find zero or one MenuCategory that matches the filter.
     * @param {MenuCategoryFindUniqueArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuCategoryFindUniqueArgs>(args: SelectSubset<T, MenuCategoryFindUniqueArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuCategoryFindUniqueOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuCategoryFindFirstArgs>(args?: SelectSubset<T, MenuCategoryFindFirstArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany()
     * 
     * // Get first 10 MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuCategoryFindManyArgs>(args?: SelectSubset<T, MenuCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuCategory.
     * @param {MenuCategoryCreateArgs} args - Arguments to create a MenuCategory.
     * @example
     * // Create one MenuCategory
     * const MenuCategory = await prisma.menuCategory.create({
     *   data: {
     *     // ... data to create a MenuCategory
     *   }
     * })
     * 
     */
    create<T extends MenuCategoryCreateArgs>(args: SelectSubset<T, MenuCategoryCreateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuCategories.
     * @param {MenuCategoryCreateManyArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCategoryCreateManyArgs>(args?: SelectSubset<T, MenuCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuCategories and returns the data saved in the database.
     * @param {MenuCategoryCreateManyAndReturnArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuCategories and only return the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MenuCategory.
     * @param {MenuCategoryDeleteArgs} args - Arguments to delete one MenuCategory.
     * @example
     * // Delete one MenuCategory
     * const MenuCategory = await prisma.menuCategory.delete({
     *   where: {
     *     // ... filter to delete one MenuCategory
     *   }
     * })
     * 
     */
    delete<T extends MenuCategoryDeleteArgs>(args: SelectSubset<T, MenuCategoryDeleteArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuCategory.
     * @param {MenuCategoryUpdateArgs} args - Arguments to update one MenuCategory.
     * @example
     * // Update one MenuCategory
     * const menuCategory = await prisma.menuCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuCategoryUpdateArgs>(args: SelectSubset<T, MenuCategoryUpdateArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuCategories.
     * @param {MenuCategoryDeleteManyArgs} args - Arguments to filter MenuCategories to delete.
     * @example
     * // Delete a few MenuCategories
     * const { count } = await prisma.menuCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuCategoryDeleteManyArgs>(args?: SelectSubset<T, MenuCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuCategories
     * const menuCategory = await prisma.menuCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuCategoryUpdateManyArgs>(args: SelectSubset<T, MenuCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuCategory.
     * @param {MenuCategoryUpsertArgs} args - Arguments to update or create a MenuCategory.
     * @example
     * // Update or create a MenuCategory
     * const menuCategory = await prisma.menuCategory.upsert({
     *   create: {
     *     // ... data to create a MenuCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuCategory we want to update
     *   }
     * })
     */
    upsert<T extends MenuCategoryUpsertArgs>(args: SelectSubset<T, MenuCategoryUpsertArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryCountArgs} args - Arguments to filter MenuCategories to count.
     * @example
     * // Count the number of MenuCategories
     * const count = await prisma.menuCategory.count({
     *   where: {
     *     // ... the filter for the MenuCategories we want to count
     *   }
     * })
    **/
    count<T extends MenuCategoryCountArgs>(
      args?: Subset<T, MenuCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuCategoryAggregateArgs>(args: Subset<T, MenuCategoryAggregateArgs>): Prisma.PrismaPromise<GetMenuCategoryAggregateType<T>>

    /**
     * Group by MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryGroupByArgs} args - Group by arguments.
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
      T extends MenuCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuCategoryGroupByArgs['orderBy'] }
        : { orderBy?: MenuCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuCategory model
   */
  readonly fields: MenuCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends MenuCategory$itemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategory$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the MenuCategory model
   */ 
  interface MenuCategoryFieldRefs {
    readonly id: FieldRef<"MenuCategory", 'String'>
    readonly name: FieldRef<"MenuCategory", 'String'>
    readonly icon: FieldRef<"MenuCategory", 'String'>
    readonly sortOrder: FieldRef<"MenuCategory", 'Int'>
    readonly isActive: FieldRef<"MenuCategory", 'Boolean'>
    readonly createdAt: FieldRef<"MenuCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuCategory findUnique
   */
  export type MenuCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findUniqueOrThrow
   */
  export type MenuCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory findFirst
   */
  export type MenuCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findFirstOrThrow
   */
  export type MenuCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory findMany
   */
  export type MenuCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter, which MenuCategories to fetch.
     */
    where?: MenuCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?: MenuCategoryOrderByWithRelationInput | MenuCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuCategories.
     */
    skip?: number
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[]
  }

  /**
   * MenuCategory create
   */
  export type MenuCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuCategory.
     */
    data: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
  }

  /**
   * MenuCategory createMany
   */
  export type MenuCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuCategory createManyAndReturn
   */
  export type MenuCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuCategory update
   */
  export type MenuCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuCategory.
     */
    data: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
    /**
     * Choose, which MenuCategory to update.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory updateMany
   */
  export type MenuCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuCategories.
     */
    data: XOR<MenuCategoryUpdateManyMutationInput, MenuCategoryUncheckedUpdateManyInput>
    /**
     * Filter which MenuCategories to update
     */
    where?: MenuCategoryWhereInput
  }

  /**
   * MenuCategory upsert
   */
  export type MenuCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuCategory to update in case it exists.
     */
    where: MenuCategoryWhereUniqueInput
    /**
     * In case the MenuCategory found by the `where` argument doesn't exist, create a new MenuCategory with this data.
     */
    create: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>
    /**
     * In case the MenuCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>
  }

  /**
   * MenuCategory delete
   */
  export type MenuCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
    /**
     * Filter which MenuCategory to delete.
     */
    where: MenuCategoryWhereUniqueInput
  }

  /**
   * MenuCategory deleteMany
   */
  export type MenuCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuCategories to delete
     */
    where?: MenuCategoryWhereInput
  }

  /**
   * MenuCategory.items
   */
  export type MenuCategory$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    cursor?: MenuItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuCategory without action
   */
  export type MenuCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null
  }


  /**
   * Model MenuItem
   */

  export type AggregateMenuItem = {
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  export type MenuItemAvgAggregateOutputType = {
    price: number | null
    stockQuantity: number | null
    lowStockAt: number | null
  }

  export type MenuItemSumAggregateOutputType = {
    price: number | null
    stockQuantity: number | null
    lowStockAt: number | null
  }

  export type MenuItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    isVeg: boolean | null
    isAvailable: boolean | null
    trackStock: boolean | null
    stockQuantity: number | null
    lowStockAt: number | null
    categoryId: string | null
    targetQueue: $Enums.QueueTarget | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    imageUrl: string | null
    isVeg: boolean | null
    isAvailable: boolean | null
    trackStock: boolean | null
    stockQuantity: number | null
    lowStockAt: number | null
    categoryId: string | null
    targetQueue: $Enums.QueueTarget | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuItemCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    imageUrl: number
    isVeg: number
    isAvailable: number
    trackStock: number
    stockQuantity: number
    lowStockAt: number
    categoryId: number
    addOns: number
    targetQueue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuItemAvgAggregateInputType = {
    price?: true
    stockQuantity?: true
    lowStockAt?: true
  }

  export type MenuItemSumAggregateInputType = {
    price?: true
    stockQuantity?: true
    lowStockAt?: true
  }

  export type MenuItemMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isVeg?: true
    isAvailable?: true
    trackStock?: true
    stockQuantity?: true
    lowStockAt?: true
    categoryId?: true
    targetQueue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isVeg?: true
    isAvailable?: true
    trackStock?: true
    stockQuantity?: true
    lowStockAt?: true
    categoryId?: true
    targetQueue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuItemCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    imageUrl?: true
    isVeg?: true
    isAvailable?: true
    trackStock?: true
    stockQuantity?: true
    lowStockAt?: true
    categoryId?: true
    addOns?: true
    targetQueue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItem to aggregate.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MenuItems
    **/
    _count?: true | MenuItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuItemMaxAggregateInputType
  }

  export type GetMenuItemAggregateType<T extends MenuItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuItem[P]>
      : GetScalarType<T[P], AggregateMenuItem[P]>
  }




  export type MenuItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuItemWhereInput
    orderBy?: MenuItemOrderByWithAggregationInput | MenuItemOrderByWithAggregationInput[]
    by: MenuItemScalarFieldEnum[] | MenuItemScalarFieldEnum
    having?: MenuItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuItemCountAggregateInputType | true
    _avg?: MenuItemAvgAggregateInputType
    _sum?: MenuItemSumAggregateInputType
    _min?: MenuItemMinAggregateInputType
    _max?: MenuItemMaxAggregateInputType
  }

  export type MenuItemGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    imageUrl: string | null
    isVeg: boolean
    isAvailable: boolean
    trackStock: boolean
    stockQuantity: number | null
    lowStockAt: number
    categoryId: string
    addOns: JsonValue | null
    targetQueue: $Enums.QueueTarget
    createdAt: Date
    updatedAt: Date
    _count: MenuItemCountAggregateOutputType | null
    _avg: MenuItemAvgAggregateOutputType | null
    _sum: MenuItemSumAggregateOutputType | null
    _min: MenuItemMinAggregateOutputType | null
    _max: MenuItemMaxAggregateOutputType | null
  }

  type GetMenuItemGroupByPayload<T extends MenuItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuItemGroupByOutputType[P]>
        }
      >
    >


  export type MenuItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: boolean
    lowStockAt?: boolean
    categoryId?: boolean
    addOns?: boolean
    targetQueue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    recommendations?: boolean | MenuItem$recommendationsArgs<ExtArgs>
    inventoryTransactions?: boolean | MenuItem$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: boolean
    lowStockAt?: boolean
    categoryId?: boolean
    addOns?: boolean
    targetQueue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuItem"]>

  export type MenuItemSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    imageUrl?: boolean
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: boolean
    lowStockAt?: boolean
    categoryId?: boolean
    addOns?: boolean
    targetQueue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
    orderItems?: boolean | MenuItem$orderItemsArgs<ExtArgs>
    recommendations?: boolean | MenuItem$recommendationsArgs<ExtArgs>
    inventoryTransactions?: boolean | MenuItem$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | MenuItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MenuItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | MenuCategoryDefaultArgs<ExtArgs>
  }

  export type $MenuItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MenuItem"
    objects: {
      category: Prisma.$MenuCategoryPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      recommendations: Prisma.$RecommendationPayload<ExtArgs>[]
      inventoryTransactions: Prisma.$InventoryTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      imageUrl: string | null
      isVeg: boolean
      isAvailable: boolean
      trackStock: boolean
      stockQuantity: number | null
      lowStockAt: number
      categoryId: string
      addOns: Prisma.JsonValue | null
      targetQueue: $Enums.QueueTarget
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menuItem"]>
    composites: {}
  }

  type MenuItemGetPayload<S extends boolean | null | undefined | MenuItemDefaultArgs> = $Result.GetResult<Prisma.$MenuItemPayload, S>

  type MenuItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuItemCountAggregateInputType | true
    }

  export interface MenuItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MenuItem'], meta: { name: 'MenuItem' } }
    /**
     * Find zero or one MenuItem that matches the filter.
     * @param {MenuItemFindUniqueArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuItemFindUniqueArgs>(args: SelectSubset<T, MenuItemFindUniqueArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MenuItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuItemFindUniqueOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuItemFindFirstArgs>(args?: SelectSubset<T, MenuItemFindFirstArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MenuItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindFirstOrThrowArgs} args - Arguments to find a MenuItem
     * @example
     * // Get one MenuItem
     * const menuItem = await prisma.menuItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MenuItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuItems
     * const menuItems = await prisma.menuItem.findMany()
     * 
     * // Get first 10 MenuItems
     * const menuItems = await prisma.menuItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuItemFindManyArgs>(args?: SelectSubset<T, MenuItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MenuItem.
     * @param {MenuItemCreateArgs} args - Arguments to create a MenuItem.
     * @example
     * // Create one MenuItem
     * const MenuItem = await prisma.menuItem.create({
     *   data: {
     *     // ... data to create a MenuItem
     *   }
     * })
     * 
     */
    create<T extends MenuItemCreateArgs>(args: SelectSubset<T, MenuItemCreateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MenuItems.
     * @param {MenuItemCreateManyArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuItemCreateManyArgs>(args?: SelectSubset<T, MenuItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MenuItems and returns the data saved in the database.
     * @param {MenuItemCreateManyAndReturnArgs} args - Arguments to create many MenuItems.
     * @example
     * // Create many MenuItems
     * const menuItem = await prisma.menuItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MenuItems and only return the `id`
     * const menuItemWithIdOnly = await prisma.menuItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MenuItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MenuItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MenuItem.
     * @param {MenuItemDeleteArgs} args - Arguments to delete one MenuItem.
     * @example
     * // Delete one MenuItem
     * const MenuItem = await prisma.menuItem.delete({
     *   where: {
     *     // ... filter to delete one MenuItem
     *   }
     * })
     * 
     */
    delete<T extends MenuItemDeleteArgs>(args: SelectSubset<T, MenuItemDeleteArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MenuItem.
     * @param {MenuItemUpdateArgs} args - Arguments to update one MenuItem.
     * @example
     * // Update one MenuItem
     * const menuItem = await prisma.menuItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuItemUpdateArgs>(args: SelectSubset<T, MenuItemUpdateArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MenuItems.
     * @param {MenuItemDeleteManyArgs} args - Arguments to filter MenuItems to delete.
     * @example
     * // Delete a few MenuItems
     * const { count } = await prisma.menuItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuItemDeleteManyArgs>(args?: SelectSubset<T, MenuItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuItems
     * const menuItem = await prisma.menuItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuItemUpdateManyArgs>(args: SelectSubset<T, MenuItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MenuItem.
     * @param {MenuItemUpsertArgs} args - Arguments to update or create a MenuItem.
     * @example
     * // Update or create a MenuItem
     * const menuItem = await prisma.menuItem.upsert({
     *   create: {
     *     // ... data to create a MenuItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuItem we want to update
     *   }
     * })
     */
    upsert<T extends MenuItemUpsertArgs>(args: SelectSubset<T, MenuItemUpsertArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MenuItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemCountArgs} args - Arguments to filter MenuItems to count.
     * @example
     * // Count the number of MenuItems
     * const count = await prisma.menuItem.count({
     *   where: {
     *     // ... the filter for the MenuItems we want to count
     *   }
     * })
    **/
    count<T extends MenuItemCountArgs>(
      args?: Subset<T, MenuItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuItemAggregateArgs>(args: Subset<T, MenuItemAggregateArgs>): Prisma.PrismaPromise<GetMenuItemAggregateType<T>>

    /**
     * Group by MenuItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuItemGroupByArgs} args - Group by arguments.
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
      T extends MenuItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuItemGroupByArgs['orderBy'] }
        : { orderBy?: MenuItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MenuItem model
   */
  readonly fields: MenuItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends MenuCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuCategoryDefaultArgs<ExtArgs>>): Prisma__MenuCategoryClient<$Result.GetResult<Prisma.$MenuCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    orderItems<T extends MenuItem$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    recommendations<T extends MenuItem$recommendationsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$recommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryTransactions<T extends MenuItem$inventoryTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, MenuItem$inventoryTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the MenuItem model
   */ 
  interface MenuItemFieldRefs {
    readonly id: FieldRef<"MenuItem", 'String'>
    readonly name: FieldRef<"MenuItem", 'String'>
    readonly description: FieldRef<"MenuItem", 'String'>
    readonly price: FieldRef<"MenuItem", 'Float'>
    readonly imageUrl: FieldRef<"MenuItem", 'String'>
    readonly isVeg: FieldRef<"MenuItem", 'Boolean'>
    readonly isAvailable: FieldRef<"MenuItem", 'Boolean'>
    readonly trackStock: FieldRef<"MenuItem", 'Boolean'>
    readonly stockQuantity: FieldRef<"MenuItem", 'Int'>
    readonly lowStockAt: FieldRef<"MenuItem", 'Int'>
    readonly categoryId: FieldRef<"MenuItem", 'String'>
    readonly addOns: FieldRef<"MenuItem", 'Json'>
    readonly targetQueue: FieldRef<"MenuItem", 'QueueTarget'>
    readonly createdAt: FieldRef<"MenuItem", 'DateTime'>
    readonly updatedAt: FieldRef<"MenuItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MenuItem findUnique
   */
  export type MenuItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findUniqueOrThrow
   */
  export type MenuItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem findFirst
   */
  export type MenuItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findFirstOrThrow
   */
  export type MenuItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItem to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MenuItems.
     */
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem findMany
   */
  export type MenuItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter, which MenuItems to fetch.
     */
    where?: MenuItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MenuItems to fetch.
     */
    orderBy?: MenuItemOrderByWithRelationInput | MenuItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MenuItems.
     */
    cursor?: MenuItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MenuItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MenuItems.
     */
    skip?: number
    distinct?: MenuItemScalarFieldEnum | MenuItemScalarFieldEnum[]
  }

  /**
   * MenuItem create
   */
  export type MenuItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MenuItem.
     */
    data: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
  }

  /**
   * MenuItem createMany
   */
  export type MenuItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MenuItem createManyAndReturn
   */
  export type MenuItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MenuItems.
     */
    data: MenuItemCreateManyInput | MenuItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MenuItem update
   */
  export type MenuItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MenuItem.
     */
    data: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
    /**
     * Choose, which MenuItem to update.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem updateMany
   */
  export type MenuItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MenuItems.
     */
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyInput>
    /**
     * Filter which MenuItems to update
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem upsert
   */
  export type MenuItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MenuItem to update in case it exists.
     */
    where: MenuItemWhereUniqueInput
    /**
     * In case the MenuItem found by the `where` argument doesn't exist, create a new MenuItem with this data.
     */
    create: XOR<MenuItemCreateInput, MenuItemUncheckedCreateInput>
    /**
     * In case the MenuItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuItemUpdateInput, MenuItemUncheckedUpdateInput>
  }

  /**
   * MenuItem delete
   */
  export type MenuItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    /**
     * Filter which MenuItem to delete.
     */
    where: MenuItemWhereUniqueInput
  }

  /**
   * MenuItem deleteMany
   */
  export type MenuItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MenuItems to delete
     */
    where?: MenuItemWhereInput
  }

  /**
   * MenuItem.orderItems
   */
  export type MenuItem$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * MenuItem.recommendations
   */
  export type MenuItem$recommendationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    cursor?: RecommendationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * MenuItem.inventoryTransactions
   */
  export type MenuItem$inventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    cursor?: InventoryTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * MenuItem without action
   */
  export type MenuItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalPrice: number | null
    tax: number | null
    discount: number | null
    finalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalPrice: number | null
    tax: number | null
    discount: number | null
    finalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerId: string | null
    tableNumber: string | null
    notes: string | null
    totalPrice: number | null
    tax: number | null
    discount: number | null
    finalPrice: number | null
    status: $Enums.OrderStatus | null
    isPaid: boolean | null
    paidAt: Date | null
    paymentMethod: string | null
    paymentStatus: string | null
    paymentGateway: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    cancelUntil: Date | null
    cancelledAt: Date | null
    refundStatus: string | null
    refundDeniedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    customerId: string | null
    tableNumber: string | null
    notes: string | null
    totalPrice: number | null
    tax: number | null
    discount: number | null
    finalPrice: number | null
    status: $Enums.OrderStatus | null
    isPaid: boolean | null
    paidAt: Date | null
    paymentMethod: string | null
    paymentStatus: string | null
    paymentGateway: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    cancelUntil: Date | null
    cancelledAt: Date | null
    refundStatus: string | null
    refundDeniedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    customerId: number
    tableNumber: number
    notes: number
    totalPrice: number
    tax: number
    discount: number
    finalPrice: number
    status: number
    isPaid: number
    paidAt: number
    paymentMethod: number
    paymentStatus: number
    paymentGateway: number
    gatewayOrderId: number
    gatewayPaymentId: number
    cancelUntil: number
    cancelledAt: number
    refundStatus: number
    refundDeniedReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalPrice?: true
    tax?: true
    discount?: true
    finalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    totalPrice?: true
    tax?: true
    discount?: true
    finalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    customerId?: true
    tableNumber?: true
    notes?: true
    totalPrice?: true
    tax?: true
    discount?: true
    finalPrice?: true
    status?: true
    isPaid?: true
    paidAt?: true
    paymentMethod?: true
    paymentStatus?: true
    paymentGateway?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    cancelUntil?: true
    cancelledAt?: true
    refundStatus?: true
    refundDeniedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    customerId?: true
    tableNumber?: true
    notes?: true
    totalPrice?: true
    tax?: true
    discount?: true
    finalPrice?: true
    status?: true
    isPaid?: true
    paidAt?: true
    paymentMethod?: true
    paymentStatus?: true
    paymentGateway?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    cancelUntil?: true
    cancelledAt?: true
    refundStatus?: true
    refundDeniedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    customerId?: true
    tableNumber?: true
    notes?: true
    totalPrice?: true
    tax?: true
    discount?: true
    finalPrice?: true
    status?: true
    isPaid?: true
    paidAt?: true
    paymentMethod?: true
    paymentStatus?: true
    paymentGateway?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    cancelUntil?: true
    cancelledAt?: true
    refundStatus?: true
    refundDeniedReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes: string | null
    totalPrice: number
    tax: number
    discount: number
    finalPrice: number
    status: $Enums.OrderStatus
    isPaid: boolean
    paidAt: Date | null
    paymentMethod: string | null
    paymentStatus: string
    paymentGateway: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    cancelUntil: Date | null
    cancelledAt: Date | null
    refundStatus: string
    refundDeniedReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerId?: boolean
    tableNumber?: boolean
    notes?: boolean
    totalPrice?: boolean
    tax?: boolean
    discount?: boolean
    finalPrice?: boolean
    status?: boolean
    isPaid?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    paymentGateway?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    cancelUntil?: boolean
    cancelledAt?: boolean
    refundStatus?: boolean
    refundDeniedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    kitchenQueue?: boolean | Order$kitchenQueueArgs<ExtArgs>
    barQueue?: boolean | Order$barQueueArgs<ExtArgs>
    feedback?: boolean | Order$feedbackArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    customerId?: boolean
    tableNumber?: boolean
    notes?: boolean
    totalPrice?: boolean
    tax?: boolean
    discount?: boolean
    finalPrice?: boolean
    status?: boolean
    isPaid?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    paymentGateway?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    cancelUntil?: boolean
    cancelledAt?: boolean
    refundStatus?: boolean
    refundDeniedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    customerId?: boolean
    tableNumber?: boolean
    notes?: boolean
    totalPrice?: boolean
    tax?: boolean
    discount?: boolean
    finalPrice?: boolean
    status?: boolean
    isPaid?: boolean
    paidAt?: boolean
    paymentMethod?: boolean
    paymentStatus?: boolean
    paymentGateway?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    cancelUntil?: boolean
    cancelledAt?: boolean
    refundStatus?: boolean
    refundDeniedReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    items?: boolean | Order$itemsArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    kitchenQueue?: boolean | Order$kitchenQueueArgs<ExtArgs>
    barQueue?: boolean | Order$barQueueArgs<ExtArgs>
    feedback?: boolean | Order$feedbackArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      items: Prisma.$OrderItemPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      kitchenQueue: Prisma.$KitchenQueuePayload<ExtArgs>[]
      barQueue: Prisma.$BarQueuePayload<ExtArgs>[]
      feedback: Prisma.$CustomerFeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      customerId: string
      tableNumber: string
      notes: string | null
      totalPrice: number
      tax: number
      discount: number
      finalPrice: number
      status: $Enums.OrderStatus
      isPaid: boolean
      paidAt: Date | null
      paymentMethod: string | null
      paymentStatus: string
      paymentGateway: string | null
      gatewayOrderId: string | null
      gatewayPaymentId: string | null
      cancelUntil: Date | null
      cancelledAt: Date | null
      refundStatus: string
      refundDeniedReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    items<T extends Order$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany"> | Null>
    payments<T extends Order$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany"> | Null>
    kitchenQueue<T extends Order$kitchenQueueArgs<ExtArgs> = {}>(args?: Subset<T, Order$kitchenQueueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "findMany"> | Null>
    barQueue<T extends Order$barQueueArgs<ExtArgs> = {}>(args?: Subset<T, Order$barQueueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "findMany"> | Null>
    feedback<T extends Order$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Order$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly customerId: FieldRef<"Order", 'String'>
    readonly tableNumber: FieldRef<"Order", 'String'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly totalPrice: FieldRef<"Order", 'Float'>
    readonly tax: FieldRef<"Order", 'Float'>
    readonly discount: FieldRef<"Order", 'Float'>
    readonly finalPrice: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly isPaid: FieldRef<"Order", 'Boolean'>
    readonly paidAt: FieldRef<"Order", 'DateTime'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'String'>
    readonly paymentGateway: FieldRef<"Order", 'String'>
    readonly gatewayOrderId: FieldRef<"Order", 'String'>
    readonly gatewayPaymentId: FieldRef<"Order", 'String'>
    readonly cancelUntil: FieldRef<"Order", 'DateTime'>
    readonly cancelledAt: FieldRef<"Order", 'DateTime'>
    readonly refundStatus: FieldRef<"Order", 'String'>
    readonly refundDeniedReason: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.items
   */
  export type Order$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.payments
   */
  export type Order$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Order.kitchenQueue
   */
  export type Order$kitchenQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    where?: KitchenQueueWhereInput
    orderBy?: KitchenQueueOrderByWithRelationInput | KitchenQueueOrderByWithRelationInput[]
    cursor?: KitchenQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KitchenQueueScalarFieldEnum | KitchenQueueScalarFieldEnum[]
  }

  /**
   * Order.barQueue
   */
  export type Order$barQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    where?: BarQueueWhereInput
    orderBy?: BarQueueOrderByWithRelationInput | BarQueueOrderByWithRelationInput[]
    cursor?: BarQueueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarQueueScalarFieldEnum | BarQueueScalarFieldEnum[]
  }

  /**
   * Order.feedback
   */
  export type Order$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    where?: CustomerFeedbackWhereInput
    orderBy?: CustomerFeedbackOrderByWithRelationInput | CustomerFeedbackOrderByWithRelationInput[]
    cursor?: CustomerFeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerFeedbackScalarFieldEnum | CustomerFeedbackScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    gateway: string | null
    merchantOrderId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    amount: number | null
    status: string | null
    method: string | null
    redirectUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    gateway: string | null
    merchantOrderId: string | null
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    amount: number | null
    status: string | null
    method: string | null
    redirectUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    gateway: number
    merchantOrderId: number
    gatewayOrderId: number
    gatewayPaymentId: number
    amount: number
    status: number
    method: number
    redirectUrl: number
    rawResponse: number
    rawWebhook: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    gateway?: true
    merchantOrderId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    amount?: true
    status?: true
    method?: true
    redirectUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    gateway?: true
    merchantOrderId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    amount?: true
    status?: true
    method?: true
    redirectUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    gateway?: true
    merchantOrderId?: true
    gatewayOrderId?: true
    gatewayPaymentId?: true
    amount?: true
    status?: true
    method?: true
    redirectUrl?: true
    rawResponse?: true
    rawWebhook?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: string
    gateway: string
    merchantOrderId: string
    gatewayOrderId: string | null
    gatewayPaymentId: string | null
    amount: number
    status: string
    method: string | null
    redirectUrl: string | null
    rawResponse: JsonValue | null
    rawWebhook: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    gateway?: boolean
    merchantOrderId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    method?: boolean
    redirectUrl?: boolean
    rawResponse?: boolean
    rawWebhook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    gateway?: boolean
    merchantOrderId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    method?: boolean
    redirectUrl?: boolean
    rawResponse?: boolean
    rawWebhook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    gateway?: boolean
    merchantOrderId?: boolean
    gatewayOrderId?: boolean
    gatewayPaymentId?: boolean
    amount?: boolean
    status?: boolean
    method?: boolean
    redirectUrl?: boolean
    rawResponse?: boolean
    rawWebhook?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      gateway: string
      merchantOrderId: string
      gatewayOrderId: string | null
      gatewayPaymentId: string | null
      amount: number
      status: string
      method: string | null
      redirectUrl: string | null
      rawResponse: Prisma.JsonValue | null
      rawWebhook: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly gateway: FieldRef<"Payment", 'String'>
    readonly merchantOrderId: FieldRef<"Payment", 'String'>
    readonly gatewayOrderId: FieldRef<"Payment", 'String'>
    readonly gatewayPaymentId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly redirectUrl: FieldRef<"Payment", 'String'>
    readonly rawResponse: FieldRef<"Payment", 'Json'>
    readonly rawWebhook: FieldRef<"Payment", 'Json'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    menuItemId: string | null
    quantity: number | null
    unitPrice: number | null
    notes: string | null
    status: $Enums.OrderStatus | null
    targetQueue: $Enums.QueueTarget | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    menuItemId: string | null
    quantity: number | null
    unitPrice: number | null
    notes: string | null
    status: $Enums.OrderStatus | null
    targetQueue: $Enums.QueueTarget | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    menuItemId: number
    quantity: number
    unitPrice: number
    notes: number
    addOnsSelected: number
    status: number
    targetQueue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    notes?: true
    status?: true
    targetQueue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    notes?: true
    status?: true
    targetQueue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    menuItemId?: true
    quantity?: true
    unitPrice?: true
    notes?: true
    addOnsSelected?: true
    status?: true
    targetQueue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: number
    notes: string | null
    addOnsSelected: JsonValue | null
    status: $Enums.OrderStatus
    targetQueue: $Enums.QueueTarget
    createdAt: Date
    updatedAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    notes?: boolean
    addOnsSelected?: boolean
    status?: boolean
    targetQueue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    notes?: boolean
    addOnsSelected?: boolean
    status?: boolean
    targetQueue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    menuItemId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    notes?: boolean
    addOnsSelected?: boolean
    status?: boolean
    targetQueue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      menuItemId: string
      quantity: number
      unitPrice: number
      notes: string | null
      addOnsSelected: Prisma.JsonValue | null
      status: $Enums.OrderStatus
      targetQueue: $Enums.QueueTarget
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
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
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OrderItem model
   */ 
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly menuItemId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Int'>
    readonly unitPrice: FieldRef<"OrderItem", 'Float'>
    readonly notes: FieldRef<"OrderItem", 'String'>
    readonly addOnsSelected: FieldRef<"OrderItem", 'Json'>
    readonly status: FieldRef<"OrderItem", 'OrderStatus'>
    readonly targetQueue: FieldRef<"OrderItem", 'QueueTarget'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    name: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: string
    username: string
    password: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shifts?: boolean | AdminUser$shiftsArgs<ExtArgs>
    inventoryTransactions?: boolean | AdminUser$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shifts?: boolean | AdminUser$shiftsArgs<ExtArgs>
    inventoryTransactions?: boolean | AdminUser$inventoryTransactionsArgs<ExtArgs>
    _count?: boolean | AdminUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {
      shifts: Prisma.$StaffShiftPayload<ExtArgs>[]
      inventoryTransactions: Prisma.$InventoryTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      name: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shifts<T extends AdminUser$shiftsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$shiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "findMany"> | Null>
    inventoryTransactions<T extends AdminUser$inventoryTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, AdminUser$inventoryTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AdminUser model
   */ 
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'String'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly name: FieldRef<"AdminUser", 'String'>
    readonly role: FieldRef<"AdminUser", 'String'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
    readonly updatedAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
  }

  /**
   * AdminUser.shifts
   */
  export type AdminUser$shiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    where?: StaffShiftWhereInput
    orderBy?: StaffShiftOrderByWithRelationInput | StaffShiftOrderByWithRelationInput[]
    cursor?: StaffShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffShiftScalarFieldEnum | StaffShiftScalarFieldEnum[]
  }

  /**
   * AdminUser.inventoryTransactions
   */
  export type AdminUser$inventoryTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    cursor?: InventoryTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
  }


  /**
   * Model AppSetting
   */

  export type AggregateAppSetting = {
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  export type AppSettingMinAggregateOutputType = {
    key: string | null
    updatedAt: Date | null
  }

  export type AppSettingMaxAggregateOutputType = {
    key: string | null
    updatedAt: Date | null
  }

  export type AppSettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type AppSettingMinAggregateInputType = {
    key?: true
    updatedAt?: true
  }

  export type AppSettingMaxAggregateInputType = {
    key?: true
    updatedAt?: true
  }

  export type AppSettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSetting to aggregate.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSettings
    **/
    _count?: true | AppSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSettingMaxAggregateInputType
  }

  export type GetAppSettingAggregateType<T extends AppSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSetting[P]>
      : GetScalarType<T[P], AggregateAppSetting[P]>
  }




  export type AppSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSettingWhereInput
    orderBy?: AppSettingOrderByWithAggregationInput | AppSettingOrderByWithAggregationInput[]
    by: AppSettingScalarFieldEnum[] | AppSettingScalarFieldEnum
    having?: AppSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSettingCountAggregateInputType | true
    _min?: AppSettingMinAggregateInputType
    _max?: AppSettingMaxAggregateInputType
  }

  export type AppSettingGroupByOutputType = {
    key: string
    value: JsonValue
    updatedAt: Date
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  type GetAppSettingGroupByPayload<T extends AppSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
        }
      >
    >


  export type AppSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }


  export type $AppSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["appSetting"]>
    composites: {}
  }

  type AppSettingGetPayload<S extends boolean | null | undefined | AppSettingDefaultArgs> = $Result.GetResult<Prisma.$AppSettingPayload, S>

  type AppSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppSettingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppSettingCountAggregateInputType | true
    }

  export interface AppSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSetting'], meta: { name: 'AppSetting' } }
    /**
     * Find zero or one AppSetting that matches the filter.
     * @param {AppSettingFindUniqueArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSettingFindUniqueArgs>(args: SelectSubset<T, AppSettingFindUniqueArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AppSetting that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppSettingFindUniqueOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AppSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSettingFindFirstArgs>(args?: SelectSubset<T, AppSettingFindFirstArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AppSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSettings
     * const appSettings = await prisma.appSetting.findMany()
     * 
     * // Get first 10 AppSettings
     * const appSettings = await prisma.appSetting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const appSettingWithKeyOnly = await prisma.appSetting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends AppSettingFindManyArgs>(args?: SelectSubset<T, AppSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AppSetting.
     * @param {AppSettingCreateArgs} args - Arguments to create a AppSetting.
     * @example
     * // Create one AppSetting
     * const AppSetting = await prisma.appSetting.create({
     *   data: {
     *     // ... data to create a AppSetting
     *   }
     * })
     * 
     */
    create<T extends AppSettingCreateArgs>(args: SelectSubset<T, AppSettingCreateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AppSettings.
     * @param {AppSettingCreateManyArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSettingCreateManyArgs>(args?: SelectSubset<T, AppSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSettings and returns the data saved in the database.
     * @param {AppSettingCreateManyAndReturnArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSettings and only return the `key`
     * const appSettingWithKeyOnly = await prisma.appSetting.createManyAndReturn({ 
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AppSetting.
     * @param {AppSettingDeleteArgs} args - Arguments to delete one AppSetting.
     * @example
     * // Delete one AppSetting
     * const AppSetting = await prisma.appSetting.delete({
     *   where: {
     *     // ... filter to delete one AppSetting
     *   }
     * })
     * 
     */
    delete<T extends AppSettingDeleteArgs>(args: SelectSubset<T, AppSettingDeleteArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AppSetting.
     * @param {AppSettingUpdateArgs} args - Arguments to update one AppSetting.
     * @example
     * // Update one AppSetting
     * const appSetting = await prisma.appSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSettingUpdateArgs>(args: SelectSubset<T, AppSettingUpdateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AppSettings.
     * @param {AppSettingDeleteManyArgs} args - Arguments to filter AppSettings to delete.
     * @example
     * // Delete a few AppSettings
     * const { count } = await prisma.appSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSettingDeleteManyArgs>(args?: SelectSubset<T, AppSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSettingUpdateManyArgs>(args: SelectSubset<T, AppSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppSetting.
     * @param {AppSettingUpsertArgs} args - Arguments to update or create a AppSetting.
     * @example
     * // Update or create a AppSetting
     * const appSetting = await prisma.appSetting.upsert({
     *   create: {
     *     // ... data to create a AppSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSetting we want to update
     *   }
     * })
     */
    upsert<T extends AppSettingUpsertArgs>(args: SelectSubset<T, AppSettingUpsertArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingCountArgs} args - Arguments to filter AppSettings to count.
     * @example
     * // Count the number of AppSettings
     * const count = await prisma.appSetting.count({
     *   where: {
     *     // ... the filter for the AppSettings we want to count
     *   }
     * })
    **/
    count<T extends AppSettingCountArgs>(
      args?: Subset<T, AppSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppSettingAggregateArgs>(args: Subset<T, AppSettingAggregateArgs>): Prisma.PrismaPromise<GetAppSettingAggregateType<T>>

    /**
     * Group by AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingGroupByArgs} args - Group by arguments.
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
      T extends AppSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSettingGroupByArgs['orderBy'] }
        : { orderBy?: AppSettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSetting model
   */
  readonly fields: AppSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AppSetting model
   */ 
  interface AppSettingFieldRefs {
    readonly key: FieldRef<"AppSetting", 'String'>
    readonly value: FieldRef<"AppSetting", 'Json'>
    readonly updatedAt: FieldRef<"AppSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSetting findUnique
   */
  export type AppSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findUniqueOrThrow
   */
  export type AppSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findFirst
   */
  export type AppSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findFirstOrThrow
   */
  export type AppSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findMany
   */
  export type AppSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting create
   */
  export type AppSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * The data needed to create a AppSetting.
     */
    data: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
  }

  /**
   * AppSetting createMany
   */
  export type AppSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting createManyAndReturn
   */
  export type AppSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppSetting update
   */
  export type AppSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * The data needed to update a AppSetting.
     */
    data: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
    /**
     * Choose, which AppSetting to update.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting updateMany
   */
  export type AppSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
  }

  /**
   * AppSetting upsert
   */
  export type AppSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * The filter to search for the AppSetting to update in case it exists.
     */
    where: AppSettingWhereUniqueInput
    /**
     * In case the AppSetting found by the `where` argument doesn't exist, create a new AppSetting with this data.
     */
    create: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
    /**
     * In case the AppSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
  }

  /**
   * AppSetting delete
   */
  export type AppSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Filter which AppSetting to delete.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting deleteMany
   */
  export type AppSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to delete
     */
    where?: AppSettingWhereInput
  }

  /**
   * AppSetting without action
   */
  export type AppSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
  }


  /**
   * Model CustomerFeedback
   */

  export type AggregateCustomerFeedback = {
    _count: CustomerFeedbackCountAggregateOutputType | null
    _avg: CustomerFeedbackAvgAggregateOutputType | null
    _sum: CustomerFeedbackSumAggregateOutputType | null
    _min: CustomerFeedbackMinAggregateOutputType | null
    _max: CustomerFeedbackMaxAggregateOutputType | null
  }

  export type CustomerFeedbackAvgAggregateOutputType = {
    rating: number | null
  }

  export type CustomerFeedbackSumAggregateOutputType = {
    rating: number | null
  }

  export type CustomerFeedbackMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    customerId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CustomerFeedbackMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    customerId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type CustomerFeedbackCountAggregateOutputType = {
    id: number
    orderId: number
    customerId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type CustomerFeedbackAvgAggregateInputType = {
    rating?: true
  }

  export type CustomerFeedbackSumAggregateInputType = {
    rating?: true
  }

  export type CustomerFeedbackMinAggregateInputType = {
    id?: true
    orderId?: true
    customerId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CustomerFeedbackMaxAggregateInputType = {
    id?: true
    orderId?: true
    customerId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type CustomerFeedbackCountAggregateInputType = {
    id?: true
    orderId?: true
    customerId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerFeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerFeedback to aggregate.
     */
    where?: CustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFeedbacks to fetch.
     */
    orderBy?: CustomerFeedbackOrderByWithRelationInput | CustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerFeedbacks
    **/
    _count?: true | CustomerFeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerFeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerFeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerFeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerFeedbackMaxAggregateInputType
  }

  export type GetCustomerFeedbackAggregateType<T extends CustomerFeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerFeedback[P]>
      : GetScalarType<T[P], AggregateCustomerFeedback[P]>
  }




  export type CustomerFeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerFeedbackWhereInput
    orderBy?: CustomerFeedbackOrderByWithAggregationInput | CustomerFeedbackOrderByWithAggregationInput[]
    by: CustomerFeedbackScalarFieldEnum[] | CustomerFeedbackScalarFieldEnum
    having?: CustomerFeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerFeedbackCountAggregateInputType | true
    _avg?: CustomerFeedbackAvgAggregateInputType
    _sum?: CustomerFeedbackSumAggregateInputType
    _min?: CustomerFeedbackMinAggregateInputType
    _max?: CustomerFeedbackMaxAggregateInputType
  }

  export type CustomerFeedbackGroupByOutputType = {
    id: string
    orderId: string
    customerId: string | null
    rating: number
    comment: string | null
    createdAt: Date
    _count: CustomerFeedbackCountAggregateOutputType | null
    _avg: CustomerFeedbackAvgAggregateOutputType | null
    _sum: CustomerFeedbackSumAggregateOutputType | null
    _min: CustomerFeedbackMinAggregateOutputType | null
    _max: CustomerFeedbackMaxAggregateOutputType | null
  }

  type GetCustomerFeedbackGroupByPayload<T extends CustomerFeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerFeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerFeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerFeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerFeedbackGroupByOutputType[P]>
        }
      >
    >


  export type CustomerFeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    customerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    customer?: boolean | CustomerFeedback$customerArgs<ExtArgs>
  }, ExtArgs["result"]["customerFeedback"]>

  export type CustomerFeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    customerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    customer?: boolean | CustomerFeedback$customerArgs<ExtArgs>
  }, ExtArgs["result"]["customerFeedback"]>

  export type CustomerFeedbackSelectScalar = {
    id?: boolean
    orderId?: boolean
    customerId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type CustomerFeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    customer?: boolean | CustomerFeedback$customerArgs<ExtArgs>
  }
  export type CustomerFeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    customer?: boolean | CustomerFeedback$customerArgs<ExtArgs>
  }

  export type $CustomerFeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerFeedback"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      customerId: string | null
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["customerFeedback"]>
    composites: {}
  }

  type CustomerFeedbackGetPayload<S extends boolean | null | undefined | CustomerFeedbackDefaultArgs> = $Result.GetResult<Prisma.$CustomerFeedbackPayload, S>

  type CustomerFeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFeedbackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerFeedbackCountAggregateInputType | true
    }

  export interface CustomerFeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerFeedback'], meta: { name: 'CustomerFeedback' } }
    /**
     * Find zero or one CustomerFeedback that matches the filter.
     * @param {CustomerFeedbackFindUniqueArgs} args - Arguments to find a CustomerFeedback
     * @example
     * // Get one CustomerFeedback
     * const customerFeedback = await prisma.customerFeedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFeedbackFindUniqueArgs>(args: SelectSubset<T, CustomerFeedbackFindUniqueArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CustomerFeedback that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFeedbackFindUniqueOrThrowArgs} args - Arguments to find a CustomerFeedback
     * @example
     * // Get one CustomerFeedback
     * const customerFeedback = await prisma.customerFeedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CustomerFeedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFeedbackFindFirstArgs} args - Arguments to find a CustomerFeedback
     * @example
     * // Get one CustomerFeedback
     * const customerFeedback = await prisma.customerFeedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFeedbackFindFirstArgs>(args?: SelectSubset<T, CustomerFeedbackFindFirstArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CustomerFeedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFeedbackFindFirstOrThrowArgs} args - Arguments to find a CustomerFeedback
     * @example
     * // Get one CustomerFeedback
     * const customerFeedback = await prisma.customerFeedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CustomerFeedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerFeedbacks
     * const customerFeedbacks = await prisma.customerFeedback.findMany()
     * 
     * // Get first 10 CustomerFeedbacks
     * const customerFeedbacks = await prisma.customerFeedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerFeedbackWithIdOnly = await prisma.customerFeedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFeedbackFindManyArgs>(args?: SelectSubset<T, CustomerFeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CustomerFeedback.
     * @param {CustomerFeedbackCreateArgs} args - Arguments to create a CustomerFeedback.
     * @example
     * // Create one CustomerFeedback
     * const CustomerFeedback = await prisma.customerFeedback.create({
     *   data: {
     *     // ... data to create a CustomerFeedback
     *   }
     * })
     * 
     */
    create<T extends CustomerFeedbackCreateArgs>(args: SelectSubset<T, CustomerFeedbackCreateArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CustomerFeedbacks.
     * @param {CustomerFeedbackCreateManyArgs} args - Arguments to create many CustomerFeedbacks.
     * @example
     * // Create many CustomerFeedbacks
     * const customerFeedback = await prisma.customerFeedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerFeedbackCreateManyArgs>(args?: SelectSubset<T, CustomerFeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerFeedbacks and returns the data saved in the database.
     * @param {CustomerFeedbackCreateManyAndReturnArgs} args - Arguments to create many CustomerFeedbacks.
     * @example
     * // Create many CustomerFeedbacks
     * const customerFeedback = await prisma.customerFeedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerFeedbacks and only return the `id`
     * const customerFeedbackWithIdOnly = await prisma.customerFeedback.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerFeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerFeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CustomerFeedback.
     * @param {CustomerFeedbackDeleteArgs} args - Arguments to delete one CustomerFeedback.
     * @example
     * // Delete one CustomerFeedback
     * const CustomerFeedback = await prisma.customerFeedback.delete({
     *   where: {
     *     // ... filter to delete one CustomerFeedback
     *   }
     * })
     * 
     */
    delete<T extends CustomerFeedbackDeleteArgs>(args: SelectSubset<T, CustomerFeedbackDeleteArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CustomerFeedback.
     * @param {CustomerFeedbackUpdateArgs} args - Arguments to update one CustomerFeedback.
     * @example
     * // Update one CustomerFeedback
     * const customerFeedback = await prisma.customerFeedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerFeedbackUpdateArgs>(args: SelectSubset<T, CustomerFeedbackUpdateArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CustomerFeedbacks.
     * @param {CustomerFeedbackDeleteManyArgs} args - Arguments to filter CustomerFeedbacks to delete.
     * @example
     * // Delete a few CustomerFeedbacks
     * const { count } = await prisma.customerFeedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerFeedbackDeleteManyArgs>(args?: SelectSubset<T, CustomerFeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerFeedbacks
     * const customerFeedback = await prisma.customerFeedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerFeedbackUpdateManyArgs>(args: SelectSubset<T, CustomerFeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CustomerFeedback.
     * @param {CustomerFeedbackUpsertArgs} args - Arguments to update or create a CustomerFeedback.
     * @example
     * // Update or create a CustomerFeedback
     * const customerFeedback = await prisma.customerFeedback.upsert({
     *   create: {
     *     // ... data to create a CustomerFeedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerFeedback we want to update
     *   }
     * })
     */
    upsert<T extends CustomerFeedbackUpsertArgs>(args: SelectSubset<T, CustomerFeedbackUpsertArgs<ExtArgs>>): Prisma__CustomerFeedbackClient<$Result.GetResult<Prisma.$CustomerFeedbackPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CustomerFeedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFeedbackCountArgs} args - Arguments to filter CustomerFeedbacks to count.
     * @example
     * // Count the number of CustomerFeedbacks
     * const count = await prisma.customerFeedback.count({
     *   where: {
     *     // ... the filter for the CustomerFeedbacks we want to count
     *   }
     * })
    **/
    count<T extends CustomerFeedbackCountArgs>(
      args?: Subset<T, CustomerFeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerFeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerFeedbackAggregateArgs>(args: Subset<T, CustomerFeedbackAggregateArgs>): Prisma.PrismaPromise<GetCustomerFeedbackAggregateType<T>>

    /**
     * Group by CustomerFeedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFeedbackGroupByArgs} args - Group by arguments.
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
      T extends CustomerFeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerFeedbackGroupByArgs['orderBy'] }
        : { orderBy?: CustomerFeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerFeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerFeedback model
   */
  readonly fields: CustomerFeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerFeedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerFeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customer<T extends CustomerFeedback$customerArgs<ExtArgs> = {}>(args?: Subset<T, CustomerFeedback$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the CustomerFeedback model
   */ 
  interface CustomerFeedbackFieldRefs {
    readonly id: FieldRef<"CustomerFeedback", 'String'>
    readonly orderId: FieldRef<"CustomerFeedback", 'String'>
    readonly customerId: FieldRef<"CustomerFeedback", 'String'>
    readonly rating: FieldRef<"CustomerFeedback", 'Int'>
    readonly comment: FieldRef<"CustomerFeedback", 'String'>
    readonly createdAt: FieldRef<"CustomerFeedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerFeedback findUnique
   */
  export type CustomerFeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFeedback to fetch.
     */
    where: CustomerFeedbackWhereUniqueInput
  }

  /**
   * CustomerFeedback findUniqueOrThrow
   */
  export type CustomerFeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFeedback to fetch.
     */
    where: CustomerFeedbackWhereUniqueInput
  }

  /**
   * CustomerFeedback findFirst
   */
  export type CustomerFeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFeedback to fetch.
     */
    where?: CustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFeedbacks to fetch.
     */
    orderBy?: CustomerFeedbackOrderByWithRelationInput | CustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerFeedbacks.
     */
    cursor?: CustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerFeedbacks.
     */
    distinct?: CustomerFeedbackScalarFieldEnum | CustomerFeedbackScalarFieldEnum[]
  }

  /**
   * CustomerFeedback findFirstOrThrow
   */
  export type CustomerFeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFeedback to fetch.
     */
    where?: CustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFeedbacks to fetch.
     */
    orderBy?: CustomerFeedbackOrderByWithRelationInput | CustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerFeedbacks.
     */
    cursor?: CustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFeedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerFeedbacks.
     */
    distinct?: CustomerFeedbackScalarFieldEnum | CustomerFeedbackScalarFieldEnum[]
  }

  /**
   * CustomerFeedback findMany
   */
  export type CustomerFeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter, which CustomerFeedbacks to fetch.
     */
    where?: CustomerFeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerFeedbacks to fetch.
     */
    orderBy?: CustomerFeedbackOrderByWithRelationInput | CustomerFeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerFeedbacks.
     */
    cursor?: CustomerFeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerFeedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerFeedbacks.
     */
    skip?: number
    distinct?: CustomerFeedbackScalarFieldEnum | CustomerFeedbackScalarFieldEnum[]
  }

  /**
   * CustomerFeedback create
   */
  export type CustomerFeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerFeedback.
     */
    data: XOR<CustomerFeedbackCreateInput, CustomerFeedbackUncheckedCreateInput>
  }

  /**
   * CustomerFeedback createMany
   */
  export type CustomerFeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerFeedbacks.
     */
    data: CustomerFeedbackCreateManyInput | CustomerFeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerFeedback createManyAndReturn
   */
  export type CustomerFeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CustomerFeedbacks.
     */
    data: CustomerFeedbackCreateManyInput | CustomerFeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerFeedback update
   */
  export type CustomerFeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerFeedback.
     */
    data: XOR<CustomerFeedbackUpdateInput, CustomerFeedbackUncheckedUpdateInput>
    /**
     * Choose, which CustomerFeedback to update.
     */
    where: CustomerFeedbackWhereUniqueInput
  }

  /**
   * CustomerFeedback updateMany
   */
  export type CustomerFeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerFeedbacks.
     */
    data: XOR<CustomerFeedbackUpdateManyMutationInput, CustomerFeedbackUncheckedUpdateManyInput>
    /**
     * Filter which CustomerFeedbacks to update
     */
    where?: CustomerFeedbackWhereInput
  }

  /**
   * CustomerFeedback upsert
   */
  export type CustomerFeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerFeedback to update in case it exists.
     */
    where: CustomerFeedbackWhereUniqueInput
    /**
     * In case the CustomerFeedback found by the `where` argument doesn't exist, create a new CustomerFeedback with this data.
     */
    create: XOR<CustomerFeedbackCreateInput, CustomerFeedbackUncheckedCreateInput>
    /**
     * In case the CustomerFeedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerFeedbackUpdateInput, CustomerFeedbackUncheckedUpdateInput>
  }

  /**
   * CustomerFeedback delete
   */
  export type CustomerFeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
    /**
     * Filter which CustomerFeedback to delete.
     */
    where: CustomerFeedbackWhereUniqueInput
  }

  /**
   * CustomerFeedback deleteMany
   */
  export type CustomerFeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerFeedbacks to delete
     */
    where?: CustomerFeedbackWhereInput
  }

  /**
   * CustomerFeedback.customer
   */
  export type CustomerFeedback$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * CustomerFeedback without action
   */
  export type CustomerFeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerFeedback
     */
    select?: CustomerFeedbackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerFeedbackInclude<ExtArgs> | null
  }


  /**
   * Model InventoryTransaction
   */

  export type AggregateInventoryTransaction = {
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  export type InventoryTransactionAvgAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
  }

  export type InventoryTransactionSumAggregateOutputType = {
    quantity: number | null
    unitCost: number | null
  }

  export type InventoryTransactionMinAggregateOutputType = {
    id: string | null
    menuItemId: string | null
    type: string | null
    quantity: number | null
    note: string | null
    unitCost: number | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InventoryTransactionMaxAggregateOutputType = {
    id: string | null
    menuItemId: string | null
    type: string | null
    quantity: number | null
    note: string | null
    unitCost: number | null
    createdById: string | null
    createdAt: Date | null
  }

  export type InventoryTransactionCountAggregateOutputType = {
    id: number
    menuItemId: number
    type: number
    quantity: number
    note: number
    unitCost: number
    createdById: number
    createdAt: number
    _all: number
  }


  export type InventoryTransactionAvgAggregateInputType = {
    quantity?: true
    unitCost?: true
  }

  export type InventoryTransactionSumAggregateInputType = {
    quantity?: true
    unitCost?: true
  }

  export type InventoryTransactionMinAggregateInputType = {
    id?: true
    menuItemId?: true
    type?: true
    quantity?: true
    note?: true
    unitCost?: true
    createdById?: true
    createdAt?: true
  }

  export type InventoryTransactionMaxAggregateInputType = {
    id?: true
    menuItemId?: true
    type?: true
    quantity?: true
    note?: true
    unitCost?: true
    createdById?: true
    createdAt?: true
  }

  export type InventoryTransactionCountAggregateInputType = {
    id?: true
    menuItemId?: true
    type?: true
    quantity?: true
    note?: true
    unitCost?: true
    createdById?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransaction to aggregate.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryTransactions
    **/
    _count?: true | InventoryTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type GetInventoryTransactionAggregateType<T extends InventoryTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryTransaction[P]>
      : GetScalarType<T[P], AggregateInventoryTransaction[P]>
  }




  export type InventoryTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryTransactionWhereInput
    orderBy?: InventoryTransactionOrderByWithAggregationInput | InventoryTransactionOrderByWithAggregationInput[]
    by: InventoryTransactionScalarFieldEnum[] | InventoryTransactionScalarFieldEnum
    having?: InventoryTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryTransactionCountAggregateInputType | true
    _avg?: InventoryTransactionAvgAggregateInputType
    _sum?: InventoryTransactionSumAggregateInputType
    _min?: InventoryTransactionMinAggregateInputType
    _max?: InventoryTransactionMaxAggregateInputType
  }

  export type InventoryTransactionGroupByOutputType = {
    id: string
    menuItemId: string
    type: string
    quantity: number
    note: string | null
    unitCost: number | null
    createdById: string | null
    createdAt: Date
    _count: InventoryTransactionCountAggregateOutputType | null
    _avg: InventoryTransactionAvgAggregateOutputType | null
    _sum: InventoryTransactionSumAggregateOutputType | null
    _min: InventoryTransactionMinAggregateOutputType | null
    _max: InventoryTransactionMaxAggregateOutputType | null
  }

  type GetInventoryTransactionGroupByPayload<T extends InventoryTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryTransactionGroupByOutputType[P]>
        }
      >
    >


  export type InventoryTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuItemId?: boolean
    type?: boolean
    quantity?: boolean
    note?: boolean
    unitCost?: boolean
    createdById?: boolean
    createdAt?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    createdBy?: boolean | InventoryTransaction$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryTransaction"]>

  export type InventoryTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    menuItemId?: boolean
    type?: boolean
    quantity?: boolean
    note?: boolean
    unitCost?: boolean
    createdById?: boolean
    createdAt?: boolean
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    createdBy?: boolean | InventoryTransaction$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryTransaction"]>

  export type InventoryTransactionSelectScalar = {
    id?: boolean
    menuItemId?: boolean
    type?: boolean
    quantity?: boolean
    note?: boolean
    unitCost?: boolean
    createdById?: boolean
    createdAt?: boolean
  }

  export type InventoryTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    createdBy?: boolean | InventoryTransaction$createdByArgs<ExtArgs>
  }
  export type InventoryTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menuItem?: boolean | MenuItemDefaultArgs<ExtArgs>
    createdBy?: boolean | InventoryTransaction$createdByArgs<ExtArgs>
  }

  export type $InventoryTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryTransaction"
    objects: {
      menuItem: Prisma.$MenuItemPayload<ExtArgs>
      createdBy: Prisma.$AdminUserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      menuItemId: string
      type: string
      quantity: number
      note: string | null
      unitCost: number | null
      createdById: string | null
      createdAt: Date
    }, ExtArgs["result"]["inventoryTransaction"]>
    composites: {}
  }

  type InventoryTransactionGetPayload<S extends boolean | null | undefined | InventoryTransactionDefaultArgs> = $Result.GetResult<Prisma.$InventoryTransactionPayload, S>

  type InventoryTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryTransactionCountAggregateInputType | true
    }

  export interface InventoryTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryTransaction'], meta: { name: 'InventoryTransaction' } }
    /**
     * Find zero or one InventoryTransaction that matches the filter.
     * @param {InventoryTransactionFindUniqueArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryTransactionFindUniqueArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryTransactionFindUniqueOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryTransactionFindFirstArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindFirstOrThrowArgs} args - Arguments to find a InventoryTransaction
     * @example
     * // Get one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany()
     * 
     * // Get first 10 InventoryTransactions
     * const inventoryTransactions = await prisma.inventoryTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryTransactionWithIdOnly = await prisma.inventoryTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryTransactionFindManyArgs>(args?: SelectSubset<T, InventoryTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryTransaction.
     * @param {InventoryTransactionCreateArgs} args - Arguments to create a InventoryTransaction.
     * @example
     * // Create one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.create({
     *   data: {
     *     // ... data to create a InventoryTransaction
     *   }
     * })
     * 
     */
    create<T extends InventoryTransactionCreateArgs>(args: SelectSubset<T, InventoryTransactionCreateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryTransactions.
     * @param {InventoryTransactionCreateManyArgs} args - Arguments to create many InventoryTransactions.
     * @example
     * // Create many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryTransactionCreateManyArgs>(args?: SelectSubset<T, InventoryTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryTransactions and returns the data saved in the database.
     * @param {InventoryTransactionCreateManyAndReturnArgs} args - Arguments to create many InventoryTransactions.
     * @example
     * // Create many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryTransactions and only return the `id`
     * const inventoryTransactionWithIdOnly = await prisma.inventoryTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a InventoryTransaction.
     * @param {InventoryTransactionDeleteArgs} args - Arguments to delete one InventoryTransaction.
     * @example
     * // Delete one InventoryTransaction
     * const InventoryTransaction = await prisma.inventoryTransaction.delete({
     *   where: {
     *     // ... filter to delete one InventoryTransaction
     *   }
     * })
     * 
     */
    delete<T extends InventoryTransactionDeleteArgs>(args: SelectSubset<T, InventoryTransactionDeleteArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryTransaction.
     * @param {InventoryTransactionUpdateArgs} args - Arguments to update one InventoryTransaction.
     * @example
     * // Update one InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryTransactionUpdateArgs>(args: SelectSubset<T, InventoryTransactionUpdateArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryTransactions.
     * @param {InventoryTransactionDeleteManyArgs} args - Arguments to filter InventoryTransactions to delete.
     * @example
     * // Delete a few InventoryTransactions
     * const { count } = await prisma.inventoryTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryTransactionDeleteManyArgs>(args?: SelectSubset<T, InventoryTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryTransactions
     * const inventoryTransaction = await prisma.inventoryTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryTransactionUpdateManyArgs>(args: SelectSubset<T, InventoryTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryTransaction.
     * @param {InventoryTransactionUpsertArgs} args - Arguments to update or create a InventoryTransaction.
     * @example
     * // Update or create a InventoryTransaction
     * const inventoryTransaction = await prisma.inventoryTransaction.upsert({
     *   create: {
     *     // ... data to create a InventoryTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryTransaction we want to update
     *   }
     * })
     */
    upsert<T extends InventoryTransactionUpsertArgs>(args: SelectSubset<T, InventoryTransactionUpsertArgs<ExtArgs>>): Prisma__InventoryTransactionClient<$Result.GetResult<Prisma.$InventoryTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionCountArgs} args - Arguments to filter InventoryTransactions to count.
     * @example
     * // Count the number of InventoryTransactions
     * const count = await prisma.inventoryTransaction.count({
     *   where: {
     *     // ... the filter for the InventoryTransactions we want to count
     *   }
     * })
    **/
    count<T extends InventoryTransactionCountArgs>(
      args?: Subset<T, InventoryTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryTransactionAggregateArgs>(args: Subset<T, InventoryTransactionAggregateArgs>): Prisma.PrismaPromise<GetInventoryTransactionAggregateType<T>>

    /**
     * Group by InventoryTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryTransactionGroupByArgs} args - Group by arguments.
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
      T extends InventoryTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryTransactionGroupByArgs['orderBy'] }
        : { orderBy?: InventoryTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryTransaction model
   */
  readonly fields: InventoryTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menuItem<T extends MenuItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuItemDefaultArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    createdBy<T extends InventoryTransaction$createdByArgs<ExtArgs> = {}>(args?: Subset<T, InventoryTransaction$createdByArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the InventoryTransaction model
   */ 
  interface InventoryTransactionFieldRefs {
    readonly id: FieldRef<"InventoryTransaction", 'String'>
    readonly menuItemId: FieldRef<"InventoryTransaction", 'String'>
    readonly type: FieldRef<"InventoryTransaction", 'String'>
    readonly quantity: FieldRef<"InventoryTransaction", 'Int'>
    readonly note: FieldRef<"InventoryTransaction", 'String'>
    readonly unitCost: FieldRef<"InventoryTransaction", 'Float'>
    readonly createdById: FieldRef<"InventoryTransaction", 'String'>
    readonly createdAt: FieldRef<"InventoryTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryTransaction findUnique
   */
  export type InventoryTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findUniqueOrThrow
   */
  export type InventoryTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction findFirst
   */
  export type InventoryTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findFirstOrThrow
   */
  export type InventoryTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransaction to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryTransactions.
     */
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction findMany
   */
  export type InventoryTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter, which InventoryTransactions to fetch.
     */
    where?: InventoryTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryTransactions to fetch.
     */
    orderBy?: InventoryTransactionOrderByWithRelationInput | InventoryTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryTransactions.
     */
    cursor?: InventoryTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryTransactions.
     */
    skip?: number
    distinct?: InventoryTransactionScalarFieldEnum | InventoryTransactionScalarFieldEnum[]
  }

  /**
   * InventoryTransaction create
   */
  export type InventoryTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryTransaction.
     */
    data: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
  }

  /**
   * InventoryTransaction createMany
   */
  export type InventoryTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryTransactions.
     */
    data: InventoryTransactionCreateManyInput | InventoryTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryTransaction createManyAndReturn
   */
  export type InventoryTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many InventoryTransactions.
     */
    data: InventoryTransactionCreateManyInput | InventoryTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InventoryTransaction update
   */
  export type InventoryTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryTransaction.
     */
    data: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
    /**
     * Choose, which InventoryTransaction to update.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction updateMany
   */
  export type InventoryTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryTransactions.
     */
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyInput>
    /**
     * Filter which InventoryTransactions to update
     */
    where?: InventoryTransactionWhereInput
  }

  /**
   * InventoryTransaction upsert
   */
  export type InventoryTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryTransaction to update in case it exists.
     */
    where: InventoryTransactionWhereUniqueInput
    /**
     * In case the InventoryTransaction found by the `where` argument doesn't exist, create a new InventoryTransaction with this data.
     */
    create: XOR<InventoryTransactionCreateInput, InventoryTransactionUncheckedCreateInput>
    /**
     * In case the InventoryTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryTransactionUpdateInput, InventoryTransactionUncheckedUpdateInput>
  }

  /**
   * InventoryTransaction delete
   */
  export type InventoryTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
    /**
     * Filter which InventoryTransaction to delete.
     */
    where: InventoryTransactionWhereUniqueInput
  }

  /**
   * InventoryTransaction deleteMany
   */
  export type InventoryTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryTransactions to delete
     */
    where?: InventoryTransactionWhereInput
  }

  /**
   * InventoryTransaction.createdBy
   */
  export type InventoryTransaction$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminUserInclude<ExtArgs> | null
    where?: AdminUserWhereInput
  }

  /**
   * InventoryTransaction without action
   */
  export type InventoryTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryTransaction
     */
    select?: InventoryTransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryTransactionInclude<ExtArgs> | null
  }


  /**
   * Model StaffShift
   */

  export type AggregateStaffShift = {
    _count: StaffShiftCountAggregateOutputType | null
    _min: StaffShiftMinAggregateOutputType | null
    _max: StaffShiftMaxAggregateOutputType | null
  }

  export type StaffShiftMinAggregateOutputType = {
    id: string | null
    userId: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffShiftMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StaffShiftCountAggregateOutputType = {
    id: number
    userId: number
    checkInAt: number
    checkOutAt: number
    note: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StaffShiftMinAggregateInputType = {
    id?: true
    userId?: true
    checkInAt?: true
    checkOutAt?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffShiftMaxAggregateInputType = {
    id?: true
    userId?: true
    checkInAt?: true
    checkOutAt?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StaffShiftCountAggregateInputType = {
    id?: true
    userId?: true
    checkInAt?: true
    checkOutAt?: true
    note?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StaffShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffShift to aggregate.
     */
    where?: StaffShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffShifts to fetch.
     */
    orderBy?: StaffShiftOrderByWithRelationInput | StaffShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaffShifts
    **/
    _count?: true | StaffShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffShiftMaxAggregateInputType
  }

  export type GetStaffShiftAggregateType<T extends StaffShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffShift[P]>
      : GetScalarType<T[P], AggregateStaffShift[P]>
  }




  export type StaffShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffShiftWhereInput
    orderBy?: StaffShiftOrderByWithAggregationInput | StaffShiftOrderByWithAggregationInput[]
    by: StaffShiftScalarFieldEnum[] | StaffShiftScalarFieldEnum
    having?: StaffShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffShiftCountAggregateInputType | true
    _min?: StaffShiftMinAggregateInputType
    _max?: StaffShiftMaxAggregateInputType
  }

  export type StaffShiftGroupByOutputType = {
    id: string
    userId: string
    checkInAt: Date
    checkOutAt: Date | null
    note: string | null
    createdAt: Date
    updatedAt: Date
    _count: StaffShiftCountAggregateOutputType | null
    _min: StaffShiftMinAggregateOutputType | null
    _max: StaffShiftMaxAggregateOutputType | null
  }

  type GetStaffShiftGroupByPayload<T extends StaffShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffShiftGroupByOutputType[P]>
            : GetScalarType<T[P], StaffShiftGroupByOutputType[P]>
        }
      >
    >


  export type StaffShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffShift"]>

  export type StaffShiftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffShift"]>

  export type StaffShiftSelectScalar = {
    id?: boolean
    userId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    note?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StaffShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }
  export type StaffShiftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AdminUserDefaultArgs<ExtArgs>
  }

  export type $StaffShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaffShift"
    objects: {
      user: Prisma.$AdminUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      checkInAt: Date
      checkOutAt: Date | null
      note: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["staffShift"]>
    composites: {}
  }

  type StaffShiftGetPayload<S extends boolean | null | undefined | StaffShiftDefaultArgs> = $Result.GetResult<Prisma.$StaffShiftPayload, S>

  type StaffShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StaffShiftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StaffShiftCountAggregateInputType | true
    }

  export interface StaffShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaffShift'], meta: { name: 'StaffShift' } }
    /**
     * Find zero or one StaffShift that matches the filter.
     * @param {StaffShiftFindUniqueArgs} args - Arguments to find a StaffShift
     * @example
     * // Get one StaffShift
     * const staffShift = await prisma.staffShift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffShiftFindUniqueArgs>(args: SelectSubset<T, StaffShiftFindUniqueArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StaffShift that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StaffShiftFindUniqueOrThrowArgs} args - Arguments to find a StaffShift
     * @example
     * // Get one StaffShift
     * const staffShift = await prisma.staffShift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffShiftFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffShiftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StaffShift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffShiftFindFirstArgs} args - Arguments to find a StaffShift
     * @example
     * // Get one StaffShift
     * const staffShift = await prisma.staffShift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffShiftFindFirstArgs>(args?: SelectSubset<T, StaffShiftFindFirstArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StaffShift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffShiftFindFirstOrThrowArgs} args - Arguments to find a StaffShift
     * @example
     * // Get one StaffShift
     * const staffShift = await prisma.staffShift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffShiftFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffShiftFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StaffShifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffShiftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffShifts
     * const staffShifts = await prisma.staffShift.findMany()
     * 
     * // Get first 10 StaffShifts
     * const staffShifts = await prisma.staffShift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffShiftWithIdOnly = await prisma.staffShift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffShiftFindManyArgs>(args?: SelectSubset<T, StaffShiftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StaffShift.
     * @param {StaffShiftCreateArgs} args - Arguments to create a StaffShift.
     * @example
     * // Create one StaffShift
     * const StaffShift = await prisma.staffShift.create({
     *   data: {
     *     // ... data to create a StaffShift
     *   }
     * })
     * 
     */
    create<T extends StaffShiftCreateArgs>(args: SelectSubset<T, StaffShiftCreateArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StaffShifts.
     * @param {StaffShiftCreateManyArgs} args - Arguments to create many StaffShifts.
     * @example
     * // Create many StaffShifts
     * const staffShift = await prisma.staffShift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffShiftCreateManyArgs>(args?: SelectSubset<T, StaffShiftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffShifts and returns the data saved in the database.
     * @param {StaffShiftCreateManyAndReturnArgs} args - Arguments to create many StaffShifts.
     * @example
     * // Create many StaffShifts
     * const staffShift = await prisma.staffShift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffShifts and only return the `id`
     * const staffShiftWithIdOnly = await prisma.staffShift.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffShiftCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffShiftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StaffShift.
     * @param {StaffShiftDeleteArgs} args - Arguments to delete one StaffShift.
     * @example
     * // Delete one StaffShift
     * const StaffShift = await prisma.staffShift.delete({
     *   where: {
     *     // ... filter to delete one StaffShift
     *   }
     * })
     * 
     */
    delete<T extends StaffShiftDeleteArgs>(args: SelectSubset<T, StaffShiftDeleteArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StaffShift.
     * @param {StaffShiftUpdateArgs} args - Arguments to update one StaffShift.
     * @example
     * // Update one StaffShift
     * const staffShift = await prisma.staffShift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffShiftUpdateArgs>(args: SelectSubset<T, StaffShiftUpdateArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StaffShifts.
     * @param {StaffShiftDeleteManyArgs} args - Arguments to filter StaffShifts to delete.
     * @example
     * // Delete a few StaffShifts
     * const { count } = await prisma.staffShift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffShiftDeleteManyArgs>(args?: SelectSubset<T, StaffShiftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffShifts
     * const staffShift = await prisma.staffShift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffShiftUpdateManyArgs>(args: SelectSubset<T, StaffShiftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StaffShift.
     * @param {StaffShiftUpsertArgs} args - Arguments to update or create a StaffShift.
     * @example
     * // Update or create a StaffShift
     * const staffShift = await prisma.staffShift.upsert({
     *   create: {
     *     // ... data to create a StaffShift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffShift we want to update
     *   }
     * })
     */
    upsert<T extends StaffShiftUpsertArgs>(args: SelectSubset<T, StaffShiftUpsertArgs<ExtArgs>>): Prisma__StaffShiftClient<$Result.GetResult<Prisma.$StaffShiftPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StaffShifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffShiftCountArgs} args - Arguments to filter StaffShifts to count.
     * @example
     * // Count the number of StaffShifts
     * const count = await prisma.staffShift.count({
     *   where: {
     *     // ... the filter for the StaffShifts we want to count
     *   }
     * })
    **/
    count<T extends StaffShiftCountArgs>(
      args?: Subset<T, StaffShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffShiftAggregateArgs>(args: Subset<T, StaffShiftAggregateArgs>): Prisma.PrismaPromise<GetStaffShiftAggregateType<T>>

    /**
     * Group by StaffShift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffShiftGroupByArgs} args - Group by arguments.
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
      T extends StaffShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffShiftGroupByArgs['orderBy'] }
        : { orderBy?: StaffShiftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StaffShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaffShift model
   */
  readonly fields: StaffShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaffShift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AdminUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminUserDefaultArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StaffShift model
   */ 
  interface StaffShiftFieldRefs {
    readonly id: FieldRef<"StaffShift", 'String'>
    readonly userId: FieldRef<"StaffShift", 'String'>
    readonly checkInAt: FieldRef<"StaffShift", 'DateTime'>
    readonly checkOutAt: FieldRef<"StaffShift", 'DateTime'>
    readonly note: FieldRef<"StaffShift", 'String'>
    readonly createdAt: FieldRef<"StaffShift", 'DateTime'>
    readonly updatedAt: FieldRef<"StaffShift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StaffShift findUnique
   */
  export type StaffShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * Filter, which StaffShift to fetch.
     */
    where: StaffShiftWhereUniqueInput
  }

  /**
   * StaffShift findUniqueOrThrow
   */
  export type StaffShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * Filter, which StaffShift to fetch.
     */
    where: StaffShiftWhereUniqueInput
  }

  /**
   * StaffShift findFirst
   */
  export type StaffShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * Filter, which StaffShift to fetch.
     */
    where?: StaffShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffShifts to fetch.
     */
    orderBy?: StaffShiftOrderByWithRelationInput | StaffShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffShifts.
     */
    cursor?: StaffShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffShifts.
     */
    distinct?: StaffShiftScalarFieldEnum | StaffShiftScalarFieldEnum[]
  }

  /**
   * StaffShift findFirstOrThrow
   */
  export type StaffShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * Filter, which StaffShift to fetch.
     */
    where?: StaffShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffShifts to fetch.
     */
    orderBy?: StaffShiftOrderByWithRelationInput | StaffShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaffShifts.
     */
    cursor?: StaffShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffShifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaffShifts.
     */
    distinct?: StaffShiftScalarFieldEnum | StaffShiftScalarFieldEnum[]
  }

  /**
   * StaffShift findMany
   */
  export type StaffShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * Filter, which StaffShifts to fetch.
     */
    where?: StaffShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaffShifts to fetch.
     */
    orderBy?: StaffShiftOrderByWithRelationInput | StaffShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaffShifts.
     */
    cursor?: StaffShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaffShifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaffShifts.
     */
    skip?: number
    distinct?: StaffShiftScalarFieldEnum | StaffShiftScalarFieldEnum[]
  }

  /**
   * StaffShift create
   */
  export type StaffShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a StaffShift.
     */
    data: XOR<StaffShiftCreateInput, StaffShiftUncheckedCreateInput>
  }

  /**
   * StaffShift createMany
   */
  export type StaffShiftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaffShifts.
     */
    data: StaffShiftCreateManyInput | StaffShiftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaffShift createManyAndReturn
   */
  export type StaffShiftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StaffShifts.
     */
    data: StaffShiftCreateManyInput | StaffShiftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaffShift update
   */
  export type StaffShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a StaffShift.
     */
    data: XOR<StaffShiftUpdateInput, StaffShiftUncheckedUpdateInput>
    /**
     * Choose, which StaffShift to update.
     */
    where: StaffShiftWhereUniqueInput
  }

  /**
   * StaffShift updateMany
   */
  export type StaffShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaffShifts.
     */
    data: XOR<StaffShiftUpdateManyMutationInput, StaffShiftUncheckedUpdateManyInput>
    /**
     * Filter which StaffShifts to update
     */
    where?: StaffShiftWhereInput
  }

  /**
   * StaffShift upsert
   */
  export type StaffShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the StaffShift to update in case it exists.
     */
    where: StaffShiftWhereUniqueInput
    /**
     * In case the StaffShift found by the `where` argument doesn't exist, create a new StaffShift with this data.
     */
    create: XOR<StaffShiftCreateInput, StaffShiftUncheckedCreateInput>
    /**
     * In case the StaffShift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffShiftUpdateInput, StaffShiftUncheckedUpdateInput>
  }

  /**
   * StaffShift delete
   */
  export type StaffShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
    /**
     * Filter which StaffShift to delete.
     */
    where: StaffShiftWhereUniqueInput
  }

  /**
   * StaffShift deleteMany
   */
  export type StaffShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaffShifts to delete
     */
    where?: StaffShiftWhereInput
  }

  /**
   * StaffShift without action
   */
  export type StaffShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffShift
     */
    select?: StaffShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffShiftInclude<ExtArgs> | null
  }


  /**
   * Model Recommendation
   */

  export type AggregateRecommendation = {
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  export type RecommendationMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    menuItemId: string | null
    source: $Enums.RecommendationSource | null
    reason: string | null
    shownAt: Date | null
    acceptedAt: Date | null
  }

  export type RecommendationMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    menuItemId: string | null
    source: $Enums.RecommendationSource | null
    reason: string | null
    shownAt: Date | null
    acceptedAt: Date | null
  }

  export type RecommendationCountAggregateOutputType = {
    id: number
    customerId: number
    menuItemId: number
    source: number
    reason: number
    shownAt: number
    acceptedAt: number
    _all: number
  }


  export type RecommendationMinAggregateInputType = {
    id?: true
    customerId?: true
    menuItemId?: true
    source?: true
    reason?: true
    shownAt?: true
    acceptedAt?: true
  }

  export type RecommendationMaxAggregateInputType = {
    id?: true
    customerId?: true
    menuItemId?: true
    source?: true
    reason?: true
    shownAt?: true
    acceptedAt?: true
  }

  export type RecommendationCountAggregateInputType = {
    id?: true
    customerId?: true
    menuItemId?: true
    source?: true
    reason?: true
    shownAt?: true
    acceptedAt?: true
    _all?: true
  }

  export type RecommendationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendation to aggregate.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recommendations
    **/
    _count?: true | RecommendationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecommendationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecommendationMaxAggregateInputType
  }

  export type GetRecommendationAggregateType<T extends RecommendationAggregateArgs> = {
        [P in keyof T & keyof AggregateRecommendation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecommendation[P]>
      : GetScalarType<T[P], AggregateRecommendation[P]>
  }




  export type RecommendationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecommendationWhereInput
    orderBy?: RecommendationOrderByWithAggregationInput | RecommendationOrderByWithAggregationInput[]
    by: RecommendationScalarFieldEnum[] | RecommendationScalarFieldEnum
    having?: RecommendationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecommendationCountAggregateInputType | true
    _min?: RecommendationMinAggregateInputType
    _max?: RecommendationMaxAggregateInputType
  }

  export type RecommendationGroupByOutputType = {
    id: string
    customerId: string | null
    menuItemId: string | null
    source: $Enums.RecommendationSource
    reason: string
    shownAt: Date
    acceptedAt: Date | null
    _count: RecommendationCountAggregateOutputType | null
    _min: RecommendationMinAggregateOutputType | null
    _max: RecommendationMaxAggregateOutputType | null
  }

  type GetRecommendationGroupByPayload<T extends RecommendationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecommendationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecommendationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
            : GetScalarType<T[P], RecommendationGroupByOutputType[P]>
        }
      >
    >


  export type RecommendationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    menuItemId?: boolean
    source?: boolean
    reason?: boolean
    shownAt?: boolean
    acceptedAt?: boolean
    customer?: boolean | Recommendation$customerArgs<ExtArgs>
    menuItem?: boolean | Recommendation$menuItemArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    menuItemId?: boolean
    source?: boolean
    reason?: boolean
    shownAt?: boolean
    acceptedAt?: boolean
    customer?: boolean | Recommendation$customerArgs<ExtArgs>
    menuItem?: boolean | Recommendation$menuItemArgs<ExtArgs>
  }, ExtArgs["result"]["recommendation"]>

  export type RecommendationSelectScalar = {
    id?: boolean
    customerId?: boolean
    menuItemId?: boolean
    source?: boolean
    reason?: boolean
    shownAt?: boolean
    acceptedAt?: boolean
  }

  export type RecommendationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Recommendation$customerArgs<ExtArgs>
    menuItem?: boolean | Recommendation$menuItemArgs<ExtArgs>
  }
  export type RecommendationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Recommendation$customerArgs<ExtArgs>
    menuItem?: boolean | Recommendation$menuItemArgs<ExtArgs>
  }

  export type $RecommendationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recommendation"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      menuItem: Prisma.$MenuItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string | null
      menuItemId: string | null
      source: $Enums.RecommendationSource
      reason: string
      shownAt: Date
      acceptedAt: Date | null
    }, ExtArgs["result"]["recommendation"]>
    composites: {}
  }

  type RecommendationGetPayload<S extends boolean | null | undefined | RecommendationDefaultArgs> = $Result.GetResult<Prisma.$RecommendationPayload, S>

  type RecommendationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecommendationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecommendationCountAggregateInputType | true
    }

  export interface RecommendationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recommendation'], meta: { name: 'Recommendation' } }
    /**
     * Find zero or one Recommendation that matches the filter.
     * @param {RecommendationFindUniqueArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecommendationFindUniqueArgs>(args: SelectSubset<T, RecommendationFindUniqueArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recommendation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecommendationFindUniqueOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecommendationFindUniqueOrThrowArgs>(args: SelectSubset<T, RecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecommendationFindFirstArgs>(args?: SelectSubset<T, RecommendationFindFirstArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recommendation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindFirstOrThrowArgs} args - Arguments to find a Recommendation
     * @example
     * // Get one Recommendation
     * const recommendation = await prisma.recommendation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecommendationFindFirstOrThrowArgs>(args?: SelectSubset<T, RecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recommendations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recommendations
     * const recommendations = await prisma.recommendation.findMany()
     * 
     * // Get first 10 Recommendations
     * const recommendations = await prisma.recommendation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecommendationFindManyArgs>(args?: SelectSubset<T, RecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recommendation.
     * @param {RecommendationCreateArgs} args - Arguments to create a Recommendation.
     * @example
     * // Create one Recommendation
     * const Recommendation = await prisma.recommendation.create({
     *   data: {
     *     // ... data to create a Recommendation
     *   }
     * })
     * 
     */
    create<T extends RecommendationCreateArgs>(args: SelectSubset<T, RecommendationCreateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recommendations.
     * @param {RecommendationCreateManyArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecommendationCreateManyArgs>(args?: SelectSubset<T, RecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recommendations and returns the data saved in the database.
     * @param {RecommendationCreateManyAndReturnArgs} args - Arguments to create many Recommendations.
     * @example
     * // Create many Recommendations
     * const recommendation = await prisma.recommendation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recommendations and only return the `id`
     * const recommendationWithIdOnly = await prisma.recommendation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecommendationCreateManyAndReturnArgs>(args?: SelectSubset<T, RecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recommendation.
     * @param {RecommendationDeleteArgs} args - Arguments to delete one Recommendation.
     * @example
     * // Delete one Recommendation
     * const Recommendation = await prisma.recommendation.delete({
     *   where: {
     *     // ... filter to delete one Recommendation
     *   }
     * })
     * 
     */
    delete<T extends RecommendationDeleteArgs>(args: SelectSubset<T, RecommendationDeleteArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recommendation.
     * @param {RecommendationUpdateArgs} args - Arguments to update one Recommendation.
     * @example
     * // Update one Recommendation
     * const recommendation = await prisma.recommendation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecommendationUpdateArgs>(args: SelectSubset<T, RecommendationUpdateArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recommendations.
     * @param {RecommendationDeleteManyArgs} args - Arguments to filter Recommendations to delete.
     * @example
     * // Delete a few Recommendations
     * const { count } = await prisma.recommendation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecommendationDeleteManyArgs>(args?: SelectSubset<T, RecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recommendations
     * const recommendation = await prisma.recommendation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecommendationUpdateManyArgs>(args: SelectSubset<T, RecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recommendation.
     * @param {RecommendationUpsertArgs} args - Arguments to update or create a Recommendation.
     * @example
     * // Update or create a Recommendation
     * const recommendation = await prisma.recommendation.upsert({
     *   create: {
     *     // ... data to create a Recommendation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recommendation we want to update
     *   }
     * })
     */
    upsert<T extends RecommendationUpsertArgs>(args: SelectSubset<T, RecommendationUpsertArgs<ExtArgs>>): Prisma__RecommendationClient<$Result.GetResult<Prisma.$RecommendationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recommendations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationCountArgs} args - Arguments to filter Recommendations to count.
     * @example
     * // Count the number of Recommendations
     * const count = await prisma.recommendation.count({
     *   where: {
     *     // ... the filter for the Recommendations we want to count
     *   }
     * })
    **/
    count<T extends RecommendationCountArgs>(
      args?: Subset<T, RecommendationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecommendationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecommendationAggregateArgs>(args: Subset<T, RecommendationAggregateArgs>): Prisma.PrismaPromise<GetRecommendationAggregateType<T>>

    /**
     * Group by Recommendation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecommendationGroupByArgs} args - Group by arguments.
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
      T extends RecommendationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecommendationGroupByArgs['orderBy'] }
        : { orderBy?: RecommendationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recommendation model
   */
  readonly fields: RecommendationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recommendation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecommendationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Recommendation$customerArgs<ExtArgs> = {}>(args?: Subset<T, Recommendation$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    menuItem<T extends Recommendation$menuItemArgs<ExtArgs> = {}>(args?: Subset<T, Recommendation$menuItemArgs<ExtArgs>>): Prisma__MenuItemClient<$Result.GetResult<Prisma.$MenuItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Recommendation model
   */ 
  interface RecommendationFieldRefs {
    readonly id: FieldRef<"Recommendation", 'String'>
    readonly customerId: FieldRef<"Recommendation", 'String'>
    readonly menuItemId: FieldRef<"Recommendation", 'String'>
    readonly source: FieldRef<"Recommendation", 'RecommendationSource'>
    readonly reason: FieldRef<"Recommendation", 'String'>
    readonly shownAt: FieldRef<"Recommendation", 'DateTime'>
    readonly acceptedAt: FieldRef<"Recommendation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recommendation findUnique
   */
  export type RecommendationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findUniqueOrThrow
   */
  export type RecommendationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation findFirst
   */
  export type RecommendationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findFirstOrThrow
   */
  export type RecommendationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendation to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recommendations.
     */
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation findMany
   */
  export type RecommendationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter, which Recommendations to fetch.
     */
    where?: RecommendationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recommendations to fetch.
     */
    orderBy?: RecommendationOrderByWithRelationInput | RecommendationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recommendations.
     */
    cursor?: RecommendationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recommendations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recommendations.
     */
    skip?: number
    distinct?: RecommendationScalarFieldEnum | RecommendationScalarFieldEnum[]
  }

  /**
   * Recommendation create
   */
  export type RecommendationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to create a Recommendation.
     */
    data: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
  }

  /**
   * Recommendation createMany
   */
  export type RecommendationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recommendation createManyAndReturn
   */
  export type RecommendationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recommendations.
     */
    data: RecommendationCreateManyInput | RecommendationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Recommendation update
   */
  export type RecommendationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The data needed to update a Recommendation.
     */
    data: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
    /**
     * Choose, which Recommendation to update.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation updateMany
   */
  export type RecommendationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recommendations.
     */
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyInput>
    /**
     * Filter which Recommendations to update
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation upsert
   */
  export type RecommendationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * The filter to search for the Recommendation to update in case it exists.
     */
    where: RecommendationWhereUniqueInput
    /**
     * In case the Recommendation found by the `where` argument doesn't exist, create a new Recommendation with this data.
     */
    create: XOR<RecommendationCreateInput, RecommendationUncheckedCreateInput>
    /**
     * In case the Recommendation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecommendationUpdateInput, RecommendationUncheckedUpdateInput>
  }

  /**
   * Recommendation delete
   */
  export type RecommendationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
    /**
     * Filter which Recommendation to delete.
     */
    where: RecommendationWhereUniqueInput
  }

  /**
   * Recommendation deleteMany
   */
  export type RecommendationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recommendations to delete
     */
    where?: RecommendationWhereInput
  }

  /**
   * Recommendation.customer
   */
  export type Recommendation$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Recommendation.menuItem
   */
  export type Recommendation$menuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuItem
     */
    select?: MenuItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuItemInclude<ExtArgs> | null
    where?: MenuItemWhereInput
  }

  /**
   * Recommendation without action
   */
  export type RecommendationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recommendation
     */
    select?: RecommendationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecommendationInclude<ExtArgs> | null
  }


  /**
   * Model KitchenQueue
   */

  export type AggregateKitchenQueue = {
    _count: KitchenQueueCountAggregateOutputType | null
    _avg: KitchenQueueAvgAggregateOutputType | null
    _sum: KitchenQueueSumAggregateOutputType | null
    _min: KitchenQueueMinAggregateOutputType | null
    _max: KitchenQueueMaxAggregateOutputType | null
  }

  export type KitchenQueueAvgAggregateOutputType = {
    priority: number | null
  }

  export type KitchenQueueSumAggregateOutputType = {
    priority: number | null
  }

  export type KitchenQueueMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KitchenQueueMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KitchenQueueCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type KitchenQueueAvgAggregateInputType = {
    priority?: true
  }

  export type KitchenQueueSumAggregateInputType = {
    priority?: true
  }

  export type KitchenQueueMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KitchenQueueMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KitchenQueueCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type KitchenQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KitchenQueue to aggregate.
     */
    where?: KitchenQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KitchenQueues to fetch.
     */
    orderBy?: KitchenQueueOrderByWithRelationInput | KitchenQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KitchenQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KitchenQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KitchenQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KitchenQueues
    **/
    _count?: true | KitchenQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KitchenQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KitchenQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KitchenQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KitchenQueueMaxAggregateInputType
  }

  export type GetKitchenQueueAggregateType<T extends KitchenQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateKitchenQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKitchenQueue[P]>
      : GetScalarType<T[P], AggregateKitchenQueue[P]>
  }




  export type KitchenQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KitchenQueueWhereInput
    orderBy?: KitchenQueueOrderByWithAggregationInput | KitchenQueueOrderByWithAggregationInput[]
    by: KitchenQueueScalarFieldEnum[] | KitchenQueueScalarFieldEnum
    having?: KitchenQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KitchenQueueCountAggregateInputType | true
    _avg?: KitchenQueueAvgAggregateInputType
    _sum?: KitchenQueueSumAggregateInputType
    _min?: KitchenQueueMinAggregateInputType
    _max?: KitchenQueueMaxAggregateInputType
  }

  export type KitchenQueueGroupByOutputType = {
    id: string
    orderId: string
    status: $Enums.OrderStatus
    priority: number
    createdAt: Date
    updatedAt: Date
    _count: KitchenQueueCountAggregateOutputType | null
    _avg: KitchenQueueAvgAggregateOutputType | null
    _sum: KitchenQueueSumAggregateOutputType | null
    _min: KitchenQueueMinAggregateOutputType | null
    _max: KitchenQueueMaxAggregateOutputType | null
  }

  type GetKitchenQueueGroupByPayload<T extends KitchenQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KitchenQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KitchenQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KitchenQueueGroupByOutputType[P]>
            : GetScalarType<T[P], KitchenQueueGroupByOutputType[P]>
        }
      >
    >


  export type KitchenQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kitchenQueue"]>

  export type KitchenQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kitchenQueue"]>

  export type KitchenQueueSelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KitchenQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type KitchenQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $KitchenQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KitchenQueue"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      status: $Enums.OrderStatus
      priority: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["kitchenQueue"]>
    composites: {}
  }

  type KitchenQueueGetPayload<S extends boolean | null | undefined | KitchenQueueDefaultArgs> = $Result.GetResult<Prisma.$KitchenQueuePayload, S>

  type KitchenQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KitchenQueueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KitchenQueueCountAggregateInputType | true
    }

  export interface KitchenQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KitchenQueue'], meta: { name: 'KitchenQueue' } }
    /**
     * Find zero or one KitchenQueue that matches the filter.
     * @param {KitchenQueueFindUniqueArgs} args - Arguments to find a KitchenQueue
     * @example
     * // Get one KitchenQueue
     * const kitchenQueue = await prisma.kitchenQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KitchenQueueFindUniqueArgs>(args: SelectSubset<T, KitchenQueueFindUniqueArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one KitchenQueue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {KitchenQueueFindUniqueOrThrowArgs} args - Arguments to find a KitchenQueue
     * @example
     * // Get one KitchenQueue
     * const kitchenQueue = await prisma.kitchenQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KitchenQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, KitchenQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first KitchenQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenQueueFindFirstArgs} args - Arguments to find a KitchenQueue
     * @example
     * // Get one KitchenQueue
     * const kitchenQueue = await prisma.kitchenQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KitchenQueueFindFirstArgs>(args?: SelectSubset<T, KitchenQueueFindFirstArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first KitchenQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenQueueFindFirstOrThrowArgs} args - Arguments to find a KitchenQueue
     * @example
     * // Get one KitchenQueue
     * const kitchenQueue = await prisma.kitchenQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KitchenQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, KitchenQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more KitchenQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KitchenQueues
     * const kitchenQueues = await prisma.kitchenQueue.findMany()
     * 
     * // Get first 10 KitchenQueues
     * const kitchenQueues = await prisma.kitchenQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kitchenQueueWithIdOnly = await prisma.kitchenQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KitchenQueueFindManyArgs>(args?: SelectSubset<T, KitchenQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a KitchenQueue.
     * @param {KitchenQueueCreateArgs} args - Arguments to create a KitchenQueue.
     * @example
     * // Create one KitchenQueue
     * const KitchenQueue = await prisma.kitchenQueue.create({
     *   data: {
     *     // ... data to create a KitchenQueue
     *   }
     * })
     * 
     */
    create<T extends KitchenQueueCreateArgs>(args: SelectSubset<T, KitchenQueueCreateArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many KitchenQueues.
     * @param {KitchenQueueCreateManyArgs} args - Arguments to create many KitchenQueues.
     * @example
     * // Create many KitchenQueues
     * const kitchenQueue = await prisma.kitchenQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KitchenQueueCreateManyArgs>(args?: SelectSubset<T, KitchenQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KitchenQueues and returns the data saved in the database.
     * @param {KitchenQueueCreateManyAndReturnArgs} args - Arguments to create many KitchenQueues.
     * @example
     * // Create many KitchenQueues
     * const kitchenQueue = await prisma.kitchenQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KitchenQueues and only return the `id`
     * const kitchenQueueWithIdOnly = await prisma.kitchenQueue.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KitchenQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, KitchenQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a KitchenQueue.
     * @param {KitchenQueueDeleteArgs} args - Arguments to delete one KitchenQueue.
     * @example
     * // Delete one KitchenQueue
     * const KitchenQueue = await prisma.kitchenQueue.delete({
     *   where: {
     *     // ... filter to delete one KitchenQueue
     *   }
     * })
     * 
     */
    delete<T extends KitchenQueueDeleteArgs>(args: SelectSubset<T, KitchenQueueDeleteArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one KitchenQueue.
     * @param {KitchenQueueUpdateArgs} args - Arguments to update one KitchenQueue.
     * @example
     * // Update one KitchenQueue
     * const kitchenQueue = await prisma.kitchenQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KitchenQueueUpdateArgs>(args: SelectSubset<T, KitchenQueueUpdateArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more KitchenQueues.
     * @param {KitchenQueueDeleteManyArgs} args - Arguments to filter KitchenQueues to delete.
     * @example
     * // Delete a few KitchenQueues
     * const { count } = await prisma.kitchenQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KitchenQueueDeleteManyArgs>(args?: SelectSubset<T, KitchenQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KitchenQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KitchenQueues
     * const kitchenQueue = await prisma.kitchenQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KitchenQueueUpdateManyArgs>(args: SelectSubset<T, KitchenQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KitchenQueue.
     * @param {KitchenQueueUpsertArgs} args - Arguments to update or create a KitchenQueue.
     * @example
     * // Update or create a KitchenQueue
     * const kitchenQueue = await prisma.kitchenQueue.upsert({
     *   create: {
     *     // ... data to create a KitchenQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KitchenQueue we want to update
     *   }
     * })
     */
    upsert<T extends KitchenQueueUpsertArgs>(args: SelectSubset<T, KitchenQueueUpsertArgs<ExtArgs>>): Prisma__KitchenQueueClient<$Result.GetResult<Prisma.$KitchenQueuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of KitchenQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenQueueCountArgs} args - Arguments to filter KitchenQueues to count.
     * @example
     * // Count the number of KitchenQueues
     * const count = await prisma.kitchenQueue.count({
     *   where: {
     *     // ... the filter for the KitchenQueues we want to count
     *   }
     * })
    **/
    count<T extends KitchenQueueCountArgs>(
      args?: Subset<T, KitchenQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KitchenQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KitchenQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KitchenQueueAggregateArgs>(args: Subset<T, KitchenQueueAggregateArgs>): Prisma.PrismaPromise<GetKitchenQueueAggregateType<T>>

    /**
     * Group by KitchenQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KitchenQueueGroupByArgs} args - Group by arguments.
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
      T extends KitchenQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KitchenQueueGroupByArgs['orderBy'] }
        : { orderBy?: KitchenQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KitchenQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKitchenQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KitchenQueue model
   */
  readonly fields: KitchenQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KitchenQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KitchenQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the KitchenQueue model
   */ 
  interface KitchenQueueFieldRefs {
    readonly id: FieldRef<"KitchenQueue", 'String'>
    readonly orderId: FieldRef<"KitchenQueue", 'String'>
    readonly status: FieldRef<"KitchenQueue", 'OrderStatus'>
    readonly priority: FieldRef<"KitchenQueue", 'Int'>
    readonly createdAt: FieldRef<"KitchenQueue", 'DateTime'>
    readonly updatedAt: FieldRef<"KitchenQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KitchenQueue findUnique
   */
  export type KitchenQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * Filter, which KitchenQueue to fetch.
     */
    where: KitchenQueueWhereUniqueInput
  }

  /**
   * KitchenQueue findUniqueOrThrow
   */
  export type KitchenQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * Filter, which KitchenQueue to fetch.
     */
    where: KitchenQueueWhereUniqueInput
  }

  /**
   * KitchenQueue findFirst
   */
  export type KitchenQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * Filter, which KitchenQueue to fetch.
     */
    where?: KitchenQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KitchenQueues to fetch.
     */
    orderBy?: KitchenQueueOrderByWithRelationInput | KitchenQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KitchenQueues.
     */
    cursor?: KitchenQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KitchenQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KitchenQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KitchenQueues.
     */
    distinct?: KitchenQueueScalarFieldEnum | KitchenQueueScalarFieldEnum[]
  }

  /**
   * KitchenQueue findFirstOrThrow
   */
  export type KitchenQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * Filter, which KitchenQueue to fetch.
     */
    where?: KitchenQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KitchenQueues to fetch.
     */
    orderBy?: KitchenQueueOrderByWithRelationInput | KitchenQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KitchenQueues.
     */
    cursor?: KitchenQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KitchenQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KitchenQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KitchenQueues.
     */
    distinct?: KitchenQueueScalarFieldEnum | KitchenQueueScalarFieldEnum[]
  }

  /**
   * KitchenQueue findMany
   */
  export type KitchenQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * Filter, which KitchenQueues to fetch.
     */
    where?: KitchenQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KitchenQueues to fetch.
     */
    orderBy?: KitchenQueueOrderByWithRelationInput | KitchenQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KitchenQueues.
     */
    cursor?: KitchenQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KitchenQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KitchenQueues.
     */
    skip?: number
    distinct?: KitchenQueueScalarFieldEnum | KitchenQueueScalarFieldEnum[]
  }

  /**
   * KitchenQueue create
   */
  export type KitchenQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a KitchenQueue.
     */
    data: XOR<KitchenQueueCreateInput, KitchenQueueUncheckedCreateInput>
  }

  /**
   * KitchenQueue createMany
   */
  export type KitchenQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KitchenQueues.
     */
    data: KitchenQueueCreateManyInput | KitchenQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KitchenQueue createManyAndReturn
   */
  export type KitchenQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many KitchenQueues.
     */
    data: KitchenQueueCreateManyInput | KitchenQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KitchenQueue update
   */
  export type KitchenQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a KitchenQueue.
     */
    data: XOR<KitchenQueueUpdateInput, KitchenQueueUncheckedUpdateInput>
    /**
     * Choose, which KitchenQueue to update.
     */
    where: KitchenQueueWhereUniqueInput
  }

  /**
   * KitchenQueue updateMany
   */
  export type KitchenQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KitchenQueues.
     */
    data: XOR<KitchenQueueUpdateManyMutationInput, KitchenQueueUncheckedUpdateManyInput>
    /**
     * Filter which KitchenQueues to update
     */
    where?: KitchenQueueWhereInput
  }

  /**
   * KitchenQueue upsert
   */
  export type KitchenQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the KitchenQueue to update in case it exists.
     */
    where: KitchenQueueWhereUniqueInput
    /**
     * In case the KitchenQueue found by the `where` argument doesn't exist, create a new KitchenQueue with this data.
     */
    create: XOR<KitchenQueueCreateInput, KitchenQueueUncheckedCreateInput>
    /**
     * In case the KitchenQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KitchenQueueUpdateInput, KitchenQueueUncheckedUpdateInput>
  }

  /**
   * KitchenQueue delete
   */
  export type KitchenQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
    /**
     * Filter which KitchenQueue to delete.
     */
    where: KitchenQueueWhereUniqueInput
  }

  /**
   * KitchenQueue deleteMany
   */
  export type KitchenQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KitchenQueues to delete
     */
    where?: KitchenQueueWhereInput
  }

  /**
   * KitchenQueue without action
   */
  export type KitchenQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KitchenQueue
     */
    select?: KitchenQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KitchenQueueInclude<ExtArgs> | null
  }


  /**
   * Model BarQueue
   */

  export type AggregateBarQueue = {
    _count: BarQueueCountAggregateOutputType | null
    _avg: BarQueueAvgAggregateOutputType | null
    _sum: BarQueueSumAggregateOutputType | null
    _min: BarQueueMinAggregateOutputType | null
    _max: BarQueueMaxAggregateOutputType | null
  }

  export type BarQueueAvgAggregateOutputType = {
    priority: number | null
  }

  export type BarQueueSumAggregateOutputType = {
    priority: number | null
  }

  export type BarQueueMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarQueueMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    status: $Enums.OrderStatus | null
    priority: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarQueueCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    priority: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarQueueAvgAggregateInputType = {
    priority?: true
  }

  export type BarQueueSumAggregateInputType = {
    priority?: true
  }

  export type BarQueueMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarQueueMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarQueueCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    priority?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarQueueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarQueue to aggregate.
     */
    where?: BarQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarQueues to fetch.
     */
    orderBy?: BarQueueOrderByWithRelationInput | BarQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarQueues
    **/
    _count?: true | BarQueueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarQueueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarQueueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarQueueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarQueueMaxAggregateInputType
  }

  export type GetBarQueueAggregateType<T extends BarQueueAggregateArgs> = {
        [P in keyof T & keyof AggregateBarQueue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarQueue[P]>
      : GetScalarType<T[P], AggregateBarQueue[P]>
  }




  export type BarQueueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarQueueWhereInput
    orderBy?: BarQueueOrderByWithAggregationInput | BarQueueOrderByWithAggregationInput[]
    by: BarQueueScalarFieldEnum[] | BarQueueScalarFieldEnum
    having?: BarQueueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarQueueCountAggregateInputType | true
    _avg?: BarQueueAvgAggregateInputType
    _sum?: BarQueueSumAggregateInputType
    _min?: BarQueueMinAggregateInputType
    _max?: BarQueueMaxAggregateInputType
  }

  export type BarQueueGroupByOutputType = {
    id: string
    orderId: string
    status: $Enums.OrderStatus
    priority: number
    createdAt: Date
    updatedAt: Date
    _count: BarQueueCountAggregateOutputType | null
    _avg: BarQueueAvgAggregateOutputType | null
    _sum: BarQueueSumAggregateOutputType | null
    _min: BarQueueMinAggregateOutputType | null
    _max: BarQueueMaxAggregateOutputType | null
  }

  type GetBarQueueGroupByPayload<T extends BarQueueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarQueueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarQueueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarQueueGroupByOutputType[P]>
            : GetScalarType<T[P], BarQueueGroupByOutputType[P]>
        }
      >
    >


  export type BarQueueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barQueue"]>

  export type BarQueueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barQueue"]>

  export type BarQueueSelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    priority?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarQueueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type BarQueueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $BarQueuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarQueue"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      status: $Enums.OrderStatus
      priority: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barQueue"]>
    composites: {}
  }

  type BarQueueGetPayload<S extends boolean | null | undefined | BarQueueDefaultArgs> = $Result.GetResult<Prisma.$BarQueuePayload, S>

  type BarQueueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BarQueueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BarQueueCountAggregateInputType | true
    }

  export interface BarQueueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarQueue'], meta: { name: 'BarQueue' } }
    /**
     * Find zero or one BarQueue that matches the filter.
     * @param {BarQueueFindUniqueArgs} args - Arguments to find a BarQueue
     * @example
     * // Get one BarQueue
     * const barQueue = await prisma.barQueue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarQueueFindUniqueArgs>(args: SelectSubset<T, BarQueueFindUniqueArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BarQueue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BarQueueFindUniqueOrThrowArgs} args - Arguments to find a BarQueue
     * @example
     * // Get one BarQueue
     * const barQueue = await prisma.barQueue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarQueueFindUniqueOrThrowArgs>(args: SelectSubset<T, BarQueueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BarQueue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarQueueFindFirstArgs} args - Arguments to find a BarQueue
     * @example
     * // Get one BarQueue
     * const barQueue = await prisma.barQueue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarQueueFindFirstArgs>(args?: SelectSubset<T, BarQueueFindFirstArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BarQueue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarQueueFindFirstOrThrowArgs} args - Arguments to find a BarQueue
     * @example
     * // Get one BarQueue
     * const barQueue = await prisma.barQueue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarQueueFindFirstOrThrowArgs>(args?: SelectSubset<T, BarQueueFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BarQueues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarQueueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarQueues
     * const barQueues = await prisma.barQueue.findMany()
     * 
     * // Get first 10 BarQueues
     * const barQueues = await prisma.barQueue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barQueueWithIdOnly = await prisma.barQueue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarQueueFindManyArgs>(args?: SelectSubset<T, BarQueueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BarQueue.
     * @param {BarQueueCreateArgs} args - Arguments to create a BarQueue.
     * @example
     * // Create one BarQueue
     * const BarQueue = await prisma.barQueue.create({
     *   data: {
     *     // ... data to create a BarQueue
     *   }
     * })
     * 
     */
    create<T extends BarQueueCreateArgs>(args: SelectSubset<T, BarQueueCreateArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BarQueues.
     * @param {BarQueueCreateManyArgs} args - Arguments to create many BarQueues.
     * @example
     * // Create many BarQueues
     * const barQueue = await prisma.barQueue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarQueueCreateManyArgs>(args?: SelectSubset<T, BarQueueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarQueues and returns the data saved in the database.
     * @param {BarQueueCreateManyAndReturnArgs} args - Arguments to create many BarQueues.
     * @example
     * // Create many BarQueues
     * const barQueue = await prisma.barQueue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarQueues and only return the `id`
     * const barQueueWithIdOnly = await prisma.barQueue.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarQueueCreateManyAndReturnArgs>(args?: SelectSubset<T, BarQueueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BarQueue.
     * @param {BarQueueDeleteArgs} args - Arguments to delete one BarQueue.
     * @example
     * // Delete one BarQueue
     * const BarQueue = await prisma.barQueue.delete({
     *   where: {
     *     // ... filter to delete one BarQueue
     *   }
     * })
     * 
     */
    delete<T extends BarQueueDeleteArgs>(args: SelectSubset<T, BarQueueDeleteArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BarQueue.
     * @param {BarQueueUpdateArgs} args - Arguments to update one BarQueue.
     * @example
     * // Update one BarQueue
     * const barQueue = await prisma.barQueue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarQueueUpdateArgs>(args: SelectSubset<T, BarQueueUpdateArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BarQueues.
     * @param {BarQueueDeleteManyArgs} args - Arguments to filter BarQueues to delete.
     * @example
     * // Delete a few BarQueues
     * const { count } = await prisma.barQueue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarQueueDeleteManyArgs>(args?: SelectSubset<T, BarQueueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarQueueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarQueues
     * const barQueue = await prisma.barQueue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarQueueUpdateManyArgs>(args: SelectSubset<T, BarQueueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BarQueue.
     * @param {BarQueueUpsertArgs} args - Arguments to update or create a BarQueue.
     * @example
     * // Update or create a BarQueue
     * const barQueue = await prisma.barQueue.upsert({
     *   create: {
     *     // ... data to create a BarQueue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarQueue we want to update
     *   }
     * })
     */
    upsert<T extends BarQueueUpsertArgs>(args: SelectSubset<T, BarQueueUpsertArgs<ExtArgs>>): Prisma__BarQueueClient<$Result.GetResult<Prisma.$BarQueuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BarQueues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarQueueCountArgs} args - Arguments to filter BarQueues to count.
     * @example
     * // Count the number of BarQueues
     * const count = await prisma.barQueue.count({
     *   where: {
     *     // ... the filter for the BarQueues we want to count
     *   }
     * })
    **/
    count<T extends BarQueueCountArgs>(
      args?: Subset<T, BarQueueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarQueueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarQueueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarQueueAggregateArgs>(args: Subset<T, BarQueueAggregateArgs>): Prisma.PrismaPromise<GetBarQueueAggregateType<T>>

    /**
     * Group by BarQueue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarQueueGroupByArgs} args - Group by arguments.
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
      T extends BarQueueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarQueueGroupByArgs['orderBy'] }
        : { orderBy?: BarQueueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarQueueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarQueueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarQueue model
   */
  readonly fields: BarQueueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarQueue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarQueueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BarQueue model
   */ 
  interface BarQueueFieldRefs {
    readonly id: FieldRef<"BarQueue", 'String'>
    readonly orderId: FieldRef<"BarQueue", 'String'>
    readonly status: FieldRef<"BarQueue", 'OrderStatus'>
    readonly priority: FieldRef<"BarQueue", 'Int'>
    readonly createdAt: FieldRef<"BarQueue", 'DateTime'>
    readonly updatedAt: FieldRef<"BarQueue", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BarQueue findUnique
   */
  export type BarQueueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * Filter, which BarQueue to fetch.
     */
    where: BarQueueWhereUniqueInput
  }

  /**
   * BarQueue findUniqueOrThrow
   */
  export type BarQueueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * Filter, which BarQueue to fetch.
     */
    where: BarQueueWhereUniqueInput
  }

  /**
   * BarQueue findFirst
   */
  export type BarQueueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * Filter, which BarQueue to fetch.
     */
    where?: BarQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarQueues to fetch.
     */
    orderBy?: BarQueueOrderByWithRelationInput | BarQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarQueues.
     */
    cursor?: BarQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarQueues.
     */
    distinct?: BarQueueScalarFieldEnum | BarQueueScalarFieldEnum[]
  }

  /**
   * BarQueue findFirstOrThrow
   */
  export type BarQueueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * Filter, which BarQueue to fetch.
     */
    where?: BarQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarQueues to fetch.
     */
    orderBy?: BarQueueOrderByWithRelationInput | BarQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarQueues.
     */
    cursor?: BarQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarQueues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarQueues.
     */
    distinct?: BarQueueScalarFieldEnum | BarQueueScalarFieldEnum[]
  }

  /**
   * BarQueue findMany
   */
  export type BarQueueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * Filter, which BarQueues to fetch.
     */
    where?: BarQueueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarQueues to fetch.
     */
    orderBy?: BarQueueOrderByWithRelationInput | BarQueueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarQueues.
     */
    cursor?: BarQueueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarQueues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarQueues.
     */
    skip?: number
    distinct?: BarQueueScalarFieldEnum | BarQueueScalarFieldEnum[]
  }

  /**
   * BarQueue create
   */
  export type BarQueueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * The data needed to create a BarQueue.
     */
    data: XOR<BarQueueCreateInput, BarQueueUncheckedCreateInput>
  }

  /**
   * BarQueue createMany
   */
  export type BarQueueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarQueues.
     */
    data: BarQueueCreateManyInput | BarQueueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarQueue createManyAndReturn
   */
  export type BarQueueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BarQueues.
     */
    data: BarQueueCreateManyInput | BarQueueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarQueue update
   */
  export type BarQueueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * The data needed to update a BarQueue.
     */
    data: XOR<BarQueueUpdateInput, BarQueueUncheckedUpdateInput>
    /**
     * Choose, which BarQueue to update.
     */
    where: BarQueueWhereUniqueInput
  }

  /**
   * BarQueue updateMany
   */
  export type BarQueueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarQueues.
     */
    data: XOR<BarQueueUpdateManyMutationInput, BarQueueUncheckedUpdateManyInput>
    /**
     * Filter which BarQueues to update
     */
    where?: BarQueueWhereInput
  }

  /**
   * BarQueue upsert
   */
  export type BarQueueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * The filter to search for the BarQueue to update in case it exists.
     */
    where: BarQueueWhereUniqueInput
    /**
     * In case the BarQueue found by the `where` argument doesn't exist, create a new BarQueue with this data.
     */
    create: XOR<BarQueueCreateInput, BarQueueUncheckedCreateInput>
    /**
     * In case the BarQueue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarQueueUpdateInput, BarQueueUncheckedUpdateInput>
  }

  /**
   * BarQueue delete
   */
  export type BarQueueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
    /**
     * Filter which BarQueue to delete.
     */
    where: BarQueueWhereUniqueInput
  }

  /**
   * BarQueue deleteMany
   */
  export type BarQueueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarQueues to delete
     */
    where?: BarQueueWhereInput
  }

  /**
   * BarQueue without action
   */
  export type BarQueueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarQueue
     */
    select?: BarQueueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarQueueInclude<ExtArgs> | null
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


  export const CustomerScalarFieldEnum: {
    id: 'id',
    mobile: 'mobile',
    name: 'name',
    loyaltyPoints: 'loyaltyPoints',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const MenuCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    sortOrder: 'sortOrder',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuCategoryScalarFieldEnum = (typeof MenuCategoryScalarFieldEnum)[keyof typeof MenuCategoryScalarFieldEnum]


  export const MenuItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    imageUrl: 'imageUrl',
    isVeg: 'isVeg',
    isAvailable: 'isAvailable',
    trackStock: 'trackStock',
    stockQuantity: 'stockQuantity',
    lowStockAt: 'lowStockAt',
    categoryId: 'categoryId',
    addOns: 'addOns',
    targetQueue: 'targetQueue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuItemScalarFieldEnum = (typeof MenuItemScalarFieldEnum)[keyof typeof MenuItemScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    customerId: 'customerId',
    tableNumber: 'tableNumber',
    notes: 'notes',
    totalPrice: 'totalPrice',
    tax: 'tax',
    discount: 'discount',
    finalPrice: 'finalPrice',
    status: 'status',
    isPaid: 'isPaid',
    paidAt: 'paidAt',
    paymentMethod: 'paymentMethod',
    paymentStatus: 'paymentStatus',
    paymentGateway: 'paymentGateway',
    gatewayOrderId: 'gatewayOrderId',
    gatewayPaymentId: 'gatewayPaymentId',
    cancelUntil: 'cancelUntil',
    cancelledAt: 'cancelledAt',
    refundStatus: 'refundStatus',
    refundDeniedReason: 'refundDeniedReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    gateway: 'gateway',
    merchantOrderId: 'merchantOrderId',
    gatewayOrderId: 'gatewayOrderId',
    gatewayPaymentId: 'gatewayPaymentId',
    amount: 'amount',
    status: 'status',
    method: 'method',
    redirectUrl: 'redirectUrl',
    rawResponse: 'rawResponse',
    rawWebhook: 'rawWebhook',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    menuItemId: 'menuItemId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    notes: 'notes',
    addOnsSelected: 'addOnsSelected',
    status: 'status',
    targetQueue: 'targetQueue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


  export const AppSettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type AppSettingScalarFieldEnum = (typeof AppSettingScalarFieldEnum)[keyof typeof AppSettingScalarFieldEnum]


  export const CustomerFeedbackScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    customerId: 'customerId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type CustomerFeedbackScalarFieldEnum = (typeof CustomerFeedbackScalarFieldEnum)[keyof typeof CustomerFeedbackScalarFieldEnum]


  export const InventoryTransactionScalarFieldEnum: {
    id: 'id',
    menuItemId: 'menuItemId',
    type: 'type',
    quantity: 'quantity',
    note: 'note',
    unitCost: 'unitCost',
    createdById: 'createdById',
    createdAt: 'createdAt'
  };

  export type InventoryTransactionScalarFieldEnum = (typeof InventoryTransactionScalarFieldEnum)[keyof typeof InventoryTransactionScalarFieldEnum]


  export const StaffShiftScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    checkInAt: 'checkInAt',
    checkOutAt: 'checkOutAt',
    note: 'note',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StaffShiftScalarFieldEnum = (typeof StaffShiftScalarFieldEnum)[keyof typeof StaffShiftScalarFieldEnum]


  export const RecommendationScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    menuItemId: 'menuItemId',
    source: 'source',
    reason: 'reason',
    shownAt: 'shownAt',
    acceptedAt: 'acceptedAt'
  };

  export type RecommendationScalarFieldEnum = (typeof RecommendationScalarFieldEnum)[keyof typeof RecommendationScalarFieldEnum]


  export const KitchenQueueScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KitchenQueueScalarFieldEnum = (typeof KitchenQueueScalarFieldEnum)[keyof typeof KitchenQueueScalarFieldEnum]


  export const BarQueueScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    priority: 'priority',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BarQueueScalarFieldEnum = (typeof BarQueueScalarFieldEnum)[keyof typeof BarQueueScalarFieldEnum]


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


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueueTarget'
   */
  export type EnumQueueTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueueTarget'>
    


  /**
   * Reference to a field of type 'QueueTarget[]'
   */
  export type ListEnumQueueTargetFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueueTarget[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'RecommendationSource'
   */
  export type EnumRecommendationSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationSource'>
    


  /**
   * Reference to a field of type 'RecommendationSource[]'
   */
  export type ListEnumRecommendationSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationSource[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    mobile?: StringFilter<"Customer"> | string
    name?: StringNullableFilter<"Customer"> | string | null
    loyaltyPoints?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: OrderListRelationFilter
    recommendations?: RecommendationListRelationFilter
    feedback?: CustomerFeedbackListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrderInput | SortOrder
    loyaltyPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
    feedback?: CustomerFeedbackOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobile?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringNullableFilter<"Customer"> | string | null
    loyaltyPoints?: IntFilter<"Customer"> | number
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    orders?: OrderListRelationFilter
    recommendations?: RecommendationListRelationFilter
    feedback?: CustomerFeedbackListRelationFilter
  }, "id" | "mobile">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrderInput | SortOrder
    loyaltyPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    mobile?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    loyaltyPoints?: IntWithAggregatesFilter<"Customer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type MenuCategoryWhereInput = {
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    id?: StringFilter<"MenuCategory"> | string
    name?: StringFilter<"MenuCategory"> | string
    icon?: StringFilter<"MenuCategory"> | string
    sortOrder?: IntFilter<"MenuCategory"> | number
    isActive?: BoolFilter<"MenuCategory"> | boolean
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string
    items?: MenuItemListRelationFilter
  }

  export type MenuCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: MenuItemOrderByRelationAggregateInput
  }

  export type MenuCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    OR?: MenuCategoryWhereInput[]
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[]
    icon?: StringFilter<"MenuCategory"> | string
    sortOrder?: IntFilter<"MenuCategory"> | number
    isActive?: BoolFilter<"MenuCategory"> | boolean
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string
    items?: MenuItemListRelationFilter
  }, "id" | "name">

  export type MenuCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCategoryCountOrderByAggregateInput
    _avg?: MenuCategoryAvgOrderByAggregateInput
    _max?: MenuCategoryMaxOrderByAggregateInput
    _min?: MenuCategoryMinOrderByAggregateInput
    _sum?: MenuCategorySumOrderByAggregateInput
  }

  export type MenuCategoryScalarWhereWithAggregatesInput = {
    AND?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    OR?: MenuCategoryScalarWhereWithAggregatesInput[]
    NOT?: MenuCategoryScalarWhereWithAggregatesInput | MenuCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuCategory"> | string
    name?: StringWithAggregatesFilter<"MenuCategory"> | string
    icon?: StringWithAggregatesFilter<"MenuCategory"> | string
    sortOrder?: IntWithAggregatesFilter<"MenuCategory"> | number
    isActive?: BoolWithAggregatesFilter<"MenuCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string
  }

  export type MenuItemWhereInput = {
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: FloatFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isVeg?: BoolFilter<"MenuItem"> | boolean
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    trackStock?: BoolFilter<"MenuItem"> | boolean
    stockQuantity?: IntNullableFilter<"MenuItem"> | number | null
    lowStockAt?: IntFilter<"MenuItem"> | number
    categoryId?: StringFilter<"MenuItem"> | string
    addOns?: JsonNullableFilter<"MenuItem">
    targetQueue?: EnumQueueTargetFilter<"MenuItem"> | $Enums.QueueTarget
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    category?: XOR<MenuCategoryRelationFilter, MenuCategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
    recommendations?: RecommendationListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
  }

  export type MenuItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isVeg?: SortOrder
    isAvailable?: SortOrder
    trackStock?: SortOrder
    stockQuantity?: SortOrderInput | SortOrder
    lowStockAt?: SortOrder
    categoryId?: SortOrder
    addOns?: SortOrderInput | SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: MenuCategoryOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    recommendations?: RecommendationOrderByRelationAggregateInput
    inventoryTransactions?: InventoryTransactionOrderByRelationAggregateInput
  }

  export type MenuItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_categoryId?: MenuItemNameCategoryIdCompoundUniqueInput
    AND?: MenuItemWhereInput | MenuItemWhereInput[]
    OR?: MenuItemWhereInput[]
    NOT?: MenuItemWhereInput | MenuItemWhereInput[]
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: FloatFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isVeg?: BoolFilter<"MenuItem"> | boolean
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    trackStock?: BoolFilter<"MenuItem"> | boolean
    stockQuantity?: IntNullableFilter<"MenuItem"> | number | null
    lowStockAt?: IntFilter<"MenuItem"> | number
    categoryId?: StringFilter<"MenuItem"> | string
    addOns?: JsonNullableFilter<"MenuItem">
    targetQueue?: EnumQueueTargetFilter<"MenuItem"> | $Enums.QueueTarget
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
    category?: XOR<MenuCategoryRelationFilter, MenuCategoryWhereInput>
    orderItems?: OrderItemListRelationFilter
    recommendations?: RecommendationListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
  }, "id" | "name_categoryId">

  export type MenuItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isVeg?: SortOrder
    isAvailable?: SortOrder
    trackStock?: SortOrder
    stockQuantity?: SortOrderInput | SortOrder
    lowStockAt?: SortOrder
    categoryId?: SortOrder
    addOns?: SortOrderInput | SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuItemCountOrderByAggregateInput
    _avg?: MenuItemAvgOrderByAggregateInput
    _max?: MenuItemMaxOrderByAggregateInput
    _min?: MenuItemMinOrderByAggregateInput
    _sum?: MenuItemSumOrderByAggregateInput
  }

  export type MenuItemScalarWhereWithAggregatesInput = {
    AND?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    OR?: MenuItemScalarWhereWithAggregatesInput[]
    NOT?: MenuItemScalarWhereWithAggregatesInput | MenuItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MenuItem"> | string
    name?: StringWithAggregatesFilter<"MenuItem"> | string
    description?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    price?: FloatWithAggregatesFilter<"MenuItem"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"MenuItem"> | string | null
    isVeg?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    isAvailable?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    trackStock?: BoolWithAggregatesFilter<"MenuItem"> | boolean
    stockQuantity?: IntNullableWithAggregatesFilter<"MenuItem"> | number | null
    lowStockAt?: IntWithAggregatesFilter<"MenuItem"> | number
    categoryId?: StringWithAggregatesFilter<"MenuItem"> | string
    addOns?: JsonNullableWithAggregatesFilter<"MenuItem">
    targetQueue?: EnumQueueTargetWithAggregatesFilter<"MenuItem"> | $Enums.QueueTarget
    createdAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MenuItem"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    tableNumber?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
    totalPrice?: FloatFilter<"Order"> | number
    tax?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    finalPrice?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"Order"> | boolean
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringFilter<"Order"> | string
    paymentGateway?: StringNullableFilter<"Order"> | string | null
    gatewayOrderId?: StringNullableFilter<"Order"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Order"> | string | null
    cancelUntil?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    refundStatus?: StringFilter<"Order"> | string
    refundDeniedReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    items?: OrderItemListRelationFilter
    payments?: PaymentListRelationFilter
    kitchenQueue?: KitchenQueueListRelationFilter
    barQueue?: BarQueueListRelationFilter
    feedback?: CustomerFeedbackListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    tableNumber?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paymentGateway?: SortOrderInput | SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    cancelUntil?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    refundStatus?: SortOrder
    refundDeniedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    items?: OrderItemOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    kitchenQueue?: KitchenQueueOrderByRelationAggregateInput
    barQueue?: BarQueueOrderByRelationAggregateInput
    feedback?: CustomerFeedbackOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    customerId?: StringFilter<"Order"> | string
    tableNumber?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
    totalPrice?: FloatFilter<"Order"> | number
    tax?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    finalPrice?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"Order"> | boolean
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringFilter<"Order"> | string
    paymentGateway?: StringNullableFilter<"Order"> | string | null
    gatewayOrderId?: StringNullableFilter<"Order"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Order"> | string | null
    cancelUntil?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    refundStatus?: StringFilter<"Order"> | string
    refundDeniedReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    items?: OrderItemListRelationFilter
    payments?: PaymentListRelationFilter
    kitchenQueue?: KitchenQueueListRelationFilter
    barQueue?: BarQueueListRelationFilter
    feedback?: CustomerFeedbackListRelationFilter
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    tableNumber?: SortOrder
    notes?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    paymentGateway?: SortOrderInput | SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    cancelUntil?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    refundStatus?: SortOrder
    refundDeniedReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    customerId?: StringWithAggregatesFilter<"Order"> | string
    tableNumber?: StringWithAggregatesFilter<"Order"> | string
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    totalPrice?: FloatWithAggregatesFilter<"Order"> | number
    tax?: FloatWithAggregatesFilter<"Order"> | number
    discount?: FloatWithAggregatesFilter<"Order"> | number
    finalPrice?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolWithAggregatesFilter<"Order"> | boolean
    paidAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentStatus?: StringWithAggregatesFilter<"Order"> | string
    paymentGateway?: StringNullableWithAggregatesFilter<"Order"> | string | null
    gatewayOrderId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    gatewayPaymentId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    cancelUntil?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    refundStatus?: StringWithAggregatesFilter<"Order"> | string
    refundDeniedReason?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    gateway?: StringFilter<"Payment"> | string
    merchantOrderId?: StringFilter<"Payment"> | string
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    redirectUrl?: StringNullableFilter<"Payment"> | string | null
    rawResponse?: JsonNullableFilter<"Payment">
    rawWebhook?: JsonNullableFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    gateway?: SortOrder
    merchantOrderId?: SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    rawResponse?: SortOrderInput | SortOrder
    rawWebhook?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    merchantOrderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    orderId?: StringFilter<"Payment"> | string
    gateway?: StringFilter<"Payment"> | string
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    redirectUrl?: StringNullableFilter<"Payment"> | string | null
    rawResponse?: JsonNullableFilter<"Payment">
    rawWebhook?: JsonNullableFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id" | "merchantOrderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    gateway?: SortOrder
    merchantOrderId?: SortOrder
    gatewayOrderId?: SortOrderInput | SortOrder
    gatewayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    rawResponse?: SortOrderInput | SortOrder
    rawWebhook?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    gateway?: StringWithAggregatesFilter<"Payment"> | string
    merchantOrderId?: StringWithAggregatesFilter<"Payment"> | string
    gatewayOrderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    redirectUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    rawResponse?: JsonNullableWithAggregatesFilter<"Payment">
    rawWebhook?: JsonNullableWithAggregatesFilter<"Payment">
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    notes?: StringNullableFilter<"OrderItem"> | string | null
    addOnsSelected?: JsonNullableFilter<"OrderItem">
    status?: EnumOrderStatusFilter<"OrderItem"> | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFilter<"OrderItem"> | $Enums.QueueTarget
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    addOnsSelected?: SortOrderInput | SortOrder
    status?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    notes?: StringNullableFilter<"OrderItem"> | string | null
    addOnsSelected?: JsonNullableFilter<"OrderItem">
    status?: EnumOrderStatusFilter<"OrderItem"> | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFilter<"OrderItem"> | $Enums.QueueTarget
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    notes?: SortOrderInput | SortOrder
    addOnsSelected?: SortOrderInput | SortOrder
    status?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    menuItemId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: IntWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
    notes?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    addOnsSelected?: JsonNullableWithAggregatesFilter<"OrderItem">
    status?: EnumOrderStatusWithAggregatesFilter<"OrderItem"> | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetWithAggregatesFilter<"OrderItem"> | $Enums.QueueTarget
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: StringFilter<"AdminUser"> | string
    username?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    shifts?: StaffShiftListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shifts?: StaffShiftOrderByRelationAggregateInput
    inventoryTransactions?: InventoryTransactionOrderByRelationAggregateInput
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    name?: StringFilter<"AdminUser"> | string
    role?: StringFilter<"AdminUser"> | string
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeFilter<"AdminUser"> | Date | string
    shifts?: StaffShiftListRelationFilter
    inventoryTransactions?: InventoryTransactionListRelationFilter
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdminUser"> | string
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    name?: StringWithAggregatesFilter<"AdminUser"> | string
    role?: StringWithAggregatesFilter<"AdminUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type AppSettingWhereInput = {
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    key?: StringFilter<"AppSetting"> | string
    value?: JsonFilter<"AppSetting">
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }

  export type AppSettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    value?: JsonFilter<"AppSetting">
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }, "key">

  export type AppSettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: AppSettingCountOrderByAggregateInput
    _max?: AppSettingMaxOrderByAggregateInput
    _min?: AppSettingMinOrderByAggregateInput
  }

  export type AppSettingScalarWhereWithAggregatesInput = {
    AND?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    OR?: AppSettingScalarWhereWithAggregatesInput[]
    NOT?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"AppSetting"> | string
    value?: JsonWithAggregatesFilter<"AppSetting">
    updatedAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
  }

  export type CustomerFeedbackWhereInput = {
    AND?: CustomerFeedbackWhereInput | CustomerFeedbackWhereInput[]
    OR?: CustomerFeedbackWhereInput[]
    NOT?: CustomerFeedbackWhereInput | CustomerFeedbackWhereInput[]
    id?: StringFilter<"CustomerFeedback"> | string
    orderId?: StringFilter<"CustomerFeedback"> | string
    customerId?: StringNullableFilter<"CustomerFeedback"> | string | null
    rating?: IntFilter<"CustomerFeedback"> | number
    comment?: StringNullableFilter<"CustomerFeedback"> | string | null
    createdAt?: DateTimeFilter<"CustomerFeedback"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
  }

  export type CustomerFeedbackOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerFeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerFeedbackWhereInput | CustomerFeedbackWhereInput[]
    OR?: CustomerFeedbackWhereInput[]
    NOT?: CustomerFeedbackWhereInput | CustomerFeedbackWhereInput[]
    orderId?: StringFilter<"CustomerFeedback"> | string
    customerId?: StringNullableFilter<"CustomerFeedback"> | string | null
    rating?: IntFilter<"CustomerFeedback"> | number
    comment?: StringNullableFilter<"CustomerFeedback"> | string | null
    createdAt?: DateTimeFilter<"CustomerFeedback"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
  }, "id">

  export type CustomerFeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerId?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerFeedbackCountOrderByAggregateInput
    _avg?: CustomerFeedbackAvgOrderByAggregateInput
    _max?: CustomerFeedbackMaxOrderByAggregateInput
    _min?: CustomerFeedbackMinOrderByAggregateInput
    _sum?: CustomerFeedbackSumOrderByAggregateInput
  }

  export type CustomerFeedbackScalarWhereWithAggregatesInput = {
    AND?: CustomerFeedbackScalarWhereWithAggregatesInput | CustomerFeedbackScalarWhereWithAggregatesInput[]
    OR?: CustomerFeedbackScalarWhereWithAggregatesInput[]
    NOT?: CustomerFeedbackScalarWhereWithAggregatesInput | CustomerFeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerFeedback"> | string
    orderId?: StringWithAggregatesFilter<"CustomerFeedback"> | string
    customerId?: StringNullableWithAggregatesFilter<"CustomerFeedback"> | string | null
    rating?: IntWithAggregatesFilter<"CustomerFeedback"> | number
    comment?: StringNullableWithAggregatesFilter<"CustomerFeedback"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerFeedback"> | Date | string
  }

  export type InventoryTransactionWhereInput = {
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    id?: StringFilter<"InventoryTransaction"> | string
    menuItemId?: StringFilter<"InventoryTransaction"> | string
    type?: StringFilter<"InventoryTransaction"> | string
    quantity?: IntFilter<"InventoryTransaction"> | number
    note?: StringNullableFilter<"InventoryTransaction"> | string | null
    unitCost?: FloatNullableFilter<"InventoryTransaction"> | number | null
    createdById?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
    createdBy?: XOR<AdminUserNullableRelationFilter, AdminUserWhereInput> | null
  }

  export type InventoryTransactionOrderByWithRelationInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrderInput | SortOrder
    unitCost?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    menuItem?: MenuItemOrderByWithRelationInput
    createdBy?: AdminUserOrderByWithRelationInput
  }

  export type InventoryTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    OR?: InventoryTransactionWhereInput[]
    NOT?: InventoryTransactionWhereInput | InventoryTransactionWhereInput[]
    menuItemId?: StringFilter<"InventoryTransaction"> | string
    type?: StringFilter<"InventoryTransaction"> | string
    quantity?: IntFilter<"InventoryTransaction"> | number
    note?: StringNullableFilter<"InventoryTransaction"> | string | null
    unitCost?: FloatNullableFilter<"InventoryTransaction"> | number | null
    createdById?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
    menuItem?: XOR<MenuItemRelationFilter, MenuItemWhereInput>
    createdBy?: XOR<AdminUserNullableRelationFilter, AdminUserWhereInput> | null
  }, "id">

  export type InventoryTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrderInput | SortOrder
    unitCost?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: InventoryTransactionCountOrderByAggregateInput
    _avg?: InventoryTransactionAvgOrderByAggregateInput
    _max?: InventoryTransactionMaxOrderByAggregateInput
    _min?: InventoryTransactionMinOrderByAggregateInput
    _sum?: InventoryTransactionSumOrderByAggregateInput
  }

  export type InventoryTransactionScalarWhereWithAggregatesInput = {
    AND?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    OR?: InventoryTransactionScalarWhereWithAggregatesInput[]
    NOT?: InventoryTransactionScalarWhereWithAggregatesInput | InventoryTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryTransaction"> | string
    menuItemId?: StringWithAggregatesFilter<"InventoryTransaction"> | string
    type?: StringWithAggregatesFilter<"InventoryTransaction"> | string
    quantity?: IntWithAggregatesFilter<"InventoryTransaction"> | number
    note?: StringNullableWithAggregatesFilter<"InventoryTransaction"> | string | null
    unitCost?: FloatNullableWithAggregatesFilter<"InventoryTransaction"> | number | null
    createdById?: StringNullableWithAggregatesFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryTransaction"> | Date | string
  }

  export type StaffShiftWhereInput = {
    AND?: StaffShiftWhereInput | StaffShiftWhereInput[]
    OR?: StaffShiftWhereInput[]
    NOT?: StaffShiftWhereInput | StaffShiftWhereInput[]
    id?: StringFilter<"StaffShift"> | string
    userId?: StringFilter<"StaffShift"> | string
    checkInAt?: DateTimeFilter<"StaffShift"> | Date | string
    checkOutAt?: DateTimeNullableFilter<"StaffShift"> | Date | string | null
    note?: StringNullableFilter<"StaffShift"> | string | null
    createdAt?: DateTimeFilter<"StaffShift"> | Date | string
    updatedAt?: DateTimeFilter<"StaffShift"> | Date | string
    user?: XOR<AdminUserRelationFilter, AdminUserWhereInput>
  }

  export type StaffShiftOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: AdminUserOrderByWithRelationInput
  }

  export type StaffShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StaffShiftWhereInput | StaffShiftWhereInput[]
    OR?: StaffShiftWhereInput[]
    NOT?: StaffShiftWhereInput | StaffShiftWhereInput[]
    userId?: StringFilter<"StaffShift"> | string
    checkInAt?: DateTimeFilter<"StaffShift"> | Date | string
    checkOutAt?: DateTimeNullableFilter<"StaffShift"> | Date | string | null
    note?: StringNullableFilter<"StaffShift"> | string | null
    createdAt?: DateTimeFilter<"StaffShift"> | Date | string
    updatedAt?: DateTimeFilter<"StaffShift"> | Date | string
    user?: XOR<AdminUserRelationFilter, AdminUserWhereInput>
  }, "id">

  export type StaffShiftOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StaffShiftCountOrderByAggregateInput
    _max?: StaffShiftMaxOrderByAggregateInput
    _min?: StaffShiftMinOrderByAggregateInput
  }

  export type StaffShiftScalarWhereWithAggregatesInput = {
    AND?: StaffShiftScalarWhereWithAggregatesInput | StaffShiftScalarWhereWithAggregatesInput[]
    OR?: StaffShiftScalarWhereWithAggregatesInput[]
    NOT?: StaffShiftScalarWhereWithAggregatesInput | StaffShiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StaffShift"> | string
    userId?: StringWithAggregatesFilter<"StaffShift"> | string
    checkInAt?: DateTimeWithAggregatesFilter<"StaffShift"> | Date | string
    checkOutAt?: DateTimeNullableWithAggregatesFilter<"StaffShift"> | Date | string | null
    note?: StringNullableWithAggregatesFilter<"StaffShift"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StaffShift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StaffShift"> | Date | string
  }

  export type RecommendationWhereInput = {
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    customerId?: StringNullableFilter<"Recommendation"> | string | null
    menuItemId?: StringNullableFilter<"Recommendation"> | string | null
    source?: EnumRecommendationSourceFilter<"Recommendation"> | $Enums.RecommendationSource
    reason?: StringFilter<"Recommendation"> | string
    shownAt?: DateTimeFilter<"Recommendation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    menuItem?: XOR<MenuItemNullableRelationFilter, MenuItemWhereInput> | null
  }

  export type RecommendationOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    menuItemId?: SortOrderInput | SortOrder
    source?: SortOrder
    reason?: SortOrder
    shownAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    menuItem?: MenuItemOrderByWithRelationInput
  }

  export type RecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    customerId_menuItemId_source?: RecommendationCustomerIdMenuItemIdSourceCompoundUniqueInput
    AND?: RecommendationWhereInput | RecommendationWhereInput[]
    OR?: RecommendationWhereInput[]
    NOT?: RecommendationWhereInput | RecommendationWhereInput[]
    customerId?: StringNullableFilter<"Recommendation"> | string | null
    menuItemId?: StringNullableFilter<"Recommendation"> | string | null
    source?: EnumRecommendationSourceFilter<"Recommendation"> | $Enums.RecommendationSource
    reason?: StringFilter<"Recommendation"> | string
    shownAt?: DateTimeFilter<"Recommendation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    menuItem?: XOR<MenuItemNullableRelationFilter, MenuItemWhereInput> | null
  }, "id" | "customerId_menuItemId_source">

  export type RecommendationOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrderInput | SortOrder
    menuItemId?: SortOrderInput | SortOrder
    source?: SortOrder
    reason?: SortOrder
    shownAt?: SortOrder
    acceptedAt?: SortOrderInput | SortOrder
    _count?: RecommendationCountOrderByAggregateInput
    _max?: RecommendationMaxOrderByAggregateInput
    _min?: RecommendationMinOrderByAggregateInput
  }

  export type RecommendationScalarWhereWithAggregatesInput = {
    AND?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    OR?: RecommendationScalarWhereWithAggregatesInput[]
    NOT?: RecommendationScalarWhereWithAggregatesInput | RecommendationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recommendation"> | string
    customerId?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    menuItemId?: StringNullableWithAggregatesFilter<"Recommendation"> | string | null
    source?: EnumRecommendationSourceWithAggregatesFilter<"Recommendation"> | $Enums.RecommendationSource
    reason?: StringWithAggregatesFilter<"Recommendation"> | string
    shownAt?: DateTimeWithAggregatesFilter<"Recommendation"> | Date | string
    acceptedAt?: DateTimeNullableWithAggregatesFilter<"Recommendation"> | Date | string | null
  }

  export type KitchenQueueWhereInput = {
    AND?: KitchenQueueWhereInput | KitchenQueueWhereInput[]
    OR?: KitchenQueueWhereInput[]
    NOT?: KitchenQueueWhereInput | KitchenQueueWhereInput[]
    id?: StringFilter<"KitchenQueue"> | string
    orderId?: StringFilter<"KitchenQueue"> | string
    status?: EnumOrderStatusFilter<"KitchenQueue"> | $Enums.OrderStatus
    priority?: IntFilter<"KitchenQueue"> | number
    createdAt?: DateTimeFilter<"KitchenQueue"> | Date | string
    updatedAt?: DateTimeFilter<"KitchenQueue"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type KitchenQueueOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type KitchenQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KitchenQueueWhereInput | KitchenQueueWhereInput[]
    OR?: KitchenQueueWhereInput[]
    NOT?: KitchenQueueWhereInput | KitchenQueueWhereInput[]
    orderId?: StringFilter<"KitchenQueue"> | string
    status?: EnumOrderStatusFilter<"KitchenQueue"> | $Enums.OrderStatus
    priority?: IntFilter<"KitchenQueue"> | number
    createdAt?: DateTimeFilter<"KitchenQueue"> | Date | string
    updatedAt?: DateTimeFilter<"KitchenQueue"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type KitchenQueueOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: KitchenQueueCountOrderByAggregateInput
    _avg?: KitchenQueueAvgOrderByAggregateInput
    _max?: KitchenQueueMaxOrderByAggregateInput
    _min?: KitchenQueueMinOrderByAggregateInput
    _sum?: KitchenQueueSumOrderByAggregateInput
  }

  export type KitchenQueueScalarWhereWithAggregatesInput = {
    AND?: KitchenQueueScalarWhereWithAggregatesInput | KitchenQueueScalarWhereWithAggregatesInput[]
    OR?: KitchenQueueScalarWhereWithAggregatesInput[]
    NOT?: KitchenQueueScalarWhereWithAggregatesInput | KitchenQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KitchenQueue"> | string
    orderId?: StringWithAggregatesFilter<"KitchenQueue"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"KitchenQueue"> | $Enums.OrderStatus
    priority?: IntWithAggregatesFilter<"KitchenQueue"> | number
    createdAt?: DateTimeWithAggregatesFilter<"KitchenQueue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"KitchenQueue"> | Date | string
  }

  export type BarQueueWhereInput = {
    AND?: BarQueueWhereInput | BarQueueWhereInput[]
    OR?: BarQueueWhereInput[]
    NOT?: BarQueueWhereInput | BarQueueWhereInput[]
    id?: StringFilter<"BarQueue"> | string
    orderId?: StringFilter<"BarQueue"> | string
    status?: EnumOrderStatusFilter<"BarQueue"> | $Enums.OrderStatus
    priority?: IntFilter<"BarQueue"> | number
    createdAt?: DateTimeFilter<"BarQueue"> | Date | string
    updatedAt?: DateTimeFilter<"BarQueue"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }

  export type BarQueueOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type BarQueueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarQueueWhereInput | BarQueueWhereInput[]
    OR?: BarQueueWhereInput[]
    NOT?: BarQueueWhereInput | BarQueueWhereInput[]
    orderId?: StringFilter<"BarQueue"> | string
    status?: EnumOrderStatusFilter<"BarQueue"> | $Enums.OrderStatus
    priority?: IntFilter<"BarQueue"> | number
    createdAt?: DateTimeFilter<"BarQueue"> | Date | string
    updatedAt?: DateTimeFilter<"BarQueue"> | Date | string
    order?: XOR<OrderRelationFilter, OrderWhereInput>
  }, "id">

  export type BarQueueOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarQueueCountOrderByAggregateInput
    _avg?: BarQueueAvgOrderByAggregateInput
    _max?: BarQueueMaxOrderByAggregateInput
    _min?: BarQueueMinOrderByAggregateInput
    _sum?: BarQueueSumOrderByAggregateInput
  }

  export type BarQueueScalarWhereWithAggregatesInput = {
    AND?: BarQueueScalarWhereWithAggregatesInput | BarQueueScalarWhereWithAggregatesInput[]
    OR?: BarQueueScalarWhereWithAggregatesInput[]
    NOT?: BarQueueScalarWhereWithAggregatesInput | BarQueueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BarQueue"> | string
    orderId?: StringWithAggregatesFilter<"BarQueue"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"BarQueue"> | $Enums.OrderStatus
    priority?: IntWithAggregatesFilter<"BarQueue"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BarQueue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BarQueue"> | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    recommendations?: RecommendationCreateNestedManyWithoutCustomerInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCustomerInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    recommendations?: RecommendationUpdateManyWithoutCustomerNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCustomerNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryCreateInput = {
    id?: string
    name: string
    icon: string
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: MenuItemCreateNestedManyWithoutCategoryInput
  }

  export type MenuCategoryUncheckedCreateInput = {
    id?: string
    name: string
    icon: string
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: MenuItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type MenuCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MenuItemUpdateManyWithoutCategoryNestedInput
  }

  export type MenuCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: MenuItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type MenuCategoryCreateManyInput = {
    id?: string
    name: string
    icon: string
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    recommendations?: RecommendationCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    categoryId: string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    recommendations?: RecommendationUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    categoryId: string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueUncheckedCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueUncheckedCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUncheckedUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUncheckedUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    gateway: string
    merchantOrderId: string
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    amount: number
    status?: string
    method?: string | null
    redirectUrl?: string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    gateway: string
    merchantOrderId: string
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    amount: number
    status?: string
    method?: string | null
    redirectUrl?: string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gateway?: StringFieldUpdateOperationsInput | string
    merchantOrderId?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    gateway?: StringFieldUpdateOperationsInput | string
    merchantOrderId?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    orderId: string
    gateway: string
    merchantOrderId: string
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    amount: number
    status?: string
    method?: string | null
    redirectUrl?: string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gateway?: StringFieldUpdateOperationsInput | string
    merchantOrderId?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    gateway?: StringFieldUpdateOperationsInput | string
    merchantOrderId?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    menuItemId: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    id?: string
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: StaffShiftCreateNestedManyWithoutUserInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: StaffShiftUncheckedCreateNestedManyWithoutUserInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: StaffShiftUpdateManyWithoutUserNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: StaffShiftUncheckedUpdateManyWithoutUserNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserCreateManyInput = {
    id?: string
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type AppSettingUncheckedCreateInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type AppSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateManyInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type AppSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFeedbackCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutFeedbackInput
    customer?: CustomerCreateNestedOneWithoutFeedbackInput
  }

  export type CustomerFeedbackUncheckedCreateInput = {
    id?: string
    orderId: string
    customerId?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CustomerFeedbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutFeedbackNestedInput
    customer?: CustomerUpdateOneWithoutFeedbackNestedInput
  }

  export type CustomerFeedbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFeedbackCreateManyInput = {
    id?: string
    orderId: string
    customerId?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CustomerFeedbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFeedbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionCreateInput = {
    id?: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdAt?: Date | string
    menuItem: MenuItemCreateNestedOneWithoutInventoryTransactionsInput
    createdBy?: AdminUserCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateInput = {
    id?: string
    menuItemId: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type InventoryTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: MenuItemUpdateOneRequiredWithoutInventoryTransactionsNestedInput
    createdBy?: AdminUserUpdateOneWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionCreateManyInput = {
    id?: string
    menuItemId: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type InventoryTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffShiftCreateInput = {
    id?: string
    checkInAt?: Date | string
    checkOutAt?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: AdminUserCreateNestedOneWithoutShiftsInput
  }

  export type StaffShiftUncheckedCreateInput = {
    id?: string
    userId: string
    checkInAt?: Date | string
    checkOutAt?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: AdminUserUpdateOneRequiredWithoutShiftsNestedInput
  }

  export type StaffShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffShiftCreateManyInput = {
    id?: string
    userId: string
    checkInAt?: Date | string
    checkOutAt?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationCreateInput = {
    id?: string
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutRecommendationsInput
    menuItem?: MenuItemCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateInput = {
    id?: string
    customerId?: string | null
    menuItemId?: string | null
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type RecommendationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutRecommendationsNestedInput
    menuItem?: MenuItemUpdateOneWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    menuItemId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationCreateManyInput = {
    id?: string
    customerId?: string | null
    menuItemId?: string | null
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type RecommendationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    menuItemId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KitchenQueueCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutKitchenQueueInput
  }

  export type KitchenQueueUncheckedCreateInput = {
    id?: string
    orderId: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutKitchenQueueNestedInput
  }

  export type KitchenQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenQueueCreateManyInput = {
    id?: string
    orderId: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarQueueCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutBarQueueInput
  }

  export type BarQueueUncheckedCreateInput = {
    id?: string
    orderId: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarQueueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutBarQueueNestedInput
  }

  export type BarQueueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarQueueCreateManyInput = {
    id?: string
    orderId: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarQueueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarQueueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type RecommendationListRelationFilter = {
    every?: RecommendationWhereInput
    some?: RecommendationWhereInput
    none?: RecommendationWhereInput
  }

  export type CustomerFeedbackListRelationFilter = {
    every?: CustomerFeedbackWhereInput
    some?: CustomerFeedbackWhereInput
    none?: CustomerFeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecommendationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerFeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    loyaltyPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    loyaltyPoints?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    loyaltyPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    mobile?: SortOrder
    name?: SortOrder
    loyaltyPoints?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    loyaltyPoints?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MenuItemListRelationFilter = {
    every?: MenuItemWhereInput
    some?: MenuItemWhereInput
    none?: MenuItemWhereInput
  }

  export type MenuItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategoryAvgOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type MenuCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    sortOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuCategorySumOrderByAggregateInput = {
    sortOrder?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumQueueTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueTarget | EnumQueueTargetFieldRefInput<$PrismaModel>
    in?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueTargetFilter<$PrismaModel> | $Enums.QueueTarget
  }

  export type MenuCategoryRelationFilter = {
    is?: MenuCategoryWhereInput
    isNot?: MenuCategoryWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type InventoryTransactionListRelationFilter = {
    every?: InventoryTransactionWhereInput
    some?: InventoryTransactionWhereInput
    none?: InventoryTransactionWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuItemNameCategoryIdCompoundUniqueInput = {
    name: string
    categoryId: string
  }

  export type MenuItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isVeg?: SortOrder
    isAvailable?: SortOrder
    trackStock?: SortOrder
    stockQuantity?: SortOrder
    lowStockAt?: SortOrder
    categoryId?: SortOrder
    addOns?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemAvgOrderByAggregateInput = {
    price?: SortOrder
    stockQuantity?: SortOrder
    lowStockAt?: SortOrder
  }

  export type MenuItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isVeg?: SortOrder
    isAvailable?: SortOrder
    trackStock?: SortOrder
    stockQuantity?: SortOrder
    lowStockAt?: SortOrder
    categoryId?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    imageUrl?: SortOrder
    isVeg?: SortOrder
    isAvailable?: SortOrder
    trackStock?: SortOrder
    stockQuantity?: SortOrder
    lowStockAt?: SortOrder
    categoryId?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuItemSumOrderByAggregateInput = {
    price?: SortOrder
    stockQuantity?: SortOrder
    lowStockAt?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumQueueTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueTarget | EnumQueueTargetFieldRefInput<$PrismaModel>
    in?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueTargetWithAggregatesFilter<$PrismaModel> | $Enums.QueueTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueueTargetFilter<$PrismaModel>
    _max?: NestedEnumQueueTargetFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
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

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type KitchenQueueListRelationFilter = {
    every?: KitchenQueueWhereInput
    some?: KitchenQueueWhereInput
    none?: KitchenQueueWhereInput
  }

  export type BarQueueListRelationFilter = {
    every?: BarQueueWhereInput
    some?: BarQueueWhereInput
    none?: BarQueueWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KitchenQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarQueueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    tableNumber?: SortOrder
    notes?: SortOrder
    totalPrice?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymentGateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    cancelUntil?: SortOrder
    cancelledAt?: SortOrder
    refundStatus?: SortOrder
    refundDeniedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    tableNumber?: SortOrder
    notes?: SortOrder
    totalPrice?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymentGateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    cancelUntil?: SortOrder
    cancelledAt?: SortOrder
    refundStatus?: SortOrder
    refundDeniedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    customerId?: SortOrder
    tableNumber?: SortOrder
    notes?: SortOrder
    totalPrice?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
    status?: SortOrder
    isPaid?: SortOrder
    paidAt?: SortOrder
    paymentMethod?: SortOrder
    paymentStatus?: SortOrder
    paymentGateway?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    cancelUntil?: SortOrder
    cancelledAt?: SortOrder
    refundStatus?: SortOrder
    refundDeniedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    tax?: SortOrder
    discount?: SortOrder
    finalPrice?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
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

  export type OrderRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    gateway?: SortOrder
    merchantOrderId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    redirectUrl?: SortOrder
    rawResponse?: SortOrder
    rawWebhook?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    gateway?: SortOrder
    merchantOrderId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    redirectUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    gateway?: SortOrder
    merchantOrderId?: SortOrder
    gatewayOrderId?: SortOrder
    gatewayPaymentId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    method?: SortOrder
    redirectUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type MenuItemRelationFilter = {
    is?: MenuItemWhereInput
    isNot?: MenuItemWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    notes?: SortOrder
    addOnsSelected?: SortOrder
    status?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    menuItemId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    notes?: SortOrder
    status?: SortOrder
    targetQueue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type StaffShiftListRelationFilter = {
    every?: StaffShiftWhereInput
    some?: StaffShiftWhereInput
    none?: StaffShiftWhereInput
  }

  export type StaffShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AppSettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMaxOrderByAggregateInput = {
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMinOrderByAggregateInput = {
    key?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type CustomerFeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerFeedbackAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type CustomerFeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerFeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    customerId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerFeedbackSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AdminUserNullableRelationFilter = {
    is?: AdminUserWhereInput | null
    isNot?: AdminUserWhereInput | null
  }

  export type InventoryTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    unitCost?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryTransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
  }

  export type InventoryTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    unitCost?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    menuItemId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    note?: SortOrder
    unitCost?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryTransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitCost?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AdminUserRelationFilter = {
    is?: AdminUserWhereInput
    isNot?: AdminUserWhereInput
  }

  export type StaffShiftCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StaffShiftMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRecommendationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationSource | EnumRecommendationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationSourceFilter<$PrismaModel> | $Enums.RecommendationSource
  }

  export type MenuItemNullableRelationFilter = {
    is?: MenuItemWhereInput | null
    isNot?: MenuItemWhereInput | null
  }

  export type RecommendationCustomerIdMenuItemIdSourceCompoundUniqueInput = {
    customerId: string
    menuItemId: string
    source: $Enums.RecommendationSource
  }

  export type RecommendationCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    menuItemId?: SortOrder
    source?: SortOrder
    reason?: SortOrder
    shownAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type RecommendationMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    menuItemId?: SortOrder
    source?: SortOrder
    reason?: SortOrder
    shownAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type RecommendationMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    menuItemId?: SortOrder
    source?: SortOrder
    reason?: SortOrder
    shownAt?: SortOrder
    acceptedAt?: SortOrder
  }

  export type EnumRecommendationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationSource | EnumRecommendationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationSourceWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendationSourceFilter<$PrismaModel>
    _max?: NestedEnumRecommendationSourceFilter<$PrismaModel>
  }

  export type KitchenQueueCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KitchenQueueAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type KitchenQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KitchenQueueMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KitchenQueueSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type BarQueueCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarQueueAvgOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type BarQueueMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarQueueMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarQueueSumOrderByAggregateInput = {
    priority?: SortOrder
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RecommendationCreateWithoutCustomerInput, RecommendationUncheckedCreateWithoutCustomerInput> | RecommendationCreateWithoutCustomerInput[] | RecommendationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCustomerInput | RecommendationCreateOrConnectWithoutCustomerInput[]
    createMany?: RecommendationCreateManyCustomerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CustomerFeedbackCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerFeedbackCreateWithoutCustomerInput, CustomerFeedbackUncheckedCreateWithoutCustomerInput> | CustomerFeedbackCreateWithoutCustomerInput[] | CustomerFeedbackUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutCustomerInput | CustomerFeedbackCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerFeedbackCreateManyCustomerInputEnvelope
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RecommendationCreateWithoutCustomerInput, RecommendationUncheckedCreateWithoutCustomerInput> | RecommendationCreateWithoutCustomerInput[] | RecommendationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCustomerInput | RecommendationCreateOrConnectWithoutCustomerInput[]
    createMany?: RecommendationCreateManyCustomerInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type CustomerFeedbackUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerFeedbackCreateWithoutCustomerInput, CustomerFeedbackUncheckedCreateWithoutCustomerInput> | CustomerFeedbackCreateWithoutCustomerInput[] | CustomerFeedbackUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutCustomerInput | CustomerFeedbackCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerFeedbackCreateManyCustomerInputEnvelope
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RecommendationCreateWithoutCustomerInput, RecommendationUncheckedCreateWithoutCustomerInput> | RecommendationCreateWithoutCustomerInput[] | RecommendationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCustomerInput | RecommendationCreateOrConnectWithoutCustomerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCustomerInput | RecommendationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RecommendationCreateManyCustomerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCustomerInput | RecommendationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCustomerInput | RecommendationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type CustomerFeedbackUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerFeedbackCreateWithoutCustomerInput, CustomerFeedbackUncheckedCreateWithoutCustomerInput> | CustomerFeedbackCreateWithoutCustomerInput[] | CustomerFeedbackUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutCustomerInput | CustomerFeedbackCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerFeedbackUpsertWithWhereUniqueWithoutCustomerInput | CustomerFeedbackUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerFeedbackCreateManyCustomerInputEnvelope
    set?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    disconnect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    delete?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    update?: CustomerFeedbackUpdateWithWhereUniqueWithoutCustomerInput | CustomerFeedbackUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerFeedbackUpdateManyWithWhereWithoutCustomerInput | CustomerFeedbackUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerFeedbackScalarWhereInput | CustomerFeedbackScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RecommendationCreateWithoutCustomerInput, RecommendationUncheckedCreateWithoutCustomerInput> | RecommendationCreateWithoutCustomerInput[] | RecommendationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutCustomerInput | RecommendationCreateOrConnectWithoutCustomerInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutCustomerInput | RecommendationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RecommendationCreateManyCustomerInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutCustomerInput | RecommendationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutCustomerInput | RecommendationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type CustomerFeedbackUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerFeedbackCreateWithoutCustomerInput, CustomerFeedbackUncheckedCreateWithoutCustomerInput> | CustomerFeedbackCreateWithoutCustomerInput[] | CustomerFeedbackUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutCustomerInput | CustomerFeedbackCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerFeedbackUpsertWithWhereUniqueWithoutCustomerInput | CustomerFeedbackUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerFeedbackCreateManyCustomerInputEnvelope
    set?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    disconnect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    delete?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    update?: CustomerFeedbackUpdateWithWhereUniqueWithoutCustomerInput | CustomerFeedbackUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerFeedbackUpdateManyWithWhereWithoutCustomerInput | CustomerFeedbackUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerFeedbackScalarWhereInput | CustomerFeedbackScalarWhereInput[]
  }

  export type MenuItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type MenuItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type MenuItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput> | MenuItemCreateWithoutCategoryInput[] | MenuItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: MenuItemCreateOrConnectWithoutCategoryInput | MenuItemCreateOrConnectWithoutCategoryInput[]
    upsert?: MenuItemUpsertWithWhereUniqueWithoutCategoryInput | MenuItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: MenuItemCreateManyCategoryInputEnvelope
    set?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    disconnect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    delete?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    connect?: MenuItemWhereUniqueInput | MenuItemWhereUniqueInput[]
    update?: MenuItemUpdateWithWhereUniqueWithoutCategoryInput | MenuItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: MenuItemUpdateManyWithWhereWithoutCategoryInput | MenuItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
  }

  export type MenuCategoryCreateNestedOneWithoutItemsInput = {
    create?: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutItemsInput
    connect?: MenuCategoryWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RecommendationCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<RecommendationCreateWithoutMenuItemInput, RecommendationUncheckedCreateWithoutMenuItemInput> | RecommendationCreateWithoutMenuItemInput[] | RecommendationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutMenuItemInput | RecommendationCreateOrConnectWithoutMenuItemInput[]
    createMany?: RecommendationCreateManyMenuItemInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type InventoryTransactionCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<InventoryTransactionCreateWithoutMenuItemInput, InventoryTransactionUncheckedCreateWithoutMenuItemInput> | InventoryTransactionCreateWithoutMenuItemInput[] | InventoryTransactionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutMenuItemInput | InventoryTransactionCreateOrConnectWithoutMenuItemInput[]
    createMany?: InventoryTransactionCreateManyMenuItemInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type RecommendationUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<RecommendationCreateWithoutMenuItemInput, RecommendationUncheckedCreateWithoutMenuItemInput> | RecommendationCreateWithoutMenuItemInput[] | RecommendationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutMenuItemInput | RecommendationCreateOrConnectWithoutMenuItemInput[]
    createMany?: RecommendationCreateManyMenuItemInputEnvelope
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
  }

  export type InventoryTransactionUncheckedCreateNestedManyWithoutMenuItemInput = {
    create?: XOR<InventoryTransactionCreateWithoutMenuItemInput, InventoryTransactionUncheckedCreateWithoutMenuItemInput> | InventoryTransactionCreateWithoutMenuItemInput[] | InventoryTransactionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutMenuItemInput | InventoryTransactionCreateOrConnectWithoutMenuItemInput[]
    createMany?: InventoryTransactionCreateManyMenuItemInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumQueueTargetFieldUpdateOperationsInput = {
    set?: $Enums.QueueTarget
  }

  export type MenuCategoryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutItemsInput
    upsert?: MenuCategoryUpsertWithoutItemsInput
    connect?: MenuCategoryWhereUniqueInput
    update?: XOR<XOR<MenuCategoryUpdateToOneWithWhereWithoutItemsInput, MenuCategoryUpdateWithoutItemsInput>, MenuCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type OrderItemUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RecommendationUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<RecommendationCreateWithoutMenuItemInput, RecommendationUncheckedCreateWithoutMenuItemInput> | RecommendationCreateWithoutMenuItemInput[] | RecommendationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutMenuItemInput | RecommendationCreateOrConnectWithoutMenuItemInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutMenuItemInput | RecommendationUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: RecommendationCreateManyMenuItemInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutMenuItemInput | RecommendationUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutMenuItemInput | RecommendationUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type InventoryTransactionUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutMenuItemInput, InventoryTransactionUncheckedCreateWithoutMenuItemInput> | InventoryTransactionCreateWithoutMenuItemInput[] | InventoryTransactionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutMenuItemInput | InventoryTransactionCreateOrConnectWithoutMenuItemInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutMenuItemInput | InventoryTransactionUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: InventoryTransactionCreateManyMenuItemInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutMenuItemInput | InventoryTransactionUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutMenuItemInput | InventoryTransactionUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput> | OrderItemCreateWithoutMenuItemInput[] | OrderItemUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMenuItemInput | OrderItemCreateOrConnectWithoutMenuItemInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMenuItemInput | OrderItemUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: OrderItemCreateManyMenuItemInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMenuItemInput | OrderItemUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMenuItemInput | OrderItemUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type RecommendationUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<RecommendationCreateWithoutMenuItemInput, RecommendationUncheckedCreateWithoutMenuItemInput> | RecommendationCreateWithoutMenuItemInput[] | RecommendationUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: RecommendationCreateOrConnectWithoutMenuItemInput | RecommendationCreateOrConnectWithoutMenuItemInput[]
    upsert?: RecommendationUpsertWithWhereUniqueWithoutMenuItemInput | RecommendationUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: RecommendationCreateManyMenuItemInputEnvelope
    set?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    disconnect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    delete?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    connect?: RecommendationWhereUniqueInput | RecommendationWhereUniqueInput[]
    update?: RecommendationUpdateWithWhereUniqueWithoutMenuItemInput | RecommendationUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: RecommendationUpdateManyWithWhereWithoutMenuItemInput | RecommendationUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutMenuItemNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutMenuItemInput, InventoryTransactionUncheckedCreateWithoutMenuItemInput> | InventoryTransactionCreateWithoutMenuItemInput[] | InventoryTransactionUncheckedCreateWithoutMenuItemInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutMenuItemInput | InventoryTransactionCreateOrConnectWithoutMenuItemInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutMenuItemInput | InventoryTransactionUpsertWithWhereUniqueWithoutMenuItemInput[]
    createMany?: InventoryTransactionCreateManyMenuItemInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutMenuItemInput | InventoryTransactionUpdateWithWhereUniqueWithoutMenuItemInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutMenuItemInput | InventoryTransactionUpdateManyWithWhereWithoutMenuItemInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type KitchenQueueCreateNestedManyWithoutOrderInput = {
    create?: XOR<KitchenQueueCreateWithoutOrderInput, KitchenQueueUncheckedCreateWithoutOrderInput> | KitchenQueueCreateWithoutOrderInput[] | KitchenQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: KitchenQueueCreateOrConnectWithoutOrderInput | KitchenQueueCreateOrConnectWithoutOrderInput[]
    createMany?: KitchenQueueCreateManyOrderInputEnvelope
    connect?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
  }

  export type BarQueueCreateNestedManyWithoutOrderInput = {
    create?: XOR<BarQueueCreateWithoutOrderInput, BarQueueUncheckedCreateWithoutOrderInput> | BarQueueCreateWithoutOrderInput[] | BarQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: BarQueueCreateOrConnectWithoutOrderInput | BarQueueCreateOrConnectWithoutOrderInput[]
    createMany?: BarQueueCreateManyOrderInputEnvelope
    connect?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
  }

  export type CustomerFeedbackCreateNestedManyWithoutOrderInput = {
    create?: XOR<CustomerFeedbackCreateWithoutOrderInput, CustomerFeedbackUncheckedCreateWithoutOrderInput> | CustomerFeedbackCreateWithoutOrderInput[] | CustomerFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutOrderInput | CustomerFeedbackCreateOrConnectWithoutOrderInput[]
    createMany?: CustomerFeedbackCreateManyOrderInputEnvelope
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type KitchenQueueUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<KitchenQueueCreateWithoutOrderInput, KitchenQueueUncheckedCreateWithoutOrderInput> | KitchenQueueCreateWithoutOrderInput[] | KitchenQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: KitchenQueueCreateOrConnectWithoutOrderInput | KitchenQueueCreateOrConnectWithoutOrderInput[]
    createMany?: KitchenQueueCreateManyOrderInputEnvelope
    connect?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
  }

  export type BarQueueUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<BarQueueCreateWithoutOrderInput, BarQueueUncheckedCreateWithoutOrderInput> | BarQueueCreateWithoutOrderInput[] | BarQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: BarQueueCreateOrConnectWithoutOrderInput | BarQueueCreateOrConnectWithoutOrderInput[]
    createMany?: BarQueueCreateManyOrderInputEnvelope
    connect?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
  }

  export type CustomerFeedbackUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<CustomerFeedbackCreateWithoutOrderInput, CustomerFeedbackUncheckedCreateWithoutOrderInput> | CustomerFeedbackCreateWithoutOrderInput[] | CustomerFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutOrderInput | CustomerFeedbackCreateOrConnectWithoutOrderInput[]
    createMany?: CustomerFeedbackCreateManyOrderInputEnvelope
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type KitchenQueueUpdateManyWithoutOrderNestedInput = {
    create?: XOR<KitchenQueueCreateWithoutOrderInput, KitchenQueueUncheckedCreateWithoutOrderInput> | KitchenQueueCreateWithoutOrderInput[] | KitchenQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: KitchenQueueCreateOrConnectWithoutOrderInput | KitchenQueueCreateOrConnectWithoutOrderInput[]
    upsert?: KitchenQueueUpsertWithWhereUniqueWithoutOrderInput | KitchenQueueUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: KitchenQueueCreateManyOrderInputEnvelope
    set?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    disconnect?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    delete?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    connect?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    update?: KitchenQueueUpdateWithWhereUniqueWithoutOrderInput | KitchenQueueUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: KitchenQueueUpdateManyWithWhereWithoutOrderInput | KitchenQueueUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: KitchenQueueScalarWhereInput | KitchenQueueScalarWhereInput[]
  }

  export type BarQueueUpdateManyWithoutOrderNestedInput = {
    create?: XOR<BarQueueCreateWithoutOrderInput, BarQueueUncheckedCreateWithoutOrderInput> | BarQueueCreateWithoutOrderInput[] | BarQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: BarQueueCreateOrConnectWithoutOrderInput | BarQueueCreateOrConnectWithoutOrderInput[]
    upsert?: BarQueueUpsertWithWhereUniqueWithoutOrderInput | BarQueueUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: BarQueueCreateManyOrderInputEnvelope
    set?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    disconnect?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    delete?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    connect?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    update?: BarQueueUpdateWithWhereUniqueWithoutOrderInput | BarQueueUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: BarQueueUpdateManyWithWhereWithoutOrderInput | BarQueueUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: BarQueueScalarWhereInput | BarQueueScalarWhereInput[]
  }

  export type CustomerFeedbackUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CustomerFeedbackCreateWithoutOrderInput, CustomerFeedbackUncheckedCreateWithoutOrderInput> | CustomerFeedbackCreateWithoutOrderInput[] | CustomerFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutOrderInput | CustomerFeedbackCreateOrConnectWithoutOrderInput[]
    upsert?: CustomerFeedbackUpsertWithWhereUniqueWithoutOrderInput | CustomerFeedbackUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CustomerFeedbackCreateManyOrderInputEnvelope
    set?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    disconnect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    delete?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    update?: CustomerFeedbackUpdateWithWhereUniqueWithoutOrderInput | CustomerFeedbackUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CustomerFeedbackUpdateManyWithWhereWithoutOrderInput | CustomerFeedbackUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CustomerFeedbackScalarWhereInput | CustomerFeedbackScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type KitchenQueueUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<KitchenQueueCreateWithoutOrderInput, KitchenQueueUncheckedCreateWithoutOrderInput> | KitchenQueueCreateWithoutOrderInput[] | KitchenQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: KitchenQueueCreateOrConnectWithoutOrderInput | KitchenQueueCreateOrConnectWithoutOrderInput[]
    upsert?: KitchenQueueUpsertWithWhereUniqueWithoutOrderInput | KitchenQueueUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: KitchenQueueCreateManyOrderInputEnvelope
    set?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    disconnect?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    delete?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    connect?: KitchenQueueWhereUniqueInput | KitchenQueueWhereUniqueInput[]
    update?: KitchenQueueUpdateWithWhereUniqueWithoutOrderInput | KitchenQueueUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: KitchenQueueUpdateManyWithWhereWithoutOrderInput | KitchenQueueUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: KitchenQueueScalarWhereInput | KitchenQueueScalarWhereInput[]
  }

  export type BarQueueUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<BarQueueCreateWithoutOrderInput, BarQueueUncheckedCreateWithoutOrderInput> | BarQueueCreateWithoutOrderInput[] | BarQueueUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: BarQueueCreateOrConnectWithoutOrderInput | BarQueueCreateOrConnectWithoutOrderInput[]
    upsert?: BarQueueUpsertWithWhereUniqueWithoutOrderInput | BarQueueUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: BarQueueCreateManyOrderInputEnvelope
    set?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    disconnect?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    delete?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    connect?: BarQueueWhereUniqueInput | BarQueueWhereUniqueInput[]
    update?: BarQueueUpdateWithWhereUniqueWithoutOrderInput | BarQueueUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: BarQueueUpdateManyWithWhereWithoutOrderInput | BarQueueUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: BarQueueScalarWhereInput | BarQueueScalarWhereInput[]
  }

  export type CustomerFeedbackUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<CustomerFeedbackCreateWithoutOrderInput, CustomerFeedbackUncheckedCreateWithoutOrderInput> | CustomerFeedbackCreateWithoutOrderInput[] | CustomerFeedbackUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: CustomerFeedbackCreateOrConnectWithoutOrderInput | CustomerFeedbackCreateOrConnectWithoutOrderInput[]
    upsert?: CustomerFeedbackUpsertWithWhereUniqueWithoutOrderInput | CustomerFeedbackUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: CustomerFeedbackCreateManyOrderInputEnvelope
    set?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    disconnect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    delete?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    connect?: CustomerFeedbackWhereUniqueInput | CustomerFeedbackWhereUniqueInput[]
    update?: CustomerFeedbackUpdateWithWhereUniqueWithoutOrderInput | CustomerFeedbackUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: CustomerFeedbackUpdateManyWithWhereWithoutOrderInput | CustomerFeedbackUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: CustomerFeedbackScalarWhereInput | CustomerFeedbackScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    upsert?: OrderUpsertWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentsInput, OrderUpdateWithoutPaymentsInput>, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutItemsInput
    upsert?: OrderUpsertWithoutItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutItemsInput, OrderUpdateWithoutItemsInput>, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuItemUpsertWithoutOrderItemsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutOrderItemsInput, MenuItemUpdateWithoutOrderItemsInput>, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type StaffShiftCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffShiftCreateWithoutUserInput, StaffShiftUncheckedCreateWithoutUserInput> | StaffShiftCreateWithoutUserInput[] | StaffShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffShiftCreateOrConnectWithoutUserInput | StaffShiftCreateOrConnectWithoutUserInput[]
    createMany?: StaffShiftCreateManyUserInputEnvelope
    connect?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
  }

  export type InventoryTransactionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InventoryTransactionCreateWithoutCreatedByInput, InventoryTransactionUncheckedCreateWithoutCreatedByInput> | InventoryTransactionCreateWithoutCreatedByInput[] | InventoryTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutCreatedByInput | InventoryTransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: InventoryTransactionCreateManyCreatedByInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type StaffShiftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StaffShiftCreateWithoutUserInput, StaffShiftUncheckedCreateWithoutUserInput> | StaffShiftCreateWithoutUserInput[] | StaffShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffShiftCreateOrConnectWithoutUserInput | StaffShiftCreateOrConnectWithoutUserInput[]
    createMany?: StaffShiftCreateManyUserInputEnvelope
    connect?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
  }

  export type InventoryTransactionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<InventoryTransactionCreateWithoutCreatedByInput, InventoryTransactionUncheckedCreateWithoutCreatedByInput> | InventoryTransactionCreateWithoutCreatedByInput[] | InventoryTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutCreatedByInput | InventoryTransactionCreateOrConnectWithoutCreatedByInput[]
    createMany?: InventoryTransactionCreateManyCreatedByInputEnvelope
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
  }

  export type StaffShiftUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffShiftCreateWithoutUserInput, StaffShiftUncheckedCreateWithoutUserInput> | StaffShiftCreateWithoutUserInput[] | StaffShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffShiftCreateOrConnectWithoutUserInput | StaffShiftCreateOrConnectWithoutUserInput[]
    upsert?: StaffShiftUpsertWithWhereUniqueWithoutUserInput | StaffShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffShiftCreateManyUserInputEnvelope
    set?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    disconnect?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    delete?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    connect?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    update?: StaffShiftUpdateWithWhereUniqueWithoutUserInput | StaffShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffShiftUpdateManyWithWhereWithoutUserInput | StaffShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffShiftScalarWhereInput | StaffShiftScalarWhereInput[]
  }

  export type InventoryTransactionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutCreatedByInput, InventoryTransactionUncheckedCreateWithoutCreatedByInput> | InventoryTransactionCreateWithoutCreatedByInput[] | InventoryTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutCreatedByInput | InventoryTransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutCreatedByInput | InventoryTransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InventoryTransactionCreateManyCreatedByInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutCreatedByInput | InventoryTransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutCreatedByInput | InventoryTransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type StaffShiftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StaffShiftCreateWithoutUserInput, StaffShiftUncheckedCreateWithoutUserInput> | StaffShiftCreateWithoutUserInput[] | StaffShiftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StaffShiftCreateOrConnectWithoutUserInput | StaffShiftCreateOrConnectWithoutUserInput[]
    upsert?: StaffShiftUpsertWithWhereUniqueWithoutUserInput | StaffShiftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StaffShiftCreateManyUserInputEnvelope
    set?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    disconnect?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    delete?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    connect?: StaffShiftWhereUniqueInput | StaffShiftWhereUniqueInput[]
    update?: StaffShiftUpdateWithWhereUniqueWithoutUserInput | StaffShiftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StaffShiftUpdateManyWithWhereWithoutUserInput | StaffShiftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StaffShiftScalarWhereInput | StaffShiftScalarWhereInput[]
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<InventoryTransactionCreateWithoutCreatedByInput, InventoryTransactionUncheckedCreateWithoutCreatedByInput> | InventoryTransactionCreateWithoutCreatedByInput[] | InventoryTransactionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: InventoryTransactionCreateOrConnectWithoutCreatedByInput | InventoryTransactionCreateOrConnectWithoutCreatedByInput[]
    upsert?: InventoryTransactionUpsertWithWhereUniqueWithoutCreatedByInput | InventoryTransactionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: InventoryTransactionCreateManyCreatedByInputEnvelope
    set?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    disconnect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    delete?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    connect?: InventoryTransactionWhereUniqueInput | InventoryTransactionWhereUniqueInput[]
    update?: InventoryTransactionUpdateWithWhereUniqueWithoutCreatedByInput | InventoryTransactionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: InventoryTransactionUpdateManyWithWhereWithoutCreatedByInput | InventoryTransactionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<OrderCreateWithoutFeedbackInput, OrderUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: OrderCreateOrConnectWithoutFeedbackInput
    connect?: OrderWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<CustomerCreateWithoutFeedbackInput, CustomerUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFeedbackInput
    connect?: CustomerWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<OrderCreateWithoutFeedbackInput, OrderUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: OrderCreateOrConnectWithoutFeedbackInput
    upsert?: OrderUpsertWithoutFeedbackInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutFeedbackInput, OrderUpdateWithoutFeedbackInput>, OrderUncheckedUpdateWithoutFeedbackInput>
  }

  export type CustomerUpdateOneWithoutFeedbackNestedInput = {
    create?: XOR<CustomerCreateWithoutFeedbackInput, CustomerUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutFeedbackInput
    upsert?: CustomerUpsertWithoutFeedbackInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutFeedbackInput, CustomerUpdateWithoutFeedbackInput>, CustomerUncheckedUpdateWithoutFeedbackInput>
  }

  export type MenuItemCreateNestedOneWithoutInventoryTransactionsInput = {
    create?: XOR<MenuItemCreateWithoutInventoryTransactionsInput, MenuItemUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutInventoryTransactionsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type AdminUserCreateNestedOneWithoutInventoryTransactionsInput = {
    create?: XOR<AdminUserCreateWithoutInventoryTransactionsInput, AdminUserUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutInventoryTransactionsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MenuItemUpdateOneRequiredWithoutInventoryTransactionsNestedInput = {
    create?: XOR<MenuItemCreateWithoutInventoryTransactionsInput, MenuItemUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutInventoryTransactionsInput
    upsert?: MenuItemUpsertWithoutInventoryTransactionsInput
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutInventoryTransactionsInput, MenuItemUpdateWithoutInventoryTransactionsInput>, MenuItemUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type AdminUserUpdateOneWithoutInventoryTransactionsNestedInput = {
    create?: XOR<AdminUserCreateWithoutInventoryTransactionsInput, AdminUserUncheckedCreateWithoutInventoryTransactionsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutInventoryTransactionsInput
    upsert?: AdminUserUpsertWithoutInventoryTransactionsInput
    disconnect?: AdminUserWhereInput | boolean
    delete?: AdminUserWhereInput | boolean
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutInventoryTransactionsInput, AdminUserUpdateWithoutInventoryTransactionsInput>, AdminUserUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type AdminUserCreateNestedOneWithoutShiftsInput = {
    create?: XOR<AdminUserCreateWithoutShiftsInput, AdminUserUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutShiftsInput
    connect?: AdminUserWhereUniqueInput
  }

  export type AdminUserUpdateOneRequiredWithoutShiftsNestedInput = {
    create?: XOR<AdminUserCreateWithoutShiftsInput, AdminUserUncheckedCreateWithoutShiftsInput>
    connectOrCreate?: AdminUserCreateOrConnectWithoutShiftsInput
    upsert?: AdminUserUpsertWithoutShiftsInput
    connect?: AdminUserWhereUniqueInput
    update?: XOR<XOR<AdminUserUpdateToOneWithWhereWithoutShiftsInput, AdminUserUpdateWithoutShiftsInput>, AdminUserUncheckedUpdateWithoutShiftsInput>
  }

  export type CustomerCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<CustomerCreateWithoutRecommendationsInput, CustomerUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRecommendationsInput
    connect?: CustomerWhereUniqueInput
  }

  export type MenuItemCreateNestedOneWithoutRecommendationsInput = {
    create?: XOR<MenuItemCreateWithoutRecommendationsInput, MenuItemUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutRecommendationsInput
    connect?: MenuItemWhereUniqueInput
  }

  export type EnumRecommendationSourceFieldUpdateOperationsInput = {
    set?: $Enums.RecommendationSource
  }

  export type CustomerUpdateOneWithoutRecommendationsNestedInput = {
    create?: XOR<CustomerCreateWithoutRecommendationsInput, CustomerUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutRecommendationsInput
    upsert?: CustomerUpsertWithoutRecommendationsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutRecommendationsInput, CustomerUpdateWithoutRecommendationsInput>, CustomerUncheckedUpdateWithoutRecommendationsInput>
  }

  export type MenuItemUpdateOneWithoutRecommendationsNestedInput = {
    create?: XOR<MenuItemCreateWithoutRecommendationsInput, MenuItemUncheckedCreateWithoutRecommendationsInput>
    connectOrCreate?: MenuItemCreateOrConnectWithoutRecommendationsInput
    upsert?: MenuItemUpsertWithoutRecommendationsInput
    disconnect?: MenuItemWhereInput | boolean
    delete?: MenuItemWhereInput | boolean
    connect?: MenuItemWhereUniqueInput
    update?: XOR<XOR<MenuItemUpdateToOneWithWhereWithoutRecommendationsInput, MenuItemUpdateWithoutRecommendationsInput>, MenuItemUncheckedUpdateWithoutRecommendationsInput>
  }

  export type OrderCreateNestedOneWithoutKitchenQueueInput = {
    create?: XOR<OrderCreateWithoutKitchenQueueInput, OrderUncheckedCreateWithoutKitchenQueueInput>
    connectOrCreate?: OrderCreateOrConnectWithoutKitchenQueueInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutKitchenQueueNestedInput = {
    create?: XOR<OrderCreateWithoutKitchenQueueInput, OrderUncheckedCreateWithoutKitchenQueueInput>
    connectOrCreate?: OrderCreateOrConnectWithoutKitchenQueueInput
    upsert?: OrderUpsertWithoutKitchenQueueInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutKitchenQueueInput, OrderUpdateWithoutKitchenQueueInput>, OrderUncheckedUpdateWithoutKitchenQueueInput>
  }

  export type OrderCreateNestedOneWithoutBarQueueInput = {
    create?: XOR<OrderCreateWithoutBarQueueInput, OrderUncheckedCreateWithoutBarQueueInput>
    connectOrCreate?: OrderCreateOrConnectWithoutBarQueueInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutBarQueueNestedInput = {
    create?: XOR<OrderCreateWithoutBarQueueInput, OrderUncheckedCreateWithoutBarQueueInput>
    connectOrCreate?: OrderCreateOrConnectWithoutBarQueueInput
    upsert?: OrderUpsertWithoutBarQueueInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutBarQueueInput, OrderUpdateWithoutBarQueueInput>, OrderUncheckedUpdateWithoutBarQueueInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumQueueTargetFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueTarget | EnumQueueTargetFieldRefInput<$PrismaModel>
    in?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueTargetFilter<$PrismaModel> | $Enums.QueueTarget
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumQueueTargetWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.QueueTarget | EnumQueueTargetFieldRefInput<$PrismaModel>
    in?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    notIn?: $Enums.QueueTarget[] | ListEnumQueueTargetFieldRefInput<$PrismaModel>
    not?: NestedEnumQueueTargetWithAggregatesFilter<$PrismaModel> | $Enums.QueueTarget
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumQueueTargetFilter<$PrismaModel>
    _max?: NestedEnumQueueTargetFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
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

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecommendationSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationSource | EnumRecommendationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationSourceFilter<$PrismaModel> | $Enums.RecommendationSource
  }

  export type NestedEnumRecommendationSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationSource | EnumRecommendationSourceFieldRefInput<$PrismaModel>
    in?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.RecommendationSource[] | ListEnumRecommendationSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumRecommendationSourceWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecommendationSourceFilter<$PrismaModel>
    _max?: NestedEnumRecommendationSourceFilter<$PrismaModel>
  }

  export type OrderCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueUncheckedCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueUncheckedCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutCustomerInput = {
    id?: string
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
    menuItem?: MenuItemCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutCustomerInput = {
    id?: string
    menuItemId?: string | null
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type RecommendationCreateOrConnectWithoutCustomerInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutCustomerInput, RecommendationUncheckedCreateWithoutCustomerInput>
  }

  export type RecommendationCreateManyCustomerInputEnvelope = {
    data: RecommendationCreateManyCustomerInput | RecommendationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerFeedbackCreateWithoutCustomerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutFeedbackInput
  }

  export type CustomerFeedbackUncheckedCreateWithoutCustomerInput = {
    id?: string
    orderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CustomerFeedbackCreateOrConnectWithoutCustomerInput = {
    where: CustomerFeedbackWhereUniqueInput
    create: XOR<CustomerFeedbackCreateWithoutCustomerInput, CustomerFeedbackUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerFeedbackCreateManyCustomerInputEnvelope = {
    data: CustomerFeedbackCreateManyCustomerInput | CustomerFeedbackCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    tableNumber?: StringFilter<"Order"> | string
    notes?: StringNullableFilter<"Order"> | string | null
    totalPrice?: FloatFilter<"Order"> | number
    tax?: FloatFilter<"Order"> | number
    discount?: FloatFilter<"Order"> | number
    finalPrice?: FloatFilter<"Order"> | number
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    isPaid?: BoolFilter<"Order"> | boolean
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentStatus?: StringFilter<"Order"> | string
    paymentGateway?: StringNullableFilter<"Order"> | string | null
    gatewayOrderId?: StringNullableFilter<"Order"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Order"> | string | null
    cancelUntil?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelledAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    refundStatus?: StringFilter<"Order"> | string
    refundDeniedReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type RecommendationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutCustomerInput, RecommendationUncheckedUpdateWithoutCustomerInput>
    create: XOR<RecommendationCreateWithoutCustomerInput, RecommendationUncheckedCreateWithoutCustomerInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutCustomerInput, RecommendationUncheckedUpdateWithoutCustomerInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutCustomerInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type RecommendationScalarWhereInput = {
    AND?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    OR?: RecommendationScalarWhereInput[]
    NOT?: RecommendationScalarWhereInput | RecommendationScalarWhereInput[]
    id?: StringFilter<"Recommendation"> | string
    customerId?: StringNullableFilter<"Recommendation"> | string | null
    menuItemId?: StringNullableFilter<"Recommendation"> | string | null
    source?: EnumRecommendationSourceFilter<"Recommendation"> | $Enums.RecommendationSource
    reason?: StringFilter<"Recommendation"> | string
    shownAt?: DateTimeFilter<"Recommendation"> | Date | string
    acceptedAt?: DateTimeNullableFilter<"Recommendation"> | Date | string | null
  }

  export type CustomerFeedbackUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerFeedbackWhereUniqueInput
    update: XOR<CustomerFeedbackUpdateWithoutCustomerInput, CustomerFeedbackUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerFeedbackCreateWithoutCustomerInput, CustomerFeedbackUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerFeedbackUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerFeedbackWhereUniqueInput
    data: XOR<CustomerFeedbackUpdateWithoutCustomerInput, CustomerFeedbackUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerFeedbackUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerFeedbackScalarWhereInput
    data: XOR<CustomerFeedbackUpdateManyMutationInput, CustomerFeedbackUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerFeedbackScalarWhereInput = {
    AND?: CustomerFeedbackScalarWhereInput | CustomerFeedbackScalarWhereInput[]
    OR?: CustomerFeedbackScalarWhereInput[]
    NOT?: CustomerFeedbackScalarWhereInput | CustomerFeedbackScalarWhereInput[]
    id?: StringFilter<"CustomerFeedback"> | string
    orderId?: StringFilter<"CustomerFeedback"> | string
    customerId?: StringNullableFilter<"CustomerFeedback"> | string | null
    rating?: IntFilter<"CustomerFeedback"> | number
    comment?: StringNullableFilter<"CustomerFeedback"> | string | null
    createdAt?: DateTimeFilter<"CustomerFeedback"> | Date | string
  }

  export type MenuItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    recommendations?: RecommendationCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemCreateManyCategoryInputEnvelope = {
    data: MenuItemCreateManyCategoryInput | MenuItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type MenuItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    update: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<MenuItemCreateWithoutCategoryInput, MenuItemUncheckedCreateWithoutCategoryInput>
  }

  export type MenuItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: MenuItemWhereUniqueInput
    data: XOR<MenuItemUpdateWithoutCategoryInput, MenuItemUncheckedUpdateWithoutCategoryInput>
  }

  export type MenuItemUpdateManyWithWhereWithoutCategoryInput = {
    where: MenuItemScalarWhereInput
    data: XOR<MenuItemUpdateManyMutationInput, MenuItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type MenuItemScalarWhereInput = {
    AND?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    OR?: MenuItemScalarWhereInput[]
    NOT?: MenuItemScalarWhereInput | MenuItemScalarWhereInput[]
    id?: StringFilter<"MenuItem"> | string
    name?: StringFilter<"MenuItem"> | string
    description?: StringNullableFilter<"MenuItem"> | string | null
    price?: FloatFilter<"MenuItem"> | number
    imageUrl?: StringNullableFilter<"MenuItem"> | string | null
    isVeg?: BoolFilter<"MenuItem"> | boolean
    isAvailable?: BoolFilter<"MenuItem"> | boolean
    trackStock?: BoolFilter<"MenuItem"> | boolean
    stockQuantity?: IntNullableFilter<"MenuItem"> | number | null
    lowStockAt?: IntFilter<"MenuItem"> | number
    categoryId?: StringFilter<"MenuItem"> | string
    addOns?: JsonNullableFilter<"MenuItem">
    targetQueue?: EnumQueueTargetFilter<"MenuItem"> | $Enums.QueueTarget
    createdAt?: DateTimeFilter<"MenuItem"> | Date | string
    updatedAt?: DateTimeFilter<"MenuItem"> | Date | string
  }

  export type MenuCategoryCreateWithoutItemsInput = {
    id?: string
    name: string
    icon: string
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    icon: string
    sortOrder?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCategoryCreateOrConnectWithoutItemsInput = {
    where: MenuCategoryWhereUniqueInput
    create: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
  }

  export type OrderItemCreateWithoutMenuItemInput = {
    id?: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutItemsInput
  }

  export type OrderItemUncheckedCreateWithoutMenuItemInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemCreateManyMenuItemInputEnvelope = {
    data: OrderItemCreateManyMenuItemInput | OrderItemCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type RecommendationCreateWithoutMenuItemInput = {
    id?: string
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
    customer?: CustomerCreateNestedOneWithoutRecommendationsInput
  }

  export type RecommendationUncheckedCreateWithoutMenuItemInput = {
    id?: string
    customerId?: string | null
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type RecommendationCreateOrConnectWithoutMenuItemInput = {
    where: RecommendationWhereUniqueInput
    create: XOR<RecommendationCreateWithoutMenuItemInput, RecommendationUncheckedCreateWithoutMenuItemInput>
  }

  export type RecommendationCreateManyMenuItemInputEnvelope = {
    data: RecommendationCreateManyMenuItemInput | RecommendationCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type InventoryTransactionCreateWithoutMenuItemInput = {
    id?: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdAt?: Date | string
    createdBy?: AdminUserCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateWithoutMenuItemInput = {
    id?: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type InventoryTransactionCreateOrConnectWithoutMenuItemInput = {
    where: InventoryTransactionWhereUniqueInput
    create: XOR<InventoryTransactionCreateWithoutMenuItemInput, InventoryTransactionUncheckedCreateWithoutMenuItemInput>
  }

  export type InventoryTransactionCreateManyMenuItemInputEnvelope = {
    data: InventoryTransactionCreateManyMenuItemInput | InventoryTransactionCreateManyMenuItemInput[]
    skipDuplicates?: boolean
  }

  export type MenuCategoryUpsertWithoutItemsInput = {
    update: XOR<MenuCategoryUpdateWithoutItemsInput, MenuCategoryUncheckedUpdateWithoutItemsInput>
    create: XOR<MenuCategoryCreateWithoutItemsInput, MenuCategoryUncheckedCreateWithoutItemsInput>
    where?: MenuCategoryWhereInput
  }

  export type MenuCategoryUpdateToOneWithWhereWithoutItemsInput = {
    where?: MenuCategoryWhereInput
    data: XOR<MenuCategoryUpdateWithoutItemsInput, MenuCategoryUncheckedUpdateWithoutItemsInput>
  }

  export type MenuCategoryUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCategoryUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    sortOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
    create: XOR<OrderItemCreateWithoutMenuItemInput, OrderItemUncheckedCreateWithoutMenuItemInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMenuItemInput, OrderItemUncheckedUpdateWithoutMenuItemInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMenuItemInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    menuItemId?: StringFilter<"OrderItem"> | string
    quantity?: IntFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    notes?: StringNullableFilter<"OrderItem"> | string | null
    addOnsSelected?: JsonNullableFilter<"OrderItem">
    status?: EnumOrderStatusFilter<"OrderItem"> | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFilter<"OrderItem"> | $Enums.QueueTarget
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type RecommendationUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: RecommendationWhereUniqueInput
    update: XOR<RecommendationUpdateWithoutMenuItemInput, RecommendationUncheckedUpdateWithoutMenuItemInput>
    create: XOR<RecommendationCreateWithoutMenuItemInput, RecommendationUncheckedCreateWithoutMenuItemInput>
  }

  export type RecommendationUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: RecommendationWhereUniqueInput
    data: XOR<RecommendationUpdateWithoutMenuItemInput, RecommendationUncheckedUpdateWithoutMenuItemInput>
  }

  export type RecommendationUpdateManyWithWhereWithoutMenuItemInput = {
    where: RecommendationScalarWhereInput
    data: XOR<RecommendationUpdateManyMutationInput, RecommendationUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type InventoryTransactionUpsertWithWhereUniqueWithoutMenuItemInput = {
    where: InventoryTransactionWhereUniqueInput
    update: XOR<InventoryTransactionUpdateWithoutMenuItemInput, InventoryTransactionUncheckedUpdateWithoutMenuItemInput>
    create: XOR<InventoryTransactionCreateWithoutMenuItemInput, InventoryTransactionUncheckedCreateWithoutMenuItemInput>
  }

  export type InventoryTransactionUpdateWithWhereUniqueWithoutMenuItemInput = {
    where: InventoryTransactionWhereUniqueInput
    data: XOR<InventoryTransactionUpdateWithoutMenuItemInput, InventoryTransactionUncheckedUpdateWithoutMenuItemInput>
  }

  export type InventoryTransactionUpdateManyWithWhereWithoutMenuItemInput = {
    where: InventoryTransactionScalarWhereInput
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyWithoutMenuItemInput>
  }

  export type InventoryTransactionScalarWhereInput = {
    AND?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    OR?: InventoryTransactionScalarWhereInput[]
    NOT?: InventoryTransactionScalarWhereInput | InventoryTransactionScalarWhereInput[]
    id?: StringFilter<"InventoryTransaction"> | string
    menuItemId?: StringFilter<"InventoryTransaction"> | string
    type?: StringFilter<"InventoryTransaction"> | string
    quantity?: IntFilter<"InventoryTransaction"> | number
    note?: StringNullableFilter<"InventoryTransaction"> | string | null
    unitCost?: FloatNullableFilter<"InventoryTransaction"> | number | null
    createdById?: StringNullableFilter<"InventoryTransaction"> | string | null
    createdAt?: DateTimeFilter<"InventoryTransaction"> | Date | string
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: RecommendationCreateNestedManyWithoutCustomerInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCustomerInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    menuItem: MenuItemCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    menuItemId: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    gateway: string
    merchantOrderId: string
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    amount: number
    status?: string
    method?: string | null
    redirectUrl?: string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    gateway: string
    merchantOrderId: string
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    amount: number
    status?: string
    method?: string | null
    redirectUrl?: string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateManyOrderInputEnvelope = {
    data: PaymentCreateManyOrderInput | PaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type KitchenQueueCreateWithoutOrderInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenQueueUncheckedCreateWithoutOrderInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenQueueCreateOrConnectWithoutOrderInput = {
    where: KitchenQueueWhereUniqueInput
    create: XOR<KitchenQueueCreateWithoutOrderInput, KitchenQueueUncheckedCreateWithoutOrderInput>
  }

  export type KitchenQueueCreateManyOrderInputEnvelope = {
    data: KitchenQueueCreateManyOrderInput | KitchenQueueCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type BarQueueCreateWithoutOrderInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarQueueUncheckedCreateWithoutOrderInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarQueueCreateOrConnectWithoutOrderInput = {
    where: BarQueueWhereUniqueInput
    create: XOR<BarQueueCreateWithoutOrderInput, BarQueueUncheckedCreateWithoutOrderInput>
  }

  export type BarQueueCreateManyOrderInputEnvelope = {
    data: BarQueueCreateManyOrderInput | BarQueueCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerFeedbackCreateWithoutOrderInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    customer?: CustomerCreateNestedOneWithoutFeedbackInput
  }

  export type CustomerFeedbackUncheckedCreateWithoutOrderInput = {
    id?: string
    customerId?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type CustomerFeedbackCreateOrConnectWithoutOrderInput = {
    where: CustomerFeedbackWhereUniqueInput
    create: XOR<CustomerFeedbackCreateWithoutOrderInput, CustomerFeedbackUncheckedCreateWithoutOrderInput>
  }

  export type CustomerFeedbackCreateManyOrderInputEnvelope = {
    data: CustomerFeedbackCreateManyOrderInput | CustomerFeedbackCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUpdateManyWithoutCustomerNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUncheckedUpdateManyWithoutCustomerNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    gateway?: StringFilter<"Payment"> | string
    merchantOrderId?: StringFilter<"Payment"> | string
    gatewayOrderId?: StringNullableFilter<"Payment"> | string | null
    gatewayPaymentId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    redirectUrl?: StringNullableFilter<"Payment"> | string | null
    rawResponse?: JsonNullableFilter<"Payment">
    rawWebhook?: JsonNullableFilter<"Payment">
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type KitchenQueueUpsertWithWhereUniqueWithoutOrderInput = {
    where: KitchenQueueWhereUniqueInput
    update: XOR<KitchenQueueUpdateWithoutOrderInput, KitchenQueueUncheckedUpdateWithoutOrderInput>
    create: XOR<KitchenQueueCreateWithoutOrderInput, KitchenQueueUncheckedCreateWithoutOrderInput>
  }

  export type KitchenQueueUpdateWithWhereUniqueWithoutOrderInput = {
    where: KitchenQueueWhereUniqueInput
    data: XOR<KitchenQueueUpdateWithoutOrderInput, KitchenQueueUncheckedUpdateWithoutOrderInput>
  }

  export type KitchenQueueUpdateManyWithWhereWithoutOrderInput = {
    where: KitchenQueueScalarWhereInput
    data: XOR<KitchenQueueUpdateManyMutationInput, KitchenQueueUncheckedUpdateManyWithoutOrderInput>
  }

  export type KitchenQueueScalarWhereInput = {
    AND?: KitchenQueueScalarWhereInput | KitchenQueueScalarWhereInput[]
    OR?: KitchenQueueScalarWhereInput[]
    NOT?: KitchenQueueScalarWhereInput | KitchenQueueScalarWhereInput[]
    id?: StringFilter<"KitchenQueue"> | string
    orderId?: StringFilter<"KitchenQueue"> | string
    status?: EnumOrderStatusFilter<"KitchenQueue"> | $Enums.OrderStatus
    priority?: IntFilter<"KitchenQueue"> | number
    createdAt?: DateTimeFilter<"KitchenQueue"> | Date | string
    updatedAt?: DateTimeFilter<"KitchenQueue"> | Date | string
  }

  export type BarQueueUpsertWithWhereUniqueWithoutOrderInput = {
    where: BarQueueWhereUniqueInput
    update: XOR<BarQueueUpdateWithoutOrderInput, BarQueueUncheckedUpdateWithoutOrderInput>
    create: XOR<BarQueueCreateWithoutOrderInput, BarQueueUncheckedCreateWithoutOrderInput>
  }

  export type BarQueueUpdateWithWhereUniqueWithoutOrderInput = {
    where: BarQueueWhereUniqueInput
    data: XOR<BarQueueUpdateWithoutOrderInput, BarQueueUncheckedUpdateWithoutOrderInput>
  }

  export type BarQueueUpdateManyWithWhereWithoutOrderInput = {
    where: BarQueueScalarWhereInput
    data: XOR<BarQueueUpdateManyMutationInput, BarQueueUncheckedUpdateManyWithoutOrderInput>
  }

  export type BarQueueScalarWhereInput = {
    AND?: BarQueueScalarWhereInput | BarQueueScalarWhereInput[]
    OR?: BarQueueScalarWhereInput[]
    NOT?: BarQueueScalarWhereInput | BarQueueScalarWhereInput[]
    id?: StringFilter<"BarQueue"> | string
    orderId?: StringFilter<"BarQueue"> | string
    status?: EnumOrderStatusFilter<"BarQueue"> | $Enums.OrderStatus
    priority?: IntFilter<"BarQueue"> | number
    createdAt?: DateTimeFilter<"BarQueue"> | Date | string
    updatedAt?: DateTimeFilter<"BarQueue"> | Date | string
  }

  export type CustomerFeedbackUpsertWithWhereUniqueWithoutOrderInput = {
    where: CustomerFeedbackWhereUniqueInput
    update: XOR<CustomerFeedbackUpdateWithoutOrderInput, CustomerFeedbackUncheckedUpdateWithoutOrderInput>
    create: XOR<CustomerFeedbackCreateWithoutOrderInput, CustomerFeedbackUncheckedCreateWithoutOrderInput>
  }

  export type CustomerFeedbackUpdateWithWhereUniqueWithoutOrderInput = {
    where: CustomerFeedbackWhereUniqueInput
    data: XOR<CustomerFeedbackUpdateWithoutOrderInput, CustomerFeedbackUncheckedUpdateWithoutOrderInput>
  }

  export type CustomerFeedbackUpdateManyWithWhereWithoutOrderInput = {
    where: CustomerFeedbackScalarWhereInput
    data: XOR<CustomerFeedbackUpdateManyMutationInput, CustomerFeedbackUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutPaymentsInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentsInput = {
    id?: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueUncheckedCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueUncheckedCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderUpsertWithoutPaymentsInput = {
    update: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUncheckedUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUncheckedUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutItemsInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutItemsInput = {
    id?: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueUncheckedCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueUncheckedCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
  }

  export type MenuItemCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutItemsInput
    recommendations?: RecommendationCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    categoryId: string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutOrderItemsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutItemsInput = {
    update: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
    create: XOR<OrderCreateWithoutItemsInput, OrderUncheckedCreateWithoutItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutItemsInput, OrderUncheckedUpdateWithoutItemsInput>
  }

  export type OrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUncheckedUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUncheckedUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type MenuItemUpsertWithoutOrderItemsInput = {
    update: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuItemCreateWithoutOrderItemsInput, MenuItemUncheckedCreateWithoutOrderItemsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutOrderItemsInput, MenuItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuItemUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutItemsNestedInput
    recommendations?: RecommendationUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recommendations?: RecommendationUncheckedUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type StaffShiftCreateWithoutUserInput = {
    id?: string
    checkInAt?: Date | string
    checkOutAt?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffShiftUncheckedCreateWithoutUserInput = {
    id?: string
    checkInAt?: Date | string
    checkOutAt?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StaffShiftCreateOrConnectWithoutUserInput = {
    where: StaffShiftWhereUniqueInput
    create: XOR<StaffShiftCreateWithoutUserInput, StaffShiftUncheckedCreateWithoutUserInput>
  }

  export type StaffShiftCreateManyUserInputEnvelope = {
    data: StaffShiftCreateManyUserInput | StaffShiftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InventoryTransactionCreateWithoutCreatedByInput = {
    id?: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdAt?: Date | string
    menuItem: MenuItemCreateNestedOneWithoutInventoryTransactionsInput
  }

  export type InventoryTransactionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    menuItemId: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdAt?: Date | string
  }

  export type InventoryTransactionCreateOrConnectWithoutCreatedByInput = {
    where: InventoryTransactionWhereUniqueInput
    create: XOR<InventoryTransactionCreateWithoutCreatedByInput, InventoryTransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type InventoryTransactionCreateManyCreatedByInputEnvelope = {
    data: InventoryTransactionCreateManyCreatedByInput | InventoryTransactionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type StaffShiftUpsertWithWhereUniqueWithoutUserInput = {
    where: StaffShiftWhereUniqueInput
    update: XOR<StaffShiftUpdateWithoutUserInput, StaffShiftUncheckedUpdateWithoutUserInput>
    create: XOR<StaffShiftCreateWithoutUserInput, StaffShiftUncheckedCreateWithoutUserInput>
  }

  export type StaffShiftUpdateWithWhereUniqueWithoutUserInput = {
    where: StaffShiftWhereUniqueInput
    data: XOR<StaffShiftUpdateWithoutUserInput, StaffShiftUncheckedUpdateWithoutUserInput>
  }

  export type StaffShiftUpdateManyWithWhereWithoutUserInput = {
    where: StaffShiftScalarWhereInput
    data: XOR<StaffShiftUpdateManyMutationInput, StaffShiftUncheckedUpdateManyWithoutUserInput>
  }

  export type StaffShiftScalarWhereInput = {
    AND?: StaffShiftScalarWhereInput | StaffShiftScalarWhereInput[]
    OR?: StaffShiftScalarWhereInput[]
    NOT?: StaffShiftScalarWhereInput | StaffShiftScalarWhereInput[]
    id?: StringFilter<"StaffShift"> | string
    userId?: StringFilter<"StaffShift"> | string
    checkInAt?: DateTimeFilter<"StaffShift"> | Date | string
    checkOutAt?: DateTimeNullableFilter<"StaffShift"> | Date | string | null
    note?: StringNullableFilter<"StaffShift"> | string | null
    createdAt?: DateTimeFilter<"StaffShift"> | Date | string
    updatedAt?: DateTimeFilter<"StaffShift"> | Date | string
  }

  export type InventoryTransactionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: InventoryTransactionWhereUniqueInput
    update: XOR<InventoryTransactionUpdateWithoutCreatedByInput, InventoryTransactionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<InventoryTransactionCreateWithoutCreatedByInput, InventoryTransactionUncheckedCreateWithoutCreatedByInput>
  }

  export type InventoryTransactionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: InventoryTransactionWhereUniqueInput
    data: XOR<InventoryTransactionUpdateWithoutCreatedByInput, InventoryTransactionUncheckedUpdateWithoutCreatedByInput>
  }

  export type InventoryTransactionUpdateManyWithWhereWithoutCreatedByInput = {
    where: InventoryTransactionScalarWhereInput
    data: XOR<InventoryTransactionUpdateManyMutationInput, InventoryTransactionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type OrderCreateWithoutFeedbackInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutFeedbackInput = {
    id?: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueUncheckedCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutFeedbackInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFeedbackInput, OrderUncheckedCreateWithoutFeedbackInput>
  }

  export type CustomerCreateWithoutFeedbackInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    recommendations?: RecommendationCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFeedbackInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFeedbackInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFeedbackInput, CustomerUncheckedCreateWithoutFeedbackInput>
  }

  export type OrderUpsertWithoutFeedbackInput = {
    update: XOR<OrderUpdateWithoutFeedbackInput, OrderUncheckedUpdateWithoutFeedbackInput>
    create: XOR<OrderCreateWithoutFeedbackInput, OrderUncheckedCreateWithoutFeedbackInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutFeedbackInput, OrderUncheckedUpdateWithoutFeedbackInput>
  }

  export type OrderUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUncheckedUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type CustomerUpsertWithoutFeedbackInput = {
    update: XOR<CustomerUpdateWithoutFeedbackInput, CustomerUncheckedUpdateWithoutFeedbackInput>
    create: XOR<CustomerCreateWithoutFeedbackInput, CustomerUncheckedCreateWithoutFeedbackInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutFeedbackInput, CustomerUncheckedUpdateWithoutFeedbackInput>
  }

  export type CustomerUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    recommendations?: RecommendationUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFeedbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type MenuItemCreateWithoutInventoryTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    recommendations?: RecommendationCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutInventoryTransactionsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    categoryId: string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    recommendations?: RecommendationUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutInventoryTransactionsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutInventoryTransactionsInput, MenuItemUncheckedCreateWithoutInventoryTransactionsInput>
  }

  export type AdminUserCreateWithoutInventoryTransactionsInput = {
    id?: string
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: StaffShiftCreateNestedManyWithoutUserInput
  }

  export type AdminUserUncheckedCreateWithoutInventoryTransactionsInput = {
    id?: string
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shifts?: StaffShiftUncheckedCreateNestedManyWithoutUserInput
  }

  export type AdminUserCreateOrConnectWithoutInventoryTransactionsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutInventoryTransactionsInput, AdminUserUncheckedCreateWithoutInventoryTransactionsInput>
  }

  export type MenuItemUpsertWithoutInventoryTransactionsInput = {
    update: XOR<MenuItemUpdateWithoutInventoryTransactionsInput, MenuItemUncheckedUpdateWithoutInventoryTransactionsInput>
    create: XOR<MenuItemCreateWithoutInventoryTransactionsInput, MenuItemUncheckedCreateWithoutInventoryTransactionsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutInventoryTransactionsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutInventoryTransactionsInput, MenuItemUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type MenuItemUpdateWithoutInventoryTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    recommendations?: RecommendationUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutInventoryTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type AdminUserUpsertWithoutInventoryTransactionsInput = {
    update: XOR<AdminUserUpdateWithoutInventoryTransactionsInput, AdminUserUncheckedUpdateWithoutInventoryTransactionsInput>
    create: XOR<AdminUserCreateWithoutInventoryTransactionsInput, AdminUserUncheckedCreateWithoutInventoryTransactionsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutInventoryTransactionsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutInventoryTransactionsInput, AdminUserUncheckedUpdateWithoutInventoryTransactionsInput>
  }

  export type AdminUserUpdateWithoutInventoryTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: StaffShiftUpdateManyWithoutUserNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutInventoryTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shifts?: StaffShiftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AdminUserCreateWithoutShiftsInput = {
    id?: string
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserUncheckedCreateWithoutShiftsInput = {
    id?: string
    username: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUserCreateOrConnectWithoutShiftsInput = {
    where: AdminUserWhereUniqueInput
    create: XOR<AdminUserCreateWithoutShiftsInput, AdminUserUncheckedCreateWithoutShiftsInput>
  }

  export type AdminUserUpsertWithoutShiftsInput = {
    update: XOR<AdminUserUpdateWithoutShiftsInput, AdminUserUncheckedUpdateWithoutShiftsInput>
    create: XOR<AdminUserCreateWithoutShiftsInput, AdminUserUncheckedCreateWithoutShiftsInput>
    where?: AdminUserWhereInput
  }

  export type AdminUserUpdateToOneWithWhereWithoutShiftsInput = {
    where?: AdminUserWhereInput
    data: XOR<AdminUserUpdateWithoutShiftsInput, AdminUserUncheckedUpdateWithoutShiftsInput>
  }

  export type AdminUserUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUserUncheckedUpdateWithoutShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type CustomerCreateWithoutRecommendationsInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    mobile: string
    name?: string | null
    loyaltyPoints?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutRecommendationsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutRecommendationsInput, CustomerUncheckedCreateWithoutRecommendationsInput>
  }

  export type MenuItemCreateWithoutRecommendationsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    category: MenuCategoryCreateNestedOneWithoutItemsInput
    orderItems?: OrderItemCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemUncheckedCreateWithoutRecommendationsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    categoryId: string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMenuItemInput
    inventoryTransactions?: InventoryTransactionUncheckedCreateNestedManyWithoutMenuItemInput
  }

  export type MenuItemCreateOrConnectWithoutRecommendationsInput = {
    where: MenuItemWhereUniqueInput
    create: XOR<MenuItemCreateWithoutRecommendationsInput, MenuItemUncheckedCreateWithoutRecommendationsInput>
  }

  export type CustomerUpsertWithoutRecommendationsInput = {
    update: XOR<CustomerUpdateWithoutRecommendationsInput, CustomerUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<CustomerCreateWithoutRecommendationsInput, CustomerUncheckedCreateWithoutRecommendationsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutRecommendationsInput, CustomerUncheckedUpdateWithoutRecommendationsInput>
  }

  export type CustomerUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mobile?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    loyaltyPoints?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type MenuItemUpsertWithoutRecommendationsInput = {
    update: XOR<MenuItemUpdateWithoutRecommendationsInput, MenuItemUncheckedUpdateWithoutRecommendationsInput>
    create: XOR<MenuItemCreateWithoutRecommendationsInput, MenuItemUncheckedCreateWithoutRecommendationsInput>
    where?: MenuItemWhereInput
  }

  export type MenuItemUpdateToOneWithWhereWithoutRecommendationsInput = {
    where?: MenuItemWhereInput
    data: XOR<MenuItemUpdateWithoutRecommendationsInput, MenuItemUncheckedUpdateWithoutRecommendationsInput>
  }

  export type MenuItemUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: MenuCategoryUpdateOneRequiredWithoutItemsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutRecommendationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type OrderCreateWithoutKitchenQueueInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutKitchenQueueInput = {
    id?: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    barQueue?: BarQueueUncheckedCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutKitchenQueueInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutKitchenQueueInput, OrderUncheckedCreateWithoutKitchenQueueInput>
  }

  export type OrderUpsertWithoutKitchenQueueInput = {
    update: XOR<OrderUpdateWithoutKitchenQueueInput, OrderUncheckedUpdateWithoutKitchenQueueInput>
    create: XOR<OrderCreateWithoutKitchenQueueInput, OrderUncheckedCreateWithoutKitchenQueueInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutKitchenQueueInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutKitchenQueueInput, OrderUncheckedUpdateWithoutKitchenQueueInput>
  }

  export type OrderUpdateWithoutKitchenQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutKitchenQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUncheckedUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutBarQueueInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    items?: OrderItemCreateNestedManyWithoutOrderInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutBarQueueInput = {
    id?: string
    orderNumber: string
    customerId: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
    kitchenQueue?: KitchenQueueUncheckedCreateNestedManyWithoutOrderInput
    feedback?: CustomerFeedbackUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutBarQueueInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBarQueueInput, OrderUncheckedCreateWithoutBarQueueInput>
  }

  export type OrderUpsertWithoutBarQueueInput = {
    update: XOR<OrderUpdateWithoutBarQueueInput, OrderUncheckedUpdateWithoutBarQueueInput>
    create: XOR<OrderCreateWithoutBarQueueInput, OrderUncheckedCreateWithoutBarQueueInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutBarQueueInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutBarQueueInput, OrderUncheckedUpdateWithoutBarQueueInput>
  }

  export type OrderUpdateWithoutBarQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutBarQueueInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUncheckedUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyCustomerInput = {
    id?: string
    orderNumber: string
    tableNumber: string
    notes?: string | null
    totalPrice: number
    tax?: number
    discount?: number
    finalPrice: number
    status?: $Enums.OrderStatus
    isPaid?: boolean
    paidAt?: Date | string | null
    paymentMethod?: string | null
    paymentStatus?: string
    paymentGateway?: string | null
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    cancelUntil?: Date | string | null
    cancelledAt?: Date | string | null
    refundStatus?: string
    refundDeniedReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationCreateManyCustomerInput = {
    id?: string
    menuItemId?: string | null
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type CustomerFeedbackCreateManyCustomerInput = {
    id?: string
    orderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUpdateManyWithoutOrderNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
    kitchenQueue?: KitchenQueueUncheckedUpdateManyWithoutOrderNestedInput
    barQueue?: BarQueueUncheckedUpdateManyWithoutOrderNestedInput
    feedback?: CustomerFeedbackUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    tableNumber?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    discount?: FloatFieldUpdateOperationsInput | number
    finalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    isPaid?: BoolFieldUpdateOperationsInput | boolean
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentGateway?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    cancelUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refundStatus?: StringFieldUpdateOperationsInput | string
    refundDeniedReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    menuItem?: MenuItemUpdateOneWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CustomerFeedbackUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type CustomerFeedbackUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFeedbackUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuItemCreateManyCategoryInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    imageUrl?: string | null
    isVeg?: boolean
    isAvailable?: boolean
    trackStock?: boolean
    stockQuantity?: number | null
    lowStockAt?: number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUpdateManyWithoutMenuItemNestedInput
    recommendations?: RecommendationUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutMenuItemNestedInput
    recommendations?: RecommendationUncheckedUpdateManyWithoutMenuItemNestedInput
    inventoryTransactions?: InventoryTransactionUncheckedUpdateManyWithoutMenuItemNestedInput
  }

  export type MenuItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isVeg?: BoolFieldUpdateOperationsInput | boolean
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    trackStock?: BoolFieldUpdateOperationsInput | boolean
    stockQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    lowStockAt?: IntFieldUpdateOperationsInput | number
    addOns?: NullableJsonNullValueInput | InputJsonValue
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyMenuItemInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecommendationCreateManyMenuItemInput = {
    id?: string
    customerId?: string | null
    source: $Enums.RecommendationSource
    reason: string
    shownAt?: Date | string
    acceptedAt?: Date | string | null
  }

  export type InventoryTransactionCreateManyMenuItemInput = {
    id?: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdById?: string | null
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecommendationUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customer?: CustomerUpdateOneWithoutRecommendationsNestedInput
  }

  export type RecommendationUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecommendationUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: EnumRecommendationSourceFieldUpdateOperationsInput | $Enums.RecommendationSource
    reason?: StringFieldUpdateOperationsInput | string
    shownAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventoryTransactionUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUserUpdateOneWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutMenuItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    menuItemId: string
    quantity: number
    unitPrice: number
    notes?: string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.OrderStatus
    targetQueue?: $Enums.QueueTarget
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyOrderInput = {
    id?: string
    gateway: string
    merchantOrderId: string
    gatewayOrderId?: string | null
    gatewayPaymentId?: string | null
    amount: number
    status?: string
    method?: string | null
    redirectUrl?: string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KitchenQueueCreateManyOrderInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarQueueCreateManyOrderInput = {
    id?: string
    status?: $Enums.OrderStatus
    priority?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerFeedbackCreateManyOrderInput = {
    id?: string
    customerId?: string | null
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: MenuItemUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    addOnsSelected?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    targetQueue?: EnumQueueTargetFieldUpdateOperationsInput | $Enums.QueueTarget
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gateway?: StringFieldUpdateOperationsInput | string
    merchantOrderId?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gateway?: StringFieldUpdateOperationsInput | string
    merchantOrderId?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gateway?: StringFieldUpdateOperationsInput | string
    merchantOrderId?: StringFieldUpdateOperationsInput | string
    gatewayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    rawResponse?: NullableJsonNullValueInput | InputJsonValue
    rawWebhook?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenQueueUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenQueueUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KitchenQueueUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarQueueUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarQueueUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarQueueUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    priority?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFeedbackUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutFeedbackNestedInput
  }

  export type CustomerFeedbackUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerFeedbackUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffShiftCreateManyUserInput = {
    id?: string
    checkInAt?: Date | string
    checkOutAt?: Date | string | null
    note?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryTransactionCreateManyCreatedByInput = {
    id?: string
    menuItemId: string
    type: string
    quantity: number
    note?: string | null
    unitCost?: number | null
    createdAt?: Date | string
  }

  export type StaffShiftUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffShiftUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaffShiftUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkInAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menuItem?: MenuItemUpdateOneRequiredWithoutInventoryTransactionsNestedInput
  }

  export type InventoryTransactionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryTransactionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuItemId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    unitCost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCategoryCountOutputTypeDefaultArgs instead
     */
    export type MenuCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuItemCountOutputTypeDefaultArgs instead
     */
    export type MenuItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderCountOutputTypeDefaultArgs instead
     */
    export type OrderCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminUserCountOutputTypeDefaultArgs instead
     */
    export type AdminUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCategoryDefaultArgs instead
     */
    export type MenuCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuItemDefaultArgs instead
     */
    export type MenuItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDefaultArgs instead
     */
    export type OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderItemDefaultArgs instead
     */
    export type OrderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminUserDefaultArgs instead
     */
    export type AdminUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppSettingDefaultArgs instead
     */
    export type AppSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppSettingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerFeedbackDefaultArgs instead
     */
    export type CustomerFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerFeedbackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryTransactionDefaultArgs instead
     */
    export type InventoryTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryTransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StaffShiftDefaultArgs instead
     */
    export type StaffShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StaffShiftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecommendationDefaultArgs instead
     */
    export type RecommendationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecommendationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KitchenQueueDefaultArgs instead
     */
    export type KitchenQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KitchenQueueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BarQueueDefaultArgs instead
     */
    export type BarQueueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BarQueueDefaultArgs<ExtArgs>

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