[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ClientsApi

# Class: ClientsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ClientsApi`**

## Table of contents

### Constructors

- [constructor](ClientsApi.md#constructor)

### Properties

- [configuration](ClientsApi.md#configuration)

### Methods

- [apiV1ClientsClientIdDelete](ClientsApi.md#apiv1clientsclientiddelete)
- [apiV1ClientsClientIdDeleteRaw](ClientsApi.md#apiv1clientsclientiddeleteraw)
- [apiV1ClientsClientIdGet](ClientsApi.md#apiv1clientsclientidget)
- [apiV1ClientsClientIdGetRaw](ClientsApi.md#apiv1clientsclientidgetraw)
- [apiV1ClientsClientIdPut](ClientsApi.md#apiv1clientsclientidput)
- [apiV1ClientsClientIdPutRaw](ClientsApi.md#apiv1clientsclientidputraw)
- [apiV1ClientsGet](ClientsApi.md#apiv1clientsget)
- [apiV1ClientsGetRaw](ClientsApi.md#apiv1clientsgetraw)
- [apiV1ClientsPost](ClientsApi.md#apiv1clientspost)
- [apiV1ClientsPostRaw](ClientsApi.md#apiv1clientspostraw)
- [request](ClientsApi.md#request)
- [withMiddleware](ClientsApi.md#withmiddleware)
- [withPostMiddleware](ClientsApi.md#withpostmiddleware)
- [withPreMiddleware](ClientsApi.md#withpremiddleware)

## Constructors

### constructor

• **new ClientsApi**(`configuration?`)

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

### apiV1ClientsClientIdDelete

▸ **apiV1ClientsClientIdDelete**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsClientIdDeleteRequest`](../interfaces/ApiV1ClientsClientIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/ClientsApi.ts:78](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L78)

___

### apiV1ClientsClientIdDeleteRaw

▸ **apiV1ClientsClientIdDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsClientIdDeleteRequest`](../interfaces/ApiV1ClientsClientIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/ClientsApi.ts:53](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L53)

___

### apiV1ClientsClientIdGet

▸ **apiV1ClientsClientIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Client`](../interfaces/Client.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsClientIdGetRequest`](../interfaces/ApiV1ClientsClientIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Client`](../interfaces/Client.md)\>

#### Defined in

[src/apis/ClientsApi.ts:110](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L110)

___

### apiV1ClientsClientIdGetRaw

▸ **apiV1ClientsClientIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsClientIdGetRequest`](../interfaces/ApiV1ClientsClientIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)\>\>

#### Defined in

[src/apis/ClientsApi.ts:85](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L85)

___

### apiV1ClientsClientIdPut

▸ **apiV1ClientsClientIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`Client`](../interfaces/Client.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsClientIdPutRequest`](../interfaces/ApiV1ClientsClientIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Client`](../interfaces/Client.md)\>

#### Defined in

[src/apis/ClientsApi.ts:145](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L145)

___

### apiV1ClientsClientIdPutRaw

▸ **apiV1ClientsClientIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsClientIdPutRequest`](../interfaces/ApiV1ClientsClientIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)\>\>

#### Defined in

[src/apis/ClientsApi.ts:117](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L117)

___

### apiV1ClientsGet

▸ **apiV1ClientsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Client`](../interfaces/Client.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsGetRequest`](../interfaces/ApiV1ClientsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Client`](../interfaces/Client.md)[]\>

#### Defined in

[src/apis/ClientsApi.ts:185](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L185)

___

### apiV1ClientsGetRaw

▸ **apiV1ClientsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsGetRequest`](../interfaces/ApiV1ClientsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)[]\>\>

#### Defined in

[src/apis/ClientsApi.ts:152](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L152)

___

### apiV1ClientsPost

▸ **apiV1ClientsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`Client`](../interfaces/Client.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsPostRequest`](../interfaces/ApiV1ClientsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Client`](../interfaces/Client.md)\>

#### Defined in

[src/apis/ClientsApi.ts:216](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L216)

___

### apiV1ClientsPostRaw

▸ **apiV1ClientsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ClientsPostRequest`](../interfaces/ApiV1ClientsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Client`](../interfaces/Client.md)\>\>

#### Defined in

[src/apis/ClientsApi.ts:192](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ClientsApi.ts#L192)

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
