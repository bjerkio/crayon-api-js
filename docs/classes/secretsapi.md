[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / SecretsApi

# Class: SecretsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`SecretsApi`**

## Table of contents

### Constructors

- [constructor](SecretsApi.md#constructor)

### Properties

- [configuration](SecretsApi.md#configuration)

### Methods

- [apiV1SecretsDelete](SecretsApi.md#apiv1secretsdelete)
- [apiV1SecretsDeleteRaw](SecretsApi.md#apiv1secretsdeleteraw)
- [apiV1SecretsPost](SecretsApi.md#apiv1secretspost)
- [apiV1SecretsPostRaw](SecretsApi.md#apiv1secretspostraw)
- [request](SecretsApi.md#request)
- [withMiddleware](SecretsApi.md#withmiddleware)
- [withPostMiddleware](SecretsApi.md#withpostmiddleware)
- [withPreMiddleware](SecretsApi.md#withpremiddleware)

## Constructors

### constructor

• **new SecretsApi**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Inherited from

[BaseAPI](BaseAPI.md).[constructor](BaseAPI.md#constructor)

#### Defined in

[src/runtime.ts:28](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L28)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

#### Inherited from

[BaseAPI](BaseAPI.md).[configuration](BaseAPI.md#configuration)

## Methods

### apiV1SecretsDelete

▸ **apiV1SecretsDelete**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SecretsDeleteRequest`](../interfaces/ApiV1SecretsDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/SecretsApi.ts:68](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SecretsApi.ts#L68)

___

### apiV1SecretsDeleteRaw

▸ **apiV1SecretsDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SecretsDeleteRequest`](../interfaces/ApiV1SecretsDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/SecretsApi.ts:39](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SecretsApi.ts#L39)

___

### apiV1SecretsPost

▸ **apiV1SecretsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`Secret`](../interfaces/Secret.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SecretsPostRequest`](../interfaces/ApiV1SecretsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Secret`](../interfaces/Secret.md)\>

#### Defined in

[src/apis/SecretsApi.ts:99](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SecretsApi.ts#L99)

___

### apiV1SecretsPostRaw

▸ **apiV1SecretsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Secret`](../interfaces/Secret.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1SecretsPostRequest`](../interfaces/ApiV1SecretsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Secret`](../interfaces/Secret.md)\>\>

#### Defined in

[src/apis/SecretsApi.ts:75](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/SecretsApi.ts#L75)

___

### request

▸ `Protected` **request**(`context`, `initOverrides?`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Response`\>

#### Inherited from

[BaseAPI](BaseAPI.md).[request](BaseAPI.md#request)

#### Defined in

[src/runtime.ts:48](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L48)

___

### withMiddleware

▸ **withMiddleware**<`T`\>(...`middlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...middlewares` | [`Middleware`](../interfaces/Middleware.md)[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withMiddleware](BaseAPI.md#withmiddleware)

#### Defined in

[src/runtime.ts:32](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L32)

___

### withPostMiddleware

▸ **withPostMiddleware**<`T`\>(...`postMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...postMiddlewares` | (`context`: [`ResponseContext`](../interfaces/ResponseContext.md)) => `Promise`<`void` \| `Response`\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPostMiddleware](BaseAPI.md#withpostmiddleware)

#### Defined in

[src/runtime.ts:43](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L43)

___

### withPreMiddleware

▸ **withPreMiddleware**<`T`\>(...`preMiddlewares`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...preMiddlewares` | (`context`: [`RequestContext`](../interfaces/RequestContext.md)) => `Promise`<`void` \| [`FetchParams`](../interfaces/FetchParams.md)\>[] |

#### Returns

`T`

#### Inherited from

[BaseAPI](BaseAPI.md).[withPreMiddleware](BaseAPI.md#withpremiddleware)

#### Defined in

[src/runtime.ts:38](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L38)
