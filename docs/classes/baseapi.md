[@bjerkio/crayon-api](../README.md) / [Exports](../modules.md) / BaseAPI

# Class: BaseAPI

This is the base class for all generated API classes.

## Hierarchy

- **`BaseAPI`**

  ↳ [`ActivityLogsApi`](ActivityLogsApi.md)

  ↳ [`AddressesApi`](AddressesApi.md)

  ↳ [`AgreementProductsApi`](AgreementProductsApi.md)

  ↳ [`AgreementReportsApi`](AgreementReportsApi.md)

  ↳ [`AgreementsApi`](AgreementsApi.md)

  ↳ [`AssetsApi`](AssetsApi.md)

  ↳ [`AwsAccountsApi`](AwsAccountsApi.md)

  ↳ [`AzurePlansApi`](AzurePlansApi.md)

  ↳ [`BillingCyclesApi`](BillingCyclesApi.md)

  ↳ [`BillingStatementsApi`](BillingStatementsApi.md)

  ↳ [`BlogItemsApi`](BlogItemsApi.md)

  ↳ [`ClientsApi`](ClientsApi.md)

  ↳ [`ConsumersApi`](ConsumersApi.md)

  ↳ [`CrayonAccountsApi`](CrayonAccountsApi.md)

  ↳ [`CustomerTenantAgreementsApi`](CustomerTenantAgreementsApi.md)

  ↳ [`CustomerTenantsApi`](CustomerTenantsApi.md)

  ↳ [`CustomerTokenApi`](CustomerTokenApi.md)

  ↳ [`FacebookOrdersApi`](FacebookOrdersApi.md)

  ↳ [`GoogleOrdersApi`](GoogleOrdersApi.md)

  ↳ [`GroupingsApi`](GroupingsApi.md)

  ↳ [`InvoiceProfilesApi`](InvoiceProfilesApi.md)

  ↳ [`ManagementLinksApi`](ManagementLinksApi.md)

  ↳ [`MeApi`](MeApi.md)

  ↳ [`OrganizationAccessApi`](OrganizationAccessApi.md)

  ↳ [`OrganizationsApi`](OrganizationsApi.md)

  ↳ [`PingApi`](PingApi.md)

  ↳ [`ProductContainersApi`](ProductContainersApi.md)

  ↳ [`ProgramsApi`](ProgramsApi.md)

  ↳ [`PublishersApi`](PublishersApi.md)

  ↳ [`RegionsApi`](RegionsApi.md)

  ↳ [`ResellerSalesPricesApi`](ResellerSalesPricesApi.md)

  ↳ [`SecretsApi`](SecretsApi.md)

  ↳ [`SubscriptionsApi`](SubscriptionsApi.md)

  ↳ [`UsageCostApi`](UsageCostApi.md)

  ↳ [`UsersApi`](UsersApi.md)

## Table of contents

### Constructors

- [constructor](BaseAPI.md#constructor)

### Properties

- [configuration](BaseAPI.md#configuration)
- [middleware](BaseAPI.md#middleware)

### Methods

- [clone](BaseAPI.md#clone)
- [createFetchParams](BaseAPI.md#createfetchparams)
- [fetchApi](BaseAPI.md#fetchapi)
- [request](BaseAPI.md#request)
- [withMiddleware](BaseAPI.md#withmiddleware)
- [withPostMiddleware](BaseAPI.md#withpostmiddleware)
- [withPreMiddleware](BaseAPI.md#withpremiddleware)

## Constructors

### constructor

• **new BaseAPI**(`configuration?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration` | [`Configuration`](Configuration.md) |

#### Defined in

[src/runtime.ts:28](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L28)

## Properties

### configuration

• `Protected` **configuration**: [`Configuration`](Configuration.md)

___

### middleware

• `Private` **middleware**: [`Middleware`](../interfaces/Middleware.md)[]

#### Defined in

[src/runtime.ts:26](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L26)

## Methods

### clone

▸ `Private` **clone**<`T`\>(): `T`

Create a shallow clone of `this` by constructing a new instance
and then shallow cloning data members.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`BaseAPI`](BaseAPI.md)<`T`\> |

#### Returns

`T`

#### Defined in

[src/runtime.ts:108](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L108)

___

### createFetchParams

▸ `Private` **createFetchParams**(`context`, `initOverrides?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | [`RequestOpts`](../interfaces/RequestOpts.md) |
| `initOverrides?` | `RequestInit` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `init` | `Object` |
| `init.body` | `any` |
| `init.cache?` | `RequestCache` |
| `init.credentials` | `RequestCredentials` |
| `init.headers` | [`HTTPHeaders`](../modules.md#httpheaders) \| `HeadersInit` |
| `init.integrity?` | `string` |
| `init.keepalive?` | `boolean` |
| `init.method` | `string` |
| `init.mode?` | `RequestMode` |
| `init.redirect?` | `RequestRedirect` |
| `init.referrer?` | `string` |
| `init.referrerPolicy?` | `ReferrerPolicy` |
| `init.signal?` | `AbortSignal` |
| `init.window?` | `any` |
| `url` | `string` |

#### Defined in

[src/runtime.ts:57](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L57)

___

### fetchApi

▸ `Private` **fetchApi**(`url`, `init`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `init` | `RequestInit` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/runtime.ts:80](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L80)

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

#### Defined in

[src/runtime.ts:38](https://github.com/bjerkio/crayon-api-js/blob/22cd66d/src/runtime.ts#L38)
