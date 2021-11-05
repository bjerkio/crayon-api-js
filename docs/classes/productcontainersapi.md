[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / ProductContainersApi

# Class: ProductContainersApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`ProductContainersApi`**

## Table of contents

### Constructors

- [constructor](ProductContainersApi.md#constructor)

### Properties

- [configuration](ProductContainersApi.md#configuration)

### Methods

- [apiV1ProductContainersGet](ProductContainersApi.md#apiv1productcontainersget)
- [apiV1ProductContainersGetRaw](ProductContainersApi.md#apiv1productcontainersgetraw)
- [apiV1ProductContainersGetorcreateshoppingcartGet](ProductContainersApi.md#apiv1productcontainersgetorcreateshoppingcartget)
- [apiV1ProductContainersGetorcreateshoppingcartGetRaw](ProductContainersApi.md#apiv1productcontainersgetorcreateshoppingcartgetraw)
- [apiV1ProductContainersIdDelete](ProductContainersApi.md#apiv1productcontainersiddelete)
- [apiV1ProductContainersIdDeleteRaw](ProductContainersApi.md#apiv1productcontainersiddeleteraw)
- [apiV1ProductContainersIdGet](ProductContainersApi.md#apiv1productcontainersidget)
- [apiV1ProductContainersIdGetRaw](ProductContainersApi.md#apiv1productcontainersidgetraw)
- [apiV1ProductContainersIdPut](ProductContainersApi.md#apiv1productcontainersidput)
- [apiV1ProductContainersIdPutRaw](ProductContainersApi.md#apiv1productcontainersidputraw)
- [apiV1ProductContainersProductContainerIdRowProductRowIdPatch](ProductContainersApi.md#apiv1productcontainersproductcontaineridrowproductrowidpatch)
- [apiV1ProductContainersProductContainerIdRowProductRowIdPatchRaw](ProductContainersApi.md#apiv1productcontainersproductcontaineridrowproductrowidpatchraw)
- [apiV1ProductContainersReportbymonthPost](ProductContainersApi.md#apiv1productcontainersreportbymonthpost)
- [apiV1ProductContainersReportbymonthPostRaw](ProductContainersApi.md#apiv1productcontainersreportbymonthpostraw)
- [apiV1ProductContainersRowissuesIdGet](ProductContainersApi.md#apiv1productcontainersrowissuesidget)
- [apiV1ProductContainersRowissuesIdGetRaw](ProductContainersApi.md#apiv1productcontainersrowissuesidgetraw)
- [request](ProductContainersApi.md#request)
- [withMiddleware](ProductContainersApi.md#withmiddleware)
- [withPostMiddleware](ProductContainersApi.md#withpostmiddleware)
- [withPreMiddleware](ProductContainersApi.md#withpremiddleware)

## Constructors

### constructor

• **new ProductContainersApi**(`configuration?`)

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

### apiV1ProductContainersGet

▸ **apiV1ProductContainersGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersGetRequest`](../interfaces/ApiV1ProductContainersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)[]\>

#### Defined in

[src/apis/ProductContainersApi.ts:179](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L179)

___

### apiV1ProductContainersGetRaw

▸ **apiV1ProductContainersGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersGetRequest`](../interfaces/ApiV1ProductContainersGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)[]\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:94](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L94)

___

### apiV1ProductContainersGetorcreateshoppingcartGet

▸ **apiV1ProductContainersGetorcreateshoppingcartGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersGetorcreateshoppingcartGetRequest`](../interfaces/ApiV1ProductContainersGetorcreateshoppingcartGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Defined in

[src/apis/ProductContainersApi.ts:211](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L211)

___

### apiV1ProductContainersGetorcreateshoppingcartGetRaw

▸ **apiV1ProductContainersGetorcreateshoppingcartGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersGetorcreateshoppingcartGetRequest`](../interfaces/ApiV1ProductContainersGetorcreateshoppingcartGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:186](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L186)

___

### apiV1ProductContainersIdDelete

▸ **apiV1ProductContainersIdDelete**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersIdDeleteRequest`](../interfaces/ApiV1ProductContainersIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/ProductContainersApi.ts:243](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L243)

___

### apiV1ProductContainersIdDeleteRaw

▸ **apiV1ProductContainersIdDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersIdDeleteRequest`](../interfaces/ApiV1ProductContainersIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:218](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L218)

___

### apiV1ProductContainersIdGet

▸ **apiV1ProductContainersIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersIdGetRequest`](../interfaces/ApiV1ProductContainersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Defined in

[src/apis/ProductContainersApi.ts:275](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L275)

___

### apiV1ProductContainersIdGetRaw

▸ **apiV1ProductContainersIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersIdGetRequest`](../interfaces/ApiV1ProductContainersIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:250](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L250)

___

### apiV1ProductContainersIdPut

▸ **apiV1ProductContainersIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersIdPutRequest`](../interfaces/ApiV1ProductContainersIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Defined in

[src/apis/ProductContainersApi.ts:314](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L314)

___

### apiV1ProductContainersIdPutRaw

▸ **apiV1ProductContainersIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersIdPutRequest`](../interfaces/ApiV1ProductContainersIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:282](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L282)

___

### apiV1ProductContainersProductContainerIdRowProductRowIdPatch

▸ **apiV1ProductContainersProductContainerIdRowProductRowIdPatch**(`requestParameters`, `initOverrides?`): `Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersProductContainerIdRowProductRowIdPatchRequest`](../interfaces/ApiV1ProductContainersProductContainerIdRowProductRowIdPatchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Defined in

[src/apis/ProductContainersApi.ts:353](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L353)

___

### apiV1ProductContainersProductContainerIdRowProductRowIdPatchRaw

▸ **apiV1ProductContainersProductContainerIdRowProductRowIdPatchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersProductContainerIdRowProductRowIdPatchRequest`](../interfaces/ApiV1ProductContainersProductContainerIdRowProductRowIdPatchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:321](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L321)

___

### apiV1ProductContainersReportbymonthPost

▸ **apiV1ProductContainersReportbymonthPost**(`requestParameters`, `initOverrides?`): `Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersReportbymonthPostRequest`](../interfaces/ApiV1ProductContainersReportbymonthPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Defined in

[src/apis/ProductContainersApi.ts:401](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L401)

___

### apiV1ProductContainersReportbymonthPostRaw

▸ **apiV1ProductContainersReportbymonthPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersReportbymonthPostRequest`](../interfaces/ApiV1ProductContainersReportbymonthPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:360](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L360)

___

### apiV1ProductContainersRowissuesIdGet

▸ **apiV1ProductContainersRowissuesIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersRowissuesIdGetRequest`](../interfaces/ApiV1ProductContainersRowissuesIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ProductContainer`](../interfaces/ProductContainer.md)\>

#### Defined in

[src/apis/ProductContainersApi.ts:433](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L433)

___

### apiV1ProductContainersRowissuesIdGetRaw

▸ **apiV1ProductContainersRowissuesIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1ProductContainersRowissuesIdGetRequest`](../interfaces/ApiV1ProductContainersRowissuesIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ProductContainer`](../interfaces/ProductContainer.md)\>\>

#### Defined in

[src/apis/ProductContainersApi.ts:408](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/ProductContainersApi.ts#L408)

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
