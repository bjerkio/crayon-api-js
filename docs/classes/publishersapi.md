[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / PublishersApi

# Class: PublishersApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`PublishersApi`**

## Table of contents

### Constructors

- [constructor](PublishersApi.md#constructor)

### Properties

- [configuration](PublishersApi.md#configuration)

### Methods

- [apiV1PublishersGet](PublishersApi.md#apiv1publishersget)
- [apiV1PublishersGetRaw](PublishersApi.md#apiv1publishersgetraw)
- [apiV1PublishersIdGet](PublishersApi.md#apiv1publishersidget)
- [apiV1PublishersIdGetRaw](PublishersApi.md#apiv1publishersidgetraw)
- [request](PublishersApi.md#request)
- [withMiddleware](PublishersApi.md#withmiddleware)
- [withPostMiddleware](PublishersApi.md#withpostmiddleware)
- [withPreMiddleware](PublishersApi.md#withpremiddleware)

## Constructors

### constructor

• **new PublishersApi**(`configuration?`)

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

### apiV1PublishersGet

▸ **apiV1PublishersGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Publisher`](../interfaces/Publisher.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1PublishersGetRequest`](../interfaces/ApiV1PublishersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Publisher`](../interfaces/Publisher.md)[]\>

#### Defined in

[src/apis/PublishersApi.ts:86](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/PublishersApi.ts#L86)

___

### apiV1PublishersGetRaw

▸ **apiV1PublishersGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Publisher`](../interfaces/Publisher.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1PublishersGetRequest`](../interfaces/ApiV1PublishersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Publisher`](../interfaces/Publisher.md)[]\>\>

#### Defined in

[src/apis/PublishersApi.ts:45](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/PublishersApi.ts#L45)

___

### apiV1PublishersIdGet

▸ **apiV1PublishersIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Publisher`](../interfaces/Publisher.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1PublishersIdGetRequest`](../interfaces/ApiV1PublishersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Publisher`](../interfaces/Publisher.md)\>

#### Defined in

[src/apis/PublishersApi.ts:118](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/PublishersApi.ts#L118)

___

### apiV1PublishersIdGetRaw

▸ **apiV1PublishersIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Publisher`](../interfaces/Publisher.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1PublishersIdGetRequest`](../interfaces/ApiV1PublishersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Publisher`](../interfaces/Publisher.md)\>\>

#### Defined in

[src/apis/PublishersApi.ts:93](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/PublishersApi.ts#L93)

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
