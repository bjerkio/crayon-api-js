[@bjerkio/crayon-api - v0.0.0](../README.md) › [AzurePlansApi](azureplansapi.md)

# Class: AzurePlansApi

AzurePlansApi - object-oriented interface

**`export`** 

**`class`** AzurePlansApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **AzurePlansApi**

## Index

### Constructors

* [constructor](azureplansapi.md#constructor)

### Properties

* [basePath](azureplansapi.md#protected-basepath)
* [configuration](azureplansapi.md#protected-configuration)
* [fetch](azureplansapi.md#protected-fetch)

### Methods

* [createSubscription](azureplansapi.md#createsubscription)
* [getSubscriptionById](azureplansapi.md#getsubscriptionbyid)
* [getSubscriptions](azureplansapi.md#getsubscriptions)
* [updateSubscription](azureplansapi.md#updatesubscription)

## Constructors

###  constructor

\+ **new AzurePlansApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[AzurePlansApi](azureplansapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[AzurePlansApi](azureplansapi.md)*

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

###  createSubscription

▸ **createSubscription**(`azurePlanId`: number, `requestBody?`: [CreateAzureSubscriptionRequest](../interfaces/createazuresubscriptionrequest.md), `options?`: any): *Promise‹Response›*

**`throws`** {RequiredError}

**`memberof`** AzurePlansApi

**Parameters:**

Name | Type |
------ | ------ |
`azurePlanId` | number |
`requestBody?` | [CreateAzureSubscriptionRequest](../interfaces/createazuresubscriptionrequest.md) |
`options?` | any |

**Returns:** *Promise‹Response›*

___

###  getSubscriptionById

▸ **getSubscriptionById**(`azurePlanId`: number, `id`: number, `options?`: any): *Promise‹[AzureSubscription](../interfaces/azuresubscription.md)›*

**`throws`** {RequiredError}

**`memberof`** AzurePlansApi

**Parameters:**

Name | Type |
------ | ------ |
`azurePlanId` | number |
`id` | number |
`options?` | any |

**Returns:** *Promise‹[AzureSubscription](../interfaces/azuresubscription.md)›*

___

###  getSubscriptions

▸ **getSubscriptions**(`azurePlanId`: number, `search?`: string, `page?`: number, `pageSize?`: number, `options?`: any): *Promise‹[ApiCollectionOfAzureSubscription](../interfaces/apicollectionofazuresubscription.md)›*

**`throws`** {RequiredError}

**`memberof`** AzurePlansApi

**Parameters:**

Name | Type |
------ | ------ |
`azurePlanId` | number |
`search?` | string |
`page?` | number |
`pageSize?` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfAzureSubscription](../interfaces/apicollectionofazuresubscription.md)›*

___

###  updateSubscription

▸ **updateSubscription**(`azurePlanId`: number, `id`: number, `azureSubscription?`: [PutAzureSubscription](../interfaces/putazuresubscription.md), `options?`: any): *Promise‹[AzureSubscription](../interfaces/azuresubscription.md)›*

**`throws`** {RequiredError}

**`memberof`** AzurePlansApi

**Parameters:**

Name | Type |
------ | ------ |
`azurePlanId` | number |
`id` | number |
`azureSubscription?` | [PutAzureSubscription](../interfaces/putazuresubscription.md) |
`options?` | any |

**Returns:** *Promise‹[AzureSubscription](../interfaces/azuresubscription.md)›*
