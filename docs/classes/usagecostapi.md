[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / UsageCostApi

# Class: UsageCostApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`UsageCostApi`**

## Table of contents

### Constructors

- [constructor](UsageCostApi.md#constructor)

### Properties

- [configuration](UsageCostApi.md#configuration)

### Methods

- [apiV1UsageCostGetForCategoryPost](UsageCostApi.md#apiv1usagecostgetforcategorypost)
- [apiV1UsageCostGetForCategoryPostRaw](UsageCostApi.md#apiv1usagecostgetforcategorypostraw)
- [apiV1UsageCostGetForResourceGroupPost](UsageCostApi.md#apiv1usagecostgetforresourcegrouppost)
- [apiV1UsageCostGetForResourceGroupPostRaw](UsageCostApi.md#apiv1usagecostgetforresourcegrouppostraw)
- [apiV1UsageCostGetForSubcategoryPost](UsageCostApi.md#apiv1usagecostgetforsubcategorypost)
- [apiV1UsageCostGetForSubcategoryPostRaw](UsageCostApi.md#apiv1usagecostgetforsubcategorypostraw)
- [apiV1UsageCostGetForSubscriptionPost](UsageCostApi.md#apiv1usagecostgetforsubscriptionpost)
- [apiV1UsageCostGetForSubscriptionPostRaw](UsageCostApi.md#apiv1usagecostgetforsubscriptionpostraw)
- [apiV1UsageCostGetForSubscriptionResourceGroupsPost](UsageCostApi.md#apiv1usagecostgetforsubscriptionresourcegroupspost)
- [apiV1UsageCostGetForSubscriptionResourceGroupsPostRaw](UsageCostApi.md#apiv1usagecostgetforsubscriptionresourcegroupspostraw)
- [apiV1UsageCostOrganizationOrganizationIdGet](UsageCostApi.md#apiv1usagecostorganizationorganizationidget)
- [apiV1UsageCostOrganizationOrganizationIdGetRaw](UsageCostApi.md#apiv1usagecostorganizationorganizationidgetraw)
- [request](UsageCostApi.md#request)
- [withMiddleware](UsageCostApi.md#withmiddleware)
- [withPostMiddleware](UsageCostApi.md#withpostmiddleware)
- [withPreMiddleware](UsageCostApi.md#withpremiddleware)

## Constructors

### constructor

• **new UsageCostApi**(`configuration?`)

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

### apiV1UsageCostGetForCategoryPost

▸ **apiV1UsageCostGetForCategoryPost**(`requestParameters`, `initOverrides?`): `Promise`<[`CategoryUsageCost`](../interfaces/CategoryUsageCost.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForCategoryPostRequest`](../interfaces/ApiV1UsageCostGetForCategoryPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`CategoryUsageCost`](../interfaces/CategoryUsageCost.md)[]\>

#### Defined in

[src/apis/UsageCostApi.ts:107](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L107)

___

### apiV1UsageCostGetForCategoryPostRaw

▸ **apiV1UsageCostGetForCategoryPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CategoryUsageCost`](../interfaces/CategoryUsageCost.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForCategoryPostRequest`](../interfaces/ApiV1UsageCostGetForCategoryPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`CategoryUsageCost`](../interfaces/CategoryUsageCost.md)[]\>\>

#### Defined in

[src/apis/UsageCostApi.ts:83](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L83)

___

### apiV1UsageCostGetForResourceGroupPost

▸ **apiV1UsageCostGetForResourceGroupPost**(`requestParameters`, `initOverrides?`): `Promise`<[`ResourceGroupUsageCost`](../interfaces/ResourceGroupUsageCost.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForResourceGroupPostRequest`](../interfaces/ApiV1UsageCostGetForResourceGroupPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ResourceGroupUsageCost`](../interfaces/ResourceGroupUsageCost.md)[]\>

#### Defined in

[src/apis/UsageCostApi.ts:138](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L138)

___

### apiV1UsageCostGetForResourceGroupPostRaw

▸ **apiV1UsageCostGetForResourceGroupPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResourceGroupUsageCost`](../interfaces/ResourceGroupUsageCost.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForResourceGroupPostRequest`](../interfaces/ApiV1UsageCostGetForResourceGroupPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`ResourceGroupUsageCost`](../interfaces/ResourceGroupUsageCost.md)[]\>\>

#### Defined in

[src/apis/UsageCostApi.ts:114](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L114)

___

### apiV1UsageCostGetForSubcategoryPost

▸ **apiV1UsageCostGetForSubcategoryPost**(`requestParameters`, `initOverrides?`): `Promise`<[`SubcategoryUsageCost`](../interfaces/SubcategoryUsageCost.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForSubcategoryPostRequest`](../interfaces/ApiV1UsageCostGetForSubcategoryPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubcategoryUsageCost`](../interfaces/SubcategoryUsageCost.md)[]\>

#### Defined in

[src/apis/UsageCostApi.ts:169](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L169)

___

### apiV1UsageCostGetForSubcategoryPostRaw

▸ **apiV1UsageCostGetForSubcategoryPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubcategoryUsageCost`](../interfaces/SubcategoryUsageCost.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForSubcategoryPostRequest`](../interfaces/ApiV1UsageCostGetForSubcategoryPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubcategoryUsageCost`](../interfaces/SubcategoryUsageCost.md)[]\>\>

#### Defined in

[src/apis/UsageCostApi.ts:145](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L145)

___

### apiV1UsageCostGetForSubscriptionPost

▸ **apiV1UsageCostGetForSubscriptionPost**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionUsageCost`](../interfaces/SubscriptionUsageCost.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForSubscriptionPostRequest`](../interfaces/ApiV1UsageCostGetForSubscriptionPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionUsageCost`](../interfaces/SubscriptionUsageCost.md)[]\>

#### Defined in

[src/apis/UsageCostApi.ts:200](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L200)

___

### apiV1UsageCostGetForSubscriptionPostRaw

▸ **apiV1UsageCostGetForSubscriptionPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionUsageCost`](../interfaces/SubscriptionUsageCost.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForSubscriptionPostRequest`](../interfaces/ApiV1UsageCostGetForSubscriptionPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionUsageCost`](../interfaces/SubscriptionUsageCost.md)[]\>\>

#### Defined in

[src/apis/UsageCostApi.ts:176](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L176)

___

### apiV1UsageCostGetForSubscriptionResourceGroupsPost

▸ **apiV1UsageCostGetForSubscriptionResourceGroupsPost**(`requestParameters`, `initOverrides?`): `Promise`<[`SubscriptionResourceGroupUsageCost`](../interfaces/SubscriptionResourceGroupUsageCost.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForSubscriptionResourceGroupsPostRequest`](../interfaces/ApiV1UsageCostGetForSubscriptionResourceGroupsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`SubscriptionResourceGroupUsageCost`](../interfaces/SubscriptionResourceGroupUsageCost.md)[]\>

#### Defined in

[src/apis/UsageCostApi.ts:231](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L231)

___

### apiV1UsageCostGetForSubscriptionResourceGroupsPostRaw

▸ **apiV1UsageCostGetForSubscriptionResourceGroupsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionResourceGroupUsageCost`](../interfaces/SubscriptionResourceGroupUsageCost.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostGetForSubscriptionResourceGroupsPostRequest`](../interfaces/ApiV1UsageCostGetForSubscriptionResourceGroupsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`SubscriptionResourceGroupUsageCost`](../interfaces/SubscriptionResourceGroupUsageCost.md)[]\>\>

#### Defined in

[src/apis/UsageCostApi.ts:207](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L207)

___

### apiV1UsageCostOrganizationOrganizationIdGet

▸ **apiV1UsageCostOrganizationOrganizationIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`OrganizationUsageCost`](../interfaces/OrganizationUsageCost.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostOrganizationOrganizationIdGetRequest`](../interfaces/ApiV1UsageCostOrganizationOrganizationIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`OrganizationUsageCost`](../interfaces/OrganizationUsageCost.md)[]\>

#### Defined in

[src/apis/UsageCostApi.ts:271](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L271)

___

### apiV1UsageCostOrganizationOrganizationIdGetRaw

▸ **apiV1UsageCostOrganizationOrganizationIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationUsageCost`](../interfaces/OrganizationUsageCost.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1UsageCostOrganizationOrganizationIdGetRequest`](../interfaces/ApiV1UsageCostOrganizationOrganizationIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`OrganizationUsageCost`](../interfaces/OrganizationUsageCost.md)[]\>\>

#### Defined in

[src/apis/UsageCostApi.ts:238](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/UsageCostApi.ts#L238)

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
