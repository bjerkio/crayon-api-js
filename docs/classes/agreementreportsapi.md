[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AgreementReportsApi

# Class: AgreementReportsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AgreementReportsApi`**

## Table of contents

### Constructors

- [constructor](AgreementReportsApi.md#constructor)

### Properties

- [configuration](AgreementReportsApi.md#configuration)

### Methods

- [apiV1AgreementReportsAgreementIdPut](AgreementReportsApi.md#apiv1agreementreportsagreementidput)
- [apiV1AgreementReportsAgreementIdPutRaw](AgreementReportsApi.md#apiv1agreementreportsagreementidputraw)
- [apiV1AgreementReportsProductContainerIdGet](AgreementReportsApi.md#apiv1agreementreportsproductcontaineridget)
- [apiV1AgreementReportsProductContainerIdGetRaw](AgreementReportsApi.md#apiv1agreementreportsproductcontaineridgetraw)
- [request](AgreementReportsApi.md#request)
- [withMiddleware](AgreementReportsApi.md#withmiddleware)
- [withPostMiddleware](AgreementReportsApi.md#withpostmiddleware)
- [withPreMiddleware](AgreementReportsApi.md#withpremiddleware)

## Constructors

### constructor

• **new AgreementReportsApi**(`configuration?`)

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

### apiV1AgreementReportsAgreementIdPut

▸ **apiV1AgreementReportsAgreementIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`AgreementReport`](../interfaces/AgreementReport.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementReportsAgreementIdPutRequest`](../interfaces/ApiV1AgreementReportsAgreementIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgreementReport`](../interfaces/AgreementReport.md)\>

#### Defined in

[src/apis/AgreementReportsApi.ts:67](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementReportsApi.ts#L67)

___

### apiV1AgreementReportsAgreementIdPutRaw

▸ **apiV1AgreementReportsAgreementIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementReport`](../interfaces/AgreementReport.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementReportsAgreementIdPutRequest`](../interfaces/ApiV1AgreementReportsAgreementIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementReport`](../interfaces/AgreementReport.md)\>\>

#### Defined in

[src/apis/AgreementReportsApi.ts:39](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementReportsApi.ts#L39)

___

### apiV1AgreementReportsProductContainerIdGet

▸ **apiV1AgreementReportsProductContainerIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AgreementReport`](../interfaces/AgreementReport.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementReportsProductContainerIdGetRequest`](../interfaces/ApiV1AgreementReportsProductContainerIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AgreementReport`](../interfaces/AgreementReport.md)[]\>

#### Defined in

[src/apis/AgreementReportsApi.ts:99](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementReportsApi.ts#L99)

___

### apiV1AgreementReportsProductContainerIdGetRaw

▸ **apiV1AgreementReportsProductContainerIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementReport`](../interfaces/AgreementReport.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AgreementReportsProductContainerIdGetRequest`](../interfaces/ApiV1AgreementReportsProductContainerIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AgreementReport`](../interfaces/AgreementReport.md)[]\>\>

#### Defined in

[src/apis/AgreementReportsApi.ts:74](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AgreementReportsApi.ts#L74)

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
