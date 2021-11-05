[@bjerkio/crayon-api - v0.0.0](../README.md) › [CustomerTenantsApi](customertenantsapi.md)

# Class: CustomerTenantsApi

CustomerTenantsApi - object-oriented interface

**`export`** 

**`class`** CustomerTenantsApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **CustomerTenantsApi**

## Index

### Constructors

* [constructor](customertenantsapi.md#constructor)

### Properties

* [basePath](customertenantsapi.md#protected-basepath)
* [configuration](customertenantsapi.md#protected-configuration)
* [fetch](customertenantsapi.md#protected-fetch)

### Methods

* [addExisting](customertenantsapi.md#addexisting)
* [deleteCustomerById](customertenantsapi.md#deletecustomerbyid)
* [get](customertenantsapi.md#get)
* [getAzurePlan](customertenantsapi.md#getazureplan)
* [getCustomerTenantById](customertenantsapi.md#getcustomertenantbyid)
* [getCustomerTenantDetailedById](customertenantsapi.md#getcustomertenantdetailedbyid)
* [post](customertenantsapi.md#post)
* [put](customertenantsapi.md#put)

## Constructors

###  constructor

\+ **new CustomerTenantsApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[CustomerTenantsApi](customertenantsapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[CustomerTenantsApi](customertenantsapi.md)*

## Properties

### `Protected` basePath

• **basePath**: *string*

*Inherited from [BaseAPI](baseapi.md).[basePath](baseapi.md#protected-basepath)*

___

### `Protected` configuration

• **configuration**: *[Configuration](configuration.md)*

*Inherited from [BaseAPI](baseapi.md).[configuration](baseapi.md#protected-configuration)*

___

### `Protected` fetch

• **fetch**: *[FetchAPI](../interfaces/fetchapi.md)*

*Inherited from [BaseAPI](baseapi.md).[fetch](baseapi.md#protected-fetch)*

## Methods

###  addExisting

▸ **addExisting**(`existingTenant?`: [CustomerTenantDetailed](../interfaces/customertenantdetailed.md), `syncFromPublisher?`: boolean, `options?`: any): *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`existingTenant?` | [CustomerTenantDetailed](../interfaces/customertenantdetailed.md) |
`syncFromPublisher?` | boolean |
`options?` | any |

**Returns:** *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*

___

###  deleteCustomerById

▸ **deleteCustomerById**(`id`: number, `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  get

▸ **get**(`organizationId?`: number, `publisherId?`: number, `programId?`: number, `consumerId?`: number, `domain?`: string, `domainPrefix?`: string, `customerTenantType?`: "None" | "T1" | "T2", `invoiceProfileId?`: number, `page?`: number, `pageSize?`: number, `search?`: string, `options?`: any): *Promise‹[ApiCollectionOfCustomerTenant](../interfaces/apicollectionofcustomertenant.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`organizationId?` | number |
`publisherId?` | number |
`programId?` | number |
`consumerId?` | number |
`domain?` | string |
`domainPrefix?` | string |
`customerTenantType?` | "None" &#124; "T1" &#124; "T2" |
`invoiceProfileId?` | number |
`page?` | number |
`pageSize?` | number |
`search?` | string |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfCustomerTenant](../interfaces/apicollectionofcustomertenant.md)›*

___

###  getAzurePlan

▸ **getAzurePlan**(`customerTenantId`: number, `options?`: any): *Promise‹[AzurePlan](../modules/azureplan.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`customerTenantId` | number |
`options?` | any |

**Returns:** *Promise‹[AzurePlan](../modules/azureplan.md)›*

___

###  getCustomerTenantById

▸ **getCustomerTenantById**(`id`: number, `options?`: any): *Promise‹[CustomerTenant](../modules/customertenant.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[CustomerTenant](../modules/customertenant.md)›*

___

###  getCustomerTenantDetailedById

▸ **getCustomerTenantDetailedById**(`id`: number, `options?`: any): *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*

___

###  post

▸ **post**(`customerTenant?`: [CustomerTenantDetailed](../interfaces/customertenantdetailed.md), `options?`: any): *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`customerTenant?` | [CustomerTenantDetailed](../interfaces/customertenantdetailed.md) |
`options?` | any |

**Returns:** *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*

___

###  put

▸ **put**(`id`: number, `customerTenant?`: [CustomerTenantDetailed](../interfaces/customertenantdetailed.md), `options?`: any): *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*

**`throws`** {RequiredError}

**`memberof`** CustomerTenantsApi

**Parameters:**

Name | Type |
------ | ------ |
`id` | number |
`customerTenant?` | [CustomerTenantDetailed](../interfaces/customertenantdetailed.md) |
`options?` | any |

**Returns:** *Promise‹[CustomerTenantDetailed](../interfaces/customertenantdetailed.md)›*
