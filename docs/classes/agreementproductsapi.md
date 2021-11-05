[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AgreementProductsApi

# Class: AgreementProductsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AgreementProductsApi`**

## Table of contents

### Constructors

- [constructor](AgreementProductsApi.md#constructor)

### Properties

- [configuration](AgreementProductsApi.md#configuration)

### Methods

- [apiV1AgreementProductsFileXlsxPost](AgreementProductsApi.md#apiv1agreementproductsfilexlsxpost)
- [apiV1AgreementProductsFileXlsxPostRaw](AgreementProductsApi.md#apiv1agreementproductsfilexlsxpostraw)
- [apiV1AgreementProductsGet](AgreementProductsApi.md#apiv1agreementproductsget)
- [apiV1AgreementProductsGetRaw](AgreementProductsApi.md#apiv1agreementproductsgetraw)
- [apiV1AgreementProductsPartNumberSupportedbillingcyclesGet](AgreementProductsApi.md#apiv1agreementproductspartnumbersupportedbillingcyclesget)
- [apiV1AgreementProductsPartNumberSupportedbillingcyclesGetRaw](AgreementProductsApi.md#apiv1agreementproductspartnumbersupportedbillingcyclesgetraw)
- [apiV1AgreementProductsPost](AgreementProductsApi.md#apiv1agreementproductspost)
- [apiV1AgreementProductsPostRaw](AgreementProductsApi.md#apiv1agreementproductspostraw)
- [request](AgreementProductsApi.md#request)
- [withMiddleware](AgreementProductsApi.md#withmiddleware)
- [withPostMiddleware](AgreementProductsApi.md#withpostmiddleware)
- [withPreMiddleware](AgreementProductsApi.md#withpremiddleware)

## Constructors

### constructor

• **new AgreementProductsApi**(`configuration?`)

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

### apiV1AgreementProductsFileXlsxPost

▸ **apiV1AgreementProductsFileXlsxPost**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsFileXlsxPostRequest`](../interfaces/ApiV1AgreementProductsFileXlsxPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/AgreementProductsApi.ts:136](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L136)

___

### apiV1AgreementProductsFileXlsxPostRaw

▸ **apiV1AgreementProductsFileXlsxPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsFileXlsxPostRequest`](../interfaces/ApiV1AgreementProductsFileXlsxPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/AgreementProductsApi.ts:112](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L112)

___

### apiV1AgreementProductsGet

▸ **apiV1AgreementProductsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsGetRequest`](../interfaces/ApiV1AgreementProductsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>

#### Defined in

[src/apis/AgreementProductsApi.ts:379](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L379)

___

### apiV1AgreementProductsGetRaw

▸ **apiV1AgreementProductsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsGetRequest`](../interfaces/ApiV1AgreementProductsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>\>

#### Defined in

[src/apis/AgreementProductsApi.ts:142](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L142)

___

### apiV1AgreementProductsPartNumberSupportedbillingcyclesGet

▸ **apiV1AgreementProductsPartNumberSupportedbillingcyclesGet**(`requestParameters`, `initOverrides?`): `Promise`<[`BillingCycleEnum`](../enums/BillingCycleEnum.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsPartNumberSupportedbillingcyclesGetRequest`](../interfaces/ApiV1AgreementProductsPartNumberSupportedbillingcyclesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`BillingCycleEnum`](../enums/BillingCycleEnum.md)[]\>

#### Defined in

[src/apis/AgreementProductsApi.ts:415](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L415)

___

### apiV1AgreementProductsPartNumberSupportedbillingcyclesGetRaw

▸ **apiV1AgreementProductsPartNumberSupportedbillingcyclesGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingCycleEnum`](../enums/BillingCycleEnum.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsPartNumberSupportedbillingcyclesGetRequest`](../interfaces/ApiV1AgreementProductsPartNumberSupportedbillingcyclesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingCycleEnum`](../enums/BillingCycleEnum.md)[]\>\>

#### Defined in

[src/apis/AgreementProductsApi.ts:386](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L386)

___

### apiV1AgreementProductsPost

▸ **apiV1AgreementProductsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsPostRequest`](../interfaces/ApiV1AgreementProductsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>

#### Defined in

[src/apis/AgreementProductsApi.ts:446](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L446)

___

### apiV1AgreementProductsPostRaw

▸ **apiV1AgreementProductsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementProductsPostRequest`](../interfaces/ApiV1AgreementProductsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementProduct`](../interfaces/AgreementProduct.md)[]\>\>

#### Defined in

[src/apis/AgreementProductsApi.ts:422](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementProductsApi.ts#L422)

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
