[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / CrayonAccountsApi

# Class: CrayonAccountsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CrayonAccountsApi`**

## Table of contents

### Constructors

- [constructor](CrayonAccountsApi.md#constructor)

### Properties

- [configuration](CrayonAccountsApi.md#configuration)

### Methods

- [apiV1CrayonAccountsGet](CrayonAccountsApi.md#apiv1crayonaccountsget)
- [apiV1CrayonAccountsGetRaw](CrayonAccountsApi.md#apiv1crayonaccountsgetraw)
- [apiV1CrayonAccountsIdGet](CrayonAccountsApi.md#apiv1crayonaccountsidget)
- [apiV1CrayonAccountsIdGetRaw](CrayonAccountsApi.md#apiv1crayonaccountsidgetraw)
- [apiV1CrayonAccountsIdPut](CrayonAccountsApi.md#apiv1crayonaccountsidput)
- [apiV1CrayonAccountsIdPutRaw](CrayonAccountsApi.md#apiv1crayonaccountsidputraw)
- [apiV1CrayonAccountsPost](CrayonAccountsApi.md#apiv1crayonaccountspost)
- [apiV1CrayonAccountsPostRaw](CrayonAccountsApi.md#apiv1crayonaccountspostraw)
- [request](CrayonAccountsApi.md#request)
- [withMiddleware](CrayonAccountsApi.md#withmiddleware)
- [withPostMiddleware](CrayonAccountsApi.md#withpostmiddleware)
- [withPreMiddleware](CrayonAccountsApi.md#withpremiddleware)

## Constructors

### constructor

• **new CrayonAccountsApi**(`configuration?`)

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

### apiV1CrayonAccountsGet

▸ **apiV1CrayonAccountsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsGetRequest`](../interfaces/ApiV1CrayonAccountsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)[]\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:105](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L105)

___

### apiV1CrayonAccountsGetRaw

▸ **apiV1CrayonAccountsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsGetRequest`](../interfaces/ApiV1CrayonAccountsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)[]\>\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:56](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L56)

___

### apiV1CrayonAccountsIdGet

▸ **apiV1CrayonAccountsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsIdGetRequest`](../interfaces/ApiV1CrayonAccountsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:137](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L137)

___

### apiV1CrayonAccountsIdGetRaw

▸ **apiV1CrayonAccountsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsIdGetRequest`](../interfaces/ApiV1CrayonAccountsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:112](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L112)

___

### apiV1CrayonAccountsIdPut

▸ **apiV1CrayonAccountsIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsIdPutRequest`](../interfaces/ApiV1CrayonAccountsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:172](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L172)

___

### apiV1CrayonAccountsIdPutRaw

▸ **apiV1CrayonAccountsIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsIdPutRequest`](../interfaces/ApiV1CrayonAccountsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:144](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L144)

___

### apiV1CrayonAccountsPost

▸ **apiV1CrayonAccountsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsPostRequest`](../interfaces/ApiV1CrayonAccountsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:203](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L203)

___

### apiV1CrayonAccountsPostRaw

▸ **apiV1CrayonAccountsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CrayonAccountsPostRequest`](../interfaces/ApiV1CrayonAccountsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CrayonAccount`](../interfaces/CrayonAccount.md)\>\>

#### Defined in

[src/apis/CrayonAccountsApi.ts:179](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CrayonAccountsApi.ts#L179)

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
