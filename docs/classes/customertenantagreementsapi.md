[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / CustomerTenantAgreementsApi

# Class: CustomerTenantAgreementsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`CustomerTenantAgreementsApi`**

## Table of contents

### Constructors

- [constructor](CustomerTenantAgreementsApi.md#constructor)

### Properties

- [configuration](CustomerTenantAgreementsApi.md#configuration)

### Methods

- [apiV1CustomertenantsCustomerTenantIdAgreementsGet](CustomerTenantAgreementsApi.md#apiv1customertenantscustomertenantidagreementsget)
- [apiV1CustomertenantsCustomerTenantIdAgreementsGetRaw](CustomerTenantAgreementsApi.md#apiv1customertenantscustomertenantidagreementsgetraw)
- [apiV1CustomertenantsCustomerTenantIdAgreementsPost](CustomerTenantAgreementsApi.md#apiv1customertenantscustomertenantidagreementspost)
- [apiV1CustomertenantsCustomerTenantIdAgreementsPostRaw](CustomerTenantAgreementsApi.md#apiv1customertenantscustomertenantidagreementspostraw)
- [request](CustomerTenantAgreementsApi.md#request)
- [withMiddleware](CustomerTenantAgreementsApi.md#withmiddleware)
- [withPostMiddleware](CustomerTenantAgreementsApi.md#withpostmiddleware)
- [withPreMiddleware](CustomerTenantAgreementsApi.md#withpremiddleware)

## Constructors

### constructor

• **new CustomerTenantAgreementsApi**(`configuration?`)

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

### apiV1CustomertenantsCustomerTenantIdAgreementsGet

▸ **apiV1CustomertenantsCustomerTenantIdAgreementsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomertenantsCustomerTenantIdAgreementsGetRequest`](../interfaces/ApiV1CustomertenantsCustomerTenantIdAgreementsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)[]\>

#### Defined in

[src/apis/CustomerTenantAgreementsApi.ts:72](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantAgreementsApi.ts#L72)

___

### apiV1CustomertenantsCustomerTenantIdAgreementsGetRaw

▸ **apiV1CustomertenantsCustomerTenantIdAgreementsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomertenantsCustomerTenantIdAgreementsGetRequest`](../interfaces/ApiV1CustomertenantsCustomerTenantIdAgreementsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)[]\>\>

#### Defined in

[src/apis/CustomerTenantAgreementsApi.ts:43](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantAgreementsApi.ts#L43)

___

### apiV1CustomertenantsCustomerTenantIdAgreementsPost

▸ **apiV1CustomertenantsCustomerTenantIdAgreementsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomertenantsCustomerTenantIdAgreementsPostRequest`](../interfaces/ApiV1CustomertenantsCustomerTenantIdAgreementsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)\>

#### Defined in

[src/apis/CustomerTenantAgreementsApi.ts:107](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantAgreementsApi.ts#L107)

___

### apiV1CustomertenantsCustomerTenantIdAgreementsPostRaw

▸ **apiV1CustomertenantsCustomerTenantIdAgreementsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1CustomertenantsCustomerTenantIdAgreementsPostRequest`](../interfaces/ApiV1CustomertenantsCustomerTenantIdAgreementsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ServiceAccountAgreement`](../interfaces/ServiceAccountAgreement.md)\>\>

#### Defined in

[src/apis/CustomerTenantAgreementsApi.ts:79](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/CustomerTenantAgreementsApi.ts#L79)

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
