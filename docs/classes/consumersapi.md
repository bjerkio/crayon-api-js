[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ConsumersApi

# Class: ConsumersApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ConsumersApi`**

## Table of contents

### Constructors

- [constructor](ConsumersApi.md#constructor)

### Properties

- [configuration](ConsumersApi.md#configuration)

### Methods

- [apiV1ConsumersGet](ConsumersApi.md#apiv1consumersget)
- [apiV1ConsumersGetRaw](ConsumersApi.md#apiv1consumersgetraw)
- [apiV1ConsumersIdDelete](ConsumersApi.md#apiv1consumersiddelete)
- [apiV1ConsumersIdDeleteRaw](ConsumersApi.md#apiv1consumersiddeleteraw)
- [apiV1ConsumersIdGet](ConsumersApi.md#apiv1consumersidget)
- [apiV1ConsumersIdGetRaw](ConsumersApi.md#apiv1consumersidgetraw)
- [apiV1ConsumersIdPut](ConsumersApi.md#apiv1consumersidput)
- [apiV1ConsumersIdPutRaw](ConsumersApi.md#apiv1consumersidputraw)
- [apiV1ConsumersPost](ConsumersApi.md#apiv1consumerspost)
- [apiV1ConsumersPostRaw](ConsumersApi.md#apiv1consumerspostraw)
- [request](ConsumersApi.md#request)
- [withMiddleware](ConsumersApi.md#withmiddleware)
- [withPostMiddleware](ConsumersApi.md#withpostmiddleware)
- [withPreMiddleware](ConsumersApi.md#withpremiddleware)

## Constructors

### constructor

• **new ConsumersApi**(`configuration?`)

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

### apiV1ConsumersGet

▸ **apiV1ConsumersGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Consumer`](../interfaces/Consumer.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersGetRequest`](../interfaces/ApiV1ConsumersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Consumer`](../interfaces/Consumer.md)[]\>

#### Defined in

[src/apis/ConsumersApi.ts:91](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L91)

___

### apiV1ConsumersGetRaw

▸ **apiV1ConsumersGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersGetRequest`](../interfaces/ApiV1ConsumersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)[]\>\>

#### Defined in

[src/apis/ConsumersApi.ts:54](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L54)

___

### apiV1ConsumersIdDelete

▸ **apiV1ConsumersIdDelete**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersIdDeleteRequest`](../interfaces/ApiV1ConsumersIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/ConsumersApi.ts:123](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L123)

___

### apiV1ConsumersIdDeleteRaw

▸ **apiV1ConsumersIdDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersIdDeleteRequest`](../interfaces/ApiV1ConsumersIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/ConsumersApi.ts:98](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L98)

___

### apiV1ConsumersIdGet

▸ **apiV1ConsumersIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Consumer`](../interfaces/Consumer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersIdGetRequest`](../interfaces/ApiV1ConsumersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Consumer`](../interfaces/Consumer.md)\>

#### Defined in

[src/apis/ConsumersApi.ts:155](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L155)

___

### apiV1ConsumersIdGetRaw

▸ **apiV1ConsumersIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersIdGetRequest`](../interfaces/ApiV1ConsumersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)\>\>

#### Defined in

[src/apis/ConsumersApi.ts:130](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L130)

___

### apiV1ConsumersIdPut

▸ **apiV1ConsumersIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`Consumer`](../interfaces/Consumer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersIdPutRequest`](../interfaces/ApiV1ConsumersIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Consumer`](../interfaces/Consumer.md)\>

#### Defined in

[src/apis/ConsumersApi.ts:190](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L190)

___

### apiV1ConsumersIdPutRaw

▸ **apiV1ConsumersIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersIdPutRequest`](../interfaces/ApiV1ConsumersIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)\>\>

#### Defined in

[src/apis/ConsumersApi.ts:162](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L162)

___

### apiV1ConsumersPost

▸ **apiV1ConsumersPost**(`requestParameters`, `initOverrides?`): `Promise`<[`Consumer`](../interfaces/Consumer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersPostRequest`](../interfaces/ApiV1ConsumersPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Consumer`](../interfaces/Consumer.md)\>

#### Defined in

[src/apis/ConsumersApi.ts:221](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L221)

___

### apiV1ConsumersPostRaw

▸ **apiV1ConsumersPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ConsumersPostRequest`](../interfaces/ApiV1ConsumersPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Consumer`](../interfaces/Consumer.md)\>\>

#### Defined in

[src/apis/ConsumersApi.ts:197](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ConsumersApi.ts#L197)

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
