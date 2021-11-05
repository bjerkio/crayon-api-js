[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / AzurePlansApi

# Class: AzurePlansApi

## Hierarchy

- [`BaseAPI`](BaseAPI.md)

  ↳ **`AzurePlansApi`**

## Table of contents

### Constructors

- [constructor](AzurePlansApi.md#constructor)

### Properties

- [configuration](AzurePlansApi.md#configuration)

### Methods

- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsGet](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsget)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsGetRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsgetraw)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPut](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidassignuniqueadminput)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPutRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidassignuniqueadminputraw)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPost](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidcancelpost)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPostRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidcancelpostraw)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePost](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidenablepost)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePostRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidenablepostraw)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGet](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidget)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGetRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidgetraw)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPut](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidput)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPutRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidputraw)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatch](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidrenamepatch)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatchRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionsidrenamepatchraw)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsPost](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionspost)
- [apiV1AzurePlansAzurePlanIdAzureSubscriptionsPostRaw](AzurePlansApi.md#apiv1azureplansazureplanidazuresubscriptionspostraw)
- [apiV1AzurePlansAzurePlanIdGet](AzurePlansApi.md#apiv1azureplansazureplanidget)
- [apiV1AzurePlansAzurePlanIdGetRaw](AzurePlansApi.md#apiv1azureplansazureplanidgetraw)
- [request](AzurePlansApi.md#request)
- [withMiddleware](AzurePlansApi.md#withmiddleware)
- [withPostMiddleware](AzurePlansApi.md#withpostmiddleware)
- [withPreMiddleware](AzurePlansApi.md#withpremiddleware)

## Constructors

### constructor

• **new AzurePlansApi**(`configuration?`)

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

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsGet

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AzureSubscription`](../interfaces/AzureSubscription.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsGetRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzureSubscription`](../interfaces/AzureSubscription.md)[]\>

#### Defined in

[src/apis/AzurePlansApi.ts:134](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L134)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsGetRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscription`](../interfaces/AzureSubscription.md)[]\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsGetRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscription`](../interfaces/AzureSubscription.md)[]\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:97](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L97)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPut

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPut**(`requestParameters`, `initOverrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPutRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/apis/AzurePlansApi.ts:173](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L173)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPutRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPutRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdAssignUniqueAdminPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`boolean`\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:141](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L141)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPost

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPost**(`requestParameters`, `initOverrides?`): `Promise`<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPostRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>

#### Defined in

[src/apis/AzurePlansApi.ts:209](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L209)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPostRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPostRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdCancelPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:180](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L180)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePost

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePost**(`requestParameters`, `initOverrides?`): `Promise`<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePostRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>

#### Defined in

[src/apis/AzurePlansApi.ts:245](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L245)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePostRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePostRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdEnablePostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:216](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L216)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGet

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGetRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>

#### Defined in

[src/apis/AzurePlansApi.ts:281](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L281)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGetRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGetRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:252](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L252)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPut

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPut**(`requestParameters`, `initOverrides?`): `Promise`<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPutRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>

#### Defined in

[src/apis/AzurePlansApi.ts:320](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L320)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPutRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPutRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPutRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdPutRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscription`](../interfaces/AzureSubscription.md)\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:288](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L288)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatch

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatch**(`requestParameters`, `initOverrides?`): `Promise`<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatchRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>

#### Defined in

[src/apis/AzurePlansApi.ts:359](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L359)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatchRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatchRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatchRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsIdRenamePatchRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzureSubscriptionUpdated`](../interfaces/AzureSubscriptionUpdated.md)\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:327](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L327)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsPost

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsPost**(`requestParameters`, `initOverrides?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsPostRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/apis/AzurePlansApi.ts:394](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L394)

___

### apiV1AzurePlansAzurePlanIdAzureSubscriptionsPostRaw

▸ **apiV1AzurePlansAzurePlanIdAzureSubscriptionsPostRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdAzureSubscriptionsPostRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdAzureSubscriptionsPostRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<`void`\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:366](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L366)

___

### apiV1AzurePlansAzurePlanIdGet

▸ **apiV1AzurePlansAzurePlanIdGet**(`requestParameters`, `initOverrides?`): `Promise`<[`AzurePlan`](../interfaces/AzurePlan.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdGetRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`AzurePlan`](../interfaces/AzurePlan.md)\>

#### Defined in

[src/apis/AzurePlansApi.ts:425](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L425)

___

### apiV1AzurePlansAzurePlanIdGetRaw

▸ **apiV1AzurePlansAzurePlanIdGetRaw**(`requestParameters`, `initOverrides?`): `Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzurePlan`](../interfaces/AzurePlan.md)\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestParameters` | [`ApiV1AzurePlansAzurePlanIdGetRequest`](../interfaces/ApiV1AzurePlansAzurePlanIdGetRequest.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Promise`<[`ApiResponse`](../interfaces/ApiResponse.md)<[`AzurePlan`](../interfaces/AzurePlan.md)\>\>

#### Defined in

[src/apis/AzurePlansApi.ts:400](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/apis/AzurePlansApi.ts#L400)

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
