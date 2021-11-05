[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / OrganizationsApi

# Class: OrganizationsApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`OrganizationsApi`**

## Table of contents

### Constructors

- [constructor](OrganizationsApi.md#constructor)

### Properties

- [configuration](OrganizationsApi.md#configuration)

### Methods

- [apiV1OrganizationsGet](OrganizationsApi.md#apiv1organizationsget)
- [apiV1OrganizationsGetRaw](OrganizationsApi.md#apiv1organizationsgetraw)
- [apiV1OrganizationsHasAccessIdGet](OrganizationsApi.md#apiv1organizationshasaccessidget)
- [apiV1OrganizationsHasAccessIdGetRaw](OrganizationsApi.md#apiv1organizationshasaccessidgetraw)
- [apiV1OrganizationsIdGet](OrganizationsApi.md#apiv1organizationsidget)
- [apiV1OrganizationsIdGetRaw](OrganizationsApi.md#apiv1organizationsidgetraw)
- [apiV1OrganizationsOrganizationIdSalescontactGet](OrganizationsApi.md#apiv1organizationsorganizationidsalescontactget)
- [apiV1OrganizationsOrganizationIdSalescontactGetRaw](OrganizationsApi.md#apiv1organizationsorganizationidsalescontactgetraw)
- [request](OrganizationsApi.md#request)
- [withMiddleware](OrganizationsApi.md#withmiddleware)
- [withPostMiddleware](OrganizationsApi.md#withpostmiddleware)
- [withPreMiddleware](OrganizationsApi.md#withpremiddleware)

## Constructors

### constructor

• **new OrganizationsApi**(`configuration?`)

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

### apiV1OrganizationsGet

▸ **apiV1OrganizationsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Organization`](../interfaces/Organization.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsGetRequest`](../interfaces/ApiV1OrganizationsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Organization`](../interfaces/Organization.md)[]\>

#### Defined in

[src/apis/OrganizationsApi.ts:84](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L84)

___

### apiV1OrganizationsGetRaw

▸ **apiV1OrganizationsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsGetRequest`](../interfaces/ApiV1OrganizationsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Organization`](../interfaces/Organization.md)[]\>\>

#### Defined in

[src/apis/OrganizationsApi.ts:51](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L51)

___

### apiV1OrganizationsHasAccessIdGet

▸ **apiV1OrganizationsHasAccessIdGet**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsHasAccessIdGetRequest`](../interfaces/ApiV1OrganizationsHasAccessIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/OrganizationsApi.ts:116](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L116)

___

### apiV1OrganizationsHasAccessIdGetRaw

▸ **apiV1OrganizationsHasAccessIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsHasAccessIdGetRequest`](../interfaces/ApiV1OrganizationsHasAccessIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/OrganizationsApi.ts:91](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L91)

___

### apiV1OrganizationsIdGet

▸ **apiV1OrganizationsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`Organization`](../interfaces/Organization.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsIdGetRequest`](../interfaces/ApiV1OrganizationsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`Organization`](../interfaces/Organization.md)\>

#### Defined in

[src/apis/OrganizationsApi.ts:148](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L148)

___

### apiV1OrganizationsIdGetRaw

▸ **apiV1OrganizationsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Organization`](../interfaces/Organization.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsIdGetRequest`](../interfaces/ApiV1OrganizationsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`Organization`](../interfaces/Organization.md)\>\>

#### Defined in

[src/apis/OrganizationsApi.ts:123](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L123)

___

### apiV1OrganizationsOrganizationIdSalescontactGet

▸ **apiV1OrganizationsOrganizationIdSalescontactGet**(`requestParameters`, `initOverrides?`): `Promise`<[`OrganizationSalesContact`](../interfaces/OrganizationSalesContact.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsOrganizationIdSalescontactGetRequest`](../interfaces/ApiV1OrganizationsOrganizationIdSalescontactGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OrganizationSalesContact`](../interfaces/OrganizationSalesContact.md)\>

#### Defined in

[src/apis/OrganizationsApi.ts:180](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L180)

___

### apiV1OrganizationsOrganizationIdSalescontactGetRaw

▸ **apiV1OrganizationsOrganizationIdSalescontactGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationSalesContact`](../interfaces/OrganizationSalesContact.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1OrganizationsOrganizationIdSalescontactGetRequest`](../interfaces/ApiV1OrganizationsOrganizationIdSalescontactGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationSalesContact`](../interfaces/OrganizationSalesContact.md)\>\>

#### Defined in

[src/apis/OrganizationsApi.ts:155](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/OrganizationsApi.ts#L155)

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
