/* tslint:disable */
/* eslint-disable */
export function main(): void;
export class BinaryImageConverter {
  private constructor();
  free(): void;
  static new_with_string(params: string): BinaryImageConverter;
  init(): void;
  tick(): boolean;
  progress(): number;
}
export class ColorImageConverter {
  private constructor();
  free(): void;
  static new_with_string(params: string): ColorImageConverter;
  init(): void;
  tick(): boolean;
  progress(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_binaryimageconverter_free: (a: number, b: number) => void;
  readonly binaryimageconverter_new_with_string: (a: number, b: number) => number;
  readonly binaryimageconverter_init: (a: number) => void;
  readonly binaryimageconverter_tick: (a: number) => number;
  readonly binaryimageconverter_progress: (a: number) => number;
  readonly __wbg_colorimageconverter_free: (a: number, b: number) => void;
  readonly colorimageconverter_new_with_string: (a: number, b: number) => number;
  readonly colorimageconverter_init: (a: number) => void;
  readonly colorimageconverter_tick: (a: number) => number;
  readonly colorimageconverter_progress: (a: number) => number;
  readonly main: () => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
