[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / BillingCyclesApi

# Class: BillingCyclesApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`BillingCyclesApi`**

## Table of contents

### Constructors

- [constructor](BillingCyclesApi.md#constructor)

### Properties

- [configuration](BillingCyclesApi.md#configuration)

### Methods

- [apiV1BillingCyclesCspNameDictionaryGet](BillingCyclesApi.md#apiv1billingcyclescspnamedictionaryget)
- [apiV1BillingCyclesCspNameDictionaryGetRaw](BillingCyclesApi.md#apiv1billingcyclescspnamedictionarygetraw)
- [apiV1BillingCyclesGet](BillingCyclesApi.md#apiv1billingcyclesget)
- [apiV1BillingCyclesGetRaw](BillingCyclesApi.md#apiv1billingcyclesgetraw)
- [apiV1BillingCyclesProductVariantProductVariantIdGet](BillingCyclesApi.md#apiv1billingcyclesproductvariantproductvariantidget)
- [apiV1BillingCyclesProductVariantProductVariantIdGetRaw](BillingCyclesApi.md#apiv1billingcyclesproductvariantproductvariantidgetraw)
- [request](BillingCyclesApi.md#request)
- [withMiddleware](BillingCyclesApi.md#withmiddleware)
- [withPostMiddleware](BillingCyclesApi.md#withpostmiddleware)
- [withPreMiddleware](BillingCyclesApi.md#withpremiddleware)

## Constructors

### constructor

• **new BillingCyclesApi**(`configuration?`)

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

### apiV1BillingCyclesCspNameDictionaryGet

▸ **apiV1BillingCyclesCspNameDictionaryGet**(`initOverrides?`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/apis/BillingCyclesApi.ts:59](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingCyclesApi.ts#L59)

___

### apiV1BillingCyclesCspNameDictionaryGetRaw

▸ **apiV1BillingCyclesCspNameDictionaryGetRaw**(`initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Object`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`Object`\>\>

#### Defined in

[src/apis/BillingCyclesApi.ts:38](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingCyclesApi.ts#L38)

___

### apiV1BillingCyclesGet

▸ **apiV1BillingCyclesGet**(`requestParameters`, `initOverrides?`): `Promise`<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingCyclesGetRequest`](../interfaces/ApiV1BillingCyclesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>

#### Defined in

[src/apis/BillingCyclesApi.ts:91](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingCyclesApi.ts#L91)

___

### apiV1BillingCyclesGetRaw

▸ **apiV1BillingCyclesGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingCyclesGetRequest`](../interfaces/ApiV1BillingCyclesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>\>

#### Defined in

[src/apis/BillingCyclesApi.ts:66](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingCyclesApi.ts#L66)

___

### apiV1BillingCyclesProductVariantProductVariantIdGet

▸ **apiV1BillingCyclesProductVariantProductVariantIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingCyclesProductVariantProductVariantIdGetRequest`](../interfaces/ApiV1BillingCyclesProductVariantProductVariantIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>

#### Defined in

[src/apis/BillingCyclesApi.ts:123](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingCyclesApi.ts#L123)

___

### apiV1BillingCyclesProductVariantProductVariantIdGetRaw

▸ **apiV1BillingCyclesProductVariantProductVariantIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1BillingCyclesProductVariantProductVariantIdGetRequest`](../interfaces/ApiV1BillingCyclesProductVariantProductVariantIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`BillingCycle`](../interfaces/BillingCycle.md)[]\>\>

#### Defined in

[src/apis/BillingCyclesApi.ts:98](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/BillingCyclesApi.ts#L98)

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
