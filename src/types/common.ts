export type TypedOmit<TObj, TKey extends keyof TObj> = Omit<TObj, TKey>;
export type ExcludeFromUnion<
  TUnion,
  TExcluded extends TUnion,
> = TUnion extends TExcluded ? never : TUnion;
export type TypedPick<TObj, TKey extends keyof TObj> = Pick<TObj, TKey>;
// eslint-disable-next-line @typescript-eslint/ban-types
export type OtherStringOr<T extends string> = T | (string & {});
export type Defined<T> = T extends undefined
  ? never
  : T extends null
    ? never
    : T;
export type ValueOf<T> = T[keyof T];
export type MergeWinLeft<TLeftObj, TRightObj> = TLeftObj & {
  [key in Exclude<keyof TRightObj, keyof TLeftObj>]: TRightObj[key];
};
// eslint-disable-next-line @typescript-eslint/ban-types
export type Prettify<TObj> = { [Key in keyof TObj]: TObj[Key] } & {};
export type DeepPrettify<TObj> = {
  [Key in keyof TObj]: TObj[Key] extends object
    ? DeepPrettify<TObj[Key]>
    : TObj extends object
      ? Prettify<TObj>
      : TObj[Key];
};
export type MakeObjValuesStrings<TObj> = {
  [Key in keyof TObj]: TObj extends object
    ? MakeObjValuesStrings<TObj[Key]>
    : string;
};
export type EitherSync<T> =
  | {
      error: Error;
      result: undefined;
    }
  | {
      result: T;
      error: undefined;
    };
/**
 * Either type represents a data structure that encapsulates a successful result or an Error.
 * It wraps the result of a Promise in an object, making it easier to handle errors by returning
 * an object that either contains a 'result' value of type T (if successful), or an 'error' of type Error.
 *
 * @template T The type of the result value.
 */
export type Either<T> =
  | Promise<{
      error: Error;
      result: undefined;
    }>
  | Promise<{
      result: T;
      error: undefined;
    }>;

export type PartialBy<
  T extends Record<string, unknown>,
  K extends keyof T,
> = Prettify<TypedOmit<T, K> & Partial<Pick<T, K>>>;
