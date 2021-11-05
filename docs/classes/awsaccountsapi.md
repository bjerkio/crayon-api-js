[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AwsAccountsApi

# Class: AwsAccountsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AwsAccountsApi`**

## Table of contents

### Constructors

- [constructor](AwsAccountsApi.md#constructor)

### Properties

- [configuration](AwsAccountsApi.md#configuration)

### Methods

- [apiV1AwsAccountsGet](AwsAccountsApi.md#apiv1awsaccountsget)
- [apiV1AwsAccountsGetRaw](AwsAccountsApi.md#apiv1awsaccountsgetraw)
- [apiV1AwsAccountsIdGet](AwsAccountsApi.md#apiv1awsaccountsidget)
- [apiV1AwsAccountsIdGetRaw](AwsAccountsApi.md#apiv1awsaccountsidgetraw)
- [apiV1AwsAccountsIdPut](AwsAccountsApi.md#apiv1awsaccountsidput)
- [apiV1AwsAccountsIdPutRaw](AwsAccountsApi.md#apiv1awsaccountsidputraw)
- [request](AwsAccountsApi.md#request)
- [withMiddleware](AwsAccountsApi.md#withmiddleware)
- [withPostMiddleware](AwsAccountsApi.md#withpostmiddleware)
- [withPreMiddleware](AwsAccountsApi.md#withpremiddleware)

## Constructors

### constructor

• **new AwsAccountsApi**(`configuration?`)

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

### apiV1AwsAccountsGet

▸ **apiV1AwsAccountsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AwsAccount`](../interfaces/AwsAccount.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AwsAccountsGetRequest`](../interfaces/ApiV1AwsAccountsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AwsAccount`](../interfaces/AwsAccount.md)[]\>

#### Defined in

[src/apis/AwsAccountsApi.ts:101](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AwsAccountsApi.ts#L101)

___

### apiV1AwsAccountsGetRaw

▸ **apiV1AwsAccountsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AwsAccount`](../interfaces/AwsAccount.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AwsAccountsGetRequest`](../interfaces/ApiV1AwsAccountsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AwsAccount`](../interfaces/AwsAccount.md)[]\>\>

#### Defined in

[src/apis/AwsAccountsApi.ts:52](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AwsAccountsApi.ts#L52)

___

### apiV1AwsAccountsIdGet

▸ **apiV1AwsAccountsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AwsAccount`](../interfaces/AwsAccount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AwsAccountsIdGetRequest`](../interfaces/ApiV1AwsAccountsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AwsAccount`](../interfaces/AwsAccount.md)\>

#### Defined in

[src/apis/AwsAccountsApi.ts:133](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AwsAccountsApi.ts#L133)

___

### apiV1AwsAccountsIdGetRaw

▸ **apiV1AwsAccountsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AwsAccount`](../interfaces/AwsAccount.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AwsAccountsIdGetRequest`](../interfaces/ApiV1AwsAccountsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AwsAccount`](../interfaces/AwsAccount.md)\>\>

#### Defined in

[src/apis/AwsAccountsApi.ts:108](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AwsAccountsApi.ts#L108)

___

### apiV1AwsAccountsIdPut

▸ **apiV1AwsAccountsIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`AwsAccount`](../interfaces/AwsAccount.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AwsAccountsIdPutRequest`](../interfaces/ApiV1AwsAccountsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AwsAccount`](../interfaces/AwsAccount.md)\>

#### Defined in

[src/apis/AwsAccountsApi.ts:168](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AwsAccountsApi.ts#L168)

___

### apiV1AwsAccountsIdPutRaw

▸ **apiV1AwsAccountsIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AwsAccount`](../interfaces/AwsAccount.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AwsAccountsIdPutRequest`](../interfaces/ApiV1AwsAccountsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AwsAccount`](../interfaces/AwsAccount.md)\>\>

#### Defined in

[src/apis/AwsAccountsApi.ts:140](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AwsAccountsApi.ts#L140)

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
