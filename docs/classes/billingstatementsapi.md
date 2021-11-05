[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / BillingStatementsApi

# Class: BillingStatementsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BillingStatementsApi`**

## Table of contents

### Constructors

- [constructor](BillingStatementsApi.md#constructor)

### Properties

- [configuration](BillingStatementsApi.md#configuration)

### Methods

- [apiV1BillingStatementsFileIdGet](BillingStatementsApi.md#apiv1billingstatementsfileidget)
- [apiV1BillingStatementsFileIdGetRaw](BillingStatementsApi.md#apiv1billingstatementsfileidgetraw)
- [apiV1BillingStatementsGet](BillingStatementsApi.md#apiv1billingstatementsget)
- [apiV1BillingStatementsGetRaw](BillingStatementsApi.md#apiv1billingstatementsgetraw)
- [apiV1BillingStatementsGroupedGet](BillingStatementsApi.md#apiv1billingstatementsgroupedget)
- [apiV1BillingStatementsGroupedGetRaw](BillingStatementsApi.md#apiv1billingstatementsgroupedgetraw)
- [apiV1BillingStatementsIdBillingrecordsfileGet](BillingStatementsApi.md#apiv1billingstatementsidbillingrecordsfileget)
- [apiV1BillingStatementsIdBillingrecordsfileGetRaw](BillingStatementsApi.md#apiv1billingstatementsidbillingrecordsfilegetraw)
- [apiV1BillingStatementsIdReconciliationfileGet](BillingStatementsApi.md#apiv1billingstatementsidreconciliationfileget)
- [apiV1BillingStatementsIdReconciliationfileGetRaw](BillingStatementsApi.md#apiv1billingstatementsidreconciliationfilegetraw)
- [request](BillingStatementsApi.md#request)
- [withMiddleware](BillingStatementsApi.md#withmiddleware)
- [withPostMiddleware](BillingStatementsApi.md#withpostmiddleware)
- [withPreMiddleware](BillingStatementsApi.md#withpremiddleware)

## Constructors

### constructor

• **new BillingStatementsApi**(`configuration?`)

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

### apiV1BillingStatementsFileIdGet

▸ **apiV1BillingStatementsFileIdGet**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsFileIdGetRequest`](../interfaces/ApiV1BillingStatementsFileIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/BillingStatementsApi.ts:93](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L93)

___

### apiV1BillingStatementsFileIdGetRaw

▸ **apiV1BillingStatementsFileIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsFileIdGetRequest`](../interfaces/ApiV1BillingStatementsFileIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/BillingStatementsApi.ts:68](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L68)

___

### apiV1BillingStatementsGet

▸ **apiV1BillingStatementsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`BillingStatement`](../interfaces/BillingStatement.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsGetRequest`](../interfaces/ApiV1BillingStatementsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`BillingStatement`](../interfaces/BillingStatement.md)[]\>

#### Defined in

[src/apis/BillingStatementsApi.ts:148](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L148)

___

### apiV1BillingStatementsGetRaw

▸ **apiV1BillingStatementsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingStatement`](../interfaces/BillingStatement.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsGetRequest`](../interfaces/ApiV1BillingStatementsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingStatement`](../interfaces/BillingStatement.md)[]\>\>

#### Defined in

[src/apis/BillingStatementsApi.ts:99](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L99)

___

### apiV1BillingStatementsGroupedGet

▸ **apiV1BillingStatementsGroupedGet**(`requestParameters`, `initOverrides?`): `Promise`<[`GroupedBillingStatement`](../interfaces/GroupedBillingStatement.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsGroupedGetRequest`](../interfaces/ApiV1BillingStatementsGroupedGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`GroupedBillingStatement`](../interfaces/GroupedBillingStatement.md)[]\>

#### Defined in

[src/apis/BillingStatementsApi.ts:204](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L204)

___

### apiV1BillingStatementsGroupedGetRaw

▸ **apiV1BillingStatementsGroupedGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupedBillingStatement`](../interfaces/GroupedBillingStatement.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsGroupedGetRequest`](../interfaces/ApiV1BillingStatementsGroupedGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`GroupedBillingStatement`](../interfaces/GroupedBillingStatement.md)[]\>\>

#### Defined in

[src/apis/BillingStatementsApi.ts:155](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L155)

___

### apiV1BillingStatementsIdBillingrecordsfileGet

▸ **apiV1BillingStatementsIdBillingrecordsfileGet**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsIdBillingrecordsfileGetRequest`](../interfaces/ApiV1BillingStatementsIdBillingrecordsfileGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/BillingStatementsApi.ts:236](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L236)

___

### apiV1BillingStatementsIdBillingrecordsfileGetRaw

▸ **apiV1BillingStatementsIdBillingrecordsfileGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsIdBillingrecordsfileGetRequest`](../interfaces/ApiV1BillingStatementsIdBillingrecordsfileGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/BillingStatementsApi.ts:211](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L211)

___

### apiV1BillingStatementsIdReconciliationfileGet

▸ **apiV1BillingStatementsIdReconciliationfileGet**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsIdReconciliationfileGetRequest`](../interfaces/ApiV1BillingStatementsIdReconciliationfileGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/BillingStatementsApi.ts:267](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L267)

___

### apiV1BillingStatementsIdReconciliationfileGetRaw

▸ **apiV1BillingStatementsIdReconciliationfileGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingStatementsIdReconciliationfileGetRequest`](../interfaces/ApiV1BillingStatementsIdReconciliationfileGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/BillingStatementsApi.ts:242](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingStatementsApi.ts#L242)

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
