[@bjerkio/crayon-api - v0.0.0](../README.md) › [BillingCyclesApi](billingcyclesapi.md)

# Class: BillingCyclesApi

BillingCyclesApi - object-oriented interface

**`export`** 

**`class`** BillingCyclesApi

**`extends`** {BaseAPI}

## Hierarchy

* [BaseAPI](baseapi.md)

  ↳ **BillingCyclesApi**

## Index

### Constructors

* [constructor](billingcyclesapi.md#constructor)

### Properties

* [basePath](billingcyclesapi.md#protected-basepath)
* [configuration](billingcyclesapi.md#protected-configuration)
* [fetch](billingcyclesapi.md#protected-fetch)

### Methods

* [getAllBillingCycles](billingcyclesapi.md#getallbillingcycles)
* [getByProductVariantId](billingcyclesapi.md#getbyproductvariantid)
* [getCspNameDictionary](billingcyclesapi.md#getcspnamedictionary)

## Constructors

###  constructor

\+ **new BillingCyclesApi**(`configuration?`: [Configuration](configuration.md), `basePath`: string, `fetch`: [FetchAPI](../interfaces/fetchapi.md)): *[BillingCyclesApi](billingcyclesapi.md)*

*Inherited from [BaseAPI](baseapi.md).[constructor](baseapi.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`configuration?` | [Configuration](configuration.md) | - |
`basePath` | string |  BASE_PATH |
`fetch` | [FetchAPI](../interfaces/fetchapi.md) |  portableFetch |

**Returns:** *[BillingCyclesApi](billingcyclesapi.md)*

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

###  getAllBillingCycles

▸ **getAllBillingCycles**(`includeUnknown?`: boolean, `options?`: any): *Promise‹[ApiCollectionOfBillingCycle](../interfaces/apicollectionofbillingcycle.md)›*

**`throws`** {RequiredError}

**`memberof`** BillingCyclesApi

**Parameters:**

Name | Type |
------ | ------ |
`includeUnknown?` | boolean |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfBillingCycle](../interfaces/apicollectionofbillingcycle.md)›*

___

###  getByProductVariantId

▸ **getByProductVariantId**(`productVariantId`: number, `options?`: any): *Promise‹[ApiCollectionOfBillingCycle](../interfaces/apicollectionofbillingcycle.md)›*

**`throws`** {RequiredError}

**`memberof`** BillingCyclesApi

**Parameters:**

Name | Type |
------ | ------ |
`productVariantId` | number |
`options?` | any |

**Returns:** *Promise‹[ApiCollectionOfBillingCycle](../interfaces/apicollectionofbillingcycle.md)›*

___

###  getCspNameDictionary

▸ **getCspNameDictionary**(`options?`: any): *Promise‹object›*

**`throws`** {RequiredError}

**`memberof`** BillingCyclesApi

**Parameters:**

Name | Type |
------ | ------ |
`options?` | any |

**Returns:** *Promise‹object›*
