[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / CustomerTenantsApi

# Class: CustomerTenantsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CustomerTenantsApi`**

## Table of contents

### Constructors

- [constructor](CustomerTenantsApi.md#constructor)

### Properties

- [configuration](CustomerTenantsApi.md#configuration)

### Methods

- [apiV1CustomerTenantsCustomerTenantIdAzurePlanGet](CustomerTenantsApi.md#apiv1customertenantscustomertenantidazureplanget)
- [apiV1CustomerTenantsCustomerTenantIdAzurePlanGetRaw](CustomerTenantsApi.md#apiv1customertenantscustomertenantidazureplangetraw)
- [apiV1CustomerTenantsExistingPost](CustomerTenantsApi.md#apiv1customertenantsexistingpost)
- [apiV1CustomerTenantsExistingPostRaw](CustomerTenantsApi.md#apiv1customertenantsexistingpostraw)
- [apiV1CustomerTenantsGet](CustomerTenantsApi.md#apiv1customertenantsget)
- [apiV1CustomerTenantsGetRaw](CustomerTenantsApi.md#apiv1customertenantsgetraw)
- [apiV1CustomerTenantsIdDelete](CustomerTenantsApi.md#apiv1customertenantsiddelete)
- [apiV1CustomerTenantsIdDeleteRaw](CustomerTenantsApi.md#apiv1customertenantsiddeleteraw)
- [apiV1CustomerTenantsIdDetailedGet](CustomerTenantsApi.md#apiv1customertenantsiddetailedget)
- [apiV1CustomerTenantsIdDetailedGetRaw](CustomerTenantsApi.md#apiv1customertenantsiddetailedgetraw)
- [apiV1CustomerTenantsIdGet](CustomerTenantsApi.md#apiv1customertenantsidget)
- [apiV1CustomerTenantsIdGetRaw](CustomerTenantsApi.md#apiv1customertenantsidgetraw)
- [apiV1CustomerTenantsIdPut](CustomerTenantsApi.md#apiv1customertenantsidput)
- [apiV1CustomerTenantsIdPutRaw](CustomerTenantsApi.md#apiv1customertenantsidputraw)
- [apiV1CustomerTenantsPost](CustomerTenantsApi.md#apiv1customertenantspost)
- [apiV1CustomerTenantsPostRaw](CustomerTenantsApi.md#apiv1customertenantspostraw)
- [request](CustomerTenantsApi.md#request)
- [withMiddleware](CustomerTenantsApi.md#withmiddleware)
- [withPostMiddleware](CustomerTenantsApi.md#withpostmiddleware)
- [withPreMiddleware](CustomerTenantsApi.md#withpremiddleware)

## Constructors

### constructor

• **new CustomerTenantsApi**(`configuration?`)

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

### apiV1CustomerTenantsCustomerTenantIdAzurePlanGet

▸ **apiV1CustomerTenantsCustomerTenantIdAzurePlanGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AzurePlan`](../interfaces/AzurePlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsCustomerTenantIdAzurePlanGetRequest`](../interfaces/ApiV1CustomerTenantsCustomerTenantIdAzurePlanGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzurePlan`](../interfaces/AzurePlan.md)\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:108](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L108)

___

### apiV1CustomerTenantsCustomerTenantIdAzurePlanGetRaw

▸ **apiV1CustomerTenantsCustomerTenantIdAzurePlanGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzurePlan`](../interfaces/AzurePlan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsCustomerTenantIdAzurePlanGetRequest`](../interfaces/ApiV1CustomerTenantsCustomerTenantIdAzurePlanGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzurePlan`](../interfaces/AzurePlan.md)\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:83](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L83)

___

### apiV1CustomerTenantsExistingPost

▸ **apiV1CustomerTenantsExistingPost**(`requestParameters`, `initOverrides?`): `Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsExistingPostRequest`](../interfaces/ApiV1CustomerTenantsExistingPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:143](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L143)

___

### apiV1CustomerTenantsExistingPostRaw

▸ **apiV1CustomerTenantsExistingPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsExistingPostRequest`](../interfaces/ApiV1CustomerTenantsExistingPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:115](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L115)

___

### apiV1CustomerTenantsGet

▸ **apiV1CustomerTenantsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`CustomerTenant`](../interfaces/CustomerTenant.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsGetRequest`](../interfaces/ApiV1CustomerTenantsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CustomerTenant`](../interfaces/CustomerTenant.md)[]\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:215](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L215)

___

### apiV1CustomerTenantsGetRaw

▸ **apiV1CustomerTenantsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenant`](../interfaces/CustomerTenant.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsGetRequest`](../interfaces/ApiV1CustomerTenantsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenant`](../interfaces/CustomerTenant.md)[]\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:150](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L150)

___

### apiV1CustomerTenantsIdDelete

▸ **apiV1CustomerTenantsIdDelete**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdDeleteRequest`](../interfaces/ApiV1CustomerTenantsIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:247](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L247)

___

### apiV1CustomerTenantsIdDeleteRaw

▸ **apiV1CustomerTenantsIdDeleteRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdDeleteRequest`](../interfaces/ApiV1CustomerTenantsIdDeleteRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:222](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L222)

___

### apiV1CustomerTenantsIdDetailedGet

▸ **apiV1CustomerTenantsIdDetailedGet**(`requestParameters`, `initOverrides?`): `Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdDetailedGetRequest`](../interfaces/ApiV1CustomerTenantsIdDetailedGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:278](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L278)

___

### apiV1CustomerTenantsIdDetailedGetRaw

▸ **apiV1CustomerTenantsIdDetailedGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdDetailedGetRequest`](../interfaces/ApiV1CustomerTenantsIdDetailedGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:253](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L253)

___

### apiV1CustomerTenantsIdGet

▸ **apiV1CustomerTenantsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`CustomerTenant`](../interfaces/CustomerTenant.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdGetRequest`](../interfaces/ApiV1CustomerTenantsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CustomerTenant`](../interfaces/CustomerTenant.md)\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:310](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L310)

___

### apiV1CustomerTenantsIdGetRaw

▸ **apiV1CustomerTenantsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenant`](../interfaces/CustomerTenant.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdGetRequest`](../interfaces/ApiV1CustomerTenantsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenant`](../interfaces/CustomerTenant.md)\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:285](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L285)

___

### apiV1CustomerTenantsIdPut

▸ **apiV1CustomerTenantsIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdPutRequest`](../interfaces/ApiV1CustomerTenantsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:345](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L345)

___

### apiV1CustomerTenantsIdPutRaw

▸ **apiV1CustomerTenantsIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsIdPutRequest`](../interfaces/ApiV1CustomerTenantsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:317](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L317)

___

### apiV1CustomerTenantsPost

▸ **apiV1CustomerTenantsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsPostRequest`](../interfaces/ApiV1CustomerTenantsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:376](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L376)

___

### apiV1CustomerTenantsPostRaw

▸ **apiV1CustomerTenantsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomerTenantsPostRequest`](../interfaces/ApiV1CustomerTenantsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CustomerTenantDetailed`](../interfaces/CustomerTenantDetailed.md)\>\>

#### Defined in

[src/apis/CustomerTenantsApi.ts:352](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantsApi.ts#L352)

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
