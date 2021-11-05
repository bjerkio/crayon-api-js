[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / JSONApiResponse

# Class: JSONApiResponse<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](JSONApiResponse.md#constructor)

### Properties

- [raw](JSONApiResponse.md#raw)

### Methods

- [value](JSONApiResponse.md#value)

## Constructors

### constructor

• **new JSONApiResponse**<`T`\>(`raw`, `transformer?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `raw` | `Response` |
| `transformer` | [`ResponseTransformer`](../interfaces/ResponseTransformer.md)<`T`\> |

#### Defined in

[src/runtime.ts:292](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L292)

## Properties

### raw

• **raw**: `Response`

## Methods

### value

▸ **value**(): `Promise`<`T`\>

#### Returns

`Promise`<`T`\>

#### Defined in

[src/runtime.ts:294](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L294)
