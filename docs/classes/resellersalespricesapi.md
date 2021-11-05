[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ResellerSalesPricesApi

# Class: ResellerSalesPricesApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ResellerSalesPricesApi`**

## Table of contents

### Constructors

- [constructor](ResellerSalesPricesApi.md#constructor)

### Properties

- [configuration](ResellerSalesPricesApi.md#configuration)

### Methods

- [apiV1ResellerSalesPricesCurrentGet](ResellerSalesPricesApi.md#apiv1resellersalespricescurrentget)
- [apiV1ResellerSalesPricesCurrentGetRaw](ResellerSalesPricesApi.md#apiv1resellersalespricescurrentgetraw)
- [apiV1ResellerSalesPricesDelete](ResellerSalesPricesApi.md#apiv1resellersalespricesdelete)
- [apiV1ResellerSalesPricesDeleteRaw](ResellerSalesPricesApi.md#apiv1resellersalespricesdeleteraw)
- [apiV1ResellerSalesPricesGet](ResellerSalesPricesApi.md#apiv1resellersalespricesget)
- [apiV1ResellerSalesPricesGetRaw](ResellerSalesPricesApi.md#apiv1resellersalespricesgetraw)
- [apiV1ResellerSalesPricesOldFromDatePut](ResellerSalesPricesApi.md#apiv1resellersalespricesoldfromdateput)
- [apiV1ResellerSalesPricesOldFromDatePutRaw](ResellerSalesPricesApi.md#apiv1resellersalespricesoldfromdateputraw)
- [apiV1ResellerSalesPricesPost](ResellerSalesPricesApi.md#apiv1resellersalespricespost)
- [apiV1ResellerSalesPricesPostRaw](ResellerSalesPricesApi.md#apiv1resellersalespricespostraw)
- [apiV1ResellerSalesPricesTogglePost](ResellerSalesPricesApi.md#apiv1resellersalespricestogglepost)
- [apiV1ResellerSalesPricesTogglePostRaw](ResellerSalesPricesApi.md#apiv1resellersalespricestogglepostraw)
- [request](ResellerSalesPricesApi.md#request)
- [withMiddleware](ResellerSalesPricesApi.md#withmiddleware)
- [withPostMiddleware](ResellerSalesPricesApi.md#withpostmiddleware)
- [withPreMiddleware](ResellerSalesPricesApi.md#withpremiddleware)

## Constructors

### constructor

• **new ResellerSalesPricesApi**(`configuration?`)

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

### apiV1ResellerSalesPricesCurrentGet

▸ **apiV1ResellerSalesPricesCurrentGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesCurrentGetRequest`](../interfaces/ApiV1ResellerSalesPricesCurrentGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:110](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L110)

___

### apiV1ResellerSalesPricesCurrentGetRaw

▸ **apiV1ResellerSalesPricesCurrentGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesCurrentGetRequest`](../interfaces/ApiV1ResellerSalesPricesCurrentGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:73](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L73)

___

### apiV1ResellerSalesPricesDelete

▸ **apiV1ResellerSalesPricesDelete**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesDeleteRequest`](../interfaces/ApiV1ResellerSalesPricesDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:154](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L154)

___

### apiV1ResellerSalesPricesDeleteRaw

▸ **apiV1ResellerSalesPricesDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesDeleteRequest`](../interfaces/ApiV1ResellerSalesPricesDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:117](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L117)

___

### apiV1ResellerSalesPricesGet

▸ **apiV1ResellerSalesPricesGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesGetRequest`](../interfaces/ApiV1ResellerSalesPricesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)[]\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:197](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L197)

___

### apiV1ResellerSalesPricesGetRaw

▸ **apiV1ResellerSalesPricesGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesGetRequest`](../interfaces/ApiV1ResellerSalesPricesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)[]\>\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:160](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L160)

___

### apiV1ResellerSalesPricesOldFromDatePut

▸ **apiV1ResellerSalesPricesOldFromDatePut**(`requestParameters`, `initOverrides?`): `Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesOldFromDatePutRequest`](../interfaces/ApiV1ResellerSalesPricesOldFromDatePutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:232](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L232)

___

### apiV1ResellerSalesPricesOldFromDatePutRaw

▸ **apiV1ResellerSalesPricesOldFromDatePutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesOldFromDatePutRequest`](../interfaces/ApiV1ResellerSalesPricesOldFromDatePutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:204](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L204)

___

### apiV1ResellerSalesPricesPost

▸ **apiV1ResellerSalesPricesPost**(`requestParameters`, `initOverrides?`): `Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesPostRequest`](../interfaces/ApiV1ResellerSalesPricesPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:263](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L263)

___

### apiV1ResellerSalesPricesPostRaw

▸ **apiV1ResellerSalesPricesPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesPostRequest`](../interfaces/ApiV1ResellerSalesPricesPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResellerSalesPrice`](../interfaces/ResellerSalesPrice.md)\>\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:239](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L239)

___

### apiV1ResellerSalesPricesTogglePost

▸ **apiV1ResellerSalesPricesTogglePost**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesTogglePostRequest`](../interfaces/ApiV1ResellerSalesPricesTogglePostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:294](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L294)

___

### apiV1ResellerSalesPricesTogglePostRaw

▸ **apiV1ResellerSalesPricesTogglePostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ResellerSalesPricesTogglePostRequest`](../interfaces/ApiV1ResellerSalesPricesTogglePostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/ResellerSalesPricesApi.ts:270](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ResellerSalesPricesApi.ts#L270)

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
