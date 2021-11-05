[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / Middleware

# Interface: Middleware

## Table of contents

### Methods

- [post](Middleware.md#post)
- [pre](Middleware.md#pre)

## Methods

### post

▸ `Optional` **post**(`context`): `Promise`<`void` \| `Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`ResponseContext`](ResponseContext.md) |

#### Returns

`Promise`<`void` \| `Response`\>

#### Defined in

[src/runtime.ts:279](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L279)

___

### pre

▸ `Optional` **pre**(`context`): `Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestContext`](RequestContext.md) |

#### Returns

`Promise`<`void` \| [`FetchParams`](FetchParams.md)\>

#### Defined in

[src/runtime.ts:278](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L278)
