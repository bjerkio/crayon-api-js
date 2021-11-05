[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AddressesApi

# Class: AddressesApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AddressesApi`**

## Table of contents

### Constructors

- [constructor](AddressesApi.md#constructor)

### Properties

- [configuration](AddressesApi.md#configuration)

### Methods

- [apiV1OrganizationsOrganizationIdAddressesGet](AddressesApi.md#apiv1organizationsorganizationidaddressesget)
- [apiV1OrganizationsOrganizationIdAddressesGetRaw](AddressesApi.md#apiv1organizationsorganizationidaddressesgetraw)
- [apiV1OrganizationsOrganizationIdAddressesIdGet](AddressesApi.md#apiv1organizationsorganizationidaddressesidget)
- [apiV1OrganizationsOrganizationIdAddressesIdGetRaw](AddressesApi.md#apiv1organizationsorganizationidaddressesidgetraw)
- [request](AddressesApi.md#request)
- [withMiddleware](AddressesApi.md#withmiddleware)
- [withPostMiddleware](AddressesApi.md#withpostmiddleware)
- [withPreMiddleware](AddressesApi.md#withpremiddleware)

## Constructors

### constructor

• **new AddressesApi**(`configuration?`)

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

### apiV1OrganizationsOrganizationIdAddressesGet

▸ **apiV1OrganizationsOrganizationIdAddressesGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Address`](../interfaces/Address.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsOrganizationIdAddressesGetRequest`](../interfaces/ApiV1OrganizationsOrganizationIdAddressesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Address`](../interfaces/Address.md)[]\>

#### Defined in

[src/apis/AddressesApi.ts:72](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AddressesApi.ts#L72)

___

### apiV1OrganizationsOrganizationIdAddressesGetRaw

▸ **apiV1OrganizationsOrganizationIdAddressesGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Address`](../interfaces/Address.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsOrganizationIdAddressesGetRequest`](../interfaces/ApiV1OrganizationsOrganizationIdAddressesGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Address`](../interfaces/Address.md)[]\>\>

#### Defined in

[src/apis/AddressesApi.ts:43](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AddressesApi.ts#L43)

___

### apiV1OrganizationsOrganizationIdAddressesIdGet

▸ **apiV1OrganizationsOrganizationIdAddressesIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Address`](../interfaces/Address.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsOrganizationIdAddressesIdGetRequest`](../interfaces/ApiV1OrganizationsOrganizationIdAddressesIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Address`](../interfaces/Address.md)\>

#### Defined in

[src/apis/AddressesApi.ts:108](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AddressesApi.ts#L108)

___

### apiV1OrganizationsOrganizationIdAddressesIdGetRaw

▸ **apiV1OrganizationsOrganizationIdAddressesIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Address`](../interfaces/Address.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsOrganizationIdAddressesIdGetRequest`](../interfaces/ApiV1OrganizationsOrganizationIdAddressesIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Address`](../interfaces/Address.md)\>\>

#### Defined in

[src/apis/AddressesApi.ts:79](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AddressesApi.ts#L79)

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
