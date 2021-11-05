[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / InvoiceProfilesApi

# Class: InvoiceProfilesApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`InvoiceProfilesApi`**

## Table of contents

### Constructors

- [constructor](InvoiceProfilesApi.md#constructor)

### Properties

- [configuration](InvoiceProfilesApi.md#configuration)

### Methods

- [apiV1InvoiceProfilesGet](InvoiceProfilesApi.md#apiv1invoiceprofilesget)
- [apiV1InvoiceProfilesGetRaw](InvoiceProfilesApi.md#apiv1invoiceprofilesgetraw)
- [apiV1InvoiceProfilesIdDelete](InvoiceProfilesApi.md#apiv1invoiceprofilesiddelete)
- [apiV1InvoiceProfilesIdDeleteRaw](InvoiceProfilesApi.md#apiv1invoiceprofilesiddeleteraw)
- [apiV1InvoiceProfilesIdGet](InvoiceProfilesApi.md#apiv1invoiceprofilesidget)
- [apiV1InvoiceProfilesIdGetRaw](InvoiceProfilesApi.md#apiv1invoiceprofilesidgetraw)
- [apiV1InvoiceProfilesIdPut](InvoiceProfilesApi.md#apiv1invoiceprofilesidput)
- [apiV1InvoiceProfilesIdPutRaw](InvoiceProfilesApi.md#apiv1invoiceprofilesidputraw)
- [apiV1InvoiceProfilesPost](InvoiceProfilesApi.md#apiv1invoiceprofilespost)
- [apiV1InvoiceProfilesPostRaw](InvoiceProfilesApi.md#apiv1invoiceprofilespostraw)
- [request](InvoiceProfilesApi.md#request)
- [withMiddleware](InvoiceProfilesApi.md#withmiddleware)
- [withPostMiddleware](InvoiceProfilesApi.md#withpostmiddleware)
- [withPreMiddleware](InvoiceProfilesApi.md#withpremiddleware)

## Constructors

### constructor

• **new InvoiceProfilesApi**(`configuration?`)

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

### apiV1InvoiceProfilesGet

▸ **apiV1InvoiceProfilesGet**(`requestParameters`, `initOverrides?`): `Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesGetRequest`](../interfaces/ApiV1InvoiceProfilesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)[]\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:91](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L91)

___

### apiV1InvoiceProfilesGetRaw

▸ **apiV1InvoiceProfilesGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesGetRequest`](../interfaces/ApiV1InvoiceProfilesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)[]\>\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:54](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L54)

___

### apiV1InvoiceProfilesIdDelete

▸ **apiV1InvoiceProfilesIdDelete**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesIdDeleteRequest`](../interfaces/ApiV1InvoiceProfilesIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:123](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L123)

___

### apiV1InvoiceProfilesIdDeleteRaw

▸ **apiV1InvoiceProfilesIdDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesIdDeleteRequest`](../interfaces/ApiV1InvoiceProfilesIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:98](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L98)

___

### apiV1InvoiceProfilesIdGet

▸ **apiV1InvoiceProfilesIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesIdGetRequest`](../interfaces/ApiV1InvoiceProfilesIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:155](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L155)

___

### apiV1InvoiceProfilesIdGetRaw

▸ **apiV1InvoiceProfilesIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesIdGetRequest`](../interfaces/ApiV1InvoiceProfilesIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:130](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L130)

___

### apiV1InvoiceProfilesIdPut

▸ **apiV1InvoiceProfilesIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesIdPutRequest`](../interfaces/ApiV1InvoiceProfilesIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:190](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L190)

___

### apiV1InvoiceProfilesIdPutRaw

▸ **apiV1InvoiceProfilesIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesIdPutRequest`](../interfaces/ApiV1InvoiceProfilesIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:162](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L162)

___

### apiV1InvoiceProfilesPost

▸ **apiV1InvoiceProfilesPost**(`requestParameters`, `initOverrides?`): `Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesPostRequest`](../interfaces/ApiV1InvoiceProfilesPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:221](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L221)

___

### apiV1InvoiceProfilesPostRaw

▸ **apiV1InvoiceProfilesPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1InvoiceProfilesPostRequest`](../interfaces/ApiV1InvoiceProfilesPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`InvoiceProfile`](../interfaces/InvoiceProfile.md)\>\>

#### Defined in

[src/apis/InvoiceProfilesApi.ts:197](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/InvoiceProfilesApi.ts#L197)

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
